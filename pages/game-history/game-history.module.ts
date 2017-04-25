import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameHistory } from './game-history';

@NgModule({
  declarations: [
    GameHistory,
  ],
  imports: [
    IonicPageModule.forChild(GameHistory),
  ],
  exports: [
    GameHistory
  ]
})
export class GameHistoryModule {}
