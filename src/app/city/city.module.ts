import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city.component';
import { SharedModule } from '../shared/shared.module';
import { CityRoutingModule } from './city-routing.module';



@NgModule({
  declarations: [
    CityComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CityRoutingModule,
  ],
  exports: [
    CityComponent,
  ]
})
export class CityModule { }
