import { SearchResultPage } from './../pages/search-result/search-result';
import { detailClass } from './../pages/detail/detailClass';
import { PageInfoPage } from './../pages/detail/page-info/page-info';
import { PageInfoDePage } from './../pages/detail/page-info-de/page-info-de';
import { PageDocsPage } from './../pages/detail/page-docs/page-docs';
import { DetailPage } from './../pages/detail/detail';
import { FieldPage } from './../pages/field/field';
import { ProceduresServiceService } from './../service/procedures-service.service';
import { ParallaxDirective } from './../directives/parallax/parallax';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FieldPage,
    DetailPage,
    PageDocsPage,
    SearchResultPage,
    PageInfoDePage,
    PageInfoPage,
    ParallaxDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FieldPage,
    DetailPage,
    SearchResultPage,
    PageDocsPage,
    PageInfoDePage,
    PageInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProceduresServiceService,
    detailClass
  ]
})
export class AppModule {}
