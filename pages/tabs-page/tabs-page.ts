import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabs-page',
  templateUrl: 'tabs-page.html'
})
@IonicPage({
  name: 'TabsPage'
})
export class TabsPage {

  tab1Root: any = 'HomePage';
  tab2Root: any = 'StorePage';
  tab3Root: any = 'RankPage';
  tab4Root: any = 'MinePage';

  constructor(public navCtrl: NavController) {}

}
