export class GeolocalisationPosition {
    public coords: {
        accuracy: number;
        altitude: number;
        altitudeAccuracy: number;
        heading: number;
        latitude: number;
        longitude: number;
        speed: number;
    };
    public timestamp: number;
}