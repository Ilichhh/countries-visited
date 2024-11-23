'use client';

import { Avatar } from '@/src/components/ui/avatar';
import { useUserStats } from '@/src/hooks/useUserStats';
import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

interface MainUserInfoProps {
  id: string;
}

export const MainUserInfo = ({ id }: MainUserInfoProps) => {
  const { data: userData } = useUserStats(id);

  return (
    <Flex gap="4" mt="4" alignItems="center">
      <Avatar size="2xl" src={userData?.avatarUrl || undefined}></Avatar>
      <Stack gap="1.5">
        <Heading>
          {userData?.fullName}
          <Text as="span" color="fg.muted">{` (${userData?.username})`}</Text>
        </Heading>
        <Text color="fg.muted">{userData?.email}</Text>
      </Stack>
    </Flex>
  );
};
