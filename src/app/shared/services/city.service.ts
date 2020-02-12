import { Injectable } from '@angular/core';
import { PositionService } from './position.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private positionService: PositionService
  ) { }
  
}
