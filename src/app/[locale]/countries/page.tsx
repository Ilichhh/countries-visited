import { WorldMap } from './components/WorldMap';
import { SelectedCountries } from './components/SelectedCountries';
import { Container } from '@/src/components/layout/Container';
import { Flex } from '@chakra-ui/react';
import { CountrySelector } from '@/src/components/shared/CountrySelector';
import { ProfileBlock } from '@/src/components/layout/ProfileBlock';
import { ControlPanel } from './components/ControlPanel';
import { MainUserStats } from './components/MainUserStats';
import { TravelsData } from './components/TravelsData';

export default function Countries() {
  return (
    <Container>
      <ControlPanel></ControlPanel>
      <ProfileBlock header="Travel map">
        <WorldMap></WorldMap>
      </ProfileBlock>
      <ProfileBlock header="About me">
        <MainUserStats></MainUserStats>
      </ProfileBlock>
      <ProfileBlock>
        <TravelsData></TravelsData>
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
