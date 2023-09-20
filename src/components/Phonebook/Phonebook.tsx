import { AddContactButton, StyledPhonebook } from './Phonebook.styled';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
// redux
import { getContacts, getIsLoading, getError } from "redux/contacts/items/itemsSelectors";
import { fetchContacts } from 'redux/contacts/items/itemsOperations';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Modal from 'components/Modal/Modal';


export function Phonebook() {
    const contacts = useAppSelector(getContacts);
    const isLoading = useAppSelector(getIsLoading);
    const error = useAppSelector(getError);
    const dispatch = useAppDispatch();

    const [isModalShown, setIsModalShown] = useState(false);

    const onModalOpen = () => {
        setIsModalShown(true)
;    }

    const onModalClose = () => {
        setIsModalShown(false);
    }
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <StyledPhonebook>
            <AddContactButton onClick={onModalOpen}></AddContactButton>
            <h2>Contacts</h2>
            {isLoading && <RotatingLines strokeColor="grey" width="50"/> }
            {contacts.length ? <div><Filter /><ContactList /> </div> : <p>There are no contacts in your Phonebook.</p>}
            {error && <p>Something went wrong. We are working on it.</p>} 
            {isModalShown && <Modal onClose = {onModalClose}><ContactForm setModalOpen={setIsModalShown}/></Modal>}           
        </StyledPhonebook>
    )
};