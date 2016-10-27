/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { WeatherService } from './weather.service';
import { HttpService } from './http.service';

describe('Service: Weather', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [WeatherService, HttpService]
    });
  });

  it('should ...', inject([WeatherService, HttpService], (service: WeatherService, _http: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
