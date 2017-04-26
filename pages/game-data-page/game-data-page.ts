import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GameDataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game-data-page',
  templateUrl: 'game-data-page.html',
})
export class GameDataPage {

  // @ViewChild('gameSlider') gameSlider: Slides;
  // gameSegment: any;
  gameDatas= [
    {
      title: "01游戏",
      data: [
        ['总PDD', 27.63],
        ['对战PDD', 28.45],
        ['等级', 15],
        ['对战等级', 15]
      ]
    }, {
      title: "米老鼠",
      data: [
        ['总MPR', 27.63],
        ['对战MPR', 28.45],
        ['等级', 15],
        ['对战等级', 15]
      ]
    }
  ];
  
  awards = [
    { name: "hatTrick", thisMonth: 3, all: 789 },
    { name: "5mark", thisMonth: 45, all: 334 },
    { name: "6mark", thisMonth: 43, all: 79 },
    { name: "7mark", thisMonth: 34, all: 78 },
    { name: "8mark", thisMonth: 13, all: 78 },
    { name: "9mark", thisMonth: 23, all: 79 },
    { name: "3inBlack", thisMonth: 55, all: 89 },
    { name: "3inBed", thisMonth: 93, all: 789 },
    { name: "whiteHouse", thisMonth: 1, all: 789 },
    { name: "lowTon", thisMonth: 11, all: 700 },
    { name: "highTon", thisMonth: 22, all: 56 },
    { name: "Ton80", thisMonth: 3, all: 1 }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDataPage');
  }

}
