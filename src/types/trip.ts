import { Country } from './country';

export interface TripData {
  userId: string;
  country: Country;
  startDate?: Date;
  endDate?: Date;
  description?: string;
}
