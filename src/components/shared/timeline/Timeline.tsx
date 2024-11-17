'use client';

import { useCurrentUserStats } from '@/src/hooks/useCurrentUserStats';

import { Stack } from '@chakra-ui/react';
import { YearRow } from './YearRow';

export const Timeline = () => {
  const { data: userData } = useCurrentUserStats();
  const travels = userData?.travels || [];

  const currentYear = new Date().getFullYear();
  const yearsWithTravels: number[] = travels.map((travel: { startDate: string | number | Date }) =>
    new Date(travel.startDate).getFullYear()
  );
  const firstTravellingYear = Math.min(...yearsWithTravels);
  const years = Array.from(
    { length: currentYear - firstTravellingYear + 1 },
    (_, i) => currentYear - i
  );

  return (
    <Stack gap="4">
      {years.map((year: number) => (
        <YearRow key={year} year={year}></YearRow>
      ))}
    </Stack>
  );
};
