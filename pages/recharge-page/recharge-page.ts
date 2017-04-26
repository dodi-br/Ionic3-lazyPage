import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ActionSheetController, ModalController  } from 'ionic-angular';

/**
 * Generated class for the RechargePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'RechargePage'
})
@Component({
  selector: 'page-recharge-page',
  templateUrl: 'recharge-page.html',
})
export class RechargePage {
	childPage = {
		cardInformationPage: { title: "我的点卡", page: 'CardInformationPage' }
	}
	price: any;
	card: any = { 
		number : '',
		bool : false, // is readonly
		fontColor : 'black'
	}
	isNum = "";
	constructor(public navCtrl: NavController, public params: NavParams,
		public alertCtrl: AlertController, public modalCtrl: ModalController,
		public actionSheetCtrl: ActionSheetController ) {
		this.card.bool = params.data.bool;
		this.card.fontColor = params.data.fontColor;
		if (params.data.cardNum) {
			this.card.number = params.data.cardNum;
			this.isNum = "none";
		}
	}
	btnRechargeClick(event) {
	let alert = this.alertCtrl.create({
      //title: 'New Friend!',
      subTitle: '充值成功!',
      buttons: ['OK']
    });
    alert.present();
	}
	onChangeTime(e) {
		this.price = (e * 0.1).toFixed(2);
	}
	
	selectCard() {
	    let modal = this.modalCtrl.create('SelectCardPage');
	    modal.present();    
	}
	isReadonly() {
		return this.card.bool;
	}
	
	navPush(target) {
	this.navCtrl.push(target.page, { title: target.title });
  }
  
  btnRecharge() {
     let actionSheet = this.actionSheetCtrl.create({
     title: '充值方式',
     buttons: [
       {
         text: '支付宝',
         role: 'zhifubao',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: '微信支付',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: '银联',
         role: '',
         handler: () => {
           console.log('Cancel clicked');
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
