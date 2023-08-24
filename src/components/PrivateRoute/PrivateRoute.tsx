import { Navigate } from "react-router-dom";
import { getisLoggedInStatus, getLoadingUserStatus } from "redux/auth/authSelectors";
import { useAppSelector } from "redux/hooks";


type Props = {
    component: React.FC;
    redirectTo: string;
};


export default function PrivateRoute({ component: Component, redirectTo = "/" }: Props) {
    const isLoggedIn = useAppSelector(getisLoggedInStatus);
    const isLoadingUser = useAppSelector(getLoadingUserStatus);
    const shouldRedirect = !isLoggedIn && !isLoadingUser;
    return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;   
};


