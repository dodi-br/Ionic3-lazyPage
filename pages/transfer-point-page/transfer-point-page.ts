import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';

/**
 * Generated class for the TransferPointPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'TransferPointPage'
})
@Component({
  selector: 'page-transfer-point-page',
  templateUrl: 'transfer-point-page.html',
})
export class TransferPointPage {
  cardNum: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController) {
    this.cardNum = navParams.data.cardNum;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferPointPage');
  }
	selectCard() {
	    let modal = this.modalCtrl.create('SelectCardPage');
	    modal.present();    
	}
}
