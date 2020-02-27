import { Component, AfterViewInit } from '@angular/core';
import { CityService } from './shared/services/city.service';
import { PositionService } from './shared/services/position.service';
import { GeolocalisationPosition } from './shared/models/geolocalisation.model';
import { Weather } from './shared/models/weather.model';

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
  /**
   * Sidenav Attributs
   */
  events: string[] = [];
  opened: boolean;

  constructor(
    private cityService: CityService,
    private positionService: PositionService,
  ) {
  }

  ngAfterViewInit(): void {
    this.positionService.get()
      .then((succes) => {
        console.log('Succes Géolocalisation !');
        this.geoLocalisation = succes;
        this.longitude = this.geoLocalisation.coords.longitude;
        this.latitude = this.geoLocalisation.coords.latitude;
      })
      .catch((error) => { this.geoLocalisationError = error.message});
  }

}
