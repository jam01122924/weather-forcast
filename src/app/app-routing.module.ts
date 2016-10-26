import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent }   from './ui/weather/weather.component';
import { ContactUsComponent }   from './ui/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather',  component: WeatherComponent },
  { path: 'contact-us',  component: ContactUsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
