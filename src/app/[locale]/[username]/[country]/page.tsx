import { Container } from '@/src/components/layout/Container';
import { Heading } from '@chakra-ui/react';

interface CountryProps {
  params: {
    country: string;
  };
}

export default async function Country({ params }: CountryProps) {
  const { country } = await params;

  return (
    <Container>
      <Heading>{country}</Heading>
    </Container>
  );
}
