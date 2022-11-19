import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/auth/authOperations";
import { getUser } from "redux/auth/authSelectors";
import { StyledButton, Wrapper } from "./UserMenu.styled";

export default function UserMenu() {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const action = logout();

    return (
        <Wrapper>
            <p>{user.email}</p>
            <StyledButton onClick={()=>{dispatch(action)}}>Log out</StyledButton>
        </Wrapper>
    )
}
