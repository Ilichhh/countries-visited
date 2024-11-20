import { Box } from '@chakra-ui/react';

interface PhotoAlbumProps {
  name: string;
}

export const PhotoAlbum = ({ name }: PhotoAlbumProps) => {
  return <Box>{name}</Box>;
};
