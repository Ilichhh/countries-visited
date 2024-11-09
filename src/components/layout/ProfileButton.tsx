'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

import { Button } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { Avatar } from '../ui/avatar';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '../ui/menu';

interface ProfileButtonProps {
  lng: string;
}

export const ProfileButton = ({ lng }: ProfileButtonProps) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button
        size="xs"
        onClick={() =>
          signIn('github', {
            callbackUrl: `/${lng}/countries`,
            redirect: true,
          })
        }
      >
        Sign in
      </Button>
    );
  }

  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <IconButton rounded="full">
            <Avatar name={session?.user?.name || ''} src={session?.user?.image || ''} />
          </IconButton>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="settings">Settings</MenuItem>
          <MenuItem
            value="signOut"
            color="fg.error"
            _hover={{ bg: 'bg.error', color: 'fg.error' }}
            onClick={() => signOut()}
          >
            Sign out
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </>
  );
};
