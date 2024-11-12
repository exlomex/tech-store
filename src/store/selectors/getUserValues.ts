import {createSelector} from "@reduxjs/toolkit";
import {getUser} from "./getUser";
import {UserSliceSchema} from "@/store/reducers/UserSliceSchema";

export const getUserAuth = createSelector(
    getUser,
    (search: UserSliceSchema) => search.isAuth,
);

export const getUserIsModalOpen = createSelector(
    getUser,
    (search: UserSliceSchema) => search.modalIsOpen,
);

export const getUserModalType = createSelector(
    getUser,
    (search: UserSliceSchema) => search.modalType,
);

export const getUserRole = createSelector(
    getUser,
    (search: UserSliceSchema) => search.role,
);