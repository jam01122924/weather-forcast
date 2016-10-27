/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { DeviceInfoService } from './device-info.service';
import { HttpService } from './http.service';

describe('Service: DeviceInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        {provide: DeviceInfoService, useClass: DeviceInfoService},
        {provide: HttpService, useClass: HttpService}
      ]
    });
  });

  it('should ...', inject([DeviceInfoService, HttpService], (service: DeviceInfoService, _http: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
