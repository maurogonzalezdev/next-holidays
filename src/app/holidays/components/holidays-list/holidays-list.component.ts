import { Component, Input, OnInit, Output } from '@angular/core';
import { IHoliday } from '../../interfaces/holiday.interface';

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styles: ``,
})
export class HolidaysListComponent {
  private _holidays: IHoliday[] = [];

  @Input()
  set setHolidays(holidays: IHoliday[]) {
    if (holidays.length > 0) this._holidays = holidays;

    return;
  }

  get getHolidays(): IHoliday[] {
    return this._holidays;
  }
}
