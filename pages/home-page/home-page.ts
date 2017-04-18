import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html',
})
export class HomePage {
  childPage = {
    cardRechargePage : { title: '充值', page: 'CardRechargePage' },
    noticePage: { title: '公告', page: 'NoticePage' },
    mapPage: { title: '地图', page: 'MapPage' },
    storeDetailPage: { title: '店铺详情', page: 'StoreDetailPage' },
    loginSignupPage: { page: 'LoginSignupPage' },  // Login/signup or person information page
    personInformationPage: { page: 'PersonInformationPage' },
    searchStorePage: { page: 'SearchStorePage' }
  }
  position = {
    latitude: 116.39,
    longtitude: 39.9,
    distance: 500
  }

  // keys = Object.keys(this.childPage);
  isLogin: false;
  rankTab: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rankTab = 'game1';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
