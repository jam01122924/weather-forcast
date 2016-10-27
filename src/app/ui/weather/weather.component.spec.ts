/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { WeatherComponent } from './weather.component';
import { WeatherBarComponent } from '../../shared/components/weather-bar/weather-bar.component';
import { WeatherWidgetComponent } from '../../shared/components/weather-widget/weather-widget.component';
import { DeviceInfoService } from '../../services/device-info.service';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Mockup DeviceInfoService
class MockDeviceInfoService {
  private _http: Http;
  public height: number = 800;
  public width: number = 1280;
  public contentHeight: number = 600;
  public getDeviceSize() {}
  public getContentHeight() {}
  public getDeviceLocation() {
    return Observable.of({
      ip: '154.20.117.98',
      hostname: 'd154-20-117-98.bchsia.telus.net',
      city: 'Coquitlam',
      region: 'British Columbia',
      country: 'CA',
      loc: '49.2436,-122.7865',
      org: 'AS852 TELUS Communications Inc.',
      postal: 'V3C'
    });
  }
}
// Mockup WeatherService
class MockWeatherService {
  public getWeather() {
    return Observable.of({
       'coord': {
          'lon': -122.75,
          'lat': 49.28
       },
       'weather': [
          {
             'id': 501,
             'main': 'Rain',
             'description': 'moderate rain',
             'icon': '01d'
          }
       ],
       'base': 'stations',
       'main': {
          'temp': 11.33,
          'pressure': 1009.66,
          'humidity': 93,
          'temp_min': 11.33,
          'temp_max': 11.33,
          'sea_level': 1028.3,
          'grnd_level': 1009.66
       },
       'wind': {
          'speed': 4.42,
          'deg': 146.503
       },
       'rain': {
          '3h': 4.27
       },
       'clouds': {
          'all': 44
       },
       'dt': 1477443830,
       'sys': {
          'message': 0.1625,
          country: 'CA',
          'sunrise': 1477493421,
          'sunset': 1477529917
       },
       'id': 5927689,
       'name': 'Coquitlam',
       'cod': 200
    });
  }
  public getFutureWeather() {
    return Observable.of({
       city:  {
          id:  6173331,
          name:  'Vancouver',
          coord:  {
             lon:  -123.119339,
             lat:  49.24966
          },
          country: 'CA',
          population: 0,
          sys: {
             population: 0
          }
       },
       cod: '200',
       message: 0.1677,
       cnt: 36,
       list: [
          {
             dt: 1477569600,
             main: {
                temp: 10.91,
                temp_min: 10.91,
                temp_max: 10.91,
                pressure: 1001.48,
                sea_level: 1019.98,
                grnd_level: 1001.48,
                humidity: 97,
                temp_kf: 0
             },
             weather: [
                {
                   id: 501,
                   main: 'Rain',
                   description: 'moderate rain',
                   icon: '10n'
                }
             ],
             clouds: {
                all: 100
             },
             wind: {
                speed: 6.47,
                deg: 151
             },
             rain: {
                th: 6.67
             },
             sys: {
                pod: 'n'
             },
             dt_txt: '2016-10-27 12:00:00'
          },
          {
             dt: 1477580400,
             main: {
                temp: 10.61,
                temp_min: 10.61,
                temp_max: 10.61,
                pressure: 1002.99,
                sea_level: 1021.56,
                grnd_level: 1002.99,
                humidity: 97,
                temp_kf: 0
             },
             weather: [
                {
                   id: 501,
                   main: 'Rain',
                   description: 'moderate rain',
                   icon: '10d'
                }
             ],
             clouds: {
                all: 100
             },
             wind: {
                speed: 4.82,
                deg: 172.002
             },
             rain: {
                th: 10.1
             },
             sys: {
                pod: 'd'
             },
             dt_txt: '2016-10-27 15:00:00'
          },
          {
             dt: 1477591200,
             main: {
                temp: 10.35,
                temp_min: 10.35,
                temp_max: 10.35,
                pressure: 1005.36,
                sea_level: 1023.86,
                grnd_level: 1005.36,
                humidity: 99,
                temp_kf: 0
             },
             weather: [
                {
                   id: 501,
                   main: 'Rain',
                   description: 'moderate rain',
                   icon: '10d'
                }
             ],
             clouds: {
                all: 92
             },
             wind: {
                speed: 2.42,
                deg: 179.502
             },
             rain: {
                th: 4.235
             },
             sys: {
                pod: 'd'
             },
             dt_txt: '2016-10-27 18:00:00'
          }
       ]
    });
  }
  public getCity(country) {
    if (country === 'ca') {
      return Observable.of({
        data: [
          {city: 'Vancouver', country: 'CA'},
          {city: 'Burnaby', country: 'CA'},
          {city: 'Coquitlam', country: 'CA'},
          {city: 'Surrey', country: 'CA'},
          {city: 'Abbotsford', country: 'CA'},
          {city: 'Kamloops', country: 'CA'},
          {city: 'Kelowna', country: 'CA'},
          {city: 'Banff', country: 'CA'},
          {city: 'Calgary', country: 'CA'},
          {city: 'Edmonton', country: 'CA'},
          {city: 'Regina', country: 'CA'},
          {city: 'Winnipeg', country: 'CA'},
          {city: 'Thunder Bay', country: 'CA'},
          {city: 'Toronto', country: 'CA'},
          {city: 'Mississauga', country: 'CA'},
          {city: 'Hamilton', country: 'CA'},
          {city: 'Vancouver', country: 'CA'},
          {city: 'Ottawa', country: 'CA'},
          {city: 'Montreal', country: 'CA'},
          {city: 'Québec', country: 'CA'}
        ]
      });
    } else if (country === 'us') {
      return Observable.of({
        data: [
          {city: 'Seattle', country: 'US'},
          {city: 'Portland', country: 'US'},
          {city: 'San Francisco', country: 'US'},
          {city: 'Carson City', country: 'US'},
          {city: 'Sacramento', country: 'US'},
          {city: 'Nampa', country: 'US'},
          {city: 'Los Angeles', country: 'US'},
          {city: 'San Diego', country: 'US'},
          {city: 'Las Vegas', country: 'US'},
          {city: 'Phoenix', country: 'US'},
          {city: 'Tucson', country: 'US'},
          {city: 'Salt Lake City', country: 'US'},
          {city: 'Denver', country: 'US'},
          {city: 'Dallas', country: 'US'},
          {city: 'Houston', country: 'US'},
          {city: 'Atlanta', country: 'US'},
          {city: 'Miami', country: 'US'},
          {city: 'Detroit', country: 'US'},
          {city: 'Washington', country: 'US'},
          {city: 'New York', country: 'US'},
          {city: 'Boston', country: 'US'},
          {city: 'Philadelphia', country: 'US'}
        ]
      });
    }
  }
}

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ WeatherComponent, WeatherBarComponent, WeatherWidgetComponent ],
    imports: [ FormsModule ],
    providers: [
      { provide: DeviceInfoService, useClass: MockDeviceInfoService },
      { provide: WeatherService, useClass: MockWeatherService }
    ]
  });
});

it('should use mockup location data and weather data to initialize:', async(() => {
  TestBed.compileComponents().then(() => {
    const fixture = TestBed.createComponent(WeatherComponent);

    // Access the dependency injected component instance
    const component = fixture.componentInstance;
    component.ngOnInit();
    // Detect changes as necessary
    fixture.detectChanges();
    expect(component.location.city).toBe('Coquitlam');
    expect(component.location.region).toBe('British Columbia');
    expect(component.location.country).toBe('CA');
    expect(component.city).toBe('Vancouver');
    expect(component.country).toBe('ca');
    expect(component.currentCity).toBe('Coquitlam');
    expect(component.currentCountry).toBe('ca');
    expect(component.tempUnit).toBe('metric');
    expect(component.cityList.ca.length).toBe(20);
    expect(component.cityList.us.length).toBe(0);
    expect(component.weather.id).toBe(5927689);
    expect(component.weather.dt).toBe(1477443830);
    expect(component.weather.name).toBe('Coquitlam');
    expect(component.weather.main.temp).toBe(11.33);
    expect(component.weather.weather[0].main).toBe('Rain');
    expect(component.futureWeather.cnt).toBe(36);
    expect(component.futureWeather.list.length).toBe(3);
    expect(component.futureWeather.list[0].main.temp).toBe(10.91);
    expect(component.futureWeather.list[1].main.temp).toBe(10.61);
    expect(component.futureWeather.list[2].main.temp).toBe(10.35);
  });
}));
