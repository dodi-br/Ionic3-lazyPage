import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting-page',
  templateUrl: 'setting-page.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  navPush(target) {
    this.navCtrl.push(target);
  }
  btnLogOut() {
    this.storage.set('isLogin', false);
    this.navCtrl.pop();
  }
}
