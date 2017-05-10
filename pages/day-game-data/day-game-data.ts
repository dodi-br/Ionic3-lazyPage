import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DayGameData page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-day-game-data',
  templateUrl: 'day-game-data.html',
})
export class DayGameData {
  award = [
    { type: 'SINGLE BULL', count: 4 },
    { type: 'DOUBLE BULL',  count: 6 },
    { type: 'HATTRICK', count: 2 },
    { type: '5MARK', count: 1 },
    { type: '6MARK', count: 3 },
    { type: '7MARK', count: 0 },
    { type: '8MARK', count: 0 },
    { type: '9MARK', count: 1 },
    { type: '3INbLACK', count: 1 },
    { type: '3INbED', count: 0 },
    { type: 'WHITEHORSE', count: 0 },
    { type: 'LOWTON', count: 1 },
    { type: 'HIGHTON', count: 0 },
    { type: 'TON80' , count: 0 }
  ];
  itemList = {
    game01: { title: 'GAME01', display:'none', type: 'PPD' },
    cricket: { title: 'CRICKET', display: 'none', type: 'MPR' },
    countUp: { title: 'COUNT-UP', display: 'none', type: ''},
  };
  itemListKeys = [];
  awardDisp = 'block';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemListKeys = Object.keys(this.itemList);
    const gameType = navParams.data.gameType;
    this.itemList[gameType].display = 'block';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayGameData');
  }

}
