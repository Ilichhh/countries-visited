import { checkProfileOwnership } from '@/src/lib/checkProfileOwnership';

import { Container } from '@/src/components/layout/Container';
import { PhotoGallery } from './components/PhotoGallery';
import { Block } from '@/src/components/layout/Block';

interface TripProps {
  params: {
    username: string;
  };
}

export default async function Trip({ params }: TripProps) {
  const { username } = await params;

  const isProfileOwner = await checkProfileOwnership(username);

  return (
    <Container>
      <Block>
        <PhotoGallery isProfileOwner={isProfileOwner}></PhotoGallery>
      </Block>
    </Container>
  );
}
