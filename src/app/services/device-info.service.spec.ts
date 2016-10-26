/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeviceInfoService } from './device-info.service';

describe('Service: DeviceInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceInfoService]
    });
  });

  it('should ...', inject([DeviceInfoService], (service: DeviceInfoService) => {
    expect(service).toBeTruthy();
  }));
});
