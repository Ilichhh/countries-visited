'use client';

import { useCurrentUserStats } from '@/src/hooks/useCurrentUser';

import { Group, Heading } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { AddTripModal } from './AddTripModal';
// import { ManageButton } from './ManageButton';

export const ControlPanel = () => {
  const { data: userData } = useCurrentUserStats();

  return (
    <Flex justifyContent="space-between" gap="4">
      <Heading>{userData?.fullName}</Heading>
      <Group gap="4">
        {/* <ManageButton></ManageButton> */}
        <AddTripModal></AddTripModal>
      </Group>
    </Flex>
  );
};
