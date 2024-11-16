import { ChangeEvent, useCallback, useState } from 'react';
import { useCountries } from '@/src/hooks/useCountries';
import { useCountryStore } from '@/src/lib/store/useCountryStore';

export const useCountrySelector = () => {
  const defaultValue = '';
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  const selectCountry = useCountryStore((state) => state.selectCountry);
  const { data, isLoading } = useCountries();

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return {
    data,
    isLoading,
    defaultValue,
    inputValue,
    setInputValue,
    handleSearch,
    selectCountry,
  };
};
