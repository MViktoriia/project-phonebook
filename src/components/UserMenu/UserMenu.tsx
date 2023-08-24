import { logout } from "redux/auth/authOperations";
import { getUser } from "redux/auth/authSelectors";
import { StyledText, Wrapper } from "./UserMenu.styled";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import Button from "components/Button/Button";

export default function UserMenu() {
    const user = useAppSelector(getUser);
    const dispatch = useAppDispatch();
    const action = logout();

    return (
        <Wrapper>
            <StyledText>{user.email}</StyledText>
            <Button onClick={()=>{dispatch(action)}}>Log out</Button>
        </Wrapper>
    )
}
