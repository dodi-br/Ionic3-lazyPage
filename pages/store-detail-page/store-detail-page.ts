import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController,
  Slides } from 'ionic-angular';

/**
 * Generated class for the StoreDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'StoreDetailPage'
})
@Component({
  selector: 'page-store-detail-page',
  templateUrl: 'store-detail-page.html',
})
export class StoreDetailPage {
  title: any;
  store: any;
  date = "yesterday";
  game = "gaofen";
  storeDetailSegment: any
  storeDetailSlides = [
    {
      id: 'detail'
    }, {
      id: 'rank'
    }, {
      id: 'player'
    }
  ]
  
  @ViewChild('storeDetailSlider') storeDetailSlider: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
    this.title = navParams.data.title;
    this.store = navParams.data.store;
    this.storeDetailSegment = 'detail'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreDetailPage');
  }
  
  navPush(target) {
    this.navCtrl.push(target);
  }
  btnPhone() {
      let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '复制',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '拨号',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  btnMore() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '收藏',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '分享',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  onStoreDetailSegmentChanged(segmentButton) {
    const selectedIndex = this.storeDetailSlides.findIndex((slide) => {
      return slide.id === segmentButton.value;
    });
    this.storeDetailSlider.slideTo(selectedIndex);
  }

  onStoreDetailSlideChanged(slider) {
    const currentIndex = slider.getActiveIndex();
    if (currentIndex > 2) { return; }
    this.storeDetailSegment = this.storeDetailSlides[currentIndex].id;
  }
}
