import { StyledPhonebook } from './Phonebook.styled';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilteredContacts } from "redux/contacts/items/itemsSelectors";
import { getFilter } from "redux/contacts/filter/filterSelector";
import { addContact, removeContact } from "redux/contacts/items/itemsSlice";
import { setFilter } from "redux/contacts/filter/filterSlice";



export function Phonebook() {
    const contacts = useSelector(getContacts);
    const filteredContacts = useSelector(getFilteredContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    console.log(contacts);
    console.log(filteredContacts);
    console.log(filter);
    

    const onAddContact = (contact) => {
        if (isDuplicate(contact)) {
            alert(`${contact.name} is already in contacts`)
            return
        };
        const action = addContact(contact);
        dispatch(action);
    };

    const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
    };

    const changeFilter = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
    }

    const isDuplicate = ({ name }) => {
        return contacts.find(item => item.name === name);
    };

    return (
        <StyledPhonebook>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={onAddContact} />
            <h2>Contacts</h2>
            
            {contacts.length !== 0 ? <div><Filter contactName={filter} onFilterChange={changeFilter} /> <ContactList contacts={filteredContacts} removeContact={onRemoveContact} /> </div> : "There are no contacts in your Phonebook. Please add contact."}
        </StyledPhonebook>
    )
};