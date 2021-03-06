import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-weather-bar',
  templateUrl: './weather-bar.component.html',
  styleUrls: ['./weather-bar.component.css']
})
export class WeatherBarComponent implements OnInit {
  @Input() weatherPackage = null;
  @Input() tempUnit = null;

  constructor() { }

  ngOnInit() {
    console.log(this.weatherPackage);
  }

}
