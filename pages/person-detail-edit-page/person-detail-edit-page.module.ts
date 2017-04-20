import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonDetailEditPage } from './person-detail-edit-page';

@NgModule({
  declarations: [
    PersonDetailEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonDetailEditPage),
  ],
  exports: [
    PersonDetailEditPage
  ]
})
export class PersonDetailEditPageModule {}
