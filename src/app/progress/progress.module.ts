import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { SharedModule } from '../shared/shared.module';
import { ProgressRoutingModule } from './progress-routing.module';



@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProgressRoutingModule
  ],
  exports: [
    ProgressComponent
  ]
})
export class ProgressModule { }
