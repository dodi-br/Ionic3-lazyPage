import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameHistoryDetail } from './game-history-detail';

@NgModule({
  declarations: [
    GameHistoryDetail,
  ],
  imports: [
    IonicPageModule.forChild(GameHistoryDetail),
  ],
  exports: [
    GameHistoryDetail
  ]
})
export class GameHistoryDetailModule {}
