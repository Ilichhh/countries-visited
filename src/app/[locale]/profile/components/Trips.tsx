'use client';

import { useCurrentUserStats } from '@/src/hooks/useCurrentUserStats';

import { Spinner, Stack } from '@chakra-ui/react';
import { TripPreview } from './TripPreview';

import { Trip } from '@prisma/client';

export const Trips = () => {
  const { data: userData, isLoading } = useCurrentUserStats();

  if (isLoading) {
    return <Spinner />;
  }

  const content = userData?.trips.map((trip: Trip) => (
    <TripPreview key={trip.id} data={trip}></TripPreview>
  ));

  return <Stack>{content}</Stack>;
};
