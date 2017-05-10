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
      scoreType: 'PDD',
      score: 12.5,
      time: '10:29',
      type: '501GAME'
    },
    {
      result: 0,
      scoreType: 'MPR',
      score: 10.5,
      time: '10:10',
      type: 'MATCH'
    },
    {
      result: 1,
      scoreType: 'MPR',
      score: 7.5,
      time: '09:29',
      type: 'CRICKET'
    },
  
    {
      result: 1,
      scoreType: 'PDD',
      score: 2.5,
      time: '08:05',
      type: '301GAME'
    },
    {
      result: 0,
      scoreType: 'PDD',
      score: 12.5,
      MPR: null,
      time: '07:29',
      type: '201GAME'
    }
    ],
    [
    {
      result: 0,
      scoreType: 'PDD',
      score: 12.5,
      time: '10:29',
      type: '01GAME'
    },
    {
      result: 0,
      scoreType: 'MPR',
      score: 10.5,
      time: '10:10',
      type: 'CRICKET'
    },
    {
      result: 1,
      scoreType: 'MPR',
      score: 7.5,
      time: '09:29',
      type: 'CRICKET'
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
