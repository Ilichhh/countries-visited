'use client';

import { useEffect, useRef, useState } from 'react';
import { useCountrySelector } from '@/src/hooks/useCountrySelector';
import { InputGroup } from '@/src/components/ui/input-group';

import { createListCollection, ListCollection } from '@chakra-ui/react';
import { Input, SelectContent, SelectItem, SelectRoot } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';
import { Flex } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

import { Country } from '@/src/types/country';

export const CountrySelector = () => {
  const { data, isLoading, inputValue, setInputValue, handleSearch, selectCountry } =
    useCountrySelector();

  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLDivElement>(null);
  const selectCountentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        selectCountentRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !selectCountentRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  let countriesCollection: ListCollection<{
    label: string;
    value: string;
    data: Country;
  }> = createListCollection({ items: [] });

  if (data && data.length) {
    countriesCollection = createListCollection({
      items: data?.map((country) => {
        return {
          label: country.name.common,
          value: country.name.common,
          data: country,
        };
      }),
    });
  }

  return (
    <Flex gap="2" direction="column">
      <SelectRoot
        open={isOpen}
        collection={countriesCollection}
        size="sm"
        width="320px"
        onValueChange={({ value }) => {
          setInputValue(value[0]);
          setIsOpen(false);
        }}
      >
        <InputGroup
          ref={inputRef}
          onFocus={() => setIsOpen(true)}
          flex="1"
          endElement={<LuChevronDown />}
        >
          <Input placeholder="Select country" value={inputValue} onChange={handleSearch} />
        </InputGroup>
        <SelectContent maxH="48" ref={selectCountentRef}>
          {isLoading ? (
            <Spinner />
          ) : (
            countriesCollection.items
              .sort((a, b) => a.value.localeCompare(b.value, undefined, { sensitivity: 'base' }))
              .filter((el) => el.value.toLowerCase().includes(inputValue.toLowerCase()))
              .map((country) => (
                <SelectItem
                  cursor="pointer"
                  onClick={() => selectCountry(country.data)}
                  item={country}
                  key={country.value}
                  justifyContent="flex-start"
                >
                  <img
                    src={country.data.flags.svg}
                    alt={country.data.flags.alt}
                    height="18px"
                    width="24px"
                  ></img>
                  {country.label}
                </SelectItem>
              ))
          )}
        </SelectContent>
      </SelectRoot>
    </Flex>
  );
};
