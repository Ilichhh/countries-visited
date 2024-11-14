import { CountrySelection } from './components/CountrySelection';
import { WorldMap } from './components/WorldMap';
import { SelectedCountries } from './components/SelectedCountries';
import { Container } from '@/src/components/layout/Container';
import { Group, Stack } from '@chakra-ui/react';

export default function Countries() {
  return (
    <Container>
      <Stack>
        <WorldMap></WorldMap>
        <Group>
          <CountrySelection></CountrySelection>
          <SelectedCountries></SelectedCountries>
        </Group>
      </Stack>
    </Container>
  );
}
