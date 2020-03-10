import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { Forecast } from '../shared/models/forecast.model';
import { List } from '../shared/models/list.model';
import { PositionService } from '../shared/services/position.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  forecast: Forecast;
  forecastList: List[];
  longitude: number;
  latitude: number;

  constructor(
    private weatherService: WeatherService,
    private positionService: PositionService,
  ) { }

  ngOnInit(): void {

    this.positionService.getLongitude().subscribe(
      (e) => {
        this.longitude = e;
        this.positionService.getLatitude().subscribe(
          (e) => {
            this.latitude = e;
            this.weatherService.getForecastByCoords(this.longitude, this.latitude)
              .subscribe((e) => {
                this.forecast = e;
                this.forecastList = this.forecast.list;
              })
          }
        );
      }
    );
  }
}
