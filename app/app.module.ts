import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// Storage
import { IonicStorageModule } from '@ionic/storage';

// // Login and sign
// import { TabsLoginSignupPage } from '../pages/tabs-login-signup/tabs-login-signup';
// import { LoginPage } from '../pages/login/login';
// import { SignUpPage } from '../pages/sign-up/sign-up';

// // Tabs bottom
// import { MainPage } from '../pages/main/main';
// import { MapPage } from '../pages/map/map';
// import { NoticePage } from '../pages/notice/notice';
// import { PersonPage } from '../pages/person/person';

// // PersonPage items page
// import { GameHistoryPage } from '../pages/person/items/game-history/game-history';
// import { GameRankPage } from '../pages/person/items/game-rank/game-rank';
// import { SettingPage } from '../pages/setting/setting';



// // CardInformation item: detail


// // rank
// import { RankDetailPage } from '../pages/person/items/game-rank/rank-detail/rank-detail';

// // game history
// import { GameHistoryDetailPage } from '../pages/person/items/game-history/game-history-detail/game-history-detail';


// // children page of SettingPage
// import { MultiLanguagePage } from '../pages/setting/multi-language/multi-language';
// import { AboutPage } from '../pages/setting/about/about';

// // main children page
// import { StoreDetailPage } from '../pages/main/store-detail/store-detail';
// import { LoginSignupPage } from '../pages/main/login-signup/login-signup';
// import { SearchStorePage } from '../pages/main/search-store/search-store';
// import { PersonInformationPage } from '../pages/main/person-information/person-information';
// // children page of person-detail page
// import { ModifiedPersonInPage } from '../pages/main/person-information/modified-person-information/modified-person-information';

// // Card
// import { CardRechargePage } from '../pages/card-recharge/card-recharge';
// import { CardInformationPage } from '../pages/card-information/card-information';
// import { AddCardPage } from '../pages/card-information/add-card/add-card';
// import { CardDetailPage } from '../pages/card-information/card-detail/card-detail';
// import { PointTransferPage } from '../pages/card-information/card-detail/point-transfer/point-transfer'

// import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp
    // TabsPage,

    // TabsLoginSignupPage,
    // LoginPage,
    // SignUpPage,
    // MainPage,
    // MapPage,
    // NoticePage,
    // PersonPage,
    // PersonInformationPage,
    // CardRechargePage,
    // CardInformationPage,
    // GameHistoryPage,
    // GameRankPage,
    // SettingPage,
    // AboutPage,
    // CardDetailPage,
    // AddCardPage,
    // PointTransferPage,
    // RankDetailPage,
    // GameHistoryDetailPage,
    // ModifiedPersonInPage,
    // MultiLanguagePage,
    // LoginSignupPage,
    // StoreDetailPage,
    // SearchStorePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    // TabsPage,

    // TabsLoginSignupPage,
    // LoginPage,
    // SignUpPage,
    // MainPage,
    // MapPage,
    // NoticePage,
    // PersonPage,
    // PersonInformationPage,
    // CardRechargePage,
    // CardInformationPage,
    // GameHistoryPage,
    // GameRankPage,
    // SettingPage,
    // AboutPage,
    // CardDetailPage,
    // AddCardPage,
    // PointTransferPage,
    // RankDetailPage,
    // GameHistoryDetailPage,
    // ModifiedPersonInPage,
    // MultiLanguagePage,
    // LoginSignupPage,
    // StoreDetailPage,
    // SearchStorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
