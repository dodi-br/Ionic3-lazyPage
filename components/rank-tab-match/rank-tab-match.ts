import { Component } from '@angular/core';

/**
 * Generated class for the RankTabMatch component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rank-tab-match',
  templateUrl: 'rank-tab-match.html'
})
export class RankTabMatch {
  gameSelector = { time: "today", type: "game01" };
  matchRankList = [
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
  
  constructor() {
    console.log('Hello RankTabMatch Component');
  }

}
