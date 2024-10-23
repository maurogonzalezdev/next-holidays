import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ILocation } from '../interfaces/location.interface';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private _apiUrl: string =
    'https://user-ip-data-rest-api.p.rapidapi.com/check';

  private _headers: HttpHeaders = new HttpHeaders({
    'x-rapidapi-key': '9bf9cb27f4msh9ef6470ae2a8dc0p12076ejsn7c642920d973',
    'x-rapidapi-host': 'user-ip-data-rest-api.p.rapidapi.com',
  });

  constructor(private _httpClient: HttpClient) {}

  public getLocation(): Observable<ILocation> {
    return this._httpClient.get<ILocation>(this._apiUrl, {
      headers: this._headers,
    });
  }
}
