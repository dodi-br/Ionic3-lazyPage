import { Component } from '@angular/core';

/**
 * Generated class for the RankTabAward component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rank-tab-award',
  templateUrl: 'rank-tab-award.html'
})
export class RankTabAward {
  awardSelector = { time: "today", type: "hatTrick" };
  awardTypeItems = [
    { value: 'hatTrick', name: 'Hat Trick' },
    { value: 'whiteHorse', name: 'WHITE HORSE' },
    { value: 'bed', name: "3 IN BED" },
    { value: 'black', name: "3 IN BLACK" },
    { value: 'lowTon', name: "LOW TON" },
    { value: 'highTon', name: "HIGH TON" },
    { value: 'ton80', name: "TON 80" },
    { value: 'mark9', name: "9MARK" },
    { value: 'mark8', name: "8MARK" },
    { value: 'mark7', name: "7MARK" },
    { value: 'mark6', name: "6MARK" },
    { value: 'mark5', name: "5MARK" }
  ];
  awardRankList = [
    {
      rank: 1,
      img: "assets/CN.png",
      score: 22,
      player: '谢小新',
      mainStore: '干杯清羽'
    },
    {
      rank: 2,
      img: "assets/CN.png",
      score: 20,
      player: '劫后余生',
      mainStore: '任天堂'
    },
    {
      rank: 3,
      img: "assets/CN.png",
      score: 19,
      player: '非主流',
      mainStore: '干杯清羽'
    },
    {
      rank: 4,
      img: "assets/CN.png",
      score: 15,
      player: '安妮',
      mainStore: '熊熊'
    }
  ];
  
  consructor() {
    console.log('Hello RankTabAward Component');
  }

}
