import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import {ScrollTopModule} from 'primeng/scrolltop';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,//scroll top
    

    HttpClientModule,

    ButtonModule,
    GalleriaModule,
    ScrollTopModule,
    ScrollPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
