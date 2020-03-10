import { Injectable } from '@angular/core';
import { PositionService } from './position.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  /**
   * Pattern Observable
   */

  city = new Subject<string>();
  // cityObserved: Observable = this.city.asObservable();

  constructor(
    private positionService: PositionService
  ) { }

  setCity(city: string) {
    this.city.next(city);
  }

  getCity(): Observable<string> {
    return this.city;
  }

}
