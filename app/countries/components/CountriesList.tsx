'use client';

import { useState } from 'react';
import { getAllCountries } from '@/services/restCountriesApi';
import { Country } from '@/types/country';

export default function CountriesList() {
  const [countriesList, setCountriesList] = useState<Country[]>([]);

  const countries = countriesList.map((country) => (
    <div key={country.name.common}>
      <img src={country.flags.svg} height={20}></img>
      <div>common: {country.name.common}</div>
      <div>official: {country.name.official}</div>
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
      <button onClick={handleAllCountries}>Get countries</button>
      <div>{countries}</div>
    </div>
  );
}
