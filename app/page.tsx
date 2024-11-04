'use client';

import GlobalStyles from '@/styles/globalStyles';
import styled from 'styled-components';

const MainHeader = styled.h1`
  color: grey;
`;

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <div>
        <main>
          <MainHeader>Hello</MainHeader>
        </main>
      </div>
    </>
  );
}
