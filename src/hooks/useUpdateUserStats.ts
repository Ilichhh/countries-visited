import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addTrip } from '../services/restTripsApi';

import { toaster } from '../components/ui/toaster';

import { TripData } from '../types/trip';

export const useUpdateUserStats = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TripData) => addTrip(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['travelers'] });
      toaster.create({
        description: 'Trip added successfully',
        type: 'success',
      });
    },
    onError: (error) => {
      console.error('Error updating user stats:', error);
    },
  });
};
