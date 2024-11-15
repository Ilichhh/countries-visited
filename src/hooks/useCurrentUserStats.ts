import { useQuery } from '@tanstack/react-query';
import { getUserStats } from '../services/restUsersApi';
import { useSession } from 'next-auth/react';

export const useCurrentUserStats = () => {
  const { data: session } = useSession();
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserStats(session?.user.id || ''),
  });

  return { data, isLoading };
};
