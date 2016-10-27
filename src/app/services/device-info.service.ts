import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class DeviceInfoService {
  public height: number = 0;
  public width: number = 0;
  public contentHeight: number = 0;
  constructor(private _http: HttpService) {
    this.getDeviceSize();
    this.getContentHeight();
    window.onresize = (e) => {
      this.getDeviceSize();
      this.getContentHeight();
    };
  }
  public getDeviceSize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }
  public getContentHeight() {
    let topSize: number = (this.width && this.width > 767) ? 117.882 : 286.7708;
    let footerSize = 61.1111;
    this.contentHeight = this.height - topSize - footerSize;
  }

  // Functions to get device location
  public getDeviceLocation() {
    return this._http.get('http://ipinfo.io/json');
  }
}
