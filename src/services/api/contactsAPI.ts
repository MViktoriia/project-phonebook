import { ContactItem } from 'redux/contacts/items/itemsSlice';
import instance from './auth';


export const getContacts = async () => {
  const { data }: {data: ContactItem[]} = await instance.get('/contacts');
  return data;
};

export const addContact = async (data: {name: string, number: string}) => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const removeContact = async (id: string) => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
