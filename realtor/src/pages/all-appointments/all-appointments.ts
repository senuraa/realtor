import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AppointmentProvider } from '../../providers/appointment/appointment';
import { CallNumber } from '@ionic-native/call-number';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public appService:AppointmentProvider, public alertCtrl:AlertController,public callNumber:CallNumber) {
    //this.ionViewDidEnter();
    this.appData = null;
  }
  cancel(app){
    console.log(app)
  }
  call(numArray) {
    var nums = numArray.split(',');
    console.log(nums)

    if (nums.length > 1) {
      let alert = this.alertCtrl.create();
      alert.setTitle('Select number');
      for (var i = 0; i < nums.length; i++) {
        alert.addInput({
          type: 'radio',
          label: nums[i],
          value: nums[i],
          checked: false
        })
      }
      alert.addButton('Cancel');
      alert.addButton({
        text: 'Ok',
        handler: (data: any) => {
          // this.callNumber
          this.callNumber.callNumber(data, true).then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
          console.log('Radio data:', data);

        }
      });
      alert.present();
    } else if (nums.length == 1 && nums[0] != "") {
      let alert = this.alertCtrl.create()
      alert.setTitle('Confirm Call')
      alert.setMessage('Are you sure you want to call ' + nums[0] + ' ?')
      alert.addButton({
        text: 'Ok',
        handler: (data: any) => {
          this.callNumber.callNumber(nums, true).then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
        }
      })
      alert.addButton('Cancel')
      alert.present();

    } else if (nums.length == 1 && nums[0] == "") {
      let alert = this.alertCtrl.create()
      alert.setTitle('Contact Number');
      alert.setMessage('Sorry! No number available');
      alert.addButton('Ok')
      alert.present();
    }
  }
  viewApp(app){
    this.navCtrl.push('ViewAppointmentPage',this.navParams)
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
