import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from 'src/app/services/photo-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  constructor(private photoService: PhotoServiceService) { }

  ngOnInit() {
      this.photoService.getImages().then(images =>{ 
          this.images = images
      })
  }

}
