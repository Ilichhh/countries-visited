import { PropsWithChildren } from 'react';

import { Flex } from '@chakra-ui/react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      w="1024px"
      maxW="calc(100vw - 24px)"
      mx="auto"
      direction="column"
      gap="4"
      pt="4"
      pb="4"
      minH="calc(100vh - 117px)"
    >
      {children}
    </Flex>
  );
};
