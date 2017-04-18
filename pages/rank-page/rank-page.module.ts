import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RankPage } from './rank-page';

@NgModule({
  declarations: [
    RankPage,
  ],
  imports: [
    IonicPageModule.forChild(RankPage),
  ],
  exports: [
    RankPage
  ]
})
export class RankPageModule {}
