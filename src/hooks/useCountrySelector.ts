import { ChangeEvent, useCallback, useState } from 'react';
import { useCountries } from '@/src/hooks/useCountries';
import { useCountryStore } from '@/src/lib/store/useCountryStore';

export const useCountrySelector = (defaultValue: string) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  const selectCountry = useCountryStore((state) => state.selectCountry);
  const { data, isLoading } = useCountries();

  const sortedData = data?.sort((a, b) =>
    a.name.common.localeCompare(b.name.common, undefined, {
      sensitivity: 'base',
    })
  );

  const filteredData = sortedData?.filter(
    (country) =>
      country.name.common.toLowerCase().includes(inputValue.toLowerCase()) ||
      country.name.official.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return {
    filteredData,
    isLoading,
    defaultValue,
    inputValue,
    setInputValue,
    handleSearch,
    selectCountry,
  };
};
