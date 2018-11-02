import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {JsonpModule, Jsonp, Response} from '@angular/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
