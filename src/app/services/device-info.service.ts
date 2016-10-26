import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class DeviceInfoService {
  height: number = 0;
  width: number = 0;
  contentHeight: number = 0;
  constructor(private _http: HttpService) {
    this.getDeviceSize();
    this.getContentHeight();
    window.onresize = (e) =>{
      this.getDeviceSize();
      this.getContentHeight();
    }
  }
  getDeviceSize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }
  getContentHeight() {
    let topSize:number = (this.width&&this.width>767)?117.882 : 286.7708;
    let footerSize: number = 61.1111;
    this.contentHeight = this.height - topSize - footerSize;
  }

  // Functions to get device location
  getDeviceLocation() {
    return this._http.get('http://ipinfo.io/json');
  }
}
