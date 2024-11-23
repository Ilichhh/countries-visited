'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useUpdateUserStats } from '@/src/hooks/useUpdateUserStats';
import { useCountryStore } from '@/src/lib/store/useCountryStore';

import { Button } from '@/src/components/ui/button';
import { DataListItem, DataListRoot } from '@/src/components/ui/data-list';
import { Group, Stack } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const SelectedCountries = () => {
  const country = useCountryStore((state) => state.data);
  const { data: session } = useSession();
  const updateUserStats = useUpdateUserStats();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const content = country && (
    <DataListRoot>
      <DataListItem key={country?.name.common} label="Common name" value={country?.name.common} />
      <DataListItem key={country?.cca3} label="Official name" value={country?.name.official} />
      <DataListItem key={country?.population} label="Population" value={country?.population} />
    </DataListRoot>
  );

  const handleClick = () => {
    if (!session || !country) return;
    updateUserStats.mutate({ userId: session.user.id, country, startDate, endDate });
  };

  return (
    <Group>
      <Stack pl="16" gap="6">
        {content || 'not selected'}
        {content && (
          <Button variant="surface" onClick={handleClick}>
            Add Trip
          </Button>
        )}
      </Stack>
      <Stack>
        start date
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date || new Date())} />
        end date
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date || new Date())} />
      </Stack>
    </Group>
  );
};
