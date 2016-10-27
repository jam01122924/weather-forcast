import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public title: string = 'Weather Focast';
  public menus: any[] = [
      {
        name: 'Weather',
        url: '/weather',
        child: []
      },
      {
        name: 'Feature',
        url: '/feature',
        child: []
      },
      {
        name: 'Intro',
        url: '/intro',
        child: []
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
