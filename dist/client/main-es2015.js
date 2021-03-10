(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");





const routes = [
    {
        path: '', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AppComponent {
    constructor(translate) {
        this.translate = translate;
        translate.setDefaultLang('en');
    }
    ngOnInit() {
        this.translate.use('en');
    }
    initModel() {
    }
    switchLanguage(language) {
        this.translate.use(language);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["fullscreen", ""], ["color", "primary"], [1, "app-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Network Programing Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".app-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5hcHAtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");













function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__["ChatModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__["ChatModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _chat_chat_module__WEBPACK_IMPORTED_MODULE_5__["ChatModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                        }
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _shared_model_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/model/action */ "./src/app/chat/shared/model/action.ts");
/* harmony import */ var _shared_model_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/model/event */ "./src/app/chat/shared/model/event.ts");
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/socket.service */ "./src/app/chat/shared/services/socket.service.ts");
/* harmony import */ var _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-user/dialog-user.component */ "./src/app/chat/dialog-user/dialog-user.component.ts");
/* harmony import */ var _dialog_user_dialog_user_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-user/dialog-user-type */ "./src/app/chat/dialog-user/dialog-user-type.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_services_store_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/store-user.service */ "./src/app/chat/shared/services/store-user.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
























function ChatComponent_mat_list_item_6_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const message_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", message_r8.from.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatComponent_mat_list_item_6_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r8.from.name);
} }
function ChatComponent_mat_list_item_6_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r8.content, " ");
} }
function ChatComponent_mat_list_item_6_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " joined to the conversation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r8.from.name);
} }
function ChatComponent_mat_list_item_6_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " is now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r8.content.previousUsername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r8.content.username);
} }
const _c0 = function (a0) { return [a0]; };
function ChatComponent_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_mat_list_item_6_img_1_Template, 1, 1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_mat_list_item_6_h4_2_Template, 3, 1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_mat_list_item_6_p_3_Template, 3, 1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatComponent_mat_list_item_6_p_4_Template, 5, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_mat_list_item_6_p_5_Template, 7, 2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, message_r8.action === undefined && message_r8.from.id === ctx_r6.user.id ? "chat-list-item" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r8.action === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r8.action === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r8.action === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r8.action === ctx_r6.action.JOINED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r8.action === ctx_r6.action.RENAME);
} }
const AVATAR_URL = 'https://randomuser.me/api/portraits/men';
class ChatComponent {
    constructor(socketService, storedUser, dialog, translate) {
        this.socketService = socketService;
        this.storedUser = storedUser;
        this.dialog = dialog;
        this.translate = translate;
        this.action = _shared_model_action__WEBPACK_IMPORTED_MODULE_3__["Action"];
        this.messages = [];
        this.defaultDialogUserParams = {
            disableClose: true,
            data: {
                title: 'Welcome',
                title_pt: 'Bem-vindo',
                dialogType: _dialog_user_dialog_user_type__WEBPACK_IMPORTED_MODULE_7__["DialogUserType"].NEW
            }
        };
        translate.setDefaultLang('en');
    }
    ngOnInit() {
        this.initModel();
        setTimeout(() => {
            this.openUserPopup(this.defaultDialogUserParams);
        }, 0);
    }
    ngAfterViewInit() {
        this.matListItems.changes.subscribe(elements => {
            this.scrollToBottom();
        });
    }
    scrollToBottom() {
        try {
            this.matList.nativeElement.scrollTop = this.matList.nativeElement.scrollHeight;
        }
        catch (err) {
        }
    }
    initModel() {
        const randomId = this.getRandomId();
        this.user = {
            id: randomId,
            avatar: `${AVATAR_URL}/${randomId}.jpg`
        };
    }
    initIoConnection() {
        this.socketService.initSocket();
        this.ioConnection = this.socketService.onMessage()
            .subscribe((message) => {
            this.messages.push(message);
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_4__["Event"].CONNECT)
            .subscribe(() => {
            console.log('connected');
        });
        this.socketService.onEvent(_shared_model_event__WEBPACK_IMPORTED_MODULE_4__["Event"].DISCONNECT)
            .subscribe(() => {
            console.log('disconnected');
        });
    }
    getRandomId() {
        return Math.floor(Math.random() * (100)) + 1;
    }
    onClickUserInfo() {
        this.openUserPopup({
            data: {
                username: this.user.name,
                title: 'Edit Details',
                title_pt: 'Alterar',
                dialogType: _dialog_user_dialog_user_type__WEBPACK_IMPORTED_MODULE_7__["DialogUserType"].EDIT
            }
        });
    }
    openUserPopup(params) {
        this.dialogRef = this.dialog.open(_dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_6__["DialogUserComponent"], params);
        this.dialogRef.afterClosed().subscribe(paramsDialog => {
            if (!paramsDialog) {
                return;
            }
            this.storedUserName = this.storedUser.getStoredUser();
            this.user.name = paramsDialog.username;
            if (paramsDialog.dialogType === _dialog_user_dialog_user_type__WEBPACK_IMPORTED_MODULE_7__["DialogUserType"].NEW) {
                this.storedUser.storeUser(this.user.name);
                this.initIoConnection();
                this.sendNotification(paramsDialog, _shared_model_action__WEBPACK_IMPORTED_MODULE_3__["Action"].JOINED);
            }
            else if (paramsDialog.dialogType === _dialog_user_dialog_user_type__WEBPACK_IMPORTED_MODULE_7__["DialogUserType"].EDIT) {
                this.storedUser.storeUser(this.user.name);
                this.sendNotification(paramsDialog, _shared_model_action__WEBPACK_IMPORTED_MODULE_3__["Action"].RENAME);
            }
        });
    }
    sendMessage(message) {
        if (!message) {
            return;
        }
        this.socketService.send({
            from: this.user,
            content: message
        });
        this.messageContent = null;
    }
    sendNotification(params, action) {
        let message;
        if (action === _shared_model_action__WEBPACK_IMPORTED_MODULE_3__["Action"].JOINED) {
            message = {
                from: this.user,
                action
            };
        }
        else if (action === _shared_model_action__WEBPACK_IMPORTED_MODULE_3__["Action"].RENAME) {
            message = {
                action,
                content: {
                    username: this.user.name,
                    previousUsername: params.previousUsername
                }
            };
        }
        this.socketService.send(message);
    }
    switchLanguage(language) {
        this.translate.use(language);
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_store_user_service__WEBPACK_IMPORTED_MODULE_9__["StoreUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matListItems = _t);
    } }, decls: 16, vars: 6, consts: [["mat-fab", "", 3, "click"], [1, "chat-container"], [1, "main-card"], [1, "chat-list"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-footer-container"], [1, "chat-input"], ["matInput", "", "maxlength", "140", 3, "placeholder", "ngModel", "ngModelChange", "keyup.enter"], ["inputMessage", ""], ["align", "end"], [3, "ngClass"], ["mat-list-avatar", "", 3, "src", 4, "ngIf"], ["mat-line", "", 4, "ngIf"], ["mat-line", "", "class", "chat-notification", 4, "ngIf"], ["mat-list-avatar", "", 3, "src"], ["mat-line", ""], ["mat-line", "", 1, "chat-notification"], ["translate", ""]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_0_listener($event) { return ctx.onClickUserInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_mat_list_item_6_Template, 6, 8, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_11_listener($event) { return ctx.messageContent = $event; })("keyup.enter", function ChatComponent_Template_input_keyup_enter_11_listener($event) { return ctx.sendMessage(ctx.messageContent); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 4, "Type your message"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.messageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r7.value.length, "/140");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatLine"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["[mat-fab][_ngcontent-%COMP%] {\n    position: absolute;\n    right: 2%;\n    top: 35px;\n    z-index: 1;\n}\n\n.chat-container[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n}\n\n.chat-input[_ngcontent-%COMP%] {\n    padding-top: 20px;\n    width: 80%;\n}\n\n.chat-list[_ngcontent-%COMP%] {\n    overflow: auto;\n    position: fixed;\n    top: 90px;\n    left: 25px;\n    right: 25px;\n    bottom: 120px;\n}\n\n.chat-list-item[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    margin-bottom: 2px;\n    border-radius: 5px;\n    background-color: #E8EAF6;\n}\n\n.main-card[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n.chat-footer-container[_ngcontent-%COMP%] {\n    position:fixed;\n    bottom:25px;\n    left:25px;\n    right:25px;\n}\n\n.chat-notification[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.button-globe[_ngcontent-%COMP%] {\n    float: right;\n    margin-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblttYXQtZmFiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyJTtcbiAgICB0b3A6IDM1cHg7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmNoYXQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hhdC1pbnB1dCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDgwJTtcbn1cblxuLmNoYXQtbGlzdCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogOTBweDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIGJvdHRvbTogMTIwcHg7XG59XG5cbi5jaGF0LWxpc3QtaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RUFGNjtcbn1cblxuLm1haW4tY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hhdC1mb290ZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBib3R0b206MjVweDtcbiAgICBsZWZ0OjI1cHg7XG4gICAgcmlnaHQ6MjVweDtcbn1cblxuLmNoYXQtbm90aWZpY2F0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24tZ2xvYmUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }, { type: _shared_services_store_user_service__WEBPACK_IMPORTED_MODULE_9__["StoreUserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }]; }, { matList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }], matListItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/socket.service */ "./src/app/chat/shared/services/socket.service.ts");
/* harmony import */ var _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-user/dialog-user.component */ "./src/app/chat/dialog-user/dialog-user.component.ts");
/* harmony import */ var _shared_services_store_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/store-user.service */ "./src/app/chat/shared/services/store-user.service.ts");









class ChatModule {
}
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, providers: [_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _shared_services_store_user_service__WEBPACK_IMPORTED_MODULE_7__["StoreUserService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_6__["DialogUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
                ],
                declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_6__["DialogUserComponent"]],
                providers: [_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _shared_services_store_user_service__WEBPACK_IMPORTED_MODULE_7__["StoreUserService"]],
                entryComponents: [_dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_6__["DialogUserComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/dialog-user/dialog-user-type.ts":
/*!******************************************************!*\
  !*** ./src/app/chat/dialog-user/dialog-user-type.ts ***!
  \******************************************************/
/*! exports provided: DialogUserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUserType", function() { return DialogUserType; });
var DialogUserType;
(function (DialogUserType) {
    DialogUserType[DialogUserType["NEW"] = 0] = "NEW";
    DialogUserType[DialogUserType["EDIT"] = 1] = "EDIT";
})(DialogUserType || (DialogUserType = {}));


/***/ }),

/***/ "./src/app/chat/dialog-user/dialog-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/dialog-user/dialog-user.component.ts ***!
  \***********************************************************/
/*! exports provided: DialogUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUserComponent", function() { return DialogUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_services_store_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/store-user.service */ "./src/app/chat/shared/services/store-user.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");














function DialogUserComponent_mat_dialog_actions_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogUserComponent_mat_dialog_actions_12_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("align", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.usernameFormControl.hasError("required"));
} }
function DialogUserComponent_mat_dialog_actions_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogUserComponent_mat_dialog_actions_13_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("align", "end");
} }
class DialogUserComponent {
    constructor(dialogRef, params, translate, storedUser) {
        this.dialogRef = dialogRef;
        this.params = params;
        this.translate = translate;
        this.storedUser = storedUser;
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.previousUsername = storedUser.getStoredUser() ? storedUser.getStoredUser() : (params.username ? params.username : undefined);
        this.usernameFormControl.setValue(storedUser.getStoredUser() ? storedUser.getStoredUser() : (params.username ? params.username : ""));
        translate.setDefaultLang('en');
    }
    ngOnInit() {
    }
    onSave() {
        this.dialogRef.close({
            username: this.usernameFormControl.value,
            dialogType: this.params.dialogType,
            previousUsername: this.previousUsername
        });
    }
    switchLanguage(language) {
        this.translate.use(language);
    }
}
DialogUserComponent.ɵfac = function DialogUserComponent_Factory(t) { return new (t || DialogUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_store_user_service__WEBPACK_IMPORTED_MODULE_4__["StoreUserService"])); };
DialogUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogUserComponent, selectors: [["app-dialog-user"]], decls: 14, vars: 10, consts: [[1, "row"], ["mat-dialog-title", "", 1, "dialog-title"], [1, "dialog-content"], ["matInput", "", "name", "username", "required", "", 3, "placeholder", "formControl", "keyup.enter"], ["translate", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled", "click"], ["mat-button", "", "mat-dialog-close", "", "color", "secondary"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "click"]], template: function DialogUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function DialogUserComponent_Template_input_keyup_enter_6_listener($event) { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "FieldRequired");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Please type your username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DialogUserComponent_mat_dialog_actions_12_Template, 3, 2, "mat-dialog-actions", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DialogUserComponent_mat_dialog_actions_13_Template, 5, 1, "mat-dialog-actions", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, "Dialog Title", ctx.params));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "Username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.usernameFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.params == null ? null : ctx.params.typeDialog) === "new-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.params == null ? null : ctx.params.typeDialog) === "edit-user");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n    overflow: hidden;\n}\n\n.button-globe[_ngcontent-%COMP%] {\n    float:right;\n    margin-top:-5px;\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n    float:left;\n}\n\n.dialog-content[_ngcontent-%COMP%] {\n    float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9kaWFsb2ctdXNlci9kaWFsb2ctdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2RpYWxvZy11c2VyL2RpYWxvZy11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnV0dG9uLWdsb2JlIHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4tdG9wOi01cHg7XG59XG5cbi5kaWFsb2ctdGl0bGUge1xuICAgIGZsb2F0OmxlZnQ7XG59XG5cbi5kaWFsb2ctY29udGVudCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-user',
                templateUrl: './dialog-user.component.html',
                styleUrls: ['./dialog-user.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _shared_services_store_user_service__WEBPACK_IMPORTED_MODULE_4__["StoreUserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/chat/shared/model/action.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/shared/model/action.ts ***!
  \*********************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["JOINED"] = 0] = "JOINED";
    Action[Action["LEFT"] = 1] = "LEFT";
    Action[Action["RENAME"] = 2] = "RENAME";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/chat/shared/model/event.ts":
/*!********************************************!*\
  !*** ./src/app/chat/shared/model/event.ts ***!
  \********************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event;
(function (Event) {
    Event["CONNECT"] = "connect";
    Event["DISCONNECT"] = "disconnect";
})(Event || (Event = {}));


/***/ }),

/***/ "./src/app/chat/shared/services/socket.service.ts":
/*!********************************************************!*\
  !*** ./src/app/chat/shared/services/socket.service.ts ***!
  \********************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);




const SERVER_URL = 'http://localhost:8080';
class SocketService {
    initSocket() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(SERVER_URL);
    }
    send(message) {
        this.socket.emit('message', message);
    }
    onMessage() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on('message', (data) => observer.next(data));
        });
    }
    onEvent(event) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/shared/services/store-user.service.ts":
/*!************************************************************!*\
  !*** ./src/app/chat/shared/services/store-user.service.ts ***!
  \************************************************************/
/*! exports provided: StoreUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreUserService", function() { return StoreUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StoreUserService {
    constructor() {
    }
    getStoredUser() {
        let storedUser = sessionStorage.getItem("userName");
        return storedUser ? storedUser : "";
    }
    storeUser(userName) {
        sessionStorage.setItem("userName", userName);
    }
}
StoreUserService.ɵfac = function StoreUserService_Factory(t) { return new (t || StoreUserService)(); };
StoreUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreUserService, factory: StoreUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");














class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, providers: [
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]
        ],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]
                ],
                declarations: [],
                providers: [
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
        ],
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]], exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
                ],
                exports: [
                    _material_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cpole\Desktop\Lab6\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map