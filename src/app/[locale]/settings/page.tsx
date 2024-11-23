import { redirect } from 'next/navigation';

import { Container } from '@/src/components/layout/Container';
import { getUserSession } from '@/src/lib/getUserSession';
import { Stack } from '@chakra-ui/react';
import { Navigation } from './components/Navigation';
import { MainUserInfo } from './components/MainUserInfo';

export default async function Settings() {
  const session = await getUserSession();

  if (!session) {
    return redirect('/');
  }

  return (
    <Container>
      <Stack gap="8">
        <MainUserInfo id={session.id}></MainUserInfo>
        <Navigation></Navigation>
      </Stack>
    </Container>
  );
}
