'use client';

import { useParams } from 'next/navigation';
import { useTripData } from '@/src/hooks/useTripData';

import { PhotoPreview } from '@/src/components/shared/PhotoPreview';
import { Stack, Flex, Spinner, Heading, Text } from '@chakra-ui/react';
import { GalleryControls } from './GalleryControls';
import { PhotoUploader } from './PhotoUploader';

import { Photo } from '@prisma/client';

interface PhotoGalleryProps {
  isProfileOwner: boolean;
}

export const PhotoGallery = ({ isProfileOwner }: PhotoGalleryProps) => {
  const { trip } = useParams();
  const { data, isLoading } = useTripData(trip as string);

  if (isLoading || !data) {
    return <Spinner />;
  }

  const photos = data?.photos.map((photo: Photo) => (
    <PhotoPreview key={photo.id} src={photo.url} alt={photo.description || ''}></PhotoPreview>
  ));

  return (
    <Stack gap="4">
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Stack>
          <Heading>{data.country.name}</Heading>
          <Text>{data.description}</Text>
        </Stack>
        {isProfileOwner && data && <GalleryControls tripId={data.id}></GalleryControls>}
      </Flex>
      <Flex gap="4" wrap="wrap">
        {photos.length ? (
          photos
        ) : isProfileOwner ? (
          <PhotoUploader type="dropzone" tripId={data.id}></PhotoUploader>
        ) : null}
      </Flex>
    </Stack>
  );
};
