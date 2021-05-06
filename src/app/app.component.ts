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
        label: 'home',
       
        routerLink: '/home'
      },
      {
        label: 'Producto',
       
        routerLink: '/home'
      },
      {
        label: 'Recetas',
       
        routerLink: '/home'
      },
      {
        label: 'Nosotros',
       
        routerLink: '/home'
      }
      ,
      {
        label: 'Contacto',
       
        url: 'https://github.com/katriel18'
      }
    ];
  }

}
