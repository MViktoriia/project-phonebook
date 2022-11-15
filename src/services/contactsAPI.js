import axios from "axios";

const BASE_URL = 'https://6372796c348e947299f684f8.mockapi.io/contacts';

const instanceContacts = axios.create({
    baseURL: BASE_URL,
});

export const getContacts = async() => {
    const {data} = await instanceContacts.get("/");
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await instanceContacts.post("/", data);
    return result;
}

export const removeContact = async(id) => {
    const {data} = await instanceContacts.delete(`/${id}`);
    return data;
}