import { PhotoPreview } from '@/src/components/shared/PhotoPreview';
import { Button } from '@/src/components/ui/button';
import { Stack, Flex } from '@chakra-ui/react';

export const PhotoGallery = () => {
  return (
    <Stack gap="4">
      <Flex gap="4" justifyContent="flex-end">
        <Button size="xs">Upload</Button>
        <Button size="xs">Delete</Button>
      </Flex>
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
        <PhotoPreview
          src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3"
          alt=""
        ></PhotoPreview>
      </Flex>
    </Stack>
  );
};
