import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast.component';

const routes: Routes = [
  {
    path: `weather`,
    component: ForecastComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class ForecastRoutingModule { }
