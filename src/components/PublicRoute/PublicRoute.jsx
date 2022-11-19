import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getisLoggedInStatus } from "redux/auth/authSelectors";
import PropTypes from "prop-types";


export default function PublicRoute({ component: Component, redirectTo = "/" }) {
    const isLoggedIn = useSelector(getisLoggedInStatus);
    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;   
}

PublicRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    redirectTo: PropTypes.string.isRequired,
}