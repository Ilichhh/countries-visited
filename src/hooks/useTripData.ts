import { useQuery } from '@tanstack/react-query';
import { getTripData } from '../services/restTripsApi';

import { TripWithPhotos } from '@/prisma/types';

export const useTripData = (id: string) => {
  const { data, isLoading } = useQuery<TripWithPhotos>({
    queryKey: ['trip'],
    queryFn: () => getTripData(id),
  });

  return { data, isLoading };
};
