import AuthNav from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getisLoggedInStatus } from "redux/auth/authSelectors";
import { StyledNav, StyledHeader } from "./AppBar.styled";

export default function AppBar() {
    const isLoggedIn = useSelector(getisLoggedInStatus);
    return (
        <StyledHeader>
            <StyledNav>
                <Navigation/>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}              
            </StyledNav>
        </StyledHeader>
    )
}
