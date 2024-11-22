import { useQuery } from '@tanstack/react-query';
import { getUserStats } from '../services/restUsersApi';
import { useSession } from 'next-auth/react';

import { UserWithTrips } from '@/prisma/types';

export const useCurrentUserStats = () => {
  const { data: session } = useSession();
  const { data, isLoading } = useQuery<UserWithTrips>({
    queryKey: ['currentUser'],
    queryFn: () => getUserStats(session?.user.id || ''),
    enabled: !!session?.user?.id,
  });

  return { data, session, isLoading };
};
