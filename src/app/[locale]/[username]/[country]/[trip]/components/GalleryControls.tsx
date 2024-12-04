import { Group } from '@chakra-ui/react';
import { PhotoUploader } from './PhotoUploader';
import { GalleryOptions } from './GalleryOptions';

export const GalleryControls = ({ tripId }: { tripId: number }) => {
  return (
    <Group>
      <PhotoUploader type="button" tripId={tripId}></PhotoUploader>
      <GalleryOptions></GalleryOptions>
    </Group>
  );
};
