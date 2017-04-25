import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdCardPage } from './id-card-page';

@NgModule({
  declarations: [
    IdCardPage,
  ],
  imports: [
    IonicPageModule.forChild(IdCardPage),
  ],
  exports: [
    IdCardPage
  ]
})
export class IdCardPageModule {}
