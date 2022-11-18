import { Link } from "./AuthNav.styled";

export default function AuthNav() {
    return (
        <div>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}
