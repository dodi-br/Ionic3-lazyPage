import { Component } from '@angular/core';

import { HomePage } from '../home-page/home-page';
import { StorePage } from '../store-page/store-page';
import { RankPage } from '../rank-page/rank-page';
import { MinePage } from '../mine-page/mine-page';

@Component({
  selector: 'page-tabs-page',
  templateUrl: 'tabs-page.html'
})

export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = StorePage;
  tab3Root: any = RankPage;
  tab4Root: any = MinePage;

  constructor() {
    console.log("Enter TabsPage");
  }

}
