import { Injectable } from '@angular/core';
import { openWeatherMap } from 'src/environments/openweathermap';
import { Weather } from '../models/weather.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather: Weather;

  constructor(
    private http: HttpClient,
  ) { }

  public getWeatherByName(name: string): Promise<Weather> {
    console.log('Conso via le Name');
    return this.http
      .get<Weather>(
        openWeatherMap.path
        + openWeatherMap.call.currentWeather
        + openWeatherMap.parameters.apiId
        + openWeatherMap.token + '&'
        + openWeatherMap.parameters.units + 'metric&'
        + openWeatherMap.parameters.city + name)
      .toPromise()
  }

  public getWeatherByCoords(longitude: number, latitude: number): Promise<Weather> {
    console.log('Conso via les Coords');
    return this.http
      .get<Weather>(
        openWeatherMap.path
        + openWeatherMap.call.currentWeather
        + openWeatherMap.parameters.apiId
        + openWeatherMap.token + '&'
        + openWeatherMap.parameters.units + 'metric&'
        + openWeatherMap.parameters.longitude + longitude + '&'
        + openWeatherMap.parameters.latitude + latitude)
      .toPromise()

  }

  public retrieveWeather(name): Promise<Weather> {
    return new Promise((resolve, reject) => {
      this.getWeatherByName(name)
        .then((weather: Weather) => {
          this.weather = weather;
          resolve(this.weather)
        })
        .catch((error: HttpErrorResponse) => { reject(error) })
    })
  }
}
