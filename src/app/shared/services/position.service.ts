import { Injectable } from '@angular/core';
import { GeolocalisationPosition } from '../models/geolocalisation.model';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor() { }

  public get(): Promise<GeolocalisationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => { resolve(position) },
        (error) => { reject(error) });
    })
  }
}

