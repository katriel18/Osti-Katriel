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

  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = 'assets/styles/saga-green/theme.css';
  }

  changeStyle() {
    //this.cssUrl = (this.cssUrl === `node_modules/primeng/resources/themes/vela-green/theme.css`) ? `node_modules/primeng/resources/themes/saga-green/theme.css` : `node_modules/primeng/resources/themes/vela-green/theme.css`;
  

    this.cssUrl = (this.cssUrl === 'assets/styles/saga-green/theme.css') ? 'assets/styles/vela-green/theme.css' : 'assets/styles/saga-green/theme.css';
    //this.cssUrl = 'assets/styles/vela-green/theme.css';
  
  }

}
