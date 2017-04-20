import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardInformationPage } from './card-information-page';

@NgModule({
  declarations: [
    CardInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(CardInformationPage),
  ],
  exports: [
    CardInformationPage
  ]
})
export class CardInformationPageModule {}
