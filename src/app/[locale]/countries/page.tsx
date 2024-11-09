import { Group } from '@chakra-ui/react';
import { CountrySelection } from './components/CountrySelection';
import { SelectedCountries } from './components/SelectedCountries';

export default function Countries() {
  return (
    <Group>
      <CountrySelection></CountrySelection>
      <SelectedCountries></SelectedCountries>
    </Group>
  );
}
