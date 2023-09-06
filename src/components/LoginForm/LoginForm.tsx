import Button from 'components/Button/Button';
import { StyledForm, StyledLabel, StyledInput} from '../ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { login } from 'redux/auth/authOperations';
import { useAppDispatch } from 'redux/hooks';

export default function LoginForm() {  
    
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case 'email':
                return setEmail(event.target.value);
            case 'password':
                return setPassword(event.target.value);
            default:
                return;
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const authData = { 'email': email, "password": password };

        dispatch(login(authData));

        setEmail("");
        setPassword("");
    }

    return (
        <StyledForm onSubmit={handleSubmit} >
            <StyledLabel> Email
                <StyledInput
                    id = {nanoid()}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                    />
            </StyledLabel>
            <StyledLabel> Password
                <StyledInput
                    id = {nanoid()}
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
            </StyledLabel>
            <Button type="submit">Log in</Button>
        </StyledForm>
    )
};
