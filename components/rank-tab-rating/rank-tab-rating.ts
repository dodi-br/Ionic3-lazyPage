import { Component } from '@angular/core';

/**
 * Generated class for the RankTabRating component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rank-tab-rating',
  templateUrl: 'rank-tab-rating.html'
})
export class RankTabRating {
  ratingSelector = "today";
  ratingRankList = [
    {
      rank: 1,
      img: 'assets/CN.png',
      rating: 22,
      player: '谢小新',
      mainStore: '干杯清羽哈哈哈'
    },
    {
      rank: 2,
      img: 'assets/CN.png',
      rating: 20,
      player: '王小二',
      mainStore: '田堂'
    },
    {
      rank: 1,
      img: 'assets/CN.png',
      rating: 19,
      player: '大棚',
      mainStore: '不及汪伦送我情'
    },
    {
      rank: 1,
      img: 'assets/CN.png',
      rating: 15,
      player: 'Yearh',
      mainStore: '断肠人在天涯'
    },
  ]
  
  
  constructor() {
    console.log('Hello RankTabRating Component');
  }

}
