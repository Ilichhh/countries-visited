import GlobalWrapper from '@/components/GlobalWrapper';
import Header from '@/components/layout/Header';
import { Provider } from '@/components/ui/provider';
import StyledComponentsRegistry from '@/lib/registry';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Countries visited',
  description: 'The best app in the world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <StyledComponentsRegistry>
            <GlobalWrapper>
              <Header></Header>
              <main>{children}</main>
            </GlobalWrapper>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
