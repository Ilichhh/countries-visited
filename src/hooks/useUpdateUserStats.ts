import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserStats } from '@/src/services/restUsersApi';
import { TravelData } from '../types/travel';

export const useUpdateUserStats = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TravelData }) => updateUserStats(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['travelers'] });
    },
    onError: (error) => {
      console.error('Error updating user stats:', error);
    },
  });
};
