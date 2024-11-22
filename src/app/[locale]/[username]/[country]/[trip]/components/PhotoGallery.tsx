'use client';

import { useParams } from 'next/navigation';
import { useTripData } from '@/src/hooks/useTripData';

import { PhotoPreview } from '@/src/components/shared/PhotoPreview';
import { Stack, Flex, Spinner } from '@chakra-ui/react';
import { PhotoUploader } from './PhotoUploader';

import { Photo } from '@prisma/client';

interface PhotoGalleryProps {
  isProfileOwner: boolean;
}

export const PhotoGallery = ({ isProfileOwner }: PhotoGalleryProps) => {
  const { trip } = useParams();
  const { data, isLoading } = useTripData(trip as string);

  if (isLoading) {
    return <Spinner />;
  }
  console.log(data?.photos);

  const content = data?.photos.map((photo: Photo) => (
    <PhotoPreview key={photo.id} src={photo.url} alt={photo.description || ''}></PhotoPreview>
  ));

  return (
    <Stack gap="4">
      {isProfileOwner && data && (
        <PhotoUploader tripId={data.id} userId={data.userId}></PhotoUploader>
      )}
      <Flex gap="4" wrap="wrap">
        {content}
      </Flex>
    </Stack>
  );
};
