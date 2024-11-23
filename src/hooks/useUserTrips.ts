import { useQuery } from '@tanstack/react-query';
import { getUserTrips } from '../services/restTripsApi';

import { TripWithPhotos } from '@/prisma/types';

export const useUserTrips = (userId: number | null) => {
  const { data, isLoading } = useQuery<TripWithPhotos[]>({
    queryKey: ['userTrips'],
    queryFn: () => getUserTrips(userId as number),
    enabled: userId !== null,
  });

  return { data, isLoading };
};
