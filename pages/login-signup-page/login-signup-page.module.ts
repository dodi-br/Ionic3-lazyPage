import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginSignupPage } from './login-signup-page';

@NgModule({
  declarations: [
    LoginSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginSignupPage),
  ],
  exports: [
    LoginSignupPage
  ]
})
export class LoginSignupPageModule {}
