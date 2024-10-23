import { Component } from '@angular/core';
import { ILocation } from '../../../location/interfaces/location.interface';
import { HolidaysService } from '../../../holidays/services/holidays.service';
import { IHoliday } from '../../../holidays/interfaces/holiday.interface';

@Component({
  selector: 'app-shared-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  public holidays: IHoliday[] = [];

  constructor(private holidaysService: HolidaysService) {}

  public getLocation({ iso2: countryCode }: ILocation): void {
    let year: number = new Date().getFullYear();

    this.holidaysService
      .getHolidays(year, countryCode)
      .subscribe((data: IHoliday[]) => {
        this.holidays = data;
      });
  }
}
