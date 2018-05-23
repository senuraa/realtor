import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupServiceProvider } from '../../providers/signup-service/signup-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {
    first_name: '',
    last_name: '',
    phone_number: '',
    country_code:'94'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public signupService: SignupServiceProvider) {
  }
  signup() {
    this.signupService.userSignup(this.user).then((response)=>{
      
      //console.log(response);
    },(err)=>{
      console.log('error')
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
