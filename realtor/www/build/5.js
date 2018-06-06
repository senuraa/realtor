webpackJsonp([5],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsPageModule", function() { return SearchResultsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_results__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import {NgSwitch,NgSwitchCase} from  '@angular/common';
var SearchResultsPageModule = /** @class */ (function () {
    function SearchResultsPageModule() {
    }
    SearchResultsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_results__["a" /* SearchResultsPage */],
            ],
            imports: [
                // NgSwitch, NgSwitchCase,
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_results__["a" /* SearchResultsPage */]),
            ],
        })
    ], SearchResultsPageModule);
    return SearchResultsPageModule;
}());

//# sourceMappingURL=search-results.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_retrieve_ads_retrieve_ads__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_time_modal_date_time_modal__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appointment_appointment__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchResultsPage = /** @class */ (function () {
    function SearchResultsPage(navCtrl, navParams, retrieveAds, modalCtrl, appService, alertCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.retrieveAds = retrieveAds;
        this.modalCtrl = modalCtrl;
        this.appService = appService;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.stepType = "Requirement";
        this.listDisable = true;
        this.appointmentDisable = true;
        this.req = {
            type: this.navParams.get('type'),
            category: this.navParams.get('category'),
            location: this.navParams.get('location'),
            minArea: this.navParams.get('areaRange').lower,
            maxArea: this.navParams.get('areaRange').upper,
            noOfRooms: this.navParams.get('noOfRooms'),
            minPrice: this.navParams.get('priceRange').lower,
            maxPrice: this.navParams.get('priceRange').upper,
            _id: ''
        };
        this.appReqUserData = {
            phone_number: window.localStorage.getItem('phone_number'),
            status: 2
        };
        this.appointmentList = [];
    }
    SearchResultsPage.prototype.editReq = function () {
        this.navCtrl.pop();
    };
    SearchResultsPage.prototype.confirmReq = function () {
        // this.listDisable = false;
        //   this.stepType = "Lists";
        var _this = this;
        this.retrieveAds.getAds(this.req).then(function (response) {
            console.log(response);
            _this.listDisable = false;
            _this.stepType = "Lists";
            _this.adList = response;
        }, function (err) {
            console.log(err);
        });
    };
    SearchResultsPage.prototype.call = function (numArray) {
        var _this = this;
        var nums = numArray.split(',');
        console.log(nums);
        if (nums.length > 1) {
            var alert_1 = this.alertCtrl.create();
            alert_1.setTitle('Select number');
            for (var i = 0; i < nums.length; i++) {
                alert_1.addInput({
                    type: 'radio',
                    label: nums[i],
                    value: nums[i],
                    checked: false
                });
            }
            alert_1.addButton('Cancel');
            alert_1.addButton({
                text: 'Ok',
                handler: function (data) {
                    // this.callNumber
                    _this.callNumber.callNumber(data, true).then(function (res) { return console.log('Launched dialer!', res); })
                        .catch(function (err) { return console.log('Error launching dialer', err); });
                    console.log('Radio data:', data);
                }
            });
            alert_1.present();
        }
        else if (nums.length == 1 && nums[0] != "") {
            var alert_2 = this.alertCtrl.create();
            alert_2.setTitle('Confirm Call');
            alert_2.setMessage('Are you sure you want to call ' + nums[0] + ' ?');
            alert_2.addButton({
                text: 'Ok',
                handler: function (data) {
                    _this.callNumber.callNumber(nums, true).then(function (res) { return console.log('Launched dialer!', res); })
                        .catch(function (err) { return console.log('Error launching dialer', err); });
                }
            });
            alert_2.addButton('Cancel');
            alert_2.present();
        }
        else if (nums.length == 1 && nums[0] == "") {
            var alert_3 = this.alertCtrl.create();
            alert_3.setTitle('Contact Number');
            alert_3.setMessage('Sorry! No number available');
            alert_3.addButton('Ok');
            alert_3.present();
        }
    };
    SearchResultsPage.prototype.openAddAppointment = function (ad) {
        var _this = this;
        var appModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__date_time_modal_date_time_modal__["a" /* DateTimeModalPage */], { "_id": ad._id });
        appModal.present();
        appModal.onDidDismiss(function (data) {
            if (data.message != 'dismiss') {
                _this.appService.getAppointment(_this.appReqUserData).then(function (response) {
                    _this.appointmentList = response;
                    _this.appointmentDisable = false;
                    _this.stepType = "Appointment";
                    console.log(_this.appointmentList);
                }, function (err) {
                    console.log('Error getting appointments');
                });
            }
            console.log(data);
        });
    };
    SearchResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchResultsPage');
    };
    SearchResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-results',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/search-results/search-results.html"*/'<!--\n  Generated template for the SearchResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search Results</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="stepType">\n      <ion-segment-button value="Requirement">\n        Requirement\n      </ion-segment-button>\n      <ion-segment-button [disabled]="listDisable" value="Lists">\n        Lists\n      </ion-segment-button>\n      <ion-segment-button [disabled]="appointmentDisable" value="Appointment">\n        Appointment\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="outer-content cards-bg">\n  <div [ngSwitch]="stepType">\n    <ion-list *ngSwitchCase="\'Requirement\'">\n      <button ion-item (click)="editReq()">\n        <ion-label>\n          Location\n        </ion-label>\n        <ion-note item-end>\n          {{req.location}}\n        </ion-note>\n      </button>\n      <button ion-item (click)="editReq()">\n        <ion-label>\n          Type\n        </ion-label>\n        <ion-note item-end>\n          {{req.type}}\n        </ion-note>\n      </button>\n      <button ion-item (click)="editReq()">\n        <ion-label>\n          Category\n        </ion-label>\n        <ion-note item-end>\n          {{req.category}}\n        </ion-note>\n      </button>\n      <button ion-item (click)="editReq()">\n        <ion-label>\n          Minimum Area\n        </ion-label>\n        <ion-note item-end>\n          {{req.minArea}}\n        </ion-note>\n      </button>\n      <button ion-item  (click)="editReq()">\n        <ion-label>\n          Maximum Area\n        </ion-label>\n        <ion-note item-end>\n          {{req.maxArea}}\n        </ion-note>\n      </button>\n      <button ion-item *ngIf="req.category==\'House\'" (click)="editReq()">\n        <ion-label>\n          Number of Bed Rooms\n        </ion-label>\n        <ion-note item-end>\n          {{req.noOfRooms}}\n        </ion-note>\n      </button>\n      <button ion-item (click)="editReq()">\n        <ion-label>\n          Minimum Price\n        </ion-label>\n        <ion-note item-end>\n          {{req.minPrice}}\n        </ion-note>\n      </button>\n      <button ion-item  (click)="editReq()">\n        <ion-label>\n          Maximum Price\n        </ion-label>\n        <ion-note item-end>\n          {{req.maxPrice}}\n        </ion-note>\n      </button>\n\n      <div class="button--wrapper">\n        <button ion-button color="primary" (click)="confirmReq()">Continue</button>\n      </div>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'Lists\'">\n      <ion-card *ngFor="let ad of adList">\n        <img src="assets/imgs/house1.jpg">\n        <ion-card-header text-center>\n\n          <ion-title>{{ad.category}} for sale in {{ad.location}}</ion-title>\n          <ion-note>{{ad.uploaded_at | date:\'fullDate\'}}</ion-note>\n        </ion-card-header>\n\n        <ion-item-group>\n          <ion-item>\n            Price\n            <div item-end>LKR {{ad.price}}</div>\n          </ion-item>\n          <div *ngIf="ad.category==\'House\'">\n            <ion-item>\n              Beds\n              <div item-end>{{ad.bedrooms}}</div>\n            </ion-item>\n            <ion-item>\n              Baths\n              <div item-end>\n                {{ad.bathrooms}}\n              </div>\n            </ion-item>\n            <ion-item>\n              House size\n              <div item-end>\n                -\n              </div>\n            </ion-item>\n          </div>\n\n          <ion-item>\n            Land Size\n            <div item-end>\n              {{ad.land_size}}\n            </div>\n          </ion-item>\n        </ion-item-group>\n\n\n\n        <ion-row>\n          <ion-col text-center>\n            <button ion-button clear icon-only text-center (click)="call(ad.contact)">\n              <ion-icon name="call"></ion-icon>\n              <!-- <div>12 Likes</div> -->\n            </button>\n          </ion-col>\n          <ion-col text-center>\n            <button ion-button clear icon-only text-center>\n              <ion-icon name="mail"></ion-icon>\n              <!-- <div>4 Comments</div> -->\n            </button>\n          </ion-col>\n          <ion-col text-center>\n            <button ion-button clear icon-only text-center (click)="openAddAppointment(ad)">\n              <ion-icon name="calendar"></ion-icon>\n              <!-- <div>4 Comments</div> -->\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </ion-card>\n\n    </ion-list>\n    <ion-list *ngSwitchCase="\'Appointment\'">\n      <div *ngIf="appointmentList">\n          <ion-item *ngFor="let app of appointmentList">\n              <ion-thumbnail item-start>\n                <img src="assets/imgs/house1.jpg">\n              </ion-thumbnail>\n              <h2>{{app.ad_id.category}} for sale in {{app.ad_id.location}}</h2>\n              <h3>{{app.app_date | date:\'fullDate\'}}</h3>\n              <p>{{app.app_date | date:\'shortTime\'}} @ the premises</p>\n              <div item-end class="appListButtonWrap">\n                <button ion-button clear icon-only text-center (click)="call(app.ad_id.contact)">\n                  <ion-icon name="call"></ion-icon>\n                </button>\n                <button ion-button clear icon-only text-center color="red">\n                  <ion-icon name="close-circle"></ion-icon>\n                </button>\n              </div>\n            </ion-item>\n      </div>\n      \n      <!-- <ion-item>\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/house2.jpg">\n        </ion-thumbnail>\n        <h2>House for sale in Homagama</h2>\n        <h3>26th Jun 2018</h3>\n        <p>10.30 AM @ the premises</p>\n        <div item-end class="appListButtonWrap">\n          <button ion-button clear icon-only text-center large>\n            <ion-icon name="call"></ion-icon>\n          </button>\n          <button ion-button clear icon-only text-center color="red" large>\n            <ion-icon name="close-circle"></ion-icon>\n          </button>\n        </div>\n\n      </ion-item> -->\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/search-results/search-results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_retrieve_ads_retrieve_ads__["a" /* RetrieveAdsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_appointment_appointment__["a" /* AppointmentProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */]])
    ], SearchResultsPage);
    return SearchResultsPage;
}());

//# sourceMappingURL=search-results.js.map

/***/ })

});
//# sourceMappingURL=5.js.map