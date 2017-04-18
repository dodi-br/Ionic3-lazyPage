import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'StorePage'
})
@Component({
  selector: 'page-store-page',
  templateUrl: 'store-page.html',
})
export class StorePage {
  store = [
    {
      label: "理想咖啡店",
      address: "东兴路228号",
      latitude: "234.22",
      longtitude: "28.2",
      distance: 318,
      averageCost: 8.6,
      phone: '15988152673',
      email: '123899696@qq.com',
      room: false,
      parking: true,
      credit: false,
      operationTime: '9:00 - 18:00',
      picture: "assets/shop1.jpg"
    },
    {
      label: "喜马拉店",
      address: "江南大道783",
      latitude: "23",
      longtitude: "2.2",
      distance: 50,
      averageCost: 5.6,
      phone: '15988152673',
      email: '123899696@qq.com',
      room: false,
      parking: true,
      credit: false,
      operationTime: '9:00 - 18:00',
      picture: "assets/Shop2.jpg"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

}
