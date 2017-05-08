import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController,
  Slides, ModalController } from 'ionic-angular';

/**
 * Generated class for the StoreDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-store-detail-page',
  templateUrl: 'store-detail-page.html',
})
export class StoreDetailPage {
  showContent = false;
  title: any;
  storeName: any;
  store: any;
  date = "yesterday";
  game = "gaofen";
  storeDetailSegment = 'detail';
  storeDetailSlides = [
    {
      id: 'detail'
    }, {
      id: 'rank'
    }, {
      id: 'player'
    }
  ];
  
  storeList = {
    "理想咖啡店": {
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
    },
    "吧东": {
      address: "江南大道783",
      latitude: "23",
      longtitude: "2.2",
      distance: 50,
      averageCost: 5.6,
      phone: '15988152673',
      email: '123899696@qq.com',
      room: false,
      parking: true,
      credit: false,
      operationTime: '9:00 - 18:00',
      picture: "assets/store2.jpg",
      url: "http://www.phoenixdart.com/cn"
    },
    "流浪星": {
      address: "九龍紅磡黃埔花園第八期蔡瀾美食坊地庫B1舖",
      latitude: "23",
      longtitude: "2.2",
      distance: 50,
      averageCost: 5.6,
      phone: '23369008 ',
      email: '123899696@qq.com',
      room: false,
      parking: true,
      credit: false,
      operationTime: '9:00 - 18:00',
      picture: "assets/store3.jpg"
    }
  };
  
  @ViewChild('storeDetailSlider') storeDetailSlider: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
    this.title = navParams.data.title;
    this.storeName = navParams.data.storeName;
    this.store = this.storeList[this.storeName];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreDetailPage');
    setTimeout(() => {
      this.showContent = true;
    }, 50);
  }
  
  navPush(target) {
    this.navCtrl.push(target);
  }
  btnPhone() {
      let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '复制',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '拨号',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  btnMore() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
        //   text: '收藏',
        //   role: 'destructive',
        //   handler: () => {
        //     console.log('Destructive clicked');
        //   }
        // },{
          text: '分享',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  onStoreDetailSegmentChanged(segmentButton) {
    const selectedIndex = this.storeDetailSlides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.storeDetailSlider.slideTo(selectedIndex);
  }

  onStoreDetailSlideChanged(slider) {
    const currentIndex = slider.getActiveIndex();
    if (currentIndex > 2) { return; }
    this.storeDetailSegment = this.storeDetailSlides[currentIndex].id;
  }
  btnPlayer() {
    let modal = this.modalCtrl.create('PlayerInfoPage');
    modal.present();
  }
}
