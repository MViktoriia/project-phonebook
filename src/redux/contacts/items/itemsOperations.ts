import * as api from "services/api/contactsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactItem } from "./itemsSlice";

export type ErrorWithStatus = {
    name: string;
    status: number;
    message: string;
}


export const fetchContacts = createAsyncThunk<ContactItem[], void, {rejectValue: ErrorWithStatus} >("contacts/fetchContacts", async (_, {rejectWithValue}) => {
    try {
        const response = await api.getContacts();
        return response as ContactItem[];
    } catch ( error ) {
        // const error = {
        //     name: response.name,
        //     status: response.status,
        //     message: response.data.message,
        // }
        return rejectWithValue(error as ErrorWithStatus);
    }
});

export const addContact = createAsyncThunk<ContactItem, {name: string, number: string}, {rejectValue: ErrorWithStatus }>("contacts/add", async (data, thunkAPI) => {
    try {
        const result = await api.addContact(data);
        return result as ContactItem;
    } catch ( error ) {
        // const error: ErrorWithStatus = {
        //     name: response.name,
        //     status: response.status,
        //     message: response.data.message,
        // }
        return thunkAPI.rejectWithValue(error as ErrorWithStatus);
    }
});

export const removeContact = createAsyncThunk<string, string, {rejectValue: ErrorWithStatus}>("contacts/remove", async (id, thunkAPI) => {
    try {
        await api.removeContact(id);
        return id;
    } catch ( error ) {
        // const error = {
        //     name: response.name,
        //     status: response.status,
        //     message: response.data.message,
        // }
        return thunkAPI.rejectWithValue(error as ErrorWithStatus);
    }
});
