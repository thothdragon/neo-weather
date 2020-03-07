import { Component, AfterViewInit } from '@angular/core';
import { PositionService } from './shared/services/position.service';
import { Weather } from './shared/models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title: string = 'Neo Weather';
  messageError: string;
  cityName: string = 'Lyon';

  constructor(
    private positionService: PositionService,
  ) {
  }

  ngAfterViewInit(): void {
    this.positionService.get()
      .then((weather: Weather) => {
        this.cityName = weather.name;
      })
      .catch((error) => {
        this.messageError = error.message;
      });
  }

}
