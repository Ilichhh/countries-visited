'use client';

import {
  ColorPickerEyeDropper,
  ColorPickerSliders,
  ColorPickerRoot,
  ColorPickerLabel,
  ColorPickerControl,
  ColorPickerContent,
  ColorPickerArea,
  ColorPickerTrigger,
} from '@/src/components/ui/color-picker';
import { HStack, Color } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface MapColorPickerProps {
  color: Color;
  setColor: Dispatch<SetStateAction<Color>>;
}

export const MapColorPicker = ({ color, setColor }: MapColorPickerProps) => {
  const handleColorCHange = (e: { value: Color }) => {
    setColor(e.value);
  };

  return (
    <ColorPickerRoot
      mt="550px"
      ml="80%"
      value={color}
      format="hsla"
      onValueChange={handleColorCHange}
      maxW="200px"
      flexDirection="row"
      alignItems="center"
      size="xs"
    >
      <ColorPickerLabel>Visited countries - </ColorPickerLabel>
      <ColorPickerControl>
        <ColorPickerTrigger />
      </ColorPickerControl>
      <ColorPickerContent>
        <ColorPickerArea />
        <HStack>
          <ColorPickerEyeDropper />
          <ColorPickerSliders />
        </HStack>
      </ColorPickerContent>
    </ColorPickerRoot>
  );
};
