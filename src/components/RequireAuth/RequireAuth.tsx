import {ReactNode, useEffect} from "react";
import {UserRoles} from "@/store/reducers/UserSliceSchema";
import {useSelector} from "react-redux";
import {getUserAuth, getUserRole} from "@/store/selectors/getUserValues";
import {Navigate, useLocation} from "react-router-dom";

interface RequireAuthProps {
    children: ReactNode;
    role: UserRoles;
}

export const RequireAuth = (props: RequireAuthProps) => {
    const { role, children } = props;

    const isAuth = useSelector(getUserAuth)
    const CurrentUserRole = useSelector(getUserRole)
    const location = useLocation()

    useEffect(() => {
        console.log(isAuth);
    }, []);

    if (!isAuth && CurrentUserRole !== role) {
        return (
            <Navigate to={'/'} state={{ from: location }} replace/>
        )
    }
    return (
        <>{children}</>
    )
};
