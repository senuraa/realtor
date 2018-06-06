webpackJsonp([0],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReqCapturePageModule", function() { return ReqCapturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__req_capture__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReqCapturePageModule = /** @class */ (function () {
    function ReqCapturePageModule() {
    }
    ReqCapturePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__req_capture__["a" /* ReqCapturePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__req_capture__["a" /* ReqCapturePage */]),
            ],
        })
    ], ReqCapturePageModule);
    return ReqCapturePageModule;
}());

//# sourceMappingURL=req-capture.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReqCapturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_config_app_config__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {SearchResultsPage} from '../search-results/search-results';

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
        this.showList = false;
        this.request = {
            location: '',
            noOfRooms: 1,
            priceRange: {
                lower: '500',
                upper: '900'
            },
            category: 'House',
            areaRange: {
                lower: '500',
                upper: '900'
            },
            showLastSeven: false,
            type: 'Buy'
        };
        this.setCities();
    }
    ReqCapturePage.prototype.gotoSearchResults = function () {
        this.navCtrl.push('SearchResultsPage', this.request);
    };
    ReqCapturePage.prototype.setCities = function () {
        this.cities = __WEBPACK_IMPORTED_MODULE_2__providers_app_config_app_config__["a" /* CONFIG */].cities;
        //console.log(this.cities[1]);
    };
    ReqCapturePage.prototype.filterItems = function (ev) {
        this.setCities();
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.cities = this.cities.filter(function (item) {
                return item.toLowerCase().includes(val.toLowerCase());
            });
            this.showList = true;
        }
        else {
            this.showList = false;
        }
    };
    ReqCapturePage.prototype.hideList = function (city) {
        this.showList = false;
        this.request.location = city;
    };
    // ngOnInit(){
    //   this.setCities()
    // }
    ReqCapturePage.prototype.ionViewDidLoad = function () {
        this.setCities();
        console.log('ionViewDidLoad ReqCapturePage');
    };
    ReqCapturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-req-capture',template:/*ion-inline-start:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/req-capture/req-capture.html"*/'<!--\n  Generated template for the ReqCapturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Request</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="outer-content">\n\n\n  <ion-list>\n    <ion-list-header>\n      Request Details\n    </ion-list-header>\n    <ion-item>\n      <!-- <ion-label color="primary">Location</ion-label> -->\n      <!-- <ion-input type="text" [(ngModel)]="request.location"></ion-input> -->\n      <ion-searchbar (ionInput)="filterItems($event)" [(ngModel)]="request.location" placeholder="Location" clear></ion-searchbar>\n\n      <ion-list *ngIf="showList">\n        <!-- <ion-item *ngFor="let city of cities" (click)="hideList()">\n          {{city}}\n        </ion-item> -->\n        <button ion-item *ngFor="let city of cities" (click)="hideList(city)">\n          {{city}}\n        </button>\n      </ion-list>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Buy / Rent</ion-label>\n      <ion-select [(ngModel)]="request.type" interface="popover" item-end>\n        <ion-option value="Buy">Buy</ion-option>\n        <ion-option value="Rent">Rent</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary">Category</ion-label>\n      <ion-select [(ngModel)]="request.category" interface="popover" item-end>\n\n        <ion-option value="House">House</ion-option>\n        <ion-option value="Land">Land</ion-option>\n        <ion-option value="Commercial">Commercial</ion-option>\n        <ion-option value="Apartment">Apartment</ion-option>\n      </ion-select>\n    </ion-item>\n    \n  \n    <ion-item>\n      <ion-label color="primary">Only show posts from last 7 days</ion-label>\n      <ion-toggle [(ngModel)]="request.showLastSeven"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n  <ion-list  *ngIf="request.category==\'House\'">\n    <ion-list-header>\n      Rooms\n    </ion-list-header>\n    <ion-item>\n      <!-- <ion-label color="primary"  item-start>Rooms</ion-label> -->\n      <ion-badge item-end color="danger">{{request.noOfRooms}}</ion-badge>\n      <ion-range min="1" max="9" step="1" snaps="true" [(ngModel)]="request.noOfRooms" color="danger">\n        <ion-icon range-left small color="danger" name="remove-circle"></ion-icon>\n        <ion-icon range-right color="danger" name="add-circle"></ion-icon>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Price range\n    </ion-list-header>\n    <ion-item>\n      <ion-badge item-start color="dark">{{request.priceRange.lower}}</ion-badge>\n      <ion-badge item-end color="dark">{{request.priceRange.upper}}</ion-badge>\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="request.priceRange" color="dark" min="100" max="1000" step="10">\n      </ion-range>\n    </ion-item>\n    \n\n  </ion-list>\n  <ion-list>\n    <ion-list-header>Area range</ion-list-header>\n    <ion-item>\n      <ion-badge item-start color="dark">{{request.areaRange.lower}}</ion-badge>\n      <ion-badge item-end color="dark">{{request.areaRange.upper}}</ion-badge>\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="request.areaRange" color="dark" min="100" max="1000" step="10">\n      </ion-range>\n    </ion-item>\n  </ion-list>\n  <div class="button--wrapper">\n    <button ion-button color="primary" (click)="gotoSearchResults()">Continue</button>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/virtusa/Documents/senura/housingapp/realtor/src/pages/req-capture/req-capture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ReqCapturePage);
    return ReqCapturePage;
}());

//# sourceMappingURL=req-capture.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
/*
  Generated class for the AppConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// @Injectable()
// export class AppConfigProvider {
//   constructor(public http: HttpClient) {
//     console.log('Hello AppConfigProvider Provider');
//   }
// }
var CONFIG = {
    cities: ['Agalawatta', 'Ahungalla', 'Akaravita', 'Akuregoda', 'Alawwa', 'Algama', 'Alubomulla', 'Aluthgama', 'Aluthmawatha', 'Ambagaha Junction', 'Ambagolla', 'Ambalangoda', 'Ambalantota', 'Ambathale', 'Ambepussa', 'Ambillawatta', 'Ambuldeniya', 'Andiambalama', 'Angoda', 'Angulana', 'Anguruwatota', 'Arachchikattuwa', 'Arangala', 'Arawwala', 'Armour Street', 'Artigala', 'Aruggoda', 'Asgiriya', 'Athul Kotte', 'Athurugiriya', 'Attanagalla', 'Attidiya', 'Avissawella', 'Badalgama', 'Baddegana', 'Badulla', 'Bakmegolla', 'Balalla', 'Balangoda', 'Balapitiya', 'Ballapana', 'Balummahara', 'Bambalapitiya', 'Bandaragama', 'Banduragoda', 'Batagama', 'Batapotha', 'Battaramulla', 'Batuwandara', 'Batuwatha', 'Beliatta', 'Bellantota', 'Bellanvila', 'Bellapitiya', 'Bemmulla', 'Beruwela', 'Biyagama', 'Bokkawala', 'Bokundara', 'Bollegala', 'Bombuwela', 'Bomiriya', 'Bopagama', 'Bopitiya', 'Boralasgamuwa', 'Borella', 'Brahmanagama', 'Bulathkohupitiya', 'Bulugahagoda', 'Buthpitiya', 'Chilaw', 'CMB Kochchikade', 'Colombo - 02', 'Colombo - 03', 'Colombo - 04', 'Colombo - 05', 'Colombo - 06', 'Colombo - 07', 'Colombo - 15', 'Colpetty', 'Dagonna', 'Dahapla mawatha', 'Dalugama', 'Dalupotha', 'Dalupotha - Negombo', 'Dambadeniya', 'Dambara', 'dambulla', 'Dandugama', 'Dankotuwa', 'Danovita', 'Dehiowita', 'Dehiwela', 'Dekatana', 'Delatura', 'Delgoda', 'Delkande', 'Delpe', 'Dematagoda', 'Depanama', 'Dewalapola', 'Divulapitiya', 'Diyagama', 'Dodangoda', 'Dompe', 'Doranagoda', 'Dungalpitiya', 'E - kala', 'Eheliyagoda', 'Ekala Millenium City', 'Elakanda', 'Eldeniya', 'Elvitigala', 'Embuldeniya', 'Enderamulla', 'Epitawala', 'Erawalla', 'Eriyawetiya', 'Eswatta', 'Ethagama', 'Ethul Kotte', 'Fort', 'Galagedara', 'Galkanda', 'Galle', 'Galwana', 'Gampaha', 'Gampola', 'Ganemulla', 'Gatahaththa', 'Gemunupura', 'Getaheththa', 'Giriulla', 'Godagama', 'Gonaduwa', 'Gonahena', 'Gonapola', 'Gonawala', 'Gorakadeniya', 'Gorakana', 'Gorakapitiya', 'Gorakapola', 'Gorokgoda', 'Gothami Road', 'Gothatuwa', 'Grandpass', 'Habarakada', 'Hadapangoda', 'Haggalla', 'Halpita', 'Hanguranketha', 'Hanwella', 'Havlock Place', 'Hedigama', 'Hemathgama', 'Hemmathagama', 'Henagama', 'Hendala', 'Hettirippuwa', 'Hikkaduwa', 'Himbutana', 'Hirana', 'Hiripitiya', 'Hokandara', 'Homagama', 'Hondella', 'Honnattara', 'Horana', 'Horape', 'Hunupitiya', 'IDH', 'Imbulgoda', 'Induruwa', 'Ingiriya', 'Ja - ela', 'Jaburaliya', 'Jalthara', 'Jawatte', 'Kadawatha', 'Kadirana', 'Kadugannawa', 'Kaduwela', 'Kahanthota', 'Kahathuduwa', 'Kalagedihena', 'Kalalgoda', 'Kalamulla', 'Kalapaluwawa', 'Kaleliya', 'Kaluaggala', 'Kalubowila', 'Kaludawela', 'Kalutara', 'Kandana', 'Kanduboda', 'Kandy', 'Karagampitiya', 'Karandeniya', 'Karawanella', 'Katana', 'Kataragama', 'Kattuwa', 'Katubedda', 'katugastota', 'Katukurunda', 'Katunayaka', 'katuneriya', 'Katuwawala', 'Kawdana', 'Kegalle', 'Kelanimulla', 'Kelaniya', 'Keragala', 'Kerawalapitiya', 'Kesbewa', 'Keselhenawa', 'Keselwatta', 'Kimbulapitiya', 'Kindelpitiya', 'Kinigama', 'Kiribathgoda', 'Kirillawela', 'Kirimatiyana', 'Kirindiwela', 'Kiriwattuduwa', 'Kirulapona', 'Kochchikade', 'Kohilawatta', 'Kohuwala', 'Kolonnawa', 'Koralaima', 'Koralawella', 'Korase', 'Korathota', 'Kosetedeniya', 'Kosgama', 'Koswatha', 'Kotadeniyawa', 'Kotahena', 'Kothalawala', 'Kotikawatta', 'Kottawa', 'Kotte', 'Kotugoda', 'Kudamaduwa', 'Kuliyapitiya', 'Kurana', 'Kurunegala', 'Liyanagemulla', 'Liyenagoda', 'Lunuwila', 'Mabima', 'Mabola', 'Madagampitiya', 'Madampe', 'madamulla', 'Madapatha', 'Madelgamuwa', 'Madinnagoda', 'Madiwela', 'Magalegoda', 'Magammana', 'Maggona', 'MahaInduruwa', 'Mahabage', 'Mahakanda', 'Mahara', 'Maharachchimulla', 'Maharagama', 'Mahawewa', 'Mahena', 'Makandana', 'Makandura', 'Makewita', 'Makola', 'Makuludoowa', 'Makumbura', 'Malabe', 'Mallehewa', 'Malwana', 'Mambulgoda', 'Mandawala', 'Maradagahamulla', 'Maradana', 'Marassana', 'Marawila', 'Matale', 'Matara', 'Mathammana', 'Maththegama', 'Matiyagane', 'Mattakkuliya', 'Mattegoda', 'Matugama', 'Mawanella', 'Mawaramandiya', 'Mawathagama', 'Mawathgama', 'Medamahanuwara', 'Meegahawatte', 'Meegoda', 'Meepa', 'Meethotamulla', 'Minuwangoda', 'Mirigama', 'Mirihana', 'Miriswatta', 'Modara', 'Molagoda', 'Moragahahena', 'Moragasmulla', 'Moraketiya', 'Moratuwa', 'Moronthuduwa', 'Mt.Lavinia', 'Muddaragama', 'Mulleriyawa', 'Munnessaram', 'Naiwala', 'Nakandapola', 'Nakkawatta', 'Nalluruwa', 'Narahenpita', 'Narammala', 'Naranwala', 'Nattandiya', 'Navinna', 'Nawagamuwa', 'Nawala', 'Nawalamulla', 'Nawalapitiya', 'Nedagamuwa', 'Nedimala', 'Neelammahara', 'Negombo', 'Nelundeniya', 'Neluwa', 'Nikaweratiya', 'Nilpanagoda', 'Nitambuwa', 'Niwandama', 'Nugegoda', 'Opatha', 'Oruwala', 'Padukka', 'Pagoda', 'Palanwatta', 'Palathota', 'Pallewela', 'Pamankada', 'Pamunugama', 'Pamunuwa', 'Panadura', 'Panagoda', 'Pannala', 'Pannipitiya', 'Papiliyawala', 'Park Road', 'Pasyala', 'Pattiya Junction', 'Payagala', 'Peellawatta', 'Pelawatte', 'Peliyagoda', 'Pepiliyana', 'Periyamulla', ' Negombo', 'Pethiyagoda', 'Pettah', 'Pilimathalawa', 'Piliyandala', 'Pinwatta', 'Pirivan Junction', 'Pitadeniya', 'Pitipana', 'Pitipana', 'Pitta Kotte', 'Pittugala', 'Polgahawela', 'Polgasowita', 'Polgolla', 'Polhengoda', 'Polwatta', 'Poruwadanda', 'Pothupitiya', 'Pugoda', 'Punchi Borella', 'Puwakwatiya', 'Radawana', 'Raddoluwa', 'Ragalkanda', 'Ragama', 'Raigama', 'Rajagiriya', 'Rambukkana', 'Ranala', 'Ranmuthugala', 'Ranpokunagama', 'Rathambale', 'Rathnapura', 'Rathupaswala', 'Ratmalana', 'Rattanapitiya', 'Renuka hotel', 'Ruhunupura', 'Rukattana', 'Rukmalgama', 'Ruwanwella', 'Sapugaskande', 'Seeduwa', 'Siddamulla', 'Siyambalagoda', 'Siyambalape', 'Soysapura', 'Teldeniya', 'Thalagala', 'Thalagama', 'Thalahena', 'Thalapathpitiya', 'Thalawathugoda', 'Thalwilla', 'Thanthirimulla', 'Thibbotugoda', 'Thihariya', 'Thimbirigasyaya', 'Thorana Junction', 'Thummodara', 'Thuththiripitiya', 'Torrington', 'Tudella', 'Udahamulla', 'Udammita', 'Udugampola', 'Udupila', 'Uduwana', 'Uggalboda', 'Unawatuna', 'Urapola', 'Uswetakeiyawa', 'Valipillawa', 'Veyangoda', 'Vihara Mawatha', 'Wadduwa', 'Waga', 'Walasgala', 'Walipillawa', 'Walpitamulla', 'Walpola', 'Wanawasala', 'Wandurawa', 'Waragoda', 'Warakapola', 'Waskaduwa', 'Watareka', 'Wathupitiwala', 'Wathurugama', 'Wattala', 'Wattegama', 'Weboda', 'Welikanna', 'Welimada', 'Welipenna', 'Welipillewe', 'Welisara', 'Welivita', 'Weliweriya', 'Wellampitiya', 'Wellawatte', 'Wennappuwa', 'Werahara', 'Weuda', 'Wewalduwa', 'Weweldeniya', 'Wigoda', 'Wijerama', 'Yagodamulla', 'Yakkaduwa', 'Yakkala', 'Yalagala', 'Yatiyana', 'Yogiyana']
};
//# sourceMappingURL=app-config.js.map

/***/ })

});
//# sourceMappingURL=0.js.map