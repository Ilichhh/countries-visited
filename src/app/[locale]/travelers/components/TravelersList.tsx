'use client';

import { getAllUsers } from '@/src/services/restUsersApi';
import { Flex } from '@chakra-ui/react';
import { User } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { TravelerCard } from './TravelerCard';

export const TravelersList = () => {
  const [travelersList, setTravelersList] = useState<User[]>([]);

  const handleTravelerList = useCallback(async () => {
    const usersData = await getAllUsers();
    console.log(usersData);
    setTravelersList(usersData);
  }, []);

  useEffect(() => {
    handleTravelerList();
  }, [handleTravelerList]);

  const travelers = travelersList.map((user) => (
    <div key={user.id}>
      <TravelerCard data={user}></TravelerCard>
      <br></br>
    </div>
  ));

  return <Flex direction="column">{travelers}</Flex>;
};
