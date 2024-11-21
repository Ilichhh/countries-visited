'use client';

import { useUserStats } from '@/src/hooks/useUserStats';
import { useParams } from 'next/navigation';

import { DataListItem, DataListRoot } from '@/src/components/ui/data-list';

export const MainUserStats = () => {
  const { username } = useParams();
  const { data: userData } = useUserStats(username as string);

  return (
    <DataListRoot orientation="horizontal">
      <DataListItem label="I am from" value={userData?.countryOfResidence || 'not selected'} />
      <DataListItem label="Now I'm in" value={userData?.currentCountry || 'not selected'} />
      <DataListItem label="Countries visited" value={userData?.visitedCountriesCount} />
      <DataListItem label="Days in travel" value={userData?.totalTravelDays} />
    </DataListRoot>
  );
};
