import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  req:any ={
    type : this.navParams.get('category'),
    location : this.navParams.get('location'),
    minArea : this.navParams.get('areaRange').lower,
    maxArea : this.navParams.get('areaRange').upper,
    noOfRooms:this.navParams.get('noOfRooms'),
    minPrice:this.navParams.get('priceRange').lower,
    maxPrice:this.navParams.get('priceRange').upper
  }
  confirmReq(){
    this.listDisable=false;
    
    this.stepType = "Lists";
  }
  addAppointment(){
    this.appointmentDisable=false;
    this.stepType = "Appointment";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }

}
