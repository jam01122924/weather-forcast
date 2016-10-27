
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { WeatherComponent } from './ui/weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [
    HttpModule,
    RouterModule.forRoot([
      { path: 'weather', component: WeatherComponent },
      { path: '', component: WeatherComponent },
    ])
  ],
  declarations: [
    AppComponent,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})

export class AppComponent {
}
