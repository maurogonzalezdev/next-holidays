import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHoliday } from '../interfaces/holiday.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HolidaysService {
  private _apiUrl: string = 'https://date.nager.at/api/v3/publicholidays';

  constructor(private _http: HttpClient) {}

  public getHolidays(year: number, countryCode: String): Observable<IHoliday[]> {
    return this._http.get<IHoliday[]>(`${this._apiUrl}/${year}/${countryCode}`);
  }
}
