import { COUNTRIES_API_BASE_URL } from '@/src/constants/api';

export const getAllCountries = async () => {
  try {
    const response = await fetch(`${COUNTRIES_API_BASE_URL}/all`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getCountriesByName = async (name: string) => {
  try {
    const response = await fetch(`${COUNTRIES_API_BASE_URL}/name/${name}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
