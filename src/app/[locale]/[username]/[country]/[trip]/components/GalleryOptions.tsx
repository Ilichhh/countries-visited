'use client';

import { Box } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { LuSettings, LuLogOut } from 'react-icons/lu';
import { EllipsisVertical } from 'lucide-react';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/src/components/ui/menu';

export const GalleryOptions = () => {
  return (
    <MenuRoot positioning={{ placement: 'bottom-end' }}>
      <MenuTrigger asChild>
        <IconButton size="sm" variant="surface">
          <EllipsisVertical></EllipsisVertical>
        </IconButton>
      </MenuTrigger>
      <MenuContent p="2">
        <MenuItem value="edit">
          <LuSettings />
          Edit album
        </MenuItem>
        <MenuItem value="delete" color="fg.error" _hover={{ bg: 'bg.error', color: 'fg.error' }}>
          <LuLogOut />
          <Box flex="1">Delete</Box>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};
