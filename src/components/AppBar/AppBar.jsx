import AuthNav from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getisLoggedInStatus } from "redux/auth/authSelectors";
import { StyledNav } from "./AppBar.styled";

export default function AppBar() {
    const isLoggedIn = useSelector(getisLoggedInStatus);
    return (
        <header>
            <StyledNav>
                <Navigation/>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}              
            </StyledNav>
        </header>
    )
}
