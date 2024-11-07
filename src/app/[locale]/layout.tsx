import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import StyledComponentsRegistry from '@/src/lib/registry';
import GlobalWrapper from '@/src/components/GlobalWrapper';
import { routing } from '@/src/i18n/routing';
import { Provider as ChakraUIProvider } from '@/src/components/ui/provider';
import Header from '@/src/components/layout/Header';

import type { Metadata } from 'next';
import { Footer } from '@/src/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Countries visited',
  description: 'The best app in the world',
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: 'en' | 'ru';
  };
}

export default async function LocaleLayout({ children, params }: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ChakraUIProvider>
          <StyledComponentsRegistry>
            <NextIntlClientProvider messages={messages}>
              <GlobalWrapper>
                <Header lng={locale}></Header>
                <main>{children}</main>
                <Footer></Footer>
              </GlobalWrapper>
            </NextIntlClientProvider>
          </StyledComponentsRegistry>
        </ChakraUIProvider>
      </body>
    </html>
  );
}