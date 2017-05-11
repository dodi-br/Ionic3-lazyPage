import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { URI, HttpHeader } from '../../app/myGlobal';

@IonicPage()
@Component({
  templateUrl: 'login-signup-page.html'
})

export class LoginSignupPage {
  oLogin = {
		account: '',
		password: ''
	};
	oSignUp = {
	  account: '',
	  password: '',
	  phone: ''
	}
	varJudge = {
		account: { 
		  format: /^[a-zA-Z_][a-zA-Z0-9_]*$/,
		  notice: { login: 'none', signUp: 'none' }
	  },
		password: { 
		  format: /^.{6,}/, 
		  notice: { login: 'none', signUp: 'none' }
		},
    phone: { 
      format: /^\d{11}$/,
      notice: { login: 'none', signUp: 'none' }
    }
	};
	
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
  
  btnLoginClick() {
  	let jLogin = JSON.stringify(this.oLogin);
    let dstUrl = URI.get('login');
  	this.http.post(dstUrl, jLogin, HttpHeader.jsonContentType()).subscribe(res => {
		  this.token = res["_body"];
  		console.log(this.token);
  		this.alertNotice(this.token);
      // isLogin = false => 代表登录, true 是未登录
      this.storage.set('isLogin', false);
      
      this.navCtrl.pop();
      
  	}, error => {
  		this.alertNotice("错误的账号或密码");
      this.storage.set('isLogin', false);

      this.navCtrl.pop();
  	}); 
  }
  btnSignUpClick() {
    for (let i in this.oSignUp) {
      if (!this.judge(i, 'signUp')) {
        return 
      }
    } 
    let jSignUP = JSON.stringify(this.oSignUp);
    let dstUrl = URI.get('signUp');
    this.http.post(dstUrl, jSignUP, HttpHeader.jsonContentType()).subscribe(res => {
  		console.log(JSON.parse(res["_body"]));
  		this.navCtrl.push('PhoneVerification');
  	}, error => {
  		this.alertNotice("获取前验证码失败,请检查格式");
  	}); 
  }
  
  // label is account\password..
  // status is login or signUp
  judge(label, status) {
    const foo = this.varJudge[label];
    const value = 'login' === status ? this.oLogin[label] : this.oSignUp[label];
    if (foo.format.test(value)) {
      foo.notice[status] = 'none';
      return 1;
    }
    else {
      foo.notice[status] = 'block';
      return 0;
    }
  }

  alertNotice(message) {
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

