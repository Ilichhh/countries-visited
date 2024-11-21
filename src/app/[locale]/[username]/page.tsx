import { getUserSession } from '@/src/lib/getUserSession';
import { notFound } from 'next/navigation';
import { prisma } from '@/src/lib/prisma';

import { WorldMap } from './components/WorldMap';
import { SelectedCountries } from './components/SelectedCountries';
import { Container } from '@/src/components/layout/Container';
import { Flex } from '@chakra-ui/react';
import { CountrySelector } from '@/src/components/shared/CountrySelector';
import { ProfileBlock } from '@/src/components/layout/ProfileBlock';
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

  const user = await prisma.user.findUnique({
    where: { uniqueLink: username },
  });

  if (!user) {
    notFound();
  }

  const session = await getUserSession();

  const isPrivateView = session?.id && user.id === +session?.id;

  return (
    <Container>
      {isPrivateView && <ControlPanel></ControlPanel>}
      <ProfileBlock header="Travel map">
        <WorldMap></WorldMap>
      </ProfileBlock>
      <ProfileBlock header="About me">
        <MainUserStats></MainUserStats>
      </ProfileBlock>
      <ProfileBlock header="Trips">
        <Trips></Trips>
      </ProfileBlock>
      <ProfileBlock>
        <TravelsData></TravelsData>
      </ProfileBlock>
      {isPrivateView && (
        <ProfileBlock header="Select country">
          <Flex alignItems="flex-start">
            <CountrySelector></CountrySelector>
            <SelectedCountries></SelectedCountries>
          </Flex>
        </ProfileBlock>
      )}
    </Container>
  );
}
