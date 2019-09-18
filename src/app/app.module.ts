import { MoviesPage } from './../pages/movies/movies';
import {HttpClientModule} from '@angular/common/http';
import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { Flashlight } from '@ionic-native/flashlight';
import { FlashlightPage } from './../pages/flashlight/flashlight';
import { ScannerPage } from './../pages/scanner/scanner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SMS } from '@ionic-native/sms/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MoviesProvider } from '../providers/movies/movies';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,LoginPage,ScannerPage,FlashlightPage,JsonMenuPage,
    MoviesPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,LoginPage,ScannerPage,FlashlightPage,JsonMenuPage,
    MoviesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,SMS,BarcodeScanner,Flashlight,
    
     {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider
  ]
})
export class AppModule {}
