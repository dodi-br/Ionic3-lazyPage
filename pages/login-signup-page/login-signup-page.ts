import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

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
		mobile:''
	}
	token = "";
	selectedTab: any;
  constructor(
    public http: Http, 
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public storage: Storage) {
  	  this.selectedTab = "Login";
  }
  // btnLoginClick(event) {
  // 	let loginJson = JSON.stringify(this.oLogin);
  // 	//let dstUrl = 'http://192.168.1.50:8080/rest/softdart/memberAuth/login';
  // 	let dstUrl = 'http://115.159.75.162:8998';
  // 	//var data = JSON.stringify({account: 645});
  // 	this.http.post(dstUrl, loginJson, {}).then(data => {
  // 		// this.token = loginJson._body;
  // 		// alert(this.token);
	 //   console.log(data.status);
  //     console.log(data.data); // data received by server
  //     console.log(data.headers);
  // 	}).catch(error => {
  // 		this.notice("请检查您的网络");
  //     console.log(error.status);
  //     console.log(error.error); // error message as string
  //     console.log(error.headers);
  // 	}); 
  btnLoginClick(event) {
  	let loginJson = JSON.stringify(this.oLogin);
  	let dstUrl = 'http://115.159.75.162:8998';
  	this.http.post(dstUrl, loginJson).subscribe(loginJson => {
		this.token = loginJson["_body"];
  		console.log(this.token);
  	}, error => {
  		this.notice("请检查您的网络");
  	}); 
    // isLogin = false => 代表登录, true 是未登录
    this.storage.set('isLogin', false);
    this.navCtrl.pop();
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



