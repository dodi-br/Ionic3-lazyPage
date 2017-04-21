import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, PopoverController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'HomePage'
})
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
    searchStorePage: { page: 'SearchStorePage' }
  }
  position = {
    latitude: 116.39,
    longtitude: 39.9,
    distance: 500
  }

  // keys = Object.keys(this.childPage);
  isLogin: false;
  rankTab: any;
  
  
  @ViewChild('rankSlider') rankSlider: Slides;
  @ViewChild('gameSlider') gameSlider: Slides;

  rankSegment: string;
  gameSegment: string;
  rankSlides: any;
  gameSlides: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController) {
    // this.rankTab = 'game1';
    this.rankSegment = 'rank1';
    this.rankSlides = [
      {
        id: "rank1",
        title: "First Slide",
        evaluate: "SCORE"
      },
      {
        id: "rank2",
        title: "Second Slide",
        evaluate: "PPD"
      },
      {
        id: "rank3",
        title: "Third Slide",
        evaluate: "MPR"
      }
    ];
    this.gameSegment = 'game1';
    this.gameSlides = [
      {
        id: "game1",
        title: "First Slide",
        average: [ "平均PDD", "38"],
        highest: [ "最高PPD", "60"],
        lowest: [ "最低PPD", "20"]
      },
      {
        id: "game2",
        title: "Second Slide",
        average: [ "平均MPR", "60"],
        highest: [ "最高MPR", "80"],
        lowest: [ "最低MPR", "40"]
      }
    ]; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onRankSegmentChanged(segmentButton) {
    const selectedIndex = this.rankSlides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.rankSlider.slideTo(selectedIndex);
  }

  onRankSlideChanged(slider) {
    const currentIndex = slider.getActiveIndex();
    this.rankSegment = this.rankSlides[currentIndex].id;
  }
  
  onGameSegmentChanged(segmentButton) {
    const selectedIndex = this.gameSlides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.gameSlider.slideTo(selectedIndex);
  }

  onGameSlideChanged(slider) {
    const currentIndex = slider.getActiveIndex();
    this.gameSegment = this.gameSlides[currentIndex].id;
  }

  
  navPush(target) {
    this.navCtrl.push(target.page, {title: target.title});
  }

  btnCountry() {
    let popover = this.popoverCtrl.create('SelectCountry');
    popover.present();
  }
}
