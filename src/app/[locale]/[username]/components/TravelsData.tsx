import { Tabs } from '@chakra-ui/react';
import { Timeline } from '@/src/components/shared/timeline/Timeline';

export const TravelsData = () => {
  return (
    <Tabs.Root lazyMount unmountOnExit defaultValue="by-year">
      <Tabs.List>
        <Tabs.Trigger value="by-year">By year</Tabs.Trigger>
        <Tabs.Trigger value="by-continent">By continent</Tabs.Trigger>
        <Tabs.Trigger value="by-country">By country</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="by-year">
        <Timeline></Timeline>
      </Tabs.Content>
      <Tabs.Content value="by-continent">By continent</Tabs.Content>
      <Tabs.Content value="by-country">By country</Tabs.Content>
    </Tabs.Root>
  );
};
