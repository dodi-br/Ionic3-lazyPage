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
  levelRank = [];
  gameRankSegment = 'gaofen';
  rewardSegment = 'gaofen';
  rankTab: any;
  no1 = [
    {
      'game': '高分赛',
      'score': '1022',
      'store': 'Aloha',
      'level': 'AA20',
      'name': 'Sa Sa',
      img: 'assets/No1.jpeg'
    },
    {
      'game': '01游戏',
      'score': '26.72',
      'store': 'Lucky Darts',
      'level': 'A14',
      'name': '柒到貳零肆陸',
      img: 'assets/member1.jpeg'
    },
    {
      'game': '米老鼠',
      'score': '3.19',
      'store': '白马',
      'level': 'BBB3',
      'name': '0046',
      img: 'assets/member2.jpeg'
    }
  ];
  
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
      },
      {
        id: "award",
        title: "奖励"
      },
      {
        id: "mainStore",
        title: "主店"
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
  console.log(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentIndex = slider.getActiveIndex();
    if (currentIndex > 5) { return; }
    this.rankSegment = this.rankSlides[currentIndex].id;
  console.log(currentIndex);
  }

}
