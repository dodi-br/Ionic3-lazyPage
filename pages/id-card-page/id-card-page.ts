import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the IdCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'IdCardPage'
})
@Component({
  selector: 'page-id-card-page',
  templateUrl: 'id-card-page.html',
})
export class IdCardPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
  	this.items = [
    	{
    		// 'label': 'Card1',
    		'number': '123456ABCD',
    		'name': 'wefmd',
    		'record': {
    		  rating: 0,
    		  ppd: 0,
    		  mpr: 0
    		}
     	},
     	{
     	// 	'label': 'Card2',
     		'number': '6666666ZZZZ',
     		'name': 'xzzz',
     		'record': {
     		  rating: 100,
     		  ppd: 90,
     		  mpr: 80
     		}
     	}
   	]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdCardPage');
  }
  btnIdCard() {
     let actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: '设为主卡',
         role: 'zhifubao',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: '解除绑定'
       },
       {
       		text: '取消',
       		role: 'Cancel',
       		handler: () => {
       		}
       }
     ]
   });
   actionSheet.present();
  }
  
  btnAddCard() {
     this.navCtrl.push('AddCardPage', { title: '添加身份卡'});
  }

}
