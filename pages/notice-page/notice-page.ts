import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'NoticePage'
})
@Component({
  selector: 'page-notice-page',
  templateUrl: 'notice-page.html',
})
export class NoticePage {
  area = {
  	北京: 1, 
  	杭州: 2,
  	上海: 3,
  	深圳: 4
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
  }

}
