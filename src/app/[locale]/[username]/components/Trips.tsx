'use client';

import { useUserStats } from '@/src/hooks/useUserStats';
import { useParams } from 'next/navigation';

import { Spinner, Stack } from '@chakra-ui/react';
import { TripPreview } from './TripPreview';

import { Trip } from '@prisma/client';

export const Trips = () => {
  const { username } = useParams();
  const { data: userData, isLoading } = useUserStats(username as string);

  if (isLoading) {
    return <Spinner />;
  }

  const content = userData?.trips.map((trip: Trip) => (
    <TripPreview key={trip.id} data={trip}></TripPreview>
  ));

  return <Stack>{content}</Stack>;
};
