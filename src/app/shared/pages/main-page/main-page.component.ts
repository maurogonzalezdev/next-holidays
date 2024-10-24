import { Component } from '@angular/core';
import { ILocation } from '../../../location/interfaces/location.interface';
import { HolidaysService } from '../../../holidays/services/holidays.service';
import { IHoliday } from '../../../holidays/interfaces/holiday.interface';
import { ICountry } from '../../../holidays/interfaces/country.interface';

@Component({
  selector: 'app-shared-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  public holidays: IHoliday[] = [];
  public country: ICountry = {
    country: '',
    flag: '',
  };

  constructor(private holidaysService: HolidaysService) {}

  public getLocation({
    iso2: countryCode,
    countryNativeName,
    countryFlag,
  }: ILocation): void {
    let year: number = new Date().getFullYear();

    this.country = {
      country: countryNativeName,
      flag: countryFlag,
    };

    this.holidaysService
      .getHolidays(year, countryCode)
      .subscribe((data: IHoliday[]) => {
        this.holidays = data;
      });
  }
}
