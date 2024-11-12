import {JwtPayload} from "jwt-decode";

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
}

export interface tokenInfoTypes extends JwtPayload {
    id: number,
    username: string,
    role: UserRoles,
}


