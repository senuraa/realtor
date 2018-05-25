import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ReqCapturePage } from '../req-capture/req-capture';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  startReqCapture() {
    this.navCtrl.push(ReqCapturePage);
  }
}
