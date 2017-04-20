import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the RankPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'RankPage'
})
@Component({
  selector: 'page-rank-page',
  templateUrl: 'rank-page.html',
})
export class RankPage {
  
  rankTab: any;
  
  
  @ViewChild('rankSlider') slider: Slides;
  rankSegment: string;
  rankSlides: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rankSegment = 'main';
    this.rankSlides = [
      {
        id: "main",
        title: "First Slide"
      },
      {
        id: "level",
        title: "Second Slide"
      },
      {
        id: "game",
        title: "Third Slide"
      },
      {
        id: "battle",
        title: ""
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankPage');
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
    const currentIndex = slider.getActiveIndex();
    this.rankSegment = this.rankSlides[currentIndex].id;
  }

}
