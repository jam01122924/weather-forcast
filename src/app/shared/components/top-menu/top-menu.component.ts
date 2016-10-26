import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  title: string = "Weather Focast"
  menus: any[] = [
      {
        name: "Weather",
        url: "/weather",
        child: []
      },
      {
        name: "Intro",
        url: "/intro",
        child: []
      },
      {
        name: "Contact Us",
        url: "/contact-us",
        child: []
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
