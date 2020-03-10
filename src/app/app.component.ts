import { Component, AfterViewInit } from '@angular/core';
import { PositionService } from './shared/services/position.service';
import { Weather } from './shared/models/weather.model';
import { CityService } from './shared/services/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title: string = 'Neo Weather';
  messageError: string;
  cityName: string;

  constructor(
    private positionService: PositionService,
    private cityService: CityService,
  ) {
  }

  ngAfterViewInit(): void {

    navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        this.positionService.setLongitude(position.coords.longitude);
        this.positionService.setLatitude(position.coords.latitude);
      },
      (error: PositionError) => { console.log(error) }
    )

    this.cityService.getCity().subscribe((e) => { this.cityName = e })

  }

}
