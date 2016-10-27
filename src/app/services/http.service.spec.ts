/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';

describe('Service: Http', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [HttpService]
    });
  });

  it('should ...', inject([HttpService, Http], (service: HttpService, _http: Http) => {
    expect(service).toBeTruthy();
  }));
});
