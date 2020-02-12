import { Component, AfterViewInit } from '@angular/core';
import { CityService } from './shared/services/city.service';
import { PositionService } from './shared/services/position.service';
import { GeolocalisationPosition } from './shared/models/geolocalisation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Neo Weather';
  events: string[] = [];
  opened: boolean;
  geoLocalisation: GeolocalisationPosition;
  longitude: number;
  latitude: number;

  constructor(
    private cityService: CityService,
    private positionService: PositionService,
  ) {
  }

  ngAfterViewInit(): void {
    this.positionService.get()
      .then((succes) => {
        console.log('Succes :)');
        this.geoLocalisation = succes;
        console.log(this.geoLocalisation);
        this.longitude = this.geoLocalisation.coords.longitude;
        this.latitude = this.geoLocalisation.coords.latitude;
        console.log(this.latitude);
        console.log(this.longitude);
      })
      .catch((error) => { console.log(error); console.log('Echec :)'); });
  }

}
