import { Component, OnInit } from '@angular/core';
import { LocationService } from './location/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  title = 'Next Holidays';

  constructor(private _locationService: LocationService) {}

  ngOnInit(): void {
    this._locationService.getLocation().subscribe((data) => console.log(data));
  }
}
