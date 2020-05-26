(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~fe3d664a"],{

/***/ "/nTB":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/colors/shadows.js ***!
  \************************************************************************************************************/
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

/***/ "1QsB":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/hosts/electron.js ***!
  \************************************************************************************************************/
/*! exports provided: Electron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Electron", function() { return Electron; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _designs_material_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designs/material-design */ "ccIO");
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web */ "e0Rp");
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

/***/ "1TMB":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/resources/dismiss-modal-attribute.js ***!
  \*************************************************************************************************/
/*! exports provided: DismissModalAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DismissModalAttribute", function() { return DismissModalAttribute; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _modal_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-util */ "WK2N");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DismissModalAttribute = /** @class */ (function () {
    function DismissModalAttribute(element) {
        this.element = element;
    }
    DismissModalAttribute.prototype.bind = function () {
        this.element.addEventListener('click', this);
    };
    DismissModalAttribute.prototype.unbind = function () {
        this.element.removeEventListener('click', this);
    };
    DismissModalAttribute.prototype.handleEvent = function () {
        var modal = Object(_modal_util__WEBPACK_IMPORTED_MODULE_2__["findModal"])(this.element);
        if (modal !== null) {
            modal.dismiss();
        }
    };
    DismissModalAttribute = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customAttribute"])('dismiss-modal')
    ], DismissModalAttribute);
    return DismissModalAttribute;
}());



/***/ }),

/***/ "4JUj":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/platforms/ios.js ***!
  \***********************************************************************************************************/
/*! exports provided: IOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOS", function() { return IOS; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _designs_ios_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designs/ios-design */ "zCb5");
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

/***/ "6Jse":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/designs/design-processor.js ***!
  \**********************************************************************************************************************/
/*! exports provided: DesignProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignProcessor", function() { return DesignProcessor; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _colors_swatches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colors/swatches */ "x0cT");
/* harmony import */ var _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global-style-engine */ "RnYE");
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
            if (design.hasOwnProperty(key)) {
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

/***/ "6dt4":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/positioning/dist/native-modules/ux-positioning.js ***!
  \************************************************************************************/
/*! exports provided: UxPositioning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxPositioning", function() { return UxPositioning; });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "q281");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_positioning_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-positioning.css */ "71CS");
/* harmony import */ var _ux_positioning_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ux_positioning_css__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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


// import this CSS for the default hidden class `.ux-positioning--hidden`

var flip = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
var UxPositioning = /** @class */ (function () {
    function UxPositioning(configuration, taskQueue, anchor, element, options) {
        this.taskQueue = taskQueue;
        this.preferedPlacement = 'auto';
        this.missingSpaceStrategy = 'flip';
        this.offsetX = 5;
        this.offsetY = 5;
        this.constraintMarginX = 5;
        this.constraintMarginY = 5;
        this.hiddenClass = 'ux-positioning--hidden';
        this.hostOffsetX = 0;
        this.hostOffsetY = 0;
        this.constraintX = 0;
        this.constraintY = 0;
        this.constraintHeight = 0;
        this.constraintWidth = window.innerWidth;
        this.spaceTop = void 0;
        this.spaceRight = void 0;
        this.spaceBottom = void 0;
        this.spaceLeft = void 0;
        var settings = __assign({}, configuration, options);
        this.anchor = anchor;
        this.element = element;
        if (settings && settings.placement) {
            this.preferedPlacement = settings.placement;
        }
        if (settings && settings.missingSpaceStrategy) {
            this.missingSpaceStrategy = settings.missingSpaceStrategy;
        }
        if (settings && settings.hiddenClass) {
            this.hiddenClass = settings.hiddenClass;
        }
        if (settings && settings.offsetX !== undefined) {
            this.offsetX = settings.offsetX;
        }
        if (settings && settings.offsetY !== undefined) {
            this.offsetY = settings.offsetY;
        }
        if (settings && settings.constraintMarginX !== undefined) {
            this.constraintMarginX = settings.constraintMarginX;
        }
        if (settings && settings.constraintMarginY !== undefined) {
            this.constraintMarginY = settings.constraintMarginY;
        }
        this.constraintElement = settings && settings.constraintElement
            ? this.constraintElement = settings.constraintElement
            : this.constraintElement = element.parentElement || window;
        this.init();
        return this;
    }
    UxPositioning.prototype.init = function () {
        var _this = this;
        // When we init the positioning, it might happen that it occurs
        // a little too early and the element that we must positionned
        // is not quite ready. We check this with a DOMRect() and if
        // the width or height are not set we assume we should wait
        // a little before positioning
        this.update();
        var rect = this.element.getBoundingClientRect();
        if (rect.width && rect.height) {
            this.update();
        }
        else {
            // We use queueTask here because queueMicroTask
            // resolves too early in several occasions
            // this.taskQueue.queueTask(() => {
            //   this.update();
            // });
            setTimeout(function () {
                _this.update();
            }, 0);
        }
    };
    UxPositioning.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mainPlacement, hide, alternativePlacement, secondaryPlacement;
            return __generator(this, function (_a) {
                this.resetElement();
                this.prepare();
                mainPlacement = this.getMainPlacement();
                hide = false;
                if (!this.placeMain(mainPlacement, this.missingSpaceStrategy)) {
                    // placeMain returns false if the placement could not be ideally done
                    // with the requested strategy
                    if (this.missingSpaceStrategy === 'flip') {
                        alternativePlacement = flip[mainPlacement];
                        if (!this.placeMain(alternativePlacement)) {
                            // if flip doesn't work either, then we force the main placement
                            this.placeMain(mainPlacement, 'ignore');
                        }
                    }
                    else if (this.missingSpaceStrategy === 'hide') {
                        hide = true;
                    }
                }
                this.element.classList.toggle(this.hiddenClass, hide);
                if (hide) {
                    return [2 /*return*/];
                }
                secondaryPlacement = this.getSecondaryPlacement(mainPlacement);
                this.placeSecondary(secondaryPlacement);
                return [2 /*return*/];
            });
        });
    };
    UxPositioning.prototype.resetElement = function () {
        var style = this.element.style;
        style.position = 'absolute';
        style.top = '0';
        style.left = '0';
        style.right = 'auto';
        style.bottom = 'auto';
        style.width = 'unset';
        style.height = 'unset';
    };
    UxPositioning.prototype.getMainPlacement = function () {
        if (this.preferedPlacement === 'auto' || this.preferedPlacement === 'auto-end' || this.preferedPlacement === 'auto-start') {
            return this.getAutoPlacement();
        }
        return this.preferedPlacement.split('-')[0];
    };
    UxPositioning.prototype.prepare = function () {
        // set first variables that are needed in all scenarios
        this.anchorRect = this.anchor.getBoundingClientRect();
        this.elementRect = this.element.getBoundingClientRect();
        this.hostOffsetX = 0;
        this.hostOffsetY = 0;
        if (this.element.parentElement) {
            // set the host to relative if static
            var style = window.getComputedStyle(this.element.parentElement);
            if (style.position === 'static') {
                this.element.parentElement.style.position = 'relative';
            }
            var rect = this.element.parentElement.getBoundingClientRect();
            this.hostOffsetX = rect.left * -1;
            this.hostOffsetY = rect.top * -1;
            // If the host container has borders, they need to be offseted
            // Important: this suppose a border-box box-sizing
            // The reason is because the border is included in the sizing of the 
            // host (width and height) but not included when it comes to positioning
            // the child element (top:0, left:0 start inside the element)
            if (style.borderLeftWidth) {
                this.hostOffsetX = this.hostOffsetX - parseFloat(style.borderLeftWidth);
            }
            if (style.borderTopWidth) {
                this.hostOffsetY = this.hostOffsetY - parseFloat(style.borderTopWidth);
            }
        }
        this.constraintX = 0;
        this.constraintY = 0;
        this.constraintHeight = 0;
        this.constraintWidth = window.innerWidth;
        if (this.constraintElement instanceof HTMLElement) {
            var rect = this.constraintElement.getBoundingClientRect();
            this.constraintX = rect.left;
            this.constraintY = rect.top;
            this.constraintHeight = rect.height;
            this.constraintWidth = rect.width;
        }
        this.spaceTop = undefined;
        this.spaceRight = undefined;
        this.spaceBottom = undefined;
        this.spaceLeft = undefined;
    };
    UxPositioning.prototype.getSpaceTop = function () {
        if (this.spaceTop !== undefined) {
            return this.spaceTop;
        }
        this.spaceTop = this.anchorRect.top - this.constraintY - this.constraintMarginY;
        return this.spaceTop;
    };
    UxPositioning.prototype.getSpaceRight = function () {
        if (this.spaceRight !== undefined) {
            return this.spaceRight;
        }
        this.spaceRight = this.constraintElement === window
            // tslint:disable-next-line: max-line-length
            ? window.innerWidth - window.scrollX - this.anchorRect.width - this.anchorRect.left - this.constraintX - this.constraintMarginX
            : this.constraintX + this.constraintWidth - this.anchorRect.width - this.anchorRect.left - this.constraintMarginX;
        return this.spaceRight;
    };
    UxPositioning.prototype.getSpaceBottom = function () {
        if (this.spaceBottom !== undefined) {
            return this.spaceBottom;
        }
        this.spaceBottom = this.constraintElement === window
            ? window.innerHeight - window.scrollY - this.anchorRect.height - this.anchorRect.top - this.constraintY
            // tslint:disable-next-line: max-line-length
            : this.constraintY + this.constraintHeight - this.anchorRect.height - this.anchorRect.top - this.constraintMarginY;
        return this.spaceBottom;
    };
    UxPositioning.prototype.getSpaceLeft = function () {
        if (this.spaceLeft !== undefined) {
            return this.spaceLeft;
        }
        this.spaceLeft = this.anchorRect.left - this.constraintX - this.constraintMarginX;
        return this.spaceLeft;
    };
    UxPositioning.prototype.getAutoPlacement = function () {
        // if the constraints is an HTMLElement, we include it here in the space check
        var left = this.getSpaceLeft();
        var right = this.getSpaceRight();
        var top = this.getSpaceTop();
        var bottom = this.getSpaceBottom();
        if (left > right && left > top && left > bottom) {
            return 'left';
        }
        else if (right > top && right > bottom) {
            return 'right';
        }
        else if (top > bottom) {
            return 'top';
        }
        return 'bottom';
    };
    UxPositioning.prototype.getSecondaryPlacement = function (mainPlacement) {
        var prefix = mainPlacement === 'left' || mainPlacement === 'right' ? 'v' : 'h';
        var instruction = this.preferedPlacement.split('-');
        var suffix = instruction.length === 2 ? instruction[1] : 'center';
        return "" + prefix + suffix;
    };
    UxPositioning.prototype.placeMain = function (placement, missingSpaceStrategy) {
        if (missingSpaceStrategy === void 0) { missingSpaceStrategy = 'flip'; }
        var style = this.element.style;
        var requiredWidth = this.elementRect.width + this.offsetX + this.constraintMarginX;
        var requiredHeight = this.elementRect.height + this.offsetY + this.constraintMarginY;
        if (missingSpaceStrategy !== 'ignore') {
            var flipOrHide = missingSpaceStrategy === 'flip' || missingSpaceStrategy === 'hide';
            // if !force => we check if there is enough space for placing the element
            if (placement === 'left' && this.getSpaceLeft() < requiredWidth) {
                if (flipOrHide) {
                    return false;
                }
                else {
                    style.left = this.constraintX + this.hostOffsetX + this.constraintMarginX + "px";
                    style.top = this.anchorRect.top + this.hostOffsetY + "px";
                    return true;
                }
            }
            if (placement === 'right' && this.getSpaceRight() < requiredWidth) {
                if (flipOrHide) {
                    return false;
                }
                else {
                    style.left = this.constraintElement === window
                        ? window.innerWidth - this.elementRect.width - this.constraintMarginX + this.hostOffsetX + "px"
                        : this.constraintX + this.constraintWidth - this.elementRect.width - this.constraintMarginX + this.hostOffsetX + "px";
                    style.top = this.anchorRect.top + this.hostOffsetY + "px";
                    return true;
                }
            }
            if (placement === 'top' && this.getSpaceTop() < requiredHeight) {
                if (flipOrHide) {
                    return false;
                }
                else {
                    style.left = this.anchorRect.left + this.hostOffsetX + "px";
                    style.top = this.constraintY + this.hostOffsetY + this.constraintMarginY + "px";
                    return true;
                }
            }
            if (placement === 'bottom' && this.getSpaceBottom() < requiredHeight) {
                if (flipOrHide) {
                    return false;
                }
                else {
                    style.left = this.anchorRect.left + this.hostOffsetX + "px";
                    style.top = this.constraintElement === window
                        ? window.innerHeight - this.elementRect.height - this.constraintMarginY + this.hostOffsetY + "px"
                        : this.constraintY + this.constraintHeight - this.elementRect.height - this.constraintMarginY + this.hostOffsetY + "px";
                    return true;
                }
            }
        }
        if (placement === 'left') {
            style.left = this.anchorRect.left - this.elementRect.width - this.offsetX + this.hostOffsetX + "px";
            style.top = this.anchorRect.top + this.hostOffsetY + "px";
        }
        if (placement === 'right') {
            style.left = this.anchorRect.left + this.anchorRect.width + this.offsetX + this.hostOffsetX + "px";
            style.top = this.anchorRect.top + this.hostOffsetY + "px";
        }
        if (placement === 'top') {
            style.top = this.anchorRect.top - this.elementRect.height - this.offsetY + this.hostOffsetY + "px";
            style.left = this.anchorRect.left + this.hostOffsetX + "px";
        }
        if (placement === 'bottom') {
            style.top = this.anchorRect.top + this.anchorRect.height + this.offsetY + this.hostOffsetY + "px";
            style.left = this.anchorRect.left + this.hostOffsetX + "px";
        }
        return true;
    };
    UxPositioning.prototype.placeSecondary = function (placement) {
        var style = this.element.style;
        if (placement === 'hstart' || placement === 'hcenter' || placement === 'hend') {
            var left = 0;
            if (placement === 'hstart') {
                left = this.anchorRect.left + this.hostOffsetX;
            }
            else if (placement === 'hcenter') {
                left = this.anchorRect.left + this.hostOffsetX + (this.anchorRect.width / 2) - (this.elementRect.width / 2);
            }
            else if (placement === 'hend') {
                left = this.anchorRect.left + this.hostOffsetX + this.anchorRect.width - this.elementRect.width;
            }
            // First we check if the element overflow on the right of the screen
            // and if it does, we bring it back inside the requested margin
            // Second we check if the element overflow on the left of the screen
            // We do this check in second as then it takes priority and if the element
            // must overflow, then it will be on the right
            if (this.missingSpaceStrategy === 'ignore') {
                // do nothing
            }
            else if (this.constraintElement === window) {
                // tslint:disable-next-line: max-line-length
                var xExtraRight = left + this.elementRect.width - window.innerWidth - window.scrollX + this.constraintMarginX - this.hostOffsetX;
                if (xExtraRight > 0) {
                    left -= xExtraRight;
                }
                if (left < this.constraintMarginX + this.hostOffsetX) {
                    left = this.constraintMarginX + this.hostOffsetX;
                }
            }
            else if (this.constraintElement instanceof HTMLElement) {
                var constraintMaxX = this.constraintX + this.constraintWidth;
                var elementMaxX = left + this.elementRect.width - this.hostOffsetX + this.constraintMarginX;
                var xExtraRight = elementMaxX - constraintMaxX;
                if (xExtraRight > 0) {
                    left -= xExtraRight;
                }
                if (left < this.constraintX + this.hostOffsetX + this.constraintMarginX) {
                    left = this.constraintX + this.hostOffsetX + this.constraintMarginX;
                }
            }
            style.left = left + "px";
        }
        if (placement === 'vstart' || placement === 'vcenter' || placement === 'vend') {
            var top_1 = 0;
            if (placement === 'vstart') {
                top_1 = this.anchorRect.top + this.hostOffsetY;
            }
            else if (placement === 'vcenter') {
                top_1 = this.anchorRect.top + this.hostOffsetY + (this.anchorRect.height / 2) - (this.elementRect.height / 2);
            }
            else if (placement === 'vend') {
                top_1 = this.anchorRect.top + this.hostOffsetY + this.anchorRect.height - this.elementRect.height;
            }
            // First we check if the element overflow on the right of the screen
            // and if it does, we bring it back inside the requested margin
            // Second we check if the element overflow on the left of the screen
            // We do this check in second as then it takes priority and if the element
            // must overflow, then it will be on the right
            if (this.missingSpaceStrategy === 'ignore') {
                // do nothing
            }
            else if (this.constraintElement === window) {
                // tslint:disable-next-line: max-line-length
                var yExtraBottom = top_1 + this.elementRect.height - window.innerHeight - window.scrollY + this.constraintMarginY - this.hostOffsetY;
                if (yExtraBottom > 0) {
                    top_1 -= yExtraBottom;
                }
                if (top_1 < this.constraintMarginY + this.hostOffsetY) {
                    top_1 = this.constraintMarginY + this.hostOffsetY;
                }
            }
            else if (this.constraintElement instanceof HTMLElement) {
                var constraintMaxY = this.constraintY + this.constraintHeight;
                var elementMaxY = top_1 + this.elementRect.height - this.hostOffsetY + this.constraintMarginY;
                var yExtraBottom = elementMaxY - constraintMaxY;
                if (yExtraBottom > 0) {
                    top_1 -= yExtraBottom;
                }
                if (top_1 < this.constraintY + this.hostOffsetY + this.constraintMarginY) {
                    top_1 = this.constraintY + this.hostOffsetY + this.constraintMarginY;
                }
            }
            style.top = top_1 + "px";
        }
    };
    UxPositioning = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["inject"])(_interfaces__WEBPACK_IMPORTED_MODULE_0__["UxPositioningConfiguration"], aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["TaskQueue"])
    ], UxPositioning);
    return UxPositioning;
}());



/***/ }),

/***/ "71CS":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/positioning/dist/native-modules/ux-positioning.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7o8i":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/ux-configuration.js ***!
  \**************************************************************************************************************/
/*! exports provided: UXConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UXConfiguration", function() { return UXConfiguration; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-logging */ "MP1E");
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-loader */ "ZdUM");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/global-style-engine */ "RnYE");
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

/***/ "9H1+":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/radio/dist/native-modules/ux-radio-theme.js ***!
  \******************************************************************************/
/*! exports provided: UxRadioTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxRadioTheme", function() { return UxRadioTheme; });
var UxRadioTheme = /** @class */ (function () {
    function UxRadioTheme() {
        this.themeKey = 'radio';
    }
    return UxRadioTheme;
}());

//# sourceMappingURL=ux-radio-theme.js.map

/***/ }),

/***/ "9ZVa":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/lifecycle.js ***!
  \*************************************************************************/
/*! exports provided: invokeLifecycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokeLifecycle", function() { return invokeLifecycle; });
/**
 * Call a lifecycle method on a viewModel if it exists.
 * @function
 * @param instance The viewModel instance.
 * @param name The lifecycle method name.
 * @param model The model to pass to the lifecycle method.
 * @returns Promise The result of the lifecycle method.
 */
function invokeLifecycle(instance, name, model) {
    if (typeof instance[name] === 'function') {
        return new Promise(function (resolve) {
            resolve(instance[name](model));
        }).then(function (result) {
            if (result !== null && result !== undefined) {
                return result;
            }
            return true;
        });
    }
    return Promise.resolve(true);
}


/***/ }),

/***/ "@aurelia-ux/core/../../../modal/node_modules/@aurelia-ux/core/dist/native-modules/styles/normalize.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/styles/normalize.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@aurelia-ux/list":
/*!********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/list/dist/native-modules/index.js ***!
  \********************************************************************/
/*! exports provided: UxListTheme, UxList, UxListItem, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-list */ "@aurelia-ux/list/ux-list");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxList", function() { return _ux_list__WEBPACK_IMPORTED_MODULE_1__["UxList"]; });

/* harmony import */ var _ux_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-list-item */ "@aurelia-ux/list/ux-list-item");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxListItem", function() { return _ux_list_item__WEBPACK_IMPORTED_MODULE_2__["UxListItem"]; });

/* harmony import */ var _ux_list_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-list-theme */ "rhVe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxListTheme", function() { return _ux_list_theme__WEBPACK_IMPORTED_MODULE_3__["UxListTheme"]; });






function configure(config) {
    config.globalResources([
        './ux-list',
        './ux-list-item'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/list/ux-list":
/*!**********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/list/dist/native-modules/ux-list.js ***!
  \**********************************************************************/
/*! exports provided: UxList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxList", function() { return UxList; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UxList = /** @class */ (function () {
    function UxList(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
    }
    UxList.prototype.bind = function () {
        if (this.theme != null) {
            this.themeChanged(this.theme);
        }
        this.typeChanged(this.type);
    };
    UxList.prototype.typeChanged = function (newValue, oldValue) {
        if (typeof oldValue === 'string') {
            this.element.classList.remove("ux-list--" + oldValue);
        }
        if (typeof newValue === 'string') {
            this.element.classList.add("ux-list--" + newValue);
        }
    };
    UxList.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'list';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxList.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxList.prototype, "type", void 0);
    UxList = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-list')
    ], UxList);
    return UxList;
}());

//# sourceMappingURL=ux-list.js.map

/***/ }),

/***/ "@aurelia-ux/list/ux-list-item":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/list/dist/native-modules/ux-list-item.js ***!
  \***************************************************************************/
/*! exports provided: UxListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxListItem", function() { return UxListItem; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UxListItem = /** @class */ (function () {
    function UxListItem() {
        this.theme = null;
    }
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxListItem.prototype, "theme", void 0);
    UxListItem = __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-list-item')
    ], UxListItem);
    return UxListItem;
}());

//# sourceMappingURL=ux-list-item.js.map

/***/ }),

/***/ "@aurelia-ux/list/ux-list-item.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/list/dist/native-modules/ux-list-item.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template role=\"listitem\" class=\"ux-list-item\">\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/list/ux-list.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/list/dist/native-modules/ux-list.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-list {\n  display: block;\n  background-color: transparent;\n  background-color: var(--aurelia-ux--list-background, transparent);\n}\n\n.ux-list-item {\n  display: flex;\n  align-items: center;\n  padding: 16px;\n  font-size: 16px;\n  color: inherit;\n  color: var(--aurelia-ux--list-foreground, inherit);\n  text-decoration: none;\n}\n\n.ux-list-item.ux-choice--selected {\n  background: #00000011;\n  background: var(--aurelia-ux--list-background-selected, #00000011);\n}\n\n.ux-list-item__detail {\n  margin-right: 16px;\n}\n\n.ux-list-item__detail--avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin-right: 16px;\n}\n\n.ux-list-item__action-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 24px;\n  min-height: 24px;\n  padding-right: 0;\n  padding-left: 16px;\n}\n\n.ux-list-item__content {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  letter-spacing: 0.03em;\n}\n\n.ux-list-item__secondary-content {\n  font-size: 14px;\n  color: #888;\n  color: var(--aurelia-ux--list-secondary-foreground, #888);\n}\n\na.ux-list-item__content {\n  margin: -16px;\n  padding: 16px;\n  text-decoration: none;\n}\n\n.ux-list--two-line .ux-list-item__list-content {\n  overflow: inherit;\n  text-overflow: inherit;\n  white-space: inherit;\n}\n\n.ux-list--two-line .ux-list-item__secondary-content {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ux-list--three-line .ux-list-item__secondary-content {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: normal;\n  line-height: 1.2;\n  height: 2.4em;\n}\n\n.ux-list--wrap .ux-list-item__content,\n.ux-list--wrap .ux-list-item__secondary-content {\n  white-space: normal;\n}\n\n/* add a border type of ux-list with border between items */\n.ux-list--border {\n  border-top: 1px solid var(--ux-swatch--grey-p300);\n}\n.ux-list--border .ux-list-item {\n  border-bottom: 1px solid var(--ux-swatch--grey-p300);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/list/ux-list.html":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/list/dist/native-modules/ux-list.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template role=\"list\" class=\"ux-list\">\n  <require from=\"./ux-list.css\"></require>\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/modal":
/*!*********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/index.js ***!
  \*********************************************************************/
/*! exports provided: configure, UxModalTheme, UxModal, UxModalService, UxDefaultModalConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var _resources_ok_modal_attribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/ok-modal-attribute */ "wxLm");
/* harmony import */ var _resources_dismiss_modal_attribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/dismiss-modal-attribute */ "1TMB");
/* harmony import */ var _resources_attach_focus_attribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/attach-focus-attribute */ "Wu9m");
/* harmony import */ var _ux_modal_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-modal-configuration */ "zTCc");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_modal_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ux-modal-theme */ "qsNw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxModalTheme", function() { return _ux_modal_theme__WEBPACK_IMPORTED_MODULE_5__["UxModalTheme"]; });

/* harmony import */ var _ux_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ux-modal */ "@aurelia-ux/modal/ux-modal");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxModal", function() { return _ux_modal__WEBPACK_IMPORTED_MODULE_6__["UxModal"]; });

/* harmony import */ var _ux_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ux-modal-service */ "LBxZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxModalService", function() { return _ux_modal_service__WEBPACK_IMPORTED_MODULE_7__["UxModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxDefaultModalConfiguration", function() { return _ux_modal_configuration__WEBPACK_IMPORTED_MODULE_3__["UxDefaultModalConfiguration"]; });






function configure(frameworkConfig, callback) {
    frameworkConfig.globalResources([
        _resources_attach_focus_attribute__WEBPACK_IMPORTED_MODULE_2__["AttachFocusAttribute"],
        _resources_dismiss_modal_attribute__WEBPACK_IMPORTED_MODULE_1__["DismissModalAttribute"],
        _resources_ok_modal_attribute__WEBPACK_IMPORTED_MODULE_0__["OkModalAttribute"],
        './ux-modal',
    ]);
    if (typeof callback === 'function') {
        var config = frameworkConfig.container.get(_ux_modal_configuration__WEBPACK_IMPORTED_MODULE_3__["UxDefaultModalConfiguration"]);
        callback(config);
    }
}






/***/ }),

/***/ "@aurelia-ux/modal/ux-modal":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/ux-modal.js ***!
  \************************************************************************/
/*! exports provided: UxModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxModal", function() { return UxModal; });
/* harmony import */ var _ux_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ux-modal-service */ "LBxZ");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aurelia-ux/core */ "l7FS");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aurelia-logging */ "MP1E");
/* harmony import */ var _ux_modal_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ux-modal-configuration */ "zTCc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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








var log = Object(aurelia_logging__WEBPACK_IMPORTED_MODULE_6__["getLogger"])('ux-modal');
var UxModal = /** @class */ (function () {
    function UxModal(element, styleEngine, modalService, taskQueue, defaultConfig) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.modalService = modalService;
        this.taskQueue = taskQueue;
        this.defaultConfig = defaultConfig;
        this.position = 'center';
        this.host = 'body';
        this.modalBreakpoint = 768;
        this.overlayDismiss = true;
        this.outsideDismiss = true;
        this.lock = true;
        this.keyboard = ['Escape'];
        this.restoreFocus = function (lastActiveElement) {
            lastActiveElement.focus();
        };
        // Aria attributes
        this.role = 'dialog';
        this.ariaLabelledby = '';
        this.ariaDescribedby = '';
        this.handlingEvent = false;
        this.viewportType = 'desktop';
        this.showed = false;
        this.showing = false;
        this.hiding = false;
        if (this.defaultConfig.modalBreakpoint !== undefined) {
            this.modalBreakpoint = this.defaultConfig.modalBreakpoint;
        }
        if (this.defaultConfig.host !== undefined) {
            this.host = this.defaultConfig.host;
        }
        if (this.defaultConfig.overlayDismiss !== undefined) {
            this.overlayDismiss = this.defaultConfig.overlayDismiss;
        }
        if (this.defaultConfig.outsideDismiss !== undefined) {
            this.outsideDismiss = this.defaultConfig.outsideDismiss;
        }
        if (this.defaultConfig.lock !== undefined) {
            this.lock = this.defaultConfig.lock;
        }
        if (this.defaultConfig.position !== undefined) {
            this.position = this.defaultConfig.position;
        }
        if (this.defaultConfig.keyboard !== undefined) {
            this.keyboard = this.defaultConfig.keyboard;
        }
        if (this.defaultConfig.theme !== undefined) {
            this.theme = this.defaultConfig.theme;
        }
    }
    UxModal.prototype.bind = function (bindingContext) {
        this.bindingContext = bindingContext;
        this.themeChanged(this.theme);
        this.setViewportType();
        window.addEventListener('resize', this);
        this.positionChanged();
        this.modalBreakpointChanged();
        this.hostChanged();
        this.overlayDismissChanged();
        this.outsideDismissChanged();
        this.lockChanged();
        this.keyboardChanged();
    };
    UxModal.prototype.positionChanged = function () {
        if (!this.position && this.defaultConfig.position) {
            this.position = this.defaultConfig.position;
        }
    };
    UxModal.prototype.modalBreakpointChanged = function () {
        if (typeof this.modalBreakpoint !== 'number' && this.defaultConfig.modalBreakpoint) {
            this.modalBreakpoint = this.defaultConfig.modalBreakpoint;
        }
    };
    UxModal.prototype.hostChanged = function () {
        if (this.host === false || this.host === 'body' || this.host instanceof HTMLElement) {
            return;
        }
        if (this.defaultConfig.host !== undefined) {
            this.host = this.defaultConfig.host;
            return;
        }
        if (this.host === '') {
            this.host = 'body';
        }
    };
    UxModal.prototype.overlayDismissChanged = function () {
        if (!this.overlayDismiss && this.defaultConfig.overlayDismiss) {
            this.overlayDismiss = this.defaultConfig.overlayDismiss;
        }
    };
    UxModal.prototype.outsideDismissChanged = function () {
        if (!this.outsideDismiss && this.defaultConfig.outsideDismiss) {
            this.outsideDismiss = this.defaultConfig.outsideDismiss;
        }
    };
    UxModal.prototype.lockChanged = function () {
        if (!this.lock && this.defaultConfig.lock !== undefined) {
            this.lock = this.defaultConfig.lock;
        }
        this.setZindex();
    };
    UxModal.prototype.keyboardChanged = function () {
        if (!this.keyboard && this.defaultConfig.keyboard) {
            this.keyboard = this.defaultConfig.keyboard;
        }
    };
    UxModal.prototype.attached = function () {
        if (this.host) {
            this.moveToHost();
        }
        this.show();
    };
    UxModal.prototype.detached = function () {
        if (this.host) {
            this.removeFromHost();
        }
    };
    UxModal.prototype.show = function () {
        var _this = this;
        if (this.showing && this.showed) {
            return;
        }
        if (document.activeElement instanceof HTMLElement) {
            this.lastActiveElement = document.activeElement;
        }
        if (this.openingCallback) {
            this.openingCallback.call(this, this.contentWrapperElement, this.overlayElement);
        }
        this.showing = true;
        this.modalService.addLayer(this, this.bindingContext);
        this.setZindex();
        // We rely on `queueTask()` here to make sure the
        // element is completely ready with all CSS set
        // before to set `showed = true` which will start
        // the CSS transition to bring the modal to the
        // screen
        this.taskQueue.queueTask(function () {
            _this.showed = true;
            var duration = _this.getAnimationDuration();
            setTimeout(function () {
                _this.showing = false;
            }, duration);
        });
    };
    UxModal.prototype.hide = function () {
        return __awaiter(this, void 0, void 0, function () {
            var duration;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.hiding || !this.showed) {
                    return [2 /*return*/];
                }
                this.hiding = true;
                duration = this.getAnimationDuration();
                this.showed = false;
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            _this.modalService.removeLayer(_this);
                            _this.hiding = false;
                            if (_this.lastActiveElement && typeof _this.restoreFocus === 'function') {
                                _this.restoreFocus(_this.lastActiveElement);
                            }
                            resolve();
                        }, duration);
                    })];
            });
        });
    };
    UxModal.prototype.setZindex = function () {
        if (this.overlayElement) {
            this.overlayElement.style.zIndex = "" + this.modalService.zIndex;
        }
        this.contentWrapperElement.style.zIndex = "" + this.modalService.zIndex;
    };
    UxModal.prototype.moveToHost = function () {
        var host = this.getHost();
        if (!host) {
            return;
        }
        host.appendChild(this.element);
    };
    UxModal.prototype.removeFromHost = function () {
        // TODO: make sure we dont' need to bring back the element to its original position
        // before to remove it. Seems ok to keep it like this, but we decided to keep
        // an eye on it. See GH comment (18.04.2020 : https://github.com/aurelia/ux/pull/246#discussion_r410664303)
        var host = this.getHost();
        if (!host) {
            return;
        }
        try {
            host.removeChild(this.element);
        }
        catch (e) {
            // if error, it's because the child is already removed
        }
    };
    UxModal.prototype.getHost = function () {
        if (this.host === 'body') {
            return document.body;
        }
        else if (this.host instanceof HTMLElement) {
            return this.host;
        }
        else if (typeof this.host === 'string') {
            return document.querySelector(this.host);
        }
        return null;
    };
    UxModal.prototype.unbind = function () {
        window.removeEventListener('resize', this);
    };
    UxModal.prototype.handleEvent = function () {
        var _this = this;
        if (this.handlingEvent) {
            return;
        }
        this.handlingEvent = true;
        if (aurelia_pal__WEBPACK_IMPORTED_MODULE_5__["PLATFORM"].global.requestAnimationFrame) {
            aurelia_pal__WEBPACK_IMPORTED_MODULE_5__["PLATFORM"].global.requestAnimationFrame(function () {
                _this.setViewportType();
                _this.handlingEvent = false;
            });
        }
        else {
            setTimeout(function () {
                _this.setViewportType();
                _this.handlingEvent = false;
            }, 100);
        }
        this.setViewportType();
    };
    UxModal.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'modal';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxModal.prototype.setViewportType = function () {
        this.viewportType = window.innerWidth < this.modalBreakpoint ? 'mobile' : 'desktop';
    };
    UxModal.prototype.overlayClick = function (event) {
        for (var _i = 0, _a = event.composedPath(); _i < _a.length; _i++) {
            var element = _a[_i];
            if (element === this.contentElement) {
                return true; // this allow normal behvior when clicking on elements inside the modal
            }
        }
        if (!this.overlayDismiss) {
            event.stopPropagation();
            return;
        }
        this.dismiss();
    };
    UxModal.prototype.dismiss = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var result, dismissEvent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.stopPropagation();
                        }
                        if (this.showing) {
                            return [2 /*return*/];
                        }
                        result = {
                            wasCancelled: true,
                            output: undefined
                        };
                        return [4 /*yield*/, this.prepareClosing(result)];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.hide()];
                    case 2:
                        _a.sent();
                        dismissEvent = aurelia_pal__WEBPACK_IMPORTED_MODULE_5__["DOM"].createCustomEvent('dismiss', { bubbles: true });
                        this.element.dispatchEvent(dismissEvent);
                        return [2 /*return*/];
                }
            });
        });
    };
    UxModal.prototype.ok = function (output, event) {
        return __awaiter(this, void 0, void 0, function () {
            var result, okEvent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            event.stopPropagation();
                        }
                        result = {
                            wasCancelled: false,
                            output: output
                        };
                        return [4 /*yield*/, this.prepareClosing(result)];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.hide()];
                    case 2:
                        _a.sent();
                        okEvent = aurelia_pal__WEBPACK_IMPORTED_MODULE_5__["DOM"].createCustomEvent('ok', { bubbles: true, detail: result.output });
                        this.element.dispatchEvent(okEvent);
                        return [2 /*return*/];
                }
            });
        });
    };
    UxModal.prototype.prepareClosing = function (result) {
        return __awaiter(this, void 0, void 0, function () {
            var layer, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        layer = this.modalService.getLayer(this);
                        if (!layer) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.modalService.callCanDeactivate(layer, result)];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/, false];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, this.modalService.callDetached(layer)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.modalService.callDeactivate(layer, result)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        log.error(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, true];
                }
            });
        });
    };
    UxModal.prototype.stop = function (event) {
        event.stopPropagation();
    };
    UxModal.prototype.getAnimationDuration = function () {
        // In order to allow precise animation we allow different duration
        // value for animating the overlay and the drawer. In most cases it will
        // be the same value but we can imagine a fast overlay and slower modal
        // apearence for exemple
        // Because the duration is used to determine when we can safely assume the
        // modal appeared/disappeard, we only keep the maximum value.
        var overlayElementDuration = this.overlayElement
            ? window.getComputedStyle(this.overlayElement).transitionDuration || '0'
            : '0';
        var contentDuration = window.getComputedStyle(this.contentElement).transitionDuration || '0';
        // overlayElementDuration and contentDuration are string like '0.25s'
        return Math.max(parseFloat(overlayElementDuration), parseFloat(contentDuration)) * 1000;
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "position", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "host", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "modalBreakpoint", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "overlayDismiss", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "outsideDismiss", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "lock", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "keyboard", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "restoreFocus", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "openingCallback", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "role", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "ariaLabelledby", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"]
    ], UxModal.prototype, "ariaDescribedby", void 0);
    UxModal = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["StyleEngine"], _ux_modal_service__WEBPACK_IMPORTED_MODULE_0__["UxModalService"], aurelia_framework__WEBPACK_IMPORTED_MODULE_4__["TaskQueue"], _ux_modal_configuration__WEBPACK_IMPORTED_MODULE_7__["UxDefaultModalConfiguration"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["customElement"])('ux-modal')
    ], UxModal);
    return UxModal;
}());



/***/ }),

/***/ "@aurelia-ux/modal/ux-modal.css":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/ux-modal.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-modal__overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  opacity: 0;\n  background: var(--aurelia-ux--modal-overlay-color, #333333);\n  transition: all ease 250ms;\n  transition-duration: var(--aurelia-ux--modal-overlay-transition-duration, var(--aurelia-ux--modal-transition-duration, 250ms))\n}\n\n.ux-modal__content {\n  transition: all ease 250ms;\n  transition-duration: var(--aurelia-ux--modal-content-transition-duration, var(--aurelia-ux--modal-transition-duration, 250ms));\n  max-height: 100%;\n}\n\n.ux-modal--opened .ux-modal__overlay {\n  opacity: var(--aurelia-ux--modal-overlay-opacity, 0.3);\n}\n\n.ux-modal__content-wrapper {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n}\n.ux-modal--lock .ux-modal__content-wrapper {\n  pointer-events: auto;\n}\n\n.ux-modal--unlocked .ux-modal__content {\n  box-shadow: var(--aurelia-ux--modal-unlocked-elevation, var(--aurelia-ux--design-elevation4dp));\n}\n\n.ux-modal__content {\n  pointer-events: auto;\n  background: var(--aurelia-ux--modal-background, var(--aurelia-ux--design-surface-background));\n  color: var(--aurelia-ux--modal-foreground, var(--aurelia-ux--design-surface-foreground));\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n}\n\n/* MOBILE */\n.ux-modal--mobile .ux-modal__content {\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  min-width: none;\n}\n\n/* DESKTOP */\n.ux-modal--desktop.ux-modal--center .ux-modal__content,\n.ux-modal--desktop.ux-modal--left .ux-modal__content,\n.ux-modal--desktop.ux-modal--right .ux-modal__content {\n  min-width: var(--aurelia-ux--modal-min-width, 320px);\n}\n.ux-modal--desktop.ux-modal--center .ux-modal__content {\n  border-radius: var(--aurelia-ux--modal-border-radius, 5px);\n}\n\n/* BOTTOM */\n.ux-modal--bottom .ux-modal__content {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(100%);\n}\n.ux-modal--bottom.ux-modal--opened .ux-modal__content {\n  transform: translateY(0);\n}\n\n/* TOP */\n.ux-modal--top .ux-modal__content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: translateY(-100%);\n}\n.ux-modal--top.ux-modal--opened .ux-modal__content {\n  transform: translateY(0);\n}\n\n/* LEFT */\n.ux-modal--left .ux-modal__content {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  transform: translateX(-100%);\n}\n.ux-modal--left.ux-modal--opened .ux-modal__content {\n  transform: translateX(0);\n}\n\n/* RIGHT */\n.ux-modal--right .ux-modal__content {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  transform: translateX(100%);\n}\n.ux-modal--right.ux-modal--opened .ux-modal__content {\n  transform: translateX(0);\n}\n\n/* CENTER */\n.ux-modal--center .ux-modal__content {\n  opacity: 0;\n}\n.ux-modal--center.ux-modal--opened .ux-modal__content {\n  opacity: 1;\n}\n\n/* ABSOLUTE */\n.ux-modal--absolute .ux-modal__content {\n  position: absolute;\n  opacity: 0;\n  transition-property: opacity;\n}\n.ux-modal--absolute.ux-modal--opened .ux-modal__content {\n  opacity: 1;\n}\n\n/* CARD AS DIALOG */\n\n.ux-modal__content > .ux-card,\n.ux-modal__content > compose > .ux-card {\n  height: 100%;\n  margin: 0;\n}\n\n.ux-modal__content > .ux-card > *,\n.ux-modal__content > compose > .ux-card > * {\n  flex-shrink: 0;\n}\n\n.ux-modal__content > .ux-card > .ux-card__content,\n.ux-modal__content > compose > .ux-card > .ux-card__content {\n  display: block;\n  flex-shrink: 1;\n  height: 100%;\n  overflow: auto;\n}\n\n.ux-modal__content > .ux-card > .ux-card__footer,\n.ux-modal__content > compose > .ux-card > .ux-card__footer {\n  justify-content: flex-end;\n}\n\n.ux-modal--mobile .ux-modal__content > .ux-card > .ux-card__header, \n.ux-modal--mobile .ux-modal__content > compose > .ux-card > .ux-card__header {\n  margin-top: constant(safe-area-inset-top, 20px);\n  margin-top: env(safe-area-inset-top, 20px);\n}\n\n.ux-modal--mobile .ux-modal__content > .ux-card > .ux-card__footer,\n.ux-modal--mobile .ux-modal__content > compose > .ux-card > .ux-card__footer {\n  margin-bottom: constant(safe-area-inset-bottom, 20px);\n  margin-bottom: env(safe-area-inset-bottom, 20px);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/modal/ux-modal.html":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/ux-modal.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template \n  class=\"ux-modal ux-modal--${viewportType} ux-modal--${position} ${showed ? 'ux-modal--opened':''} ux-modal--${lock ? 'lock':'unlocked'}\">\n  <require from=\"./ux-modal.css\"></require>\n  <div class=\"ux-modal__overlay\" ref=\"overlayElement\" if.bind=\"lock\">\n  </div>\n  <div \n    role=\"${role || 'dialog'}\"\n    aria-labelledby=\"ariaLabelledBy\"\n    aria-describedby=\"ariaDescribedBy\"\n    class=\"ux-modal__content-wrapper\" \n    ref=\"contentWrapperElement\" \n    click.delegate=\"overlayClick($event)\">\n    <div class=\"ux-modal__content\" ref=\"contentElement\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/positioning":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/positioning/dist/native-modules/index.js ***!
  \***************************************************************************/
/*! exports provided: configure, UxPositioningConfiguration, UxPositioning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "q281");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxPositioningConfiguration", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_0__["UxPositioningConfiguration"]; });

/* harmony import */ var _ux_positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-positioning */ "6dt4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxPositioning", function() { return _ux_positioning__WEBPACK_IMPORTED_MODULE_1__["UxPositioning"]; });


function configure(frameworkConfig, callback) {
    // config.globalResources([
    //   PLATFORM.moduleName('@aurelia-ux/boilerplate/ux-boilerplate')
    // ]);
    if (typeof callback === 'function') {
        var config = frameworkConfig.container.get(_interfaces__WEBPACK_IMPORTED_MODULE_0__["UxPositioningConfiguration"]);
        callback(config);
    }
}




/***/ }),

/***/ "@aurelia-ux/radio":
/*!*********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/radio/dist/native-modules/index.js ***!
  \*********************************************************************/
/*! exports provided: UxRadioTheme, UxRadio, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _ux_radio_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-radio-theme */ "9H1+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxRadioTheme", function() { return _ux_radio_theme__WEBPACK_IMPORTED_MODULE_3__["UxRadioTheme"]; });

/* harmony import */ var _ux_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-radio */ "@aurelia-ux/radio/ux-radio");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxRadio", function() { return _ux_radio__WEBPACK_IMPORTED_MODULE_4__["UxRadio"]; });






function configure(config) {
    config.container.get(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["AureliaUX"]).registerUxElementConfig(uxRadioConfig);
    config.globalResources('./ux-radio');
}
var uxRadioConfig = {
    tagName: 'ux-radio',
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

/***/ "@aurelia-ux/radio/ux-radio":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/radio/dist/native-modules/ux-radio.js ***!
  \************************************************************************/
/*! exports provided: UxRadio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxRadio", function() { return UxRadio; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UxRadio = /** @class */ (function () {
    function UxRadio(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.disabled = false;
        this.effect = 'ripple';
        this.checked = false;
        this.ripple = null;
        Object.setPrototypeOf(element, uxRadioElementProto);
    }
    Object.defineProperty(UxRadio.prototype, "isDisabled", {
        get: function () {
            return Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('disabled', this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    UxRadio.prototype.bind = function () {
        if (this.element.hasAttribute('id')) {
            var id = this.element.id;
            if (id != null) {
                this.radio.setAttribute('id', id);
                this.element.removeAttribute('id');
            }
        }
        if (this.element.hasAttribute('tabindex')) {
            var tabIndex = this.element.getAttribute('tabindex');
            if (tabIndex != null) {
                this.radio.setAttribute('tabindex', tabIndex);
                this.element.removeAttribute('tabindex');
            }
        }
        if (this.element.hasAttribute('name')) {
            var name_1 = this.element.getAttribute('name');
            if (name_1 != null) {
                this.radio.setAttribute('name', name_1);
                this.element.removeAttribute('name');
            }
        }
        if (this.element.hasAttribute('checked')) {
            this.element.checked = true;
        }
        if (this.checked) {
            this.radio.checked = true;
            this.element.classList.add('ux-radio--checked');
        }
        this.disabledChanged(this.radio.disabled);
        this.themeChanged(this.theme);
    };
    UxRadio.prototype.attached = function () {
        this.radio.addEventListener('change', stopEvent);
    };
    UxRadio.prototype.detached = function () {
        this.radio.removeEventListener('change', stopEvent);
    };
    UxRadio.prototype.getChecked = function () {
        return this.checked;
    };
    UxRadio.prototype.setChecked = function (value) {
        var oldValue = this.checked;
        var newValue = value;
        if (newValue !== oldValue) {
            this.checked = newValue;
            this.ignoreValueChanges = true;
            this.value = newValue;
            if (this.radio) {
                this.radio.checked = !!newValue;
                if (this.radio.checked) {
                    this.element.classList.add('ux-radio--checked');
                }
                else {
                    this.element.classList.remove('ux-radio--checked');
                }
            }
            this.ignoreValueChanges = false;
            this.element.dispatchEvent(aurelia_framework__WEBPACK_IMPORTED_MODULE_4__["DOM"].createCustomEvent('change', { bubbles: true }));
        }
    };
    UxRadio.prototype.disabledChanged = function (newValue) {
        if (newValue === true) {
            this.element.classList.add('ux-radio--disabled');
        }
        else {
            this.element.classList.remove('ux-radio--disabled');
        }
    };
    UxRadio.prototype.focusedChanged = function (newValue) {
        if (newValue === true) {
            this.element.classList.add('ux-radio--focused');
        }
        else {
            this.element.classList.remove('ux-radio--focused');
        }
    };
    UxRadio.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'radio';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxRadio.prototype.valueChanged = function (value) {
        if (this.ignoreValueChanges) {
            return;
        }
        this.setChecked(value);
    };
    UxRadio.prototype.onMouseDown = function (e) {
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
            var winEvents_1 = new aurelia_framework__WEBPACK_IMPORTED_MODULE_4__["ElementEvents"](window);
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
    ], UxRadio.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxRadio.prototype, "effect", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxRadio.prototype, "id", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxRadio.prototype, "theme", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"])({ initializer: function () { return false; } })
    ], UxRadio.prototype, "value", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"])()
    ], UxRadio.prototype, "focused", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])('disabled')
    ], UxRadio.prototype, "isDisabled", null);
    UxRadio = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-radio')
    ], UxRadio);
    return UxRadio;
}());

function stopEvent(e) {
    e.stopPropagation();
}
var getVm = function (_) { return _.au.controller.viewModel; };
var uxRadioElementProto = Object.create(HTMLElement.prototype, {
    type: {
        value: 'radio',
    },
    checked: {
        get: function () {
            return getVm(this).getChecked();
        },
        set: function (value) {
            getVm(this).setChecked(value);
        }
    }
});
//# sourceMappingURL=ux-radio.js.map

/***/ }),

/***/ "@aurelia-ux/radio/ux-radio.css":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/radio/dist/native-modules/ux-radio.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-radio {\n  display: inline-block;\n  outline: none;\n  height: 24px;\n  width: 24px;\n  box-sizing: border-box;\n  position: relative;\n}\n\n.ux-radio--disabled {\n  pointer-events: none;\n  cursor: default;\n}\n\n.ux-radio__inner-input {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.ux-radio__border {\n  width: 24px;\n  height: 24px;\n  border: solid 2px #616161;\n  border-color: var(--aurelia-ux--radio-border-color, #616161);\n  border-width: var(--aurelia-ux--radio-border-width, 2px);\n  border-radius: 50%;\n  display: inline-flex;\n  box-sizing: border-box;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n}\n\n.ux-radio__background-fill {\n  width: 100%;\n  height: 100%;\n  background-color: #3F51B5;\n  background-color: var(--aurelia-ux--radio-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n  border-radius: 50%;\n  transform: scale3d(0, 0, 0);\n  transition: 150ms;\n}\n\n.ux-radio__inner-input:disabled {\n  cursor: default;\n}\n\n.ux-radio .ripplecontainer {\n  position: relative;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n}\n\n.ux-radio .paper-ripple {\n  top: auto;\n  left: auto;\n  right: -36px;\n  bottom: -36px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.ux-radio .ripple {\n  position: absolute;\n  right: -36px;\n  bottom: -36px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.22);\n  transition: transform 100ms ease-in-out;\n  transform: scale3d(0, 0, 0);\n}\n\n.ux-radio--checked .ux-radio__border {\n  border: solid 2px #3F51B5;\n  border-color: var(--aurelia-ux--radio-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n}\n\n.ux-radio--checked .ux-radio__background-fill {\n  transform: scale3d(.75, .75, .75);\n}\n\n.ux-radio--disabled .ux-radio__border {\n  border-color: #e1e1e1;\n  border-color: var(--aurelia-ux--radio-disabled-background, var(--aurelia-ux--design-disabled-background, #e1e1e1));\n}\n\n.ux-radio--focused .ripple {\n  transform: scale3d(1, 1, 1);\n}\n\n.ux-radio--disabled .ux-radio__background-fill {\n  background-color: #CFD8DC;\n  background-color: var(--aurelia-ux--radio-disabled-foreground, var(--aurelia-ux--design-disabled-foreground, #CFD8DC));\n}\n\n.ux-radio--disabled.ux-radio--focused .ripple {\n  transform: scale3d(0, 0, 0);\n}\n\n.ux-radio:hover:not(.ux-radio__disabled) .ux-radio__border {\n  border: solid 2px #3F51B5;\n  border-color: var(--aurelia-ux--radio-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/radio/ux-radio.html":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/radio/dist/native-modules/ux-radio.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template class=\"ux-radio ${effect !== null ? effect : ''}\">\n  <require from=\"@aurelia-ux/core/effects/paper-ripple.css\"></require>\n  <require from=\"./ux-radio.css\"></require>\n\n  <div class=\"ripplecontainer\">\n    <span class=\"ripple\"></span>\n  </div>\n\n  <input type=\"radio\"\n    ref=\"radio\"\n    class=\"ux-radio__inner-input\"\n    change.trigger=\"value = $event.target.checked\"\n    mousedown.trigger=\"onMouseDown($event)\"\n    disabled.bind=\"disabled & booleanAttr\"\n    focus.bind=\"focused\"\n    aria-checked.bind=\"indeterminate ? 'mixed' : checked ? true : false\"\n    aria-disabled.bind=\"disabled & booleanAttr\">\n\n  <div class=\"ux-radio__border\">\n    <div class=\"ux-radio__background-fill\">\n    </div>\n  </div>\n</template>\n  ";
// Exports
module.exports = code;

/***/ }),

/***/ "C+jf":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/effects/paper-ripple.js ***!
  \******************************************************************************************************************/
/*! exports provided: PaperRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperRipple", function() { return PaperRipple; });
/* harmony import */ var _paper_wave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paper-wave */ "xvzR");
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

/***/ "LBxZ":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/ux-modal-service.js ***!
  \********************************************************************************/
/*! exports provided: UxModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxModalService", function() { return UxModalService; });
/* harmony import */ var aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-event-aggregator */ "aurelia-event-aggregator");
/* harmony import */ var _ux_modal_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-modal-configuration */ "zTCc");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lifecycle */ "9ZVa");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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





var UxModalService = /** @class */ (function () {
    function UxModalService(templatingEngine, compositionEngine, viewResources, eventAggregator, defaultConfig) {
        this.templatingEngine = templatingEngine;
        this.compositionEngine = compositionEngine;
        this.viewResources = viewResources;
        this.eventAggregator = eventAggregator;
        this.defaultConfig = defaultConfig;
        this.startingZIndex = 200;
        this.modalLayers = [];
        this.modalIndex = 0;
    }
    UxModalService.prototype.addLayer = function (modal, bindingContext) {
        var layerCount = this.modalLayers.push({
            bindingContext: bindingContext,
            modal: modal
        });
        if (layerCount === 1) {
            this.setListener();
        }
    };
    UxModalService.prototype.getLayer = function (modal) {
        var index = this.modalLayers.map(function (i) { return i.modal; }).indexOf(modal);
        if (index !== -1) {
            return this.modalLayers[index];
        }
        return undefined;
    };
    UxModalService.prototype.removeLayer = function (modal) {
        var index = this.modalLayers.map(function (i) { return i.modal; }).indexOf(modal);
        if (index !== -1) {
            this.modalLayers.splice(index, 1);
        }
        if (this.modalLayers.length === 0) {
            this.removeListener();
        }
    };
    UxModalService.prototype.setListener = function () {
        document.addEventListener('keyup', this);
        document.addEventListener('click', this);
    };
    UxModalService.prototype.removeListener = function () {
        document.removeEventListener('keyup', this);
        document.removeEventListener('click', this);
    };
    UxModalService.prototype.handleEvent = function (event) {
        if (event instanceof KeyboardEvent) {
            this.handleKeyEvent(event);
        }
        else {
            this.handleDocumentClick(event);
        }
    };
    UxModalService.prototype.handleKeyEvent = function (event) {
        var key = this.getActionKey(event);
        if (key === undefined) {
            return;
        }
        var activeLayer = this.getLastModal();
        if (activeLayer === null) {
            return;
        }
        var keyboard = activeLayer.keyboard;
        if (key === 'Escape'
            && (keyboard === true || keyboard === key || (Array.isArray(keyboard) && keyboard.indexOf(key) > -1))) {
            activeLayer.dismiss();
        }
        else if (key === 'Enter' && (keyboard === key || (Array.isArray(keyboard) && keyboard.indexOf(key) > -1))) {
            activeLayer.ok();
        }
    };
    UxModalService.prototype.handleDocumentClick = function (event) {
        // the purpose of this handler is to close all modals that are
        // - not locked
        // - have outsideDismiss === true
        // - placed above the last locked layer
        // - and if the click is outside the modal
        var concernedLayers = [];
        for (var _i = 0, _a = this.modalLayers; _i < _a.length; _i++) {
            var layer = _a[_i];
            if (layer.modal.lock || !layer.modal.outsideDismiss) {
                concernedLayers = [];
                continue; // we ignore locks
            }
            concernedLayers.push(layer);
        }
        // now we have all the layers above the last locked in the concernedLayers array
        // let's check if the click is outside of any
        layerloop: for (var _b = 0, concernedLayers_1 = concernedLayers; _b < concernedLayers_1.length; _b++) {
            var layer = concernedLayers_1[_b];
            var modalContentElement = layer.modal.contentElement;
            for (var _c = 0, _d = event.composedPath(); _c < _d.length; _c++) {
                var element = _d[_c];
                if (element === modalContentElement) {
                    continue layerloop; // click is on the modal, do not hide
                }
            }
            layer.modal.dismiss();
        }
        return true; // this allow normal behvior with this click for other purposes
    };
    UxModalService.prototype.getActionKey = function (event) {
        if ((event.code || event.key) === 'Escape' || event.keyCode === 27) {
            return 'Escape';
        }
        if ((event.code || event.key) === 'Enter' || event.keyCode === 13) {
            return 'Enter';
        }
        return undefined;
    };
    UxModalService.prototype.getLastLayer = function () {
        return this.modalLayers.length > 0 ? this.modalLayers[this.modalLayers.length - 1] : null;
    };
    UxModalService.prototype.getLastModal = function () {
        var lastLayer = this.getLastLayer();
        return lastLayer !== null ? lastLayer.modal : null;
    };
    Object.defineProperty(UxModalService.prototype, "zIndex", {
        get: function () {
            return this.startingZIndex + this.modalLayers.length;
        },
        enumerable: true,
        configurable: true
    });
    UxModalService.prototype.createModalElement = function (options, bindingContext) {
        var element = document.createElement('ux-modal');
        element.setAttribute('dismiss.trigger', 'dismiss()');
        element.setAttribute('ok.trigger', 'ok($event)');
        if (options.position !== undefined) {
            element.setAttribute('position', options.position);
        }
        if (options.overlayDismiss === false) {
            element.setAttribute('overlay-dismiss.bind', 'false');
        }
        if (options.outsideDismiss === false) {
            element.setAttribute('outside-dismiss.bind', 'false');
        }
        if (options.lock === false) {
            element.setAttribute('lock.bind', 'false');
        }
        if (options.keyboard !== undefined) {
            bindingContext.keyboard = options.keyboard;
            element.setAttribute('keyboard.bind', 'keyboard');
        }
        if (typeof options.restoreFocus === 'function') {
            bindingContext.restoreFocus = options.restoreFocus;
            element.setAttribute('restore-focus.bind', 'restoreFocus');
        }
        if (typeof options.openingCallback === 'function') {
            bindingContext.openingCallback = options.openingCallback;
            element.setAttribute('opening-callback.bind', 'openingCallback');
        }
        if (typeof options.modalBreakpoint === 'number') {
            element.setAttribute('modal-breakpoint.bind', "" + options.modalBreakpoint);
        }
        element.setAttribute('host.bind', 'false');
        if (options.theme) {
            bindingContext.theme = options.theme;
            element.setAttribute('theme.bind', "theme");
        }
        return element;
    };
    UxModalService.prototype.createCompositionContext = function (container, // there is a TS error if this is not any ?
    host, bindingContext, settings, slot) {
        return {
            container: container,
            bindingContext: settings.viewModel ? null : bindingContext,
            viewResources: this.viewResources,
            model: settings.model,
            view: settings.view,
            viewModel: settings.viewModel,
            viewSlot: slot || new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewSlot"](host, true),
            host: host
        };
    };
    UxModalService.prototype.ensureViewModel = function (compositionContext) {
        if (compositionContext.viewModel === undefined) {
            return Promise.resolve(compositionContext);
        }
        if (typeof compositionContext.viewModel === 'object') {
            return Promise.resolve(compositionContext);
        }
        return this.compositionEngine.ensureViewModel(compositionContext);
    };
    UxModalService.prototype.open = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var bindingContext, element, childView, slot, controllers, modal, view, compositionContext, canActivate, _a, error_1, modalIndex, whenClosed;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // tslint:disable-next-line: prefer-object-spread
                        options = Object.assign({}, this.defaultConfig, options);
                        if (!options.viewModel && !options.view) {
                            throw new Error('Invalid modal Settings. You must provide "viewModel", "view" or both.');
                        }
                        // Each modal has an index to keep track of it
                        this.modalIndex++;
                        bindingContext = {};
                        element = this.createModalElement(options, bindingContext);
                        if (!options.host || options.host === 'body') {
                            options.host = document.body;
                        }
                        else if (typeof options.host === 'string') {
                            options.host = document.querySelector(options.host) || document.body;
                        }
                        options.host.appendChild(element);
                        childView = this.templatingEngine.enhance({ element: element, bindingContext: bindingContext });
                        controllers = childView.controllers;
                        modal = controllers[0].viewModel;
                        try {
                            view = controllers[0].view;
                            // ShadowDOM.defaultSlotKey refers to the name of the default
                            // slot if the view.
                            slot = new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewSlot"](view.slots[aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ShadowDOM"].defaultSlotKey].anchor, false);
                        }
                        catch (error) {
                            // This catch => throw here might not be necessary
                            // in the future once the modal service is finished
                            // I have ideas on how to move from here but I would need
                            // to fix the composition issue first.
                            this.cancelOpening(modal);
                            throw new Error('Missing slot in modal');
                        }
                        slot.attached();
                        compositionContext = this.createCompositionContext(childView.container, element, bindingContext, {
                            viewModel: options.viewModel,
                            view: options.view,
                            model: options.model
                        }, slot);
                        return [4 /*yield*/, this.ensureViewModel(compositionContext)];
                    case 1:
                        compositionContext = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 6, , 7]);
                        if (!compositionContext.viewModel) return [3 /*break*/, 4];
                        return [4 /*yield*/, Object(_lifecycle__WEBPACK_IMPORTED_MODULE_4__["invokeLifecycle"])(compositionContext.viewModel, 'canActivate', options.model)];
                    case 3:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a = true;
                        _b.label = 5;
                    case 5:
                        canActivate = _a;
                        if (!canActivate) {
                            throw new Error('modal cannot be opened');
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        this.cancelOpening(modal);
                        throw error_1;
                    case 7:
                        this.compositionEngine.compose(compositionContext).then(function (controller) {
                            bindingContext.currentViewModel = controller.viewModel;
                        });
                        modalIndex = this.modalIndex;
                        whenClosed = new Promise(function (resolve) {
                            _this.eventAggregator.subscribeOnce("modal-" + modalIndex + "-resolve", function (result) {
                                resolve(result);
                            });
                        });
                        modal.whenClosed = function () {
                            return whenClosed;
                        };
                        bindingContext.dismiss = function () {
                            modal.element.remove();
                            modal.detached();
                            _this.eventAggregator.publish("modal-" + modalIndex + "-resolve", {
                                wasCancelled: true,
                                output: null
                            });
                        };
                        bindingContext.ok = function (event) {
                            modal.element.remove();
                            modal.detached();
                            _this.eventAggregator.publish("modal-" + modalIndex + "-resolve", {
                                wasCancelled: false,
                                output: event.detail
                            });
                        };
                        return [2 /*return*/, modal];
                }
            });
        });
    };
    UxModalService.prototype.cancelOpening = function (modal) {
        modal.element.remove();
        modal.detached();
    };
    UxModalService.prototype.callCanDeactivate = function (layer, result) {
        return __awaiter(this, void 0, void 0, function () {
            var vm, can, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(layer.bindingContext && layer.bindingContext.currentViewModel)) return [3 /*break*/, 4];
                        vm = layer.bindingContext.currentViewModel;
                        if (!(typeof vm.canDeactivate === 'function')) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, vm.canDeactivate.call(vm, result)];
                    case 2:
                        can = ((_a.sent()) === false) ? false : true;
                        return [2 /*return*/, can];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    UxModalService.prototype.callDetached = function (layer) {
        return __awaiter(this, void 0, void 0, function () {
            var vm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(layer.bindingContext && layer.bindingContext.currentViewModel)) return [3 /*break*/, 2];
                        vm = layer.bindingContext.currentViewModel;
                        if (!(typeof vm.detached === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, vm.detached.call(vm)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UxModalService.prototype.callDeactivate = function (layer, result) {
        return __awaiter(this, void 0, void 0, function () {
            var vm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(layer.bindingContext && layer.bindingContext.currentViewModel)) return [3 /*break*/, 2];
                        vm = layer.bindingContext.currentViewModel;
                        if (!(typeof vm.deactivate === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, vm.deactivate.call(vm, result)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UxModalService.prototype.cancel = function (modal) {
        return __awaiter(this, void 0, void 0, function () {
            var layer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        layer = modal ? this.getLayer(modal) : this.getLastLayer();
                        if (!layer) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, layer.modal.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UxModalService.prototype.ok = function (result, modal) {
        return __awaiter(this, void 0, void 0, function () {
            var layer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        layer = modal ? this.getLayer(modal) : this.getLastLayer();
                        if (!layer) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, layer.modal.ok(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UxModalService = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["inject"])(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["TemplatingEngine"], aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["CompositionEngine"], aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["ViewResources"], aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_0__["EventAggregator"], _ux_modal_configuration__WEBPACK_IMPORTED_MODULE_1__["UxDefaultModalConfiguration"])
    ], UxModalService);
    return UxModalService;
}());



/***/ }),

/***/ "QJPu":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/components/boolean-attr-binding-behavior.js ***!
  \**************************************************************************************************************************************/
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

/***/ "RnYE":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/styles/global-style-engine.js ***!
  \************************************************************************************************************************/
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

/***/ }),

/***/ "RrOc":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/platforms/android.js ***!
  \***************************************************************************************************************/
/*! exports provided: Android */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Android", function() { return Android; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _designs_material_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designs/material-design */ "ccIO");
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

/***/ "WK2N":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/resources/modal-util.js ***!
  \************************************************************************************/
/*! exports provided: findModal, modalViewModelFromElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findModal", function() { return findModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalViewModelFromElement", function() { return modalViewModelFromElement; });
/* harmony import */ var _ux_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ux-modal */ "@aurelia-ux/modal/ux-modal");

function findModal(item) {
    var element = item;
    if (element === null)
        return null;
    while (element.tagName !== 'BODY') {
        element = element.parentElement;
        var isModalElement = element ? modalViewModelFromElement(element) : null;
        if (isModalElement !== null) {
            return isModalElement;
        }
        if (element === null)
            return null;
    }
    return null;
}
function modalViewModelFromElement(element) {
    var el = element;
    if (!el.au) {
        return null;
    }
    for (var key in el.au) {
        if (el.au[key].viewModel && el.au[key].viewModel instanceof _ux_modal__WEBPACK_IMPORTED_MODULE_0__["UxModal"]) {
            return el.au[key].viewModel;
        }
    }
    return null;
}


/***/ }),

/***/ "Wu9m":
/*!************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/resources/attach-focus-attribute.js ***!
  \************************************************************************************************/
/*! exports provided: AttachFocusAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachFocusAttribute", function() { return AttachFocusAttribute; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AttachFocusAttribute = /** @class */ (function () {
    function AttachFocusAttribute(element) {
        this.element = element;
    }
    AttachFocusAttribute.prototype.attached = function () {
        if (this.value === '' || (this.value && this.value !== 'false')) {
            this.element.focus();
        }
    };
    AttachFocusAttribute = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["customAttribute"])('ux-attach-focus')
    ], AttachFocusAttribute);
    return AttachFocusAttribute;
}());



/***/ }),

/***/ "XA7M":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/designs/design-attributes.js ***!
  \***********************************************************************************************************************/
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

/***/ "ccIO":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/designs/material-design.js ***!
  \*********************************************************************************************************************/
/*! exports provided: MaterialDesign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesign", function() { return MaterialDesign; });
/* harmony import */ var _colors_swatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors/swatches */ "x0cT");
/* harmony import */ var _colors_shadows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colors/shadows */ "/nTB");


var MaterialDesign = /** @class */ (function () {
    function MaterialDesign() {
        this.type = 'material';
        this.appBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p50;
        this.appForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
        this.controlBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.controlForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
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

/***/ "e0Rp":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/hosts/web.js ***!
  \*******************************************************************************************************/
/*! exports provided: Web */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web", function() { return Web; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _designs_material_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../designs/material-design */ "ccIO");
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

/***/ "i4YI":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/effects/element-rect.js ***!
  \******************************************************************************************************************/
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

/***/ "l7FS":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/index.js ***!
  \***************************************************************************************************/
/*! exports provided: swatches, shadows, processDesignAttributes, PaperRipple, normalizeBooleanAttribute, StyleEngine, GlobalStyleEngine, AureliaUX, UXConfiguration, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_ux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aurelia-ux */ "tlQM");
/* harmony import */ var _components_boolean_attr_binding_behavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/boolean-attr-binding-behavior */ "QJPu");
/* harmony import */ var _colors_swatches__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors/swatches */ "x0cT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swatches", function() { return _colors_swatches__WEBPACK_IMPORTED_MODULE_3__["swatches"]; });

/* harmony import */ var _colors_shadows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors/shadows */ "/nTB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shadows", function() { return _colors_shadows__WEBPACK_IMPORTED_MODULE_4__["shadows"]; });

/* harmony import */ var _designs_design_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./designs/design-attributes */ "XA7M");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processDesignAttributes", function() { return _designs_design_attributes__WEBPACK_IMPORTED_MODULE_5__["processDesignAttributes"]; });

/* harmony import */ var _effects_paper_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/paper-ripple */ "C+jf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperRipple", function() { return _effects_paper_ripple__WEBPACK_IMPORTED_MODULE_6__["PaperRipple"]; });

/* harmony import */ var _components_html_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/html-attributes */ "qrd2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeBooleanAttribute", function() { return _components_html_attributes__WEBPACK_IMPORTED_MODULE_7__["normalizeBooleanAttribute"]; });

/* harmony import */ var _styles_style_engine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/style-engine */ "wP7m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleEngine", function() { return _styles_style_engine__WEBPACK_IMPORTED_MODULE_8__["StyleEngine"]; });

/* harmony import */ var _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/global-style-engine */ "RnYE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyleEngine", function() { return _styles_global_style_engine__WEBPACK_IMPORTED_MODULE_9__["GlobalStyleEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AureliaUX", function() { return _aurelia_ux__WEBPACK_IMPORTED_MODULE_1__["AureliaUX"]; });

/* harmony import */ var _ux_configuration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ux-configuration */ "7o8i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UXConfiguration", function() { return _ux_configuration__WEBPACK_IMPORTED_MODULE_10__["UXConfiguration"]; });













var uxCorePromise;
function configure(config, callback) {
    if (uxCorePromise) {
        return uxCorePromise;
    }
    var ux = config.container.get(_aurelia_ux__WEBPACK_IMPORTED_MODULE_1__["AureliaUX"]);
    var boolAttr = new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["BindingBehaviorResource"]('');
    boolAttr.initialize(config.container, _components_boolean_attr_binding_behavior__WEBPACK_IMPORTED_MODULE_2__["BooleanBB"]);
    boolAttr.register(config.aurelia.resources, 'booleanAttr');
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

/***/ "ojKE":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/styles/style-controller.js ***!
  \*********************************************************************************************************************/
/*! exports provided: StyleController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleController", function() { return StyleController; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _global_style_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-style-engine */ "RnYE");
/* harmony import */ var _aurelia_ux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aurelia-ux */ "tlQM");
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
                    element.style.setProperty(this.generateCssVariableName(theme.themeKey, key), theme[key]);
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
            designInnerHtml += "  " + this.generateCssVariable(theme.themeKey, key, theme[key]) + "\r\n";
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

/***/ "q281":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/positioning/dist/native-modules/interfaces.js ***!
  \********************************************************************************/
/*! exports provided: UxPositioningConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxPositioningConfiguration", function() { return UxPositioningConfiguration; });
var UxPositioningConfiguration = /** @class */ (function () {
    function UxPositioningConfiguration() {
    }
    return UxPositioningConfiguration;
}());



/***/ }),

/***/ "qrd2":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/components/html-attributes.js ***!
  \************************************************************************************************************************/
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

/***/ "qsNw":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/ux-modal-theme.js ***!
  \******************************************************************************/
/*! exports provided: UxModalTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxModalTheme", function() { return UxModalTheme; });
var UxModalTheme = /** @class */ (function () {
    function UxModalTheme() {
        this.themeKey = 'modal';
        this.overlayColor = void 0;
        this.overlayOpacity = void 0;
        this.transitionDuration = void 0;
        this.overlayTransitionDuration = void 0;
        this.contentTransitionDuration = void 0;
        this.background = void 0;
        this.foreground = void 0;
        this.borderRadius = void 0;
        this.minWidth = void 0;
        this.unlocked = void 0;
    }
    return UxModalTheme;
}());



/***/ }),

/***/ "rhVe":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/list/dist/native-modules/ux-list-theme.js ***!
  \****************************************************************************/
/*! exports provided: UxListTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxListTheme", function() { return UxListTheme; });
var UxListTheme = /** @class */ (function () {
    function UxListTheme() {
        this.themeKey = 'list';
    }
    return UxListTheme;
}());

//# sourceMappingURL=ux-list-theme.js.map

/***/ }),

/***/ "s+Kn":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/hosts/cordova.js ***!
  \***********************************************************************************************************/
/*! exports provided: Cordova */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cordova", function() { return Cordova; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var _platforms_ios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../platforms/ios */ "4JUj");
/* harmony import */ var _platforms_android__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../platforms/android */ "RrOc");
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

/***/ "tlQM":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/aurelia-ux.js ***!
  \********************************************************************************************************/
/*! exports provided: AureliaUX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AureliaUX", function() { return AureliaUX; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_templating_binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-templating-binding */ "aurelia-templating-binding");
/* harmony import */ var _hosts_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hosts/cordova */ "s+Kn");
/* harmony import */ var _hosts_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hosts/web */ "e0Rp");
/* harmony import */ var _hosts_electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hosts/electron */ "1QsB");
/* harmony import */ var _ux_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ux-configuration */ "7o8i");
/* harmony import */ var _designs_design_processor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./designs/design-processor */ "6Jse");
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

/***/ "wP7m":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/styles/style-engine.js ***!
  \*****************************************************************************************************************/
/*! exports provided: StyleEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleEngine", function() { return StyleEngine; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _style_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-controller */ "ojKE");
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

/***/ "wxLm":
/*!********************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/resources/ok-modal-attribute.js ***!
  \********************************************************************************************/
/*! exports provided: OkModalAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkModalAttribute", function() { return OkModalAttribute; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _modal_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-util */ "WK2N");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OkModalAttribute = /** @class */ (function () {
    function OkModalAttribute(element) {
        this.element = element;
    }
    OkModalAttribute.prototype.bind = function () {
        this.element.addEventListener('click', this);
    };
    OkModalAttribute.prototype.unbind = function () {
        this.element.removeEventListener('click', this);
    };
    OkModalAttribute.prototype.handleEvent = function () {
        var modal = Object(_modal_util__WEBPACK_IMPORTED_MODULE_2__["findModal"])(this.element);
        if (modal !== null) {
            modal.ok(this.value);
        }
    };
    OkModalAttribute = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customAttribute"])('ok-modal')
    ], OkModalAttribute);
    return OkModalAttribute;
}());



/***/ }),

/***/ "x0cT":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/colors/swatches.js ***!
  \*************************************************************************************************************/
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

/***/ "xvzR":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/effects/paper-wave.js ***!
  \****************************************************************************************************************/
/*! exports provided: PaperWave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperWave", function() { return PaperWave; });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var _element_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-rect */ "i4YI");


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

/***/ "zCb5":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/node_modules/@aurelia-ux/core/dist/native-modules/designs/ios-design.js ***!
  \****************************************************************************************************************/
/*! exports provided: IOSDesign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSDesign", function() { return IOSDesign; });
/* harmony import */ var _colors_swatches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors/swatches */ "x0cT");
/* harmony import */ var _colors_shadows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colors/shadows */ "/nTB");


var IOSDesign = /** @class */ (function () {
    function IOSDesign() {
        this.type = 'ios';
        this.appBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p50;
        this.appForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
        this.controlBackground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.controlForeground = _colors_swatches__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p900;
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

/***/ "zTCc":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/modal/dist/native-modules/ux-modal-configuration.js ***!
  \**************************************************************************************/
/*! exports provided: UxDefaultModalConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxDefaultModalConfiguration", function() { return UxDefaultModalConfiguration; });
var UxDefaultModalConfiguration = /** @class */ (function () {
    function UxDefaultModalConfiguration() {
        this.modalBreakpoint = void 0;
        this.host = void 0;
        this.overlayDismiss = void 0;
        this.outsideDismiss = void 0;
        this.lock = void 0;
        this.position = void 0;
        this.keyboard = void 0;
        this.theme = void 0;
    }
    return UxDefaultModalConfiguration;
}());



/***/ })

}]);
//# sourceMappingURL=vendors~fe3d664a.a86693565d212d419b35.bundle.map