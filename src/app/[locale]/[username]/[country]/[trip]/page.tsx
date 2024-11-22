import { checkProfileOwnership } from '@/src/lib/checkProfileOwnership';

import { Container } from '@/src/components/layout/Container';
import { PhotoGallery } from './components/PhotoGallery';
import { ProfileBlock } from '@/src/components/layout/ProfileBlock';

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
      <ProfileBlock header="Photo gallery">
        <PhotoGallery isProfileOwner={isProfileOwner}></PhotoGallery>
      </ProfileBlock>
    </Container>
  );
}
