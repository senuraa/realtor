import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginServiceProvider } from '../../providers/login-service/login-service'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user ={
    phone_number: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: LoginServiceProvider) {
  }
  login() {
    this.loginService.userLogin(this.user).then((response)=>{
      console.log('success')
    },
    (err)=>{
      console.log(err)
    }
  )
  }
  openSignup() {
    this.navCtrl.push(SignupPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
