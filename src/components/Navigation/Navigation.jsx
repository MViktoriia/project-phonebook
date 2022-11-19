import { useSelector } from "react-redux";
import { getisLoggedInStatus } from "redux/auth/authSelectors";
import { Link } from "./Navigation.styled";

export default function Navigation() {
    const isLoggedIn = useSelector(getisLoggedInStatus);
    return (
        <div>
            <Link to="/" end>Home</Link>
            {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </div>
    )
}
