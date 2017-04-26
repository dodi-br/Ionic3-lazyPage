import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  	gameDataPage : { title: '游戏数据', page: 'GameDataPage' },
  	myRankPage : { title: '我的排名', page: 'MyRankPage' },
  	gameHistoryPage: { title: '游戏历史', page: 'GameHistory' },
  	settingPage : { title: '设置', page: 'SettingPage'},
  	idCardPage: { title: '我的身份卡', page: 'IdCardPage' },
  	mainStorePage: { title: '我的主店', page: 'StoreDetailPage' }
  };
  mainStore = {
    label: "理想咖啡店",
    address: "东兴路228号",
    latitude: "234.22",
    longtitude: "28.2",
    distance: 318,
    averageCost: 8.6,
    phone: '15988152673',
    email: '123899696@qq.com',
    room: false,
    parking: true,
    credit: false,
    operationTime: '9:00 - 18:00',
    picture: "assets/shop1.jpg"
  };
  portrait = "";
  personName = "";
  isLogin = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public storage: Storage) {
    // storage.ready().then(() => {

    //   // set a key/value
    //   // storage.set('name', 'Max');

    //   // Or to get a key/value pair
    //   storage.get('isLogin').then((val) => {
    //     // console.log('Your age is', val);
    //     this.isLogin = val;
    //   });
    // });
  }

  ionViewDidEnter() {
      this.storage.get('isLogin').then((val) => {
        // console.log('Your age is', val);
        if (val) {
          this.personName = "zhangsan";
          this.portrait = 'assets/portrait.png';
        }
        else {
          this.personName = "登录/注册";
          this.portrait = '';

        }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }
  navPush(target) {
    this.navCtrl.push(target.page, { title: target.title });
  }
  btnPerson() {
   this.storage.get('isLogin').then((val) => {
    if (val) {
      this.navCtrl.push('PersonDetailPage');
    }
    else {
      let modal;
      modal = this.modalCtrl.create('LoginSignupPage');
      modal.present();
    }

   });
  }
  
  btnMainStore() {
    this.navCtrl.push('StoreDetailPage', { store: this.mainStore, title: '我的主店' } );
  }
}
