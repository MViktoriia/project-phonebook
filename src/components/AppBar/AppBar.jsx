import AuthNav from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { StyledNav } from "./AppBar.styled";

export default function AppBar() {
    return (
        <header>
            <StyledNav>
                <Navigation/>
                <AuthNav/>              
                <UserMenu/>
            </StyledNav>
        </header>
    )
}
