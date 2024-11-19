import { Link } from '@/src/i18n/routing';

import { Group, Flex } from '@chakra-ui/react';
import { ColorModeButton } from '../ui/color-mode';
import { ProfileButton } from './ProfileButton';

export const Header = () => {
  return (
    <header>
      <Flex justify="space-between" py="4" px="8" borderBottomWidth="1px">
        <Group gap="4">
          <Link href="/">Home</Link>
          <Link href="/world">World</Link>
          <Link href="/travelers">Travelers</Link>
          <Link href="/profile">Profile</Link>
        </Group>
        <Group gap="4">
          <ColorModeButton size="xs"></ColorModeButton>
          <ProfileButton></ProfileButton>
        </Group>
      </Flex>
    </header>
  );
};
