import axios from 'axios';

import { TripWithPhotos } from '@/prisma/types';
import { TripData } from '../types/trip';

export const getTripData = async (tripId: string): Promise<TripWithPhotos> => {
  const response = await axios.get<TripWithPhotos>(`http://localhost:3000/api/trips/${tripId}`);
  return response.data;
};

export const getUserTrips = async (userId: number): Promise<TripWithPhotos[]> => {
  const response = await axios.get<TripWithPhotos[]>(`http://localhost:3000/api/trips`, {
    params: { userId },
  });
  return response.data;
};

export const addTrip = async (data: TripData) => {
  const response = await axios.post(`http://localhost:3000/api/trips`, data);
  return response.data;
};
