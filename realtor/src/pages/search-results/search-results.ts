import { Component } from '@angular/core';
import {NgSwitch,NgSwitchCase} from '@angular/common';
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
  confirmReq(){
    this.listDisable=false;
    this.stepType = "Lists";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultsPage');
  }

}
