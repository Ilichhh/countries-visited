'use client';

import CountriesList from './components/CountriesList';
import GlobalStyles from '@/styles/globalStyles';

export default function Countries() {
  return (
    <>
      <GlobalStyles />
      <div>
        <CountriesList></CountriesList>
      </div>
    </>
  );
}
