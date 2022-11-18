import React from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from '../ContactForm/ContactForm.styled';

export default function RegisterForm() {
    return (
        <StyledForm onSubmit >
            <StyledLabel> Username
                <StyledInput
                    id = {nanoid()}
                    type="text"
                    name="username"
                    value
                    onChange
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </StyledLabel>
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
