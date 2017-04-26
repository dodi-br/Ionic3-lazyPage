import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewStorePage } from './new-store-page';

@NgModule({
  declarations: [
    NewStorePage,
  ],
  imports: [
    IonicPageModule.forChild(NewStorePage),
  ],
  exports: [
    NewStorePage
  ]
})
export class NewStorePageModule {}
