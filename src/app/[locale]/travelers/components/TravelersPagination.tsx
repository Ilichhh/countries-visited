import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@/src/components/ui/pagination';
import { HStack } from '@chakra-ui/react';

export const TravelersPagination = () => {
  return (
    <PaginationRoot count={3} pageSize={10} defaultPage={1}>
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};
