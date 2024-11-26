'use client';

import { MouseEvent, useCallback, useState, useEffect, useMemo } from 'react';
import { useCountryStore } from '@/src/lib/store/useCountryStore';
import { useCountries } from '@/src/hooks/useCountries';
import { useUserStats } from '@/src/hooks/useUserStats';
import { useParams } from 'next/navigation';

import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

interface CountyCodeList {
  [key: string]: number;
}

interface WorldMapProps {
  color: string;
}

export const WorldMap = ({ color }: WorldMapProps) => {
  const { data, isLoading } = useCountries();

  const selectedCountryCode = useCountryStore().data?.cca2;
  const selectCountry = useCountryStore((state) => state.selectCountry);

  const { username } = useParams();
  const { data: userData } = useUserStats(username as string);

  const [values, setValues] = useState({});

  const countyCodeList: CountyCodeList | undefined = useMemo(() => {
    return userData?.visitedCountries.reduce((acc: CountyCodeList, curr) => {
      acc[curr.cca2] = 333;
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
      key={color}
      map={worldMill}
      backgroundColor="bg.muted"
      regionStyle={{
        initial: {
          fill: '#F0F0F0',
        },
        hover: {
          fill: '#D6D6D6',
        },
      }}
      style={{
        width: '100vw',
        height: '600px',
        position: 'absolute',
        left: 0,
      }}
      series={{
        regions: [
          {
            scale: ['#E2AEFF', color],
            values: values,
            attribute: '',
          },
        ],
      }}
      onRegionClick={handleClick}
    ></VectorMap>
  );
};
