'use client';

import { useUserStats } from '@/src/hooks/useUserStats';
import { useParams } from 'next/navigation';

import { DataListItem, DataListRoot } from '@/src/components/ui/data-list';

export const MainUserStats = () => {
  const { username } = useParams();
  const { data: userData } = useUserStats(username as string);

  let daysInTravel = 0;
  const calcDaysInTravel = () => {
    if (!userData?.trips) return;
    daysInTravel = userData?.trips.reduce((acc, trip) => {
      const startDate = new Date(trip.startDate as unknown as string);
      const endDate = new Date(trip.endDate as unknown as string);

      const diffInMilliseconds = endDate.getTime() - startDate.getTime();

      return (acc += Math.round(diffInMilliseconds / (1000 * 60 * 60 * 24)));
    }, 0);
  };
  calcDaysInTravel();

  return (
    <DataListRoot orientation="horizontal">
      <DataListItem label="I am from" value={userData?.residentCountry?.name || 'not selected'} />
      <DataListItem label="Countries visited" value={userData?.visitedCountries.length} />
      <DataListItem label="Days in travel" value={daysInTravel} />
    </DataListRoot>
  );
};
