import { Injectable } from '@angular/core';
import { openWeatherMap } from 'src/environments/openweathermap';
import { Weather } from '../models/weather.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Forecast } from '../models/forecast.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather: Weather;
  forecast: Forecast;

  constructor(
    private http: HttpClient,
  ) { }

  public getWeatherByName(name: string): Promise<Weather> {
    console.log('Conso Weather via le Name');
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
    console.log('Conso Weather via les Coords');
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

  public getForecastByName(name: string): Promise<Forecast> {
    console.log('Conso Forecast via le Name');
    return this.http
      .get<Forecast>(
        openWeatherMap.path
        + openWeatherMap.call.forecastWeather
        + openWeatherMap.parameters.apiId
        + openWeatherMap.token + '&'
        + openWeatherMap.parameters.units + 'metric&'
        + openWeatherMap.parameters.city + name
        + '&cnt=10')
      .toPromise()
  }

  public getForecastByCoords(longitude: number, latitude: number): Promise<Forecast> {
    console.log('Conso Forecast via les Coords');
    return this.http
      .get<Forecast>(
        openWeatherMap.path
        + openWeatherMap.call.forecastWeather
        + openWeatherMap.parameters.apiId
        + openWeatherMap.token + '&'
        + openWeatherMap.parameters.units + 'metric&'
        + openWeatherMap.parameters.longitude + longitude + '&'
        + openWeatherMap.parameters.latitude + latitude
        + '&cnt=10')
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

  public retrieveForecast(name): Promise<Forecast> {
    return new Promise((resolve, reject) => {
      this.getForecastByName(name)
        .then((forecast: Forecast) => {
          this.forecast = forecast;
          resolve(this.forecast)
        })
        .catch((error: HttpErrorResponse) => { reject(error) })
    })
  }
}
