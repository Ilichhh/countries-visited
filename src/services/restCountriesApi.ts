import axios from 'axios';

import { COUNTRIES_API_BASE_URL } from '@/src/constants/api';
import { Country } from '../types/country';

export const getAllCountries = async (): Promise<Country[]> => {
  const response = await axios.get<Country[]>(`${COUNTRIES_API_BASE_URL}/all`);
  return response.data;
};
