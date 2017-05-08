import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-store-page',
  templateUrl: 'store-page.html',
})
export class StorePage {
  showContent = false;
  chip = ['notclicked', 'clicked', 'notclicked', 'notclicked'];
  childPage = {
    onSearchStorePage: { title: '搜索店铺', page: 'onSearchStorePage' },
    storeDetailPage: { title: '店铺详情', page: 'StoreDetailPage' }
  }
  store = [
    {
      label: "理想咖啡店",
      address: "东兴路228号",
      distance: 318,
      picture: "assets/shop1.jpg"
    },
    {
      label: "吧东",
      address: "江南大道783",
      distance: 50,
      picture: "assets/store2.jpg",
    },
    {
      label: "流浪星",
      address: "九龍紅磡黃埔花園第八期蔡瀾美食坊地庫B1舖",
      distance: 50,
      picture: "assets/store3.jpg"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
    setTimeout(() => {
      this.showContent = true;
    }, 50);
  }
  navPush(target, storeName) {
    this.navCtrl.push(target.page, {storeName: storeName, title: '店铺详情'});
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
  
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

}
