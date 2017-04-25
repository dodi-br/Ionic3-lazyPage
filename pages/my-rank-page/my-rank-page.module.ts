import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyRankPage } from './my-rank-page';

@NgModule({
  declarations: [
    MyRankPage,
  ],
  imports: [
    IonicPageModule.forChild(MyRankPage),
  ],
  exports: [
    MyRankPage
  ]
})
export class MyRankPageModule {}
