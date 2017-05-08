import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayGameData } from './day-game-data';

@NgModule({
  declarations: [
    DayGameData,
  ],
  imports: [
    IonicPageModule.forChild(DayGameData),
  ],
  exports: [
    DayGameData
  ]
})
export class DayGameDataModule {}
