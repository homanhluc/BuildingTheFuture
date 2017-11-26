webpackJsonp([0],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__ = __webpack_require__(3);
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
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapsPage = (function () {
    function MapsPage(navCtrl, navParams, geolocation, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.platform = platform;
    }
    MapsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.locationname = this.navParams.get('location');
        this.inputLocation = this.navParams.get('inputLocation');
        console.log(this.inputLocation);
        this.platform.ready().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                _this.Lat = resp.coords.latitude;
                _this.Long = resp.coords.longitude;
                _this.DisplayMap();
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    MapsPage.prototype.DisplayMap = function () {
        //Setup a location
        var myLocation = new google.maps.LatLng(this.Lat, this.Long); //11.051924, 106.668233
        this.location = myLocation;
        //Map option
        console.log(myLocation);
        var options = {
            center: myLocation,
            zoom: 12,
            mapTypeId: 'hybrid',
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(myLocation, this.map);
        // this.addMarker('11.051924, 106.668233', this.map);
        //Show Place Nearby
        console.error(myLocation);
        this.getPosition(myLocation);
    };
    MapsPage.prototype.createMarker = function (place) {
        this.locate = new google.maps.LatLng(place.geometry.viewport.b.b, place.geometry.viewport.f.f);
        this.addMarker(this.locate, this.map);
    };
    MapsPage.prototype.addMarker = function (location, maps) {
        return new google.maps.Marker({
            position: location,
            map: maps,
        });
    };
    MapsPage.prototype.getPosition = function (place) {
        var _this = this;
        var service = new google.maps.places.PlacesService(this.map);
        var request = {
            location: place,
            radius: 8000,
            name: this.locationname
        };
        service.nearbySearch(request, function (results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    console.log(place);
                    // this.createMarker(place);
                    _this.locate = new google.maps.LatLng(place.geometry.viewport.f.f, place.geometry.viewport.b.b);
                    _this.addMarker(_this.locate, _this.map);
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapsPage.prototype, "mapRef", void 0);
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maps',template:/*ion-inline-start:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\maps\maps.html"*/'<!--\n  Generated template for the MapsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Bản đồ</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n   <div #map id="map"></div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\maps\maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__["a" /* Platform */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_procedures_service_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detailClass__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the PageInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageInfoPage = (function () {
    function PageInfoPage(navCtrl, navParams, proceduresService, detailClass, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proceduresService = proceduresService;
        this.detailClass = detailClass;
        this.events = events;
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
            'Pac-Man',
            'Super Mario World',
            'Street Fighter II',
            'Half Life',
            'Final Fantasy VII',
            'Star Fox',
            'Tetris',
            'Donkey Kong III',
            'GoldenEye 007',
            'Doom',
            'Fallout',
            'GTA',
            'Halo'
        ];
    }
    PageInfoPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    PageInfoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe('link', function (link) {
            _this.link = link;
        });
        if (this.detailClass.getter() !== undefined) {
            this.data = this.detailClass.getter().information;
        }
        else {
            this.proceduresService.detail(this.link).subscribe(function (data) {
                _this.data = data[0].information;
            });
        }
    };
    PageInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-page-info',template:/*ion-inline-start:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\detail\page-info\page-info.html"*/'<!--\n  Generated template for the PageInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pageInfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Lĩnh Vực\n    </ion-card-header>\n    <ion-card-content>\n      {{ data[0]?.field }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Cơ Quan Thực Hiện\n    </ion-card-header>\n    <ion-card-content>\n      {{ data[0]?.organization }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Cách Thực Hiện\n    </ion-card-header>\n    <ion-card-content>\n      {{ data[0]?.doing }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Thời hạn giải quyết\n    </ion-card-header>\n    <ion-card-content>\n      {{ data[0]?.termofsettlement }}\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n        Yêu Cầu Trả Phí\n    </ion-card-header>\n    <ion-card-content>\n      {{ data[0]?.fees }}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Các Bước Thực Hiện\n    </ion-card-header>\n    <ion-card-content>\n      {{ data[0]?.stepstaken }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\detail\page-info\page-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__service_procedures_service_service__["a" /* ProceduresServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__detailClass__["a" /* detailClass */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Events */]])
    ], PageInfoPage);
    return PageInfoPage;
}());

//# sourceMappingURL=page-info.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageInfoDePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maps_maps__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detailClass__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the PageInfoDePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageInfoDePage = (function () {
    function PageInfoDePage(navCtrl, navParams, detailClass) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detailClass = detailClass;
    }
    PageInfoDePage.prototype.ngOnInit = function () {
        this.data = this.detailClass.getter().infodetail;
        console.log(this.data);
    };
    PageInfoDePage.prototype.mapView = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__maps_maps__["a" /* MapsPage */], {
            location: name
        });
    };
    PageInfoDePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-page-info-de',template:/*ion-inline-start:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\detail\page-info-de\page-info-de.html"*/'<!--\n  Generated template for the PageInfoDePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pageInfoDe</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header text-wrap class="demuc">\n      Cơ quan có thẩm quyền quyết định:\n    </ion-card-header>\n    <ion-card-content (click)=" mapView(data[0].agencydecides)">\n      {{data[0].agencydecides}}\n      <p>Nhấp để tìm vị trí gần bạn nhất!</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header text-wrap class="demuc">\n      Cơ quan hoặc người có thẩm quyền được uỷ quyền hoặc phân cấp thực hiện (nếu có):\n    </ion-card-header>\n    <ion-card-content>\n      {{data[0].authorizedperson}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header text-wrap class="demuc">\n      Cơ quan trực tiếp thực hiện TTHC:\n    </ion-card-header>\n    <ion-card-content>\n      {{data[0].agencydirectly}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header text-wrap class="demuc">\n      Cơ quan phối hợp (nếu có):\n    </ion-card-header>\n    <ion-card-content>\n      {{data[0].coordinatingagency}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header text-wrap class="demuc">\n      Cách thức thực hiện:\n    </ion-card-header>\n    <ion-card-content>\n      {{data[0].doing}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header text-wrap class="demuc">\n      Đối tượng thực hiện:\n    </ion-card-header>\n    <ion-card-content>\n      {{data[0].objectsimplemented}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header text-wrap class="demuc">\n      Kết quả của việc thực hiện TTHC:\n    </ion-card-header>\n    <ion-card-content>\n      {{data[0].result}}\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\detail\page-info-de\page-info-de.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__detailClass__["a" /* detailClass */]])
    ], PageInfoDePage);
    return PageInfoDePage;
}());

//# sourceMappingURL=page-info-de.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageDocsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detailClass__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the PageDocsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageDocsPage = (function () {
    function PageDocsPage(navCtrl, navParams, detailClass) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detailClass = detailClass;
        this.groups = [];
        this.shownGroup = null;
    }
    PageDocsPage.prototype.ngOnInit = function () {
        this.data = this.detailClass.getter().documents;
        console.log(this.data);
    };
    PageDocsPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    PageDocsPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    PageDocsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-page-docs',template:/*ion-inline-start:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\detail\page-docs\page-docs.html"*/'<!--\n  Generated template for the PageDocsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>pageDocs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Hồ sơ cần nộp và yêu cầu của thủ tục</h3>\n  <ion-card  *ngFor="let i of data">\n      <ion-card-header text-wrap>\n          {{ i.name }}\n      </ion-card-header>\n      <ion-card-content>\n          <a [href] = "\'http://dichvucong.binhduong.gov.vn/DVC/\'+i.downloaddocs">\n            <ion-icon name="md-cloud-download">\n            </ion-icon>\n          </a>\n      </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\detail\page-docs\page-docs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__detailClass__["a" /* detailClass */]])
    ], PageDocsPage);
    return PageDocsPage;
}());

//# sourceMappingURL=page-docs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detailClass__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_page_info_page_info__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_page_info_de_page_info_de__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_page_docs_page_docs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_procedures_service_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, proceduresService, detailClass, loadingCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proceduresService = proceduresService;
        this.detailClass = detailClass;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__detail_page_info_page_info__["a" /* PageInfoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__detail_page_docs_page_docs__["a" /* PageDocsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__detail_page_info_de_page_info_de__["a" /* PageInfoDePage */];
    }
    DetailPage.prototype.ngOnInit = function () {
        this.link = this.navParams.get('link');
        this.events.publish('link', { link: this.link });
        this.presentLoading();
    };
    DetailPage.prototype.presentLoading = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '<h5>Đang tải nội dung...</h5>'
        });
        loading.present();
        this.proceduresService.detail(this.link).subscribe(function (data) {
            _this.data = data;
            if (_this.data !== null) {
                _this.detailClass.setter(_this.data);
                loading.dismiss();
            }
        });
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\detail\detail.html"*/'\n<ion-header>\n    <ion-navbar primary>\n    <ion-title>Quay về</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-tabs selectedIndex="3">\n  <ion-tab [root]="tab1Root" tabTitle="Thủ tục" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Qui định" tabIcon="bookmarks"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Chi tiết" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n\n<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>Chi tiết thủ tục</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides>\n    <ion-slide>\n      <h1>Slide 1</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>Slide 2</h1>\n    </ion-slide>\n    <ion-slide>\n      <h1>Slide  </h1>\n    </ion-slide>\n  </ion-slides>\n</ion-content> -->\n'/*ion-inline-end:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__service_procedures_service_service__["a" /* ProceduresServiceService */],
            __WEBPACK_IMPORTED_MODULE_0__detailClass__["a" /* detailClass */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* Events */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_procedures_service_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__ = __webpack_require__(50);
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
 * Generated class for the FieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FieldPage = (function () {
    function FieldPage(navCtrl, navParams, proceduresService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.proceduresService = proceduresService;
        this.loadingCtrl = loadingCtrl;
        this.data = [];
    }
    FieldPage.prototype.ngOnInit = function () {
        this.namePage = this.navParams.get('query');
        this.presentLoading();
    };
    FieldPage.prototype.presentLoading = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '<h5>Đang tải nội dung...</h5>'
        });
        loading.present();
        this.proceduresService.index().subscribe(function (data) {
            _this.data = data.content.filter(function (element) {
                // if (element.title === this.namePage) {
                //   this.data.push(element);
                // }
                return (element.title.toLowerCase().indexOf(_this.namePage.toLowerCase()) > -1);
            });
            loading.dismiss();
        });
    };
    FieldPage.prototype.viewDetail = function (link) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__detail_detail__["a" /* DetailPage */], {
            link: link
        });
    };
    FieldPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-field',template:/*ion-inline-start:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\field\field.html"*/'<!--\n  Generated template for the FieldPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ namePage }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines>\n    <ion-item *ngFor="let i of data" (click)="viewDetail(i.linkdetail)" text-wrap>\n      <ion-icon name="briefcase" item-start></ion-icon>\n      {{ i.title }}\n      <p>{{ i.field }}</p>\n      <ion-icon name="arrow-dropright" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\field\field.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__service_procedures_service_service__["a" /* ProceduresServiceService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]])
    ], FieldPage);
    return FieldPage;
}());

//# sourceMappingURL=field.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_procedures_service_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field_field__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, re, el, service) {
        this.navCtrl = navCtrl;
        this.re = re;
        this.el = el;
        this.service = service;
        this.data = this.query;
    }
    HomePage.prototype.ngOnInit = function () {
        // let cnt = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
        // this.header = cnt.getElementsByClassName('bg')[0];
        // this.main_list = cnt.getElementsByClassName('main-list')[0];
        // this.main_cnt = cnt.getElementsByClassName('main-cnt')[0];
        // this.main_search = cnt.getElementsByClassName('search')[0];
    };
    HomePage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__field_field__["a" /* FieldPage */], {
            query: this.myInput
        });
    };
    // getItems(ev) {
    //   // Reset items back to all of the items
    //   // set val to the value of the ev target
    //   var val = ev.target.value;
    //   // if the value is an empty string don't filter the items
    //   if (val && val.trim() != '') {
    //     this.service.index().subscribe(data => {
    //     this.data = this.data.filter((item) => {
    //       // this.re.setElementStyle(this.header, 'visibility', 'hidden');
    //       // this.re.setElementStyle(this.main_cnt, 'visibility', 'hidden');
    //       // this.re.setElementStyle(this.main_list,'visibility', 'visible');
    //       // this.re.setElementStyle(this.main_list,'margin-top', '-70%');
    //       // this.re.setElementStyle(this.main_search,'margin-top', '-65%');
    //       return (item.field.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //     });
    //   });
    //   } else {
    //     this.re.setElementStyle(this.main_search,'margin-top', '0%');
    //     this.re.setElementStyle(this.header, 'visibility', 'visible');
    //     this.re.setElementStyle(this.main_cnt, 'visibility', 'visible')
    //     this.re.setElementStyle(this.main_list,'visibility', 'hidden');
    //   }
    // }
    HomePage.prototype.viewList = function (name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__field_field__["a" /* FieldPage */], {
            name: name
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      TRA CỨU TTHC\n    </ion-title>\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content parallax>\n  <div class="bg"></div>\n  <ion-searchbar placeholder="Tìm kiếm lĩnh vực thủ tục" [(ngModel)]="myInput"></ion-searchbar>\n  <button class="search" (click)="search()">Tìm kiếm</button>\n  <div class="main-cnt">\n    <img src="../assets/imgs/logobd.jpg" class="dp">\n\n\n\n\n    <div class="tag">\n        <button ion-button color="blues" round >Khiếu nại</button>\n        <button ion-button round>Chuyển nhượng</button>\n        <button ion-button color="secondary" round>Cấp giấy phép</button>\n        <button ion-button color="danger" round>Đăng ký hợp đồng</button>\n        <button ion-button color="dark" round>Chứng thực hợp đồng</button>\n    </div>\n    <!-- <ion-list no-lines class="main-list">\n      <ion-item *ngFor="let i of data" (click)="viewList(i.field)">\n        <ion-icon name="home" item-start></ion-icon>\n        {{ i.field }}\n        <p>{{ i.title }}</p>\n        <ion-icon name="arrow-dropright" item-end></ion-icon>\n      </ion-item>\n    </ion-list> -->\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__service_procedures_service_service__["a" /* ProceduresServiceService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_maps_maps__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_detail_detailClass__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_detail_page_info_page_info__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_detail_page_info_de_page_info_de__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_detail_page_docs_page_docs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_field_field__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_procedures_service_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_parallax_parallax__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_field_field__["a" /* FieldPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_detail_page_docs_page_docs__["a" /* PageDocsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_detail_page_info_de_page_info_de__["a" /* PageInfoDePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_detail_page_info_page_info__["a" /* PageInfoPage */],
                __WEBPACK_IMPORTED_MODULE_8__directives_parallax_parallax__["a" /* ParallaxDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_field_field__["a" /* FieldPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_detail_page_docs_page_docs__["a" /* PageDocsPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_detail_page_info_de_page_info_de__["a" /* PageInfoDePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_detail_page_info_page_info__["a" /* PageInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_10__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__service_procedures_service_service__["a" /* ProceduresServiceService */],
                __WEBPACK_IMPORTED_MODULE_1__pages_detail_detailClass__["a" /* detailClass */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxDirective = (function () {
    function ParallaxDirective(el, re) {
        this.el = el;
        this.re = re;
    }
    ParallaxDirective.prototype.ngOnInit = function () {
        var cnt = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = cnt.getElementsByClassName('bg')[0];
        this.main_cnt = cnt.getElementsByClassName('main-cnt')[0];
        this.re.setElementStyle(this.header, 'webTransformOrigin', 'center bottom');
        this.re.setElementStyle(this.header, 'background-size', 'cover');
        this.re.setElementStyle(this.main_cnt, 'position', 'absolute');
    };
    ParallaxDirective.prototype.onCntscroll = function (ev) {
        var _this = this;
        console.log(ev);
        ev.domWrite(function () {
            _this.update(ev);
        });
    };
    ParallaxDirective.prototype.update = function (ev) {
        if (ev.scrollTop > 0) {
            this.ta = ev.scrollTop / 2;
        }
        this.re.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.ta + 'px, 0) scale(1,1)');
    };
    ParallaxDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[parallax]',
            host: {
                '(ionScroll)': 'onCntscroll($event)',
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ParallaxDirective);
    return ParallaxDirective;
}());

//# sourceMappingURL=parallax.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\homan\Desktop\TraCuuThongTinHanhChinh\appClient\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return detailClass; });
var detailClass = (function () {
    function detailClass() {
    }
    detailClass.prototype.setter = function (data) {
        this.data = data;
    };
    detailClass.prototype.getter = function () {
        return this.data;
    };
    return detailClass;
}());

//# sourceMappingURL=detailClass.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProceduresServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProceduresServiceService = (function () {
    function ProceduresServiceService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:3000';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    ProceduresServiceService.prototype.index = function () {
        return this._http.get(this.baseUrl + '/all', this.options)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    ProceduresServiceService.prototype.detail = function (linkdetail) {
        return this._http.get(this.baseUrl + '/?' + linkdetail, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    ProceduresServiceService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error || 'SERVER ERROR');
    };
    ProceduresServiceService.prototype.searchQuery = function (name) {
        var _this = this;
        return this.index().forEach(function (element) {
            if (name === element.title) {
                _this.data.push(name);
            }
        });
    };
    ProceduresServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProceduresServiceService);
    return ProceduresServiceService;
}());

//# sourceMappingURL=procedures-service.service.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map