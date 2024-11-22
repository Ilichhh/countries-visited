'use client';

import { MouseEvent, useCallback, useState, useEffect, useMemo } from 'react';
import { useCountryStore } from '@/src/lib/store/useCountryStore';
import { useCountries } from '@/src/hooks/useCountries';
import { useParams } from 'next/navigation';

import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { useUserStats } from '@/src/hooks/useUserStats';

interface CountyCodeList {
  [key: string]: number;
}

export const WorldMap = () => {
  const { data, isLoading } = useCountries();

  const selectedCountryCode = useCountryStore().data?.cca2;
  const selectCountry = useCountryStore((state) => state.selectCountry);

  const { username } = useParams();
  const { data: userData } = useUserStats(username as string);

  const [values, setValues] = useState({});

  const countyCodeList: CountyCodeList | undefined = useMemo(() => {
    return userData?.trips?.reduce((acc: CountyCodeList, curr) => {
      acc[curr.countryCode] = 333;
      return acc;
    }, {});
  }, [userData]);

  useEffect(() => {
    if (countyCodeList) {
      setValues(countyCodeList);
    }
    if (selectedCountryCode) {
      setValues({ ...countyCodeList, [selectedCountryCode]: 17 });
    }
  }, [countyCodeList, selectedCountryCode]);

  const handleClick = useCallback(
    (_: MouseEvent<SVGElement>, code: string) => {
      if (isLoading) return;
      const countryCode = data?.find((el) => el.cca2 === code);
      if (countryCode) {
        selectCountry(countryCode);
      }
    },
    [data, isLoading, selectCountry]
  );

  return (
    <VectorMap
      map={worldMill}
      style={{
        width: '100%',
        height: '500px',
      }}
      series={{
        regions: [
          {
            scale: ['#E2AEFF', '#5E32CA'],
            values: values,
            attribute: '',
          },
        ],
      }}
      onRegionClick={handleClick}
    ></VectorMap>
  );
};
