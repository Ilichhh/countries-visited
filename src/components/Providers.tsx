'use client';

import { PropsWithChildren } from 'react';

import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SessionProvider>
        <NextTopLoader />
        {children}
      </SessionProvider>
    </>
  );
};
