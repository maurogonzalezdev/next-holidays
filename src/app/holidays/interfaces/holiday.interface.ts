export interface IHoliday {
  date:        Date;
  localName:   string;
  name:        string;
  countryCode: CountryCode;
  fixed:       boolean;
  global:      boolean;
  counties:    null;
  launchYear:  null;
  types:       Type[];
}

export enum CountryCode {
  At = "AT",
}

export enum Type {
  Public = "Public",
}
