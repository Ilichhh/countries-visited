import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { UseFormSetError } from 'react-hook-form';
import { getUserStats, updateUserProfile } from '../services/restUsersApi';

import { toaster } from '../components/ui/toaster';

import { UserWithTripsAndCountries } from '@/prisma/types';
import { SettingsFormValues } from '../types/forms';
import { AxiosError } from 'axios';

interface APIErrorResponse {
  message: string;
}

export const useCurrentUserStats = () => {
  const { data: session } = useSession();
  const { data, isLoading } = useQuery<UserWithTripsAndCountries>({
    queryKey: ['currentUser'],
    queryFn: () => getUserStats(session?.user.id || ''),
    enabled: !!session?.user?.id,
  });

  return { data, session, isLoading };
};

export const useUpdateUserProfile = (setError: UseFormSetError<SettingsFormValues>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: SettingsFormValues }) =>
      updateUserProfile(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      toaster.create({
        description: 'Username updated successfully',
        type: 'success',
      });
    },
    onError: (error: AxiosError<APIErrorResponse>) => {
      console.error('Error updating user stats:', error);
      if (error.response?.data) {
        setError('username', {
          type: 'manual',
          message: error.response.data.message,
        });
      }
    },
  });
};
