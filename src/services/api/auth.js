import axios from "axios";

const BASE_URL = 'https://connections-api.herokuapp.com/';

const instance = axios.create({
    baseURL: BASE_URL,
});

const token = {
    set(token) {
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        instance.defaults.headers.common.Authorization = "";
    }
};

export const signup = async (signupData) => {
    const { data } = await instance.post("/users/signup", signupData);
    token.set(data.token);
    return data;
}

export const login = async (loginData) => {
    const { data } = await instance.post("/users/login", loginData);
    token.set(data.token);
    return data;
}

export default instance;
