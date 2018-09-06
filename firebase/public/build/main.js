webpackJsonp([1],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers_data_firestore_providers_data_firestore__ = __webpack_require__(232);
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
    function HomePage(navCtrl, fireStoreProvider, platform) {
        this.navCtrl = navCtrl;
        this.fireStoreProvider = fireStoreProvider;
        this.platform = platform;
        this.slidesPerView = 1;
        this.headerScrollConfig = { cssProperty: 'margin-top', maxValue: 75 };
        this.meniSakriven = false;
        this.products = this.fireStoreProvider.getProductList().valueChanges();
        if (this.platform.width() > 450) {
            this.slidesPerView = 2;
            this.slide1 = "assets/imgs/slide1.jpg";
            this.slide2 = "assets/imgs/hope.jpg";
            this.slide3 = "assets/imgs/lopata.jpg";
        }
        else {
            this.slidesPerView = 1;
            this.slide1 = "assets/imgs/slide1-small.jpg";
            this.slide2 = "assets/imgs/hope-small.jpg";
            this.slide3 = "assets/imgs/lopata-small.jpg";
        }
    }
    HomePage.prototype.scrollBottom = function () {
        if (this.content._scroll)
            this.content.scrollToBottom(0);
    };
    HomePage.prototype.scrollTop = function () {
        if (this.content._scroll)
            this.content.scrollToTop(0);
    };
    HomePage.prototype.scroll = function () {
        if (this.content._scroll)
            this.content.scrollTo(0, 650, 0);
    };
    HomePage.prototype.hack = function (val) {
        return Array.from(val);
    };
    HomePage.prototype.meniClick = function () {
        this.meniSakriven = !this.meniSakriven;
    };
    HomePage.prototype.ngOnInit = function () {
        this.products = this.fireStoreProvider.getProductList().valueChanges();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ridvan\Desktop\IonicProjects\ramgeneraltrading\ramgtweb\src\pages\home\home.html"*/'<ion-header [scrollHide]="headerScrollConfig" [scrollContent]="pageContent">\n  <ion-row class="meniGlavni" >\n    <ion-col>\n        <img src="assets/imgs/logo.png" style="max-height:80px"/>\n    </ion-col>\n    \n    <ion-col text-end>\n        <button ion-button (click)="meniClick()" color="light" style="height:55px; width:55px;">\n            <ion-icon name="menu" flex></ion-icon>\n        </button>\n    </ion-col>\n    \n  </ion-row>\n  \n  <ion-row *ngIf="meniSakriven">\n    <button col-3  (click)="scrollTop()" >\n        <ion-icon name="home" flex></ion-icon>\n        Home\n    </button>\n    <button col-3  (click)="scroll()">\n        <ion-icon name="basket" flex></ion-icon>\n        Products\n    </button>\n    <button col-3  (click)="scrollBottom()" >\n        <ion-icon name="call" flex></ion-icon>\n        Contact Us\n      </button>\n    <ion-searchbar col-3></ion-searchbar>\n  </ion-row>\n \n</ion-header>\n\n<ion-content #pageContent fullscreen>\n \n  <ion-slides class="slider" pager autoplay="12000" loop="true" speed="100" effect="fade"  >\n\n    <ion-slide class="slide" >\n \n          <img id="slide1" class="slider" [src]="slide1" />\n      <div class="text-block"> \n          <h2>A Bridge Between Farmers and Consumers</h2>\n          <p>You order it and they grow it</p>\n      </div>\n    </ion-slide>\n  \n    <ion-slide  class="slide" >\n        <img id="slide2" class="slider" [src]="slide2"/>\n        <div class="text-block"> \n            <h2>Farming Like Never Before</h2>\n            <p>Experience farming from the comfort of your own home.</p>\n          </div>\n    </ion-slide>\n  \n    <ion-slide class="slide">\n        <img id="slide3" class="slider" [src]="slide3"/>\n        <div class="text-block"> \n            <h2>Download The App</h2>\n            <p>And start farming today!</p>\n          </div>\n    </ion-slide>\n  \n  </ion-slides>\n\n  <div style="padding: 15px"></div>\n\n\n  <h1 text-center>Products That You Can Invest In</h1>\n\n \n<ion-grid class="contentGrid"  >\n\n\n  <div style="padding: 8px"></div>\n  \n  <ion-slides class="productSlides" loop [slidesPerView]="slidesPerView"  >\n      <ion-slide  *ngFor="let product of products | async">\n          <ion-card nopadding class="cardProduct" >\n              <ion-row>\n                  <ion-col col-6 offset-3 text-center>\n                      <img class="product" src="{{product.imgUrls}}" />\n                  </ion-col>\n                 </ion-row>\n              <ion-card-content >\n                <ion-card-title>\n                  {{product.name}}\n                </ion-card-title>\n                <ion-row>\n                  <ion-col>\n                    <h3>Price per unit:</h3>\n                    <p>{{product.price}} $</p>\n                  </ion-col>\n                  <ion-col>\n                      <h3>Investment length:</h3>\n                      <p>{{product.cont_period}} years</p>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n      </ion-slide>\n</ion-slides>\n  \n\n  <ion-card class="home" >\n      <ion-row >\n        <ion-col col-12 col-sm >\n          <ion-card-content>\n              <ion-card-title>\n                Buy our Stock\n                </ion-card-title>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dignissim laoreet. Aenean fringilla fermentum dolor sed lacinia. \n                Mauris venenatis tortor mi, non lobortis turpis efficitur sit amet. Orci varius natoque p\n              </p>\n            </ion-card-content>\n      </ion-col>\n      <ion-col col-12 col-sm>\n          <img class="cardImg" src="assets/imgs/farmer.jpg"  />\n      </ion-col>\n    </ion-row>\n      \n    </ion-card>\n\n\n  <div style="padding: 8px"></div>\n\n  <ion-card class="home">\n      <ion-row>\n          <ion-col  col-12 col-sm text-begin>\n              <img class="cardImg" src="assets/imgs/grow.jpg" />\n          </ion-col>\n        <ion-col col-12 col-sm>\n          <ion-card-content>\n              <ion-card-title>\n               They Plant and Care\n                </ion-card-title>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dignissim laoreet. Aenean fringilla fermentum dolor sed lacinia. \n                Mauris venenatis tortor mi, non lobortis turpis efficitur sit amet. Orci varius natoque p\n              </p>\n            </ion-card-content>\n      </ion-col>\n      \n    </ion-row>\n      \n    </ion-card>\n\n\n  <div style="padding: 8px"></div>\n\n  <ion-card class="home">\n    <ion-row>\n      <ion-col col-12 col-sm>\n        <ion-card-content>\n            <ion-card-title>\n              Wath it Grow\n              </ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dignissim laoreet. Aenean fringilla fermentum dolor sed lacinia. \n              Mauris venenatis tortor mi, non lobortis turpis efficitur sit amet. Orci varius natoque p\n            </p>\n          </ion-card-content>\n      </ion-col>\n      <ion-col col-12 col-sm text-begin>\n          <img class="cardImg" src="assets/imgs/slide2.jpg" />\n      </ion-col>\n    </ion-row>\n    \n  </ion-card>\n\n\n<div style="padding: 8px"></div>\n\n\n  <ion-card class="home">\n      <ion-row>\n          <ion-col col-12 col-sm  text-begin>\n              <img class="cardImg" src="assets/imgs/crop.jpg" />\n          </ion-col>\n        <ion-col col-12 col-sm>\n          <ion-card-content>\n              <ion-card-title>\n                Reap the Harvest\n                </ion-card-title>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dignissim laoreet. Aenean fringilla fermentum dolor sed lacinia. \n                Mauris venenatis tortor mi, non lobortis turpis efficitur sit amet. Orci varius natoque p\n              </p>\n            </ion-card-content>\n      </ion-col>\n      \n    </ion-row>\n      \n    </ion-card>\n\n\n\n</ion-grid>\n\n\n<!-- footer -->\n\n<div style="padding: 50px"></div>\n\n<div class="footerContent" >\n      <div style="padding:5px"></div>\n      <ion-list text-center>\n          <h1 class="contact-us-header">Get In Touch</h1>\n      \n        </ion-list>\n      \n <!--     <ion-row>\n        <ion-col col-4 text-end>\n          <ion-list>\n            <h6>More</h6>\n            <p (click)="open(\'https://play.google.com/store/apps/details?id=com.anniecorpinc.projectjaguar\')"> Download on Device </p>\n            <p (click)="openPage(\'Services\')"> Services </p>\n            <p (click)="open(\'https://pjaguar.com/#/faq\')"> Jobs </p>\n          </ion-list>\n        </ion-col>\n        <ion-col col-4 text-center> \n          <ion-list>\n            <h6>Social</h6>\n            <p (click)="open(\'https://www.facebook.com/ProjectJaguarINC/\')"> Facebook </p>\n            <p (click)="open(\'https://www.instagram.com/pjaguarinc/\')"> Instagram </p>\n            <p (click)="open(\'mailto:info@pjaguar.com\')"> Email </p>\n          </ion-list>\n        </ion-col>\n        <ion-col col-4 text-begin>\n\n          <ion-list>\n            <h6>Documentation</h6> \n            <p (click)="open(\'https://drive.google.com/open?id=0B31gI4ogLmC8Si0wYTlYbWx0Vnc\')"> Company Policy </p>\n            <p (click)="openPage(\'About\')"> About </p>\n            <p (click)="openPage(\'Faq\')"> FAQ </p>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    -->\n      <p text-center class="p" style="color: white"> Copyright © 2018  || All Rights Reserved</p> \n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ridvan\Desktop\IonicProjects\ramgeneraltrading\ramgtweb\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers_data_firestore_providers_data_firestore__["a" /* FirestoreProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 190:
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
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/entry/entry.module": [
		483,
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
webpackAsyncContext.id = 231;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(233);
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
  Generated class for the ProvidersDataFirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirestoreProvider = /** @class */ (function () {
    function FirestoreProvider(firestore) {
        this.firestore = firestore;
    }
    FirestoreProvider.prototype.getProductList = function () {
        return this.firestore.collection('products');
    };
    FirestoreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirestoreProvider);
    return FirestoreProvider;
}());

//# sourceMappingURL=providers-data-firestore.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Ridvan\Desktop\IonicProjects\ramgeneraltrading\ramgtweb\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ridvan\Desktop\IonicProjects\ramgeneraltrading\ramgtweb\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntryPage = /** @class */ (function () {
    function EntryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EntryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntryPage');
    };
    EntryPage.prototype.Navigate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    EntryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entry',template:/*ion-inline-start:"C:\Users\Ridvan\Desktop\IonicProjects\ramgeneraltrading\ramgtweb\src\pages\entry\entry.html"*/'  \n<ion-content style="background-color: #392614" >\n<ion-grid>\n    <ion-row text-center>\n        <ion-col col-2></ion-col>\n\n        <ion-col col-8>\n            <h1>Disclaimer</h1>\n            <h3>This App is A Work in Progress</h3>\n            <button ion-button (click)="Navigate()" color="light" style="height:55px; width:55px;">Enter</button>\n        </ion-col>\n\n        <ion-col col-2></ion-col>\n    </ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Ridvan\Desktop\IonicProjects\ramgeneraltrading\ramgtweb\src\pages\entry\entry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EntryPage);
    return EntryPage;
}());

//# sourceMappingURL=entry.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(416);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_entry_entry__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_headerhider__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_providers_data_firestore_providers_data_firestore__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: "AIzaSyCnEg9-4iEmt1DfDiPx_NiIK6vw4qYQ6Io",
    authDomain: "ramgtweb.firebaseapp.com",
    databaseURL: "https://ramgtweb.firebaseio.com",
    projectId: "ramgtweb",
    storageBucket: "ramgtweb.appspot.com",
    messagingSenderId: "930826613643"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_entry_entry__["a" /* EntryPage */],
                __WEBPACK_IMPORTED_MODULE_9__directives_headerhider__["a" /* ScrollHideDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/entry/entry.module#EntryPageModule', name: 'EntryPage', segment: 'entry', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_entry_entry__["a" /* EntryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_providers_data_firestore_providers_data_firestore__["a" /* FirestoreProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(281);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ridvan\Desktop\IonicProjects\ramgeneraltrading\ramgtweb\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Ridvan\Desktop\IonicProjects\ramgeneraltrading\ramgtweb\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollHideDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollHideDirective = /** @class */ (function () {
    function ScrollHideDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.lastValue = 0;
    }
    ScrollHideDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.scrollContent && this.config) {
            this.scrollContent.ionScrollStart.subscribe(function (ev) {
                _this.contentHeight = _this.scrollContent.getScrollElement().offsetHeight;
                _this.scrollHeight = _this.scrollContent.getScrollElement().scrollHeight;
                if (_this.config.maxValue === undefined) {
                    _this.config.maxValue = _this.element.nativeElement.offsetHeight;
                }
                _this.lastScrollPosition = ev.scrollTop;
            });
            this.scrollContent.ionScroll.subscribe(function (ev) { return _this.adjustElementOnScroll(ev); });
            this.scrollContent.ionScrollEnd.subscribe(function (ev) { return _this.adjustElementOnScroll(ev); });
        }
    };
    ScrollHideDirective.prototype.adjustElementOnScroll = function (ev) {
        var _this = this;
        if (ev) {
            ev.domWrite(function () {
                var scrollTop = ev.scrollTop > 0 ? ev.scrollTop : 0;
                var scrolldiff = scrollTop - _this.lastScrollPosition;
                _this.lastScrollPosition = scrollTop;
                var newValue = _this.lastValue + scrolldiff;
                newValue = Math.max(0, Math.min(newValue, _this.config.maxValue));
                _this.renderer.setStyle(_this.element.nativeElement, _this.config.cssProperty, "-" + newValue + "px");
                _this.lastValue = newValue;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])('scrollHide'),
        __metadata("design:type", Object)
    ], ScrollHideDirective.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])('scrollContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Content */])
    ], ScrollHideDirective.prototype, "scrollContent", void 0);
    ScrollHideDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* Directive */])({
            selector: '[scrollHide]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Renderer2 */]])
    ], ScrollHideDirective);
    return ScrollHideDirective;
}());

//# sourceMappingURL=headerhider.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map