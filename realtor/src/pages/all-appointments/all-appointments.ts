import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentProvider } from '../../providers/appointment/appointment';

/**
 * Generated class for the AllAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-appointments',
  templateUrl: 'all-appointments.html',
})
export class AllAppointmentsPage {
  appReqUserData: any = {
    phone_number: window.localStorage.getItem('phone_number'),
    status: 4
  }
  appData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appService:AppointmentProvider) {
    //this.ionViewDidEnter();
    this.appData = null;
  }

  ionViewDidEnter() {
    this.appService.getAppointment(this.appReqUserData).then((response)=>{
      this.appData=response;
      console.log(this.appData)
    },
    (err)=>{
      console.log(err)
    }
  )
  }

}
