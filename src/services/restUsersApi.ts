import axios from 'axios';

import { UserWithTripsAndCountries } from '@/prisma/types';

export const getAllUsers = async (): Promise<UserWithTripsAndCountries[]> => {
  const response = await axios.get<UserWithTripsAndCountries[]>(`http://localhost:3000/api/users`);
  return response.data;
};

export const getUserStats = async (id: string) => {
  const response = await axios.get(`http://localhost:3000/api/users/${id}`);
  return response.data;
};
