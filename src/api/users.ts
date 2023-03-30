import axios from 'axios';
import { User } from '../types/User';


const BASE_URL = 'https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const createUser = async (user: User): Promise<User> => {
  const { data } = await axios.post(BASE_URL, user);
  return data;
};

export const updateUser = async (user: User): Promise<User> => {
  const { data } = await axios.put(`${BASE_URL}/${user.id}`, user);
  return data;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
export const getUserById = async (id: string): Promise<User> => {
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  return data;
};