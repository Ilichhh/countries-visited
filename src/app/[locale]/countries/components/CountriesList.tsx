'use client';
import { useState, useEffect, useCallback } from 'react';
import { Country } from '@/src/types/country';
import { CheckboxCard } from '@/src/components/ui/checkbox-card';
import { Box } from '@chakra-ui/react';
import { getAllCountries, getCountriesByName } from '@/src/services/restCountriesApi';

interface CountriesListProps {
  filter: string;
}

export const CountriesList = ({ filter }: CountriesListProps) => {
  const [countriesList, setCountriesList] = useState<Country[]>([]);

  const handleCountriesList = useCallback(async () => {
    let countriesData = [];
    if (filter) {
      countriesData = await getCountriesByName(filter);
    } else {
      countriesData = await getAllCountries();
    }
    console.log(countriesData);
    setCountriesList(countriesData);
  }, [filter]);

  useEffect(() => {
    console.log('trigger');
    handleCountriesList();
  }, [handleCountriesList]);

  const countries = countriesList.map((country) => (
    <div key={country.name.common}>
      <CheckboxCard label={country.name.common}>visited</CheckboxCard>
      <br></br>
    </div>
  ));

  return (
    <Box h="300px" overflowY="auto" borderWidth="1px">
      {countries}
    </Box>
  );
};
