import { Image } from '@chakra-ui/react';

interface PhotoPreviewProps {
  src: string;
  alt: string;
}

export const PhotoPreview = ({ src, alt }: PhotoPreviewProps) => {
  return <Image rounded="md" src={src} alt={alt} width="235px" />;
};
