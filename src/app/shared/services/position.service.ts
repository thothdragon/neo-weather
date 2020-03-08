import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { Weather } from '../models/weather.model';
import { Forecast } from '../models/forecast.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  weather: Weather;

  constructor(
    private weatherService: WeatherService,
  ) { }

  public get(): Promise<Weather> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          this.weatherService.getWeatherByCoords(position.coords.longitude, position.coords.latitude)
            .then((weather: Weather) => {
              resolve(weather)
            })
            .catch((error: HttpErrorResponse) => { reject(error) });
        },
        (error: PositionError) => { reject(error) });
    })
  }

  public getForecast(): Promise<Forecast> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          this.weatherService.getForecastByCoords(position.coords.longitude, position.coords.latitude)
            .then((forecast: Forecast) => {
              resolve(forecast)
            })
            .catch((error: HttpErrorResponse) => { reject(error) });
        },
        (error: PositionError) => { reject(error) });
    })
  }

}

