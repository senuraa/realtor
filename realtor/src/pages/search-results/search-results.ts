import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RetrieveAdsProvider } from '../../providers/retrieve-ads/retrieve-ads';
import { DateTimeModalPage } from '../date-time-modal/date-time-modal';
import { AppointmentProvider } from '../../providers/appointment/appointment';
/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  stepType: string = "Requirement";
  listDisable: boolean = true;
  appointmentDisable: boolean = true;
  adList: any;
  appointmentList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public retrieveAds: RetrieveAdsProvider, public modalCtrl: ModalController, public appService: AppointmentProvider) {
    this.appointmentList=[];
  }
  req: any = {
    type: this.navParams.get('type'),
    category: this.navParams.get('category'),
    location: this.navParams.get('location'),
    minArea: this.navParams.get('areaRange').lower,
    maxArea: this.navParams.get('areaRange').upper,
    noOfRooms: this.navParams.get('noOfRooms'),
    minPrice: this.navParams.get('priceRange').lower,
    maxPrice: this.navParams.get('priceRange').upper,
    _id: ''
  }
  appReqUserData: any = {
    phone_number: window.localStorage.getItem('phone_number'),
    status: 2
  }

  confirmReq() {
    // this.listDisable = false;
    //   this.stepType = "Lists";

    this.retrieveAds.getAds(this.req).then((response) => {
      console.log(response);
      this.listDisable = false;
      this.stepType = "Lists";
      this.adList = response;
    }, (err) => {
      console.log(err)
    })

  }
  // addAppointment() {
  //   this.appointmentDisable = false;
  //   this.stepType = "Appointment";
  // }
  openAddAppointment(ad) {
    let appModal = this.modalCtrl.create(DateTimeModalPage, { "_id": ad._id });
    appModal.present();
    appModal.onDidDismiss(data => {
      if (data.message != 'dismiss') {
        this.appService.getAppointment(this.appReqUserData).then((response) => {
          this.appointmentList = response;
          this.appointmentDisable = false;
          this.stepType = "Appointment";
          console.log(this.appointmentList)
        },
          (err) => {
            console.log('Error getting appointments')
          }
        )

      }
      console.log(data)
    })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }

}
