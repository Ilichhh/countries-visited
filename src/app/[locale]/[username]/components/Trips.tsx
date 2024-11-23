'use client';

import { useUserStats } from '@/src/hooks/useUserStats';
import { useUserTrips } from '@/src/hooks/useUserTrips';
import { useParams } from 'next/navigation';

import { Spinner, Stack, Text } from '@chakra-ui/react';
import { TripPreview } from './TripPreview';

import { TripWithPhotos } from '@/prisma/types';

export const Trips = () => {
  const { username } = useParams();
  const { data: userData, isLoading: isUserStatsLoading } = useUserStats(username as string);
  const { data: tripData, isLoading: isTripsLoading } = useUserTrips(userData?.id || null);

  if (isUserStatsLoading) {
    return <Spinner />;
  }

  if (!userData) {
    return <Text>No user</Text>;
  }

  if (isTripsLoading) {
    return <Spinner />;
  }

  if (!tripData || tripData.length === 0) {
    return <Text>No trips yet</Text>;
  }

  const content = tripData?.map((trip: TripWithPhotos) => (
    <TripPreview key={trip.id} data={trip}></TripPreview>
  ));

  return <Stack>{content}</Stack>;
};
