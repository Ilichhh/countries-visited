import { Block } from '@/src/components/layout/Block';
import { CountrySelector } from '@/src/components/shared/CountrySelector';
import { Flex } from '@chakra-ui/react';
import { SelectedCountries } from '../[username]/components/SelectedCountries';
import { WorldMap } from '../[username]/components/WorldMap';
import { Container } from '@/src/components/layout/Container';

export default function World() {
  return (
    <Container>
      <Block header="Travel map">
        <WorldMap></WorldMap>
      </Block>
      <Block header="Select country">
        <Flex alignItems="flex-start">
          <CountrySelector></CountrySelector>
          <SelectedCountries></SelectedCountries>
        </Flex>
      </Block>
    </Container>
  );
}
