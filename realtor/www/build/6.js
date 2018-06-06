webpackJsonp([6],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAppointmentsPageModule", function() { return AllAppointmentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_appointments__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllAppointmentsPageModule = /** @class */ (function () {
    function AllAppointmentsPageModule() {
    }
    AllAppointmentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_appointments__["a" /* AllAppointmentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_appointments__["a" /* AllAppointmentsPage */]),
            ],
        })
    ], AllAppointmentsPageModule);
    return AllAppointmentsPageModule;
}());

//# sourceMappingURL=all-appointments.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllAppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appointment_appointment__ = __webpack_require__(104);
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
 * Generated class for the AllAppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllAppointmentsPage = /** @class */ (function () {
    function AllAppointmentsPage(navCtrl, navParams, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.appReqUserData = {
            phone_number: window.localStorage.getItem('phone_number'),
            status: 4
        };
        //this.ionViewDidEnter();
        this.appData = null;
    }
    AllAppointmentsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.appService.getAppointment(this.appReqUserData).then(function (response) {
            _this.appData = response;
            console.log(_this.appData);
        }, function (err) {
            console.log(err);
        });
    };
    AllAppointmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-appointments',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/all-appointments/all-appointments.html"*/'<!--\n  Generated template for the AllAppointmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Appointments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-item *ngFor="let app of appData">\n        <ion-thumbnail item-start>\n          <img src="../../assets/imgs/house1.jpg">\n        </ion-thumbnail>\n        <h2>{{app.ad_id.category}} for sale in {{app.ad_id.location}}</h2>\n        <h3>{{app.app_date | date:\'fullDate\'}}</h3>\n        <p>{{app.app_date | date:\'shortTime\'}} @ the premises</p>\n        <div item-end class="appListButtonWrap">\n          <button ion-button clear icon-only text-center>\n            <ion-icon name="call"></ion-icon>\n          </button>\n          <button ion-button clear icon-only text-center color="red">\n            <ion-icon name="close-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/all-appointments/all-appointments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_appointment_appointment__["a" /* AppointmentProvider */]])
    ], AllAppointmentsPage);
    return AllAppointmentsPage;
}());

//# sourceMappingURL=all-appointments.js.map

/***/ })

});
//# sourceMappingURL=6.js.map