import { Country } from '@/src/types/country';
import { create } from 'zustand';

interface State {
  data: Country | null;
  selectCountry: (newCountry: Country) => void;
}

export const useCountryStore = create<State>((set) => ({
  data: null,
  selectCountry: (newCountry) => set({ data: newCountry }),
}));
