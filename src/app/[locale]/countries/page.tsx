import { WorldMap } from './components/WorldMap';
import { SelectedCountries } from './components/SelectedCountries';
import { Container } from '@/src/components/layout/Container';
import { Flex } from '@chakra-ui/react';
import { CountrySelector } from '@/src/components/shared/CountrySelector';

export default function Countries() {
  return (
    <Container>
      <Flex direction="column" gap="8" h="100vh">
        <WorldMap></WorldMap>
        <Flex alignItems="flex-start">
          <CountrySelector></CountrySelector>
          <SelectedCountries></SelectedCountries>
        </Flex>
      </Flex>
    </Container>
  );
}
