'use client';

import GlobalStyles from '@/styles/globalStyles';

export default function GlobalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
