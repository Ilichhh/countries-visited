import { PropsWithChildren } from 'react';

import { Flex } from '@chakra-ui/react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <Flex w="700px" mx="auto">
      {children}
    </Flex>
  );
};
