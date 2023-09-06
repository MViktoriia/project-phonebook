import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel, StyledInput } from './ContactForm.styled';
import { useState } from "react";
// redux

import { getContacts } from "redux/contacts/items/itemsSelectors";
import { addContact } from "redux/contacts/items/itemsOperations";
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Button from 'components/Button/Button';


function ContactForm() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const contacts = useAppSelector(getContacts);
    const dispatch = useAppDispatch();

    const isDuplicate = ({ name } : {name :string}) => {
        return contacts.find(item => item.name === name);
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        switch (event.target.name) {
            case 'name':
                return setName(event.target.value);
            case 'number':
                return setNumber(event.target.value);
            default:
                return;
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const contact = { 'name': name, 'number': number };
        if (isDuplicate(contact)) {
            alert(`${contact.name} is already in contacts`)
            return
        };
        const action = addContact(contact);
        dispatch(action);

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
            <Button type="submit">Add contact</Button>
        </StyledForm>
    )   
};

export default ContactForm;