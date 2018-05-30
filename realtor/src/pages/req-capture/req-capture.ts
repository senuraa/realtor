import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchResultsPage} from '../search-results/search-results';

/**
 * Generated class for the ReqCapturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-req-capture',
  templateUrl: 'req-capture.html',
})
export class ReqCapturePage {
  request = {
    location : '',
    noOfRooms: 1,
    priceRange:{
      lower:'500',
      upper:'900'
    },
    category:'',
    areaRange:{
      lower:'500',
      upper:'900'
    },
    showLastSeven:false

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoSearchResults(){
    this.navCtrl.push(SearchResultsPage,this.request);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReqCapturePage');
  }

}
