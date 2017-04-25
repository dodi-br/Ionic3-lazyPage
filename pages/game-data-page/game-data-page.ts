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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDataPage');
  }

}
