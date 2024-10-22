import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationBarComponent } from './components/location-bar/location-bar.component';



@NgModule({
  declarations: [
    LocationBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LocationBarComponent]
})
export class LocationModule { }
