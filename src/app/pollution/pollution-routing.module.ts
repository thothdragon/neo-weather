import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PollutionComponent } from './pollution.component';

const routes: Routes = [
  {
    path: `pollution`,
    component: PollutionComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class PollutionRoutingModule { }
