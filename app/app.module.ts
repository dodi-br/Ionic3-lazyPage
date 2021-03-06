import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Storage
import { IonicStorageModule } from '@ionic/storage';

import { TabsPage } from '../pages/tabs-page/tabs-page';
import { HomePage } from '../pages/home-page/home-page';
import { StorePage } from '../pages/store-page/store-page';
import { RankPage } from '../pages/rank-page/rank-page';
import { MinePage } from '../pages/mine-page/mine-page';

import { RankTabToday } from '../components/rank-tab-today/rank-tab-today';
import { RankTabRating } from '../components/rank-tab-rating/rank-tab-rating';
import { RankTabMatch } from '../components/rank-tab-match/rank-tab-match';
import { RankTabAward } from '../components/rank-tab-award/rank-tab-award';

import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    StorePage,
    RankPage,
    MinePage,
    RankTabToday,
    RankTabRating,
    RankTabMatch,
    RankTabAward
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    StorePage,
    RankPage,
    MinePage,
    RankTabToday,
    RankTabRating,
    RankTabMatch,
    RankTabAward
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Http,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}

