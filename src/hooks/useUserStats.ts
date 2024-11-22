import { useQuery } from '@tanstack/react-query';
import { getUserStats } from '../services/restUsersApi';

import { UserWithTrips } from '@/prisma/types';

export const useUserStats = (identifier: string) => {
  const { data, isLoading } = useQuery<UserWithTrips>({
    queryKey: ['user'],
    queryFn: () => getUserStats(identifier),
  });

  return { data, isLoading };
};
