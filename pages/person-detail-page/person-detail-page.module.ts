import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonDetailPage } from './person-detail-page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PersonDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    PersonDetailPage
  ]
})
export class PersonDetailPageModule {}
