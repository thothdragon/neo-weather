import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast.component';
import { SharedModule } from '../shared/shared.module';
import { ForecastRoutingModule } from './forecast-routing.module';



@NgModule({
  declarations: [
    ForecastComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ForecastRoutingModule,
  ],
  exports: [
    ForecastComponent,
  ]
})
export class ForecastModule { }
