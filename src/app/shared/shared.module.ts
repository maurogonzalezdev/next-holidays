import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { LocationModule } from '../location/location.module';
import { HolidaysModule } from "../holidays/holidays.module";

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, LocationModule, HolidaysModule],
  exports: [MainPageComponent],
})
export class SharedModule {}
