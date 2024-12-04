import {JwtPayload} from "jwt-decode";
import {cartItem} from "@/components/Header/api/fetchCartItems";
import {OrderInterface} from "@/components/CartDescription/api/createOrderApi";

export enum UserRoles {
    ADMIN =  'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
}

export enum UserModalType {
    AUTH_MODAL = 'auth_modal',
    REGISTER_MODAL = 'register_modal',
}

export interface UserSliceSchema {
    isAuth: boolean;
    role: UserRoles;
    modalIsOpen: boolean;
    modalType?: UserModalType;
    searchIsOpen: boolean;
    cartItems: cartItem[]
    activeCartCheckboxes: Record<number, boolean>;
    lastOrderDetails?: OrderInterface;
    isMobileFilterOpen: boolean;
    loginError?: string;
    loginIsLoading: boolean;
}

export interface tokenInfoTypes extends JwtPayload {
    id: number,
    username: string,
    role: UserRoles,
}


