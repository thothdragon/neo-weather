import { List } from './list.model';

export class Forecast {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
    };
}
