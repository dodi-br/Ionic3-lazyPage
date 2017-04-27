import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectLanguagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'SelectLanguagePage'
})
@Component({
  selector: 'page-select-language-page',
  templateUrl: 'select-language-page.html',
})
export class SelectLanguagePage {
  languages = [{
      name: '简体中文',
    },{
      name: '繁体中文',
    },{
      name: '英语',
    },{
      name: '法语',
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLanguagePage');
  }

}
