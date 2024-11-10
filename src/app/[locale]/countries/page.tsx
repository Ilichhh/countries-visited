import { CountrySelection } from './components/CountrySelection';
import { SelectedCountries } from './components/SelectedCountries';
import { Container } from '@/src/components/layout/Container';

export default function Countries() {
  return (
    <Container>
      <CountrySelection></CountrySelection>
      <SelectedCountries></SelectedCountries>
    </Container>
  );
}
