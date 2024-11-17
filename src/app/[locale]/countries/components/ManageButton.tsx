import { MenuItem, MenuRoot, MenuTrigger, MenuContent } from '@/src/components/ui/menu';
import { Button } from '@/src/components/ui/button';
import { LuSettings2 } from 'react-icons/lu';
import { Switch } from '@/src/components/ui/switch';

export const ManageButton = () => {
  return (
    <MenuRoot closeOnSelect={false}>
      <MenuTrigger asChild>
        <Button variant="surface" size="sm">
          <LuSettings2 />
          Manage
        </Button>
      </MenuTrigger>
      <MenuContent p="2" w="160px">
        <MenuItem value="map" justifyContent="space-between">
          Map
          <Switch></Switch>
        </MenuItem>
        <MenuItem value="data" justifyContent="space-between">
          Data
          <Switch></Switch>
        </MenuItem>
        <MenuItem value="timeline" justifyContent="space-between">
          Timeline
          <Switch></Switch>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};
