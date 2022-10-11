import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './ContactForm.styled';
import { useState } from "react";
import PropTypes from 'prop-types';

function ContactForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'name':
                return setName(event.target.value);
            case 'number':
                return setNumber(event.target.value);
            default:
                return;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ 'name': name, 'number': number });
        setName("");
        setNumber("");
    }


    return (
        <StyledForm onSubmit = {handleSubmit}>
            <StyledLabel> Name
                <StyledInput
                    id = {nanoid()}
                    type="text"
                    name="name"
                    value={name}
                    onChange = {handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </StyledLabel>
            <StyledLabel> Number
                <StyledInput
                    type="tel"
                    name="number"
                    value={number}
                    onChange= {handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
            </StyledLabel>
            <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
    )   
};


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default ContactForm;