import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'

/**
 * Generated class for the AddCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'AddCardPage'
})
@Component({
  selector: 'page-add-card-page',
  templateUrl: 'add-card-page.html',
})
export class AddCardPage {
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
      this.title = navParams.data.title;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCardPage');
  }
	btnAddCard() {
  	let alert = this.alertCtrl.create({
        subTitle: 'Success!',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }]
      });
      alert.present();
  	}
}
