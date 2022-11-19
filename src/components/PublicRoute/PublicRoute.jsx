import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getisLoggedInStatus } from "redux/auth/authSelectors"


export default function PublicRoute({ component: Component, redirectTo = "/" }) {
    const isLoggedIn = useSelector(getisLoggedInStatus);
    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;   
}
