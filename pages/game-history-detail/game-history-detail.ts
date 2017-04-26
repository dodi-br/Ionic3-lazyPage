import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GameHistoryDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'GameHistoryDetail'
})
@Component({
  selector: 'page-game-history-detail',
  templateUrl: 'game-history-detail.html',
})
export class GameHistoryDetail {
  item: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameHistoryDetail');
  }

}
