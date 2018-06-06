webpackJsonp([4],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { CountryPickerModule } from 'ngx-country-picker';
// @IonicPage()
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ReqCapturePage } from '../req-capture/req-capture';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.startReqCapture = function () {
        this.navCtrl.push('ReqCapturePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/home/home.html"*/'<ion-content padding>\n  <div id="top-banner">\n    <div class="banner-content">\n      <h1>DISCOVER</h1>\n      <span class="tag-line">Let\'s discover your dream home</span>\n      <button ion-button id="start-button" color="red" (click)="startReqCapture()">Start</button>\n    </div>\n\n  </div>\n\n  <div class="content-wrap">\n    <ion-title>\n      Top Picks\n    </ion-title>\n    <ion-slides loop=\'true\' pager=\'true\' paginationType=\'bullets\'>\n      <ion-slide>\n        <ion-card>\n\n          <img src="assets/imgs/house1.jpg" />\n\n          <ion-card-content>\n            <ion-card-title>\n              Nine Inch Nails Live\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n\n          <ion-row no-padding>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'star\'></ion-icon>\n                Favorite\n              </button>\n            </ion-col>\n            <!-- <ion-col text-center>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                Listen\n              </button>\n            </ion-col> -->\n            <ion-col text-right>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Share\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n\n          <img src="assets/imgs/house2.jpg" />\n\n          <ion-card-content>\n            <ion-card-title>\n              Nine Inch Nails Live\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n\n          <ion-row no-padding>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'star\'></ion-icon>\n                Favorite\n              </button>\n            </ion-col>\n            <!-- <ion-col text-center>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                Listen\n              </button>\n            </ion-col> -->\n            <ion-col text-right>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Share\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map