import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from '../models/weather.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

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
}

