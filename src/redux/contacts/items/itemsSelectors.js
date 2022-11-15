export const getContacts = store => store.contacts.items;


export const getFilteredContacts = (store) => {
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

