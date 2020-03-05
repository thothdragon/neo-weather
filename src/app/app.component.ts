import { Component, AfterViewInit } from '@angular/core';
import { PositionService } from './shared/services/position.service';
import { GeolocalisationPosition } from './shared/models/geolocalisation.model';
import { Weather } from './shared/models/weather.model';
import { WeatherService } from './shared/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Neo Weather';
  geoLocalisation: GeolocalisationPosition;
  longitude: number;
  latitude: number;
  geoLocalisationError: string;
  weather: Weather;
  cityName: string;

  constructor(
    private positionService: PositionService,
    private weatherService: WeatherService,
  ) {
  }

  ngAfterViewInit(): void {
    this.positionService.get()
      .then((position) => {
        this.weatherService.getWeatherByCoords(position.coords.longitude, position.coords.latitude)
          .then((weather) => { this.cityName = weather.name })
          .catch((error) => { console.log(error) });
      })
      .catch((error) => {
        this.geoLocalisationError = error.message;
        this.cityName = 'Lyon';
      });
  }

}
