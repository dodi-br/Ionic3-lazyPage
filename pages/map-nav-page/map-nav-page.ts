import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapNavPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'MapNavPage'
})
@Component({
  selector: 'page-map-nav-page',
  templateUrl: 'map-nav-page.html',
})
export class MapNavPage {
	public map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
//   loadMap() {
//     this.map = new AMap.Map('container', {
//       resizeEnable: true,
//       zoom: 8,
//       center: [116.39,39.9]
//     });
// 	}
  ionViewDidLoad() {
    // this.loadMap();
  }
}
