'use client';

import { DataListItem, DataListRoot } from '@/src/components/ui/data-list';
import { useCountryStore } from '@/src/lib/store/useCountryStore';
import { Box } from '@chakra-ui/react';

export const SelectedCountries = () => {
  const country = useCountryStore((state) => state.data);

  const content = (
    <DataListRoot p="14">
      <DataListItem key={country?.name.common} label="Common name" value={country?.name.common} />
      <DataListItem key={country?.cca3} label="Official name" value={country?.name.official} />
      <DataListItem key={country?.population} label="Population" value={country?.population} />
    </DataListRoot>
  );

  return <Box>{content || 'not selected'}</Box>;
};
