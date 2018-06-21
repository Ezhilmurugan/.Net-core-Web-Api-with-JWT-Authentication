(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazyload-lazyload-module"],{

/***/ "./src/app/lazyload/lazyload-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/lazyload/lazyload-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LazyloadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyloadRoutingModule", function() { return LazyloadRoutingModule; });
/* harmony import */ var _lazyload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyload.component */ "./src/app/lazyload/lazyload.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'load-me', component: _lazyload_component__WEBPACK_IMPORTED_MODULE_0__["LazyloadComponent"] },
    { path: '', component: _lazyload_component__WEBPACK_IMPORTED_MODULE_0__["LazyloadComponent"] }
];
var LazyloadRoutingModule = /** @class */ (function () {
    function LazyloadRoutingModule() {
    }
    LazyloadRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LazyloadRoutingModule);
    return LazyloadRoutingModule;
}());



/***/ }),

/***/ "./src/app/lazyload/lazyload.component.html":
/*!**************************************************!*\
  !*** ./src/app/lazyload/lazyload.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lazyload works!\n</p>\n"

/***/ }),

/***/ "./src/app/lazyload/lazyload.component.scss":
/*!**************************************************!*\
  !*** ./src/app/lazyload/lazyload.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lazyload/lazyload.component.ts":
/*!************************************************!*\
  !*** ./src/app/lazyload/lazyload.component.ts ***!
  \************************************************/
/*! exports provided: LazyloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyloadComponent", function() { return LazyloadComponent; });
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

var LazyloadComponent = /** @class */ (function () {
    function LazyloadComponent() {
    }
    LazyloadComponent.prototype.ngOnInit = function () {
    };
    LazyloadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lazyload',
            template: __webpack_require__(/*! ./lazyload.component.html */ "./src/app/lazyload/lazyload.component.html"),
            styles: [__webpack_require__(/*! ./lazyload.component.scss */ "./src/app/lazyload/lazyload.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LazyloadComponent);
    return LazyloadComponent;
}());



/***/ }),

/***/ "./src/app/lazyload/lazyload.module.ts":
/*!*********************************************!*\
  !*** ./src/app/lazyload/lazyload.module.ts ***!
  \*********************************************/
/*! exports provided: LazyloadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyloadModule", function() { return LazyloadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lazyload_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazyload-routing.module */ "./src/app/lazyload/lazyload-routing.module.ts");
/* harmony import */ var _lazyload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazyload.component */ "./src/app/lazyload/lazyload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LazyloadModule = /** @class */ (function () {
    function LazyloadModule() {
    }
    LazyloadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _lazyload_routing_module__WEBPACK_IMPORTED_MODULE_2__["LazyloadRoutingModule"]
            ],
            declarations: [_lazyload_component__WEBPACK_IMPORTED_MODULE_3__["LazyloadComponent"]]
        })
    ], LazyloadModule);
    return LazyloadModule;
}());



/***/ })

}]);
//# sourceMappingURL=lazyload-lazyload-module.js.map