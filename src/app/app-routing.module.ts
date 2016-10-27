import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent }   from './ui/weather/weather.component';
import { IntroComponent }   from './ui/intro/intro.component';
import { FeatureComponent }   from './ui/feature/feature.component';

const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather',  component: WeatherComponent },
  { path: 'feature',  component: FeatureComponent },
  { path: 'intro',  component: IntroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
