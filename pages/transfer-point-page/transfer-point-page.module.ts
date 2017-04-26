import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferPointPage } from './transfer-point-page';

@NgModule({
  declarations: [
    TransferPointPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferPointPage),
  ],
  exports: [
    TransferPointPage
  ]
})
export class TransferPointPageModule {}
