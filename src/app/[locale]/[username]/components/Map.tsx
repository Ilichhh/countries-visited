'use client';

import { Box, parseColor } from '@chakra-ui/react';
import { WorldMap } from './WorldMap';
import { MapColorPicker } from './MapColorPicker';
import { useState } from 'react';

export const Map = () => {
  const [color, setColor] = useState(parseColor('#eb5e41'));

  return (
    <Box h="600px">
      <WorldMap color={color.toString('hex')}></WorldMap>
      <MapColorPicker color={color} setColor={setColor}></MapColorPicker>
    </Box>
  );
};
