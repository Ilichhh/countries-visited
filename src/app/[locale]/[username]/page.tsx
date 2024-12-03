import { checkProfileOwnership } from '@/src/lib/checkProfileOwnership';

import { Container } from '@/src/components/layout/Container';
import { Block } from '@/src/components/layout/Block';
import { ControlPanel } from './components/ControlPanel';
import { MainUserStats } from './components/MainUserStats';
import { TravelsData } from './components/TravelsData';
import { Trips } from './components/Trips';
import { Map } from './components/Map';

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
      <Map></Map>
      <Block header="About me">
        <MainUserStats></MainUserStats>
      </Block>
      <Block header="Trips">
        <Trips></Trips>
      </Block>
      <Block>
        <TravelsData></TravelsData>
      </Block>
    </Container>
  );
}
