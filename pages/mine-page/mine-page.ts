import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the MinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'MinePage'
})
@Component({
  selector: 'page-mine-page',
  templateUrl: 'mine-page.html',
})
export class MinePage {
	childPage = {
  	personInformationPage: { title: '个人资料', page: 'LoginSignupPage' },
  	cardInformationPage : { title: '我的点卡', page: 'CardInformationPage' },
  	gameDataPage : { title: '游戏历史', page: 'GameHistoryPage' },
  	gameRankPage : { title: '我的榜单', page: 'GameRankPage' },
  	settingPage : { title: '设置', page: 'SettingPage'}
  }
  isLogin: false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }
  navPush(target) {
    this.navCtrl.push(target.page, { title: target.title });
  }
  btnPerson() {
    if (this.isLogin) {
      this.navCtrl.push('PersonInformationPage');
    }
    else {
      let modal;
      modal = this.modalCtrl.create('LoginSignupPage');
      modal.present();
    }
  }
}
