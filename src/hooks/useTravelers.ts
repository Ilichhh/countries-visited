import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../services/restUsersApi';

export const useTravelers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['travelers'],
    queryFn: getAllUsers,
  });

  return { data, isLoading };
};
