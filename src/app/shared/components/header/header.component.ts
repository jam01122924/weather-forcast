import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public topTitleLeft: string = 'Jame\'s Demo Website';
  public topTitleRight: string = ''; // For future use
  constructor() { }

  ngOnInit() {
  }

}
