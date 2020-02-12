import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollutionComponent } from './pollution.component';
import { SharedModule } from '../shared/shared.module';
import { PollutionRoutingModule } from './pollution-routing.module';



@NgModule({
  declarations: [
    PollutionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PollutionRoutingModule
  ],
  exports: [
    PollutionComponent
  ]
})
export class PollutionModule { }
