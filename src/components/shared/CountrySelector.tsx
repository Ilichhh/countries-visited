'use client';

import { Dispatch, SetStateAction } from 'react';
import { useCountrySelector } from '@/src/hooks/useCountrySelector';
import { InputGroup } from '@/src/components/ui/input-group';

import { List, Stack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { LuSearch, LuSearchX } from 'react-icons/lu';
import { Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { EmptyState } from '../ui/empty-state';

import { Country } from '@/src/types/country';

interface CountrySelectorProps {
  setStep?: Dispatch<SetStateAction<1 | 2>>;
}

export const CountrySelector = ({ setStep }: CountrySelectorProps) => {
  const { filteredData, isLoading, inputValue, handleSearch, selectCountry } =
    useCountrySelector('');

  const handleContrySelect = (country: Country) => {
    selectCountry(country);
    if (setStep) {
      setStep(2);
    }
  };

  const countriesList = filteredData?.length ? (
    filteredData.map((country) => {
      return (
        <List.Item
          p="2"
          cursor="pointer"
          _hover={{ bg: 'bg.muted', cursor: 'pointer' }}
          onClick={() => handleContrySelect(country)}
          key={country.cca2}
          justifyContent="flex-start"
          alignItems="center"
          gap="4"
        >
          <img src={country.flags.svg} alt={country.flags.alt} height="24px" width="48px"></img>
          <Stack gap="0.5">
            <Text textStyle="sm">{country.name.common}</Text>
            <Text color="fg.muted">{country.name.official}</Text>
          </Stack>
        </List.Item>
      );
    })
  ) : (
    <EmptyState
      icon={<LuSearchX style={{ fontSize: '72px' }}></LuSearchX>}
      title="No Results found"
      description="We couldn’t find what you are looking for. Adjust your search request and try again."
    ></EmptyState>
  );

  return (
    <Stack gap="4">
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input placeholder="Select country" value={inputValue} onChange={handleSearch} />
      </InputGroup>
      <List.Root variant="plain" h="400px" overflow="auto">
        {isLoading ? <Spinner /> : countriesList}
      </List.Root>
    </Stack>
  );
};
