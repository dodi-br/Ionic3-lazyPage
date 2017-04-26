import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonDetailEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'PersonDetailEditPage'
})
@Component({
  selector: 'page-person-detail-edit-page',
  templateUrl: 'person-detail-edit-page.html',
})
export class PersonDetailEditPage {
  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.data.title;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonDetailEditPage');
  }
  
}
