import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { ModalController } from 'ionic-angular';

/**
 * Generated class for the RankPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-rank-page',
  templateUrl: 'rank-page.html'
})
export class RankPage {
  topSegment = [
    { value: 'today', title: '今日' },
    // { value: 'level', title: '评级' },
    { value: 'game', title: '比赛' },
    { value: 'award', title: '奖励' }
  ];
  
  showSlides = [true, false, false];
  showSlider = false;
  
  @ViewChild('rankSlider') slider: Slides;

  rankSegment = 'today';
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankPage');
    setTimeout(() => {
      this.showSlider = true;
    }, 50);
  }
  
  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.topSegment.findIndex((slide) => {
      return slide.value === segmentButton.value;
    });
    // this.showSlides[selectedIndex] = true;
    this.slider.slideTo(selectedIndex);
    console.log(selectedIndex);
  }

  onSlideChangStart(slider) {
    const currentIndex = slider.getActiveIndex();
    console.log('slide' + currentIndex + 'start');
    if (currentIndex > 2) { return; }
    // this.rankSegment = this.topSegment[currentIndex].value;
  }
  onSlideChangEnd(slider) {
    const currentIndex = slider.getActiveIndex();
    console.log('slide' + currentIndex + 'end');
    if (currentIndex > 2) { return; }
    this.showSlides[currentIndex] = true;
    // this.rankSegment = this.topSegment[currentIndex].value;
  }
  btnPlayer() {
    let modal = this.modalCtrl.create('PlayerInfoPage');
    modal.present();
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
  }
}
