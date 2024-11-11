import { Group, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { ColorModeButton } from '../ui/color-mode';
import { ProfileButton } from './ProfileButton';

interface HeaderProps {
  lng: string;
}

export default function Header({ lng }: HeaderProps) {
  return (
    <header>
      <Flex justify="space-between" py="4" px="8" borderBottomWidth="1px">
        <Group gap="4">
          <Link href={`/${lng}`}>Home</Link>
          <Link href={`/${lng}/countries`}>Countries</Link>
          <Link href={`/${lng}/profile`}>Profile</Link>
        </Group>
        <Group gap="4">
          <ColorModeButton size="xs"></ColorModeButton>
          <ProfileButton></ProfileButton>
        </Group>
      </Flex>
    </header>
  );
}
