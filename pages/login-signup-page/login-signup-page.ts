import { Component } from '@angular/core';
import { App, IonicPage, ToastController, NavController } from 'ionic-angular';
// import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'LoginSignupPage'
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
  constructor(private app: App, 
    // public http: Http, 
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public storage: Storage) {
  	 // this.http = http;
  	  this.selectedTab = "Login";
  }
  btnLoginClick(event) {
  // 	let loginJson = JSON.stringify(this.oLogin);
  // 	//let dstUrl = 'http://192.168.1.50:8080/rest/softdart/memberAuth/login';
  // 	let dstUrl = 'http://115.159.75.162:8998';
  // 	//var data = JSON.stringify({account: 645});
  // 	this.http.post(dstUrl, loginJson).subscribe(loginJson => {
		// this.token = loginJson._body;
  // 		alert(this.token);
  // 	}, error => {
  // 		this.notice("请检查您的网络");
  // 	}); 

     // set a key/value
    this.storage.set('isLogin', true);

     // Or to get a key/value pair
    // storage.get('isLogin').then((val) => {
      // console.log('Your age is', val);
      
      // this.isLogin = val;
    // });
    this.navCtrl.pop();
      //keep all your codes inside here

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



