import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getisLoggedInStatus, getLoadingUserStatus } from "redux/auth/authSelectors"


export default function PrivateRoute({ component: Component, redirectTo = "/" }) {
    const isLoggedIn = useSelector(getisLoggedInStatus);
    const isLoadingUser = useSelector(getLoadingUserStatus);
    const shouldRedirect = !isLoggedIn && !isLoadingUser;
    return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;   
};

