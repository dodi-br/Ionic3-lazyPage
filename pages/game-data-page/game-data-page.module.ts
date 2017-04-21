import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameDataPage } from './game-data-page';

@NgModule({
  declarations: [
    GameDataPage,
  ],
  imports: [
    IonicPageModule.forChild(GameDataPage),
  ],
  exports: [
    GameDataPage
  ]
})
export class GameDataPageModule {}
