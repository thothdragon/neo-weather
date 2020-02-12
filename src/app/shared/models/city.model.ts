import { Weather } from './weather.model';
import { Pollution } from './pollution.model';

export class City {
    public name: string;
    public dayTime: number;
    public weather: Weather;
    public pollution: Pollution;
}