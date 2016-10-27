import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { DeviceInfoService } from '../../services/device-info.service';
import  {WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public location: any = {};
  public weather: any = {};
  public futureWeather: any = {};
  public futureWeatherTitle: string = 'Weather in 5 Days: (report every 3 hours)';
  public date: Date = null;
  public month: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public day: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public tempUnit: string = 'metric';
  public weatherIconUrl: string = '';
  public weatherBgCollection: any = {
    '01d': 'sun',
    '01n': 'night',
    '02d': 'cloud',
    '02n': 'cloud',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'broken-cloud',
    '04n': 'broken-cloud',
    '09d': 'rain',
    '09n': 'rain',
    '10d': 'rain',
    '10n': 'rain',
    '11d': 'thunderstorm',
    '11n': 'thunderstorm',
    '13d': 'snow',
    '13n': 'snow',
    '50d': 'mist',
    '50n': 'mist'
  };
  public weatherBg: string = '';
  public daytime: boolean = false;
  public cityList: any = {
    'ca': [],
    'us': []
  };
  public country: string = '';
  public city: string = '';
  public currentCountry: string = '';
  public currentCity: string = '';

  constructor(private _cdRef: ChangeDetectorRef, private _deviceInfoService: DeviceInfoService, private _weatherService: WeatherService) { }

  ngOnInit() {
    // monitoring on window.onresize
    window.onresize = () => {
      // update window size
      this._deviceInfoService.getDeviceSize();
      this._deviceInfoService.getContentHeight();
      // trigger change detection manually
      this._cdRef.detectChanges();
    };
    this.date = new Date();

    // get location first, then get city, then get weather. then set city
    this._deviceInfoService.getDeviceLocation().subscribe(data => {
      if (!data) {
        console.error('failed to get user location from http://ipinfo.io/json');
        return;
      } else if (data.city && data.region && data.country) {
        this.location = data;
        this.country = this.currentCountry = this.location.country.toLowerCase();
        this.city = this.location.city;
        this.getCity();
        this.getWeather(this.location.city, this.location.country, this.tempUnit);
        this.getFutureWeather(this.location.city, this.location.country, this.tempUnit);
      } else {
        console.error('invalid data from http://ipinfo.io/json');
      }
    });

    // ============================Mockup date, test only, will get removed in production version==================================
    // this.location = {
    //   'ip': '154.20.117.98',
    //   'hostname': 'd154-20-117-98.bchsia.telus.net',
    //   'city': 'Coquitlam',
    //   'region': 'British Columbia',
    //   'country': 'CA',
    //   'loc': '49.2436,-122.7865',
    //   'org': 'AS852 TELUS Communications Inc.',
    //   'postal': 'V3C'
    // };
    // this.weather = {
    //    'coord':{
    //       'lon':-122.75,
    //       'lat':49.28
    //    },
    //    'weather':[
    //       {
    //          'id':501,
    //          'main':'Rain',
    //          'description':'moderate rain',
    //          'icon':'01d'
    //       }
    //    ],
    //    'base':'stations',
    //    'main':{
    //       'temp':11.33,
    //       'pressure':1009.66,
    //       'humidity':93,
    //       'temp_min':11.33,
    //       'temp_max':11.33,
    //       'sea_level':1028.3,
    //       'grnd_level':1009.66
    //    },
    //    'wind':{
    //       'speed':4.42,
    //       'deg':146.503
    //    },
    //    'rain':{
    //       '3h':4.27
    //    },
    //    'clouds':{
    //       'all':44
    //    },
    //    'dt':1477443830,
    //    'sys':{
    //       'message':0.1625,
    //       'country':'CA',
    //       'sunrise':1477493421,
    //       'sunset':1477529917
    //    },
    //    'id':5927689,
    //    'name':'Coquitlam',
    //    'cod':200
    // };
    //
    // this.weatherIconUrl = 'http://openweathermap.org/img/w/' + this.weather.weather[0].icon + '.png';
    // this.weatherBg = this.weatherBgCollection[this.weather.weather[0].icon];
    // this.daytime = this.weather.weather[0].icon.indexOf('d')>-1;
    // this.date = new Date(this.weather.sys.sunrise*1000);
    //
    // this.country = this.location.country.toLowerCase();
    // this.getCity();
    // this.currentCity = this.location.city;
  }

  public getWeather(city, country, unit) {
    this._weatherService.getWeather(city, country, '&units=' + unit).subscribe(data => {
      if (!data) {
        console.error('failed to get weather data from api.openweathermap.org/data/2.5/weather');
        return;
      } else if (data.name && data.id && data.weather && data.weather[0]) {
        this.weather = data;
        this.weatherIconUrl = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        this.weatherBg = this.weatherBgCollection[data.weather[0].icon];
        this.daytime = data.weather[0].icon.indexOf('d') > -1;
        this.date = new Date(data.sys.sunrise * 1000);
        this.currentCity = data.name;
        this.currentCountry = data.sys.country.toLowerCase();
      } else {
        console.error('invalid data from api.openweathermap.org/data/2.5/weather');
      }
    });
  }
  public getFutureWeather(city, country, unit) {
    this._weatherService.getFutureWeather(city, country, '&units=' + unit).subscribe(data => {
      if (!data) {
        console.error('failed to get weather data from api.openweathermap.org/data/2.5/future');
        return;
      } else if (data.city && data.cnt && data.list && data.list.length) {
        this.futureWeather = data;
      } else {
        console.error('invalid data from api.openweathermap.org/data/2.5/future');
      }
    });
  }
  public getCity() {
    return this._weatherService.getCity(this.country || 'ca').subscribe(data => {
      if (!data) {
        console.error('failed to get city list for ' + this.country);
        return;
      } else if (data && data.data && data.data.length) {
        this.cityList[this.country || 'ca'] = data.data;
        this.city = this.cityList[this.country || 'ca'][0].city;
      } else {
        console.error('invalid city list data for ' + this.country);
      }
    });
  }
  public countryChange() {
    this.country = this.country || 'ca';
    if (this.cityList[this.country].length) {
      return;
    }else {
      this.getCity();
    }
  }
  public changeTempUnit() {
    this.tempUnit = this.tempUnit === 'metric' ? 'imperial' : 'metric';
    this.getWeather(this.currentCity, this.country, this.tempUnit);
    this.getFutureWeather(this.currentCity, this.country, this.tempUnit);
  }
  public search() {
    this.getWeather(this.city, this.country, this.tempUnit);
    this.getFutureWeather(this.city, this.country, this.tempUnit);
  }
}
