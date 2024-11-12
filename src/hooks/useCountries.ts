import { getAllCountries } from '@/src/services/restCountriesApi';
import { useQuery } from '@tanstack/react-query';

export const useCountries = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: getAllCountries,
  });

  return { data, isLoading };
};
