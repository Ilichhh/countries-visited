'use client';

import { useUploadPhoto } from '@/src/hooks/usePhotos';

import { Button } from '@/src/components/ui/button';
import {
  FileUploadDropzone,
  FileUploadRoot,
  FileUploadTrigger,
} from '@/src/components/ui/file-upload';
import { LuImagePlus } from 'react-icons/lu';

interface PhotoUploaderProps {
  tripId: number;
  type: 'button' | 'dropzone';
}

export const PhotoUploader = ({ tripId, type }: PhotoUploaderProps) => {
  const uploadPhoto = useUploadPhoto();

  const handleUpload = async (data: { files: File[] }) => {
    data.files.forEach((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tripId', tripId.toString());
      uploadPhoto.mutateAsync(formData);
    });
  };

  return (
    <FileUploadRoot
      accept={['image/png', 'image/jpeg', 'image/webp']}
      onFileAccept={handleUpload}
      maxFiles={50}
      alignItems="stretch"
    >
      {type === 'button' ? (
        <FileUploadTrigger asChild>
          <Button size="sm">
            <LuImagePlus /> Upload photos
          </Button>
        </FileUploadTrigger>
      ) : (
        <FileUploadDropzone
          label="No photos yet. Drag and drop here to upload"
          description=".png, .jpg, .jpeg, .webp up to 50 files in one batch"
        />
      )}
    </FileUploadRoot>
  );
};
