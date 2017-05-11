import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Tabs } from 'ionic-angular';

/**
 * Generated class for the Multilanguage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-multilanguage',
  templateUrl: 'multilanguage.html',
})
export class Multilanguage {
  languages = [
    'cn',
    'en'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public translate: TranslateService, public tabs: Tabs) {
      translate.use('en');
  }
  
  btn(language) {
      this.tabs.select(3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Multilanguage');
  }

}
