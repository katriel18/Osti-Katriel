import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-web-site';

  cssUrl: string;
  //dark:boolean;
  mode:string;
 
  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = 'assets/styles/saga-green/theme.css';
    //this.dark=false;
    this.mode='pi pi-moon';

  }

  changeStyle() {
    //this.cssUrl = (this.cssUrl === `node_modules/primeng/resources/themes/vela-green/theme.css`) ? `node_modules/primeng/resources/themes/saga-green/theme.css` : `node_modules/primeng/resources/themes/vela-green/theme.css`;
  

    this.cssUrl = (this.cssUrl === 'assets/styles/saga-green/theme.css') ? 'assets/styles/vela-green/theme.css' : 'assets/styles/saga-green/theme.css';
    //this.dark = (this.dark === false) ? true : false;
    this.mode = (this.mode === 'pi pi-moon') ? 'pi pi-sun' : 'pi pi-moon';
    //this.cssUrl = 'assets/styles/vela-green/theme.css';
  
  }

}
