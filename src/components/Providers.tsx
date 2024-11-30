'use client';

import { PropsWithChildren } from 'react';

import NextTopLoader from 'nextjs-toploader';
import StyledComponentsRegistry from '@/src/lib/registry';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';

import { Provider as ChakraUIProvider } from '@/src/components/ui/provider';
import { Flex } from '@chakra-ui/react';
import { Toaster } from './ui/toaster';

import GlobalStyles from '@/src/styles/globalStyles';

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraUIProvider>
        <StyledComponentsRegistry>
          <SessionProvider>
            <NextTopLoader color="#2299DD" showSpinner={false} />
            <Toaster />
            <GlobalStyles />
            <Flex direction="column" justify="space-between" h="100vh">
              {children}
            </Flex>
            <ReactQueryDevtools initialIsOpen={false} />
          </SessionProvider>
        </StyledComponentsRegistry>
      </ChakraUIProvider>
    </QueryClientProvider>
  );
};
