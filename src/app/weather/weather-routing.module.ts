import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `weather`,
    component: WeatherComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class WeatherRoutingModule { }
