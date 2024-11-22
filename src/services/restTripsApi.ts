import axios from 'axios';

import { TripWithPhotos } from '@/prisma/types';

export const getTripData = async (id: string): Promise<TripWithPhotos> => {
  const response = await axios.get<TripWithPhotos>(`http://localhost:3000/api/trips/${id}`);
  return response.data;
};
