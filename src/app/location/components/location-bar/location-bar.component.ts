import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { ILocation } from '../../interfaces/location.interface';

@Component({
  selector: 'app-location-bar',
  templateUrl: './location-bar.component.html',
  styles: ``,
})
export class LocationBarComponent implements OnInit {
  @Output()
  public emitLocation: EventEmitter<ILocation> = new EventEmitter();

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((data: ILocation) => {
      this.emitLocation.emit(data);
    });
  }
}
