'use client';

import { useTravelers } from '@/src/hooks/useTravelers';

import { Spinner, Table } from '@chakra-ui/react';
import { TravelerCard } from './TravelerCard';

export const TravelersList = () => {
  const { data, isLoading } = useTravelers();

  const travelers = data?.map((user, i) => (
    <TravelerCard key={user.id} data={user} i={i + 1}></TravelerCard>
  ));

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table.Root interactive>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>#</Table.ColumnHeader>
              <Table.ColumnHeader>user</Table.ColumnHeader>
              <Table.ColumnHeader>countries</Table.ColumnHeader>
              <Table.ColumnHeader>trips</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>{travelers}</Table.Body>
        </Table.Root>
      )}
    </>
  );
};
