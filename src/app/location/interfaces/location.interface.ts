export interface ILocation {
  ip:                string;
  country:           string;
  iso2:              string;
  iso3:              string;
  countryFlag:       string;
  region:            string;
  regionName:        string;
  city:              string;
  zip:               string;
  lat:               number;
  lon:               number;
  isp:               string;
  org:               string;
  as:                string;
  timeZone:          string;
  dialCode:          string;
  language:          string;
  currency:          string;
  currencyName:      string;
  tld:               string;
  countryCapital:    string;
  countryNativeName: string;
  countryBorders:    string[];
}
