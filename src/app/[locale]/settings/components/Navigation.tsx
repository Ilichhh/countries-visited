import { Stack, Tabs } from '@chakra-ui/react';
import { SettingsForm } from './SettingsForm';
import { PublicProfileForm } from './PublicProfileForm';
import { LuSettings, LuUser } from 'react-icons/lu';
import { AccountDeletion } from './AccountDeletion';

export const Navigation = () => {
  return (
    <Tabs.Root defaultValue="publicProfile" variant="line" orientation="vertical">
      <Tabs.List rounded="l3" p="1">
        <Tabs.Trigger value="publicProfile">
          <LuUser />
          Public profile
        </Tabs.Trigger>
        <Tabs.Trigger value="accountSettings">
          <LuSettings />
          Account
        </Tabs.Trigger>
        <Tabs.Indicator rounded="l2" bg="bg.muted" />
      </Tabs.List>
      <Tabs.Content value="publicProfile">
        <PublicProfileForm></PublicProfileForm>
      </Tabs.Content>
      <Tabs.Content value="accountSettings">
        <Stack gap={8}>
          <SettingsForm></SettingsForm>
          <AccountDeletion></AccountDeletion>
        </Stack>
      </Tabs.Content>
    </Tabs.Root>
  );
};
