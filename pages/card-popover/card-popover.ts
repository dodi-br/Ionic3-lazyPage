import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular'; 

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
  cardNum: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
    this.cardNum = navParams.data.cardNum;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPopover');
  }
  navPush(target, cardNum) {
    this.navCtrl.push(target, { cardNum: this.cardNum});
  }
  btnMore() {
     let actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: '挂失',
         role: 'zhifubao',
         handler: () => {
          // console.log('Destructive clicked');
         }
       },
       {
         text: '解绑',
         handler: () => {
           console.log('Archive clicked');
         }
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
}
