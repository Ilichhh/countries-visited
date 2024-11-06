export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: { [key: string]: { official: string; common: string } };
  };
  cca2: string;
  cca3: string;
  ccn3?: string;
  region: string;
  subregion?: string;
  languages?: { [key: string]: string };
  capital?: string[];
  population: number;
  area: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  timezones: string[];
  continents: string[];
  translations?: {
    [key: string]: { official: string; common: string };
  };
  currencies?: {
    [key: string]: { name: string; symbol: string };
  };
}
