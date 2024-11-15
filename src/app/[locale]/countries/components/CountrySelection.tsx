'use client';

import { useSearchInput } from '@/src/hooks/useSearchInput';

import { Flex } from '@chakra-ui/react';
import { CountriesList } from './CountriesList';
import { SearchInput } from './SearchInput';

export const CountrySelection = () => {
  const { inputValue, handleSearch } = useSearchInput();

  return (
    <Flex gap="4" direction="column">
      <SearchInput value={inputValue} onChange={handleSearch}></SearchInput>
      <CountriesList></CountriesList>
    </Flex>
  );
};
