import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {
  user: any;
  constructor(public http: HttpClient) {
    this.user = null;
    
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
