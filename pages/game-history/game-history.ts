import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GameHistory page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'GameHistory'
})
@Component({
  selector: 'page-game-history',
  templateUrl: 'game-history.html',
})
export class GameHistory {
  showList = ['', 'block', 'none', 'none', 'none', 'none', 'none', 'none'];
  gameWeekData = [
    [
    {
      result: 0,
      type: 'PDD',
      score: 12.5,
      date: '2017-05-08 10:29'
    },
    {
      result: 0,
      type: 'MPR',
      score: 10.5,
      date: '2017-05-08 10:10'
    },
    {
      result: 1,
      type: 'MPR',
      score: 7.5,
      date: '2017-05-08 09:29'
    },
  
    {
      result: 1,
      type: 'PDD',
      score: 2.5,
      date: '2017-05-08 08:05'
    },
    {
      result: 0,
      type: 'PDD',
      score: 12.5,
      MPR: null,
      date: '2017-05-08 07:29'
    }
    ],
    [
    {
      result: 0,
      type: 'PDD',
      score: 12.5,
      date: '2017-05-08 10:29'
    },
    {
      result: 0,
      type: 'MPR',
      score: 10.5,
      date: '2017-05-08 10:10'
    },
    {
      result: 1,
      type: 'MPR',
      score: 7.5,
      date: '2017-05-08 09:29'
    },
    ],
    [],
    [],
    [],
    [],
    []
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameHistory');
  }
}
