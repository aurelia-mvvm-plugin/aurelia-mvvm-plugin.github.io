(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~0877c396"],{

/***/ "@aurelia-ux/icons":
/*!*********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/icons/dist/native-modules/index.js ***!
  \*********************************************************************/
/*! exports provided: UxIconTheme, UxIcon, UxIconMap, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-icon */ "@aurelia-ux/icons/ux-icon");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxIcon", function() { return _ux_icon__WEBPACK_IMPORTED_MODULE_1__["UxIcon"]; });

/* harmony import */ var _ux_icon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-icon-theme */ "y3xB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxIconTheme", function() { return _ux_icon_theme__WEBPACK_IMPORTED_MODULE_2__["UxIconTheme"]; });

/* harmony import */ var _ux_icon_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-icon-map */ "FAi6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxIconMap", function() { return _ux_icon_map__WEBPACK_IMPORTED_MODULE_3__["UxIconMap"]; });







function configure(config, iconsOrConfig) {
    config.globalResources('./ux-icon');
    var uxConfig = {};
    if (Array.isArray(iconsOrConfig) && iconsOrConfig.length > 0) {
        uxConfig.icons = iconsOrConfig;
    }
    else if (typeof iconsOrConfig === 'object') {
        uxConfig = iconsOrConfig;
    }
    var uxIconMap = config.container.get(_ux_icon_map__WEBPACK_IMPORTED_MODULE_3__["UxIconMap"]);
    if (typeof uxConfig.defaultIconWidth === 'number') {
        uxIconMap.defaultIconWidth = uxConfig.defaultIconWidth;
    }
    if (typeof uxConfig.defaultIconHeight === 'number') {
        uxIconMap.defaultIconHeight = uxConfig.defaultIconHeight;
    }
    if (uxConfig.icons) {
        uxIconMap.registerIcons(uxConfig.icons);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/icons/ux-icon":
/*!***********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/icons/dist/native-modules/ux-icon.js ***!
  \***********************************************************************/
/*! exports provided: UxIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxIcon", function() { return UxIcon; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-logging */ "MP1E");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _ux_icon_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ux-icon-theme */ "y3xB");
/* harmony import */ var _ux_icon_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ux-icon-map */ "FAi6");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UxIcon = /** @class */ (function () {
    function UxIcon(element, iconMap, styleEngine, logger) {
        this.element = element;
        this.iconMap = iconMap;
        this.styleEngine = styleEngine;
        this.logger = logger;
        this.icon = undefined;
    }
    UxIcon.prototype.bind = function () {
        if (this.icon) {
            this.changeIcon(this.icon);
        }
        this.sizeChanged(this.size);
        this.themeChanged(this.theme);
    };
    UxIcon.prototype.sizeChanged = function (newValue) {
        if (this.size) {
            if (this.theme === undefined) {
                this.theme = new _ux_icon_theme__WEBPACK_IMPORTED_MODULE_5__["UxIconTheme"]();
            }
            this.theme.size = newValue;
        }
    };
    UxIcon.prototype.themeChanged = function (newValue) {
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxIcon.prototype.iconChanged = function (newValue) {
        this.changeIcon(newValue);
    };
    UxIcon.prototype.changeIcon = function (icon) {
        var material = this.iconMap.get(icon);
        if (material) {
            this.element.innerHTML = material;
        }
        else {
            this.logger.warn('ux-icon: no matching icon found', this.element);
        }
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxIcon.prototype, "size", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxIcon.prototype, "theme", void 0);
    __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"])({ defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_2__["bindingMode"].twoWay })
    ], UxIcon.prototype, "icon", void 0);
    UxIcon = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_3__["inject"])(Element, _ux_icon_map__WEBPACK_IMPORTED_MODULE_6__["UxIconMap"], _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_4__["StyleEngine"], aurelia_logging__WEBPACK_IMPORTED_MODULE_1__["Logger"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-icon'),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["processAttributes"])(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_4__["processDesignAttributes"])
    ], UxIcon);
    return UxIcon;
}());

//# sourceMappingURL=ux-icon.js.map

/***/ }),

/***/ "@aurelia-ux/icons/ux-icon.css":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/icons/dist/native-modules/ux-icon.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ux-icon {\n    display: inline-block;\n    align-self: center;\n    width: 24px;\n    width: var(--aurelia-ux--icon-size, 24px);\n    height: 24px;\n    height: var(--aurelia-ux--icon-size, 24px);\n}\n\nux-icon > svg {\n    width: 24px;\n    width: var(--aurelia-ux--icon-size, 24px);\n    height: 24px;\n    height: var(--aurelia-ux--icon-size, 24px);\n    fill: currentColor;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/icons/ux-icon.html":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/icons/dist/native-modules/ux-icon.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template>\n  <require from=\"./ux-icon.css\"></require>\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/input":
/*!*********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input/dist/native-modules/index.js ***!
  \*********************************************************************/
/*! exports provided: UxInputTheme, UxInput, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _ux_input_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-input-theme */ "ntFM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxInputTheme", function() { return _ux_input_theme__WEBPACK_IMPORTED_MODULE_3__["UxInputTheme"]; });

/* harmony import */ var _ux_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-input */ "@aurelia-ux/input/ux-input");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxInput", function() { return _ux_input__WEBPACK_IMPORTED_MODULE_4__["UxInput"]; });






function configure(config) {
    config.container.get(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["AureliaUX"]).registerUxElementConfig(uxInputConfig);
    config.globalResources('./ux-input');
}
var uxInputConfig = {
    tagName: 'ux-input',
    properties: {
        value: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindingMode"].twoWay,
            getObserver: function (element) {
                return new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["ValueAttributeObserver"](element, 'value', new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["EventSubscriber"](['change']));
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/input-info":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input-info/dist/native-modules/index.js ***!
  \**************************************************************************/
/*! exports provided: UxInputInfo, UxInputInfoTheme, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_input_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-input-info */ "@aurelia-ux/input-info/ux-input-info");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxInputInfo", function() { return _ux_input_info__WEBPACK_IMPORTED_MODULE_1__["UxInputInfo"]; });

/* harmony import */ var _ux_input_info_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-input-info-theme */ "Jt4K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxInputInfoTheme", function() { return _ux_input_info_theme__WEBPACK_IMPORTED_MODULE_2__["UxInputInfoTheme"]; });





function configure(config) {
    config.globalResources('./ux-input-info');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/input-info/ux-input-info":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input-info/dist/native-modules/ux-input-info.js ***!
  \**********************************************************************************/
/*! exports provided: UxInputInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxInputInfo", function() { return UxInputInfo; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UxInputInfo = /** @class */ (function () {
    function UxInputInfo(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.uxInputCounter = null;
    }
    UxInputInfo.prototype.bind = function () {
        if (this.target === undefined) {
            this.findAndSetTarget(this.element);
        }
        this.themeChanged(this.theme);
    };
    UxInputInfo.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'input-info';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxInputInfo.prototype.findAndSetTarget = function (element) {
        var inputElement = element.previousElementSibling;
        if (!inputElement) {
            return;
        }
        if (inputElement.nodeName === 'UX-INPUT' || inputElement.nodeName === 'UX-TEXTAREA') {
            this.target = inputElement.au.controller.viewModel;
        }
    };
    Object.defineProperty(UxInputInfo.prototype, "maxLength", {
        get: function () {
            var target = this.target;
            if (target.element.tagName === 'UX-INPUT' || target.element.tagName === 'UX-TEXTAREA') {
                return target.maxlength;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UxInputInfo.prototype, "length", {
        get: function () {
            var target = this.target;
            if (target.element.tagName === 'UX-INPUT' || target.element.tagName === 'UX-TEXTAREA') {
                return target.value.length;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInputInfo.prototype, "target", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInputInfo.prototype, "uxInputCounter", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInputInfo.prototype, "theme", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_3__["computedFrom"])('target.maxlength')
    ], UxInputInfo.prototype, "maxLength", null);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_3__["computedFrom"])('target.value')
    ], UxInputInfo.prototype, "length", null);
    UxInputInfo = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-input-info')
    ], UxInputInfo);
    return UxInputInfo;
}());

//# sourceMappingURL=ux-input-info.js.map

/***/ }),

/***/ "@aurelia-ux/input-info/ux-input-info.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input-info/dist/native-modules/ux-input-info.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-input-info {\n  display: flex;\n  font-size: 14px;\n  padding: 0 16px;\n  width: 100%;\n  color: #757575;\n  color: var(--aurelia-ux--input-info-foreground, var(--aurelia-ux--design-control-label-color, #757575));\n  box-sizing: border-box;\n  margin-top: 4px;\n}\n\n.ux-input-info>.ux-input-info__hint-text,\n.ux-input-info>.ux-input-info__error-text {\n  flex-grow: 1;\n  display: none;\n}\n\n.ux-input-info>.ux-input-info__counter {\n  transition: 250ms;\n  flex-wrap: nowrap;\n  display: flex;\n}\n\n.ux-input--has-error+.ux-input-info {\n  color: #F44336;\n  color: var(--aurelia-ux--input-info-error, var(--aurelia-ux--design-error, #F44336));\n}\n\n.ux-input[disabled]+.ux-input-info {\n  display: none;\n}\n\n.ux-input-info>.ux-input-info__hint-text:first-child,\n.ux-input-info>.ux-input-info__error-text:first-child {\n  display: block;\n}\n\n.ux-input--focused+.ux-input-info .ux-input-info__counter {\n  /* color: #FF4081;\n  color: var(--aurelia-ux--design-accent, #FF4081); */\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/input-info/ux-input-info.html":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input-info/dist/native-modules/ux-input-info.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template class=\"ux-input-info\">\n  <require from=\"./ux-input-info.css\"></require>\n  <span class=\"ux-input-info__hint-text\">\n    <slot></slot>\n  </span>\n  <div class=\"ux-input-info__counter\" if.bind=\"uxInputCounter !== null && target !== undefined\">\n    <span>${length ? length : 0}</span>\n    <span if.bind=\"maxLength > 0\">/${maxLength}</span>\n  </div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/input/ux-input":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input/dist/native-modules/ux-input.js ***!
  \************************************************************************/
/*! exports provided: UxInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxInput", function() { return UxInput; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aurelia-ux/core/components/ux-input-component.css */ "J012");
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aurelia_ux_core_components_ux_input_component_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_outline_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aurelia-ux/core/components/ux-input-component--outline.css */ "Ldb8");
/* harmony import */ var _aurelia_ux_core_components_ux_input_component_outline_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_aurelia_ux_core_components_ux_input_component_outline_css__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// tslint:disable-next-line: no-submodule-imports

// tslint:disable-next-line: no-submodule-imports

var UxInput = /** @class */ (function () {
    function UxInput(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.autofocus = null;
        this.disabled = false;
        this.readonly = false;
        this.variant = 'filled';
        this.dense = false;
        this.rawValue = '';
        this.focused = false;
        Object.setPrototypeOf(element, uxInputElementProto);
    }
    UxInput.prototype.bind = function () {
        var element = this.element;
        var textbox = this.textbox;
        var textboxValue = this.textbox.getAttribute('value');
        if (textboxValue != null) {
            this.rawValue = textboxValue;
        }
        if (this.autofocus || this.autofocus === '') {
            this.focused = true;
        }
        this.dense = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_4__["normalizeBooleanAttribute"])('dense', this.dense);
        if (element.hasAttribute('id')) {
            var attributeValue = element.getAttribute('id');
            if (attributeValue) {
                element.removeAttribute('id');
                textbox.setAttribute('id', attributeValue);
            }
        }
        if (element.hasAttribute('step')) {
            var attributeValue = element.getAttribute('step');
            if (attributeValue) {
                textbox.setAttribute('step', attributeValue);
                element.removeAttribute('step');
            }
        }
        this.typeChanged(this.type);
        if (this.min) {
            textbox.setAttribute('min', this.min.toString());
        }
        if (this.max) {
            textbox.setAttribute('max', this.max.toString());
        }
        if (this.minlength) {
            textbox.setAttribute('minlength', this.minlength.toString());
        }
        if (this.maxlength) {
            textbox.setAttribute('maxlength', this.maxlength.toString());
        }
        this.autocompleteChanged(this.autocomplete);
        this.themeChanged(this.theme);
    };
    UxInput.prototype.attached = function () {
        this.textbox.addEventListener('change', stopEvent);
        this.textbox.addEventListener('input', stopEvent);
        this.variantChanged(this.variant);
    };
    UxInput.prototype.detached = function () {
        this.textbox.removeEventListener('change', stopEvent);
        this.textbox.removeEventListener('input', stopEvent);
    };
    UxInput.prototype.getValue = function () {
        return this.value;
    };
    UxInput.prototype.setValue = function (value) {
        var oldValue = this.value;
        var newValue = this.processRawValue(value);
        if (oldValue !== newValue) {
            this.value = newValue;
            this.ignoreRawChanges = true;
            this.rawValue = newValue === null || newValue === undefined ? '' : newValue.toString();
            this.ignoreRawChanges = false;
            this.element.dispatchEvent(aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].createCustomEvent('change', { bubbles: true }));
        }
    };
    UxInput.prototype.processRawValue = function (rawValue) {
        var newValue = rawValue;
        if (this.type === 'number') {
            newValue = rawValue === '' ? NaN : Number(rawValue);
            if (isNaN(newValue)) {
                newValue = null;
            }
            else {
                if (this.min !== undefined && this.min > newValue) {
                    newValue = this.min;
                }
                if (this.max !== undefined && newValue > this.max) {
                    newValue = this.max;
                }
            }
        }
        return newValue;
    };
    UxInput.prototype.autocompleteChanged = function (newValue) {
        if (newValue == null) {
            this.textbox.removeAttribute('autocomplete');
        }
        else {
            this.textbox.setAttribute('autocomplete', newValue);
        }
    };
    UxInput.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'input';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxInput.prototype.focusedChanged = function (focused) {
        this.element.classList.toggle('ux-input-component--focused', focused);
        this.element.dispatchEvent(aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].createCustomEvent(focused ? 'focus' : 'blur', { bubbles: false }));
    };
    UxInput.prototype.typeChanged = function (newValue) {
        if (![
            'text',
            'password',
            'number',
            'email',
            'url',
            'tel',
            'search'
        ].includes(newValue)) {
            this.type = 'text';
            return;
        }
        this.textbox.setAttribute('type', this.type);
    };
    UxInput.prototype.rawValueChanged = function (newValue) {
        this.element.classList.toggle('ux-input-component--has-value', newValue.length > 0);
        if (this.ignoreRawChanges) {
            return;
        }
        this.setValue(newValue);
    };
    UxInput.prototype.focusInput = function () {
        this.textbox.focus();
    };
    UxInput.prototype.variantChanged = function (newValue) {
        this.element.style.backgroundColor = newValue === 'outline' ?
            this.element.style.backgroundColor = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_4__["getBackgroundColorThroughParents"])(this.element) :
            '';
    };
    Object.defineProperty(UxInput.prototype, "placeholderMode", {
        get: function () {
            return typeof this.label !== 'string' || this.label.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "autofocus", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "autocomplete", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "maxlength", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "minlength", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "min", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "max", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "readonly", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "label", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "placeholder", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "type", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "variant", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxInput.prototype, "dense", void 0);
    __decorate([
        aurelia_binding__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], UxInput.prototype, "rawValue", void 0);
    __decorate([
        aurelia_binding__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], UxInput.prototype, "focused", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_2__["computedFrom"])('label')
    ], UxInput.prototype, "placeholderMode", null);
    UxInput = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_3__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_4__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-input')
    ], UxInput);
    return UxInput;
}());

function stopEvent(e) {
    e.stopPropagation();
}
var getVm = function (_) { return _.au.controller.viewModel; };
var uxInputElementProto = Object.create(HTMLElement.prototype, {
    value: {
        get: function () {
            return getVm(this).getValue();
        },
        set: function (value) {
            getVm(this).setValue(value);
        }
    }
});
//# sourceMappingURL=ux-input.js.map

/***/ }),

/***/ "@aurelia-ux/input/ux-input.css":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input/dist/native-modules/ux-input.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-input {\n  --foreground: var(--aurelia-ux--input-foreground, var(--aurelia-ux--design-control-foreground, #212121));\n  --foreground-label: var(--aurelia-ux--input-foreground-label, var(--aurelia-ux--design-control-label-color, #757575));\n  --background: var(--aurelia-ux--input-background, var(--aurelia-ux--design-control-background, #E0E0E0));\n  --background-hover: var(--aurelia-ux--input-background-hover, #00000027);\n  --active-color: var(--aurelia-ux--input-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n\n  --font-size: var(--aurelia-ux--input-font-size, 16px);\n  --letter-spacing: var(--aurelia-ux--input-letter-spacing, inherit);\n  --label-font-size: var(--aurelia-ux--input-label-font-size, 12px);\n  --label-letter-spacing: var(--aurelia-ux--input-label-letter-spacing, 0.5px);\n  --line-height: var(--aurelia-ux--input-line-height, 1.6);\n  --label-line-height: var(--aurelia-ux--input-label-line-height, 1.6);\n\n  --border-color: var(--aurelia-ux--input-border-color, var(--aurelia-ux--design-control-label-color, #757575));\n  --border-radius: var(--aurelia-ux--input-border-radius, 4px);\n  --border-width: var(--aurelia-ux--input-border-width, 1px);\n  --border-active-width: var(--aurelia-ux--input-border-active-width, 2px);\n\n  --disabled-foreground: var(--aurelia-ux--input-disabled-foreground, var(--aurelia-ux--design-disabled-foreground, #9E9E9E));\n  --disabled-background: var(--aurelia-ux--input-disabled-background, var(--aurelia-ux--design-disabled-background, #e1e1e1));\n\n  --error: var(--aurelia-ux--input-error, var(--aurelia-ux--design-error, #F44336));\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/input/ux-input.html":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input/dist/native-modules/ux-input.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template role=\"textbox\"\n  class=\"ux-input-component ux-input-component--${variant} ${dense ? 'ux-input-component--dense' : ''} ${placeholderMode ? 'ux-input-component--placeholder' : ''} ux-input\"\n  disabled.bind=\"disabled & booleanAttr\"\n  readonly.bind=\"readonly & booleanAttr\"\n  aria-disabled.bind=\"disabled & booleanAttr\"\n  aria-readonly.bind=\"readonly & booleanAttr\"\n  click.trigger=\"focusInput()\">\n  <require from=\"./ux-input.css\"></require>\n\n  \n  <slot name=\"leading-icon\"></slot>\n\n  <span class=\"ux-input-component__content\">\n    <div class=\"ux-input-component__label-background\" if.bind=\"variant === 'outline' && (label || placeholder)\" css=\"width: ${labelEl.offsetWidth + 6}px;\"></div>\n    <div class=\"ux-input-component__label\" ref=\"labelEl\">${label || placeholder}</div>\n  \n    <input\n      ref=\"textbox\"\n      class=\"ux-input-component__inner-input\"\n      value.bind=\"rawValue\"\n      focus.bind=\"focused\"\n      disabled.bind=\"disabled & booleanAttr\"\n      readonly.bind=\"readonly & booleanAttr\"\n      required.bind=\"required & booleanAttr\">\n  </span>\n\n  <slot name=\"trailing-icon\"></slot>\n\n  <div class=\"ux-input-component__border\" show.bind=\"!(variant === 'filled' && disabled)\"></div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "FAi6":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/icons/dist/native-modules/ux-icon-map.js ***!
  \***************************************************************************/
/*! exports provided: UxIconMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxIconMap", function() { return UxIconMap; });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ "MP1E");

var logger = Object(aurelia_logging__WEBPACK_IMPORTED_MODULE_0__["getLogger"])('ux-icon-map');
var UxIconMap = /** @class */ (function () {
    function UxIconMap() {
        this.defaultIconWidth = 24;
        this.defaultIconHeight = 24;
        this.map = {};
    }
    UxIconMap.prototype.registerIcon = function (nameOrIcon, svg) {
        var name;
        if (Array.isArray(nameOrIcon) && nameOrIcon.length >= 2) {
            svg = this.buildSvg(nameOrIcon);
            name = nameOrIcon[0];
        }
        else if (typeof nameOrIcon === 'object' && !Array.isArray(nameOrIcon)) {
            svg = nameOrIcon.svg;
            name = nameOrIcon.name;
        }
        else if (typeof nameOrIcon === 'string' && typeof svg === 'string') {
            name = nameOrIcon;
        }
        else {
            logger.warn('Invalid icon', nameOrIcon);
            return;
        }
        this.map[name] = svg;
    };
    UxIconMap.prototype.registerIcons = function (icons) {
        var _this = this;
        if (Array.isArray(icons)) {
            icons.map(function (icon) { return _this.registerIcon(icon); });
        }
    };
    UxIconMap.prototype.buildSvg = function (icon) {
        return "<svg viewBox=\"0 0 " + (icon[2] || this.defaultIconWidth) + " " + (icon[3] || this.defaultIconHeight) + "\">" + icon[1] + "</svg>";
    };
    UxIconMap.prototype.has = function (name) {
        var _this = this;
        if (typeof name === 'string') {
            name = [name];
        }
        return name.reduce(function (missing, icon) {
            return missing || _this.map[icon] === undefined;
        }, false);
    };
    UxIconMap.prototype.get = function (name) {
        return this.map[name];
    };
    UxIconMap.prototype.getAllKeys = function () {
        return Object.keys(this.map);
    };
    return UxIconMap;
}());

//# sourceMappingURL=ux-icon-map.js.map

/***/ }),

/***/ "Jt4K":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input-info/dist/native-modules/ux-input-info-theme.js ***!
  \****************************************************************************************/
/*! exports provided: UxInputInfoTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxInputInfoTheme", function() { return UxInputInfoTheme; });
var UxInputInfoTheme = /** @class */ (function () {
    function UxInputInfoTheme() {
        this.themeKey = 'input-info';
    }
    return UxInputInfoTheme;
}());

//# sourceMappingURL=ux-input-info-theme.js.map

/***/ }),

/***/ "ntFM":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/input/dist/native-modules/ux-input-theme.js ***!
  \******************************************************************************/
/*! exports provided: UxInputTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxInputTheme", function() { return UxInputTheme; });
var UxInputTheme = /** @class */ (function () {
    function UxInputTheme() {
        this.themeKey = 'input';
    }
    return UxInputTheme;
}());

//# sourceMappingURL=ux-input-theme.js.map

/***/ }),

/***/ "y3xB":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/icons/dist/native-modules/ux-icon-theme.js ***!
  \*****************************************************************************/
/*! exports provided: UxIconTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxIconTheme", function() { return UxIconTheme; });
var UxIconTheme = /** @class */ (function () {
    function UxIconTheme() {
        this.themeKey = 'icon';
    }
    return UxIconTheme;
}());

//# sourceMappingURL=ux-icon-theme.js.map

/***/ })

}]);
//# sourceMappingURL=vendors~0877c396.6d6021808fdaf3655dce.bundle.map