import { Component, OnInit } from '@angular/core';


import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cssUrl: string;
  dark:boolean;

  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = 'assets/styles/saga-green/theme.css';
    this.dark=false;
  }

  changeStyle() {
    //this.cssUrl = (this.cssUrl === `node_modules/primeng/resources/themes/vela-green/theme.css`) ? `node_modules/primeng/resources/themes/saga-green/theme.css` : `node_modules/primeng/resources/themes/vela-green/theme.css`;
  

    this.cssUrl = (this.cssUrl === 'assets/styles/saga-green/theme.css') ? 'assets/styles/vela-green/theme.css' : 'assets/styles/saga-green/theme.css';
    this.dark = (this.dark === false) ? true : false;
    
    //this.cssUrl = 'assets/styles/vela-green/theme.css';
  
  }

  ngOnInit(): void {
  }

}
