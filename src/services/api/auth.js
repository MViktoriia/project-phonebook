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

export const register = async (signupData) => {
    const { data } = await instance.post("/users/signup", signupData);
    token.set(data.token);
    return data;
}

export const login = async (loginData) => {
    const { data } = await instance.post("/users/login", loginData);
    token.set(data.token);
    return data;
}

export const logout = async () => {
    const { data } = await instance.post("/users/logout");
    return data;
}

export const getCurrentUser = async (token) => {
    try {
        token.set(token);
        const { data } = await instance.get("/users/current");
        return data;
    } catch (error) {
        token.unset();
        // throw error;
    }
}

export default instance;
