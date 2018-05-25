import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    noOfRooms: '',
    priceRange:{
      lower:'500',
      upper:'900'
    },
    category:'',
    areaRange:''

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReqCapturePage');
  }

}
