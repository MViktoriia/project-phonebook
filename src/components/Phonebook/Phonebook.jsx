import { StyledPhonebook } from './Phonebook.styled';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

// redux
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/items/itemsSelectors";

export function Phonebook() {
    const contacts = useSelector(getContacts);    

    return (
        <StyledPhonebook>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>            
            {contacts.length !== 0 ? <div><Filter/><ContactList/> </div> : <p>There are no contacts in your Phonebook. Please add contact.</p>}
        </StyledPhonebook>
    )
};