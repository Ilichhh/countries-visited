import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { routing } from '@/src/i18n/routing';
import { Provider } from '@/src/components/ui/provider';
import StyledComponentsRegistry from '@/src/lib/registry';
import GlobalWrapper from '@/src/components/GlobalWrapper';
import Header from '@/src/components/layout/Header';

import type { Metadata } from 'next';

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
        <Provider>
          <NextIntlClientProvider messages={messages}>
            <StyledComponentsRegistry>
              <GlobalWrapper>
                <Header lng={locale}></Header>
                <main>{children}</main>
              </GlobalWrapper>
            </StyledComponentsRegistry>
          </NextIntlClientProvider>
        </Provider>
      </body>
    </html>
  );
}
