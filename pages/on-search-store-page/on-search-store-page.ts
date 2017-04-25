import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';

/**
 * Generated class for the OnSearchStorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'onSearchStorePage'
})
@Component({
  selector: 'page-on-search-store-page',
  templateUrl: 'on-search-store-page.html',
})
export class OnSearchStorePage {
  @ViewChild('search') searchBar: Searchbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnSearchStorePage');
  }
  
  ionViewDidEnter() {
    setTimeout(()=>{
        this.searchBar.setFocus();
    }, 150);
  }

}
