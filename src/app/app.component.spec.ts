/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { WeatherComponent } from './ui/weather/weather.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TopMenuComponent } from './shared/components/top-menu/top-menu.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './services/http.service';
import { DeviceInfoService } from './services/device-info.service';
import { WeatherService } from './services/weather.service';
import { WeatherBarComponent } from './shared/components/weather-bar/weather-bar.component';
import { WeatherWidgetComponent } from './shared/components/weather-widget/weather-widget.component';
import { IntroComponent } from './ui/intro/intro.component';
import { FeatureComponent } from './ui/feature/feature.component';

describe('App: Weather', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WeatherComponent,
        HeaderComponent,
        FooterComponent,
        TopMenuComponent,
        WeatherBarComponent,
        WeatherWidgetComponent,
        IntroComponent,
        FeatureComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ModalModule
      ],
      providers: [
        {provide: DeviceInfoService, useClass: DeviceInfoService},
        {provide: WeatherService, useClass: WeatherService}
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
