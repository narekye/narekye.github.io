webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./recipes/recipes.module": [
		"../../../../../src/app/recipes/recipes.module.ts",
		"recipes.module"
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
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__core_home_home_component__["a" /* HomeComponent */] },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: __WEBPACK_IMPORTED_MODULE_2__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes, {
                preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */]
            })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.loadedFeature = '';
    }
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: "AIzaSyB0Spl6zAgIjfCQPUzdtr8PnzufBm8bLg0",
            authDomain: "recipe-book-66513.firebaseapp.com"
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list_module__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list_module__["a" /* ShoppingListModule */],
            __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__["a" /* AuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/**
 * Created by narek.yegoryan on 27/12/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_3__signin_signin_component__["a" /* SigninComponent */] }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());
AuthRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(authRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AuthRoutingModule);

//# sourceMappingURL=auth-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
/**
 * Created by narek.yegoryan on 27/12/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__auth_routing_module__["a" /* AuthRoutingModule */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.token = null;
    }
    AuthService.prototype.signUpUser = function (email, password) {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.signInUser = function (email, password) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (response) {
            _this.router.navigate(['/']);
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getToken().then(function (token) { return _this.token = token; });
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser !== null) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getToken().then(function (token) { return _this.token = token; });
        }
        return this.token;
    };
    AuthService.prototype.logOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
        this.token = null;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-sm-offset-2\">\r\n      <form (ngSubmit)=\"onSignIn(f)\" #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Mail</label>\r\n          <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ngModel>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ngModel>\r\n        </div>\r\n        <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\">Sign in</button>\r\n      </form>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignIn = function (form) {
        var email = form.value.email;
        var pwd = form.value.password;
        this.authService.signInUser(email, pwd);
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SigninComponent);

var _a;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-sm-offset-2\">\r\n    <form (ngSubmit)=\"onSignUp(f)\" #f=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Mail</label>\r\n        <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ngModel>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ngModel>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign up</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignUp = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signUpUser(email, password);
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SignupComponent);

var _a;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("../../../../../src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/core/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_list_shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipes_recipe_service__ = __webpack_require__("../../../../../src/app/recipes/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
/**
 * Created by narek.yegoryan on 27/12/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_6__recipes_recipe_service__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_7__shared_data_storage_service__["a" /* DataStorageService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__["a" /* AuthGuard */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a style=\"cursor: pointer;\" class=\"navbar-brand\" routerLink=\"/\">Recipe book</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"/recipes\">Recipes</a>\r\n            </li>\r\n            <li routerLinkActive=\"active\">\r\n                <a routerLink=\"/shopping-list\">Shopping list</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class=\"nav navbar-right navbar-nav\">\r\n            <ng-template [ngIf]=\"!authService.isAuthenticated()\">\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/signup\">Register</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a routerLink=\"/signin\">Login</a>\r\n                </li>\r\n            </ng-template>\r\n\r\n            <li>\r\n                <a style=\"cursor: pointer\" (click)=\"onLogOut()\" *ngIf=\"authService.isAuthenticated()\" >Log out</a>\r\n            </li>\r\n\r\n            <li class=\"dropdown\" appDropdown *ngIf=\"authService.isAuthenticated()\">\r\n                <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\">Manage items\r\n                    <span class=\"caret\"></span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a style=\"cursor: pointer;\" (click)=\"onSaveData()\">Save data</a>\r\n                    </li>\r\n                    <li>\r\n                        <a style=\"cursor: pointer;\" (click)=\"onGetData()\">Fetch data</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dataStorage, authService) {
        this.dataStorage = dataStorage;
        this.authService = authService;
    }
    HeaderComponent.prototype.onSaveData = function () {
        this.dataStorage.storeRecipes().subscribe(function (response) {
            console.log(response);
        });
    };
    HeaderComponent.prototype.onGetData = function () {
        this.dataStorage.getRecipes();
    };
    HeaderComponent.prototype.onLogOut = function () {
        this.authService.logOut();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/core/header/header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Welcome to the recipe book</h2>\n"

/***/ }),

/***/ "../../../../../src/app/core/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/core/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipe.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(name, description, imagePath, ingredients) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.model.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_list_shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ingridient_model__ = __webpack_require__("../../../../../src/app/shared/ingridient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_model__ = __webpack_require__("../../../../../src/app/recipes/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeService = (function () {
    function RecipeService(slService) {
        this.slService = slService;
        this.recipesChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.recipeSelected = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["x" /* EventEmitter */]();
        this.recipes = [
            new __WEBPACK_IMPORTED_MODULE_3__recipe_model__["a" /* Recipe */]('Tasty Schnitzel', 'Just awesome', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg', [new __WEBPACK_IMPORTED_MODULE_1__shared_ingridient_model__["a" /* Ingridient */]('Meat', 1),
                new __WEBPACK_IMPORTED_MODULE_1__shared_ingridient_model__["a" /* Ingridient */]('French fries', 20)]),
            new __WEBPACK_IMPORTED_MODULE_3__recipe_model__["a" /* Recipe */]('Big fat burger', 'What else need to say?', 'https://d36wnpk9e3wo84.cloudfront.net/menu-item-images/400/web-butter-burger-deluxe-double.jpg', [new __WEBPACK_IMPORTED_MODULE_1__shared_ingridient_model__["a" /* Ingridient */]('Meat', 3),
                new __WEBPACK_IMPORTED_MODULE_1__shared_ingridient_model__["a" /* Ingridient */]('Buns', 2)])
        ];
    }
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice(); // get copy
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingedients) {
        this.slService.addIngredients(ingedients);
    };
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.setRecipes = function (recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    };
    return RecipeService;
}());
RecipeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shopping_list_shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shopping_list_shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object])
], RecipeService);

var _a;
//# sourceMappingURL=recipe.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipe_service__ = __webpack_require__("../../../../../src/app/recipes/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var baseUrl = 'https://recipe-book-66513.firebaseio.com/';
var DataStorageService = (function () {
    function DataStorageService(http, recipeService, authService) {
        this.http = http;
        this.recipeService = recipeService;
        this.authService = authService;
    }
    DataStorageService.prototype.storeRecipes = function () {
        var token = this.authService.getToken();
        return this.http.put('https://recipe-book-66513.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    };
    DataStorageService.prototype.getRecipes = function () {
        var _this = this;
        var token = this.authService.getToken();
        this.http.get('https://recipe-book-66513.firebaseio.com/recipes.json?auth=' + token)
            .map(function (response) {
            var recipes = response.json();
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var recipe = recipes_1[_i];
                if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        })
            .subscribe(function (recipes) {
            _this.recipeService.setRecipes(recipes);
        });
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__recipes_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__recipes_recipe_service__["a" /* RecipeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], DataStorageService);

var _a, _b, _c;
//# sourceMappingURL=data-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/ingridient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingridient; });
var Ingridient = (function () {
    function Ingridient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingridient;
}());

//# sourceMappingURL=ingridient.model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form (ngSubmit)=\"onSubmit(fo)\" #fo=\"ngForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-5 form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input \r\n          type=\"name\"\r\n          type=\"text\" \r\n          class=\"form-control\"\r\n          name=\"name\"\r\n          ngModel\r\n          required>\r\n        </div>\r\n        <div class=\"col-sm-2 form-group\">\r\n          <label for=\"amount\">Amount</label>\r\n          <input type=\"number\" \r\n          id=\"amount\" \r\n          class=\"form-control\" \r\n          name=\"amount\"\r\n          ngModel\r\n          required\r\n          pattern=\"^[1-9]+[0-9]*$\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!fo.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\r\n          <button class=\"btn btn-danger\" type=\"button\" (click)='onDelete()' *ngIf='editMode'>Delete item</button>\r\n          <button class=\"btn btn-primary\" type=\"button\" (click)='onClear()'>Clear</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ingridient_model__ = __webpack_require__("../../../../../src/app/shared/ingridient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShoppingEditComponent = (function () {
    function ShoppingEditComponent(slService) {
        this.slService = slService;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.slService.startedEditing.subscribe(function (value) {
            _this.editedItemIndex = value;
            _this.editMode = true;
            _this.editedItem = _this.slService.getIngredient(value);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.onClear();
        console.log(this.editedItemIndex);
        this.slService.removeIngredient(this.editedItemIndex);
    };
    ShoppingEditComponent.prototype.onSubmit = function (form) {
        var value = form.value;
        var newIngridient = new __WEBPACK_IMPORTED_MODULE_2__shared_ingridient_model__["a" /* Ingridient */](value.name, value.amount);
        if (this.editMode) {
            this.slService.updateIngredient(this.editedItemIndex, newIngridient);
        }
        else {
            this.slService.addIngredient(newIngridient);
        }
        this.editMode = false;
        this.slForm.reset();
    };
    return ShoppingEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('fo'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */]) === "function" && _a || Object)
], ShoppingEditComponent.prototype, "slForm", void 0);
ShoppingEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-shopping-edit',
        template: __webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _b || Object])
], ShoppingEditComponent);

var _a, _b;
//# sourceMappingURL=shopping-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-10\">\r\n    <app-shopping-edit></app-shopping-edit>\r\n    <hr>\r\n    <ul class=\"list-group\">\r\n      <a class=\"list-group-item\"\r\n       style=\"cursor: pointer\"\r\n       *ngFor=\"let ingredient of ingredients; let i = index\"\r\n       (click)=\"onEditItem(i)\">\r\n        {{ ingredient.name }} ({{ ingredient.amount }})\r\n      </a>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = (function () {
    function ShoppingListComponent(slService) {
        this.slService = slService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ingredients = this.slService.getIngredients();
        this.subscription = this.slService.ingredientsChanged.subscribe(function (ingredients) {
            return _this.ingredients = ingredients;
        });
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.slService.startedEditing.next(index);
    };
    return ShoppingListComponent;
}());
ShoppingListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-shopping-list',
        template: __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object])
], ShoppingListComponent);

var _a;
//# sourceMappingURL=shopping-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_edit_shopping_edit_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShoppingListModule = (function () {
    function ShoppingListModule() {
    }
    return ShoppingListModule;
}());
ShoppingListModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__shopping_list_component__["a" /* ShoppingListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shopping_edit_shopping_edit_component__["a" /* ShoppingEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */]
        ]
    })
], ShoppingListModule);

//# sourceMappingURL=shopping-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_ingridient_model__ = __webpack_require__("../../../../../src/app/shared/ingridient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");


var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.startedEditing = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.ingredients = [
            new __WEBPACK_IMPORTED_MODULE_0__shared_ingridient_model__["a" /* Ingridient */]('Apples', 5),
            new __WEBPACK_IMPORTED_MODULE_0__shared_ingridient_model__["a" /* Ingridient */]('Tomatoes', 10)
        ];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }
        // many events
        (_a = this.ingredients).push.apply(_a, ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
        var _a;
    };
    ShoppingListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.removeIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    return ShoppingListService;
}());

//# sourceMappingURL=shopping-list.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map