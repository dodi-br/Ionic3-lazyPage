import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Multilanguage } from './multilanguage';

@NgModule({
  declarations: [
    Multilanguage,
  ],
  imports: [
    IonicPageModule.forChild(Multilanguage),
  ],
  exports: [
    Multilanguage
  ]
})
export class MultilanguageModule {}
