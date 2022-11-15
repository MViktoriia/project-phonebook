import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./itemsOperations";

const initialState = {
    items: [],
    isLoading: false,
    error: null
};

const itemsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, {payload}) => {
                state.items = payload;
                state.isLoading = false;
            })
            .addCase(fetchContacts.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(addContact.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, {payload}) => {
                state.items.push(payload);
                state.isLoading = false;
            })
            .addCase(addContact.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(removeContact.pending, (state, _) => {
                state.isLoading = true;
            })
            .addCase(removeContact.fulfilled, (state, {payload}) => {
                state.items = state.items.filter(item => item.id !== payload);
                state.isLoading = false;
            })
            .addCase(removeContact.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            })
    },
});

export default itemsSlice.reducer;
