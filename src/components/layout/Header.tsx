import { Group, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { ColorModeButton } from '../ui/color-mode';

interface HeaderProps {
  lng: string;
}

export default function Header({ lng }: HeaderProps) {
  return (
    <header>
      <Flex justify="space-between">
        <Group>
          <Link href={`/${lng}`}>Home</Link>
          <Link href={`/${lng}/login`}>Login</Link>
          <Link href={`/${lng}/register`}>Register</Link>
          <Link href={`/${lng}/countries`}>Countries</Link>
        </Group>
        <ColorModeButton></ColorModeButton>
      </Flex>
    </header>
  );
}
