import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class WeatherService {
  public url: string = 'http://api.openweathermap.org/data/';
  public version: string = '2.5';
  public id: string = 'babc5ec07bc782a071b84417b4d11040';
  constructor(private _http: HttpService) { }

  public getWeather(city: string, country: string, query?: string) {
    return this._http.get(this.url + this.version + '/weather?q=' + city + ',' + country + (query ? query : '') + '&APPID=' + this.id);
  }

  public getFutureWeather(city: string, country: string, query?: string) {
    return this._http.get(this.url + this.version + '/forecast?q=' + city + ',' + country + (query ? query : '') + '&APPID=' + this.id);
  }
  public getCity(country) {
    return this._http.get('assets/json/city.' + country + '.json');
  }
}
