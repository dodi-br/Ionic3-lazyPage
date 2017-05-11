import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import { Http } from '@angular/http';
import { URI, HttpHeader } from '../../app/myGlobal';


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
	class oPerson {
		portrait: '',
		account: '',
		nickname: '',
		area: 0,
		birth: '',
		gender: 0,
		email: '',
		mobile: '',
		registerTime: '',
	}
	person: oPerson;
	
	
	isModified = {
		account: false,
		nickname: true,
		area: true,
		birth: true,
		gender: true,
		email: true,
		mobile: true,
		registerTime: false,
	}
	constructor(public navCtrl: NavController, public navParams: NavParams,
	public actionSheetCtrl: ActionSheetController,
	public http: Http) {
		this.keys = Object.keys(this.oPerson);
	}
	
	ionViewDidLoad() {
	console.log('ionViewDidLoad PersonDetailPage');
	this.getInfo();
	}
 // btnPersonInfor(title) {
	// 	if (this.styleObj[title].modified) {
	// 		this.navCtrl.push('PersonDetailEditPage', { title: this.oPerson[title][0] });
	// 	}
	// 	else {
	// 		this.arrow = "detail-none";
	// 	}
	// }
	
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
		}
		]
		});
		actionSheet.present();
	}
	
	getInfo() {
		const dstUrl = URI.get('personInfo');
		this.http.post(dstUrl, {}, HttpHeader.jsonContentType()).subscribe(res => {
			console.log(res["_body"]);
			this.person = JSON.parse(res["_body"]);
			console.log(this.person);
		}, error => {
			console.log("error");
		}); 
	}
}
