import { Container } from '@/src/components/layout/Container';
import { PhotoGallery } from './components/PhotoGallery';
import { ProfileBlock } from '@/src/components/layout/ProfileBlock';

export default function Trip() {
  return (
    <Container>
      <ProfileBlock header="Photo gallery">
        <PhotoGallery></PhotoGallery>
      </ProfileBlock>
    </Container>
  );
}
