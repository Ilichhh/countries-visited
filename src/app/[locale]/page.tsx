import { Container } from '@/src/components/layout/Container';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <Container>
        <h1>{t('homePage.welcome')}</h1>
      </Container>
    </>
  );
}
