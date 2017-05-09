import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { URI, HttpHeader } from '../../app/myGlobal';

@IonicPage({
})
@Component({
  templateUrl: 'login-signup-page.html'
})

export class LoginSignupPage {
  oLogin = {
		account: '',
		password: ''
	};
	oSignUp = {
		account:'',
		password:'',
    phone: ''
	}
	getVerificationCodeStatus: boolean;
	token: string;
	selectedTab: any;
  constructor(
    public http: Http, 
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public storage: Storage) {
  	  this.selectedTab = "Login";
  }
  
  btnLoginClick(event) {
  	let jLogin = JSON.stringify(this.oLogin);
    let dstUrl = URI.get('login');
  	this.http.post(dstUrl, jLogin, HttpHeader.jsonContentType()).subscribe(res => {
		  this.token = res["_body"];
  		console.log(this.token);
  	}, error => {
  		this.notice("请检查您的网络");
  	}); 
    // isLogin = false => 代表登录, true 是未登录
    this.storage.set('isLogin', false);
    this.navCtrl.pop();
  }
  btnSignUpClick() {
    let jSignUP = JSON.stringify(this.oSignUp);
    let dstUrl = URI.get('signUp');
    this.http.post(dstUrl, jSignUP, HttpHeader.jsonContentType()).subscribe(res => {
  		this.getVerificationCodeStatus = JSON.parse(res["_body"]).verificateStatus;
  		console.log(this.getVerificationCodeStatus);
  		if (this.getVerificationCodeStatus) {
        this.navCtrl.push('PhoneVerification');
  		} 
  		else {
  		  this.notice("获取验证码失败");
  		}
  	}, error => {
  		this.notice("请检查您的网络");
  	}); 
  }
  



  notice(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
  cancel() {
    this.navCtrl.pop();
  }
  
}

