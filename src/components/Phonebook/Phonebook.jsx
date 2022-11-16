import { StyledPhonebook } from './Phonebook.styled';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
// redux
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getIsLoading, getError } from "redux/contacts/items/itemsSelectors";
import { fetchContacts } from 'redux/contacts/items/itemsOperations';


export function Phonebook() {
    const contacts = useSelector(getContacts);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <StyledPhonebook>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            {isLoading ? <RotatingLines strokeColor="grey" width="50"/> : contacts.length !== 0 ? <div><Filter /><ContactList /> </div> : <p>There are no contacts in your Phonebook.</p>}
            {error && <p>Something went wrong. We are working on it.</p>}            
        </StyledPhonebook>
    )
};