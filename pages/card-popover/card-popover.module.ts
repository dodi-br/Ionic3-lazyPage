import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardPopover } from './card-popover';

@NgModule({
  declarations: [
    CardPopover,
  ],
  imports: [
    IonicPageModule.forChild(CardPopover),
  ],
  exports: [
    CardPopover
  ]
})
export class CardPopoverModule {}
