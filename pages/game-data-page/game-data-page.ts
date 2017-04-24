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
  gameData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.gameSegment = "game01";
    this.gameData = [
      {
        id: "game01",
        total: 27.63,
        versus: 28.45,
        rating: 15.24,
        versusRating: 15.85
      }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameDataPage');
  }

}
