'use client';

import GlobalStyles from '@/src/styles/globalStyles';
import styled from 'styled-components';

export default function GlobalWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 700px;
  height: 100%;
  margin: 0 auto;
`;
