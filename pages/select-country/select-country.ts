import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
    <ion-list>
      <ion-item>
      <ion-label style="color: black">更改语言</ion-label>
        <ion-select [(ngModel)]="Country" selectedText=" ">
        <ion-option *ngFor="let item of language" value="f" selected="true">{{ item.name }}</ion-option>
        </ion-select>
      </ion-item>
    </ion-list>
    <ion-list>
      <ion-item>
      <ion-label style="color: black">选择国家</ion-label>
        <ion-select [(ngModel)]="Country" selectedText=" ">
        <ion-option *ngFor="let item of country" value="f" selected="true">{{ item.name }}</ion-option>
        </ion-select>
      </ion-item>
    </ion-list>
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
  language = [{
      name: '简体中文',
    },{
      name: '繁体中文',
    },{
      name: '英语',
    },{
      name: '法语',
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController) {
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
