import { Component, AfterViewInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { Weather } from '../shared/models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements AfterViewInit {

  private weather: Weather;
  
  constructor(
    private weatherService: WeatherService
  ) { }

  ngAfterViewInit(): void {
    this.weatherService.retrieveWeather('Lyon')
      .then((succes:Weather) => {console.log('Succes')});
  }

}
