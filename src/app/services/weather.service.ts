import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class WeatherService {
  constructor(private _http: HttpService) { }

  getWeather(city: string, country: string, query?: string) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + (query?query:'') + '&APPID=babc5ec07bc782a071b84417b4d11040');
  }

  getFutureWeather(city: string, country: string, query?: string) {
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + (query?query:'') + '&APPID=babc5ec07bc782a071b84417b4d11040');
  }
  getCity(country) {
    return this._http.get('assets/json/city.' + country + '.json');
  }
}
