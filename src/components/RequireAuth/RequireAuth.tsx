import {ReactNode, useEffect} from "react";
import {UserRoles} from "@/store/reducers/UserSliceSchema";
import {useSelector} from "react-redux";
import {getUserAuth, getUserRole} from "@/store/selectors/getUserValues";
import {Navigate, useLocation} from "react-router-dom";

interface RequireAuthProps {
    children: ReactNode;
    roles: UserRoles[];
}

export const RequireAuth = (props: RequireAuthProps) => {
    const { roles, children } = props;

    const isAuth = useSelector(getUserAuth)
    const CurrentUserRole = useSelector(getUserRole)
    const location = useLocation()

    if (!isAuth || !(roles.includes(CurrentUserRole))) {

        return (
            <Navigate to={'/'} state={{ from: location }} replace/>
        )
    }
    return (
        <>{children}</>
    )
};
