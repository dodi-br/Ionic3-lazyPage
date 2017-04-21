import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapNavPage } from './map-nav-page';

@NgModule({
  declarations: [
    MapNavPage,
  ],
  imports: [
    IonicPageModule.forChild(MapNavPage),
  ],
  exports: [
    MapNavPage
  ]
})
export class MapNavPageModule {}
