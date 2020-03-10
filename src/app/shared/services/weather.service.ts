import { Injectable } from '@angular/core';
import { openWeatherMap } from 'src/environments/openweathermap';
import { Weather } from '../models/weather.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Forecast } from '../models/forecast.model';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weather = new Subject<Weather>();
  forecast = new Subject<Forecast>();

  constructor(
    private http: HttpClient,
  ) { }

  setWeather(weather: Weather) {
    this.weather.next(weather);
  }

  getWeather(): Observable<Weather> {
    return this.weather;
  }

  setForecast(forecast: Forecast) {
    this.forecast.next(forecast);
  }

  getForecast(): Observable<Forecast> {
    return this.forecast;
  }

  public getWeatherByName(name: string): Observable<Weather> {
    console.log('Conso Weather via le Name');
    return this.http
      .get<Weather>(
        openWeatherMap.path
        + openWeatherMap.call.currentWeather
        + openWeatherMap.parameters.apiId
        + openWeatherMap.token + '&'
        + openWeatherMap.parameters.units + 'metric&'
        + openWeatherMap.parameters.city + name)
  }

  public getWeatherByCoords(longitude: number, latitude: number): Observable<Weather> {
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
  }

  public getForecastByName(name: string): Observable<Forecast> {
    console.log('Conso Forecast via le Name');
    return this.http
      .get<Forecast>(
        openWeatherMap.path
        + openWeatherMap.call.forecastWeather
        + openWeatherMap.parameters.apiId
        + openWeatherMap.token + '&'
        + openWeatherMap.parameters.units + 'metric&'
        + openWeatherMap.parameters.city + name
        + '&cnt=15')
  }

  public getForecastByCoords(longitude: number, latitude: number): Observable<Forecast> {
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
        + '&cnt=15')
  }

}
