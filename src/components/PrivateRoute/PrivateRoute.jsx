import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getisLoggedInStatus, getLoadingUserStatus } from "redux/auth/authSelectors";
import PropTypes from "prop-types";


export default function PrivateRoute({ component: Component, redirectTo = "/" }) {
    const isLoggedIn = useSelector(getisLoggedInStatus);
    const isLoadingUser = useSelector(getLoadingUserStatus);
    const shouldRedirect = !isLoggedIn && !isLoadingUser;
    return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;   
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    redirectTo: PropTypes.string.isRequired,
}

