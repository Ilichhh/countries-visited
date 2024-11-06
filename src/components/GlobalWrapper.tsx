'use client';

import GlobalStyles from '@/src/styles/globalStyles';

export default function GlobalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
