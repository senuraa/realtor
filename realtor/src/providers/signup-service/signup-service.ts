//import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SignupServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API_URL = 'http://localhost:1500/api/'
@Injectable()
export class SignupServiceProvider {
  data: any;
  constructor(public http: Http) {
    this.data = null;
  }
  userSignup(userData) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + 'auth/register', userData)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        },
          err => {
            reject(err);
          }
        )

    });
  }

}
