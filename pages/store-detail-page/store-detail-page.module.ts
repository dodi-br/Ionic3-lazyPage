import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreDetailPage } from './store-detail-page';

@NgModule({
  declarations: [
    StoreDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreDetailPage),
  ],
  exports: [
    StoreDetailPage
  ]
})
export class StoreDetailPageModule {}
