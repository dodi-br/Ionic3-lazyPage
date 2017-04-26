import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectCardPage } from './select-card-page';

@NgModule({
  declarations: [
    SelectCardPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectCardPage),
  ],
  exports: [
    SelectCardPage
  ]
})
export class SelectCardPageModule {}
