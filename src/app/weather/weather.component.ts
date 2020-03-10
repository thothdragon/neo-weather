import { Component, AfterViewInit } from '@angular/core';
import { PositionService } from '../shared/services/position.service';
import { Weather } from '../shared/models/weather.model';
import { WeatherService } from '../shared/services/weather.service';
import { CityService } from '../shared/services/city.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements AfterViewInit {

  weather: Weather;
  longitude: number;
  latitude: number;

  constructor(
    private positionService: PositionService,
    private cityService: CityService,
    private weatherService: WeatherService,
  ) { }

  ngAfterViewInit(): void {

    this.positionService.getLongitude().subscribe(
      (e) => {
        this.longitude = e;
        this.positionService.getLatitude().subscribe(
          (e) => {
            this.latitude = e;
            this.weatherService.getWeatherByCoords(this.longitude, this.latitude)
              .subscribe((e) => {
                this.weather = e;
                this.cityService.setCity(this.weather.name);
              })
          }
        );
      }
    );
  }

}
