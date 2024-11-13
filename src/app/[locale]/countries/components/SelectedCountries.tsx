'use client';

import { Button } from '@/src/components/ui/button';
import { DataListItem, DataListRoot } from '@/src/components/ui/data-list';
import { useUpdateUserStats } from '@/src/hooks/useUpdateUserStats';
import { useCountryStore } from '@/src/lib/store/useCountryStore';
import { Stack } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

export const SelectedCountries = () => {
  const country = useCountryStore((state) => state.data);
  const { data: session } = useSession();
  const updateUserStats = useUpdateUserStats();

  const content = country && (
    <DataListRoot>
      <DataListItem key={country?.name.common} label="Common name" value={country?.name.common} />
      <DataListItem key={country?.cca3} label="Official name" value={country?.name.official} />
      <DataListItem key={country?.population} label="Population" value={country?.population} />
    </DataListRoot>
  );

  const handleClick = () => {
    if (!session || !country) return;
    updateUserStats.mutate({ id: session.user.id, data: { countryName: country.name.common } });
  };

  return (
    <Stack p="14" gap="6">
      {content || 'not selected'}
      {content && (
        <Button variant="surface" onClick={handleClick}>
          Add country
        </Button>
      )}
    </Stack>
  );
};
