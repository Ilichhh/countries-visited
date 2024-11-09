import { ChangeEvent, useCallback, useState } from 'react';
import { useDebounce } from 'use-debounce';

export const useSearchInput = () => {
  const defaultValue = '';
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  const [debouncedValue] = useDebounce(inputValue, 1000);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return {
    defaultValue,
    inputValue,
    setInputValue,
    debouncedValue,
    handleSearch,
  };
};
