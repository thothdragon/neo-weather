import { Component, AfterViewInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ThemePalette } from '@angular/material/core';
import { WeatherService } from '../shared/services/weather.service';
import { CityService } from '../shared/services/city.service';
import { Weather } from '../shared/models/weather.model';
import { Forecast } from '../shared/models/forecast.model';
import { PositionService } from '../shared/services/position.service';

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

  constructor(
    private weatherService: WeatherService,
    private cityService: CityService,
    private positionService: PositionService,
  ) { }

  ngAfterViewInit(): void {

    this.positionService.getLongitude()
      .subscribe(
        (longitude: number) => {
          this.positionService.getLatitude()
            .subscribe(
              (latitude: number) => {
                this.weatherService.getWeatherByCoords(longitude, latitude)
                  .subscribe((weather: Weather) => {
                    this.weatherService.getForecastByCoords(longitude, latitude)
                      .subscribe((forecast: Forecast) => {
                        this.progress = false;
                      })
                  })
              }
            );
        }
      );

    //   this.cityService.getCity().subscribe(
    //     (cityName: string) => {
    //       this.weatherService.getWeatherByName(cityName).subscribe(
    //         (weather: Weather) => {
    //           this.weatherService.getForecastByName(cityName).subscribe(
    //             (forecast: Forecast) => {
    //               this.progress = false;
    //             }
    //           );
    //         }
    //       );
    //     }
    //   );
  }
}
