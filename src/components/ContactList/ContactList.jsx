import ContactItem from "../ContactItem/ContactItem";
// redux
import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "redux/contacts/items/itemsOperations";
import { getFilteredContacts } from "redux/contacts/items/itemsSelectors";

const ContactList = () => {
    const filteredContacts = useSelector(getFilteredContacts);
    console.log(filteredContacts);
    const dispatch = useDispatch();

    const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
    };


    return (
        <ul>
            {filteredContacts.map(({id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} onClick={onRemoveContact} />
            ))}
        </ul>
    );
};


export default ContactList;