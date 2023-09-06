import React from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel, StyledInput } from '../ContactForm/ContactForm.styled';
import { useState } from 'react';
import { register } from 'redux/auth/authOperations';
import { useAppDispatch } from 'redux/hooks';
import Button from 'components/Button/Button';

export default function RegisterForm() {

    const [name, setUserName] = useState("");  
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
        case 'name':
            return setUserName(event.target.value);
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
        const registerData = { 'name': name, 'email': email, "password": password };
        dispatch(register(registerData));
        setUserName("");
        setEmail("");
        setPassword("");
    }

    return (
        <StyledForm onSubmit={handleSubmit} >
            <StyledLabel> Name
                <StyledInput
                    id = {nanoid()}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </StyledLabel>
            <StyledLabel> Email
                <StyledInput
                    id = {nanoid()}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    // pattern=".+@globex\.com"
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
                    minLength={8}
                    required
                />
            </StyledLabel>
            <Button type="submit">Register</Button>
        </StyledForm>
    )
}
