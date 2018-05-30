import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API_URL = 'http://localhost:1500/api/'

@Injectable()
export class LoginServiceProvider {
  user: any;
  constructor(public http: Http) {
    this.user = null;

  }
  userLogin(userData) {
    return new Promise(((resolve, reject) => {
      this.http.post(API_URL + 'auth/login', userData)
        .map(res => res.json())
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        },
          err => {
            reject(err);
          }
        )
    }))
  }
  loggedinUser(userData) {
    this.user = userData;
  }

  getLoggedinUser() {
    return new Promise(resolve => {
      resolve(this.user);
    });
  }

}
