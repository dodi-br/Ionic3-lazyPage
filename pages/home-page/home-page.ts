import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, PopoverController } from 'ionic-angular';
import { Tabs, ActionSheetController, ModalController, Select } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html',
})
export class HomePage {
  childPage = {
    rechargePage : { title: '充值', page: 'RechargePage' },
    noticePage: { title: '公告', page: 'NoticePage' },
    gameDataPage: { title: '游戏', page: 'GameDataPage' },
    storeDetailPage: { title: '店铺详情', page: 'StoreDetailPage' },
    loginSignupPage: { page: 'LoginSignupPage' },  // Login/signup or person information page
    personInformationPage: { page: 'PersonInformationPage' },
    searchStorePage: { page: 'SearchStorePage' },
    newStorePage: { page: 'NewStorePage' }
  }
  position = {
    latitude: 116.39,
    longtitude: 39.9,
    distance: 500
  }

  // keys = Object.keys(this.childPage);
  isLogin = "none";
  rankTab: any;
  
  
  @ViewChild('rankSlider') rankSlider: Slides;
  @ViewChild('gameSlider') gamedataslide: Slides;
  @ViewChild('selectCountry') selectCountry: Select;

  rankSegment: string;
  gameSegment: string;
  rankSlides: any;
  gameSlides: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController, public tabs: Tabs,
    public storage: Storage, public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController) {
      

      
    // storage.ready().then(() => {

    //   // set a key/value
    //   // storage.set('name', 'Max');

    //   // Or to get a key/value pair
    //   storage.get('isLogin').then((val) => {
    //     // console.log('Your age is', val);
    //     if (val) {
    //       this.isLogin = "";
    //     }
    //     else {
    //       this.isLogin = "none";
    //     }
    //   });
    // });

    // this.rankTab = 'game1';
    this.rankSegment = 'rank1';
    this.rankSlides = [
      {
        id: "rank1",
        evaluate: "SCORE",
        player: { name: 'Ruby', score: 1500 },
        img: 'assets/No1.jpeg',
        players: [
          { name: 'Because of you', score: 1200, num: 2 },
          { name: '丁听', score: 1000, num: 3 },
          { name: '阿菲', score: 1000, num: 4 }
        ]
      },
      {
        id: "rank2",
        evaluate: "PPD",
        player: { name: 'Jessie', score: 29 },
        img: 'assets/member1.jpeg',
        players: [
          { name: 'Because of you', score: 25, num: 2 },
          { name: 'Month', score: 20, num: 3 },
          { name: '阿菲', score: 11, num: 4 }
        ]
      },
      {
        id: "rank3",
        evaluate: "MPR",
        player : { name: '林医生', score: 20 },
        img: 'assets/member2.jpeg',
        players: [
          { name: '丁听', score: 19, num: 2 },
          { name: 'Year', score: 15, num: 3 },
          { name: 'Son', score: 9, num: 4 }
        ]
      }
    ];
    this.gameSegment = 'game1';
    this.gameSlides = [
      {
        id: "game1",
        average: [ "平均分", "232"],
        highest: [ "最高分", 34],
        lowest: [ "最低分", 23]
      },
      {
        id: "game2",
        title: "First Slide",
        average: [ "平均PDD", "38"],
        highest: [ "最高PPD", "60"],
        lowest: [ "最低PPD", "20"]
      },
      {
        id: "game3",
        title: "Second Slide",
        average: [ "平均MPR", "60"],
        highest: [ "最高MPR", "80"],
        lowest: [ "最低MPR", "40"]
      }
    ]; 
  }
    


  // ionViewDidLoad() {
  ionViewDidEnter() {
      this.storage.get('isLogin').then((val) => {
        // console.log('Your age is', val);
        if (val) {
          this.isLogin = "none";
        }
        else {
          this.isLogin = "";
        }
    });

  }

  onRankSegmentChanged(segmentButton) {
    const selectedIndex = this.rankSlides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.rankSlider.slideTo(selectedIndex);
  }

  onRankSlideChanged(slider) {
    const currentIndex = slider.getActiveIndex();
    if (currentIndex > 2) { return };
    this.rankSegment = this.rankSlides[currentIndex].id;
  }
  
  onGameSegmentChanged(segmentButton) {
    const selectedIndex = this.gameSlides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.gamedataslide.slideTo(selectedIndex);
    console.log(selectedIndex);
  }

  onGameSlideChanged(slider) {
    const currentIndex = slider.getActiveIndex();
    if (currentIndex > 2) { return };
    this.gameSegment = this.gameSlides[currentIndex].id;
  }

  
  navPush(target) {
    this.navCtrl.push(target.page, {title: target.title});
  }

  btnCountry(myEvent) {
    let popover = this.popoverCtrl.create('SelectCountry');
    popover.present({
      ev: myEvent
    });
    // let actionSheet = this.actionSheetCtrl.create({
    //   buttons: [
    //     {
        //   text: '收藏',
        //   role: 'destructive',
        //   handler: () => {
        //     console.log('Destructive clicked');
        //   }
        // },{
    //       text: '选择国家',
    //       handler: () => {
    //         // console.log('Archive clicked');
    //         let modal = this.modalCtrl.create('SelectCountry');
    //         modal.present();
    //       }
    //     },{
    //       text: '选择语言',
    //       handler: () => {
    //         let modal = this.modalCtrl.create('SelectLanguagePage');
    //         modal.present();
    //       }
    //     }
    //   ]
    // });
    // actionSheet.present();
  }
  btnPlayer() {
    let modal = this.modalCtrl.create('PlayerInfoPage');
    modal.present();
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
  
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
}
