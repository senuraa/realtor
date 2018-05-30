import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupServiceProvider } from '../../providers/signup-service/signup-service';
import { VerifyPage } from '../verify/verify';
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
    country_code: '94',
    token:'',
    password:''
    }
  constructor(public navCtrl: NavController, public navParams: NavParams, public signupService: SignupServiceProvider) {
    // this.form = fb.group({
    //   'first_name':['', Validators.required],
    //   'last_name':['', Validators.required],
    //   'phone_number':['', Validators.required],
    //   'password': ['', Validators.required],
    //   // 'password_conf': ['', Validators.required]
    // }, {validator: SignupPage.passwordsMatch});
  }
  signup() {
    //this.navCtrl.push(VerifyPage,this.user);
    this.signupService.userSignup(this.user).then((response) => {
      console.log('success');
      this.navCtrl.push(VerifyPage,this.user);
      //console.log(response);
    }, (err) => {
      console.log('err')
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  // static passwordsMatch(cg: FormGroup): {[err: string]: any} {
  //   let pwd1 = cg.get('password');
  //   let pwd2 = cg.get('password_conf');
  //   let rv: {[error: string]: any} = {};
  //   if ((pwd1.touched || pwd2.touched) && pwd1.value !== pwd2.value) {
  //     rv['passwordMismatch'] = true;
  //   }else{
  //     rv['passwordMismatch'] =false;
  //   }
  //   console.log(rv)
  //   return rv;

  // }

}
