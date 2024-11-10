'use client';

import { useSession, signOut } from 'next-auth/react';

import { Box } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { Avatar } from '../ui/avatar';
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '../ui/menu';
import { LuSettings, LuLogOut } from 'react-icons/lu';
import { AuthModalWithButton } from './AuthModalWithButton';

export const ProfileButton = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <AuthModalWithButton mode="login"></AuthModalWithButton>
        <AuthModalWithButton mode="register"></AuthModalWithButton>
      </>
    );
  }

  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <IconButton size="xs" rounded="full">
            <Avatar size="xs" name={session?.user?.name || ''} src={session?.user?.image || ''} />
          </IconButton>
        </MenuTrigger>
        <MenuContent>
          <MenuItemGroup title={session?.user?.name || ''}>
            <MenuSeparator />
            <MenuItem value="settings">
              <LuSettings />
              <Box flex="1">Settings</Box>
            </MenuItem>
            <MenuItem
              value="signOut"
              color="fg.error"
              _hover={{ bg: 'bg.error', color: 'fg.error' }}
              onClick={() => signOut()}
            >
              <LuLogOut />
              <Box flex="1">Sign out</Box>
            </MenuItem>
          </MenuItemGroup>
        </MenuContent>
      </MenuRoot>
    </>
  );
};
