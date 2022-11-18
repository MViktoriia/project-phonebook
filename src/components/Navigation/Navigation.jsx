import { Link } from "./Navigation.styled";

export default function Navigation() {
    return (
        <div>
            <Link to="/" end>Home</Link>
            <Link to="/contacts">Contacts</Link>
        </div>
    )
}
