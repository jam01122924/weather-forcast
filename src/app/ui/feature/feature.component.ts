import { Component, OnInit } from '@angular/core';

// create interface for feature content records:
export interface FeatureContent {
    title: string;
    img: string;
    content: Array<string>;
}

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})

export class FeatureComponent implements OnInit {
  public features: Array<FeatureContent> = [];
  constructor() {
    // We would save content into a json file or a group of records in the DB in real development.
    // However, since I have already shown how to request data from server,
    // and dynamically change the webpage content with it in the weather page,
    // I will just mock up some local variables for the page content here:
    this.features = [
      {
        title: 'Framework',
        img: 'assets/img/angular2.jpg',
        content: [
          'This project was developed using Angular2 with angular-cli version 1.0.0-beta.17.',
          'Angular2 has been released on OCT 12 2016, and it has shown its promising future in the market. I believed that Angular2 will become one of the most popular frameworks for web application development in 2017'
        ]
      },
      {
        title: 'Code Language',
        img: 'assets/img/typescript.jpg',
        content: [
          'This project was developed using Typescript.',
          'TypeScript is a language for application-scale JavaScript development. It is a typed superset of JavaScript that compiles to plain JavaScript. It is the native language for Angular2 development.',
          'Being built by Microsoft, TypeScript is much more likely than most other similar open-source projects to receive continued long-term support, good documentation, and a steady stream of development.'
        ]
      },
      {
        title: 'Responsive Design',
        img: 'assets/img/responsive_design.png',
        content: [
          'The whole website is developed with responsive design to fit different devices.',
          'And instead of only response once when initially loaded, this website will monitor window.onresize event, and change UI layout accordingly.',
          'Therefore, the website layout will not break if users change their browser window size.'
        ]
      },
      {
        title: 'Find User Location',
        img: 'assets/img/location.jpg',
        content: [
          'Instead of opening a blank page, and waiting users to input their address, this website can use APIs to find out where the current visiting user is, and show the weather forcast in that place when the page is opened.',
        ]
      },
      {
        title: 'Lazy Load',
        img: 'assets/img/lazyload.jpg',
        content: [
          'Lazy loading is an essential technic that has been widely used in moden website to provide smooth and friendly user experience by loading heavy resource like picures, videos, or json files only when necessary.',
          'For an example, we can trace the scroll event, use $(window).scrollTop() and $(elem).offset().top to determine if a DOM element is in the view.',
          'In this website, one example would be lazy loading the city list json file.',
          'Although the json files that I made up is not that big, the real size of a json file that contains every city in the world would be about 20Mb.',
          'So Instead of loading that huge file and blocking users from other content of the page, we could just load a small part of it that users may mostly concern about. Then load others later when users select a different region, country, or postcode.'
        ]
      },
      {
        title: 'Smart Background Picture',
        img: 'assets/img/mist.gif',
        content: [
          'The window that displays the current weather will apply different background images according to the weather data. It also has a transparent cover that will brighten or darken the bg picture based on current time',
        ]
      },
      {
        title: 'Metric & Imperial Switch',
        img: 'assets/img/temperature.png',
        content: [
          'Users can simplely click the temperature number to switch between Metric and Imperial',
        ]
      },
      {
        title: 'CSS',
        img: 'assets/img/oocss.png',
        content: [
          'Following the OOCSS rules:',
          '- Separation of sturcture from skin',
          '- Separation of containers and content'
        ]
      },
      {
        title: 'Things would have been done',
        img: 'assets/img/woulddo.jpg',
        content: [
          '- Seperate website into even smaller components, so that we can maintain, change, and reuse them easily.',
          '- Use SASS instead of CSS in real development.',
          '- Create a layer between http service and other services to handle error and redirection.',
          '- Use other APIs from openweathermap to allow users search previous weather.',
          '- Currently 3 pages are following 3 different design styles to show how easy it is to switch between each other. Would stay at one design style for the whole website in real development.',
          '- Only unit tests are implemented for each service and components.',
        ]
      }
    ];
  }

  ngOnInit() {
  }

}
