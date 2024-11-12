'use client';

import { useCountries } from '@/src/hooks/useCountries';

import { Box, Spinner } from '@chakra-ui/react';
import { CheckboxCard } from '@/src/components/ui/checkbox-card';

import { Country } from '@/src/types/country';

export const CountriesList = () => {
  const { data, isLoading } = useCountries();

  const countries = data?.map((country: Country) => (
    <div key={country.name.common}>
      <CheckboxCard label={country.name.common}>visited</CheckboxCard>
      <br></br>
    </div>
  ));

  return (
    <Box h="300px" overflowY="auto" borderWidth="1px">
      {isLoading ? <Spinner /> : countries}
    </Box>
  );
};
