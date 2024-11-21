import { PhotoPreview } from '@/src/components/shared/PhotoPreview';
import { Stack, Flex } from '@chakra-ui/react';
import { PhotoUploader } from './PhotoUploader';

interface PhotoGalleryProps {
  isProfileOwner: boolean;
}

export const PhotoGallery = ({ isProfileOwner }: PhotoGalleryProps) => {
  return (
    <Stack gap="4">
      {isProfileOwner && <PhotoUploader tripId={1} userId={1}></PhotoUploader>}
      <Flex gap="4" wrap="wrap">
        <PhotoPreview
          src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
          alt=""
        ></PhotoPreview>
        <PhotoPreview
          src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
          alt=""
        ></PhotoPreview>
        <PhotoPreview
          src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
          alt=""
        ></PhotoPreview>
        <PhotoPreview
          src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
          alt=""
        ></PhotoPreview>
      </Flex>
    </Stack>
  );
};
