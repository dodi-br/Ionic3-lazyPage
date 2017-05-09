import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewStorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'NewStorePage'
})
@Component({
  selector: 'page-new-store-page',
  templateUrl: 'new-store-page.html',
})
export class NewStorePage {
  stores = [
    {
      label: "理想咖啡店",
      address: "东兴路228号",
      distance: 50,
      picture: "assets/shop1.jpg"
    },
    {
      label: "吧东",
      address: "江南大道783",
      distance: 318,
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
    console.log('ionViewDidLoad NewStorePage');
  }

}
