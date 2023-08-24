import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getisLoggedInStatus } from "redux/auth/authSelectors";
import PropTypes from "prop-types";


type Props = {
    component: React.FC;
    redirectTo: string;
};

export default function PublicRoute({ component: Component, redirectTo = "/" }: Props) {
    const isLoggedIn = useSelector(getisLoggedInStatus);
    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;   
}

PublicRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    redirectTo: PropTypes.string.isRequired,
}