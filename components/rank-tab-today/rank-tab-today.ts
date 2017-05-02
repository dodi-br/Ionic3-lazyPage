import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

/**
 * Generated class for the MyTitle component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rank-tab-today',
  templateUrl: 'rank-tab-today.html'
})
export class RankTabToday {
  gameRankSegment = 'countUp';
  awardSegment = 'hatTrick';
  no1 = [
  {
      'game': '高分赛',
      'score': '1022',
      'store': 'Aloha',
      'level': 'AA20',
      'name': 'Sa Sa',
      img: 'assets/No1.jpeg'
    },
    {
      'game': '01游戏',
      'score': '26.72',
      'store': 'Lucky Darts',
      'level': 'A14',
      'name': '柒到貳零肆陸',
      img: 'assets/member1.jpeg'
    },
    {
      'game': '米老鼠',
      'score': '3.19',
      'store': '白马',
      'level': 'BBB3',
      'name': '0046',
      img: 'assets/member2.jpeg'
    }
  ];

  gameRankSegmentItems = [
    {
      value: 'countUp', 
      name: '高分赛',
      list: [
        {
          rank: 1,
          img: "assets/CN.png",
          score: 22,
          name: '剑圣'
        },
        {
          rank: 2,
          img: "assets/CN.png",
          score: 20,
          name: '林黛玉'
        },
        {
          rank: 3,
          img: "assets/CN.png",
          score: 18,
          name: '吕布'
        },
        {
          rank: 4,
          img: "assets/CN.png",
          score: 15,
          name: '咸鱼'
        }
      ]
    },
    {
      value: 'cricket', 
      name: '米老鼠',
      list: [
        {
          rank: 1,
          img: "assets/CN.png",
          score: 19,
          name: '飞鱼'
        },
        {
          rank: 2,
          img: "assets/CN.png",
          score: 15,
          name: '林黛玉'
        },
        {
          rank: 3,
          img: "assets/CN.png",
          score: 10,
          name: '木棉花'
        },
        {
          rank: 4,
          img: "assets/CN.png",
          score: 9,
          name: '冲哥'
        }
      ]
    },
    {
      value: 'game01', 
      name: '01游戏',
      list: [
        {
          rank: 1,
          img: "assets/CN.png",
          score: 22,
          name: '盖伦'
        },
        {
          rank: 2,
          img: "assets/CN.png",
          score: 20,
          name: '草丛'
        },
        {
          rank: 3,
          img: "assets/CN.png",
          score: 18,
          name: '貂蝉'
        },
        {
          rank: 4,
          img: "assets/CN.png",
          score: 15,
          name: '咸鱼'
        }
      ]
    }
  ];
  
  awardRankSegmentItems = [
    {
      value: 'hatTrick', 
      name: 'HAT TRICK',
      list: [
        {
          rank: 1,
          img: "assets/CN.png",
          score: 22,
          name: '剑圣'
        },
        {
          rank: 2,
          img: "assets/CN.png",
          score: 20,
          name: '林黛玉'
        },
        {
          rank: 3,
          img: "assets/CN.png",
          score: 18,
          name: '吕布'
        },
        {
          rank: 4,
          img: "assets/CN.png",
          score: 15,
          name: '咸鱼'
        }
      ]
    },
    {
      value: 'highTon', 
      name: 'HIGH TON',
      list: [
        {
          rank: 1,
          img: "assets/CN.png",
          score: 19,
          name: '飞鱼'
        },
        {
          rank: 2,
          img: "assets/CN.png",
          score: 15,
          name: '林黛玉'
        },
        {
          rank: 3,
          img: "assets/CN.png",
          score: 10,
          name: '木棉花'
        },
        {
          rank: 4,
          img: "assets/CN.png",
          score: 9,
          name: '冲哥'
        }
      ]
    },
    {
      value: 'whiteHorse', 
      name: 'WHITE HORSE',
      list: [
        {
          rank: 1,
          img: "assets/CN.png",
          score: 22,
          name: '盖伦'
        },
        {
          rank: 2,
          img: "assets/CN.png",
          score: 20,
          name: '草丛'
        },
        {
          rank: 3,
          img: "assets/CN.png",
          score: 18,
          name: '貂蝉'
        },
        {
          rank: 4,
          img: "assets/CN.png",
          score: 15,
          name: '咸鱼'
        }
      ]
    }
  ];
    
  btnPlayer() {
    const modal = this.modalCtrl.create('PlayerInfoPage');
    modal.present();
  }
  constructor(public modalCtrl: ModalController) {
    console.log('Hello MyTitle Component');
  }
}
