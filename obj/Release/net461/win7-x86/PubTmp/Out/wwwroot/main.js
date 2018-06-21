(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./lazyload/lazyload.module": [
		"./src/app/lazyload/lazyload.module.ts",
		"lazyload-lazyload-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_shared/_auth/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_shared/_auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/_shared/_auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // tslint:disable-next-line:prefer-const
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_shared/_auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_shared/_auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        this.isLoggedIn = false;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    AuthService.prototype.login = function () {
        // tslint:disable-next-line:prefer-const
        var data = { 'username': this.userName,
            'password': this.password,
            'grant_type': 'password',
            'refresh_token': ' ',
            'client_id': '100',
            'client_secret': '888',
        };
        // tslint:disable-next-line:prefer-const
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        // return this.httpClient.post(this.baseUrl + '/token/auth', data, { headers: reqHeader });
        return this.httpClient.post(this.baseUrl + '/token/auth', data, { headers: reqHeader });
        // return of(true).pipe(
        //   tap(val => (this.userName === 'admin' && this.password === 'admin') ? this.isLoggedIn = true :
        //   this.isLoggedIn = false )
        // );
    };
    AuthService.prototype.logout = function () {
        this.userName = '';
        this.password = '';
        this.isLoggedIn = false;
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.getToken();
        // return a boolean reflecting
        // whether or not the token is expired
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["tokenNotExpired"])(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_shared/_interceptors/InterceptorModule.ts":
/*!************************************************************!*\
  !*** ./src/app/_shared/_interceptors/InterceptorModule.ts ***!
  \************************************************************/
/*! exports provided: RequestInterceptor, InterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorModule", function() { return InterceptorModule; });
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_auth/auth.service */ "./src/app/_shared/_auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(auth) {
        this.auth = auth;
    }
    RequestInterceptor.prototype.intercept = function (request, next) {
        request.headers.set('Access-Control-Allow-Origin', "$(environment.baseUrl)");
        if (request.url.indexOf('auth')) {
            return next.handle(request);
        }
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.getToken()
            }
        });
        return next.handle(request);
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());

var InterceptorModule = /** @class */ (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: RequestInterceptor, multi: true }
            ]
        })
    ], InterceptorModule);
    return InterceptorModule;
}());



/***/ }),

/***/ "./src/app/admin/admin-dashboard.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/admin-dashboard.component.ts ***!
  \****************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <p>Dashboard</p>\n  "
        })
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_shared/_auth/auth-guard.service */ "./src/app/_shared/_auth/auth-guard.service.ts");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-dashboard.component */ "./src/app/admin/admin-dashboard.component.ts");
/* harmony import */ var _manage_crises_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-crises.component */ "./src/app/admin/manage-crises.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        children: [
            {
                path: '',
                children: [
                    { path: 'crises', component: _manage_crises_component__WEBPACK_IMPORTED_MODULE_2__["ManageCrisesComponent"] },
                    { path: '', component: _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardComponent"] },
                ]
            }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  admin works!\n</p>\n<nav>\n  <a routerLink=\"./\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\n  <a routerLink=\"./crises\" routerLinkActive=\"active\">Manage Crises</a>\n  <a routerLink=\"./heroes\" routerLinkActive=\"active\">Manage Heroes</a>\n  \n</nav>\n<button type=\"button\" class=\"btn btn-primary\"  type=\"submit\" (click)=\"logout()\">Logout</button>\n<button routerLink=\"/lazy/load-me\"></button> -->\n <app-nav-bar-top> </app-nav-bar-top>   \n\n<br />\n\n<div class=\"container-fluid\">\n<div class=\"accordion\" id=\"accordionExample\">\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingOne\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n          Transfer Network/Hub Outbound\n        </button>\n      </h5>\n    </div>\n\n    <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n      <div class=\"card-body\">\n       <app-transfer-network> </app-transfer-network> \n         \n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingTwo\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n          In transit Dashboards\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n      <div class=\"card-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" id=\"headingThree\">\n      <h5 class=\"mb-0\">\n        <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n          Utility Management\n        </button>\n      </h5>\n    </div>\n    <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n      <div class=\"card-body\">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <router-outlet></router-outlet> -->\n  \n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  height: 20%;\n  font-size: smaller;\n  padding: 0; }\n\n.navbar-brand {\n  color: #fff;\n  font-size: small; }\n\n.btn {\n  font-size: 0.8rem; }\n\n.dropdown-menu {\n  left: 5%;\n  min-width: 4rem;\n  padding: 0.1rem 0;\n  font-size: 0.7rem; }\n\n.card-body {\n  padding: 0.25rem; }\n\n#collapseOne .card-body,\n#collapseTwo .card-body,\n#collapseThree .card-body {\n  min-height: 75vh; }\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_shared/_auth/auth.service */ "./src/app/_shared/_auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")],
        }),
        __metadata("design:paramtypes", [_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _nav_bar_top_nav_bar_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../nav-bar-top/nav-bar-top.component */ "./src/app/nav-bar-top/nav-bar-top.component.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/_auth/auth-guard.service */ "./src/app/_shared/_auth/auth-guard.service.ts");
/* harmony import */ var _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dashboard.component */ "./src/app/admin/admin-dashboard.component.ts");
/* harmony import */ var _manage_crises_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-crises.component */ "./src/app/admin/manage-crises.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _transfer_network_transfer_network_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transfer-network/transfer-network.component */ "./src/app/admin/transfer-network/transfer-network.component.ts");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-gauge */ "./node_modules/ngx-gauge/ngx-gauge.es5.js");
/* harmony import */ var angular2_justgage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-justgage */ "./node_modules/angular2-justgage/dist/index.js");
/* harmony import */ var angular2_justgage__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_justgage__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"],
                ngx_gauge__WEBPACK_IMPORTED_MODULE_10__["NgxGaugeModule"],
                angular2_justgage__WEBPACK_IMPORTED_MODULE_11__["JustgageModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__["NgxChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["PopoverModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__["BsDropdownModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
                _manage_crises_component__WEBPACK_IMPORTED_MODULE_4__["ManageCrisesComponent"],
                _admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"],
                _transfer_network_transfer_network_component__WEBPACK_IMPORTED_MODULE_9__["TransferNetworkComponent"],
                _nav_bar_top_nav_bar_top_component__WEBPACK_IMPORTED_MODULE_1__["NavBarTopComponent"],
            ],
            providers: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/manage-crises.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/manage-crises.component.ts ***!
  \**************************************************/
/*! exports provided: ManageCrisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCrisesComponent", function() { return ManageCrisesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ManageCrisesComponent = /** @class */ (function () {
    function ManageCrisesComponent() {
    }
    ManageCrisesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <p>Manage your crises here</p>\n  "
        })
    ], ManageCrisesComponent);
    return ManageCrisesComponent;
}());



/***/ }),

/***/ "./src/app/admin/transfer-network/barChartData.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/transfer-network/barChartData.ts ***!
  \********************************************************/
/*! exports provided: single, multi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
// tslint:disable-next-line:no-var-keyword
var single = [
    {
        'name': 'Germany',
        'value': 123456789
    },
    {
        'name': 'USA',
        'value': 123456789
    },
    {
        'name': 'France',
        'value': 123456789
    },
    {
        'name': 'Germany1',
        'value': 123656789
    },
    {
        'name': 'USA1',
        'value': 123456789
    },
    {
        'name': 'France1',
        'value': 123456789
    }, {
        'name': 'Germany2',
        'value': 123456789
    },
    {
        'name': 'USA2',
        'value': 123456789
    },
    {
        'name': 'France2',
        'value': 123456789
    }
];
// tslint:disable-next-line:no-var-keyword
var multi = [
    {
        'name': 'Germany',
        'series': [
            {
                'name': '2010',
                'value': 7300000
            },
            {
                'name': '2011',
                'value': 8940000
            },
            {
                'name': '2012',
                'value': 9940000
            }
        ]
    },
    {
        'name': 'Germany1',
        'series': [
            {
                'name': '2010',
                'value': 7300000
            },
            {
                'name': '2011',
                'value': 8940000
            },
            {
                'name': '2012',
                'value': 9940000
            }
        ]
    },
    {
        'name': 'USA',
        'series': [
            {
                'name': '2010',
                'value': 7870000
            },
            {
                'name': '2011',
                'value': 8270000
            }
        ]
    },
    {
        'name': 'USA1',
        'series': [
            {
                'name': '2010',
                'value': 7870000
            },
            {
                'name': '2011',
                'value': 8270000
            }
        ]
    },
    {
        'name': 'France',
        'series': [
            {
                'name': '2010',
                'value': 5000002
            },
            {
                'name': '2011',
                'value': 5800000
            }
        ]
    },
    {
        'name': 'France1',
        'series': [
            {
                'name': '2010',
                'value': 5000002
            },
            {
                'name': '2011',
                'value': 5800000
            }
        ]
    },
    {
        'name': 'Germany2',
        'series': [
            {
                'name': '2010',
                'value': 7300000
            },
            {
                'name': '2011',
                'value': 8940000
            },
            {
                'name': '2012',
                'value': 9940000
            }
        ]
    },
    {
        'name': 'France2',
        'series': [
            {
                'name': '2010',
                'value': 5000002
            },
            {
                'name': '2011',
                'value': 5800000
            }
        ]
    },
    {
        'name': 'USA2',
        'series': [
            {
                'name': '2010',
                'value': 7300000
            },
            {
                'name': '2011',
                'value': 8940000
            },
            {
                'name': '2012',
                'value': 9940000
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/admin/transfer-network/transfer-network.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/transfer-network/transfer-network.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"par-container\">\n\n<div class=\"row fst-row\">\n  <div class=\"col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 div-gauge\">\n\n    <!-- <ngx-gauge [type]=\"gaugeType\" [value]=\"gaugeValue\" [label]=\"gaugeLabel\" [size]=\"size\" [thick]=\"thick\">\n</ngx-gauge> -->\n    <div>\n      <canvas id=\"gauge_1\" #gauge_1 width=\"130\"></canvas>\n    </div>\n    <div>\n      <canvas id=\"gauge_2\" #gauge_2 width=\"130\"></canvas>\n    </div>\n  </div>\n\n  <div class=\"col-10 col-md-10 col-sm-10 col-lg-10 col-xl-10 row-yard\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Hub Outbound Loaded:In Yard\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-3 div-second-gauge\">\n                <canvas id=\"gauge_4\" #gauge_4 width=\"125\" height=\"75\"></canvas>\n                <p>Chino Yard </p>\n                <canvas id=\"gauge_5\" #gauge_5 width=\"125\" height=\"75\"></canvas>\n                <p>Loudan Yard </p>\n                <canvas id=\"gauge_6\" #gauge_6 width=\"125\" height=\"75\"></canvas>\n                <p>Mcc Yard </p>\n\n              </div>\n              <div class=\"col-9\">\n\n                <ngx-datatable class=\"bootstrap ngx-datatable \" [rows]=\"rows\" columnMode=\"force\" [headerHeight]=\"50\" [footerHeight]=\"0\"\n                  [rowHeight]=\"35\" [scrollbarV]=\"true\" [scrollbarH]=\"true\">\n                  <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\n                  <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\n                  <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n                  <ngx-datatable-column name=\"City\" [width]=\"300\" prop=\"address.city\"></ngx-datatable-column>\n                  <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\"></ngx-datatable-column>\n                </ngx-datatable>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Hub Outbound Loaded:In Yard\n          </div>\n          <div class=\"card-body\">\n\n            <ngx-datatable class=\"bootstrap ngx-datatable \" [rows]=\"rows\" columnMode=\"force\" [headerHeight]=\"50\" [footerHeight]=\"0\"\n              [rowHeight]=\"35\" [scrollbarV]=\"true\" [scrollbarH]=\"true\">\n              <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\n              <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\n              <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n              <ngx-datatable-column name=\"City\" [width]=\"300\" prop=\"address.city\"></ngx-datatable-column>\n              <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\"></ngx-datatable-column>\n            </ngx-datatable>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row second-row\">\n  <p>Transfer ASN Summary By Status</p>\n</div>\n\n<div class=\"row third-row\" style=\"min-height: 26vh;\">\n  <div class=\"col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 third-gauge\">\n    <div>\n      <canvas id=\"gauge_3\" #gauge_3 width=\"130\"></canvas>\n    </div>\n\n  </div>\n  <div class=\"col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10\">\n\n    <div  class=\"ngx-chart\">\n      <ngx-charts-bar-vertical-stacked \n       [scheme]=\"colorScheme\" [results]=\"multi\" [gradient]=\"gradient\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\"\n        [legend]=\"showLegend\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\n        [yAxisLabel]=\"yAxisLabel\" (select)=\"onSelect($event)\">\n      </ngx-charts-bar-vertical-stacked>\n\n    </div>\n\n\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/transfer-network/transfer-network.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/transfer-network/transfer-network.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* css for global styling */\n.par-container {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n.card {\n  font-size: 0.9rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important; }\n.col-5 {\n  padding-right: 3px;\n  padding-left: 3px; }\n.card-body {\n  padding: 0.25rem; }\n.third-gauge {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: flex-end; }\n.div-second-gauge {\n  text-align: center;\n  font-size: 0.9rem; }\n.row-yard {\n  flex: 0 0 89%;\n  max-width: 100%; }\n.row-yard .card {\n    min-height: 100%; }\n.asn-text p {\n  text-align: center; }\n.ngx-chart {\n  position: absolute;\n  height: 26vh;\n  min-height: 100%;\n  min-width: 100%; }\n.fst-row {\n  position: relative;\n  min-height: 20vh;\n  max-height: 40vh;\n  overflow-y: auto; }\n@media (min-width: 1200px) {\n  .col-xl-2 .div-gauge {\n    max-width: 10.5%; } }\n@media (min-width: 992px) {\n  .col-lg-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 10.66666667%; } }\n@media (min-width: 768px) {\n  .col-md-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 10.66666667%; } }\n"

/***/ }),

/***/ "./src/app/admin/transfer-network/transfer-network.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/transfer-network/transfer-network.component.ts ***!
  \**********************************************************************/
/*! exports provided: TransferNetworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferNetworkComponent", function() { return TransferNetworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _barChartData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./barChartData */ "./src/app/admin/transfer-network/barChartData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransferNetworkComponent = /** @class */ (function () {
    function TransferNetworkComponent() {
        // secondsCounter$ = interval(1000);
        // gauge
        this.opts = {
            angle: -0.22,
            lineWidth: 0.34,
            radiusScale: 0.66,
            pointer: {
                length: 0.6,
                strokeWidth: 0.035,
                color: '#000000' // Fill color
            },
            limitMax: false,
            limitMin: false,
            colorStart: '#6FADCF',
            colorStop: '#8FC0DA',
            strokeColor: '#E0E0E0',
            generateGradient: true,
            highDpiSupport: true,
        };
        this.opts_2 = {
            angle: 0,
            lineWidth: 0.23,
            radiusScale: 0.7,
            pointer: {
                length: 0.53,
                strokeWidth: 0,
                color: '#000000' // Fill color
            },
            limitMax: false,
            limitMin: false,
            colorStart: '#6FADCF',
            colorStop: '#8FC0DA',
            strokeColor: '#E0E0E0',
            generateGradient: true,
            highDpiSupport: true,
            fontSize: 12
        };
        this.gaugeType = 'arch';
        this.gaugeValue = 28.3;
        this.gaugeLabel = 'Speed';
        this.size = 100;
        this.thick = 10;
        this.gaugeValue_2 = 79.3;
        this.thresholdConfig = {
            '0': { color: 'green' },
            '40': { color: 'orange' },
            '75.5': { color: 'red' }
        };
        this.sectors = [{
                color: '#ff6600',
                lo: 0,
                hi: 24.999
            }, {
                color: '#ffD700',
                lo: 25,
                hi: 54.999
            }, {
                color: '#66ff33',
                lo: 55,
                hi: 100
            }];
        this.default = {
            donut: true,
            counter: true,
            hideInnerShadow: false,
            titlePosition: 'above',
            titleFontColor: '#333333',
            pointer: true,
        };
        this.options = {
            id: 'conversion',
            min: 0,
            gaugeWidthScale: 0.6,
            title: 'User conversion',
            defaults: this.default,
            targetValue: 15,
            customSectors: this.sectors
        };
        this.max = 100;
        this.value = 45;
        this.view = [800, 300];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#F08080', '#F5B041', '#16A085', '#AAAAAA']
        };
        // data table data
        this.response = '[{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}},{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}},{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}},{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}},{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}},{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}},{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}},{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}},{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}},{"id": 0,"name": "Ramsey Cummings","gender": "male","age": 52,"address": {"state": "South Carolina","city": "Glendale"}}]';
        Object.assign(this, { single: _barChartData__WEBPACK_IMPORTED_MODULE_1__["single"], multi: _barChartData__WEBPACK_IMPORTED_MODULE_1__["multi"] });
        this.rows = JSON.parse(this.response);
    }
    TransferNetworkComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    TransferNetworkComponent.prototype.create = function () {
        this.Gauge_1 = new Gauge(this.gauge_1.nativeElement).setOptions(this.opts); // create sexy gauge!
        this.Gauge_2 = new Gauge(this.gauge_2.nativeElement).setOptions(this.opts);
        this.Gauge_3 = new Gauge(this.gauge_3.nativeElement).setOptions(this.opts);
        this.Gauge_4 = new Gauge(this.gauge_4.nativeElement).setOptions(this.opts_2);
        this.Gauge_5 = new Gauge(this.gauge_5.nativeElement).setOptions(this.opts_2);
        this.Gauge_6 = new Gauge(this.gauge_6.nativeElement).setOptions(this.opts_2);
    };
    TransferNetworkComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
    };
    TransferNetworkComponent.prototype.ngOnInit = function () {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
        // this.gauge.setOptions(this.opts);
        console.log('ngOninit');
        this.create();
        //
        this.Gauge_1.maxValue = 3000; // set max gauge value
        this.Gauge_1.setMinValue(0); // Prefer setter over gauge.minValue = 0
        this.Gauge_1.animationSpeed = 43; // set animation speed (32 is default value)
        this.Gauge_1.set(2500);
        // this.secondsCounter$.subscribe(n =>
        //   this.Gauge_1.set(n * 100)
        // );
        // set actual value
        this.Gauge_2.maxValue = 3000; // set max gauge value
        this.Gauge_2.setMinValue(0); // Prefer setter over gauge.minValue = 0
        this.Gauge_2.animationSpeed = 43; // set animation speed (32 is default value)
        this.Gauge_2.set(2500); // set actual value
        this.Gauge_3.maxValue = 3000; // set max gauge value
        this.Gauge_3.setMinValue(0); // Prefer setter over gauge.minValue = 0
        this.Gauge_3.animationSpeed = 43; // set animation speed (32 is default value)
        this.Gauge_3.set(2500); // set actual value
        this.Gauge_4.maxValue = 3000; // set max gauge value
        this.Gauge_4.setMinValue(0); // Prefer setter over gauge.minValue = 0
        this.Gauge_4.animationSpeed = 43; // set animation speed (32 is default value)
        this.Gauge_4.set(2500); // set actual value
        this.Gauge_5.maxValue = 3000; // set max gauge value
        this.Gauge_5.setMinValue(0); // Prefer setter over gauge.minValue = 0
        this.Gauge_5.animationSpeed = 43; // set animation speed (32 is default value)
        this.Gauge_5.set(2500); // set actual value
        this.Gauge_6.maxValue = 3000; // set max gauge value
        this.Gauge_6.setMinValue(0); // Prefer setter over gauge.minValue = 0
        this.Gauge_6.animationSpeed = 43; // set animation speed (32 is default value)
        this.Gauge_6.set(2500); // set actual value
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gauge_1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TransferNetworkComponent.prototype, "gauge_1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gauge_2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TransferNetworkComponent.prototype, "gauge_2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gauge_3'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TransferNetworkComponent.prototype, "gauge_3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gauge_4'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TransferNetworkComponent.prototype, "gauge_4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gauge_5'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TransferNetworkComponent.prototype, "gauge_5", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gauge_6'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TransferNetworkComponent.prototype, "gauge_6", void 0);
    TransferNetworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transfer-network',
            template: __webpack_require__(/*! ./transfer-network.component.html */ "./src/app/admin/transfer-network/transfer-network.component.html"),
            moduleId: module.i.toString(),
            styles: [__webpack_require__(/*! ./transfer-network.component.scss */ "./src/app/admin/transfer-network/transfer-network.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TransferNetworkComponent);
    return TransferNetworkComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'lazy',
        loadChildren: './lazyload/lazyload.module#LazyloadModule'
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  font-size: .8rem !important; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'raja';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_interceptors_InterceptorModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_shared/_interceptors/InterceptorModule */ "./src/app/_shared/_interceptors/InterceptorModule.ts");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_shared/_auth/auth.service */ "./src/app/_shared/_auth/auth.service.ts");
/* harmony import */ var _login_login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _dash_content_dash_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-content/dash-content.module */ "./src/app/dash-content/dash-content.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"],
                _dash_content_dash_content_module__WEBPACK_IMPORTED_MODULE_4__["DashContentModule"],
                _login_login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _shared_interceptors_InterceptorModule__WEBPACK_IMPORTED_MODULE_0__["InterceptorModule"]
            ],
            providers: [
                _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dash-content/dash-content-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dash-content/dash-content-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashContentRoutingModule", function() { return DashContentRoutingModule; });
/* harmony import */ var _dash_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-content.component */ "./src/app/dash-content/dash-content.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'dash',
        component: _dash_content_component__WEBPACK_IMPORTED_MODULE_0__["DashContentComponent"]
    },
];
var DashContentRoutingModule = /** @class */ (function () {
    function DashContentRoutingModule() {
    }
    DashContentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashContentRoutingModule);
    return DashContentRoutingModule;
}());



/***/ }),

/***/ "./src/app/dash-content/dash-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dash-content/dash-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dash-content works!\n</p>\n"

/***/ }),

/***/ "./src/app/dash-content/dash-content.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dash-content/dash-content.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dash-content/dash-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dash-content/dash-content.component.ts ***!
  \********************************************************/
/*! exports provided: DashContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashContentComponent", function() { return DashContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashContentComponent = /** @class */ (function () {
    function DashContentComponent() {
    }
    DashContentComponent.prototype.ngOnInit = function () {
    };
    DashContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash-content',
            template: __webpack_require__(/*! ./dash-content.component.html */ "./src/app/dash-content/dash-content.component.html"),
            styles: [__webpack_require__(/*! ./dash-content.component.scss */ "./src/app/dash-content/dash-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashContentComponent);
    return DashContentComponent;
}());



/***/ }),

/***/ "./src/app/dash-content/dash-content.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/dash-content/dash-content.module.ts ***!
  \*****************************************************/
/*! exports provided: DashContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashContentModule", function() { return DashContentModule; });
/* harmony import */ var _dash_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dash-content.component */ "./src/app/dash-content/dash-content.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dash_content_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dash-content-routing.module */ "./src/app/dash-content/dash-content-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashContentModule = /** @class */ (function () {
    function DashContentModule() {
    }
    DashContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dash_content_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashContentRoutingModule"]
            ],
            declarations: [
                _dash_content_component__WEBPACK_IMPORTED_MODULE_0__["DashContentComponent"]
            ]
        })
    ], DashContentModule);
    return DashContentModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n   <router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { AuthService } from './../auth.service';
// import { AuthGuard } from './../auth-guard.service';



var loginRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(loginRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n <div class=\"container login h-100 \">\n\n  <div class=\"row h-100 justify-content-center align-items-center w-100  \">\n  \n    <div class=\"col-sm-6 col-md-4  justify-content-center \">\n   \n      <div class=\"card border-info text-center\">\n        <div class=\"card-header\">\n          Sign in to continue\n        </div>\n        <div class=\"card-body\">\n          <img src=\"https://placeimg.com/128/128/tech/sepia\">\n          <h4 class=\"text-center\">SCMS Sign On</h4>\n          <form class=\"form-signin\" [formGroup]=\"loginForm\">\n           <div *ngIf=\"messageValid\" >\n            <p style=\"color : red\">{{messageValid}}</p>\n            </div>\n            <input type=\"text\" class=\"form-control mb-2\" placeholder=\"UserName\" required autofocus formControlName=\"userName\">\n            <input type=\"password\" class=\"form-control mb-2\" placeholder=\"Password\" required formControlName=\"password\">\n           \n            <button class=\"btn btn-lg btn-primary btn-block mb-1\" type=\"submit\" (click)=\"login()\">Sign in</button>\n            <label class=\"checkbox float-left\">\n              <input type=\"checkbox\" value=\"remember-me\">\n              Remember me\n            </label>\n            <a href=\"#\" class=\"float-right\">Need help?</a>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n.border-info {\n  border-color: #c4d0d2 !important; }\n\n.form-control:focus {\n  border-color: #ACAAAC;\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(206, 200, 206, 0.5); }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../_shared/_auth/auth.service */ "./src/app/_shared/_auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            userName: '',
            password: ''
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // console.log('form value'+ JSON.stringify(this.loginForm.value) + this.loginForm.valid);
        this.authService.userName = this.loginForm.value.userName;
        this.authService.password = this.loginForm.value.password;
        this.authService.login().subscribe(function (data) {
            console.log('after Token' + JSON.stringify(data));
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                // tslint:disable-next-line:prefer-const
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/admin';
                // Redirect the user
                _this.router.navigate([redirect]);
            }
            else {
                _this.messageValid = 'Incorrect UserName OR Password';
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar-top/nav-bar-top.component.html":
/*!********************************************************!*\
  !*** ./src/app/nav-bar-top/nav-bar-top.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100\">\n\n\n  <nav class=\"navbar navbar-expand-lg  navbar-dark bg-dark\" id=\"main-navbar\">\n\n    <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"/assets/honda_icon.png\" width=\"75\" height=\"55\" class=\"d-inline-block align-top\" alt=\"\">\n\n  </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">\n          <b>TMS Administration</b>\n        </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Navigation </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Find\n          <span class=\"sr-only\">(current)</span>\n        </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">System</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Help</a>\n        </li>\n\n      </ul>\n       <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item fa-user\">\n          <a class=\"nav-link\" popover=\"Logout\" popoverTitle=\"Admin\" placement=\"bottom\" [outsideClick]=\"true\">\n          <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\n          </a>\n        </li>\n\n      </ul>\n\n\n    </div>\n  </nav>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n        </a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n          <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> &nbsp;Location\n        </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">01</a>\n            <a class=\"dropdown-item\" href=\"#\">02</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">03</a>\n          </div>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> &nbsp;Delivery Schedule\n          <span class=\"sr-only\">(current)</span>\n        </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-angle-double-down\" aria-hidden=\"true\"></i> &nbsp;Receiving Schedule</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-truck\" aria-hidden=\"true\"></i> &nbsp;Shipping Schedule</a>\n        </li>\n\n      </ul>\n\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/nav-bar-top/nav-bar-top.component.scss":
/*!********************************************************!*\
  !*** ./src/app/nav-bar-top/nav-bar-top.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  color: #fff;\n  font-size: small; }\n\n.btn {\n  font-size: 0.8rem; }\n\n.dropdown-menu {\n  left: 5%;\n  min-width: 4rem;\n  padding: 0.1rem 0;\n  font-size: 0.7rem; }\n\n.card-body {\n  padding: 0.25rem; }\n\n#main-navbar {\n  border-bottom: 3px solid red; }\n\n.fa-home {\n  font-size: 17px; }\n\n.fa-user {\n  padding-right: 3vw; }\n\n.fa-user .fa-user-circle-o {\n    font-size: 25px;\n    color: white; }\n\n.fa-user .fa-user-circle-o:hover {\n    color: gray; }\n"

/***/ }),

/***/ "./src/app/nav-bar-top/nav-bar-top.component.ts":
/*!******************************************************!*\
  !*** ./src/app/nav-bar-top/nav-bar-top.component.ts ***!
  \******************************************************/
/*! exports provided: NavBarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarTopComponent", function() { return NavBarTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarTopComponent = /** @class */ (function () {
    function NavBarTopComponent() {
    }
    NavBarTopComponent.prototype.ngOnInit = function () {
    };
    NavBarTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar-top',
            template: __webpack_require__(/*! ./nav-bar-top.component.html */ "./src/app/nav-bar-top/nav-bar-top.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar-top.component.scss */ "./src/app/nav-bar-top/nav-bar-top.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarTopComponent);
    return NavBarTopComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\nError 404: We are sorry, the requested page could not be found .\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://172.24.35.109:8080/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FX_UI\SCMSFx-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map