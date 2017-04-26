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
  gameHistorys = [
    {
      result: '胜', type: '米老鼠', scoreType: 'PPD', score: 29, count: 15,
      time: '2017-04-26 (15:17:26)', machine: '飞镖机001', store: '星峰',
      award: [
        { type: 'hatTrick', count: 2 },
        { type: '5mark', count: 1 },
        { type: '6mark', count: 3 },
        { type: '7mark', count: 0 },
        { type: '8mark', count: 0 },
        { type: '9mark', count: 1 },
        { type: '3inBlack', count: 1 },
        { type: '3inBed', count: 0 },
        { type: 'whiteHorse', count: 0 },
        { type: 'lowTon', count: 1 },
        { type: 'highTon', count: 0 },
        { type: 'ton80' , count: 0 }
      ]
    },
    { 
      result: '胜', type: '高分赛', scoreType: 'count-up', score: 30, count: 10,
      time: '2017-04-26 (10:10:22)', machine: '堡垒机abc', store: '星峰',
      award: [
        { type: 'hatTrick', count: 2 },
        { type: '5mark', count: 1 },
        { type: '6mark', count: 3 },
        { type: '7mark', count: 0 },
        { type: '8mark', count: 0 },
        { type: '9mark', count: 1 },
        { type: '3inBlack', count: 1 },
        { type: '3inBed', count: 0 },
        { type: 'whiteHorse', count: 0 },
        { type: 'lowTon', count: 1 },
        { type: 'highTon', count: 0 },
        { type: 'ton80' , count: 0 }
      ]

      
    },
    { 
      result: '负', type: '米老鼠', scoreType: 'PPD', score: 29, count: 30,
      time: '2017-04-20 (17:30:15)', machine: '堡垒机abc', store: '星峰',
      award: [
        { type: 'hatTrick', count: 2 },
        { type: '5mark', count: 1 },
        { type: '6mark', count: 3 },
        { type: '7mark', count: 0 },
        { type: '8mark', count: 0 },
        { type: '9mark', count: 1 },
        { type: '3inBlack', count: 1 },
        { type: '3inBed', count: 0 },
        { type: 'whiteHorse', count: 0 },
        { type: 'lowTon', count: 1 },
        { type: 'highTon', count: 0 },
        { type: 'ton80' , count: 0 }
      ]

    },
    { 
      result: '胜', type: '01游戏', scoreType: 'MPR', score: 32, count: 22,
      time: '2017-04-15 (18:33:21)', machine: '堡垒机abc', store: '星峰',
      award: [
        { type: 'hatTrick', count: 2 },
        { type: '5mark', count: 1 },
        { type: '6mark', count: 3 },
        { type: '7mark', count: 0 },
        { type: '8mark', count: 0 },
        { type: '9mark', count: 1 },
        { type: '3inBlack', count: 1 },
        { type: '3inBed', count: 0 },
        { type: 'whiteHorse', count: 0 },
        { type: 'lowTon', count: 1 },
        { type: 'highTon', count: 0 },
        { type: 'ton80' , count: 0 }
      ]
    },
    { 
      result: '负', type: '米老鼠', scoreType: 'PPD', score: 21, count: 20,
      time: '2017-04-11 (9:08:11)', machine: '堡垒机abc', store: '星峰',
      award: [
        { type: 'hatTrick', count: 2 },
        { type: '5mark', count: 1 },
        { type: '6mark', count: 3 },
        { type: '7mark', count: 0 },
        { type: '8mark', count: 0 },
        { type: '9mark', count: 1 },
        { type: '3inBlack', count: 1 },
        { type: '3inBed', count: 0 },
        { type: 'whiteHorse', count: 0 },
        { type: 'lowTon', count: 1 },
        { type: 'highTon', count: 0 },
        { type: 'ton80' , count: 0 }
      ]
    },
    { 
      result: '胜', type: '米老鼠', scoreType: 'PPD', score: 29, count: 12,
      time: '2017-03-29 (14:14:02)', machine: '堡垒机abc', store: '星峰',
      award: [
        { type: 'hatTrick', count: 2 },
        { type: '5mark', count: 1 },
        { type: '6mark', count: 3 },
        { type: '7mark', count: 0 },
        { type: '8mark', count: 0 },
        { type: '9mark', count: 1 },
        { type: '3inBlack', count: 1 },
        { type: '3inBed', count: 0 },
        { type: 'whiteHorse', count: 0 },
        { type: 'lowTon', count: 1 },
        { type: 'highTon', count: 0 },
        { type: 'ton80' , count: 0 }
      ]
    }

    
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameHistory');
  }
}
