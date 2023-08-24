import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, getCurrentUser } from "./authOperations";

export interface User {
    name: string;
    email: string;
}

export interface authState {
    user: User;
    token: string;
    isLoggedIn: boolean;
    loading: boolean;
    isLoadingUser: boolean;
    error: string | Error | null | undefined; // change it!!!
}

const initialState: authState = {
    user: {
        name:"",
        email:""
    },
    token: "",
    isLoggedIn: false,
    loading: false,
    isLoadingUser: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state, _) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, {payload}) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(register.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(login.pending, (state, _) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(logout.pending, (state, _) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.user = {name:'', email:''};
                state.token = "";
                state.isLoggedIn = false;
            })
            .addCase(logout.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(getCurrentUser.pending, (state, _) => {
                state.isLoadingUser = true;
                state.error = null;
            })
            .addCase(getCurrentUser.fulfilled, (state, {payload}) => {
                state.isLoadingUser = false;
                state.user = payload;
                state.isLoggedIn = true;
            })
            .addCase(getCurrentUser.rejected, (state, {payload}) => {
                state.isLoadingUser = false;
                state.error = payload;
            })
    },
})

export default authSlice.reducer;