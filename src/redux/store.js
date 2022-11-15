import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "./contacts/contacts-reducer";
import contacts from "./contacts/items/itemsSlice";
import filter from "./contacts/filter/filterSlice";

export const store = configureStore({
    reducer: {
        contacts,
        filter,
    },
});

export default store;