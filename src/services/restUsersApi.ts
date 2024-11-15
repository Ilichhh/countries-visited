import axios from 'axios';

import { User } from '@prisma/client';
import { TravelData } from '../types/travel';

export const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`http://localhost:3000/api/users`);
  return response.data;
};

export const getUserStats = async (id: string) => {
  const response = await axios.get(`http://localhost:3000/api/users/${id}`);
  return response.data;
};

export const updateUserStats = async (id: string, data: TravelData) => {
  const response = await axios.patch(`http://localhost:3000/api/users/${id}`, data);
  return response.data;
};
