import { Component, AfterViewInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';
import { WeatherService } from '../shared/services/weather.service';
import { CityService } from '../shared/services/city.service';
import { Weather } from '../shared/models/weather.model';
import { Forecast } from '../shared/models/forecast.model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements AfterViewInit {

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'indeterminate';
  value = 50;
  bufferValue = 75;
  progress: boolean = true;
  cityName: string;
  weather: Weather;
  forecast: Forecast

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService,
  ) { }

  ngAfterViewInit(): void {

    this.cityService.getCity().subscribe(
      (e) => {
        this.cityName = e;
        this.weatherService.getWeatherByName(this.cityName).subscribe(
          (e) => {
            this.weather = e
            this.weatherService.getForecastByName(this.cityName).subscribe(
              (e) => {
                this.forecast = e;
                if (this.cityName && (this.weather && this.forecast)) {
                  this.progress = false;
                  console.log(this.progress);
                }
              }
            );
          }
        );
      }
    );
  }
}
