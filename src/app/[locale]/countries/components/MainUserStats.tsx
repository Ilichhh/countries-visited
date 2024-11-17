'use client';

import { useCurrentUserStats } from '@/src/hooks/useCurrentUserStats';

import { DataListItem, DataListRoot } from '@/src/components/ui/data-list';

export const MainUserStats = () => {
  const { data: userData } = useCurrentUserStats();

  return (
    <DataListRoot orientation="horizontal">
      <DataListItem
        label="I am from"
        value={userData?.countryOfResidence || 'Russian Federation'}
      />
      <DataListItem label="Now I'm in" value={userData?.currentCountry || 'Russian Federation'} />
      <DataListItem label="Countries visited" value={userData?.visitedCountriesCount} />
      <DataListItem label="Days in travel" value={userData?.totalTravelDays} />
    </DataListRoot>
  );
};
