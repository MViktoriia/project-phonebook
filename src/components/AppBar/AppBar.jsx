import UserMenu from "components/UserMenu/UserMenu";
import { StyledNav, Link } from "./AppBar.styled";

export default function AppBar() {
    return (
        <header>
            <StyledNav>
                <div>
                    <Link to="/" end>Home</Link>
                    <Link to="/contacts">Contacts</Link> 
                </div>
                <div>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>               
                <UserMenu/>
            </StyledNav>
        </header>
    )
}
