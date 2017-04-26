import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the PersonDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'PersonDetailPage'
})
@Component({
  selector: 'page-person-detail-page',
  templateUrl: 'person-detail-page.html',
})
export class PersonDetailPage {
	arrow: any;
	keys: any
	childPage = {
		settingPage: { title: '设置', page: 'SettingPage' },
		personDetailEditPage: { title: '修改信息', page: 'PersonDetailEditPage' }
	}
	personObj = {
		account: [ '账号', 'wawnw1'],
		label: ['昵称', 'Hybird'],
		area: ['地区', '杭州'],
		birth: ['出生日期', '2017/4/11'],
		gender: ['性别', '男'],
		email: ['邮箱', '123899696@qq.com'],
		mobile: ['手机', '159383299'],
		registerTime: ['注册日期', '2017/04/11'],
	}
	styleObj = {
		account: { modified: false, fontColor: 'gray' },
		label: { modified: true, fontColor: 'black' },
		area: { modified: true, fontColor: 'black' },
		birth: { modified: true, fontColor: 'black' },
		gender: { modified: false, fontColor: 'gray' },
		email: { modified: true, fontColor: 'black' },
		mobile: { modified: true, fontColor: 'black' },
		registerTime: { modified: false, fontColor: 'gray' },
	}
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public actionSheetCtrl: ActionSheetController) {
    this.keys = Object.keys(this.personObj);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonDetailPage');
  }
  btnPersonInfor(title) {
		if (this.styleObj[title].modified) {
			this.navCtrl.push('PersonDetailEditPage', { title: this.personObj[title][0] });
		}
		else {
			this.arrow = "detail-none";
		}
	}
	
	navPush(target) {
		this.navCtrl.push(target.page, { title: target.title });
	}
	
	btnPortrait() {
     let actionSheet = this.actionSheetCtrl.create({
     	title: "更换头像",
     buttons: [
       {
         text: '从相册',
         role: 'zhifubao',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: '拍照',
         role: 'zhifubao',
         handler: () => {
           console.log('Destructive clicked');
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
