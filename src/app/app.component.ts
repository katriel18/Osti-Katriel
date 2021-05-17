import { Component, OnInit } from '@angular/core';

import { PhotoServiceService } from 'src/app/services/photo-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-web-site';

  items: any[];

  images: any[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(
    private photoService: PhotoServiceService
  ) {
    this.items = [

      {
        label: 'home',
       
        routerLink: '/home'
      },
      {
        label: 'Producto',
       
        routerLink: '/product'
      },
      {
        label: 'Recetas',
       
        routerLink: '/home'
      },
      {
        label: 'Nosotros',
       
        url: 'https://github.com/katriel18'
      }
      ,
      {
        label: 'Contacto',
       
        routerLink: '/contact'
      }
    ];
  }
  ngOnInit() {
      

  this.photoService.getImages().then(images =>{ 
    this.images = images
})
}

}
