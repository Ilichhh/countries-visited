import { redirect } from 'next/navigation';

import { Container } from '@/src/components/layout/Container';
import { getUserSession } from '@/src/lib/getUserSession';
import { SettingsForm } from './components/SettingsForm';
import { Stack } from '@chakra-ui/react';

export default async function Settings() {
  const session = await getUserSession();

  if (!session) {
    return redirect('/');
  }

  return (
    <Container>
      <Stack>
        <h1>Settings</h1>
        <SettingsForm></SettingsForm>
      </Stack>
    </Container>
  );
}
