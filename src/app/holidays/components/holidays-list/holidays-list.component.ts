import { Component, Input } from '@angular/core';
import { IHoliday } from '../../interfaces/holiday.interface';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
})
export class HolidaysListComponent {
  private _holidays: IHoliday[] = [];
  private country?: ICountry;
  private _loadedHolidays: boolean = false;

  @Input()
  set setHolidays(holidays: IHoliday[]) {
    if (holidays.length > 0) {
      this._holidays = holidays;
      this._loadedHolidays = !this._loadedHolidays;
    }
    return;
  }

  @Input()
  set setCountry(country: ICountry) {
    if (country) {
      this.country = country;
    }
    return;
  }

  get getHolidays(): IHoliday[] {
    return this._holidays;
  }

  get getCountry(): ICountry {
    return this.country!;
  }

  get getLoadedHolidays(): boolean {
    return this._loadedHolidays;
  }
}
