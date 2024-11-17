import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {tokenInfoTypes, UserModalType, UserRoles, UserSliceSchema} from "./UserSliceSchema";
import {USER_ACCESS_TOKEN_KEY} from "@/const/localStorage";
import {jwtDecode} from "jwt-decode";
import {UserData} from "../services/loginByUsername";
import {cartItem} from "@/components/Header/api/fetchCartItems";


const initialState: UserSliceSchema = {
    isAuth: false,
    role: UserRoles.GUEST,
    modalIsOpen: false,
    searchIsOpen: false,
    cartItems: []
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
    },
});

export const { actions: UserSliceActions } = UserSlice;
export const { reducer: UserSliceReducer } = UserSlice;
