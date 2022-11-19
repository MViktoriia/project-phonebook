import * as api from "services/api/contactsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkAPI) => {
    try {
        const response = await api.getContacts();
        return response;
    } catch ({ response }) {
        const error = {
            status: response.status,
            message: response.data.message,
        }
        return thunkAPI.rejectWithValue(error);
    }
});

export const addContact = createAsyncThunk("contacts/add", async (data, thunkAPI) => {
    try {
        const result = await api.addContact(data);
        return result;
    } catch ({ response }) {
        const error = {
            status: response.status,
            message: response.data.message,
        }
        return thunkAPI.rejectWithValue(error);
    }
});

export const removeContact = createAsyncThunk("contacts/remove", async (id, thunkAPI) => {
    try {
        await api.removeContact(id);
        return id;
    } catch ({ response }) {
        const error = {
            status: response.status,
            message: response.data.message,
        }
        return thunkAPI.rejectWithValue(error);
    }
});
