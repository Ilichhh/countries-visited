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
      <Flex justify="space-between" p="2">
        <Group>
          <Link href={`/${lng}`}>Home</Link>
          <Link href={`/${lng}/login`}>Login</Link>
          <Link href={`/${lng}/register`}>Register</Link>
          <Link href={`/${lng}/countries`}>Countries</Link>
        </Group>
        <Group>
          <ColorModeButton size="xs"></ColorModeButton>
          <ProfileButton lng={lng}></ProfileButton>
        </Group>
      </Flex>
    </header>
  );
}
