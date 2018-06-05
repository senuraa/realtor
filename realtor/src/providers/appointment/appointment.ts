import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppointmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API_URL = 'http://localhost:1500/api/'
@Injectable()
export class AppointmentProvider {
  data: any;
  appData: any;
  constructor(public http: HttpClient) {
    this.data = null;
    this.appData = null;
  }
  addAppointment(appData) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + 'app/addAppointment', appData)
        .subscribe(data => {
          this.data = data;
          resolve(this.data)
        },
          err => {
            reject(err);
          }
        )
    })
  }

  getAppointment(userData){
    return new Promise((resolve,reject)=>{
      this.http.post(API_URL+'app/getAppointment',userData)
        .subscribe(data=>{
          this.appData=data;
          resolve(this.appData)
        },
        err =>{
          reject(err);
        }
      )
    })
  }
}
