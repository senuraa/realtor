import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AppointmentProvider } from '../../providers/appointment/appointment'
/**
 * Generated class for the DateTimeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-date-time-modal',
  templateUrl: 'date-time-modal.html',
})
export class DateTimeModalPage {
  appDet:any;
  // ad_id: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public addApp: AppointmentProvider) {
    //this.ad_id = navParams.get("_id");
    this.appDet = {
      ad_id:navParams.get("_id"),
      phone_number:window.localStorage.getItem('phone_number'),
      datetime:'',
      comments:''
    }
  }
  confirmApp() {
    this.addApp.addAppointment(this.appDet).then((response)=>{
      this.viewCtrl.dismiss(response)
    },(err)=>{
      console.log(err)
    })
  }
  dismiss() {
    this.viewCtrl.dismiss({message:'dismiss'});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DateTimeModalPage');
  }

}
