import { useQuery } from '@tanstack/react-query';
import { getUserStats } from '../services/restUsersApi';
import { useSession } from 'next-auth/react';
import { User } from '@prisma/client';

export const useCurrentUserStats = () => {
  const { data: session } = useSession();
  const { data, isLoading } = useQuery<User>({
    queryKey: ['user'],
    queryFn: () => getUserStats(session?.user.id || ''),
    enabled: !!session?.user?.id,
  });

  return { data, session, isLoading };
};
