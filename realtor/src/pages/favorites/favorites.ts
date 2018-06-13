import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetrieveAdsProvider } from '../../providers/retrieve-ads/retrieve-ads';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  appReqUserData: any = {
    phone_number: window.localStorage.getItem('phone_number')
  }
  favoriteAdds : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public retrieveAds : RetrieveAdsProvider) {
    this.retrieveAds.retrieveFavoriteAds(this.appReqUserData).then((response) => {
      this.favoriteAdds = response[0].favorite;
    }, err => {

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}
