import { Container } from '@/src/components/layout/Container';
import { Box, Flex } from '@chakra-ui/react';
import { TravelersList } from './components/TravelersList';
import { ControlPanel } from './components/ControlPanel';
import { TravelersPagination } from './components/TravelersPagination';

export default function Travelers() {
  return (
    <Container>
      <Flex gap="4" mt="4" direction="column" flex="1">
        <ControlPanel></ControlPanel>
        <Box flex="1">
          <TravelersList></TravelersList>
        </Box>
        <TravelersPagination></TravelersPagination>
      </Flex>
    </Container>
  );
}
