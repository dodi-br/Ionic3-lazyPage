import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Multilanguage } from './multilanguage';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    Multilanguage,
  ],
  imports: [
    IonicPageModule.forChild(Multilanguage),
    TranslateModule.forChild()
  ],
  exports: [
    Multilanguage
  ]
})
export class MultilanguageModule {}
