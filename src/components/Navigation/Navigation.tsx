import { useSelector } from "react-redux";
import { getisLoggedInStatus } from "redux/auth/authSelectors";
import { NavList, StyledLink } from "./Navigation.styled";

export default function Navigation() {
    const isLoggedIn = useSelector(getisLoggedInStatus);
    return (
        <NavList>
            <ul><StyledLink to="/" end>Home</StyledLink></ul>
            
            {isLoggedIn && <ul><StyledLink to="/contacts">Contacts</StyledLink></ul>}
        </NavList>
    )
}
