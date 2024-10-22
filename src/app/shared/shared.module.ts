import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { LocationModule } from '../location/location.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, LocationModule],
  exports: [MainPageComponent],
})
export class SharedModule {}
