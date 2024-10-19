import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../interfaces/location.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private apiUrl: string = 'https://user-ip-data-rest-api.p.rapidapi.com/check';

  private _headers: { [k: string]: string } = {
    'x-rapidapi-key': 'a1fdffe898msh2c5fed9fe66e722p1bc990jsne91faaf35380',
    'x-rapidapi-host': 'user-ip-data-rest-api.p.rapidapi.com',
  };

  constructor(private _httpClient: HttpClient) {}

  public getLocation(): Observable<Location> {
    return this._httpClient.get<Location>(this.apiUrl, {
      headers: this._headers,
    });
  }
}
