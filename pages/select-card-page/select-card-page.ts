import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'SelectCardPage'
})
@Component({
  selector: 'page-select-card-page',
  templateUrl: 'select-card-page.html',
})
export class SelectCardPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.items = [
    	{
    		// 'label': 'Card1',
    		'number': '123456ABCD',
    		'point': '5',
    		'status': '绑定',
    		'record': {
    		  rating: 0,
    		  ppd: 0,
    		  mpr: 0
    		}
     	},
     	{
     	// 	'label': 'Card2',
     		'number': '6666666ZZZZ',
     		'point': '500',
     		'status': '挂失',
     		'record': {
     		  rating: 100,
     		  ppd: 90,
     		  mpr: 80
     		}
     	}
   	]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCardPage');
  }

}
