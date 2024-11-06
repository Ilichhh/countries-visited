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
