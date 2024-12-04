import { useMutation, useQueryClient } from '@tanstack/react-query';

import { uploadPhoto } from '../services/restPhotosApi';
import { toaster } from '../components/ui/toaster';

export const useUploadPhoto = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => uploadPhoto(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['photos'] });
      toaster.create({
        description: 'Photo uploaded',
        type: 'success',
      });
    },
    onError: (error) => {
      console.error('Error uploading photo:', error);
      toaster.create({
        description: 'Error uploading photo',
        type: 'error',
      });
    },
  });
};
