import { notFound } from 'next/navigation';

import { routing } from '@/src/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { Providers } from '@/src/components/Providers';

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
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <Header lng={locale}></Header>
            <main>{children}</main>
            <Footer></Footer>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
