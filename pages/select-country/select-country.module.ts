import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectCountry } from './select-country';

@NgModule({
  declarations: [
    SelectCountry,
  ],
  imports: [
    IonicPageModule.forChild(SelectCountry),
  ],
  exports: [
    SelectCountry
  ]
})
export class SelectCountryModule {}
