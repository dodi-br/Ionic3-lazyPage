import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerInfoPage } from './player-info-page';

@NgModule({
  declarations: [
    PlayerInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerInfoPage),
  ],
  exports: [
    PlayerInfoPage
  ]
})
export class PlayerInfoPageModule {}
