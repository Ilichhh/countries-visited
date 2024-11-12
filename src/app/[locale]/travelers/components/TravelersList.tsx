'use client';

import { useTravelers } from '@/src/hooks/useTravelers';

import { Flex, Spinner } from '@chakra-ui/react';
import { TravelerCard } from './TravelerCard';

export const TravelersList = () => {
  const { data, isLoading } = useTravelers();

  const travelers = data?.map((user) => (
    <div key={user.id}>
      <TravelerCard data={user}></TravelerCard>
      <br></br>
    </div>
  ));

  return <Flex direction="column">{isLoading ? <Spinner /> : travelers}</Flex>;
};
