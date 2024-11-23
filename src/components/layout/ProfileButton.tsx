'use client';

import { signOut } from 'next-auth/react';
import { useCurrentUserStats } from '@/src/hooks/useCurrentUserStats';

import { Link } from '@/src/i18n/routing';

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
  const { data: userData } = useCurrentUserStats();

  if (!userData) {
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
            <Avatar size="xs" name={userData?.fullName || ''} src={userData?.avatarUrl || ''} />
          </IconButton>
        </MenuTrigger>
        <MenuContent p="2" w="200px">
          <MenuItemGroup>
            <Link href={`/${userData?.username}`} passHref>
              <Avatar size="xl" name={userData?.fullName || ''} src={userData?.avatarUrl || ''} />
              <MenuItem as="a" value="profile">
                {userData?.fullName || ''}
              </MenuItem>
            </Link>
            <MenuSeparator />
            <Link href="/settings" passHref>
              <MenuItem as="a" value="settings">
                <LuSettings />
                Settings
              </MenuItem>
            </Link>
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
