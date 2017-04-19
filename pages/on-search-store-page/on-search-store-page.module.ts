import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnSearchStorePage } from './on-search-store-page';

@NgModule({
  declarations: [
    OnSearchStorePage,
  ],
  imports: [
    IonicPageModule.forChild(OnSearchStorePage),
  ],
  exports: [
    OnSearchStorePage
  ]
})
export class OnSearchStorePageModule {}
