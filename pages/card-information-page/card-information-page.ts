import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, PopoverController } from 'ionic-angular';

/**
 * Generated class for the CardInformationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'CardInformationPage'
})
@Component({
  selector: 'page-card-information-page',
  templateUrl: 'card-information-page.html',
})
export class CardInformationPage {
  title: string;
	items = [];
	guashi = [];
	constructor(public navCtrl: NavController, public navParams: NavParams,
	  public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
	  this.title = navParams.data.title;
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
  	this.guashi = [
    	{
    		// 'label': 'Card1',
    		'number': 'SCDD3382',
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
  btnCardsClick(item) {
    let popover = this.popoverCtrl.create('CardPopover', {cardNum: item.number }, {cssClass: "card-menu"});
    popover.present({
      // ev: myEvent
    });
  }
  btnAddCard() {
     this.navCtrl.push('AddCardPage', { title: '添加点卡'});
  }
}
