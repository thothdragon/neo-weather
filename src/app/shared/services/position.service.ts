import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { Weather } from '../models/weather.model';
import { Forecast } from '../models/forecast.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  // weather: Weather;
  longitude = new Subject<number>();
  latitude = new Subject<number>();

  constructor(
    private weatherService: WeatherService,
  ) { }

  setLongitude(longitude: number) {
    this.longitude.next(longitude);
  }

  getLongitude(): Observable<number> {
    return this.longitude;
  }

  setLatitude(longitude: number) {
    this.latitude.next(longitude);
  }

  getLatitude(): Observable<number> {
    return this.latitude;
  }

  // public get() /* : Promise<any> */ {

  // return new Promise((resolve, reject) => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position: Position) => {
  //       resolve(position)
  //       /**
  //        * Observable elements
  //        */
  //       // this.weatherService.getWeatherByCoords(position.coords.longitude, position.coords.latitude)
  //       //   .subscribe((e) => {
  //       //     console.log(e);
  //       //   })

  //       /**
  //        * Promise elements
  //        */
  //       // .then((weather: Weather) => {
  //       //   resolve(weather)
  //       // })
  //       // .catch((error: HttpErrorResponse) => { reject(error) });
  //     },
  //     (error: PositionError) => { reject(error) });
  // })
  // }

  // public getForecast(): Promise<Forecast> {
  //   return new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition(
  //       (position: Position) => {
  //         this.weatherService.getForecastByCoords(position.coords.longitude, position.coords.latitude)
  //           .then((forecast: Forecast) => {
  //             resolve(forecast)
  //           })
  //           .catch((error: HttpErrorResponse) => { reject(error) });
  //       },
  //       (error: PositionError) => { reject(error) });
  //   })
  // }

}

