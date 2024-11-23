import { useQuery } from '@tanstack/react-query';
import { getUserStats } from '../services/restUsersApi';

import { UserWithTripsAndCountries } from '@/prisma/types';

export const useUserStats = (identifier: string) => {
  const { data, isLoading } = useQuery<UserWithTripsAndCountries>({
    queryKey: ['user'],
    queryFn: () => getUserStats(identifier),
  });

  return { data, isLoading };
};
