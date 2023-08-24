import { Link } from "./AuthNav.styled";

export default function AuthNav() {
    return (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
        </div>
    )
}
