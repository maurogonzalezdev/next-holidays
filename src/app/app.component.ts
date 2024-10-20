import { Component, OnInit } from '@angular/core';
import { LocationService } from './location/services/location.service';
import { Location } from './location/interfaces/location.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'Next Holidays';

  public locationInfo?: Location;

  constructor(private _locationService: LocationService) {}
  ngOnInit(): void {
    this._locationService.getLocation().subscribe((data) => {
      this.locationInfo = data;
    });
  }
}
