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

import { MyTitle } from '../components/my-title/my-title';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    StorePage,
    RankPage,
    MinePage,
    MyTitle
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    BrowserModule,
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
    MyTitle
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
