import { Component, AfterViewInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { Weather } from '../shared/models/weather.model';
import { PositionService } from '../shared/services/position.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements AfterViewInit {

  weather: Weather;

  constructor(
    private weatherService: WeatherService,
    private position: PositionService,
  ) { }

  ngAfterViewInit(): void {

    this.position.get()
      .then((weather) => {
        this.weather = weather ;               
      })
      .catch((error) => { console.log(error) })

    // this.weatherService.getWeatherByName('Le Teil')
    //   .then((succes: Weather) => {
    //     this.weatherService.weather = succes;
    //     console.log(this.weatherService.weather, 'Weather of Weather Service in Weather Component');
    //     this.weather = this.weatherService.weather;
    //     console.log(this.weather, 'The Weather display');
    //   });

  }

}
