import { Component, AfterViewInit } from '@angular/core';
import { PositionService } from './shared/services/position.service';
import { GeolocalisationPosition } from './shared/models/geolocalisation.model';
import { Weather } from './shared/models/weather.model';
import { WeatherService } from './shared/services/weather.service';
import { City } from './shared/models/city.model';

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
  /**
   * Sidenav Attributs
   */
  events: string[] = [];
  opened: boolean;

  constructor(
    private positionService: PositionService,
    private weatherService: WeatherService,
  ) {
  }

  ngAfterViewInit(): void {
    this.positionService.get()
      .then((succes) => {
        console.log('Succes Géolocalisation !');
        this.geoLocalisation = succes;
        this.longitude = this.geoLocalisation.coords.longitude;
        this.latitude = this.geoLocalisation.coords.latitude;
        //this.weatherService.getWeatherByCoords(this.longitude,this.latitude);
      })
      .catch((error) => { 
        console.log('Echec de la Géolocalisation');        
        this.geoLocalisationError = error.message;
        this.cityName = 'Lyon';
      });
  }

}
