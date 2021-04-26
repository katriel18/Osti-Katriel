import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-web-site';

  items: any[];

  constructor() {
    this.items = [

      {
        label: 'Primary',
       
        routerLink: '/home'
      },
      {
        label: 'Secondary',
       
        routerLink: '/home'
      },
      {
        label: 'Success',
       
        routerLink: '/home'
      },
      {
        label: 'Info',
       
        routerLink: '/home'
      }
      ,
      {
        label: 'katriel',
       
        url: 'https://github.com/katriel18'
      }
    ];
  }

}
