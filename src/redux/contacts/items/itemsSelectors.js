export const getContacts = store => store.contacts.items;


export const getFilteredContacts = ({ contacts }) => {
    const { items, filter } = contacts;
    
    if (!filter) {
        return items;
    }

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = items.filter((item) => {
        const normalizedName = item.name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter);
        return result;
    })

    return filteredContacts;

};

