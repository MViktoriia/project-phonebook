import AuthNav from "components/AuthNav/AuthNav";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { getisLoggedInStatus } from "redux/auth/authSelectors";
import { StyledNav, StyledHeader } from "./AppBar.styled";
import { useAppSelector } from "redux/hooks";
import Container from "components/Container/Container";
import Logo from "components/Logo/Logo";


export default function AppBar() {
    const isLoggedIn = useAppSelector(getisLoggedInStatus);
    return (
        <StyledHeader>
            <Container>
                <StyledNav>
                    <Logo/>
                    <Navigation/>           
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}              
                </StyledNav>
            </Container>
        </StyledHeader>
    )
}
