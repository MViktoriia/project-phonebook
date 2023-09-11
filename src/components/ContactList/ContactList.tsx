import ContactItem from "../ContactItem/ContactItem";
// redux
import { removeContact } from "redux/contacts/items/itemsOperations";
import { getFilteredContacts } from "redux/contacts/items/itemsSelectors";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { StyledList } from "./ContactList.styled";

const ContactList = () => {
    const filteredContacts = useAppSelector(getFilteredContacts);
    const dispatch = useAppDispatch();

    const onRemoveContact = (id: string) => {
        const action = removeContact(id);
        dispatch(action);
    };


    return (
        filteredContacts.length ? <StyledList>
            {filteredContacts.map(({id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} onClick={onRemoveContact} />
            ))}
        </StyledList> : <p>Sorry, no contacts match the filter</p>
    );
};


export default ContactList;