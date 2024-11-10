'use client';

import { Flex } from '@chakra-ui/react';

import GlobalStyles from '@/src/styles/globalStyles';

export default function GlobalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <Flex direction="column" justify="space-between" h="100vh">
        {children}
      </Flex>
    </>
  );
}
