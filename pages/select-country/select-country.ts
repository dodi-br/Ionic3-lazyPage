import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

/**
 * Generated class for the SelectCountry page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'SelectCountry'
})
@Component({
  selector: 'page-select-country',
  // templateUrl: 'select-country.html',
  template: `
      <button ion-item (click)="this.viewCtrl.dismiss();">
      中国 
      </button> 
      <button ion-item (click)="this.viewCtrl.dismiss();">
      美国 
      </button>
      <button ion-item (click)="this.viewCtrl.dismiss();">
      澳大利亚 
      </button>
      <button ion-item (click)="this.viewCtrl.dismiss();">
      加拿大
      </button>
      <button ion-item (click)="this.viewCtrl.dismiss();">
      日本
      </button>
      <button ion-item (click)="this.viewCtrl.dismiss();">
      韩国
      </button>
  `
})
export class SelectCountry {
  country = [{
      name: '中国',
    },{
      name: '美国',
    },{
      name: '澳大利亚',
    },{
      name: '香港',
    },{
      name: '德国',
    },{
      name: '加拿大',
    },{
      name: '日本',
    },{
      name: '韩国',
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public viewCtrl: ViewController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCountry');
  }
  // showRadio() {
  //   let alert = this.alertCtrl.create();
  //   // alert.setTitle('Lightsaber color');

  //   // alert.addInput({
  //   //   type: 'radio',
  //   //   label: 'Blue',
  //   //   value: 'blue',
  //   //   checked: false
  //   // });
  //   // alert.addInput({
  //   //   type: 'radio',
  //   //   label: 'Red',
  //   //   value: 'red',
  //   //   checked: true
  //   // })

  //   alert.addButton('gg');
  //   alert.addButton({
  //     text: 'OK',
  //     handler: data => {
  //       // this.testRadioOpen = false;
  //       // this.testRadioResult = data;
  //     }
  //   });
  //   alert.present();
  // }

}
