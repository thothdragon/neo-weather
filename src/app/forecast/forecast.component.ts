import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { Forecast } from '../shared/models/forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  forecast: Forecast;
  forecastList;
  timestamp;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.weatherService.getForecastByName('Lyon')
      .then((succes: Forecast) => {
        this.forecast = succes;
        console.log(this.forecast);
        this.forecastList = succes.list
        console.log(this.forecastList);

        this.timestamp = new Date(this.forecast.list[0].dt * 1000)

        console.log(this.timestamp);
        
      });
  }

}
