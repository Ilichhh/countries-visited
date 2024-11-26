import { Heading, HStack, Input } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { SegmentedControl } from '@/src/components/ui/segmented-control';
import { LuTable, LuList, LuSearch } from 'react-icons/lu';
import { InputGroup } from '@/src/components/ui/input-group';

export const ControlPanel = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" gap="4">
      <Heading size="2xl">Top travelers</Heading>
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input placeholder="Search traveler" />
      </InputGroup>
      <SegmentedControl
        defaultValue="table"
        items={[
          {
            value: 'table',
            label: (
              <HStack>
                <LuTable />
                Table
              </HStack>
            ),
          },
          {
            value: 'list',
            label: (
              <HStack>
                <LuList />
                List
              </HStack>
            ),
          },
        ]}
      />
    </Flex>
  );
};
