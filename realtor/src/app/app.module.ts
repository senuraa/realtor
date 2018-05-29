import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';

import { SignupPage } from '../pages/signup/signup';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SearchPage } from '../pages/search/search';

import { ReqCapturePage } from '../pages/req-capture/req-capture';

import {SearchResultsPage} from '../pages/search-results/search-results'; 

import { LoginServiceProvider } from '../providers/login-service/login-service';
import { SignupServiceProvider } from '../providers/signup-service/signup-service';

import { VerifyPage } from '../pages/verify/verify';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    VerifyPage,
    MyProfilePage,
    FavoritesPage,
    SearchPage,
    ReqCapturePage,
    SearchResultsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    VerifyPage,
    MyProfilePage,
    FavoritesPage,
    SearchPage,
    ReqCapturePage,
    SearchResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginServiceProvider,
    SignupServiceProvider
  ]
})
export class AppModule { }
