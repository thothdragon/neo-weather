import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { Forecast } from '../shared/models/forecast.model';
import { List } from '../shared/models/list.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  forecast: Forecast;
  forecastList: List[];

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.weatherService.getForecastByName('Lyon')
      .then((succes: Forecast) => {
        this.forecast = succes;
        console.log(this.forecast);

        this.forecastList = this.forecast.list;
      console.log(this.forecastList);     
      })
      .catch((error) => { console.log(error) });

    // if (this.forecast) {
    //   this.forecastList = this.forecast.list;
    //   console.log(this.forecastList);
    // }
  }

}
