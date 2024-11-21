import { Link } from '@/src/i18n/routing';

import { Group, Flex } from '@chakra-ui/react';
import { ColorModeButton } from '../ui/color-mode';
import { ProfileButton } from './ProfileButton';

export const Header = () => {
  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      w="100%"
      zIndex="100"
      justify="space-between"
      py="4"
      px="8"
      borderBottomWidth="1px"
      bg="bg"
    >
      <Group as="nav" gap="4">
        <Link href="/">Home</Link>
        <Link href="/world">World</Link>
        <Link href="/travelers">Travelers</Link>
      </Group>
      <Group gap="4">
        <ColorModeButton size="xs"></ColorModeButton>
        <ProfileButton></ProfileButton>
      </Group>
    </Flex>
  );
};
