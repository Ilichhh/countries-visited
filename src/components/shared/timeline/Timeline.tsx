'use client';

import { useUserStats } from '@/src/hooks/useUserStats';
import { useParams } from 'next/navigation';

import { Stack } from '@chakra-ui/react';
import { YearRow } from './YearRow';

export const Timeline = () => {
  const { username } = useParams();
  const { data: userData } = useUserStats(username as string);
  const travels = userData?.trips || [];

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
