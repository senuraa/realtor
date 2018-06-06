import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }
  logout():void {
    window.localStorage.removeItem('phone_number');
    window.localStorage.removeItem('password');
    this.app.getRootNav().setRoot('LoginPage');
    this.navCtrl.popToRoot();
  }

}
