import axios from 'axios';

import { Photo } from '@prisma/client';

export const getAllPhotos = async (): Promise<Photo[]> => {
  const response = await axios.get<Photo[]>(`http://localhost:3000/api/photos`);
  return response.data;
};

export const uploadPhoto = async (data: FormData) => {
  const response = await axios.post('http://localhost:3000/api/photos', data);
  return response.data;
};
