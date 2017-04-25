import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

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
	constructor(public navCtrl: NavController, public params: NavParams,
		public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController ) {
		this.card.number = params.data.number;
		this.card.bool = params.data.bool;
		this.card.fontColor = params.data.fontColor;
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
		let alert = this.alertCtrl.create({
			message: `
			<ion-list radio-group>
		  <ion-list-header>
		    Language
		  </ion-list-header>
		
		  <ion-item>
		    <ion-label>Go</ion-label>
		    <ion-radio checked="true" value="go"></ion-radio>
		  </ion-item>
		
		  <ion-item>
		    <ion-label>Rust</ion-label>
		    <ion-radio value="rust"></ion-radio>
		  </ion-item>
		
		  <ion-item>
		    <ion-label>Python</ion-label>
		    <ion-radio value="python" disabled="true"></ion-radio>
		  </ion-item>
			</ion-list>
			`
		});
    alert.present();
    
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
