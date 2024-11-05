'use client';

import { useState } from 'react';
import { getAllCountries } from '@/services/restCountriesApi';
import { Country } from '@/types/country';
import { CheckboxCard } from '@/components/ui/checkbox-card';
import { Button } from '@/components/ui/button';

export default function CountriesList() {
  const [countriesList, setCountriesList] = useState<Country[]>([]);

  const countries = countriesList.map((country) => (
    <div key={country.name.common}>
      <CheckboxCard label={country.name.common}>visited</CheckboxCard>
      <br></br>
    </div>
  ));

  const handleAllCountries = async () => {
    const countriesData = await getAllCountries();
    setCountriesList(countriesData);
  };

  return (
    <div>
      <h2>list of countries</h2>
      <Button onClick={handleAllCountries}>Get countries</Button>
      <div>{countries}</div>
    </div>
  );
}
