import axios from 'axios';

import { User } from '@prisma/client';

export const getAllPhotos = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`http://localhost:3000/api/photos`);
  return response.data;
};

export const uploadPhoto = async (data: FormData) => {
  const response = await axios.post('http://localhost:3000/api/photos', data);
  return response.data;
};
