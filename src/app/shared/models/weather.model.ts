import { Temperature } from './temperature.model';

/*export class Weather {
    public description: string;
    public humidity: number;
    public wind: number;
    public temperature: Temperature;
}*/

export class Weather {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    name: string;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    visibility: number;
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
}

/*
declare module namespace {

  export interface Coord {
      lon: number;
      lat: number;
  }

  export interface Weather {
      id: number;
      main: string;
      description: string;
      icon: string;
  }

  export interface Main {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
  }

  export interface Wind {
      speed: number;
      deg: number;
      gust: number;
  }

  export interface Rain {
      3h: number;
  }

  export interface Clouds {
      all: number;
  }

  export interface Sys {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
  }

  export interface RootObject {
      coord: Coord;
      weather: Weather[];
      base: string;
      main: Main;
      visibility: number;
      wind: Wind;
      rain: Rain;
      clouds: Clouds;
      dt: number;
      sys: Sys;
      timezone: number;
      id: number;
      name: string;
      cod: number;
  }

}
*/