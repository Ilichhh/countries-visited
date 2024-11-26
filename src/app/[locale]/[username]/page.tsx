import { checkProfileOwnership } from '@/src/lib/checkProfileOwnership';

import { WorldMap } from './components/WorldMap';
import { SelectedCountries } from './components/SelectedCountries';
import { Container } from '@/src/components/layout/Container';
import { Flex } from '@chakra-ui/react';
import { CountrySelector } from '@/src/components/shared/CountrySelector';
import { Block } from '@/src/components/layout/Block';
import { ControlPanel } from './components/ControlPanel';
import { MainUserStats } from './components/MainUserStats';
import { TravelsData } from './components/TravelsData';
import { Trips } from './components/Trips';

interface ProfileProps {
  params: {
    username: string;
  };
}

export default async function Profile({ params }: ProfileProps) {
  const { username } = await params;

  const isProfileOwner = await checkProfileOwnership(username);

  return (
    <Container>
      {isProfileOwner && <ControlPanel></ControlPanel>}
      <Block header="Travel map">
        <WorldMap></WorldMap>
      </Block>
      <Block header="About me">
        <MainUserStats></MainUserStats>
      </Block>
      <Block header="Trips">
        <Trips></Trips>
      </Block>
      <Block>
        <TravelsData></TravelsData>
      </Block>
      {isProfileOwner && (
        <Block header="Select country">
          <Flex alignItems="flex-start">
            <CountrySelector></CountrySelector>
            <SelectedCountries></SelectedCountries>
          </Flex>
        </Block>
      )}
    </Container>
  );
}
