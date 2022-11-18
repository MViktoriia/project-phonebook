import { StyledForm, StyledLabel, StyledInput, StyledButton } from '../ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';
export default function LoginForm() {

    return (
        <StyledForm onSubmit >
            <StyledLabel> Email
                <StyledInput
                    id = {nanoid()}
                    type="email"
                    name="email"
                    value
                    onChange
                    pattern=".+@globex\.com"
                    required
                    />
            </StyledLabel>
            <StyledLabel> Password
                <StyledInput
                    id = {nanoid()}
                    type="password"
                    name="password"
                    value
                    onChange
                    minlength="8"
                    required
                />
            </StyledLabel>
            <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
    )
}
