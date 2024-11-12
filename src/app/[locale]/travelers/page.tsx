import { Container } from '@/src/components/layout/Container';
import { Stack } from '@chakra-ui/react';
import { TravelersList } from './components/TravelersList';

export default function Travelers() {
  return (
    <Container>
      <Stack p="8">
        {/* <h2>List of Travelers</h2> */}
        <TravelersList></TravelersList>
      </Stack>
    </Container>
  );
}
