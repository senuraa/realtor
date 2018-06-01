webpackJsonp([8],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_signup_service_signup_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verify_verify__ = __webpack_require__(107);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, signupService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signupService = signupService;
        this.user = {
            first_name: '',
            last_name: '',
            phone_number: '',
            country_code: '94',
            token: '',
            password: ''
        };
        // this.form = fb.group({
        //   'first_name':['', Validators.required],
        //   'last_name':['', Validators.required],
        //   'phone_number':['', Validators.required],
        //   'password': ['', Validators.required],
        //   // 'password_conf': ['', Validators.required]
        // }, {validator: SignupPage.passwordsMatch});
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        //this.navCtrl.push(VerifyPage,this.user);
        this.signupService.userSignup(this.user).then(function (response) {
            console.log('success');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__verify_verify__["a" /* VerifyPage */], _this.user);
            //console.log(response);
        }, function (err) {
            console.log('err');
        });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user.first_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user.last_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Mobile Number</ion-label>\n      <ion-input type="tel" [(ngModel)]="user.phone_number"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n    <div padding>\n      <button ion-button color="red" block (click)="signup()">Sign up</button>\n    </div>\n    \n</ion-content>'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_signup_service_signup_service__["a" /* SignupServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>favorites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(81);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loginService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginService = loginService;
        this.user = {
            phone_number: '',
            password: ''
        };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginService.userLogin(this.user).then(function (response) {
            console.log('success');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */], _this.user);
        }, function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.openSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <ion-title>Sign in</ion-title>\n  </ion-navbar> -->\n\n</ion-header>\n\n\n<ion-content padding scroll="false">\n  <div class="content-wrapper">\n    <div class="logo">\n      <span>realtor</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Phone number</ion-label>\n      <ion-input type="number" [(ngModel)]="user.phone_number"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n    <div padding>\n      <button ion-button color="red" block (click)="login()">Sign In</button>\n    </div>\n\n    <div padding id="nUser">\n      <span>New user?</span>\n    </div>\n    <div padding>\n      <button ion-button color="light" block (click)="openSignup()">Sign Up</button>\n    </div>\n\n    <div padding id=\'forgotDetails\'>\n      <span>Forgot your login details?</span>\n      <a href="#">Get help signing in</a>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_signup_service_signup_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(81);
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
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyPage = /** @class */ (function () {
    function VerifyPage(navCtrl, navParams, signupService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signupService = signupService;
        this.user = {
            first_name: this.navParams.get('first_name'),
            last_name: this.navParams.get('last_name'),
            phone_number: this.navParams.get('phone_number'),
            country_code: '94',
            token: '',
            password: this.navParams.get('password')
        };
    }
    VerifyPage.prototype.verify = function () {
        var _this = this;
        //this.navCtrl.push(TabsPage,this.user)
        this.signupService.userVerify(this.user).then(function (response) {
            console.log('success');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], _this.user);
        }, function (err) {
            console.log(err);
        });
    };
    VerifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyPage');
    };
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/verify/verify.html"*/'<!--\n  Generated template for the VerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>verify</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Verification code</ion-label>\n    <ion-input type="number" [(ngModel)]="user.token"></ion-input>\n  </ion-item>\n  <div padding>\n    <button ion-button color="primary" block (click)="verify()">Sign up</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/verify/verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_signup_service_signup_service__["a" /* SignupServiceProvider */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProfilePage');
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/my-profile/my-profile.html"*/'<!--\n  Generated template for the MyProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>myProfile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/my-profile/my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReqCapturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_results_search_results__ = __webpack_require__(111);
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
 * Generated class for the ReqCapturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReqCapturePage = /** @class */ (function () {
    function ReqCapturePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.request = {
            location: '',
            noOfRooms: 1,
            priceRange: {
                lower: '500',
                upper: '900'
            },
            category: '',
            areaRange: {
                lower: '500',
                upper: '900'
            },
            showLastSeven: false
        };
    }
    ReqCapturePage.prototype.gotoSearchResults = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_results_search_results__["a" /* SearchResultsPage */], this.request);
    };
    ReqCapturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReqCapturePage');
    };
    ReqCapturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-req-capture',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/req-capture/req-capture.html"*/'<!--\n  Generated template for the ReqCapturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Request</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n\n\n  <ion-list>\n    <ion-list-header>\n      Request Details\n    </ion-list-header>\n    <ion-item>\n      <ion-label stacked>Location</ion-label>\n      <ion-input type="text" [(ngModel)]="request.location"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Rooms</ion-label>\n      <ion-badge item-end color="danger">{{request.noOfRooms}}</ion-badge>\n      <ion-range min="1" max="9" step="1" snaps="true" [(ngModel)]="request.noOfRooms" color="danger">\n        <ion-icon range-left small color="danger" name="remove-circle"></ion-icon>\n        <ion-icon range-right color="danger" name="add-circle"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Price range</ion-label>\n      <!-- <ion-badge item-start color="danger">{{request.priceRange.lower}}</ion-badge>\n        <ion-badge item-end color="secondary">{{request.priceRange.upper}}</ion-badge> -->\n      <ion-badge item-start color="dark">{{request.priceRange.lower}}</ion-badge>\n      <ion-badge item-end color="dark">{{request.priceRange.upper}}</ion-badge>\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="request.priceRange" color="dark" min="100" max="1000" step="10">\n        <!-- <ion-icon range-left small name="logo-usd">{{request.priceRange.lower}}</ion-icon>\n        <ion-icon range-right name="logo-usd" color="secondary">{{request.priceRange.upper}}</ion-icon> -->\n      </ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Category</ion-label>\n      <ion-select [(ngModel)]="request.category" interface="popover">\n        <ion-option value="Commercial">Commercial</ion-option>\n        <ion-option value="Land">Land</ion-option>\n\n        <ion-option value="Apartment">Apartment</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Area (sqft)</ion-label>\n      <ion-badge item-start color="dark">{{request.areaRange.lower}}</ion-badge>\n      <ion-badge item-end color="dark">{{request.areaRange.upper}}</ion-badge>\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="request.areaRange" color="dark" min="100" max="1000" step="10">\n        <!-- <ion-icon range-left small name="logo-usd">{{request.priceRange.lower}}</ion-icon>\n          <ion-icon range-right name="logo-usd" color="secondary">{{request.priceRange.upper}}</ion-icon> -->\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label>Only show posts from last 7 days</ion-label>\n      <ion-toggle [(ngModel)]="request.showLastSeven"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n  <div class="button--wrapper">\n    <button ion-button color="primary" (click)="gotoSearchResults()">Continue</button>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/req-capture/req-capture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ReqCapturePage);
    return ReqCapturePage;
}());

//# sourceMappingURL=req-capture.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_retrieve_ads_retrieve_ads__ = __webpack_require__(166);
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
    function SearchResultsPage(navCtrl, navParams, retrieveAds) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.retrieveAds = retrieveAds;
        this.stepType = "Requirement";
        this.listDisable = true;
        this.appointmentDisable = true;
        this.req = {
            type: this.navParams.get('category'),
            location: this.navParams.get('location'),
            minArea: this.navParams.get('areaRange').lower,
            maxArea: this.navParams.get('areaRange').upper,
            noOfRooms: this.navParams.get('noOfRooms'),
            minPrice: this.navParams.get('priceRange').lower,
            maxPrice: this.navParams.get('priceRange').upper
        };
    }
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
    SearchResultsPage.prototype.addAppointment = function () {
        this.appointmentDisable = false;
        this.stepType = "Appointment";
    };
    SearchResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchResultsPage');
    };
    SearchResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-results',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/search-results/search-results.html"*/'<!--\n  Generated template for the SearchResultsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search Results</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="stepType">\n      <ion-segment-button value="Requirement">\n        Requirement\n      </ion-segment-button>\n      <ion-segment-button [disabled]="listDisable" value="Lists">\n        Lists\n      </ion-segment-button>\n      <ion-segment-button [disabled]="appointmentDisable" value="Appointment">\n        Appointment\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="outer-content cards-bg">\n  <div [ngSwitch]="stepType">\n    <ion-list *ngSwitchCase="\'Requirement\'">\n        <button ion-item>\n            <ion-label>\n              Location\n            </ion-label>\n            <ion-note item-end>\n              {{req.location}}\n            </ion-note>\n          </button>\n      <button ion-item>\n        <ion-label>\n          Type\n        </ion-label>\n        <ion-note item-end>\n          {{req.type}}\n        </ion-note>\n      </button>\n      <button ion-item>\n        <ion-label>\n          Minimum Area\n        </ion-label>\n        <ion-note item-end>\n          {{req.minArea}}\n        </ion-note>\n      </button>\n      <button ion-item>\n        <ion-label>\n          Maximum Area\n        </ion-label>\n        <ion-note item-end>\n          {{req.maxArea}}\n        </ion-note>\n      </button>\n      <button ion-item>\n        <ion-label>\n          Number of Bed Rooms\n        </ion-label>\n        <ion-note item-end>\n          {{req.noOfRooms}}\n        </ion-note>\n      </button>\n      <button ion-item>\n        <ion-label>\n          Minimum Price\n        </ion-label>\n        <ion-note item-end>\n          {{req.minPrice}}\n        </ion-note>\n      </button>\n      <button ion-item>\n        <ion-label>\n          Maximum Price\n        </ion-label>\n        <ion-note item-end>\n          {{req.maxPrice}}\n        </ion-note>\n      </button>\n      <button ion-item>\n        <ion-label>\n          Category\n        </ion-label>\n        <ion-note item-end>\n            {{req.type}}\n        </ion-note>\n      </button>\n      <div class="button--wrapper">\n        <button ion-button color="primary" (click)="confirmReq()">Continue</button>\n      </div>\n    </ion-list>\n    <ion-list *ngSwitchCase="\'Lists\'">\n      <ion-card *ngFor="let ad of adList"> \n        <img src="../../assets/imgs/house1.jpg">\n          <ion-card-header text-center>\n              \n              <ion-title>{{ad.category}} for sale in {{ad.location}}</ion-title>\n              <ion-note>{{ad.uploaded_at | date:\'fullDate\'}}</ion-note>\n          </ion-card-header>\n          \n            <ion-item-group>\n                <ion-item>\n                    Price\n                    <div item-end>LKR {{ad.price}}</div>\n                  </ion-item>\n              <ion-item>\n                Beds\n                <div item-end>{{ad.bedrooms}}</div>\n              </ion-item>\n              <ion-item>\n                Baths\n                <div item-end>\n                  {{ad.bathrooms}}\n                </div>\n              </ion-item>\n              <ion-item>\n                House size\n                <div item-end>\n                  -\n                </div>\n              </ion-item>\n              <ion-item>\n                Land Size\n                <div item-end>\n                  {{ad.land_size}}\n                </div>\n              </ion-item>\n            </ion-item-group>\n            \n\n\n        <ion-row>\n            <ion-col text-center>\n              <button ion-button clear icon-only text-center>\n                <ion-icon name="call"></ion-icon>\n                <!-- <div>12 Likes</div> -->\n              </button>\n            </ion-col>\n            <ion-col text-center>\n              <button ion-button clear icon-only text-center>\n                <ion-icon name="mail"></ion-icon>\n                <!-- <div>4 Comments</div> -->\n              </button>\n            </ion-col>\n            <ion-col text-center>\n                <button ion-button clear icon-only text-center  (click)="addAppointment()">\n                  <ion-icon name="calendar"></ion-icon>\n                  <!-- <div>4 Comments</div> -->\n                </button>\n              </ion-col>\n          </ion-row>\n\n      </ion-card>\n      \n    </ion-list>\n    <ion-list *ngSwitchCase="\'Appointment\'">\n        <ion-item>\n            <ion-thumbnail item-start>\n              <img src="../../assets/imgs/house1.jpg">\n            </ion-thumbnail>\n            <h2>House for sale in Attidiya</h2>\n            <h3>25th Jun 2018</h3>\n            <p>11.30 AM @ the premises</p>\n            <div item-end class="appListButtonWrap">\n                <button ion-button clear icon-only text-center large><ion-icon name="call"></ion-icon></button>\n                <button ion-button clear icon-only text-center color="red" large><ion-icon name="close-circle"></ion-icon></button>\n            </div>\n          </ion-item>\n          <ion-item>\n              <ion-thumbnail item-start>\n                <img src="../../assets/imgs/house2.jpg">\n              </ion-thumbnail>\n              <h2>House for sale in Homagama</h2>\n              <h3>26th Jun 2018</h3>\n              <p>10.30 AM @ the premises</p>\n              <div item-end class="appListButtonWrap">\n                  <button ion-button clear icon-only text-center large><ion-icon name="call"></ion-icon></button>\n                  <button ion-button clear icon-only text-center color="red" large><ion-icon name="close-circle"></ion-icon></button>\n              </div>\n              \n            </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/search-results/search-results.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_retrieve_ads_retrieve_ads__["a" /* RetrieveAdsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_retrieve_ads_retrieve_ads__["a" /* RetrieveAdsProvider */]) === "function" && _c || Object])
    ], SearchResultsPage);
    return SearchResultsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=search-results.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favorites/favorites.module": [
		291,
		7
	],
	"../pages/login/login.module": [
		292,
		6
	],
	"../pages/my-profile/my-profile.module": [
		293,
		5
	],
	"../pages/req-capture/req-capture.module": [
		294,
		4
	],
	"../pages/search-results/search-results.module": [
		295,
		3
	],
	"../pages/search/search.module": [
		296,
		2
	],
	"../pages/signup/signup.module": [
		297,
		1
	],
	"../pages/verify/verify.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__req_capture_req_capture__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.startReqCapture = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__req_capture_req_capture__["a" /* ReqCapturePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/home/home.html"*/'<ion-content padding>\n  <div id="top-banner">\n    <div class="banner-content">\n      <h1>DISCOVER</h1>\n      <span class="tag-line">Let\'s discover your dream home</span>\n      <button ion-button id="start-button" color="red" (click)="startReqCapture()">Start</button>\n    </div>\n\n  </div>\n\n  <div class="content-wrap">\n    <ion-title>\n      Top Picks\n    </ion-title>\n    <ion-slides loop=\'true\' pager=\'true\' paginationType=\'bullets\'>\n      <ion-slide>\n        <ion-card>\n\n          <img src="assets/imgs/house1.jpg" />\n\n          <ion-card-content>\n            <ion-card-title>\n              Nine Inch Nails Live\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n\n          <ion-row no-padding>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'star\'></ion-icon>\n                Favorite\n              </button>\n            </ion-col>\n            <!-- <ion-col text-center>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                Listen\n              </button>\n            </ion-col> -->\n            <ion-col text-right>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Share\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-card>\n\n          <img src="assets/imgs/house2.jpg" />\n\n          <ion-card-content>\n            <ion-card-title>\n              Nine Inch Nails Live\n            </ion-card-title>\n            <p>\n              The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n            </p>\n          </ion-card-content>\n\n          <ion-row no-padding>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'star\'></ion-icon>\n                Favorite\n              </button>\n            </ion-col>\n            <!-- <ion-col text-center>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'musical-notes\'></ion-icon>\n                Listen\n              </button>\n            </ion-col> -->\n            <ion-col text-right>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'share-alt\'></ion-icon>\n                Share\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetrieveAdsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http,RequestOptions, Request, RequestMethod,Headers } from '@angular/http';


/*
  Generated class for the RetrieveAdsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var API_URL = 'http://localhost:1500/api/';
var RetrieveAdsProvider = /** @class */ (function () {
    function RetrieveAdsProvider(http) {
        this.http = http;
        this.data = null;
        //console.log('Hello RetrieveAdsProvider Provider');
    }
    RetrieveAdsProvider.prototype.getAds = function (adData) {
        var _this = this;
        console.log(adData);
        // let header= new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: header });
        return new Promise(function (resolve, reject) {
            _this.http.post(API_URL + 'ads/getads', adData)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RetrieveAdsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RetrieveAdsProvider);
    return RetrieveAdsProvider;
    var _a;
}());

//# sourceMappingURL=retrieve-ads.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var API_URL = 'http://localhost:1500/api/';
var LoginServiceProvider = /** @class */ (function () {
    function LoginServiceProvider(http) {
        this.http = http;
        this.user = null;
    }
    LoginServiceProvider.prototype.userLogin = function (userData) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            _this.http.post(API_URL + 'auth/login', userData)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.user = data;
                resolve(_this.user);
            }, function (err) {
                reject(err);
            });
        }));
    };
    LoginServiceProvider.prototype.loggedinUser = function (userData) {
        this.user = userData;
    };
    LoginServiceProvider.prototype.getLoggedinUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.user);
        });
    };
    LoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LoginServiceProvider);
    return LoginServiceProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_profile_my_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_favorites_favorites__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_req_capture_req_capture__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_search_results_search_results__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_login_service_login_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_signup_service_signup_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_retrieve_ads_retrieve_ads__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_verify_verify__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_req_capture_req_capture__["a" /* ReqCapturePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_search_results_search_results__["a" /* SearchResultsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/req-capture/req-capture.module#ReqCapturePageModule', name: 'ReqCapturePage', segment: 'req-capture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-results/search-results.module#SearchResultsPageModule', name: 'SearchResultsPage', segment: 'search-results', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_req_capture_req_capture__["a" /* ReqCapturePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_search_results_search_results__["a" /* SearchResultsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_login_service_login_service__["a" /* LoginServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_signup_service_signup_service__["a" /* SignupServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_retrieve_ads_retrieve_ads__["a" /* RetrieveAdsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';



/*
  Generated class for the SignupServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var API_URL = 'http://localhost:1500/api/';
var SignupServiceProvider = /** @class */ (function () {
    function SignupServiceProvider(http) {
        this.http = http;
        this.data = null;
    }
    SignupServiceProvider.prototype.userSignup = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_URL + 'auth/register', userData)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    SignupServiceProvider.prototype.userVerify = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(API_URL + 'auth/verify', userData)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (err) {
                reject(err);
            });
        });
    };
    SignupServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SignupServiceProvider);
    return SignupServiceProvider;
}());

//# sourceMappingURL=signup-service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_profile_my_profile__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__my_profile_my_profile__["a" /* MyProfilePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__["a" /* FavoritesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="My Profile" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Favorites" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Search" tabIcon="search"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map