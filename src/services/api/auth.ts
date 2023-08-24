import axios from "axios";

const BASE_URL = 'https://connections-api.herokuapp.com/';

const instance = axios.create({
    baseURL: BASE_URL,
});

const token = {
    set(token: string) {
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        instance.defaults.headers.common.Authorization = "";
    }
};

export const register = async (signupData: {name: string; email: string; password: string}) => {
    const  response = await instance.post("/users/signup", signupData);
    console.log(response);
    const {data} = response;
    token.set(data.token);
    return data;
}

export const login = async (loginData: {email: string; password: string}) => {
    const { data } = await instance.post("/users/login", loginData);
    token.set(data.token);
    return data;
}

export const logout = async () => {
    const { data } = await instance.post("/users/logout");
    token.unset();
    return data;
}

export const getCurrentUser = async (persistedToken: string) => {
    token.set(persistedToken);
    const data = await instance.get("/users/current");
    return data;
}

export default instance;
