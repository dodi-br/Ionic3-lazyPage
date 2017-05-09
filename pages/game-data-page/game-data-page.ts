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
  
  itemList = [
    { date: "2017-05-01 14:51", score: "3.00" },
    { date: "2017-05-01 15:21", tag: "最高得分", score: "3.70" },
    { date: "2017-05-01 16:00", score: "2.00" },
    { date: "2017-05-02 09:51", score: "2.05" },
    { date: "2017-05-03 12:00", score: "1.00" },
    { date: "2017-05-03 12:10", score: "2.22" },
    { date: "2017-05-03 13:51", score: "3.00" },
    { date: "2017-05-04 10:10", score: "1.00" },
    { date: "2017-05-04 11:50", score: "3.00" },
    { date: "2017-05-05 14:00", score: "3.10" }
  ];
  

  // gameDatas= [
  //   {
  //     title: "01游戏",
  //     data: [
  //       ['总PDD', 27.63],
  //       ['对战PDD', 28.45],
  //       ['等级', 15],
  //       ['对战等级', 15]
  //     ]
  //   }, {
  //     title: "米老鼠",
  //     data: [
  //       ['总MPR', 27.63],
  //       ['对战MPR', 28.45],
  //       ['等级', 15],
  //       ['对战等级', 15]
  //     ]
  //   }
  // ];
  
  // awards = [
  //   { name: "hatTrick", thisMonth: 3, all: 789 },
  //   { name: "5mark", thisMonth: 45, all: 334 },
  //   { name: "6mark", thisMonth: 43, all: 79 },
  //   { name: "7mark", thisMonth: 34, all: 78 },
  //   { name: "8mark", thisMonth: 13, all: 78 },
  //   { name: "9mark", thisMonth: 23, all: 79 },
  //   { name: "3inBlack", thisMonth: 55, all: 89 },
  //   { name: "3inBed", thisMonth: 93, all: 789 },
  //   { name: "whiteHouse", thisMonth: 1, all: 789 },
  //   { name: "lowTon", thisMonth: 11, all: 700 },
  //   { name: "highTon", thisMonth: 22, all: 56 },
  //   { name: "Ton80", thisMonth: 3, all: 1 }
  // ]

  // image = 'http://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDataPage');
  }
  

}
