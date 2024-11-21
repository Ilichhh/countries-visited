import { useQuery } from '@tanstack/react-query';
import { getUserStats } from '../services/restUsersApi';
import { User } from '@prisma/client';

export const useUserStats = (identifier: string) => {
  const { data, isLoading } = useQuery<User>({
    queryKey: ['user'],
    queryFn: () => getUserStats(identifier),
  });

  return { data, isLoading };
};
