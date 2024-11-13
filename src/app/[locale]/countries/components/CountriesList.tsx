'use client';

import { useCountries } from '@/src/hooks/useCountries';

import { Box, List, Spinner } from '@chakra-ui/react';

import { Country } from '@/src/types/country';
import { useCountryStore } from '@/src/lib/store/useCountryStore';

export const CountriesList = () => {
  const { data, isLoading } = useCountries();

  const countries = data?.map((country: Country) => (
    <List.Item
      onClick={() => selectCountry(country)}
      key={country.name.common}
      cursor="pointer"
      _hover={{ bg: 'gray.500' }}
      listStyle="none"
    >
      {country.name.common}
    </List.Item>
  ));

  const selectCountry = useCountryStore((state) => state.selectCountry);

  return (
    <Box h="300px" overflowY="auto" borderWidth="1px">
      {isLoading ? <Spinner /> : <List.Root>{countries}</List.Root>}
    </Box>
  );
};
