import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  @Input() weather = null;
  @Input() tempUnit = null;
  constructor() { }

  ngOnInit() {
  }

}
