import { Injectable } from '@angular/core';
//import { Http,RequestOptions, Request, RequestMethod,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the RetrieveAdsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API_URL = 'http://localhost:1500/api/';
@Injectable()
export class RetrieveAdsProvider {
  data: any;
  constructor(public http: HttpClient) {
    this.data = null;
    //console.log('Hello RetrieveAdsProvider Provider');
  }
  getAds(adData) {
    console.log(adData);
    // let header= new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: header });
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + 'ads/getads',adData)
        .subscribe(res => {

          resolve(res);
        },
          err => {
            reject(err);
          }
        )

    });
  }
}
