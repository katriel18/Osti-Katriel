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
  mode:string;
 
  constructor(public sanitizer: DomSanitizer) {
    this.cssUrl = 'assets/styles/saga-green/theme.css';
    this.mode='pi pi-moon';

  }

  changeStyle() {
  
    this.cssUrl = (this.cssUrl === 'assets/styles/saga-green/theme.css') ? 'assets/styles/vela-green/theme.css' : 'assets/styles/saga-green/theme.css';
    this.mode = (this.mode === 'pi pi-moon') ? 'pi pi-sun' : 'pi pi-moon';
  
  }

}
