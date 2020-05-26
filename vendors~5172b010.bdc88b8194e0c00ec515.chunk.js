(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~5172b010"],{

/***/ "/d7H":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/designs/design-processor.js ***!
  \***************************************************************************************/
/*! exports provided: DesignProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignProcessor", function() { return DesignProcessor; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _colors_swatches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colors/swatches */ "L7WW");
/* harmony import */ var _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global-style-engine */ "zQGn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DesignProcessor = /** @class */ (function () {
    function DesignProcessor(observerLocator, globalStyleEngine) {
        this.observerLocator = observerLocator;
        this.globalStyleEngine = globalStyleEngine;
    }
    DesignProcessor.prototype.setSwatchVariables = function () {
        var swatchClasses = '';
        for (var swatch in _colors_swatches__WEBPACK_IMPORTED_MODULE_2__["swatches"]) {
            if (_colors_swatches__WEBPACK_IMPORTED_MODULE_2__["swatches"].hasOwnProperty(swatch)) {
                if (typeof _colors_swatches__WEBPACK_IMPORTED_MODULE_2__["swatches"][swatch] === 'string') {
                    swatchClasses += "  --ux-swatch--" + kebabCase(swatch) + ": " + _colors_swatches__WEBPACK_IMPORTED_MODULE_2__["swatches"][swatch] + ";\r\n";
                    continue;
                }
                for (var key in _colors_swatches__WEBPACK_IMPORTED_MODULE_2__["swatches"][swatch]) {
                    if (_colors_swatches__WEBPACK_IMPORTED_MODULE_2__["swatches"][swatch].hasOwnProperty(key)) {
                        swatchClasses += "  --ux-swatch--" + kebabCase(swatch) + "-" + kebabCase(key) + ": " + _colors_swatches__WEBPACK_IMPORTED_MODULE_2__["swatches"][swatch][key] + ";\r\n";
                    }
                }
            }
        }
        this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux swatches", swatchClasses, ':root');
    };
    DesignProcessor.prototype.setDesignVariables = function (design) {
        this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux design styles", this.buildInnerHTML(design), ':root');
    };
    DesignProcessor.prototype.setDesignWatches = function (design) {
        var _this = this;
        for (var key in design) {
            if (design.hasOwnProperty(key)) {
                this.observerLocator.getObserver(design, key)
                    .subscribe(function () {
                    _this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux design styles", _this.buildInnerHTML(design), ':root');
                });
            }
        }
    };
    DesignProcessor.prototype.buildInnerHTML = function (design) {
        var designInnerHtml = '';
        for (var key in design) {
            if (design.hasOwnProperty(key) && typeof design[key] === 'string' && design[key] !== '') {
                designInnerHtml += "  --aurelia-ux--design-" + kebabCase(key) + ": " + design[key] + ";\r\n";
            }
        }
        return designInnerHtml;
    };
    DesignProcessor = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["ObserverLocator"], _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_3__["GlobalStyleEngine"])
    ], DesignProcessor);
    return DesignProcessor;
}());

function kebabCase(value) {
    value = value.charAt(0).toLowerCase() + value.slice(1);
    return value.replace(/([A-Z])/g, function (match) { return "-" + match[0].toLowerCase(); });
}
//# sourceMappingURL=design-processor.js.map

/***/ }),

/***/ "3rQG":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/checkbox/dist/native-modules/ux-checkbox-theme.js ***!
  \************************************************************************************/
/*! exports provided: UxCheckboxTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCheckboxTheme", function() { return UxCheckboxTheme; });
var UxCheckboxTheme = /** @class */ (function () {
    function UxCheckboxTheme() {
        this.themeKey = 'checkbox';
    }
    return UxCheckboxTheme;
}());

//# sourceMappingURL=ux-checkbox-theme.js.map

/***/ }),

/***/ "61Y0":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/designs/material-design.js ***!
  \**************************************************************************************/
/*! exports provided: MaterialDesign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesign", function() { return MaterialDesign; });
/* harmony import */ var _colors_swatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors/swatches */ "L7WW");
/* harmony import */ var _colors_shadows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colors/shadows */ "7SWj");


var MaterialDesign = /** @class */ (function () {
    function MaterialDesign() {
        this.type = 'material';
        this.appBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p50;
        this.appForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
        this.surfaceBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p100;
        this.surfaceForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
        this.controlBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p300;
        this.controlForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
        this.controlLabelColor = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p600;
        this.primary = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].indigo.p500;
        this.primaryForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.primaryLight = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].indigo.p100;
        this.primaryLightForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p500;
        this.primaryDark = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].indigo.p700;
        this.primaryDarkForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.accent = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].pink.a200;
        this.accentForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.accentLight = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].pink.a100;
        this.accentLightForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.accentDark = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].pink.a400;
        this.accentDarkForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.disabledBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p500;
        this.disabledForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].blueGrey.p100;
        this.error = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].red.p500;
        this.onError = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.elevationNone = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_0;
        this.elevation2dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_2dp;
        this.elevation3dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_3dp;
        this.elevation4dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_4dp;
        this.elevation6dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_6dp;
        this.elevation8dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_8dp;
        this.elevation16dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_16dp;
        this.elevation24dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_24dp;
        this.elevationFocus = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_focus;
    }
    return MaterialDesign;
}());

//# sourceMappingURL=material-design.js.map

/***/ }),

/***/ "7SWj":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/colors/shadows.js ***!
  \*****************************************************************************/
/*! exports provided: shadows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shadows", function() { return shadows; });
var shadows = {
    depth_0: 'none',
    depth_2dp: '0 2px 2px 0 rgba(0, 0, 0, 0.14),' +
        '0 3px 1px -2px rgba(0, 0, 0, 0.2),' +
        '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    depth_3dp: '0 3px 4px 0 rgba(0, 0, 0, 0.14),' +
        '0 3px 3px -2px rgba(0, 0, 0, 0.2),' +
        '0 1px 8px 0 rgba(0, 0, 0, 0.12)',
    depth_4dp: '0 4px 5px 0 rgba(0, 0, 0, 0.14),' +
        '0 1px 10px 0 rgba(0, 0, 0, 0.12),' +
        '0 2px 4px -1px rgba(0, 0, 0, 0.2)',
    depth_6dp: '0 6px 10px 0 rgba(0, 0, 0, 0.14),' +
        '0 1px 18px 0 rgba(0, 0, 0, 0.12),' +
        '0 3px 5px -1px rgba(0, 0, 0, 0.2)',
    depth_8dp: '0 8px 10px 1px rgba(0, 0, 0, 0.14),' +
        '0 3px 14px 2px rgba(0, 0, 0, 0.12),' +
        '0 5px 5px -3px rgba(0, 0, 0, 0.2)',
    depth_16dp: '0 16px 24px 2px rgba(0, 0, 0, 0.14),' +
        '0 6px 30px 5px rgba(0, 0, 0, 0.12),' +
        '0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    depth_24dp: '0 9px 46px  8px rgba(0, 0, 0, 0.14),' +
        '0 11px 15px -7px rgba(0, 0, 0, 0.12),' +
        '0 24px 38px  3px rgba(0, 0, 0, 0.2)',
    depth_focus: '0 0 8px rgba(0,0,0,.18),' +
        '0 8px 16px rgba(0,0,0,.36)'
};
//# sourceMappingURL=shadows.js.map

/***/ }),

/***/ "@aurelia-ux/card":
/*!********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/index.js ***!
  \********************************************************************/
/*! exports provided: UxCardTheme, UxCard, UxCardHeader, UxCardActionRow, UxCardContent, UxCardFooter, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-card */ "@aurelia-ux/card/ux-card");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxCard", function() { return _ux_card__WEBPACK_IMPORTED_MODULE_1__["UxCard"]; });

/* harmony import */ var _ux_card_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-card-header */ "@aurelia-ux/card/ux-card-header");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxCardHeader", function() { return _ux_card_header__WEBPACK_IMPORTED_MODULE_2__["UxCardHeader"]; });

/* harmony import */ var _ux_card_action_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-card-action-row */ "@aurelia-ux/card/ux-card-action-row");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxCardActionRow", function() { return _ux_card_action_row__WEBPACK_IMPORTED_MODULE_3__["UxCardActionRow"]; });

/* harmony import */ var _ux_card_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-card-content */ "@aurelia-ux/card/ux-card-content");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxCardContent", function() { return _ux_card_content__WEBPACK_IMPORTED_MODULE_4__["UxCardContent"]; });

/* harmony import */ var _ux_card_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ux-card-footer */ "@aurelia-ux/card/ux-card-footer");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxCardFooter", function() { return _ux_card_footer__WEBPACK_IMPORTED_MODULE_5__["UxCardFooter"]; });

/* harmony import */ var _ux_card_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ux-card-theme */ "HEz9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxCardTheme", function() { return _ux_card_theme__WEBPACK_IMPORTED_MODULE_6__["UxCardTheme"]; });









function configure(config) {
    config.globalResources([
        './ux-card',
        './ux-card-header',
        './ux-card-action-row',
        './ux-card-content',
        './ux-card-footer',
        './ux-card-separator'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/card/ux-card":
/*!**********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card.js ***!
  \**********************************************************************/
/*! exports provided: UxCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCard", function() { return UxCard; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UxCard = /** @class */ (function () {
    function UxCard(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
    }
    UxCard.prototype.bind = function () {
        if (this.theme != null) {
            this.themeChanged(this.theme);
        }
        this.xsChanged(this.xs);
        this.smChanged(this.sm);
        this.mdChanged(this.md);
        this.lgChanged(this.lg);
        this.xlChanged(this.xl);
    };
    UxCard.prototype.xsChanged = function (newValue) {
        this.sizeChanged('xs', newValue);
    };
    UxCard.prototype.smChanged = function (newValue) {
        this.sizeChanged('sm', newValue);
    };
    UxCard.prototype.mdChanged = function (newValue) {
        this.sizeChanged('md', newValue);
    };
    UxCard.prototype.lgChanged = function (newValue) {
        this.sizeChanged('lg', newValue);
    };
    UxCard.prototype.xlChanged = function (newValue) {
        this.sizeChanged('xl', newValue);
    };
    UxCard.prototype.sizeChanged = function (size, value) {
        for (var i = 0; i < 10; i++) {
            this.element.classList.remove("ux-card--" + size + "-" + i);
            this.element.classList.remove("ux-card--order-" + this.order + "-" + size + "-" + i);
        }
        if (typeof value === 'string') {
            this.element.classList.add("ux-card--" + size + "-" + value);
            if (typeof this.order === 'string') {
                this.element.classList.add("ux-card--order-" + this.order + "-" + size + "-" + value);
            }
        }
    };
    UxCard.prototype.orderChanged = function () {
        this.xsChanged(this.xs);
        this.smChanged(this.sm);
        this.mdChanged(this.md);
        this.lgChanged(this.lg);
        this.xlChanged(this.xl);
    };
    UxCard.prototype.themeChanged = function (newValue) {
        this.styleEngine.applyTheme(newValue, this.element);
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxCard.prototype, "xs", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxCard.prototype, "sm", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxCard.prototype, "md", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxCard.prototype, "lg", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxCard.prototype, "xl", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxCard.prototype, "order", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxCard.prototype, "theme", void 0);
    UxCard = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["customElement"])('ux-card')
    ], UxCard);
    return UxCard;
}());

//# sourceMappingURL=ux-card.js.map

/***/ }),

/***/ "@aurelia-ux/card/ux-card-action-row":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-action-row.js ***!
  \*********************************************************************************/
/*! exports provided: UxCardActionRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCardActionRow", function() { return UxCardActionRow; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UxCardActionRow = /** @class */ (function () {
    function UxCardActionRow() {
    }
    UxCardActionRow = __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-card-action-row')
    ], UxCardActionRow);
    return UxCardActionRow;
}());

//# sourceMappingURL=ux-card-action-row.js.map

/***/ }),

/***/ "@aurelia-ux/card/ux-card-action-row.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-action-row.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template class=\"ux-card__action-row\">\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/card/ux-card-content":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-content.js ***!
  \******************************************************************************/
/*! exports provided: UxCardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCardContent", function() { return UxCardContent; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UxCardContent = /** @class */ (function () {
    function UxCardContent() {
    }
    UxCardContent = __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-card-content')
    ], UxCardContent);
    return UxCardContent;
}());

//# sourceMappingURL=ux-card-content.js.map

/***/ }),

/***/ "@aurelia-ux/card/ux-card-content.html":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-content.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template class=\"ux-card__content\">\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/card/ux-card-footer":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-footer.js ***!
  \*****************************************************************************/
/*! exports provided: UxCardFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCardFooter", function() { return UxCardFooter; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UxCardFooter = /** @class */ (function () {
    function UxCardFooter() {
    }
    UxCardFooter = __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-card-footer')
    ], UxCardFooter);
    return UxCardFooter;
}());

//# sourceMappingURL=ux-card-footer.js.map

/***/ }),

/***/ "@aurelia-ux/card/ux-card-footer.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-footer.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template class=\"ux-card__footer\">\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/card/ux-card-header":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-header.js ***!
  \*****************************************************************************/
/*! exports provided: UxCardHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCardHeader", function() { return UxCardHeader; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ "hij8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var UxCardHeader = /** @class */ (function () {
    function UxCardHeader(element) {
        this.element = element;
    }
    UxCardHeader.prototype.bind = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.colorChanged(this.color);
                return [2 /*return*/];
            });
        });
    };
    UxCardHeader.prototype.colorChanged = function (newValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.element.classList.remove('ux-card__header--accent', 'ux-card__header--primary');
                if (newValue === 'primary') {
                    this.element.classList.add('ux-card__header--primary');
                }
                if (newValue === 'accent') {
                    this.element.classList.add('ux-card__header--accent');
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxCardHeader.prototype, "color", void 0);
    UxCardHeader = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["customElement"])('ux-card-header')
    ], UxCardHeader);
    return UxCardHeader;
}());

//# sourceMappingURL=ux-card-header.js.map

/***/ }),

/***/ "@aurelia-ux/card/ux-card-header.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-header.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template class=\"ux-card__header\">\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/card/ux-card-separator":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-separator.js ***!
  \********************************************************************************/
/*! exports provided: UxCardSeparator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCardSeparator", function() { return UxCardSeparator; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ "hij8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UxCardSeparator = /** @class */ (function () {
    function UxCardSeparator(element) {
        this.element = element;
    }
    UxCardSeparator.prototype.bind = function () {
        if (this.element.hasAttribute('no-margin')) {
            this.element.classList.add('ux-card__separator--no-margin');
        }
    };
    UxCardSeparator = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["customElement"])('ux-card-separator')
    ], UxCardSeparator);
    return UxCardSeparator;
}());

//# sourceMappingURL=ux-card-separator.js.map

/***/ }),

/***/ "@aurelia-ux/card/ux-card-separator.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-separator.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template class=\"ux-card__separator\">\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/card/ux-card.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-card {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding: 0;\n  border-radius: 2px;\n  background-color: #F5F5F5;\n  background-color: var(--aurelia-ux--card-background, var(--aurelia-ux--design-surface-background, #F5F5F5));\n  color: #212121;\n  color: var(--aurelia-ux--card-foreground, var(--aurelia-ux--design-surface-foreground, #212121));\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: var(--aurelia-ux--design-elevation2dp, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12));\n  margin-bottom: 16px;\n}\n\n.ux-card__header,\n.ux-card__content {\n  padding: 16px;\n}\n\n.ux-card__header {\n  display: flex;\n  flex-direction: column;\n}\n\n.ux-card__thumbnail {\n  flex-shrink: 0;\n  margin-right: 16px;\n  align-self: flex-start;\n}\n\n.ux-card__header-row {\n  display: flex;\n  align-items: center;\n}\n\n.ux-card__spacer {\n  flex: 1;\n}\n.ux-card__separator {\n  display: block;\n  width: 100%;\n  height: 1px;\n  background-color: #ccc;\n  margin: 24px auto;\n}\n\n.ux-card__separator--no-margin {\n  margin: auto auto 0px auto;\n}\n\n.ux-card__separator--no-margin~.ux-card__footer {\n  margin-top: 0px;\n}\n\n.ux-card__title {\n  display: flex;\n  flex-direction: column;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 400;\n  text-decoration: inherit;\n  text-transform: inherit;\n  font-size: 24px;\n  letter-spacing: normal;\n  line-height: 24px;\n  margin: 0;\n  color: inherit;\n  color: var(--aurelia-ux--card-title-foreground, inherit);\n}\n\n.ux-card__sub-title {\n  padding-top: 8px;\n  font-size: 14px;\n  line-height: 14px;\n  color: inherit;\n  color: var(--aurelia-ux--card-sub-title-foreground, inherit);\n  opacity: 0.8;\n  opacity: var(--aurelia-ux--card-sub-title-opacity, 0.8);\n}\n\n.ux-card__header--primary {\n  color: #3f51b5;\n  background-color: var(--aurelia-ux--card-primary-header-background, var(--aurelia-ux--design-primary, #3F51B5));\n  color: rgb(36, 28, 28);\n  color: var(--aurelia-ux--card-primary-header-foreground, var(--aurelia-ux--design-primary-foreground, #fff));\n}\n\n.ux-card__header--accent {\n  background-color: #ff4081;\n  background-color: var(--aurelia-ux--card-accent-header-background, var(--aurelia-ux--design-accent, #ff4081));\n  color: #fff;\n  color: var(--aurelia-ux--card-accent-header-foreground, var(--aurelia-ux--design-accent-foreground, #fff));\n}\n\n/* ux-card ux-card-header[color=primary]+ux-card-content,\nux-card ux-card-header[color=accent]+ux-card-content {\n  padding-top: 16px;\n}\n\nux-card ux-card-header+ux-card-content {\n  padding-top: 0;\n} */\n\n.ux-card__action-row {\n  display: flex;\n  margin: 8px;\n  flex-wrap: nowrap;\n}\n\n.ux-card__img {\n  width: 100%;\n}\n\n.ux-card__footer {\n  padding: 8px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: auto;\n}\n\n.ux-card__content:last-child {\n  padding-bottom: 24px;\n}\n\n.ux-card--dense .ux-card__title {\n  font-size: 20px;\n  line-height: 20px;\n}\n\n.ux-grid>.ux-card {\n  grid-column: span 12;\n  max-width: 100%;\n}\n\n.ux-grid>.ux-card--xs-0 {\n  display: none;\n}\n\n.ux-grid>.ux-card--xs-1 {\n  grid-column: span 1;\n}\n\n.ux-grid>.ux-card--xs-2 {\n  grid-column: span 2;\n}\n\n.ux-grid>.ux-card--xs-3 {\n  grid-column: span 3;\n}\n\n.ux-grid>.ux-card--xs-4 {\n  grid-column: span 4;\n}\n\n.ux-grid>.ux-card--xs-5 {\n  grid-column: span 5;\n}\n\n.ux-grid>.ux-card--xs-6 {\n  grid-column: span 6;\n}\n\n.ux-grid>.ux-card--xs-7 {\n  grid-column: span 7;\n}\n\n.ux-grid>.ux-card--xs-8 {\n  grid-column: span 8;\n}\n\n.ux-grid>.ux-card--xs-9 {\n  grid-column: span 9;\n}\n\n.ux-grid>.ux-card--xs-10 {\n  grid-column: span 10;\n}\n\n.ux-grid>.ux-card--xs-11 {\n  grid-column: span 11;\n}\n\n.ux-grid>.ux-card--xs-12 {\n  grid-column: span 12;\n}\n\n.ux-grid>.ux-card--order-xs-neg {\n  order: -1;\n}\n\n.ux-grid>.ux-card--order-xs-0 {\n  order: 0;\n}\n\n.ux-grid>.ux-card--order-xs-1 {\n  order: 1;\n}\n\n.ux-grid>.ux-card--order-xs-2 {\n  order: 2;\n}\n\n.ux-grid>.ux-card--order-xs-3 {\n  order: 3;\n}\n\n.ux-grid>.ux-card--order-xs-4 {\n  order: 4;\n}\n\n.ux-grid>.ux-card--order-xs-5 {\n  order: 5;\n}\n\n.ux-grid>.ux-card--order-xs-6 {\n  order: 6;\n}\n\n.ux-grid>.ux-card--order-xs-7 {\n  order: 7;\n}\n\n.ux-grid>.ux-card--order-xs-8 {\n  order: 8;\n}\n\n.ux-grid>.ux-card--order-xs-9 {\n  order: 9;\n}\n\n.ux-grid>.ux-card--order-xs-10 {\n  order: 10;\n}\n\n@media (min-width: 480px) {\n  .ux-grid>.ux-card--sm-0 {\n    display: none;\n  }\n  .ux-grid>.ux-card--sm-1 {\n    grid-column: span 1;\n  }\n  .ux-grid>.ux-card--sm-2 {\n    grid-column: span 2;\n  }\n  .ux-grid>.ux-card--sm-3 {\n    grid-column: span 3;\n  }\n  .ux-grid>.ux-card--sm-4 {\n    grid-column: span 4;\n  }\n  .ux-grid>.ux-card--sm-5 {\n    grid-column: span 5;\n  }\n  .ux-grid>.ux-card--sm-6 {\n    grid-column: span 6;\n  }\n  .ux-grid>.ux-card--sm-7 {\n    grid-column: span 7;\n  }\n  .ux-grid>.ux-card--sm-8 {\n    grid-column: span 8;\n  }\n  .ux-grid>.ux-card--sm-9 {\n    grid-column: span 9;\n  }\n  .ux-grid>.ux-card--sm-10 {\n    grid-column: span 10;\n  }\n  .ux-grid>.ux-card--sm-11 {\n    grid-column: span 11;\n  }\n  .ux-grid>.ux-card--sm-12 {\n    grid-column: span 12;\n  }\n  .ux-grid>.ux-card--order-sm-neg {\n    order: -1;\n  }\n  .ux-grid>.ux-card--order-sm-0 {\n    order: 0;\n  }\n  .ux-grid>.ux-card--order-sm-1 {\n    order: 1;\n  }\n  .ux-grid>.ux-card--order-sm-2 {\n    order: 2;\n  }\n  .ux-grid>.ux-card--order-sm-3 {\n    order: 3;\n  }\n  .ux-grid>.ux-card--order-sm-4 {\n    order: 4;\n  }\n  .ux-grid>.ux-card--order-sm-5 {\n    order: 5;\n  }\n  .ux-grid>.ux-card--order-sm-6 {\n    order: 6;\n  }\n  .ux-grid>.ux-card--order-sm-7 {\n    order: 7;\n  }\n  .ux-grid>.ux-card--order-sm-8 {\n    order: 8;\n  }\n  .ux-grid>.ux-card--order-sm-9 {\n    order: 9;\n  }\n  .ux-grid>.ux-card--order-sm-10 {\n    order: 10;\n  }\n}\n\n@media (min-width: 960px) {\n  .ux-grid>.ux-card--md-0 {\n    display: none;\n  }\n  .ux-grid>.ux-card--md-1 {\n    grid-column: span 1;\n  }\n  .ux-grid>.ux-card--md-2 {\n    grid-column: span 2;\n  }\n  .ux-grid>.ux-card--md-3 {\n    grid-column: span 3;\n  }\n  .ux-grid>.ux-card--md-4 {\n    grid-column: span 4;\n  }\n  .ux-grid>.ux-card--md-5 {\n    grid-column: span 5;\n  }\n  .ux-grid>.ux-card--md-6 {\n    grid-column: span 6;\n  }\n  .ux-grid>.ux-card--md-7 {\n    grid-column: span 7;\n  }\n  .ux-grid>.ux-card--md-8 {\n    grid-column: span 8;\n  }\n  .ux-grid>.ux-card--md-9 {\n    grid-column: span 9;\n  }\n  .ux-grid>.ux-card--md-10 {\n    grid-column: span 10;\n  }\n  .ux-grid>.ux-card--md-11 {\n    grid-column: span 11;\n  }\n  .ux-grid>.ux-card--md-12 {\n    grid-column: span 12;\n  }\n  .ux-grid>.ux-card--order-md-neg {\n    order: -1;\n  }\n  .ux-grid>.ux-card--order-md-0 {\n    order: 0;\n  }\n  .ux-grid>.ux-card--order-md-1 {\n    order: 1;\n  }\n  .ux-grid>.ux-card--order-md-2 {\n    order: 2;\n  }\n  .ux-grid>.ux-card--order-md-3 {\n    order: 3;\n  }\n  .ux-grid>.ux-card--order-md-4 {\n    order: 4;\n  }\n  .ux-grid>.ux-card--order-md-5 {\n    order: 5;\n  }\n  .ux-grid>.ux-card--order-md-6 {\n    order: 6;\n  }\n  .ux-grid>.ux-card--order-md-7 {\n    order: 7;\n  }\n  .ux-grid>.ux-card--order-md-8 {\n    order: 8;\n  }\n  .ux-grid>.ux-card--order-md-9 {\n    order: 9;\n  }\n  .ux-grid>.ux-card--order-md-10 {\n    order: 10;\n  }\n}\n\n@media (min-width: 1280px) {\n  .ux-grid>.ux-card--lg-0 {\n    display: none;\n  }\n  .ux-grid>.ux-card--lg-1 {\n    grid-column: span 1;\n  }\n  .ux-grid>.ux-card--lg-2 {\n    grid-column: span 2;\n  }\n  .ux-grid>.ux-card--lg-3 {\n    grid-column: span 3;\n  }\n  .ux-grid>.ux-card--lg-4 {\n    grid-column: span 4;\n  }\n  .ux-grid>.ux-card--lg-5 {\n    grid-column: span 5;\n  }\n  .ux-grid>.ux-card--lg-6 {\n    grid-column: span 6;\n  }\n  .ux-grid>.ux-card--lg-7 {\n    grid-column: span 7;\n  }\n  .ux-grid>.ux-card--lg-8 {\n    grid-column: span 8;\n  }\n  .ux-grid>.ux-card--lg-9 {\n    grid-column: span 9;\n  }\n  .ux-grid>.ux-card--lg-10 {\n    grid-column: span 10;\n  }\n  .ux-grid>.ux-card--lg-11 {\n    grid-column: span 11;\n  }\n  .ux-grid>.ux-card--lg-12 {\n    grid-column: span 12;\n  }\n  .ux-grid>.ux-card--order-lg-neg {\n    order: -1;\n  }\n  .ux-grid>.ux-card--order-lg-0 {\n    order: 0;\n  }\n  .ux-grid>.ux-card--order-lg-1 {\n    order: 1;\n  }\n  .ux-grid>.ux-card--order-lg-2 {\n    order: 2;\n  }\n  .ux-grid>.ux-card--order-lg-3 {\n    order: 3;\n  }\n  .ux-grid>.ux-card--order-lg-4 {\n    order: 4;\n  }\n  .ux-grid>.ux-card--order-lg-5 {\n    order: 5;\n  }\n  .ux-grid>.ux-card--order-lg-6 {\n    order: 6;\n  }\n  .ux-grid>.ux-card--order-lg-7 {\n    order: 7;\n  }\n  .ux-grid>.ux-card--order-lg-8 {\n    order: 8;\n  }\n  .ux-grid>.ux-card--order-lg-9 {\n    order: 9;\n  }\n  .ux-grid>.ux-card--order-lg-10 {\n    order: 10;\n  }\n}\n\n@media (min-width: 1925px) {\n  .ux-grid>.ux-card--xl-0 {\n    display: none;\n  }\n  .ux-grid>.ux-card--xl-1 {\n    grid-column: span 1;\n  }\n  .ux-grid>.ux-card--xl-2 {\n    grid-column: span 2;\n  }\n  .ux-grid>.ux-card--xl-3 {\n    grid-column: span 3;\n  }\n  .ux-grid>.ux-card--xl-4 {\n    grid-column: span 4;\n  }\n  .ux-grid>.ux-card--xl-5 {\n    grid-column: span 5;\n  }\n  .ux-grid>.ux-card--xl-6 {\n    grid-column: span 6;\n  }\n  .ux-grid>.ux-card--xl-7 {\n    grid-column: span 7;\n  }\n  .ux-grid>.ux-card--xl-8 {\n    grid-column: span 8;\n  }\n  .ux-grid>.ux-card--xl-9 {\n    grid-column: span 9;\n  }\n  .ux-grid>.ux-card--xl-10 {\n    grid-column: span 10;\n  }\n  .ux-grid>.ux-card--xl-11 {\n    grid-column: span 11;\n  }\n  .ux-grid>.ux-card--xl-12 {\n    grid-column: span 12;\n  }\n  .ux-grid>.ux-card--order-xl-neg {\n    order: -1;\n  }\n  .ux-grid>.ux-card--order-xl-0 {\n    order: 0;\n  }\n  .ux-grid>.ux-card--order-xl-1 {\n    order: 1;\n  }\n  .ux-grid>.ux-card--order-xl-2 {\n    order: 2;\n  }\n  .ux-grid>.ux-card--order-xl-3 {\n    order: 3;\n  }\n  .ux-grid>.ux-card--order-xl-4 {\n    order: 4;\n  }\n  .ux-grid>.ux-card--order-xl-5 {\n    order: 5;\n  }\n  .ux-grid>.ux-card--order-xl-6 {\n    order: 6;\n  }\n  .ux-grid>.ux-card--order-xl-7 {\n    order: 7;\n  }\n  .ux-grid>.ux-card--order-xl-8 {\n    order: 8;\n  }\n  .ux-grid>.ux-card--order-xl-9 {\n    order: 9;\n  }\n  .ux-grid>.ux-card--order-xl-10 {\n    order: 10;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/card/ux-card.html":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template class=\"ux-card\">\n  <require from=\"./ux-card.css\"></require>\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/checkbox":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/checkbox/dist/native-modules/index.js ***!
  \************************************************************************/
/*! exports provided: UxCheckboxTheme, UxCheckbox, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _ux_checkbox_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-checkbox-theme */ "3rQG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxCheckboxTheme", function() { return _ux_checkbox_theme__WEBPACK_IMPORTED_MODULE_3__["UxCheckboxTheme"]; });

/* harmony import */ var _ux_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-checkbox */ "@aurelia-ux/checkbox/ux-checkbox");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxCheckbox", function() { return _ux_checkbox__WEBPACK_IMPORTED_MODULE_4__["UxCheckbox"]; });






function configure(config) {
    config.container.get(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["AureliaUX"]).registerUxElementConfig(uxCheckBoxConfig);
    config.globalResources('./ux-checkbox');
}
var uxCheckBoxConfig = {
    tagName: 'ux-checkbox',
    properties: {
        checked: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindingMode"].twoWay,
            getObserver: function (element, _, observerLocator) {
                return new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["CheckedObserver"](element, new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["EventSubscriber"](['change']), observerLocator);
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/checkbox/ux-checkbox":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/checkbox/dist/native-modules/ux-checkbox.js ***!
  \******************************************************************************/
/*! exports provided: UxCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCheckbox", function() { return UxCheckbox; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-pal */ "70NS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UxCheckbox = /** @class */ (function () {
    function UxCheckbox(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.ignoreValueChanges = false;
        this.disabled = false;
        this.effect = 'ripple';
        this.ripple = null;
        Object.setPrototypeOf(element, uxCheckboxElementProto);
    }
    Object.defineProperty(UxCheckbox.prototype, "isDisabled", {
        get: function () {
            return Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('disabled', this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    UxCheckbox.prototype.bind = function () {
        var element = this.element;
        var checkbox = this.checkbox;
        if (element.hasAttribute('id')) {
            var attributeValue = element.getAttribute('id');
            if (attributeValue != null) {
                checkbox.setAttribute('id', attributeValue);
            }
        }
        if (element.hasAttribute('tabindex')) {
            var attributeValue = element.getAttribute('tabindex');
            if (attributeValue != null) {
                checkbox.setAttribute('tabindex', attributeValue);
            }
        }
        if (element.hasAttribute('checked')) {
            var attributeValue = element.getAttribute('checked');
            if (attributeValue || attributeValue === '') {
                element.checked = true;
            }
        }
        this.valueChanged(this.value);
        this.disabledChanged(this.checkbox.disabled);
        this.themeChanged(this.theme);
    };
    UxCheckbox.prototype.attached = function () {
        this.checkbox.addEventListener('change', stopEvent);
    };
    UxCheckbox.prototype.detached = function () {
        this.checkbox.removeEventListener('change', stopEvent);
    };
    UxCheckbox.prototype.getChecked = function () {
        return this.checked;
    };
    UxCheckbox.prototype.setChecked = function (value) {
        var oldValue = this.checked;
        var newValue = !!value;
        if (newValue !== oldValue) {
            this.checked = newValue;
            this.ignoreValueChanges = true;
            this.value = newValue;
            this.ignoreValueChanges = false;
            this.element.dispatchEvent(aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"].createCustomEvent('change', { bubbles: true }));
        }
    };
    UxCheckbox.prototype.getIndeterminate = function () {
        return this.indeterminate;
    };
    UxCheckbox.prototype.setIndeterminate = function (value) {
        this.indeterminate = !!value;
    };
    UxCheckbox.prototype.checkedChanged = function (newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        if (newValue === true) {
            this.element.classList.add('ux-checkbox--checked');
        }
        else {
            this.element.classList.remove('ux-checkbox--checked');
        }
    };
    UxCheckbox.prototype.disabledChanged = function (newValue) {
        if (newValue === true) {
            this.element.classList.add('ux-checkbox--disabled');
        }
        else {
            this.element.classList.remove('ux-checkbox--disabled');
        }
    };
    UxCheckbox.prototype.focusedChanged = function (newValue) {
        if (newValue === true) {
            this.element.classList.add('ux-checkbox--focused');
        }
        else {
            this.element.classList.remove('ux-checkbox--focused');
        }
    };
    UxCheckbox.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'checkbox';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxCheckbox.prototype.valueChanged = function (newValue) {
        if (this.ignoreValueChanges) {
            return;
        }
        this.setChecked(newValue);
    };
    UxCheckbox.prototype.onMouseDown = function (e) {
        var _this = this;
        if (e.button !== 0 || this.isDisabled) {
            return;
        }
        if (this.element.classList.contains('ripple')) {
            if (this.ripple === null) {
                this.ripple = new _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["PaperRipple"]();
                var container = this.element.querySelector('.ripplecontainer');
                if (container != null) {
                    container.appendChild(this.ripple.$);
                }
            }
            this.ripple.center = true;
            this.ripple.round = true;
            this.ripple.downAction(e);
            var winEvents_1 = new aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["ElementEvents"](window);
            var upAction = function () {
                _this.ripple.upAction();
                winEvents_1.disposeAll();
            };
            winEvents_1.subscribe('blur', upAction);
            winEvents_1.subscribe('mouseup', upAction, true);
        }
        // TODO: 6.2.2020 - Follow up to make sure we don't need to return false / preventDefault ?
        // https://github.com/aurelia/ux/pull/232#discussion_r375815578
        return true;
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCheckbox.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCheckbox.prototype, "effect", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCheckbox.prototype, "id", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCheckbox.prototype, "theme", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"])()
    ], UxCheckbox.prototype, "checked", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"])()
    ], UxCheckbox.prototype, "value", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"])()
    ], UxCheckbox.prototype, "focused", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])('disabled')
    ], UxCheckbox.prototype, "isDisabled", null);
    UxCheckbox = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-checkbox')
    ], UxCheckbox);
    return UxCheckbox;
}());

function stopEvent(e) {
    e.stopPropagation();
}
var getVm = function (_) { return _.au.controller.viewModel; };
var uxCheckboxElementProto = Object.create(HTMLElement.prototype, {
    type: {
        value: 'checkbox',
    },
    checked: {
        get: function () {
            return getVm(this).getChecked();
        },
        set: function (value) {
            getVm(this).setChecked(value);
        }
    },
    indeterminate: {
        get: function () {
            return getVm(this).getIndeterminate();
        },
        set: function (value) {
            getVm(this).setIndeterminate(value);
        }
    }
});
//# sourceMappingURL=ux-checkbox.js.map

/***/ }),

/***/ "@aurelia-ux/checkbox/ux-checkbox.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/checkbox/dist/native-modules/ux-checkbox.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-checkbox {\n  display: inline-block;\n  outline: none;\n  height: 24px;\n  width: 24px;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.ux-checkbox__inner-input {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.ux-checkbox__border {\n  border: solid 2px #616161;\n  border-color: var(--aurelia-ux--checkbox-border-color, #616161);\n  border-width: var(--aurelia-ux--checkbox-border-width, 2px);\n  border-radius: 3px;\n  display: block;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n\n.ux-checkbox__background-fill {\n  transform: scale3d(0, 0, 0);\n  transition: 100ms;\n  background-color: #3F51B5;\n  background-color: var(--aurelia-ux--checkbox-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n  height: inherit;\n  width: inherit;\n}\n\n.ux-checkbox__icon,\n.ux-checkbox__indeterminate-icon {\n  fill: #fff;\n  fill: var(--aurelia-ux--checkbox-checkmark-color, var(--aurelia-ux--design-primary-foreground, #fff));\n  width: 20px;\n  height: 20px;\n}\n\n.ux-checkbox--checked .ux-checkbox__border,\n.ux-checkbox--indeterminate .ux-checkbox__border {\n  border: solid 2px #3F51B5;\n  border-color: var(--aurelia-ux--checkbox-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n}\n\n.ux-checkbox--checked .ux-checkbox__background-fill,\n.ux-checkbox--indeterminate .ux-checkbox__background-fill {\n  transform: none;\n}\n\n.ux-checkbox__inner-input:disabled {\n  pointer-events: none;\n  cursor: default;\n}\n\n.ux-checkbox--disabled .ux-checkbox__border {\n  border-color: #9E9E9E;\n  border-color: var(--aurelia-ux--checkbox-disabled-background, var(--aurelia-ux--design-disabled-background, #e1e1e1));\n}\n\n.ux-checkbox--disabled .ux-checkbox__background-fill {\n  background-color: #9E9E9E;\n  background-color: var(--aurelia-ux--checkbox-disabled-background, var(--aurelia-ux--design-disabled-background, #e1e1e1));\n}\n.ux-checkbox--disabled .ux-checkbox__icon,\n.ux-checkbox--disabled .ux-checkbox__indeterminate-icon {\n  fill: #CFD8DC;\n  fill: var(--aurelia-ux--checkbox-disabled-foreground, var(--aurelia-ux--design-disabled-foreground, #CFD8DC));\n}\n\n\n\n\n.ux-checkbox .ripplecontainer {\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n.ux-checkbox .paper-ripple {\n  top: auto;\n  left: auto;\n  right: -36px;\n  bottom: -36px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.ux-checkbox .ripple {\n  position: absolute;\n  right: -36px;\n  bottom: -36px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.22);\n  transition: transform 100ms ease-in-out;\n  transform: scale3d(0, 0, 0);\n}\n\n.ux-checkbox--focused .ripple {\n  transform: scale3d(1, 1, 1);\n}\n\n.ux-checkbox--disabled .ripple {\n  transform: scale3d(0, 0, 0);\n}\n\n.ux-checkbox:hover:not(.ux-checkbox--disabled) .ux-checkbox__border {\n  border: solid 2px #3F51B5;\n  border-color: var(--aurelia-ux--checkbox-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/checkbox/ux-checkbox.html":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/checkbox/dist/native-modules/ux-checkbox.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template \n  class=\"ux-checkbox ${effect !== null ? effect : ''} ${indeterminate ? 'ux-checkbox--indeterminate' : ''}\"\n  >\n  <require from=\"@aurelia-ux/core/effects/paper-ripple.css\"></require>\n  <require from=\"./ux-checkbox.css\"></require>\n  <div class=\"ripplecontainer\">\n    <span class=\"ripple\"></span>\n  </div>\n\n  <input type=\"checkbox\"\n    ref=\"checkbox\"\n    class=\"ux-checkbox__inner-input\"\n    checked.bind=\"value\"\n    focus.bind=\"focused\"\n    indeterminate.bind=\"indeterminate\"\n    mousedown.trigger=\"onMouseDown($event)\"\n    disabled.bind=\"disabled & booleanAttr\"\n    aria-checked=\"indeterminate ? 'mixed' : value ? true : false\"\n    aria-disabled.bind=\"disabled & booleanAttr\">\n\n  <div class=\"ux-checkbox__border\">\n    <div class=\"ux-checkbox__background-fill\">\n      <svg viewBox=\"0 0 24 24\" class=\"ux-checkbox__icon\" if.bind=\"!indeterminate\">\n        <path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\" />\n      </svg>\n      <svg viewBox=\"0 0 24 24\" class=\"ux-checkbox__indeterminate-icon\" if.bind=\"indeterminate\">\n        <path d=\"M19 13H5v-2h14v2z\" />\n      </svg>\n    </div>\n  </div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/chip-input":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/index.js ***!
  \**************************************************************************/
/*! exports provided: UxChipInputTheme, UxChipTheme, UxChip, UxChipInput, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_chip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-chip */ "@aurelia-ux/chip-input/ux-chip");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxChip", function() { return _ux_chip__WEBPACK_IMPORTED_MODULE_1__["UxChip"]; });

/* harmony import */ var _ux_chip_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-chip-input */ "@aurelia-ux/chip-input/ux-chip-input");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxChipInput", function() { return _ux_chip_input__WEBPACK_IMPORTED_MODULE_2__["UxChipInput"]; });

/* harmony import */ var _ux_chip_input_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-chip-input-theme */ "hfvh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxChipInputTheme", function() { return _ux_chip_input_theme__WEBPACK_IMPORTED_MODULE_3__["UxChipInputTheme"]; });

/* harmony import */ var _ux_chip_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-chip-theme */ "qTlR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxChipTheme", function() { return _ux_chip_theme__WEBPACK_IMPORTED_MODULE_4__["UxChipTheme"]; });







function configure(config) {
    config.globalResources([
        './ux-chip-input',
        './ux-chip-list',
        './ux-chip'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/chip-input/ux-chip":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip.js ***!
  \****************************************************************************/
/*! exports provided: UxChip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxChip", function() { return UxChip; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UxChip = /** @class */ (function () {
    function UxChip(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.variant = 'filled';
        this.selectedIcon = 'check';
        this.focused = false;
        this.selected = undefined;
    }
    UxChip.prototype.bind = function () {
        this.themeChanged(this.theme);
        if (this.element.hasAttribute('deletable')) {
            this.element.removeAttribute('deletable');
            this.element.classList.add('ux-chip--deletable');
        }
    };
    UxChip.prototype.attached = function () {
        var _this = this;
        this.isFocused = function () {
            _this.focused = document.activeElement === _this.element;
        };
        window.addEventListener('focus', this.isFocused, true);
        window.addEventListener('blur', this.isFocused, true);
    };
    UxChip.prototype.detached = function () {
        window.removeEventListener('focus', this.isFocused, true);
        window.removeEventListener('blur', this.isFocused, true);
    };
    UxChip.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'chip';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxChip.prototype.closeChip = function (event) {
        if (event) {
            event.stopPropagation();
        }
        var closeEvent = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].createCustomEvent('close', { bubbles: false });
        this.element.dispatchEvent(closeEvent);
    };
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChip.prototype, "theme", void 0);
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChip.prototype, "variant", void 0);
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChip.prototype, "selectedIcon", void 0);
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["observable"]
    ], UxChip.prototype, "focused", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])({ defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_2__["bindingMode"].twoWay })
    ], UxChip.prototype, "selected", void 0);
    UxChip = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_3__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_4__["StyleEngine"]),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-chip')
    ], UxChip);
    return UxChip;
}());

//# sourceMappingURL=ux-chip.js.map

/***/ }),

/***/ "@aurelia-ux/chip-input/ux-chip-input":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip-input.js ***!
  \**********************************************************************************/
/*! exports provided: UxChipInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxChipInput", function() { return UxChipInput; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aurelia-ux/core/components/ux-input-component.css */ "J012");
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aurelia_ux_core_components_ux_input_component_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_outline_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aurelia-ux/core/components/ux-input-component--outline.css */ "Ldb8");
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_outline_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aurelia_ux_core_components_ux_input_component_outline_css__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// tslint:disable-next-line: no-submodule-imports

// tslint:disable-next-line: no-submodule-imports

var UxChipInput = /** @class */ (function () {
    function UxChipInput(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.disabled = false;
        this.readonly = false;
        this.separator = ', ';
        this.variant = 'filled';
        this.chipVariant = 'filled';
        this.dense = false;
        this.focused = false;
        this.value = undefined;
        this.chips = new Array();
    }
    UxChipInput.prototype.bind = function () {
        this.themeChanged(this.theme);
        this.dense = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('dense', this.dense);
        if (this.value) {
            this.chips = this.value.split(this.separator);
        }
        if (Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('disabled', this.disabled)) {
            this.textbox.setAttribute('disabled', '');
            this.chiprepeat.removeAttribute('deletable');
            this.tagrepeat.removeAttribute('deletable');
        }
        if (Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('readonly', this.readonly)) {
            this.textbox.setAttribute('readonly', '');
            this.chiprepeat.removeAttribute('deletable');
            this.tagrepeat.removeAttribute('deletable');
        }
        this.chipsChanged();
    };
    UxChipInput.prototype.attached = function () {
        this.variantChanged(this.variant);
    };
    UxChipInput.prototype.focus = function () {
        this.focused = true;
    };
    UxChipInput.prototype.focusedChanged = function () {
        this.element.classList.toggle('ux-input-component--focused', this.focused);
        if (!this.focused) {
            // blur
            this.addChip();
        }
    };
    UxChipInput.prototype.handleKeyup = function (event) {
        var key = event.which || event.keyCode;
        if (key === 13) {
            this.addChip();
            event.stopImmediatePropagation();
        }
        if (key === 37) {
            if (this.chips && this.textbox.value === '') {
                var chip = this.chips.pop();
                if (chip !== undefined) {
                    this.textbox.value = chip;
                }
            }
            event.stopImmediatePropagation();
        }
    };
    UxChipInput.prototype.addChip = function () {
        if (!this.textbox) {
            return;
        }
        if (this.textbox.value.length) {
            if (!this.chips) {
                this.chips = new Array();
            }
            this.chips.push(this.textbox.value);
            this.textbox.value = '';
            this.chipsChanged();
        }
    };
    UxChipInput.prototype.editChip = function (value) {
        if (this.textbox.value.length === 0) {
            this.removeChip(value);
            this.textbox.value = value;
            this.chipsChanged();
        }
    };
    UxChipInput.prototype.removeChip = function (value) {
        var chipIndex = this.chips.indexOf(value, 0);
        if (chipIndex > -1) {
            this.chips.splice(chipIndex, 1);
            this.chipsChanged();
        }
    };
    UxChipInput.prototype.chipsChanged = function () {
        var chipValue = this.chips.join(this.separator);
        if (chipValue === '') {
            chipValue = null;
        }
        if (chipValue !== this.value) {
            this.value = chipValue;
        }
        this.element.classList.toggle('ux-input-component--has-value', this.chips.length > 0);
    };
    UxChipInput.prototype.valueChanged = function (newValue) {
        if (newValue && newValue !== this.chips.join(this.separator)) {
            this.chips = newValue.split(this.separator);
        }
    };
    UxChipInput.prototype.disabledChanged = function (newValue) {
        if (Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('disabled', newValue)) {
            this.textbox.setAttribute('disabled', '');
            this.chiprepeat.removeAttribute('deletable');
            this.tagrepeat.removeAttribute('deletable');
        }
        else {
            this.textbox.removeAttribute('disabled');
            this.chiprepeat.setAttribute('deletable', '');
            this.tagrepeat.setAttribute('deletable', '');
        }
    };
    UxChipInput.prototype.readonlyChanged = function (newValue) {
        if (Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('readonly', newValue)) {
            this.textbox.setAttribute('readonly', '');
            this.chiprepeat.removeAttribute('deletable');
            this.tagrepeat.removeAttribute('deletable');
        }
        else {
            this.textbox.removeAttribute('readonly');
            this.chiprepeat.setAttribute('deletable', '');
            this.tagrepeat.setAttribute('deletable', '');
        }
    };
    UxChipInput.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'chip-input';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxChipInput.prototype.variantChanged = function (newValue) {
        this.element.style.backgroundColor = newValue === 'outline' ?
            this.element.style.backgroundColor = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["getBackgroundColorThroughParents"])(this.element) :
            '';
    };
    Object.defineProperty(UxChipInput.prototype, "placeholderMode", {
        get: function () {
            return typeof this.label !== 'string' || this.label.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    UxChipInput.prototype.stopEvent = function (event) {
        event.stopPropagation();
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipInput.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipInput.prototype, "readonly", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipInput.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipInput.prototype, "label", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipInput.prototype, "placeholder", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipInput.prototype, "separator", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipInput.prototype, "variant", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipInput.prototype, "chipVariant", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipInput.prototype, "dense", void 0);
    __decorate([
        aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"]
    ], UxChipInput.prototype, "focused", void 0);
    __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"])({ defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["bindingMode"].twoWay })
    ], UxChipInput.prototype, "value", void 0);
    __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"])({ defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["bindingMode"].twoWay })
    ], UxChipInput.prototype, "chips", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])('label')
    ], UxChipInput.prototype, "placeholderMode", null);
    UxChipInput = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-chip-input')
    ], UxChipInput);
    return UxChipInput;
}());

//# sourceMappingURL=ux-chip-input.js.map

/***/ }),

/***/ "@aurelia-ux/chip-input/ux-chip-input.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip-input.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-chip-input {\n  --foreground: var(--aurelia-ux--chip-input-foreground, var(--aurelia-ux--design-control-foreground, #212121));\n  --foreground-label: var(--aurelia-ux--chip-input-foreground-label, var(--aurelia-ux--design-control-label-color, #757575));\n  --background: var(--aurelia-ux--chip-input-background, var(--aurelia-ux--design-control-background, #E0E0E0));\n  --background-hover: var(--aurelia-ux--chip-input-background-hover, #00000027);\n  --active-color: var(--aurelia-ux--chip-input-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n\n  --font-size: var(--aurelia-ux--chip-input-font-size, 16px);\n  --letter-spacing: var(--aurelia-ux--chip-input-letter-spacing, inherit);\n  --label-font-size: var(--aurelia-ux--chip-input-label-font-size, 12px);\n  --label-letter-spacing: var(--aurelia-ux--chip-input-label-letter-spacing, 0.5px);\n  --line-height: var(--aurelia-ux--chip-input-line-height, 1.6);\n  --label-line-height: var(--aurelia-ux--chip-input-label-line-height, 1.6);\n\n  --border-color: var(--aurelia-ux--chip-input-border-color, var(--aurelia-ux--design-control-label-color, #757575));\n  --border-radius: var(--aurelia-ux--chip-input-border-radius, 4px);\n  --border-width: var(--aurelia-ux--chip-input-border-width, 1px);\n  --border-active-width: var(--aurelia-ux--chip-input-border-active-width, 2px);\n\n  --disabled-foreground: var(--aurelia-ux--chip-input-disabled-foreground, var(--aurelia-ux--design-disabled-foreground, #9E9E9E));\n  --disabled-background: var(--aurelia-ux--chip-input-disabled-background, var(--aurelia-ux--design-disabled-background, #e1e1e1));\n\n  --error: var(--aurelia-ux--chip-input-error, var(--aurelia-ux--design-error, #F44336));\n\n  --chip-background: var(--aurelia-ux--chip-input-chip-background, #00000027);\n}\n\n\n.ux-chip-input {\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\n.ux-chip-input .ux-input-component__content {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.ux-chip-input.ux-input-component--filled .ux-input-component__label {\n  display: flex;\n  width: 100%;\n  flex-shrink: 0;\n}\n\n.ux-chip-input .ux-input-component__inner-input {\n  align-self: stretch;\n  background: transparent;\n  border: none;\n  flex-grow: 1;\n  min-width: 180px;\n  width: auto;\n  padding: 0;\n}\n\n.ux-chip-input .ux-chip {\n  margin: 3px 6px 3px 0;\n  cursor: default;\n  background: var(--chip-background, #00000027);\n}\n\n.ux-chip-input.ux-input-component--has-value .ux-input-component__content {\n  padding-bottom: 6px;\n}\n\n.ux-chip-input.ux-input-component--placeholder.ux-input-component--has-value .ux-input-component__content,\n.ux-chip-input.ux-input-component--outline.ux-input-component--has-value .ux-input-component__content {\n  padding-top: 6px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/chip-input/ux-chip-input.html":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip-input.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template role=\"textbox\" \n  class=\"ux-input-component ux-input-component--${variant} ${dense ? 'ux-input-component--dense' : ''} ${placeholderMode ? 'ux-input-component--placeholder' : ''} ux-chip-input\"\n  click.delegate=\"focus()\">\n  <require from=\"./ux-chip-input.css\"></require>\n\n  <slot name=\"leading-icon\"></slot>\n  <span class=\"ux-input-component__content\">\n    <div class=\"ux-input-component__label-background\" if.bind=\"variant === 'outline' && (label || placeholder)\" css=\"width: ${labelEl.offsetWidth + 6}px;\"></div>\n    <div class=\"ux-input-component__label\" ref=\"labelEl\">${label || placeholder}</div>\n  \n    <ux-chip deletable\n      variant=\"chipVariant\"\n      ref=\"chiprepeat\"\n      close.trigger=\"removeChip(chip)\"\n      click.delegate=\"stopEvent($event)\"\n      dblclick.trigger=\"editChip(chip)\"\n      repeat.for=\"chip of chips\">\n      ${chip}\n    </ux-chip>\n\n    <input \n      show.bind=\"focused\"\n      ref=\"textbox\"\n      class=\"ux-input-component__inner-input\"\n      keyup.delegate=\"handleKeyup($event)\"\n      focus.bind=\"focused\"\n      disabled.bind=\"disabled & booleanAttr\"\n      readonly.bind=\"readonly & booleanAttr\"\n      required.bind=\"required & booleanAttr\">\n  </span>\n\n  <slot name=\"trailing-icon\"></slot>\n\n  <div class=\"ux-input-component__border\" show.bind=\"!(variant === 'filled' && disabled)\"></div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/chip-input/ux-chip-list":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip-list.js ***!
  \*********************************************************************************/
/*! exports provided: UxChipList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxChipList", function() { return UxChipList; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UxChipList = /** @class */ (function () {
    function UxChipList(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.type = 'inline';
    }
    UxChipList.prototype.bind = function () {
        this.themeChanged(this.theme);
    };
    UxChipList.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'chip-list';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipList.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxChipList.prototype, "type", void 0);
    UxChipList = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-chip-list')
    ], UxChipList);
    return UxChipList;
}());

//# sourceMappingURL=ux-chip-list.js.map

/***/ }),

/***/ "@aurelia-ux/chip-input/ux-chip-list.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip-list.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-chip-list {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.ux-chip-list .ux-chip {\n  /* display: inline-block; */\n  margin: 4px;\n}\n\n.ux-chip-list .ux-chip {\n  cursor: pointer;\n}\n\n/* .ux-chip-list .ux-chip:first-child {\n  margin-left: 0px;\n} */\n\n/* TYPES */\n.ux-chip-list--scroll {\n  overflow-x: auto;\n  flex-wrap: nowrap;\n}\n.ux-chip-list--scroll .ux-chip {\n  margin-bottom: 0px;\n}\n.ux-chip-list--stack {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.ux-chip-list--stack .ux-chip {\n  margin-left: 0px;\n  margin-top: 8px;\n  margin-bottom: 0px;\n}\n.ux-chip-list--stack .ux-chip:first-child {\n  margin-top: 0px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/chip-input/ux-chip-list.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip-list.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template role=\"textbox\" class=\"ux-chip-list ux-chip-list--${type}\">\n  <require from=\"./ux-chip-list.css\"></require>\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/chip-input/ux-chip.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Styling is done for the main `filled` variant */\n/* Outline variant is done in the second part of the file */\n.ux-chip {\n  display: inline-flex;\n  align-items: center;\n\n  font-size: 14px;\n\n  height: 32px;\n  border-radius: 100px;\n\n  color: #212121;\n  color: var(--aurelia-ux--chip-foreground, var(--aurelia-ux--design-control-foreground, #212121));\n  background-color: #E0E0E0;\n  background-color: var(--aurelia-ux--chip-background, var(--aurelia-ux--design-control-background, #E0E0E0));\n}\n\n.ux-chip__content {\n  margin: 0 12px;\n}\n\n.ux-chip__thumbnail {\n  --aurelia-ux--icon-size: var(--aurelia-ux--chip-icon-size, 16px);\n  display: flex;\n}\n\n.ux-chip__thumbnail > * {\n  display: none;\n}\n\n.ux-chip__thumbnail > *:first-child {\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.ux-chip__thumbnail > .ux_chip__selected_icon {\n  display: none;\n}\n\n.ux-chip__close {\n  display: none;\n}\n\n.ux-chip--deletable .ux-chip__content {\n  margin-right: 0;\n}\n\n.ux-chip--deletable .ux-chip__close {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 4px;\n  color: #EEEEEE;\n  color: var(--aurelia-ux--chip-delete-foreground, #EEEEEE);\n  background-color: #9E9E9E;\n  background-color: var(--aurelia-ux--chip-delete-background, #9E9E9E);\n  height: 24px;\n  width: 24px;\n  border-radius: 24px;\n  cursor: pointer;\n}\n\n.ux-chip--deletable .ux-chip__close::before {\n  content: '+';\n  font-size: 24px;\n  transform: rotate(45deg);\n}\n\n/* STATES */\n.ux-chip--focused {\n  outline: none;\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n  box-shadow: var(--aurelia-ux--design-elevation4dp, 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2));\n}\n\n.ux-chip--selected,\n.ux-chip.ux-choice--selected {\n  background-color: rgba(132, 132, 132, 0.5);\n  background-color: var(--aurelia-ux--chip-active-color, rgba(132, 132, 132, 0.5));\n}\n\n\n/* OUTLINE */\n.ux-chip--outline {\n  background: transparent;\n  border-style: solid;\n  border-color: #757575;\n  border-color: var(--aurelia-ux--input-foreground-label, var(--aurelia-ux--design-control-label-color, #757575));\n  border-width: var(--aurelia-ux--input-border-width, 1px);\n}\n.ux-chip--outline.ux-chip--selected\n.ux-chip--outline.ux-choice--selected {\n  background-color: rgba(132, 132, 132, 0.5);\n  background-color: var(--aurelia-ux--chip-active-color, rgba(132, 132, 132, 0.5));\n}\n\n\n/* DISPLAY CHECK ICON FOR MULTIPLE CHIP LIST */\n.ux-choice-container--multiple .ux-chip__thumbnail > *:first-child {\n  display: none;\n}\n\n.ux-choice-container--multiple .ux-choice--selected .ux-chip__thumbnail > .ux_chip__selected_icon,\n.ux-choice-container--multiple .ux-chip--selected .ux-chip__thumbnail > .ux_chip__selected_icon {\n  margin-left: 10px;\n  display: inline-block;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/chip-input/ux-chip.html":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template\n  role=\"textbox\"\n  class=\"ux-chip ux-chip--${variant} ${focused ? 'ux-chip--focused' : ''} ${selected ? 'ux-chip--selected' : ''}\">\n  <require from=\"./ux-chip.css\"></require>\n\n  <span class=\"ux-chip__thumbnail\">\n    <slot name=\"thumbnail\"></slot>\n    <ux-icon icon=\"${selectedIcon}\" class=\"ux_chip__selected_icon\"></ux-icon>\n  </span>\n\n  <span class=\"ux-chip__content\">\n    <slot></slot>\n  </span>\n\n  <span class=\"ux-chip__close\" click.delegate=\"closeChip($event)\"></span>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/core":
/*!********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/index.js ***!
  \********************************************************************/
/*! exports provided: swatches, shadows, processDesignAttributes, PaperRipple, normalizeBooleanAttribute, getBackgroundColorThroughParents, UxChoiceAttribute, UxChoiceContainerAttribute, StyleEngine, GlobalStyleEngine, AureliaUX, UXConfiguration, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_ux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aurelia-ux */ "DwSp");
/* harmony import */ var _components_boolean_attr_binding_behavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/boolean-attr-binding-behavior */ "fi93");
/* harmony import */ var _colors_swatches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors/swatches */ "L7WW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swatches", function() { return _colors_swatches__WEBPACK_IMPORTED_MODULE_3__["swatches"]; });

/* harmony import */ var _colors_shadows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors/shadows */ "7SWj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadows", function() { return _colors_shadows__WEBPACK_IMPORTED_MODULE_4__["shadows"]; });

/* harmony import */ var _designs_design_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./designs/design-attributes */ "BaLi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processDesignAttributes", function() { return _designs_design_attributes__WEBPACK_IMPORTED_MODULE_5__["processDesignAttributes"]; });

/* harmony import */ var _effects_paper_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/paper-ripple */ "H3F7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperRipple", function() { return _effects_paper_ripple__WEBPACK_IMPORTED_MODULE_6__["PaperRipple"]; });

/* harmony import */ var _components_html_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/html-attributes */ "AH2a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeBooleanAttribute", function() { return _components_html_attributes__WEBPACK_IMPORTED_MODULE_7__["normalizeBooleanAttribute"]; });

/* harmony import */ var _components_background_color_parent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/background-color-parent */ "oiLq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBackgroundColorThroughParents", function() { return _components_background_color_parent__WEBPACK_IMPORTED_MODULE_8__["getBackgroundColorThroughParents"]; });

/* harmony import */ var _components_ux_choice_attribute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ux-choice-attribute */ "@aurelia-ux/core/components/ux-choice-attribute");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxChoiceAttribute", function() { return _components_ux_choice_attribute__WEBPACK_IMPORTED_MODULE_9__["UxChoiceAttribute"]; });

/* harmony import */ var _components_ux_choice_container_attribute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ux-choice-container-attribute */ "@aurelia-ux/core/components/ux-choice-container-attribute");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxChoiceContainerAttribute", function() { return _components_ux_choice_container_attribute__WEBPACK_IMPORTED_MODULE_10__["UxChoiceContainerAttribute"]; });

/* harmony import */ var _styles_style_engine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/style-engine */ "cjW2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleEngine", function() { return _styles_style_engine__WEBPACK_IMPORTED_MODULE_11__["StyleEngine"]; });

/* harmony import */ var _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/global-style-engine */ "zQGn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyleEngine", function() { return _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_12__["GlobalStyleEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AureliaUX", function() { return _aurelia_ux__WEBPACK_IMPORTED_MODULE_1__["AureliaUX"]; });

/* harmony import */ var _ux_configuration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ux-configuration */ "IdUL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UXConfiguration", function() { return _ux_configuration__WEBPACK_IMPORTED_MODULE_13__["UXConfiguration"]; });
















var uxCorePromise;
function configure(config, callback) {
    if (uxCorePromise) {
        return uxCorePromise;
    }
    var ux = config.container.get(_aurelia_ux__WEBPACK_IMPORTED_MODULE_1__["AureliaUX"]);
    var boolAttr = new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["BindingBehaviorResource"]('');
    boolAttr.initialize(config.container, _components_boolean_attr_binding_behavior__WEBPACK_IMPORTED_MODULE_2__["BooleanBB"]);
    boolAttr.register(config.aurelia.resources, 'booleanAttr');
    config.globalResources([
        './components/ux-choice-attribute',
        './components/ux-choice-container-attribute'
    ]);
    if (typeof callback === 'function') {
        return uxCorePromise = Promise.resolve(callback(ux))
            .then(function () { return ux.start(config); });
    }
    else {
        ux.use.defaultConfiguration();
        return uxCorePromise = ux.start(config);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/core/components/ux-choice-attribute":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/components/ux-choice-attribute.js ***!
  \*********************************************************************************************/
/*! exports provided: UxChoiceAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxChoiceAttribute", function() { return UxChoiceAttribute; });
/* harmony import */ var _ux_choice_container_attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ux-choice-container-attribute */ "@aurelia-ux/core/components/ux-choice-container-attribute");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_choice_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-choice.css */ "mg+8");
/* harmony import */ var _ux_choice_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ux_choice_css__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UxChoiceAttribute = /** @class */ (function () {
    function UxChoiceAttribute(element, container) {
        this.element = element;
        this.container = container;
    }
    UxChoiceAttribute.prototype.bind = function () {
        this.container.registerChoice(this);
        this.element.classList.add('ux-choice');
    };
    UxChoiceAttribute.prototype.detached = function () {
        this.container.disposeChoice(this);
    };
    UxChoiceAttribute.prototype.valueChanged = function (newValue, oldValue) {
        if (!this.container) {
            return;
        }
        var containerValue = this.container.value;
        if (this.container.isMultiple && Array.isArray(containerValue)) {
            for (var _i = 0, containerValue_1 = containerValue; _i < containerValue_1.length; _i++) {
                var value = containerValue_1[_i];
                if (value === oldValue) {
                    value = newValue;
                    return;
                }
            }
        }
        else if (!this.container.isMultiple && containerValue === oldValue) {
            this.container.value = newValue;
        }
    };
    UxChoiceAttribute.prototype.selectedChanged = function () {
        this.element.classList.toggle('ux-choice--selected', this.selected);
    };
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["observable"]
    ], UxChoiceAttribute.prototype, "selected", void 0);
    UxChoiceAttribute = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["customAttribute"])('ux-choice', undefined, ['ux-choice-item', 'ux-choice-option']),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["Optional"].of(_ux_choice_container_attribute__WEBPACK_IMPORTED_MODULE_0__["UxChoiceContainerAttribute"]))
    ], UxChoiceAttribute);
    return UxChoiceAttribute;
}());

//# sourceMappingURL=ux-choice-attribute.js.map

/***/ }),

/***/ "@aurelia-ux/core/components/ux-choice-container-attribute":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/components/ux-choice-container-attribute.js ***!
  \*******************************************************************************************************/
/*! exports provided: UxChoiceContainerAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxChoiceContainerAttribute", function() { return UxChoiceContainerAttribute; });
/* harmony import */ var _ux_choice_attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ux-choice-attribute */ "@aurelia-ux/core/components/ux-choice-attribute");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UxChoiceContainerAttribute = /** @class */ (function () {
    function UxChoiceContainerAttribute(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.multiple = 'auto';
        this.isMultiple = false;
        this.choices = [];
        this.isQueued = false;
    }
    /* Event passed on the click eventListener */
    UxChoiceContainerAttribute.prototype.handleEvent = function (event) {
        if (event.target instanceof Element) {
            var choiceElement = event.target.closest('.ux-choice');
            if (choiceElement !== null &&
                choiceElement.au !== undefined &&
                choiceElement.au['ux-choice'] !== undefined &&
                choiceElement.au['ux-choice'].viewModel instanceof _ux_choice_attribute__WEBPACK_IMPORTED_MODULE_0__["UxChoiceAttribute"]) {
                var choice = choiceElement.au['ux-choice'].viewModel;
                this.toggleValue(choice.value);
            }
        }
    };
    /* Callback passed on the TaskQueue when registering child choices */
    UxChoiceContainerAttribute.prototype.call = function () {
        this.isQueued = false;
        this.processValue();
    };
    UxChoiceContainerAttribute.prototype.bind = function () {
        this.element.classList.add('ux-choice-container');
        this.multipleChanged();
        this.valueChanged(this.value);
    };
    UxChoiceContainerAttribute.prototype.multipleChanged = function () {
        if (this.multiple === 'auto') {
            this.isMultiple = Array.isArray(this.value) ? true : false;
        }
        else if (typeof this.multiple === 'boolean') {
            this.isMultiple = this.multiple;
        }
        else {
            this.isMultiple = this.multiple === 'multiple' || this.multiple === 'true';
        }
        this.element.classList.toggle('ux-choice-container--multiple', this.isMultiple);
    };
    UxChoiceContainerAttribute.prototype.attached = function () {
        this.element.addEventListener('click', this);
    };
    UxChoiceContainerAttribute.prototype.detached = function () {
        this.element.removeEventListener('click', this);
    };
    UxChoiceContainerAttribute.prototype.requestProcessValue = function () {
        if (!this.isQueued) {
            this.isQueued = true;
            this.taskQueue.queueMicroTask(this);
        }
    };
    UxChoiceContainerAttribute.prototype.registerChoice = function (choice) {
        this.choices.push(choice);
        this.requestProcessValue();
    };
    UxChoiceContainerAttribute.prototype.disposeChoice = function (choice) {
        var index = this.choices.indexOf(choice);
        if (index !== -1) {
            this.choices.splice(index, 1);
            this.requestProcessValue();
        }
    };
    UxChoiceContainerAttribute.prototype.valueChanged = function (newValue) {
        if (this.multiple === 'auto') {
            this.multipleChanged(); // call this to ensure isMultiple respect value type
        }
        // Before to process the value, let's make
        // it's the proper type according to `isMultiple`
        if (this.isMultiple && typeof newValue === 'string') {
            this.value = [];
            return;
        }
        else if (!this.isMultiple && Array.isArray(newValue)) {
            this.value = undefined;
            return;
        }
        // By using requestProcessValue we avoid too many
        // process in case the value changes quickly
        // This can happen if the value type must be fixed (above)
        // or if there are several choice registration in a row
        this.requestProcessValue();
    };
    UxChoiceContainerAttribute.prototype.toggleValue = function (value) {
        if (this.isMultiple && Array.isArray(this.value)) {
            var index = this.value.indexOf(value);
            if (index === -1) {
                this.value.push(value);
            }
            else {
                this.value.splice(index, 1);
            }
        }
        else if (!this.isMultiple) {
            this.value = this.value === value ? undefined : value;
        }
        this.processValue();
    };
    UxChoiceContainerAttribute.prototype.processValue = function () {
        var choicesLength = this.choices.length;
        if (this.isMultiple && Array.isArray(this.value)) {
            for (var index = 0; index < choicesLength; index++) {
                var choice = this.choices[index];
                choice.selected = this.value.indexOf(choice.value) !== -1;
            }
        }
        else if (!this.isMultiple && typeof this.value === 'string') {
            for (var index = 0; index < choicesLength; index++) {
                var choice = this.choices[index];
                choice.selected = this.value === choice.value;
            }
        }
    };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["bindable"])({ defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["bindingMode"].twoWay, primaryProperty: true })
    ], UxChoiceContainerAttribute.prototype, "value", void 0);
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxChoiceContainerAttribute.prototype, "multiple", void 0);
    UxChoiceContainerAttribute = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["customAttribute"])('ux-choice-container', undefined, ['ux-choice-value']),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["TaskQueue"])
    ], UxChoiceContainerAttribute);
    return UxChoiceContainerAttribute;
}());

//# sourceMappingURL=ux-choice-container-attribute.js.map

/***/ }),

/***/ "@aurelia-ux/core/effects/paper-ripple.css":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/effects/paper-ripple.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".paper-ripple {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: inherit;\n    overflow: hidden;\n    pointer-events: none;\n}\n\n.paper-ripple .paper-ripple__background,\n.paper-ripple .paper-ripple__waves,\n.paper-ripple .paper-ripple__wave-container,\n.paper-ripple .paper-ripple__wave {\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.paper-ripple .paper-ripple__background,\n.paper-ripple .paper-ripple__wave {\n    opacity: 0;\n}\n\n.paper-ripple .paper-ripple__waves,\n.paper-ripple .paper-ripple__wave {\n    overflow: hidden;\n}\n\n.paper-ripple .paper-ripple__wave-container,\n.paper-ripple .paper-ripple__wave {\n    border-radius: 50%;\n}\n\n.paper-ripple .paper-ripple__background {\n    will-change: opacity, background-color;\n}\n\n.paper-ripple .paper-ripple__wave {\n    will-change: opacity, transform;\n}\n\n.paper-ripple .paper-ripple__wave-container {\n    will-change: transform;\n}\n\n.paper-ripple--round .paper-ripple__background,\n.paper-ripple--round .paper-ripple__waves {\n    border-radius: 50%;\n}\n\n.paper-ripple--round .paper-ripple__wave-container {\n    overflow: hidden;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/core/styles/normalize.css":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/styles/normalize.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@aurelia-ux/datepicker":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/index.js ***!
  \**************************************************************************/
/*! exports provided: UxDatepickerTheme, UxCalendar, UxDatepicker, UxPickerDialog, UxYearList, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_datepicker_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-datepicker-theme */ "Hnkm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxDatepickerTheme", function() { return _ux_datepicker_theme__WEBPACK_IMPORTED_MODULE_1__["UxDatepickerTheme"]; });

/* harmony import */ var _ux_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-calendar */ "@aurelia-ux/datepicker/ux-calendar");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxCalendar", function() { return _ux_calendar__WEBPACK_IMPORTED_MODULE_2__["UxCalendar"]; });

/* harmony import */ var _ux_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-datepicker */ "@aurelia-ux/datepicker/ux-datepicker");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxDatepicker", function() { return _ux_datepicker__WEBPACK_IMPORTED_MODULE_3__["UxDatepicker"]; });

/* harmony import */ var _ux_picker_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-picker-dialog */ "@aurelia-ux/datepicker/ux-picker-dialog");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxPickerDialog", function() { return _ux_picker_dialog__WEBPACK_IMPORTED_MODULE_4__["UxPickerDialog"]; });

/* harmony import */ var _ux_year_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ux-year-list */ "@aurelia-ux/datepicker/ux-year-list");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxYearList", function() { return _ux_year_list__WEBPACK_IMPORTED_MODULE_5__["UxYearList"]; });







function configure(config) {
    config.globalResources([
        './ux-calendar',
        './ux-datepicker',
        './ux-picker-dialog',
        './ux-year-list'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/datepicker/ux-calendar":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-calendar.js ***!
  \********************************************************************************/
/*! exports provided: UxCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCalendar", function() { return UxCalendar; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _resources_datetime_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/datetime-utility */ "shSP");
/* harmony import */ var _resources_moment_rexports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/moment-rexports */ "geiO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UxCalendar = /** @class */ (function () {
    function UxCalendar(resources) {
        this.resources = resources;
        this.theme = null;
        this.weekdays = _resources_moment_rexports__WEBPACK_IMPORTED_MODULE_4__["moment"].weekdays();
        this.calendarRows = new Array();
    }
    UxCalendar.prototype.bind = function () {
        this.displayMonth = this.value.clone();
    };
    UxCalendar.prototype.previousMonth = function () {
        this.displayMonth = this.displayMonth.clone().subtract(1, 'month');
    };
    UxCalendar.prototype.nextMonth = function () {
        this.displayMonth = this.displayMonth.clone().add(1, 'month');
    };
    UxCalendar.prototype.changeCalendarSelection = function (newDate) {
        var modifiedDate = this.value.clone()
            .set('date', newDate.date())
            .set('month', newDate.month())
            .set('year', newDate.year());
        if (this.isValidDate(modifiedDate)) {
            return;
        }
        this.value = modifiedDate;
    };
    UxCalendar.prototype.displayMonthChanged = function (newDate) {
        this.calendarRows = new Array();
        var clonedDate = newDate.clone();
        var firstDay = clonedDate.startOf('month').weekday();
        var daysInMonth = newDate.daysInMonth();
        var currentWeek = new Array();
        while (currentWeek.length < firstDay) {
            currentWeek.push(null);
        }
        for (var index = 0; index < daysInMonth; index++) {
            currentWeek.push(clonedDate.clone().add(index, 'days'));
            if (currentWeek.length === 7) {
                this.calendarRows.push(currentWeek);
                currentWeek = new Array();
            }
        }
        if (currentWeek.length > 0) {
            while (currentWeek.length < 7) {
                currentWeek.push(null);
            }
            this.calendarRows.push(currentWeek);
        }
    };
    UxCalendar.prototype.isValidDate = function (date) {
        return _resources_datetime_utility__WEBPACK_IMPORTED_MODULE_3__["DatetimeUtility"].dateOutOfRange(date, this.minDate, this.maxDate, this.config);
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCalendar.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCalendar.prototype, "weekdays", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCalendar.prototype, "minDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCalendar.prototype, "maxDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCalendar.prototype, "value", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxCalendar.prototype, "config", void 0);
    __decorate([
        aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"]
    ], UxCalendar.prototype, "displayMonth", void 0);
    UxCalendar = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["inject"])(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["ViewResources"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-calendar')
    ], UxCalendar);
    return UxCalendar;
}());

//# sourceMappingURL=ux-calendar.js.map

/***/ }),

/***/ "@aurelia-ux/datepicker/ux-calendar.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-calendar.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-calendar {\n  display: block;\n  height: 260px;\n  display: flex;\n  flex-direction: column;\n}\n\n.ux-calendar__row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: 2em;\n}\n\n.ux-calendar__row--weekdays {\n  color: #E0E0E0;\n  color: var(--aurelia-ux--datepicker-weekday-foreground, #E0E0E0);\n}\n\n.ux-calendar__day {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.ux-calendar__day--highlight {\n  width: 1.9em;\n  height: 1.9em;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.ux-calendar__day--selected {\n  color: #FFF;\n  color: var(--aurelia-ux--datepicker-selected-day-foreground, var(--aurelia-ux--design-accent-foreground, #FFF));\n  background-color: #FF4081;\n  background-color: var(--aurelia-ux--datepicker-selected-day-background, var(--aurelia-ux--design-accent, #FF4081));\n}\n\n.ux-calendar__day--out-of-range {\n  color: #757575;\n  color: var(--aurelia-ux--datepicker-out-of-range-foreground, #757575);\n  cursor: default;\n}\n\n.ux-calendar__month-display {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.ux-calendar__svg-icon {\n  fill: currentColor;\n  width: 24px;\n  height: 24px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/datepicker/ux-calendar.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-calendar.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template>\n  <require from=\"./ux-calendar.css\"></require>\n  <div class=\"ux-calendar__month-display\">\n    <ux-button type=\"text\" click.delegate=\"previousMonth()\">\n      <svg viewBox=\"0 0 24 24\" class=\"ux-calendar__svg-icon\">\n        <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path>\n      </svg>\n    </ux-button>\n    <span>\n      ${displayMonth.format('MMMM YYYY')}\n    </span>\n    <ux-button type=\"text\" click.delegate=\"nextMonth()\">\n      <svg viewBox=\"0 0 24 24\" class=\"ux-calendar__svg-icon\">\n        <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path>\n      </svg>\n    </ux-button>\n\n  </div>\n  <div class=\"ux-calendar__row ux-calendar__row--weekdays\">\n    <div class=\"ux-calendar__day\" repeat.for=\"weekday of weekdays\">\n      ${weekday[0]}\n    </div>\n  </div>\n  <div class=\"ux-calendar__row\" repeat.for=\"week of calendarRows\">\n    <div class=\"ux-calendar__day\" repeat.for=\"day of week\">\n      <div click.delegate=\"changeCalendarSelection(day)\" if.bind=\"day\" class=\"ux-calendar__day--highlight\n             ${day.isSame(value, 'day') ? 'ux-calendar__day--selected' : ''}\n             ${isValidDate(day) ? 'ux-calendar__day--out-of-range' : '' }\">\n        ${day.date()}\n      </div>\n    </div>\n  </div>\n\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/datepicker/ux-datepicker":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-datepicker.js ***!
  \**********************************************************************************/
/*! exports provided: UxDatepicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxDatepicker", function() { return UxDatepicker; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _resources_datetime_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/datetime-utility */ "shSP");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var _resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/moment-rexports */ "geiO");
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aurelia-ux/core/components/ux-input-component.css */ "J012");
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_aurelia_ux_core_components_ux_input_component_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_outline_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aurelia-ux/core/components/ux-input-component--outline.css */ "Ldb8");
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_outline_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_aurelia_ux_core_components_ux_input_component_outline_css__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// tslint:disable-next-line: no-submodule-imports

// tslint:disable-next-line: no-submodule-imports

// import UX_DATEPICKER_VIEW from './ux-datepicker.html';
// import { PLATFORM } from 'aurelia-pal';
var UxDatepicker = /** @class */ (function () {
    function UxDatepicker(element, resources, styleEngine) {
        this.element = element;
        this.resources = resources;
        this.styleEngine = styleEngine;
        this.display = 'month';
        this.type = 'datetime';
        this.autofocus = null;
        this.disabled = false;
        this.readonly = false;
        this.variant = 'filled';
        this.dense = false;
        this.formatters = {
            date: 'L',
            time: 'LT',
            datetime: 'L LT'
        };
        this.focused = false;
        this.showDialog = false;
    }
    UxDatepicker.prototype.bind = function () {
        if (this.autofocus || this.autofocus === '') {
            this.focused = true;
        }
        this.dense = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('dense', this.dense);
        if (this.initialDate != null) {
            var dateParse = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(this.initialDate);
            if (dateParse.isValid()) {
                this.initialDate = dateParse;
            }
        }
        else {
            this.initialDate = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])();
        }
        if (this.minDate != null) {
            var dateParse = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(this.minDate);
            this.minDate = dateParse.isValid() ? dateParse : null;
        }
        if (this.maxDate != null) {
            var dateParse = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(this.maxDate);
            this.maxDate = dateParse.isValid() ? dateParse : null;
        }
        if (this.minTime != null) {
            var dateParse = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(this.minTime, this.formatters.time);
            this.minTime = dateParse.isValid() ? dateParse : null;
        }
        if (this.maxTime != null) {
            var dateParse = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(this.maxTime, this.formatters.time);
            this.maxTime = dateParse.isValid() ? dateParse : null;
        }
        this.typeChanged(this.type);
        this.themeChanged(this.theme);
    };
    UxDatepicker.prototype.attached = function () {
        this.variantChanged(this.variant);
    };
    UxDatepicker.prototype.toggleDialog = function (display) {
        if (this.showDialog) {
            this.showDialog = false;
            return;
        }
        if (this.disabled || this.readonly) {
            return;
        }
        this.display = display;
        this.showDialog = true;
    };
    UxDatepicker.prototype.blur = function () {
        if (this.showDialog) {
            // if the dialog is opened, we consider that the most accurate value
            // comes from the dialog and bring back its value
            this.valueChanged(this.value);
            return;
        }
        // if the dialog is not opened, the textbox has the most accurate value
        // and therefore we validate it and assign it to component
        this.changeTextboxValue();
    };
    UxDatepicker.prototype.changeTextboxValue = function () {
        if (!this.textboxValue) {
            this.value = null;
            return;
        }
        var parseValue;
        if (this.type === 'date') {
            parseValue = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(this.textboxValue, this.formatters.date);
        }
        else if (this.type === 'time') {
            parseValue = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(this.textboxValue, this.formatters.time);
        }
        else {
            parseValue = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(this.textboxValue, this.formatters.datetime);
        }
        if (parseValue.isValid() &&
            _resources_datetime_utility__WEBPACK_IMPORTED_MODULE_4__["DatetimeUtility"].dateOutOfRange(parseValue, this.minDate, this.maxDate, this.config) === false) {
            this.value = parseValue.toDate();
        }
        else {
            this.value = null;
            this.textboxValue = '';
        }
    };
    UxDatepicker.prototype.typeChanged = function (newValue) {
        newValue = newValue.toLowerCase();
        if (newValue === 'time') {
            this.type = newValue;
        }
        else if (newValue === 'date') {
            this.type = newValue;
        }
        else {
            this.type = 'datetime';
        }
        this.valueChanged(this.value);
    };
    UxDatepicker.prototype.valueChanged = function (newValue) {
        if (newValue == null) {
            return;
        }
        if (this.type === 'datetime') {
            this.textboxValue = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(newValue).format(this.formatters.datetime);
        }
        if (this.type === 'date') {
            this.textboxValue = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(newValue).format(this.formatters.date);
        }
        if (this.type === 'time') {
            this.textboxValue = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(newValue).format(this.formatters.time);
        }
    };
    UxDatepicker.prototype.minDateChanged = function (newValue) {
        if (newValue != null && newValue instanceof _resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"] === false) {
            var dateParse = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(newValue);
            this.minDate = dateParse.isValid() ? dateParse : null;
        }
    };
    UxDatepicker.prototype.maxDateChanged = function (newValue) {
        if (newValue != null && newValue instanceof _resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"] === false) {
            var dateParse = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(newValue);
            this.maxDate = dateParse.isValid() ? dateParse : null;
        }
    };
    UxDatepicker.prototype.minTimeChanged = function (newValue) {
        if (newValue != null && newValue instanceof _resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"] === false) {
            var dateParse = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(newValue, this.formatters.time);
            this.minTime = dateParse.isValid() ? dateParse : null;
        }
    };
    UxDatepicker.prototype.maxTimeChanged = function (newValue) {
        if (newValue != null && newValue instanceof _resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"] === false) {
            var dateParse = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_6__["moment"])(newValue, this.formatters.time);
            this.maxTime = dateParse.isValid() ? dateParse : null;
        }
    };
    UxDatepicker.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'datepicker';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxDatepicker.prototype.focusedChanged = function (focused) {
        this.element.dispatchEvent(aurelia_pal__WEBPACK_IMPORTED_MODULE_5__["DOM"].createCustomEvent(focused ? 'focus' : 'blur', { bubbles: false }));
    };
    UxDatepicker.prototype.focusInput = function () {
        this.textbox.focus();
    };
    UxDatepicker.prototype.variantChanged = function (newValue) {
        this.element.style.backgroundColor = newValue === 'outline' ?
            this.element.style.backgroundColor = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["getBackgroundColorThroughParents"])(this.element) :
            '';
    };
    Object.defineProperty(UxDatepicker.prototype, "placeholderMode", {
        get: function () {
            return typeof this.label !== 'string' || this.label.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "display", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "type", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "initialDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "minTime", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "maxTime", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "minDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "maxDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "config", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "autofocus", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "readonly", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "label", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "placeholder", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "variant", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "dense", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxDatepicker.prototype, "formatters", void 0);
    __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"])({ defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["bindingMode"].twoWay })
    ], UxDatepicker.prototype, "value", void 0);
    __decorate([
        aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"]
    ], UxDatepicker.prototype, "focused", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])('label')
    ], UxDatepicker.prototype, "placeholderMode", null);
    UxDatepicker = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["inject"])(Element, aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["ViewResources"], _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-datepicker')
        // @inlineView(
        //   UX_DATEPICKER_VIEW,
        //   [PLATFORM.moduleName('@aurelia-ux/datepicker/ux-datepicker.css')]
        // )
    ], UxDatepicker);
    return UxDatepicker;
}());

//# sourceMappingURL=ux-datepicker.js.map

/***/ }),

/***/ "@aurelia-ux/datepicker/ux-datepicker.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-datepicker.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-datepicker {\n  --foreground: var(--aurelia-ux--datepicker-foreground, var(--aurelia-ux--design-control-foreground, #212121));\n  --foreground-label: var(--aurelia-ux--datepicker-foreground-label, var(--aurelia-ux--design-control-label-color, #757575));\n  --background: var(--aurelia-ux--datepicker-background, var(--aurelia-ux--design-control-background, #E0E0E0));\n  --background-hover: var(--aurelia-ux--datepicker-background-hover, #00000027);\n  --active-color: var(--aurelia-ux--datepicker-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n\n  --font-size: var(--aurelia-ux--datepicker-font-size, 16px);\n  --letter-spacing: var(--aurelia-ux--datepicker-letter-spacing, inherit);\n  --label-font-size: var(--aurelia-ux--datepicker-label-font-size, 12px);\n  --label-letter-spacing: var(--aurelia-ux--datepicker-label-letter-spacing, 0.5px);\n  --line-height: var(--aurelia-ux--datepicker-line-height, 1.6);\n  --label-line-height: var(--aurelia-ux--datepicker-label-line-height, 1.6);\n\n  --border-color: var(--aurelia-ux--datepicker-border-color, var(--aurelia-ux--design-control-label-color, #757575));\n  --border-radius: var(--aurelia-ux--datepicker-border-radius, 4px);\n  --border-width: var(--aurelia-ux--datepicker-border-width, 1px);\n  --border-active-width: var(--aurelia-ux--datepicker-border-active-width, 2px);\n\n  --disabled-foreground: var(--aurelia-ux--datepicker-disabled-foreground, var(--aurelia-ux--design-disabled-foreground, #9E9E9E));\n  --disabled-background: var(--aurelia-ux--datepicker-disabled-background, var(--aurelia-ux--design-disabled-background, #e1e1e1));\n\n  --error: var(--aurelia-ux--datepicker-error, var(--aurelia-ux--design-error, #F44336));\n}\n\n.ux-datepicker .ux-input-component__trailing {\n  cursor: pointer;\n}\n\n.ux-datepicker__calendar-icon {\n  fill: currentColor;\n  fill: var(--aurelia-ux--datepicker-foreground-label, var(--aurelia-ux--design-control-label-color, currentColor));\n  width: 25px;\n  height: 25px;\n}\n\n.ux-input-component--has-error .ux-datepicker__calendar-icon {\n  fill: #F44336;\n  fill: var(--error, #F44336);\n}\n\n.ux-input-component--focused .ux-datepicker__calendar-icon {\n  fill: #3F51B5;\n  fill: var(--active-color, #3F51B5);\n}\n\n.ux-input-component[disabled] .ux-datepicker__calendar-icon,\n.ux-input-component[readonly] .ux-datepicker__calendar-icon {\n  fill: #9E9E9E;\n  fill: var(--disabled-foreground, #9E9E9E);\n}\n\n\n.ux-datepicker__overlay:not(:empty) {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 80;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  animation-name: datepicker-background-fade-in;\n  animation-duration: 250ms;\n\n  background-color: rgba(0, 0, 0, 0.25);\n  background-color: var(--aurelia-ux--datepicker-overlay, rgba(0, 0, 0, 0.25));\n}\n\n@keyframes datepicker-background-fade-in {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  to {\n    background-color: rgba(0, 0, 0, 0.25);\n    background-color: var(--aurelia-ux--datepicker-overlay, rgba(0, 0, 0, 0.25));\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/datepicker/ux-datepicker.html":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-datepicker.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template \n  class=\"ux-input-component ux-input-component--${variant} ${dense ? 'ux-input-component--dense' : ''} ${placeholderMode ? 'ux-input-component--placeholder' : ''} ux-datepicker ${focused || showDialog ? 'ux-input-component--focused' : ''} ${textboxValue ? 'ux-input-component--has-value' : ''}\"\n  disabled.bind=\"disabled & booleanAttr\"\n  readonly.bind=\"readonly & booleanAttr\"\n  aria-disabled.bind=\"disabled & booleanAttr\"\n  aria-readonly.bind=\"readonly & booleanAttr\"\n  click.trigger=\"focusInput()\">\n  <require from=\"./ux-datepicker.css\"></require>\n\n  <slot name=\"leading-icon\"></slot>\n\n  <span class=\"ux-input-component__content\">\n    <div class=\"ux-input-component__label-background\" if.bind=\"variant === 'outline' && (label || placeholder)\" css=\"width: ${labelEl.offsetWidth + 6}px;\"></div>\n    <div class=\"ux-input-component__label\" ref=\"labelEl\">${label || placeholder}</div>\n  \n    <input class=\"ux-input-component__inner-input\"\n      ref=\"textbox\"\n      value.bind=\"textboxValue\"\n      focus.bind=\"focused & debounce:100\"\n      disabled.bind=\"disabled & booleanAttr\"\n      readonly.bind=\"readonly & booleanAttr\"\n      blur.trigger=\"blur()\">\n    </input>\n  </span>\n\n  <span class=\"ux-input-component__trailing\" click.trigger=\"toggleDialog('month')\" if.bind=\"type !== 'time'\">\n    <svg viewBox=\"0 0 24 24\" class=\"ux-datepicker__calendar-icon\">\n      <path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"></path>\n    </svg>\n  </span>\n\n  <div class=\"ux-input-component__border\" show.bind=\"!(variant === 'filled' && disabled)\"></div>\n\n  <div class=\"ux-datepicker__overlay\" if.bind=\"showDialog\">\n    <ux-picker-dialog \n      display.bind=\"display\"\n      config.bind=\"config\"\n      type.bind=\"type\"\n      initial-date.bind=\"initialDate\"\n      close-dialog.call=\"showDialog = false\"\n      min-date.bind=\"minDate\"\n      max-date.bind=\"maxDate\"\n      value.two-way=\"value\"></ux-picker-dialog>\n  </div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/datepicker/ux-picker-dialog":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-picker-dialog.js ***!
  \*************************************************************************************/
/*! exports provided: UxPickerDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxPickerDialog", function() { return UxPickerDialog; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _resources_moment_rexports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/moment-rexports */ "geiO");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import UX_PICKER_DIALOG_VIEW from './ux-picker-dialog.html';
// import { PLATFORM } from 'aurelia-pal';
var UxPickerDialog = /** @class */ (function () {
    function UxPickerDialog(resources) {
        this.resources = resources;
        this.theme = null;
        this.type = 'datetime';
        this.display = 'month';
    }
    UxPickerDialog.prototype.bind = function () {
        if (this.value != null) {
            this.selectedDate = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.value);
        }
        else {
            this.selectedDate = this.initialDate;
            if (this.minDate != null && this.selectedDate.isBefore(this.minDate)) {
                this.selectedDate = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.minDate).clone();
            }
            if (this.maxDate != null && this.selectedDate.isBefore(this.maxDate)) {
                this.selectedDate = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_2__["moment"])(this.minDate).clone();
            }
        }
    };
    UxPickerDialog.prototype.valueChanged = function (newDate) {
        this.selectedDate = Object(_resources_moment_rexports__WEBPACK_IMPORTED_MODULE_2__["moment"])(newDate);
    };
    UxPickerDialog.prototype.selectDate = function () {
        if (this.selectedDate != null) {
            this.value = this.selectedDate.toDate();
            this.closeDialog();
        }
    };
    UxPickerDialog.prototype.changeView = function (view) {
        this.display = view;
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "type", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "display", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "weekdays", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "config", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "initialDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "minDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "maxDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "value", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxPickerDialog.prototype, "closeDialog", void 0);
    UxPickerDialog = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["ViewResources"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-picker-dialog')
        // @inlineView(
        //   UX_PICKER_DIALOG_VIEW,
        //   [PLATFORM.moduleName('@aurelia-ux/datepicker/ux-picker-dialog.css')]
        // )
    ], UxPickerDialog);
    return UxPickerDialog;
}());

//# sourceMappingURL=ux-picker-dialog.js.map

/***/ }),

/***/ "@aurelia-ux/datepicker/ux-picker-dialog.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-picker-dialog.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ux-picker-dialog {\n  color: #262626;\n  color: var(--aurelia-ux--design-control-foreground, #262626);\n  background-color: #FFF;\n  background-color: var(--aurelia-ux--calendar-picker-background, #FFF);\n  width: 300px;\n  \n  user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n\n  animation-duration: 250ms;\n  animation-name: datepicker-dialog-grow;\n}\n\nux-picker-dialog header {\n  width: auto;\n  height: 124px;\n  padding: 16px 24px;\n  box-sizing: border-box;\n  color: #FFF;\n  color: var(--aurelia-ux--datepicker-header-foreground, var(--aurelia-ux--design-primary-foreground, #FFF));\n  background: #3F51B5;\n  background: var(--aurelia-ux--datepicker-header-background, var(--aurelia-ux--design-primary, #3F51B5));\n}\n\nux-picker-dialog header > div.year,\nux-picker-dialog header > div.date {\n  opacity: 0.7;\n  cursor: pointer;\n}\n\nux-picker-dialog header div.year {\n  font-size: 1.1em;\n}\n\n  ux-picker-dialog header div.year.active {\n    opacity: 1;\n  }\n\nux-picker-dialog header div.date {\n  font-size: 2em;\n  font-weight: 400;\n}\n\n  ux-picker-dialog header div.date.active {\n    opacity: 1;\n  }\n\nux-picker-dialog footer {\n  display: flex;\n  justify-content: flex-end;\n}\n\n@keyframes datepicker-dialog-grow {\n  from {\n    transform: scale3d(0, 0, 0);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/datepicker/ux-picker-dialog.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-picker-dialog.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template role=\"dialog\">\n  <require from=\"./ux-picker-dialog.css\"></require>\n  <header>\n    <template if.bind=\"type !== 'time'\">\n      <div class=\"year ${display === 'year' ? 'active':''}\" click.trigger=\"display = 'year'\">\n        ${selectedDate.format('YYYY')}\n      </div>\n      <div class=\"date ${display === 'month' ? 'active':''}\" click.trigger=\"display = 'month'\">\n        ${selectedDate.format('ddd, MMM D')}\n      </div>\n    </template>\n  </header>\n\n  <ux-year-list if.bind=\"display === 'year'\"\n                config.bind=\"config\"\n                min-date.bind=\"minDate\"\n                max-date.bind=\"maxDate\"\n                value.two-way=\"selectedDate\">\n                </ux-year-list>\n\n  <ux-calendar if.bind=\"display === 'month'\" \n               config.bind=\"config\"\n               value.two-way=\"selectedDate\"\n               min-date.bind=\"minDate\"\n               max-date.bind=\"maxDate\">\n               </ux-calendar>\n\n  <footer>\n    <ux-button type=\"text\" click.delegate=\"closeDialog()\">Cancel</ux-button>\n    <ux-button type=\"text\" click.delegate=\"selectDate()\">OK</ux-button>\n  </footer>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/datepicker/ux-year-list":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-year-list.js ***!
  \*********************************************************************************/
/*! exports provided: UxYearList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxYearList", function() { return UxYearList; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import UX_YEAR_LIST_VIEW from './ux-year-list.html';
// import { PLATFORM } from 'aurelia-pal';
var UxYearList = /** @class */ (function () {
    function UxYearList(element, resources) {
        this.element = element;
        this.resources = resources;
        this.theme = null;
        this.today = new Date();
        this.today.setHours(0, 0, 0, 0);
    }
    UxYearList.prototype.attached = function () {
        this.scrollToActive();
    };
    UxYearList.prototype.selectYear = function (year) {
        this.value = this.value.clone().set('year', year);
    };
    Object.defineProperty(UxYearList.prototype, "yearList", {
        get: function () {
            var yearList = [];
            var min = 1900;
            var max = 2100;
            if (this.minDate) {
                min = this.minDate.year();
            }
            if (this.maxDate) {
                max = this.maxDate.year();
            }
            while (min <= max) {
                yearList.push(min);
                min++;
            }
            return yearList;
        },
        enumerable: true,
        configurable: true
    });
    UxYearList.prototype.scrollToActive = function () {
        var selected = this.element.querySelector('div.selected');
        if (selected == null && this.element.children.length > 5) {
            selected = this.element.children[Math.round(this.element.children.length / 2)];
        }
        if (selected != null) {
            selected.scrollIntoView();
        }
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxYearList.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxYearList.prototype, "minDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxYearList.prototype, "maxDate", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxYearList.prototype, "value", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_2__["computedFrom"])('minDate', 'maxDate')
    ], UxYearList.prototype, "yearList", null);
    UxYearList = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element, aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["ViewResources"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-year-list')
        // @inlineView(
        //   UX_YEAR_LIST_VIEW,
        //   [PLATFORM.moduleName('@aurelia-ux/datepicker/ux-year-list.css')]
        // )
    ], UxYearList);
    return UxYearList;
}());

//# sourceMappingURL=ux-year-list.js.map

/***/ }),

/***/ "@aurelia-ux/datepicker/ux-year-list.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-year-list.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-year-list {\n  display: block;\n  height: 260px;\n  overflow-y: auto;\n  text-align: center;\n}\n\n.ux-year-list__year {\n  font-size: 1em;\n  cursor: pointer;\n  margin: 24px 0;\n}\n\n.ux-year-list__year--selected {\n  font-size: 1.75em;\n  color: #FF4081;\n  color: var(--aurelia-ux--design-accent, #FF4081);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/datepicker/ux-year-list.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-year-list.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template class=\"ux-year-list\">\n  <require from=\"./ux-year-list.css\"></require>\n  <template repeat.for=\"year of yearList\">\n    <div class=\"ux-year-list__year ${year == value.year() ? 'ux-year-list__year--selected' : ''}\" click.delegate=\"selectYear(year)\">\n      ${year}\n    </div>\n  </template>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "AH2a":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/components/html-attributes.js ***!
  \*****************************************************************************************/
/*! exports provided: normalizeBooleanAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeBooleanAttribute", function() { return normalizeBooleanAttribute; });
/**
 * @description This function will ensure that we propertly treat a potential string value for a boolean attribute
 * as the boolean representation
 *
 * @param {string} attributeName Name of the boolean attribute we are normalizing for
 * @param {boolean|string} value Existing value of the boolean html attribute represented as a boolean or string
 *
 * @returns {boolean}
 */
function normalizeBooleanAttribute(attributeName, value) {
    var ret;
    // tslint:disable-next-line
    if (typeof value === 'string') {
        ret = value === '' || value.toLocaleLowerCase() === attributeName.toLocaleLowerCase();
    }
    else {
        ret = value;
    }
    return ret;
}
//# sourceMappingURL=html-attributes.js.map

/***/ }),

/***/ "BQW+":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/platforms/android.js ***!
  \********************************************************************************/
/*! exports provided: Android */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Android", function() { return Android; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _designs_material_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designs/material-design */ "61Y0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Android = /** @class */ (function () {
    function Android(design) {
        this.design = design;
        this.type = 'android';
    }
    Android = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(_designs_material_design__WEBPACK_IMPORTED_MODULE_1__["MaterialDesign"])
    ], Android);
    return Android;
}());

//# sourceMappingURL=android.js.map

/***/ }),

/***/ "BaLi":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/designs/design-attributes.js ***!
  \****************************************************************************************/
/*! exports provided: processDesignAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processDesignAttributes", function() { return processDesignAttributes; });
function processDesignAttributes(_, __, node, attributes, ___) {
    var prefix = 'material-'; // TODO: get this from somewhere
    var length = prefix.length;
    // tslint:disable:prefer-const
    for (var i = 0, ii = attributes.length; i < ii; ++i) {
        var current = attributes[i];
        if (current.name.indexOf(prefix) === 0) {
            var realName = current.name.substring(length);
            node.setAttribute(realName, current.value);
        }
    }
    // tslint:enable:prefer-const
    return true;
}
//# sourceMappingURL=design-attributes.js.map

/***/ }),

/***/ "DwSp":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/aurelia-ux.js ***!
  \*************************************************************************/
/*! exports provided: AureliaUX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AureliaUX", function() { return AureliaUX; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_templating_binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-templating-binding */ "aurelia-templating-binding");
/* harmony import */ var _hosts_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hosts/cordova */ "RwAH");
/* harmony import */ var _hosts_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hosts/web */ "T61M");
/* harmony import */ var _hosts_electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hosts/electron */ "jd77");
/* harmony import */ var _ux_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ux-configuration */ "IdUL");
/* harmony import */ var _designs_design_processor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./designs/design-processor */ "/d7H");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AureliaUX = /** @class */ (function () {
    function AureliaUX(use, container, designProcessor, observerLocator) {
        this.use = use;
        this.designProcessor = designProcessor;
        this.observerLocator = observerLocator;
        this.adapterCreated = false;
        this.adapters = {};
        this.availableHosts = [
            container.get(_hosts_cordova__WEBPACK_IMPORTED_MODULE_3__["Cordova"]),
            container.get(_hosts_electron__WEBPACK_IMPORTED_MODULE_5__["Electron"]),
            container.get(_hosts_web__WEBPACK_IMPORTED_MODULE_4__["Web"])
        ];
    }
    AureliaUX.prototype.createAdapter = function () {
        var _this = this;
        this.observerLocator.addAdapter({
            getObserver: function (obj, propertyName, descriptor) {
                if (obj instanceof Element) {
                    var tagName = obj.getAttribute('as-element') || obj.tagName;
                    var elAdapters = _this.adapters[tagName];
                    if (!elAdapters) {
                        return null;
                    }
                    var propertyAdapter = elAdapters.properties[propertyName];
                    if (propertyAdapter) {
                        var observer = propertyAdapter.getObserver(obj, propertyName, _this.observerLocator, descriptor);
                        if (observer) {
                            return observer;
                        }
                    }
                }
                return null;
            }
        });
    };
    AureliaUX.prototype.getOrCreateUxElementAdapters = function (tagName) {
        if (!this.adapterCreated) {
            this.createAdapter();
            this.adapterCreated = true;
        }
        var adapters = this.adapters;
        var elementAdapters = adapters[tagName] || adapters[tagName.toLowerCase()];
        if (!elementAdapters) {
            elementAdapters = adapters[tagName] = adapters[tagName.toLowerCase()] = { tagName: tagName, properties: {} };
        }
        return elementAdapters;
    };
    AureliaUX.prototype.interceptDetermineDefaultBindingMode = function () {
        // tslint:disable-next-line
        var ux = this;
        var originalFn = aurelia_templating_binding__WEBPACK_IMPORTED_MODULE_2__["SyntaxInterpreter"].prototype.determineDefaultBindingMode;
        aurelia_templating_binding__WEBPACK_IMPORTED_MODULE_2__["SyntaxInterpreter"].prototype.determineDefaultBindingMode = function (element, attrName, context) {
            var tagName = element.getAttribute('as-element') || element.tagName;
            var elAdapters = ux.adapters[tagName];
            if (elAdapters) {
                var propertyAdapter = elAdapters.properties[attrName];
                if (propertyAdapter) {
                    return propertyAdapter.defaultBindingMode;
                }
            }
            return originalFn.call(this, element, attrName, context);
        };
    };
    AureliaUX.prototype.start = function (config) {
        var _this = this;
        var found = this.availableHosts.find(function (x) { return x.isAvailable; });
        if (found === undefined) {
            throw new Error('Could not determine host environment');
        }
        this.host = found;
        return this.host.start(config).then(function (platform) {
            _this.platform = platform;
            _this.design = platform.design;
            _this.designProcessor.setSwatchVariables();
            _this.designProcessor.setDesignVariables(platform.design);
            _this.designProcessor.setDesignWatches(platform.design);
            return _this;
        });
    };
    AureliaUX.prototype.addUxElementObserverAdapter = function (tagName, properties) {
        if (!this.adapterCreated) {
            this.createAdapter();
            this.adapterCreated = true;
        }
        var elementAdapters = this.getOrCreateUxElementAdapters(tagName);
        Object.assign(elementAdapters.properties, properties);
    };
    AureliaUX.prototype.registerUxElementConfig = function (observerAdapter) {
        if (!this.bindingModeIntercepted) {
            this.interceptDetermineDefaultBindingMode();
            this.bindingModeIntercepted = true;
        }
        this.addUxElementObserverAdapter(observerAdapter.tagName.toUpperCase(), observerAdapter.properties);
    };
    AureliaUX = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(_ux_configuration__WEBPACK_IMPORTED_MODULE_6__["UXConfiguration"], aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["Container"], _designs_design_processor__WEBPACK_IMPORTED_MODULE_7__["DesignProcessor"], aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["ObserverLocator"])
    ], AureliaUX);
    return AureliaUX;
}());

//# sourceMappingURL=aurelia-ux.js.map

/***/ }),

/***/ "GUfm":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/platforms/ios.js ***!
  \****************************************************************************/
/*! exports provided: IOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOS", function() { return IOS; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _designs_ios_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designs/ios-design */ "hT0v");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var IOS = /** @class */ (function () {
    function IOS(design) {
        this.design = design;
        this.type = 'ios';
    }
    IOS = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(_designs_ios_design__WEBPACK_IMPORTED_MODULE_1__["IOSDesign"])
    ], IOS);
    return IOS;
}());

//# sourceMappingURL=ios.js.map

/***/ }),

/***/ "H3F7":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/effects/paper-ripple.js ***!
  \***********************************************************************************/
/*! exports provided: PaperRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperRipple", function() { return PaperRipple; });
/* harmony import */ var _paper_wave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paper-wave */ "l0+n");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");


/**
 * Provides all the logic to produce ripple visual effect.
 * Other elements can use it to simulate rippling effect emanating from the point of contact.
 */
var PaperRipple = /** @class */ (function () {
    /**
     * Initializes a new instance of the `PaperRipple` class with the specified `config` object.
     */
    function PaperRipple(cfg) {
        if (cfg === void 0) { cfg = {}; }
        this.waves = [];
        this.initialOpacity = cfg.initialOpacity || 0.25;
        this.opacityDecayVelocity = cfg.opacityDecayVelocity || 0.8;
        this.initTarget(cfg && cfg.nodeType ? cfg : cfg.target && cfg.target.nodeType ? cfg.target : null);
        this.recenters = cfg.recenters || this.recenters;
        this.center = cfg.center || this.center;
        this.round = cfg.round || this.round;
    }
    Object.defineProperty(PaperRipple.prototype, "recenters", {
        /**
         * Determines whether all the waves should be re-centered towards the center of the container.
         * @returns If `true`, waves will exhibit a gravitational pull towards the center of the container as they fade away.
         */
        get: function () {
            return this.$.hasAttribute('recenters');
        },
        /**
         * Sets the value that indicates whether all the waves should be re-centered towards the center of the container.
         * @returns Nothing.
         */
        set: function (newValue) {
            if (newValue) {
                this.$.setAttribute('recenters', '');
            }
            else {
                this.$.removeAttribute('recenters');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperRipple.prototype, "center", {
        /**
         * Determines whether all the waves should start a movement from the center of the container.
         * @returns If `true`, waves will center inside its container
         */
        get: function () {
            return this.$.hasAttribute('center');
        },
        /**
         * Sets the value that indicates whether all the waves should start a movement from the center of the container.
         * @returns Nothing.
         */
        set: function (newValue) {
            if (newValue) {
                this.$.setAttribute('center', '');
            }
            else {
                this.$.removeAttribute('center');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperRipple.prototype, "round", {
        /**
         * Determines whether ripple effect should apply within a circle.
         * @returns If `true`, ripple effect will apply within a circle.
         */
        get: function () {
            return this.$.classList.contains('paper-ripple--round');
        },
        /**
         * Sets the value that indicates whether ripple effect should apply within a circle.
         * @returns Nothing.
         */
        set: function (newValue) {
            this.$.classList.toggle('paper-ripple--round', newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperRipple.prototype, "shouldKeepAnimating", {
        /**
         * Determines whether the ripple should keep animating or not.
         * @returns `true`, if so, otherwise `false`.
         */
        get: function () {
            return this.waves.some(function (wave) { return !wave.isAnimationComplete; });
        },
        enumerable: true,
        configurable: true
    });
    PaperRipple.prototype.initTarget = function (target) {
        if (target === void 0) { target = null; }
        var doc = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].global.document;
        this.$ = target || doc.createElement('div');
        this.$.classList.add('paper-ripple');
        if (!this.$background) {
            this.$background = target &&
                target.querySelector('.paper-ripple__background') || doc.createElement('div');
            this.$background.classList.add('paper-ripple__background');
            this.$.appendChild(this.$background);
        }
        if (!this.$waves) {
            this.$waves = target &&
                target.querySelector('.paper-ripple__waves') || doc.createElement('div');
            this.$waves.classList.add('paper-ripple__waves');
            this.$.appendChild(this.$waves);
        }
        return this;
    };
    /**
     * Adds new wave to the list of visual ripples.
     * @returns Current instance for method chaining.
     */
    PaperRipple.prototype.addWave = function () {
        var wave = new _paper_wave__WEBPACK_IMPORTED_MODULE_0__["PaperWave"](this);
        this.$waves.appendChild(wave.$);
        this.$background.style.backgroundColor = wave.color;
        this.waves.push(wave);
        return wave;
    };
    /**
     * Produces a ripple-down effect.
     *
     * @param  ev Object containing coordinates of the point of contact.
     * @returns Current instance for method chaining.
     */
    PaperRipple.prototype.downAction = function (ev) {
        var wave = this.addWave();
        wave.downAction(ev);
        this.animate();
        return this;
    };
    /**
     * Produces a ripple-up effect.
     * @returns {PaperRipple} Current instance for method chaining.
     */
    PaperRipple.prototype.upAction = function () {
        this.waves.forEach(function (wave) { wave.upAction(); });
        this.animate();
        return this;
    };
    /**
     * Removes given wave from the list of visual ripples.
     * @param wave - The wave to remove.
     * @returns Current instance for method chaining.
     */
    PaperRipple.prototype.removeWave = function (wave) {
        var waveIndex = this.waves.indexOf(wave);
        if (waveIndex < 0) {
            return this;
        }
        this.waves.splice(waveIndex, 1);
        wave.remove();
        return this;
    };
    /**
     * Animates all the waves in the list of visual ripples.
     * @returns Current instance for method chaining.
     */
    PaperRipple.prototype.animate = function () {
        // tslint:disable:prefer-const
        for (var i = 0, l = this.waves.length; i < l; i++) {
            var wave = this.waves[i];
            if (wave) {
                wave.draw();
                this.$background.style.opacity = wave.outerOpacity.toString();
                if (wave.isWaveFullyOpaque && !wave.isMaxRadiusReached) {
                    this.removeWave(wave);
                }
            }
        }
        // tslint:enable:prefer-const
        if (!this.shouldKeepAnimating && this.waves.length === 0) {
            this.$background.style.backgroundColor = null;
        }
        else {
            aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].requestAnimationFrame(this.animate.bind(this));
        }
        return this;
    };
    return PaperRipple;
}());

//# sourceMappingURL=paper-ripple.js.map

/***/ }),

/***/ "HEz9":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/card/dist/native-modules/ux-card-theme.js ***!
  \****************************************************************************/
/*! exports provided: UxCardTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxCardTheme", function() { return UxCardTheme; });
var UxCardTheme = /** @class */ (function () {
    function UxCardTheme() {
        this.themeKey = 'card';
    }
    return UxCardTheme;
}());

//# sourceMappingURL=ux-card-theme.js.map

/***/ }),

/***/ "Hnkm":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/ux-datepicker-theme.js ***!
  \****************************************************************************************/
/*! exports provided: UxDatepickerTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxDatepickerTheme", function() { return UxDatepickerTheme; });
var UxDatepickerTheme = /** @class */ (function () {
    function UxDatepickerTheme() {
        this.themeKey = 'datepicker';
    }
    return UxDatepickerTheme;
}());

//# sourceMappingURL=ux-datepicker-theme.js.map

/***/ }),

/***/ "IdUL":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/ux-configuration.js ***!
  \*******************************************************************************/
/*! exports provided: UXConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UXConfiguration", function() { return UXConfiguration; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-logging */ "MP1E");
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-loader */ "ZdUM");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/global-style-engine */ "zQGn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UXConfiguration = /** @class */ (function () {
    function UXConfiguration(loader, globalStyleEngine) {
        this.loader = loader;
        this.globalStyleEngine = globalStyleEngine;
        this.logger = Object(aurelia_logging__WEBPACK_IMPORTED_MODULE_1__["getLogger"])('aurelia-ux');
    }
    UXConfiguration.prototype.defaultConfiguration = function () {
        this.cssNormalize();
        return this;
    };
    UXConfiguration.prototype.cssNormalize = function () {
        var _this = this;
        './styles/normalize.css';
        var fullCssPath = '@aurelia-ux/core/styles/normalize.css';
        this
            .loader
            .loadText(fullCssPath)
            .catch(function (err) {
            _this.logger.warn('Aurelia-UX Core failed to load normalize.css, some visual errors may appear.', err);
        })
            .then(function (text) {
            if (text) {
                _this.globalStyleEngine.addOrUpdateGlobalStyle(fullCssPath, text);
            }
        });
        return this;
    };
    UXConfiguration = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(aurelia_loader__WEBPACK_IMPORTED_MODULE_2__["Loader"], _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_4__["GlobalStyleEngine"])
    ], UXConfiguration);
    return UXConfiguration;
}());

//# sourceMappingURL=ux-configuration.js.map

/***/ }),

/***/ "J012":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/components/ux-input-component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "L7WW":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/colors/swatches.js ***!
  \******************************************************************************/
/*! exports provided: swatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swatches", function() { return swatches; });
var swatches = {
    red: {
        p50: '#FFEBEE',
        p100: '#FFCDD2',
        p200: '#EF9A9A',
        p300: '#E57373',
        p400: '#EF5350',
        p500: '#F44336',
        p600: '#E53935',
        p700: '#D32F2F',
        p800: '#C62828',
        p900: '#B71C1C',
        a100: '#FF8A80',
        a200: '#FF5252',
        a400: '#FF1744',
        a700: '#D50000'
    },
    pink: {
        p50: '#FCE4EC',
        p100: '#F8BBD0',
        p200: '#F48FB1',
        p300: '#F06292',
        p400: '#EC407A',
        p500: '#E91E63',
        p600: '#D81B60',
        p700: '#C2185B',
        p800: '#AD1457',
        p900: '#880E4F',
        a100: '#FF80AB',
        a200: '#FF4081',
        a400: '#F50057',
        a700: '#C51162'
    },
    purple: {
        p50: '#F3E5F5',
        p100: '#E1BEE7',
        p200: '#CE93D8',
        p300: '#BA68C8',
        p400: '#AB47BC',
        p500: '#9C27B0',
        p600: '#8E24AA',
        p700: '#7B1FA2',
        p800: '#6A1B9A',
        p900: '#4A148C',
        a100: '#EA80FC',
        a200: '#E040FB',
        a400: '#D500F9',
        a700: '#AA00FF'
    },
    deepPurple: {
        p50: '#EDE7F6',
        p100: '#D1C4E9',
        p200: '#B39DDB',
        p300: '#9575CD',
        p400: '#7E57C2',
        p500: '#673AB7',
        p600: '#5E35B1',
        p700: '#512DA8',
        p800: '#4527A0',
        p900: '#311B92',
        a100: '#B388FF',
        a200: '#7C4DFF',
        a400: '#651FFF',
        a700: '#6200EA'
    },
    indigo: {
        p50: '#E8EAF6',
        p100: '#C5CAE9',
        p200: '#9FA8DA',
        p300: '#7986CB',
        p400: '#5C6BC0',
        p500: '#3F51B5',
        p600: '#3949AB',
        p700: '#303F9F',
        p800: '#283593',
        p900: '#1A237E',
        a100: '#8C9EFF',
        a200: '#536DFE',
        a400: '#3D5AFE',
        a700: '#304FFE'
    },
    blue: {
        p50: '#E3F2FD',
        p100: '#BBDEFB',
        p200: '#90CAF9',
        p300: '#64B5F6',
        p400: '#42A5F5',
        p500: '#2196F3',
        p600: '#1E88E5',
        p700: '#1976D2',
        p800: '#1565C0',
        p900: '#0D47A1',
        a100: '#82B1FF',
        a200: '#448AFF',
        a400: '#2979FF',
        a700: '#2962FF'
    },
    lightBlue: {
        p50: '#E1F5FE',
        p100: '#B3E5FC',
        p200: '#81D4FA',
        p300: '#4FC3F7',
        p400: '#29B6F6',
        p500: '#03A9F4',
        p600: '#039BE5',
        p700: '#0288D1',
        p800: '#0277BD',
        p900: '#01579B',
        a100: '#80D8FF',
        a200: '#40C4FF',
        a400: '#00B0FF',
        a700: '#0091EA'
    },
    cyan: {
        p50: '#E0F7FA',
        p100: '#B2EBF2',
        p200: '#80DEEA',
        p300: '#4DD0E1',
        p400: '#26C6DA',
        p500: '#00BCD4',
        p600: '#00ACC1',
        p700: '#0097A7',
        p800: '#00838F',
        p900: '#006064',
        a100: '#84FFFF',
        a200: '#18FFFF',
        a400: '#00E5FF',
        a700: '#00B8D4'
    },
    teal: {
        p50: '#E0F2F1',
        p100: '#B2DFDB',
        p200: '#80CBC4',
        p300: '#4DB6AC',
        p400: '#26A69A',
        p500: '#009688',
        p600: '#00897B',
        p700: '#00796B',
        p800: '#00695C',
        p900: '#004D40',
        a100: '#A7FFEB',
        a200: '#64FFDA',
        a400: '#1DE9B6',
        a700: '#00BFA5'
    },
    green: {
        p50: '#E8F5E9',
        p100: '#C8E6C9',
        p200: '#A5D6A7',
        p300: '#81C784',
        p400: '#66BB6A',
        p500: '#4CAF50',
        p600: '#43A047',
        p700: '#388E3C',
        p800: '#2E7D32',
        p900: '#1B5E20',
        a100: '#B9F6CA',
        a200: '#69F0AE',
        a400: '#00E676',
        a700: '#00C853'
    },
    lightGreen: {
        p50: '#F1F8E9',
        p100: '#DCEDC8',
        p200: '#C5E1A5',
        p300: '#AED581',
        p400: '#9CCC65',
        p500: '#8BC34A',
        p600: '#7CB342',
        p700: '#689F38',
        p800: '#558B2F',
        p900: '#33691E',
        a100: '#CCFF90',
        a200: '#B2FF59',
        a400: '#76FF03',
        a700: '#64DD17'
    },
    lime: {
        p50: '#F9FBE7',
        p100: '#F0F4C3',
        p200: '#E6EE9C',
        p300: '#DCE775',
        p400: '#D4E157',
        p500: '#CDDC39',
        p600: '#C0CA33',
        p700: '#AFB42B',
        p800: '#9E9D24',
        p900: '#827717',
        a100: '#F4FF81',
        a200: '#EEFF41',
        a400: '#C6FF00',
        a700: '#AEEA00'
    },
    yellow: {
        p50: '#FFFDE7',
        p100: '#FFF9C4',
        p200: '#FFF59D',
        p300: '#FFF176',
        p400: '#FFEE58',
        p500: '#FFEB3B',
        p600: '#FDD835',
        p700: '#FBC02D',
        p800: '#F9A825',
        p900: '#F57F17',
        a100: '#FFFF8D',
        a200: '#FFFF00',
        a400: '#FFEA00',
        a700: '#FFD600'
    },
    amber: {
        p50: '#FFF8E1',
        p100: '#FFECB3',
        p200: '#FFE082',
        p300: '#FFD54F',
        p400: '#FFCA28',
        p500: '#FFC107',
        p600: '#FFB300',
        p700: '#FFA000',
        p800: '#FF8F00',
        p900: '#FF6F00',
        a100: '#FFE57F',
        a200: '#FFD740',
        a400: '#FFC400',
        a700: '#FFAB00'
    },
    orange: {
        p50: '#FFF3E0',
        p100: '#FFE0B2',
        p200: '#FFCC80',
        p300: '#FFB74D',
        p400: '#FFA726',
        p500: '#FF9800',
        p600: '#FB8C00',
        p700: '#F57C00',
        p800: '#EF6C00',
        p900: '#E65100',
        a100: '#FFD180',
        a200: '#FFAB40',
        a400: '#FF9100',
        a700: '#FF6D00'
    },
    deepOrange: {
        p50: '#FBE9E7',
        p100: '#FFCCBC',
        p200: '#FFAB91',
        p300: '#FF8A65',
        p400: '#FF7043',
        p500: '#FF5722',
        p600: '#F4511E',
        p700: '#E64A19',
        p800: '#D84315',
        p900: '#BF360C',
        a100: '#FF9E80',
        a200: '#FF6E40',
        a400: '#FF3D00',
        a700: '#DD2C00'
    },
    brown: {
        p50: '#EFEBE9',
        p100: '#D7CCC8',
        p200: '#BCAAA4',
        p300: '#A1887F',
        p400: '#8D6E63',
        p500: '#795548',
        p600: '#6D4C41',
        p700: '#5D4037',
        p800: '#4E342E',
        p900: '#3E2723'
    },
    grey: {
        p50: '#FAFAFA',
        p100: '#F5F5F5',
        p200: '#EEEEEE',
        p300: '#E0E0E0',
        p400: '#BDBDBD',
        p500: '#9E9E9E',
        p600: '#757575',
        p700: '#616161',
        p800: '#424242',
        p900: '#212121'
    },
    blueGrey: {
        p50: '#ECEFF1',
        p100: '#CFD8DC',
        p200: '#B0BEC5',
        p300: '#90A4AE',
        p400: '#78909C',
        p500: '#607D8B',
        p600: '#546E7A',
        p700: '#455A64',
        p800: '#37474F',
        p900: '#263238'
    },
    black: '#000000',
    white: '#FFFFFF'
};
//# sourceMappingURL=swatches.js.map

/***/ }),

/***/ "Ldb8":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/components/ux-input-component--outline.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "RwAH":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/hosts/cordova.js ***!
  \****************************************************************************/
/*! exports provided: Cordova */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cordova", function() { return Cordova; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var _platforms_ios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../platforms/ios */ "GUfm");
/* harmony import */ var _platforms_android__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platforms/android */ "BQW+");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Cordova = /** @class */ (function () {
    function Cordova(container) {
        this.container = container;
        this.type = 'cordova';
    }
    Object.defineProperty(Cordova.prototype, "isAvailable", {
        get: function () {
            return !!aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].global.cordova;
        },
        enumerable: true,
        configurable: true
    });
    Cordova.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve) {
            aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].addEventListener('deviceready', function () {
                switch (_this.getPlatformType()) {
                    case 'ios':
                        resolve(_this.container.get(_platforms_ios__WEBPACK_IMPORTED_MODULE_2__["IOS"]));
                        break;
                    default:
                        resolve(_this.container.get(_platforms_android__WEBPACK_IMPORTED_MODULE_3__["Android"]));
                        break;
                }
            }, false);
        });
    };
    Cordova.prototype.getPlatformType = function () {
        var device = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].global.device || { platform: 'android' };
        return device.platform.toLowerCase();
    };
    Cordova = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["Container"])
    ], Cordova);
    return Cordova;
}());

//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ "T61M":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/hosts/web.js ***!
  \************************************************************************/
/*! exports provided: Web */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web", function() { return Web; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _designs_material_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designs/material-design */ "61Y0");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Web = /** @class */ (function () {
    function Web(design) {
        this.design = design;
        this.type = 'web';
        this.isAvailable = true;
    }
    Web.prototype.start = function () {
        var _this = this;
        return Promise.resolve().then(function () { return _this; });
    };
    Web = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(_designs_material_design__WEBPACK_IMPORTED_MODULE_1__["MaterialDesign"])
    ], Web);
    return Web;
}());

//# sourceMappingURL=web.js.map

/***/ }),

/***/ "cjW2":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/styles/style-engine.js ***!
  \**********************************************************************************/
/*! exports provided: StyleEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleEngine", function() { return StyleEngine; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _style_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-controller */ "x8yp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StyleEngine = /** @class */ (function () {
    function StyleEngine(styleController) {
        this.styleController = styleController;
    }
    /**
     * Processes a UxTheme into the corresponding CSS Variables
     * and applies them to the provided element. If no theme is
     * provided then the theme will be setup as a default theme
     * and set CSS Variables in the document head.
     *
     * @param element Element to apply the processed UxTheme to.
     * @param theme UxTheme to process.
     */
    StyleEngine.prototype.applyTheme = function (theme, element) {
        if (theme == null || theme.themeKey == null) {
            return;
        }
        this.styleController.updateTheme(theme, element);
    };
    /**
     * Applies an array of themes. This is to enable the creation of
     * large theme sets that can be easily applied with one call.
     *
     * @param themes Array of UxThemes to be applied.
     */
    StyleEngine.prototype.applyThemeGroup = function (themes) {
        for (var _i = 0, themes_1 = themes; _i < themes_1.length; _i++) {
            var theme = themes_1[_i];
            this.applyTheme(theme);
        }
    };
    /**
     * Retrieves the default theme object for the provided key that can then be updated.
     *
     * @param key Key of the theme to be retrieved.
     */
    StyleEngine.prototype.getDefaultTheme = function (key) {
        return this.styleController.themes[key];
    };
    StyleEngine = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(_style_controller__WEBPACK_IMPORTED_MODULE_1__["StyleController"])
    ], StyleEngine);
    return StyleEngine;
}());

//# sourceMappingURL=style-engine.js.map

/***/ }),

/***/ "fi93":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/components/boolean-attr-binding-behavior.js ***!
  \*******************************************************************************************************/
/*! exports provided: BooleanBB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanBB", function() { return BooleanBB; });
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BooleanBB = /** @class */ (function () {
    function BooleanBB() {
    }
    BooleanBB.prototype.bind = function (binding) {
        binding.targetObserver = new BooleanAttributeObserver(binding.target, binding.targetProperty);
    };
    BooleanBB.prototype.unbind = function () {
        // Empty
    };
    BooleanBB = __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_0__["bindingBehavior"])('booleanAttr')
    ], BooleanBB);
    return BooleanBB;
}());

var BooleanAttributeObserver = /** @class */ (function () {
    function BooleanAttributeObserver(element, attr) {
        this.element = element;
        this.attr = attr;
        this.useString = /(?:^data-)|(?:^aria-)|\w+:/.test(attr);
    }
    BooleanAttributeObserver.prototype.getValue = function () {
        var val = this.element.getAttribute(this.attr);
        return val || val === '' ? true : false;
    };
    BooleanAttributeObserver.prototype.setValue = function (newValue) {
        if (newValue || newValue === '') {
            return this.element.setAttribute(this.attr, this.useString ? 'true' : '');
        }
        return this.useString ? this.element.setAttribute(this.attr, 'false') : this.element.removeAttribute(this.attr);
    };
    BooleanAttributeObserver.prototype.subscribe = function () {
        var msg = "Observation of a \"" + this.element.nodeName + "\" element's \"" + this.attr + "\" attribute is not supported.";
        throw new Error(msg);
    };
    return BooleanAttributeObserver;
}());
//# sourceMappingURL=boolean-attr-binding-behavior.js.map

/***/ }),

/***/ "geiO":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/resources/moment-rexports.js ***!
  \**********************************************************************************************/
/*! exports provided: moment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moment", function() { return _moment; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

// tslint:disable-next-line: variable-name
var _moment = moment__WEBPACK_IMPORTED_MODULE_0___default.a;

//# sourceMappingURL=moment-rexports.js.map

/***/ }),

/***/ "hT0v":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/designs/ios-design.js ***!
  \*********************************************************************************/
/*! exports provided: IOSDesign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSDesign", function() { return IOSDesign; });
/* harmony import */ var _colors_swatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors/swatches */ "L7WW");
/* harmony import */ var _colors_shadows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colors/shadows */ "7SWj");


var IOSDesign = /** @class */ (function () {
    function IOSDesign() {
        this.type = 'ios';
        this.appBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p50;
        this.appForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
        this.surfaceBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p100;
        this.surfaceForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
        this.controlBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p300;
        this.controlForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
        this.controlLabelColor = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p600;
        this.primary = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].indigo.p500;
        this.primaryForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.primaryLight = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].indigo.p100;
        this.primaryLightForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p500;
        this.primaryDark = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].indigo.p700;
        this.primaryDarkForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.accent = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].pink.a200;
        this.accentForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.accentLight = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].pink.a100;
        this.accentLightForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.accentDark = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].pink.a400;
        this.accentDarkForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.disabledBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p500;
        this.disabledForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].blueGrey.p100;
        this.error = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].red.p500;
        this.onError = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.elevationNone = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_0;
        this.elevation2dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_2dp;
        this.elevation3dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_3dp;
        this.elevation4dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_4dp;
        this.elevation6dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_6dp;
        this.elevation8dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_8dp;
        this.elevation16dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_16dp;
        this.elevation24dp = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_24dp;
        this.elevationFocus = _colors_shadows__WEBPACK_IMPORTED_MODULE_1__["shadows"].depth_focus;
    }
    return IOSDesign;
}());

//# sourceMappingURL=ios-design.js.map

/***/ }),

/***/ "hfvh":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip-input-theme.js ***!
  \****************************************************************************************/
/*! exports provided: UxChipInputTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxChipInputTheme", function() { return UxChipInputTheme; });
var UxChipInputTheme = /** @class */ (function () {
    function UxChipInputTheme() {
        this.themeKey = 'chip-input';
    }
    return UxChipInputTheme;
}());

//# sourceMappingURL=ux-chip-input-theme.js.map

/***/ }),

/***/ "jd77":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/hosts/electron.js ***!
  \*****************************************************************************/
/*! exports provided: Electron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Electron", function() { return Electron; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _designs_material_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designs/material-design */ "61Y0");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web */ "T61M");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ "70NS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Electron = /** @class */ (function () {
    function Electron() {
        this.type = 'electron';
    }
    Object.defineProperty(Electron.prototype, "isAvailable", {
        get: function () {
            var p = aurelia_pal__WEBPACK_IMPORTED_MODULE_3__["PLATFORM"].global.process;
            return p && p.versions && p.versions.electron;
        },
        enumerable: true,
        configurable: true
    });
    Electron.prototype.start = function (config) {
        return Promise.resolve().then(function () { return config.container.get(_web__WEBPACK_IMPORTED_MODULE_2__["Web"]); });
    };
    Electron = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(_designs_material_design__WEBPACK_IMPORTED_MODULE_1__["MaterialDesign"])
    ], Electron);
    return Electron;
}());

//# sourceMappingURL=electron.js.map

/***/ }),

/***/ "l0+n":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/effects/paper-wave.js ***!
  \*********************************************************************************/
/*! exports provided: PaperWave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperWave", function() { return PaperWave; });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var _element_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-rect */ "viDh");


// tslint:disable:variable-name
var _window = aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].global;
var _doc = _window.document;
var _now = aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].performance.now.bind(aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].performance);
// tslint:enable:variable-name
/**
 * Provides all the logic to produce a one-time rippling effect.
 */
var PaperWave = /** @class */ (function () {
    /**
     * Initializes a new instance of the `PaperWave` class with the specified `PaperRipple` instance.
     */
    function PaperWave(options) {
        this.color = _window.getComputedStyle(options.$).color;
        this.containerRect = new _element_rect__WEBPACK_IMPORTED_MODULE_1__["ElementRect"](options.$);
        this.recenters = options.recenters || false;
        this.center = options.center || false;
        this.initialOpacity = options.initialOpacity || 0.25;
        this.opacityDecayVelocity = options.opacityDecayVelocity || 0.8;
        this.$wave = _doc.createElement('div');
        this.$wave.classList.add('paper-ripple__wave');
        this.$wave.style.backgroundColor = this.color;
        this.$ = _doc.createElement('div');
        this.$.classList.add('paper-ripple__wave-container');
        this.$.appendChild(this.$wave);
        this.resetDefaults();
    }
    Object.defineProperty(PaperWave.prototype, "touchDownElapsed", {
        /**
         * Gets the time in milliseconds elapsed from the moment where interaction with the wave was started.
         * @returns The time in milliseconds.
         */
        get: function () {
            if (!this.touchDownStarted) {
                return 0;
            }
            var elapsed = _now() - this.touchDownStarted;
            if (this.touchUpStarted) {
                elapsed -= this.touchUpElapsed;
            }
            return elapsed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "touchUpElapsed", {
        /**
         * Gets the time in milliseconds elapsed from the moment where interaction with the wave was ended.
         * @returns The time in milliseconds.
         */
        get: function () {
            return this.touchUpStarted ? _now() - this.touchUpStarted : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "touchDownElapsedSeconds", {
        /**
         * Gets the time in seconds elapsed since the moment where interaction with the wave was started.
         * @returns The time in seconds.
         */
        get: function () {
            return this.touchDownElapsed / 1000;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "touchUpElapsedSeconds", {
        /**
         * Gets the time in seconds elapsed since the moment where interaction with the wave was ended.
         * @returns The time in seconds.
         */
        get: function () {
            return this.touchUpElapsed / 1000;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "mouseInteractionSeconds", {
        /**
         * Gets the total interaction time.
         * @returns The time in seconds
         */
        get: function () {
            return this.touchDownElapsedSeconds + this.touchUpElapsedSeconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "radius", {
        /**
         * Gets the wave's radius at the current time.
         *
         * @returns {Number} The value of the wave's radius.
         */
        get: function () {
            var radius = Math.min(Math.sqrt(Math.pow(this.containerRect.width, 2) + Math.pow(this.containerRect.height, 2)), PaperWave.MAX_RADIUS) * 1.1 + 5;
            var elapsed = 1.1 - 0.2 * (radius / PaperWave.MAX_RADIUS);
            var currentTime = this.mouseInteractionSeconds / elapsed;
            var actualRadius = radius * (1 - Math.pow(80, -currentTime));
            return Math.abs(actualRadius);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "opacity", {
        /**
         * Gets the wave's opacity at the current time.
         * @returns The value of the wave's opacity.
         */
        get: function () {
            if (!this.touchUpStarted) {
                return this.initialOpacity;
            }
            return Math.max(0, this.initialOpacity - this.touchUpElapsedSeconds * this.opacityDecayVelocity);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "outerOpacity", {
        /**
         * Gets the wave's outer opacity at the current time.
         * @returns The value of the wave's outer opacity.
         */
        get: function () {
            return Math.max(0, Math.min(this.touchUpElapsedSeconds * 0.3, this.opacity));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "isWaveFullyOpaque", {
        /**
         * Determines whether the wave is fully opaque or not.
         * @returns `true`, if so, otherwise `false`.
         */
        get: function () {
            return this.opacity < 0.01 && this.radius >= Math.min(this.maxRadius, PaperWave.MAX_RADIUS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "isMaxRadiusReached", {
        /**
         * Determines whether the wave reached its max radius or not.
         * @returns `true`, if so, otherwise `false`.
         */
        get: function () {
            return this.opacity >= this.initialOpacity && this.radius >= Math.min(this.maxRadius, PaperWave.MAX_RADIUS);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "isAnimationComplete", {
        /**
         * Determines whether the animation of rippling effect completed or not.
         * @returns `true`, if so, otherwise `false`.
         */
        get: function () {
            return this.touchUpStarted ? this.isWaveFullyOpaque : this.isMaxRadiusReached;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "translationFraction", {
        /**
         * Gets the wave's translation fraction value.
         * @returns The value of the wave's translation fraction.
         */
        get: function () {
            return Math.min(1, this.radius / this.containerRect.size * 2 / Math.sqrt(2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "currentPosition", {
        /**
         * Gets the wave's current position.
         * @returns {{x: Number, y: Number}} Object containing coordinates of the wave's current position.
         */
        get: function () {
            var translateFraction = this.translationFraction;
            var x = this.startPosition.x;
            var y = this.startPosition.y;
            if (this.endPosition.x) {
                x = this.startPosition.x + translateFraction * (this.endPosition.x - this.startPosition.x);
            }
            if (this.endPosition.y) {
                y = this.startPosition.y + translateFraction * (this.endPosition.y - this.startPosition.y);
            }
            return { x: x, y: y };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaperWave.prototype, "isTouchDown", {
        /**
         * Determines whether the pointing device is still in interaction with the current wave.
         *
         * @returns {Boolean} `true`, if so, otherwise `false`.
         */
        get: function () {
            return this.touchDownStarted && !this.touchUpStarted;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets all the wave's values.
     * @returns Current instance for method chaining.
     */
    PaperWave.prototype.resetDefaults = function () {
        this.maxRadius = 0;
        this.touchDownStarted = 0;
        this.touchUpStarted = 0;
        this.startPosition = { x: 0, y: 0 };
        this.endPosition = { x: 0, y: 0 };
        return this;
    };
    /**
     * Performs updating of the wave's values.
     * @returns Current instance for method chaining.
     */
    PaperWave.prototype.draw = function () {
        var scaleFactor = this.radius / (this.containerRect.size / 2);
        var containerCenter = this.containerRect.center;
        var currentPos = this.currentPosition;
        var deltaPos = {
            x: currentPos.x - containerCenter.x,
            y: currentPos.y - containerCenter.y
        };
        this.$wave.style.opacity = this.opacity.toString();
        // cssString = 'translate(' + deltaPos.x + 'px, ' + deltaPos.y + 'px)';
        // this.$.style.webkitTransform = cssString;
        // this.$.style.mozTransform = cssString;
        // this.$.style.msTransform = cssString;
        // this.$.style.oTransform = cssString;
        this.$.style.transform = 'translate3d(' + deltaPos.x + 'px, ' + deltaPos.y + 'px, 0)';
        // cssString = 'scale(' + scaleFactor + ',' + scaleFactor + ')';
        // this.$wave.style.webkitTransform = cssString;
        // this.$wave.style.mozTransform = cssString;
        // this.$wave.style.msTransform = cssString;
        // this.$wave.style.oTransform = cssString;
        this.$wave.style.transform = 'scale3d(' + scaleFactor + ',' + scaleFactor + ', 1)';
        return this;
    };
    /**
     * Performs ripple-down effect on the current wave.
     * @param An object containing coordinates of interaction point to set start position of ripple effect.
     * @returns Current instance for method chaining.
     */
    PaperWave.prototype.downAction = function (event) {
        if (event === void 0) { event = null; }
        var containerCenter = this.containerRect.center;
        this.resetDefaults();
        this.touchDownStarted = _now();
        this.startPosition = this.center || !event ?
            containerCenter :
            {
                x: (event.clientX || event.x) - this.containerRect.boundingRect.left,
                y: (event.clientY || event.y) - this.containerRect.boundingRect.top
            };
        this.endPosition = this.recenters ? containerCenter : this.endPosition;
        this.maxRadius = this.containerRect.distanceToFarthestCorner(this.startPosition);
        this.$.style.top = (this.containerRect.height - this.containerRect.size) / 2 + 'px';
        this.$.style.left = (this.containerRect.width - this.containerRect.size) / 2 + 'px';
        this.$.style.width = this.containerRect.size + 'px';
        this.$.style.height = this.containerRect.size + 'px';
        return this;
    };
    /**
     * Performs ripple-up effect on the current wave.
     * @returns Current instance for method chaining.
     */
    PaperWave.prototype.upAction = function () {
        if (!this.isTouchDown) {
            return this;
        }
        this.touchUpStarted = _now();
        return this;
    };
    /**
     * Removes the wave from a DOM.
     * @returns Current instance for method chaining.
     */
    PaperWave.prototype.remove = function () {
        this.$.parentNode.removeChild(this.$);
        return this;
    };
    /**
     * Represents the max possible value of the wave's radius.
     */
    PaperWave.MAX_RADIUS = 300;
    return PaperWave;
}());

//# sourceMappingURL=paper-wave.js.map

/***/ }),

/***/ "mg+8":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/components/ux-choice.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "oiLq":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/components/background-color-parent.js ***!
  \*************************************************************************************************/
/*! exports provided: getBackgroundColorThroughParents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundColorThroughParents", function() { return getBackgroundColorThroughParents; });
/**
 * @description This function will try to find the background color upon which
 * an element is placed by going up the DOM tree until it finds an element with
 * a defined color. If it finds none, it will return '#FFFFFF';
 *
 * @param {HTMLElement} element Element for which will want the background color
 *
 * @returns {string}
 */
function getBackgroundColorThroughParents(element) {
    var parentBackgroundColor = '';
    while (parentBackgroundColor === '' && element.parentElement) {
        var color = window.getComputedStyle(element.parentElement, null).getPropertyValue('background-color');
        if (color.toString() === 'rgba(0, 0, 0, 0)') {
            color = '';
        }
        parentBackgroundColor = color;
        element = element.parentElement;
    }
    return parentBackgroundColor || '#FFFFFF';
}
//# sourceMappingURL=background-color-parent.js.map

/***/ }),

/***/ "qTlR":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/chip-input/dist/native-modules/ux-chip-theme.js ***!
  \**********************************************************************************/
/*! exports provided: UxChipTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxChipTheme", function() { return UxChipTheme; });
var UxChipTheme = /** @class */ (function () {
    function UxChipTheme() {
        this.themeKey = 'chip';
    }
    return UxChipTheme;
}());

//# sourceMappingURL=ux-chip-theme.js.map

/***/ }),

/***/ "shSP":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/datepicker/dist/native-modules/resources/datetime-utility.js ***!
  \***********************************************************************************************/
/*! exports provided: DatetimeUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimeUtility", function() { return DatetimeUtility; });
/* harmony import */ var _moment_rexports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moment-rexports */ "geiO");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var DatetimeUtility = /** @class */ (function () {
    function DatetimeUtility() {
    }
    /**
     * Checks to see if a date is beyond the min or max set date
     * @param date The date to check
     */
    DatetimeUtility.dateOutOfRange = function (date, minDate, maxDate, config) {
        var _this = this;
        var result = false;
        if (minDate != null && date.isBefore(minDate, 'day')) {
            result = true;
        }
        if (maxDate != null && date.isAfter(maxDate, 'day')) {
            result = true;
        }
        if (config && config.calendarSettings) {
            var settings = config.calendarSettings;
            if (settings.disableDays &&
                settings.disableDays.some(function (disabledDate) { return _this.checkDayForDisabled(disabledDate, date); })) {
                result = true;
            }
        }
        return result;
    };
    DatetimeUtility.checkDayForDisabled = function (disabledDateConfig, date) {
        if (disabledDateConfig.weekday != null) {
            return disabledDateConfig.weekday === date.weekday();
        }
        if (disabledDateConfig.day || disabledDateConfig.month || disabledDateConfig.year) {
            var disabledDate = __assign({}, disabledDateConfig);
            if (disabledDate.year == null) {
                disabledDate.year = date.year();
            }
            if (disabledDate.day == null) {
                disabledDate.day = date.date();
            }
            if (disabledDate.month == null) {
                disabledDate.month = date.month() + 1;
            }
            var parsedVal = Object(_moment_rexports__WEBPACK_IMPORTED_MODULE_0__["moment"])(disabledDate.month + "-" + disabledDate.day + "-" + disabledDate.year);
            return parsedVal.isValid() && parsedVal.isSame(date, 'day');
        }
        return false;
    };
    return DatetimeUtility;
}());

//# sourceMappingURL=datetime-utility.js.map

/***/ }),

/***/ "viDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/effects/element-rect.js ***!
  \***********************************************************************************/
/*! exports provided: ElementRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementRect", function() { return ElementRect; });
/**
 * Provides the utilities for getting element's metrics.
 */
var ElementRect = /** @class */ (function () {
    /**
     * Initializes a new instance of the `ElementRect` class with the specified `element`.
     */
    function ElementRect(element) {
        this.element = element;
        this.width = this.boundingRect.width;
        this.height = this.boundingRect.height;
        this.size = Math.max(this.width, this.height);
    }
    Object.defineProperty(ElementRect.prototype, "center", {
        /**
         * Returns the center coordinates of the current element.
         */
        get: function () {
            return {
                x: this.width / 2,
                y: this.height / 2
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementRect.prototype, "boundingRect", {
        /**
         * Returns the size of the current element and its position relative to the viewport.
         */
        get: function () {
            return this.element.getBoundingClientRect();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Calculates euclidean distance between two points.
     * @param point1 - Start point
     * @param point2 - End point
     * @returns Distance between two points.
     */
    ElementRect.euclideanDistance = function (point1, point2) {
        return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    };
    /**
     * Calculates the distance between given point and farthest corner of the current element.
     * @param The point object containing x and y coordinates.
     * @returns Distance from a point to the container's farthest corner.
     */
    ElementRect.prototype.distanceToFarthestCorner = function (_a) {
        var _b = _a.x, x = _b === void 0 ? 0 : _b, _c = _a.y, y = _c === void 0 ? 0 : _c;
        return Math.max(ElementRect.euclideanDistance({ x: x, y: y }, { x: 0, y: 0 }), ElementRect.euclideanDistance({ x: x, y: y }, { x: this.width, y: 0 }), ElementRect.euclideanDistance({ x: x, y: y }, { x: 0, y: this.height }), ElementRect.euclideanDistance({ x: x, y: y }, { x: this.width, y: this.height }));
    };
    /**
     * Determines if the specified point is contained within this element.
     * @param {(Event|Object)} ev - The object containing coordinates of the point.
     * @param {Number} ev.x - The `x` coordinate of the point.
     * @param {Number} ev.y - The `y` coordinate of the point.
     * @param {Number} ev.clientX - The `x` coordinate of the point.
     * @param {Number} ev.clientY - The `y` coordinate of the point.
     * @returns {Boolean} Returns `true` if the `x` and `y` coordinates of point is a
     * point inside this element's rectangle, otherwise `false`.
     */
    ElementRect.prototype.contains = function (ev) {
        var l = this.boundingRect.left;
        var t = this.boundingRect.top;
        var w = this.boundingRect.width;
        var h = this.boundingRect.height;
        var x = ev.x || ev.clientX || 0;
        var y = ev.y || ev.clientY || 0;
        return x >= l && x <= l + w && y >= t && y <= t + h;
    };
    return ElementRect;
}());

//# sourceMappingURL=element-rect.js.map

/***/ }),

/***/ "x8yp":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/styles/style-controller.js ***!
  \**************************************************************************************/
/*! exports provided: StyleController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleController", function() { return StyleController; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _global_style_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-style-engine */ "zQGn");
/* harmony import */ var _aurelia_ux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aurelia-ux */ "DwSp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StyleController = /** @class */ (function () {
    function StyleController(observerLocator, globalStyleEngine, ux) {
        this.observerLocator = observerLocator;
        this.globalStyleEngine = globalStyleEngine;
        this.ux = ux;
        this.themes = [];
    }
    StyleController.prototype.updateTheme = function (theme, element) {
        var baseTheme = { themeKey: 'base-theme' };
        if (theme.themeKey == null) {
            throw new Error('Provided theme has no themeKey property.');
        }
        if (theme.themeKey === 'design') {
            for (var key in theme) {
                if (key !== 'themeKey') {
                    this.ux.design[key] = theme[key];
                }
            }
        }
        else if (element != null) {
            for (var key in theme) {
                if (theme.hasOwnProperty(key) && baseTheme.hasOwnProperty(key) === false) {
                    if (theme[key]) {
                        element.style.setProperty(this.generateCssVariableName(theme.themeKey, key), theme[key]);
                    }
                    else {
                        element.style.removeProperty(this.generateCssVariableName(theme.themeKey, key));
                    }
                }
            }
        }
        else {
            var uxTheme = this.themes.splice(this.themes.indexOf(this.themes[theme.themeKey]))[0];
            if (uxTheme != null) {
                this.removeWatches(uxTheme);
            }
            this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux theme " + theme.themeKey, this.processInnerHtml(theme), ':root');
            this.setWatches(theme);
            this.themes[theme.themeKey] = theme;
        }
    };
    StyleController.prototype.getThemeKeys = function (theme) {
        var baseTheme = { themeKey: 'base-theme' };
        var themeKeys = [];
        for (var key in theme) {
            if (theme.hasOwnProperty(key) && baseTheme.hasOwnProperty(key) === false) {
                themeKeys.push(key);
            }
        }
        return themeKeys;
    };
    StyleController.prototype.generateCssVariableName = function (themeKey, propertyKey) {
        return "--aurelia-ux--" + themeKey + "-" + kebabCase(propertyKey);
    };
    StyleController.prototype.generateCssVariable = function (themeKey, propertyKey, value) {
        if (value === undefined || value === 'undefined') {
            return '';
        }
        return "--aurelia-ux--" + themeKey + "-" + kebabCase(propertyKey) + ": " + value + ";";
    };
    StyleController.prototype.setWatches = function (theme) {
        var _this = this;
        for (var _i = 0, _a = this.getThemeKeys(theme); _i < _a.length; _i++) {
            var key = _a[_i];
            this.observerLocator.getObserver(theme, key).subscribe(function () { return _this.themePropertyChanged(theme); });
        }
    };
    StyleController.prototype.removeWatches = function (theme) {
        var _this = this;
        for (var _i = 0, _a = this.getThemeKeys(theme); _i < _a.length; _i++) {
            var key = _a[_i];
            this.observerLocator.getObserver(theme, key).unsubscribe(function () { return _this.themePropertyChanged(theme); });
        }
    };
    StyleController.prototype.themePropertyChanged = function (theme) {
        this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux theme " + theme.themeKey, this.processInnerHtml(theme), ':root');
    };
    StyleController.prototype.processInnerHtml = function (theme) {
        var designInnerHtml = '';
        for (var _i = 0, _a = this.getThemeKeys(theme); _i < _a.length; _i++) {
            var key = _a[_i];
            if (theme[key]) {
                designInnerHtml += "  " + this.generateCssVariable(theme.themeKey, key, theme[key]) + "\r\n";
            }
        }
        return designInnerHtml;
    };
    StyleController = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["ObserverLocator"], _global_style_engine__WEBPACK_IMPORTED_MODULE_2__["GlobalStyleEngine"], _aurelia_ux__WEBPACK_IMPORTED_MODULE_3__["AureliaUX"])
    ], StyleController);
    return StyleController;
}());

function kebabCase(value) {
    value = value.charAt(0).toLowerCase() + value.slice(1);
    return value.replace(/([A-Z])/g, function (match) { return "-" + match[0].toLowerCase(); });
}
//# sourceMappingURL=style-controller.js.map

/***/ }),

/***/ "zQGn":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/core/dist/native-modules/styles/global-style-engine.js ***!
  \*****************************************************************************************/
/*! exports provided: GlobalStyleEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyleEngine", function() { return GlobalStyleEngine; });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ "MP1E");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");


var GlobalStyleEngine = /** @class */ (function () {
    function GlobalStyleEngine() {
        this.logger = Object(aurelia_logging__WEBPACK_IMPORTED_MODULE_0__["getLogger"])('aurelia-ux');
        this.globalStyles = [];
        this.styleTag = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].querySelector('#aurelia-ux-core');
        if (this.styleTag == null) {
            this.styleTag = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].createElement('style');
            this.styleTag.type = 'text/css';
            this.styleTag.id = 'aurelia-ux-core';
            aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].appendNode(this.styleTag, document.head);
        }
    }
    GlobalStyleEngine.prototype.addOrUpdateGlobalStyle = function (id, css, tagGroup) {
        if (id === undefined || css === undefined) {
            this.logger.warn('AddOrUpdateGlobalStyle: The parameters id and css must both be provided.', { id: id, css: css });
        }
        var index = this.globalStyles.findIndex(function (t) { return t.id === id; });
        if (index > -1) {
            var globalStyle = this.globalStyles[index];
            globalStyle.css = css;
            globalStyle.tagGroup = tagGroup;
        }
        else {
            this.globalStyles.push({ id: id, css: css, tagGroup: tagGroup });
        }
        this.updateGlobalStyleElement();
    };
    GlobalStyleEngine.prototype.removeGlobalStyle = function (id) {
        if (id === undefined) {
            this.logger.warn('removeGlobalStyle: The id parameter must be provided.', { id: id });
        }
        var index = this.globalStyles.findIndex(function (t) { return t.id === id; });
        if (index > -1) {
            this.globalStyles.splice(index, 1);
        }
        this.updateGlobalStyleElement();
    };
    GlobalStyleEngine.prototype.updateGlobalStyleElement = function () {
        var globalStyleGroups = this.globalStyles.reduce(function (groups, globalStyle) {
            var tagGroup = globalStyle['tagGroup'] || '';
            groups[tagGroup] = groups[tagGroup] || [];
            groups[tagGroup].push(globalStyle);
            return groups;
        }, {});
        var innerHtml = '';
        for (var _i = 0, _a = Object.keys(globalStyleGroups); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key !== '') {
                innerHtml += key + " {\r\n";
            }
            for (var _b = 0, _c = globalStyleGroups[key]; _b < _c.length; _b++) {
                var globalStyle = _c[_b];
                innerHtml += "/*** " + globalStyle.id + " styles ***/\r\n";
                innerHtml += globalStyle.css + "\r\n\r\n";
            }
            if (key !== '') {
                innerHtml += '}';
            }
        }
        this.styleTag.innerHTML = innerHtml;
    };
    return GlobalStyleEngine;
}());

//# sourceMappingURL=global-style-engine.js.map

/***/ })

}]);
//# sourceMappingURL=vendors~5172b010.bdc88b8194e0c00ec515.bundle.map