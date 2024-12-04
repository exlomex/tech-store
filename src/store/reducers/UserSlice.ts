import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {tokenInfoTypes, UserModalType, UserRoles, UserSliceSchema} from "./UserSliceSchema";
import {USER_ACCESS_TOKEN_KEY} from "@/const/localStorage";
import {jwtDecode} from "jwt-decode";
import {loginByUsername, UserData} from "../services/loginByUsername";
import {cartItem} from "@/components/Header/api/fetchCartItems";
import {OrderInterface} from "@/components/CartDescription/api/createOrderApi";


const initialState: UserSliceSchema = {
    isAuth: false,
    role: UserRoles.GUEST,
    modalIsOpen: false,
    searchIsOpen: false,
    cartItems: [],
    activeCartCheckboxes: {},
    isMobileFilterOpen: false,
    loginIsLoading: false,
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth: (state: UserSliceSchema, action: PayloadAction<UserData>) => {
            const accessToken = action.payload.accessToken
            state.isAuth = true;

            const tokenInfo: tokenInfoTypes = jwtDecode(accessToken || '')
            state.role = tokenInfo.role;

            localStorage.setItem(USER_ACCESS_TOKEN_KEY, accessToken);
        },
        logout: (state: UserSliceSchema) => {
            state.isAuth = false;
            state.role = UserRoles.GUEST;
            localStorage.removeItem(USER_ACCESS_TOKEN_KEY);
        },
        initAuth: (state: UserSliceSchema) => {
            const token = localStorage.getItem(USER_ACCESS_TOKEN_KEY);
            if (token) {
                state.isAuth = true;

                const tokenInfo: tokenInfoTypes = jwtDecode(token || '')
                state.role = tokenInfo.role;
            }
        },
        setModalIsOpen: (state: UserSliceSchema, action: PayloadAction<boolean>) => {
            state.modalIsOpen = action.payload;
        },
        setModalType: (state: UserSliceSchema, action: PayloadAction<UserModalType>) => {
            state.modalType = action.payload;
        },
        setSearchIsOpen: (state: UserSliceSchema, action: PayloadAction<boolean>) => {
            state.searchIsOpen = action.payload;
        },
        setCartItems: (state: UserSliceSchema, action: PayloadAction<cartItem[]>) => {
            state.cartItems = action.payload;
        },
        clearCartItems: (state: UserSliceSchema) => {
            state.cartItems = []
        },
        toggleActiveCartCheckbox: (state: UserSliceSchema, action: PayloadAction<number>) => {
            if (state.activeCartCheckboxes[action.payload]) {
                state.activeCartCheckboxes[action.payload] = !state.activeCartCheckboxes[action.payload]
            } else {
                state.activeCartCheckboxes[action.payload] = true
            }
        },
        toggleAllActiveCartCheckboxes: (state: UserSliceSchema) => {
            const totalOfActiveCheckboxes = Object.keys(state.activeCartCheckboxes)
                .reduce((acc, currentValue) => {
                    if (state.activeCartCheckboxes[+currentValue]) return acc += 1;
                    return acc
                }, 0)


            if (totalOfActiveCheckboxes === state.cartItems.length) {state.activeCartCheckboxes = []}
            else {state.cartItems.forEach(cartItem => state.activeCartCheckboxes[cartItem.id] = true)}
        },
        setLastOrderDetails: (state: UserSliceSchema, action: PayloadAction<OrderInterface>) => {state.lastOrderDetails = action.payload},
        toggleMobileFilterOpen: (state: UserSliceSchema) => {state.isMobileFilterOpen = !state.isMobileFilterOpen}
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.loginError = undefined;
                state.loginIsLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.loginIsLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.loginIsLoading = false;
                state.loginError = action.payload;
            });
    },
});

export const { actions: UserSliceActions } = UserSlice;
export const { reducer: UserSliceReducer } = UserSlice;
