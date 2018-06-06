import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';
// import { ReqCapturePage } from '../req-capture/req-capture';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  startReqCapture() {
    this.navCtrl.push('ReqCapturePage');
  }
}
