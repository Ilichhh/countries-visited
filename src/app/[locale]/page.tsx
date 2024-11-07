import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <div>
        <h1>{t('homePage.welcome')}</h1>
      </div>
    </>
  );
}
