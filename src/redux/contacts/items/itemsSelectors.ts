import { RootState } from "redux/store";


export const getContacts = (store: RootState) => store.contacts.items;
export const getIsLoading = (store: RootState) => store.contacts.isLoading;
export const getError = (store: RootState) => store.contacts.error;


export const getFilteredContacts = (store: RootState) => {
    const { contacts, filter } = store;
    
    if (!filter) {
        return contacts.items;
    }

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.items.filter((item) => {
        const normalizedName = item.name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter);
        return result;
    })

    return filteredContacts;

};

