import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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
    cardRechargePage : { title: '充值', page: 'CardRechargePage' },
    noticePage: { title: '公告', page: 'NoticePage' },
    mapPage: { title: '地图', page: 'MapPage' },
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
  
  
  @ViewChild('rankSlider') slider: Slides;
  rankSegment: string;
  rankSlides: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.rankTab = 'game1';
    this.rankSegment = 'game1';
    this.rankSlides = [
      {
        id: "game1",
        title: "First Slide"
      },
      {
        id: "game2",
        title: "Second Slide"
      },
      {
        id: "game3",
        title: "Third Slide"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.rankSlides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    // const currentSlide = this.rankSlides[slider.getActiveIndex];
    const currentIndex = slider.getActiveIndex();
    this.rankSegment = this.rankSlides[currentIndex].id;
  }

}
