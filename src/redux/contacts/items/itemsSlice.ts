import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact, ErrorWithStatus } from './itemsOperations';


export type ContactItem = {
  id: string,
  name: string,
  number: string
}

export type ContactsState = {
    items: ContactItem[];
    isLoading: boolean;
    error: ErrorWithStatus | null | undefined; // changed it!!!!
    
}

const initialState: ContactsState  = {
  items: [],
  isLoading: false,
  error: null,
};

const itemsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeContact.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload);
        state.isLoading = false;
      })
      .addCase(removeContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default itemsSlice.reducer;
