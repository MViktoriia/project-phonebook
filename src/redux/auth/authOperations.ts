import * as api from "services/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, authState } from "./authSlice";
import { AxiosError } from "axios";

export type UserData = {
    user: User;
    token: string;
}

export const register = createAsyncThunk< UserData, {name: string; email: string; password: string}, {rejectValue: Error | string}>("auth/register", async (credentials, { rejectWithValue }) => {
    try {
        const data = await api.register(credentials);
        return data as UserData;
    } catch (error) {

        if (error instanceof AxiosError) {
            const result = error.response?.data.message;
            return rejectWithValue(result);
        }
        return rejectWithValue(error as Error);
    }
});

export const login = createAsyncThunk< UserData, {email: string; password: string}, {rejectValue: Error | string}>("auth/login", async (credentials, { rejectWithValue }) => {
    try {
        const data = await api.login(credentials);
        return data as UserData;
    } catch (error) {

        if (error instanceof AxiosError) {
            const result = error.message;
            return rejectWithValue(result);
        }
        return rejectWithValue(error as Error);
    }
});

export const logout = createAsyncThunk<{}, undefined, {rejectValue: Error | string}>("auth/logout", async (_, { rejectWithValue }) => {
    try {
        const data = await api.logout();
        return data;
    } catch (error) {
        console.log(error);
        
    
        if (error instanceof AxiosError) {
            const result = error.response?.data.message;
            return rejectWithValue(result);
        }

    }
})

export const getCurrentUser = createAsyncThunk< User, undefined, {rejectValue: string | Error, state: {auth: authState} } >("auth/current", async(_, { rejectWithValue, getState }) => {
    try {
        const { auth } = getState();
        const persistedToken = auth.token;

        if (!persistedToken) {
            rejectWithValue('Unable to fetch user');
        };
        
        const {data} = await api.getCurrentUser(persistedToken);
        return data as User;
    } catch (error) {
     
        if (error instanceof AxiosError) {
            const result = error.response?.data.message;
            return rejectWithValue(result);
        }
        return rejectWithValue(error as Error);
    }
}
)