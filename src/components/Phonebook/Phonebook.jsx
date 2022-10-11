import { nanoid } from "nanoid";
import { StyledPhonebook } from './Phonebook.styled';
import { useState , useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

// const INITIAL_STATE = {
//     contacts: [
//         // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
// }

export function Phonebook() {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        if (contacts && contacts.length) {
            setContacts(contacts);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]); 

    const addContact = (contact) => {

        if (isDuplicate(contact)) {
            alert(`${contact.name} is already in contacts`)
            return
        };

        setContacts((contacts) => {
            const newContact = { id: nanoid(), ...contact }
            return [...contacts, newContact]
        });
    };

    const removeContact = (id) => {
        setContacts((contacts) => contacts.filter((contact) => contact.id !== id))
    };

    const changeFilter = (e) => setFilter(e.currentTarget.value);

    const getNormalizedFilter = () => filter.toLowerCase();

    const isDuplicate = ({ name }) => {
        return contacts.find(item => item.name === name);
    };

    const normalizedFilter = getNormalizedFilter();
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));


    return (
        <StyledPhonebook>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            <h2>Contacts</h2>
            
            {contacts.length !== 0 ? <div><Filter contactName={filter} onFilterChange={changeFilter} /> <ContactList contacts={filteredContacts} removeContact={removeContact} /> </div> : "There are no contacts in your Phonebook. Please add contact."}
        </StyledPhonebook>
    )
};