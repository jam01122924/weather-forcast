import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { WeatherComponent } from './ui/weather/weather.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TopMenuComponent } from './shared/components/top-menu/top-menu.component';

import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './ui/contact-us/contact-us.component';

import { HttpService } from './services/http.service';
import { DeviceInfoService } from './services/device-info.service';
import { WeatherService } from './services/weather.service';
import { WeatherBarComponent } from './shared/components/weather-bar/weather-bar.component';
import { WeatherWidgetComponent } from './shared/components/weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    TopMenuComponent,
    ContactUsComponent,
    WeatherBarComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule
  ],
  providers: [HttpService, DeviceInfoService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
