import * as api from "services/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk("auth/register", async (credentials, { rejectWithValue }) => {
    try {
        const data = await api.register(credentials);
        return data;
    } catch ({ response }) {
        const error = {
            status: response.status,
            message: response.data.message,
        }
        return rejectWithValue(error);
    }
});

export const login = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
    try {
        const data = await api.login(credentials);
        return data;
    } catch ({ response }) {
        const error = {
            status: response.status,
            message: response.data.message,
        }
        return rejectWithValue(error);
    }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
    try {
        const data = await api.logout();
        return data;
    } catch ({response}) {
        const error = {
            status: response.status,
            message: response.data.message
        }
        return rejectWithValue(error);
    }
})

export const getCurrentUser = createAsyncThunk("auth/current", async(_, { rejectWithValue, getState }) => {
    try {
        const { auth } = getState();
        const persistedToken = auth.token;

        if (!persistedToken) {
            console.log("No token");
            rejectWithValue();
        };
        
        const {data} = await api.getCurrentUser(persistedToken);
        return data;
    } catch ({response}) {
        const error = {
            status: response.status,
            message: response.data.message
        }
        return rejectWithValue(error);
    }
    }
)