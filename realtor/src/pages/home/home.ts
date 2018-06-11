import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
// import { ReqCapturePage } from '../req-capture/req-capture';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public statusBar:StatusBar) {
    this.statusBar.styleLightContent();
  }
  startReqCapture() {
    this.navCtrl.push('ReqCapturePage');
  }
}

