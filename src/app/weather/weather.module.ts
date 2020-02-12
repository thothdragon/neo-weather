import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherRoutingModule } from './weather-routing.module';



@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WeatherRoutingModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
