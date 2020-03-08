import { Component, AfterViewInit } from '@angular/core';
import { PositionService } from '../shared/services/position.service';
import { Weather } from '../shared/models/weather.model';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements AfterViewInit {

  weather: Weather;

  constructor(
    private position: PositionService,
    private weatherService: WeatherService,
  ) { }

  ngAfterViewInit(): void {

    // this.position.get()
    //   .then((weather: Weather) => {
    //     this.weather = weather;
    //   })
    //   .catch((error) => { console.log(error) })

    this.weatherService.getWeatherByName('Lyon')
      .then((succes: Weather) => {
        this.weather = succes;
      });

  }

}
