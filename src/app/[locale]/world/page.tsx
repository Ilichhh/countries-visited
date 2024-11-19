import { ProfileBlock } from '@/src/components/layout/ProfileBlock';
import { CountrySelector } from '@/src/components/shared/CountrySelector';
import { Flex } from '@chakra-ui/react';
import { SelectedCountries } from '../profile/components/SelectedCountries';
import { WorldMap } from '../profile/components/WorldMap';
import { Container } from '@/src/components/layout/Container';

export default function World() {
  return (
    <Container>
      <ProfileBlock header="Travel map">
        <WorldMap></WorldMap>
      </ProfileBlock>
      <ProfileBlock header="Select country">
        <Flex alignItems="flex-start">
          <CountrySelector></CountrySelector>
          <SelectedCountries></SelectedCountries>
        </Flex>
      </ProfileBlock>
    </Container>
  );
}
