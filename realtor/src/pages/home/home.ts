import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';
import { RetrieveAdsProvider } from '../../providers/retrieve-ads/retrieve-ads';
// import { ReqCapturePage } from '../req-capture/req-capture';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  topAds : any;
  constructor(public navCtrl: NavController, private retrieveAds : RetrieveAdsProvider) {
    this.retrieveAds.retrieveTopAds().then(((response) => {
      this.topAds = response;
    }), err => {
      console.log("error : ", err )
    })
  }
  startReqCapture() {
    this.navCtrl.push('ReqCapturePage');
  }
}
