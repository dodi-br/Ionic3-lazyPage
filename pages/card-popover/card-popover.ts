import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardPopover page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'CardPopover'
})
@Component({
  selector: 'page-card-popover',
  templateUrl: 'card-popover.html',
})
export class CardPopover {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPopover');
  }
  navPush(target) {
    this.navCtrl.push(target);
  }

}
