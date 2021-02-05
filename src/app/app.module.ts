import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './module/map/map.component';
import {AppRoutingModule} from './app-routing.module';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import { GoogleMapsModule } from '@angular/google-maps';
import {FormsModule} from '@angular/forms';
import {QRCodeModule} from 'angularx-qrcode';
import { QrcodeComponent } from './module/qrcode/qrcode.component';
import { ObservableComponent } from './module/observable/observable.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/home/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    QrcodeComponent,
    ObservableComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    NgxQRCodeModule,
    FormsModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
