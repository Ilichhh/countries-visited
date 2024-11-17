'use client';

import { useCurrentUserStats } from '@/src/hooks/useCurrentUserStats';

import { Group, Heading } from '@chakra-ui/react';
import { Button } from '@/src/components/ui/button';
import { Flex } from '@chakra-ui/react';
import { ManageButton } from './ManageButton';

export const ControlPanel = () => {
  const { data: userData } = useCurrentUserStats();

  return (
    <Flex justifyContent="space-between" gap="4">
      <Heading>{userData?.fullName}</Heading>
      <Group gap="4">
        <ManageButton></ManageButton>
        <Button size="sm">Add country</Button>
      </Group>
    </Flex>
  );
};
