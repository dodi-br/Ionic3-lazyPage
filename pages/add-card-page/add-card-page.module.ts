import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCardPage } from './add-card-page';

@NgModule({
  declarations: [
    AddCardPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCardPage),
  ],
  exports: [
    AddCardPage
  ]
})
export class AddCardPageModule {}
