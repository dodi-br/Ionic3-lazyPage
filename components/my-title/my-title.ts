import { Component } from '@angular/core';

/**
 * Generated class for the MyTitle component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my-title',
  templateUrl: 'my-title.html'
})
export class MyTitle {
  constructor() {
    console.log('Hello MyTitle Component');
  }
  ionViewDidLoad() {
    console.log('Component View Load');
  }

}
