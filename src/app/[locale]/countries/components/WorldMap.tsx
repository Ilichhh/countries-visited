'use client';

import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

const countries = {
  RU: 79,
  CN: 33,
};

export const WorldMap = () => {
  return (
    <VectorMap
      map={worldMill}
      style={{
        width: '100%',
        height: '400px',
      }}
      series={{
        regions: [
          {
            scale: ['#E2AEFF', '#5E32CA'],
            values: countries,
            attribute: '',
          },
        ],
      }}
    ></VectorMap>
  );
};
