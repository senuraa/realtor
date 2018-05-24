import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupServiceProvider } from '../../providers/signup-service/signup-service';

/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public signupService: SignupServiceProvider) {
  }
  user:any ={
    first_name: this.navParams.get('first_name'),
    last_name: this.navParams.get('last_name'),
    phone_number: this.navParams.get('phone_number'),
    country_code: '94',
    token:''
  }
verify(){
  this.signupService.userVerify(this.user).then((response)=>{
    console.log('success')
    console.log(response);
  },(err)=>{
    console.log(err);
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPage');
  }

}
