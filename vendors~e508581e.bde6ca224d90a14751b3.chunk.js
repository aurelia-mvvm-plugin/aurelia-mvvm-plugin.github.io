(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~e508581e"],{

/***/ "@aurelia-ux/form":
/*!********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/form/dist/native-modules/index.js ***!
  \********************************************************************/
/*! exports provided: UxFormTheme, UxForm, UxField, UxSubmitCustomAttribute, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-form */ "@aurelia-ux/form/ux-form");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxForm", function() { return _ux_form__WEBPACK_IMPORTED_MODULE_1__["UxForm"]; });

/* harmony import */ var _ux_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-field */ "@aurelia-ux/form/ux-field");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxField", function() { return _ux_field__WEBPACK_IMPORTED_MODULE_2__["UxField"]; });

/* harmony import */ var _ux_submit_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-submit-attribute */ "QLt9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxSubmitCustomAttribute", function() { return _ux_submit_attribute__WEBPACK_IMPORTED_MODULE_3__["UxSubmitCustomAttribute"]; });

/* harmony import */ var _ux_form_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-form-theme */ "ch81");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxFormTheme", function() { return _ux_form_theme__WEBPACK_IMPORTED_MODULE_4__["UxFormTheme"]; });







function configure(config) {
    config.globalResources([
        './ux-form',
        './ux-field',
        _ux_submit_attribute__WEBPACK_IMPORTED_MODULE_3__["UxSubmitCustomAttribute"]
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/form/ux-field":
/*!***********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/form/dist/native-modules/ux-field.js ***!
  \***********************************************************************/
/*! exports provided: UxField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxField", function() { return UxField; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UxField = /** @class */ (function () {
    function UxField(element) {
        this.element = element;
    }
    UxField.prototype.attached = function () {
        if (this.label && !this.element.querySelector('label')) {
            this.labelElement = document.createElement('label');
            this.labelElement.classList.add('ux-field__label');
            this.labelElement.textContent = this.label;
            this.element.insertBefore(this.labelElement, this.element.firstChild);
        }
    };
    UxField.prototype.labelChanged = function (newValue) {
        if (this.labelElement != null) {
            this.labelElement.textContent = newValue;
        }
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxField.prototype, "label", void 0);
    UxField = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-field')
    ], UxField);
    return UxField;
}());

//# sourceMappingURL=ux-field.js.map

/***/ }),

/***/ "@aurelia-ux/form/ux-field.html":
/*!*************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/form/dist/native-modules/ux-field.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template class=\"ux-form__field\">\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/form/ux-form":
/*!**********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/form/dist/native-modules/ux-form.js ***!
  \**********************************************************************/
/*! exports provided: UxForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxForm", function() { return UxForm; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UxForm = /** @class */ (function () {
    function UxForm(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.bindSubmitToEnter = false;
    }
    UxForm.prototype.bind = function () {
        if (this.theme != null) {
            this.themeChanged(this.theme);
        }
        if (this.submitOnEnter !== undefined) {
            this.bindSubmitToEnter = true;
        }
    };
    UxForm.prototype.attached = function () {
        var _this = this;
        if (this.bindSubmitToEnter) {
            this.element.addEventListener('keyup', function (e) {
                var canSubmit = true;
                if (e.srcElement != null && e.srcElement.tagName === 'TEXTAREA') {
                    canSubmit = false;
                }
                if (e.keyCode === 13 && canSubmit) {
                    _this.submitForm();
                }
            });
        }
    };
    UxForm.prototype.detached = function () {
        var _this = this;
        if (this.bindSubmitToEnter) {
            this.element.removeEventListener('keyup', function (e) {
                if (e.keyCode === 13) {
                    _this.submitForm();
                }
            });
        }
    };
    UxForm.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'form';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxForm.prototype.submitForm = function () {
        var submitEvent = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].createCustomEvent('submit', { bubbles: true, target: this.element });
        this.element.dispatchEvent(submitEvent);
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxForm.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxForm.prototype, "submitOnEnter", void 0);
    UxForm = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-form')
    ], UxForm);
    return UxForm;
}());

//# sourceMappingURL=ux-form.js.map

/***/ }),

/***/ "@aurelia-ux/form/ux-form.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/form/dist/native-modules/ux-form.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.ux-form__row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  margin-top: 16px;\n}\n\n.ux-form__sub-row {\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n  margin-left: 16px;\n}\n\n.ux-form__field {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 16px;\n}\n\n.ux-form__field:first-child {\n  margin-top: 0;\n}\n\n.ux-form__row:first-child,\n.ux-form__row .ux-form__field {\n  margin-top: 0;\n}\n\n.ux-form__row>* {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.ux-form__field>.ux-field__label {\n  font-size: 14px;\n  font-size: var(--aurelia-ux--form-label-font-size, 14px);\n  color: inherit;\n  color: var(--aurelia-ux--form-label-color, inherit);\n}\n\n.ux-form__row>*:last-child {\n  margin-right: 0;\n}\n\n.ux-form__row>*:first-child {\n  margin-left: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/form/ux-form.html":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/form/dist/native-modules/ux-form.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template role=\"form\" class=\"ux-form\">\n  <require from=\"./ux-form.css\"></require>\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/grid":
/*!********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/grid/dist/native-modules/index.js ***!
  \********************************************************************/
/*! exports provided: UxResponsiveUtilities, UxGridTheme, UxGrid, UxGridCell, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-grid */ "@aurelia-ux/grid/ux-grid");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxGrid", function() { return _ux_grid__WEBPACK_IMPORTED_MODULE_1__["UxGrid"]; });

/* harmony import */ var _ux_grid_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-grid-cell */ "@aurelia-ux/grid/ux-grid-cell");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxGridCell", function() { return _ux_grid_cell__WEBPACK_IMPORTED_MODULE_2__["UxGridCell"]; });

/* harmony import */ var _ux_responsive_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-responsive-utilities */ "VKpV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxResponsiveUtilities", function() { return _ux_responsive_utilities__WEBPACK_IMPORTED_MODULE_3__["UxResponsiveUtilities"]; });

/* harmony import */ var _ux_grid_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-grid-theme */ "EkW4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxGridTheme", function() { return _ux_grid_theme__WEBPACK_IMPORTED_MODULE_4__["UxGridTheme"]; });







function configure(config) {
    config.globalResources([
        './ux-grid',
        './ux-grid-cell'
    ]);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/grid/ux-grid":
/*!**********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/grid/dist/native-modules/ux-grid.js ***!
  \**********************************************************************/
/*! exports provided: UxGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxGrid", function() { return UxGrid; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UxGrid = /** @class */ (function () {
    function UxGrid(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
    }
    UxGrid.prototype.bind = function () {
        this.themeChanged(this.theme);
        if (this.columns != null) {
            this.columnsChanged(this.columns);
        }
        this.processAttributes();
    };
    UxGrid.prototype.processAttributes = function () {
        var alignAttributes = [
            'align-cells-top',
            'align-cells-middle',
            'align-cells-bottom',
            'fixed',
            'remove-padding'
        ];
        for (var _i = 0, alignAttributes_1 = alignAttributes; _i < alignAttributes_1.length; _i++) {
            var attribute = alignAttributes_1[_i];
            if (this.element.hasAttribute(attribute)) {
                this.element.removeAttribute(attribute);
                this.element.classList.add("ux-grid--" + attribute);
            }
        }
    };
    UxGrid.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'grid';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxGrid.prototype.columnsChanged = function (newValue) {
        if (newValue != null) {
            this.element.style.setProperty('grid-template-columns', "repeat(" + newValue + ", 1fr)");
        }
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxGrid.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxGrid.prototype, "columns", void 0);
    UxGrid = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-grid')
    ], UxGrid);
    return UxGrid;
}());

//# sourceMappingURL=ux-grid.js.map

/***/ }),

/***/ "@aurelia-ux/grid/ux-grid-cell":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/grid/dist/native-modules/ux-grid-cell.js ***!
  \***************************************************************************/
/*! exports provided: UxGridCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxGridCell", function() { return UxGridCell; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
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


var UxGridCell = /** @class */ (function () {
    function UxGridCell(element) {
        this.element = element;
    }
    UxGridCell.prototype.bind = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.processAttributes();
                this.xsChanged(this.xs);
                this.smChanged(this.sm);
                this.mdChanged(this.md);
                this.lgChanged(this.lg);
                this.xlChanged(this.xl);
                return [2 /*return*/];
            });
        });
    };
    UxGridCell.prototype.processAttributes = function () {
        var alignAttributes = [
            'align-self-top',
            'align-self-middle',
            'align-self-bottom',
            'align-self-stretch'
        ];
        for (var _i = 0, alignAttributes_1 = alignAttributes; _i < alignAttributes_1.length; _i++) {
            var attribute = alignAttributes_1[_i];
            if (this.element.hasAttribute(attribute)) {
                this.element.removeAttribute(attribute);
                this.element.classList.add("ux-grid-cell--" + attribute);
            }
        }
    };
    UxGridCell.prototype.xsChanged = function (newValue) {
        this.sizeChanged('xs', newValue);
    };
    UxGridCell.prototype.smChanged = function (newValue) {
        this.sizeChanged('sm', newValue);
    };
    UxGridCell.prototype.mdChanged = function (newValue) {
        this.sizeChanged('md', newValue);
    };
    UxGridCell.prototype.lgChanged = function (newValue) {
        this.sizeChanged('lg', newValue);
    };
    UxGridCell.prototype.xlChanged = function (newValue) {
        this.sizeChanged('xl', newValue);
    };
    UxGridCell.prototype.sizeChanged = function (size, value) {
        for (var i = 0; i < 10; i++) {
            this.element.classList.remove("ux-grid-cell--" + size + "-" + i);
            this.element.classList.remove("ux-grid-cell--order-" + this.order + "-" + size + "-" + i);
        }
        if (typeof value === 'string') {
            this.element.classList.add("ux-grid-cell--" + size + "-" + value);
            if (typeof this.order === 'string') {
                this.element.classList.add("ux-grid-cell--order-" + this.order + "-" + size + "-" + value);
            }
        }
    };
    UxGridCell.prototype.orderChanged = function () {
        this.xsChanged(this.xs);
        this.smChanged(this.sm);
        this.mdChanged(this.md);
        this.lgChanged(this.lg);
        this.xlChanged(this.xl);
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxGridCell.prototype, "xs", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxGridCell.prototype, "sm", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxGridCell.prototype, "md", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxGridCell.prototype, "lg", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxGridCell.prototype, "xl", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxGridCell.prototype, "order", void 0);
    UxGridCell = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-grid-cell')
    ], UxGridCell);
    return UxGridCell;
}());

//# sourceMappingURL=ux-grid-cell.js.map

/***/ }),

/***/ "@aurelia-ux/grid/ux-grid-cell.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/grid/dist/native-modules/ux-grid-cell.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template class=\"ux-grid-cell\">\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/grid/ux-grid.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/grid/dist/native-modules/ux-grid.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-grid {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-gap: 16px;\n  grid-gap: var(--aurelia-ux--grid-gutter-spacing, 16px);\n  margin-left: auto;\n  margin-right: auto;\n  padding: 16px;\n  padding: var(--aurelia-ux--grid-outer-padding, 16px);\n  box-sizing: border-box;\n  width: 100%;\n  align-items: stretch;\n  max-width: none;\n}\n\n.ux-grid--remove-padding {\n  padding: 0;\n}\n\n.ux-grid--align-cells-top {\n  align-items: flex-start;\n}\n\n.ux-grid--align-cells-middle {\n  align-items: center;\n}\n\n.ux-grid--align-cells-bottom {\n  align-items: flex-end;\n}\n\n.ux-grid-cell--align-self-top {\n  align-self: flex-start;\n}\n\n.ux-grid-cell--align-self-middle {\n  align-self: center;\n}\n\n.ux-grid-cell--align-self-bottom {\n  align-self: flex-end;\n}\n\n.ux-grid-cell--align-self-stretch {\n  align-self: stretch;\n}\n\n/*** cell definitions ***/\n\n.ux-grid-cell {\n  display: block;\n  grid-column: span 12;\n  max-width: 100%;\n}\n\n.ux-grid-cell--xs-0 {\n  display: none;\n}\n\n.ux-grid-cell--xs-1 {\n  grid-column: span 1;\n}\n\n.ux-grid-cell--xs-2 {\n  grid-column: span 2;\n}\n\n.ux-grid-cell--xs-3 {\n  grid-column: span 3;\n}\n\n.ux-grid-cell--xs-4 {\n  grid-column: span 4;\n}\n\n.ux-grid-cell--xs-5 {\n  grid-column: span 5;\n}\n\n.ux-grid-cell--xs-6 {\n  grid-column: span 6;\n}\n\n.ux-grid-cell--xs-7 {\n  grid-column: span 7;\n}\n\n.ux-grid-cell--xs-8 {\n  grid-column: span 8;\n}\n\n.ux-grid-cell--xs-9 {\n  grid-column: span 9;\n}\n\n.ux-grid-cell--xs-10 {\n  grid-column: span 10;\n}\n\n.ux-grid-cell--xs-11 {\n  grid-column: span 11;\n}\n\n.ux-grid-cell--xs-12 {\n  grid-column: span 12;\n}\n\n.ux-grid-cell--order-xs-neg {\n  order: -1;\n}\n\n.ux-grid-cell--order-xs-0 {\n  order: 0;\n}\n\n.ux-grid-cell--order-xs-1 {\n  order: 1;\n}\n\n.ux-grid-cell--order-xs-2 {\n  order: 2;\n}\n\n.ux-grid-cell--order-xs-3 {\n  order: 3;\n}\n\n.ux-grid-cell--order-xs-4 {\n  order: 4;\n}\n\n.ux-grid-cell--order-xs-5 {\n  order: 5;\n}\n\n.ux-grid-cell--order-xs-6 {\n  order: 6;\n}\n\n.ux-grid-cell--order-xs-7 {\n  order: 7;\n}\n\n.ux-grid-cell--order-xs-8 {\n  order: 8;\n}\n\n.ux-grid-cell--order-xs-9 {\n  order: 9;\n}\n\n.ux-grid-cell--order-xs-10 {\n  order: 10;\n}\n\n@media (min-width: 480px) {\n  .ux-grid-cell--sm-0 {\n    display: none;\n  }\n  .ux-grid-cell--sm-1 {\n    grid-column: span 1;\n  }\n  .ux-grid-cell--sm-2 {\n    grid-column: span 2;\n  }\n  .ux-grid-cell--sm-3 {\n    grid-column: span 3;\n  }\n  .ux-grid-cell--sm-4 {\n    grid-column: span 4;\n  }\n  .ux-grid-cell--sm-5 {\n    grid-column: span 5;\n  }\n  .ux-grid-cell--sm-6 {\n    grid-column: span 6;\n  }\n  .ux-grid-cell--sm-7 {\n    grid-column: span 7;\n  }\n  .ux-grid-cell--sm-8 {\n    grid-column: span 8;\n  }\n  .ux-grid-cell--sm-9 {\n    grid-column: span 9;\n  }\n  .ux-grid-cell--sm-10 {\n    grid-column: span 10;\n  }\n  .ux-grid-cell--sm-11 {\n    grid-column: span 11;\n  }\n  .ux-grid-cell--sm-12 {\n    grid-column: span 12;\n  }\n  .ux-grid-cell--order-sm-neg {\n    order: -1;\n  }\n  .ux-grid-cell--order-sm-0 {\n    order: 0;\n  }\n  .ux-grid-cell--order-sm-1 {\n    order: 1;\n  }\n  .ux-grid-cell--order-sm-2 {\n    order: 2;\n  }\n  .ux-grid-cell--order-sm-3 {\n    order: 3;\n  }\n  .ux-grid-cell--order-sm-4 {\n    order: 4;\n  }\n  .ux-grid-cell--order-sm-5 {\n    order: 5;\n  }\n  .ux-grid-cell--order-sm-6 {\n    order: 6;\n  }\n  .ux-grid-cell--order-sm-7 {\n    order: 7;\n  }\n  .ux-grid-cell--order-sm-8 {\n    order: 8;\n  }\n  .ux-grid-cell--order-sm-9 {\n    order: 9;\n  }\n  .ux-grid-cell--order-sm-10 {\n    order: 10;\n  }\n}\n\n@media (min-width: 960px) {\n  .ux-grid--fixed {\n    max-width: calc(960px - 32px);\n  }\n  .ux-grid-cell--md-0 {\n    display: none;\n  }\n  .ux-grid-cell--md-1 {\n    grid-column: span 1;\n  }\n  .ux-grid-cell--md-2 {\n    grid-column: span 2;\n  }\n  .ux-grid-cell--md-3 {\n    grid-column: span 3;\n  }\n  .ux-grid-cell--md-4 {\n    grid-column: span 4;\n  }\n  .ux-grid-cell--md-5 {\n    grid-column: span 5;\n  }\n  .ux-grid-cell--md-6 {\n    grid-column: span 6;\n  }\n  .ux-grid-cell--md-7 {\n    grid-column: span 7;\n  }\n  .ux-grid-cell--md-8 {\n    grid-column: span 8;\n  }\n  .ux-grid-cell--md-9 {\n    grid-column: span 9;\n  }\n  .ux-grid-cell--md-10 {\n    grid-column: span 10;\n  }\n  .ux-grid-cell--md-11 {\n    grid-column: span 11;\n  }\n  .ux-grid-cell--md-12 {\n    grid-column: span 12;\n  }\n  .ux-grid-cell--order-md-neg {\n    order: -1;\n  }\n  .ux-grid-cell--order-md-0 {\n    order: 0;\n  }\n  .ux-grid-cell--order-md-1 {\n    order: 1;\n  }\n  .ux-grid-cell--order-md-2 {\n    order: 2;\n  }\n  .ux-grid-cell--order-md-3 {\n    order: 3;\n  }\n  .ux-grid-cell--order-md-4 {\n    order: 4;\n  }\n  .ux-grid-cell--order-md-5 {\n    order: 5;\n  }\n  .ux-grid-cell--order-md-6 {\n    order: 6;\n  }\n  .ux-grid-cell--order-md-7 {\n    order: 7;\n  }\n  .ux-grid-cell--order-md-8 {\n    order: 8;\n  }\n  .ux-grid-cell--order-md-9 {\n    order: 9;\n  }\n  .ux-grid-cell--order-md-10 {\n    order: 10;\n  }\n}\n\n@media (min-width: 1280px) {\n  .ux-grid--fixed {\n    max-width: calc(1280px - 32px);\n  }\n  .ux-grid-cell--lg-0 {\n    display: none;\n  }\n  .ux-grid-cell--lg-1 {\n    grid-column: span 1;\n  }\n  .ux-grid-cell--lg-2 {\n    grid-column: span 2;\n  }\n  .ux-grid-cell--lg-3 {\n    grid-column: span 3;\n  }\n  .ux-grid-cell--lg-4 {\n    grid-column: span 4;\n  }\n  .ux-grid-cell--lg-5 {\n    grid-column: span 5;\n  }\n  .ux-grid-cell--lg-6 {\n    grid-column: span 6;\n  }\n  .ux-grid-cell--lg-7 {\n    grid-column: span 7;\n  }\n  .ux-grid-cell--lg-8 {\n    grid-column: span 8;\n  }\n  .ux-grid-cell--lg-9 {\n    grid-column: span 9;\n  }\n  .ux-grid-cell--lg-10 {\n    grid-column: span 10;\n  }\n  .ux-grid-cell--lg-11 {\n    grid-column: span 11;\n  }\n  .ux-grid-cell--lg-12 {\n    grid-column: span 12;\n  }\n  .ux-grid-cell--order-lg-neg {\n    order: -1;\n  }\n  .ux-grid-cell--order-lg-0 {\n    order: 0;\n  }\n  .ux-grid-cell--order-lg-1 {\n    order: 1;\n  }\n  .ux-grid-cell--order-lg-2 {\n    order: 2;\n  }\n  .ux-grid-cell--order-lg-3 {\n    order: 3;\n  }\n  .ux-grid-cell--order-lg-4 {\n    order: 4;\n  }\n  .ux-grid-cell--order-lg-5 {\n    order: 5;\n  }\n  .ux-grid-cell--order-lg-6 {\n    order: 6;\n  }\n  .ux-grid-cell--order-lg-7 {\n    order: 7;\n  }\n  .ux-grid-cell--order-lg-8 {\n    order: 8;\n  }\n  .ux-grid-cell--order-lg-9 {\n    order: 9;\n  }\n  .ux-grid-cell--order-lg-10 {\n    order: 10;\n  }\n}\n\n@media (min-width: 1925px) {\n  .ux-grid--fixed {\n    max-width: calc(1920px - 32px);\n  }\n  .ux-grid-cell--xl-0 {\n    display: none;\n  }\n  .ux-grid-cell--xl-1 {\n    grid-column: span 1;\n  }\n  .ux-grid-cell--xl-2 {\n    grid-column: span 2;\n  }\n  .ux-grid-cell--xl-3 {\n    grid-column: span 3;\n  }\n  .ux-grid-cell--xl-4 {\n    grid-column: span 4;\n  }\n  .ux-grid-cell--xl-5 {\n    grid-column: span 5;\n  }\n  .ux-grid-cell--xl-6 {\n    grid-column: span 6;\n  }\n  .ux-grid-cell--xl-7 {\n    grid-column: span 7;\n  }\n  .ux-grid-cell--xl-8 {\n    grid-column: span 8;\n  }\n  .ux-grid-cell--xl-9 {\n    grid-column: span 9;\n  }\n  .ux-grid-cell--xl-10 {\n    grid-column: span 10;\n  }\n  .ux-grid-cell--xl-11 {\n    grid-column: span 11;\n  }\n  .ux-grid-cell--xl-12 {\n    grid-column: span 12;\n  }\n  .ux-grid-cell--order-xl-neg {\n    order: -1;\n  }\n  .ux-grid-cell--order-xl-0 {\n    order: 0;\n  }\n  .ux-grid-cell--order-xl-1 {\n    order: 1;\n  }\n  .ux-grid-cell--order-xl-2 {\n    order: 2;\n  }\n  .ux-grid-cell--order-xl-3 {\n    order: 3;\n  }\n  .ux-grid-cell--order-xl-4 {\n    order: 4;\n  }\n  .ux-grid-cell--order-xl-5 {\n    order: 5;\n  }\n  .ux-grid-cell--order-xl-6 {\n    order: 6;\n  }\n  .ux-grid-cell--order-xl-7 {\n    order: 7;\n  }\n  .ux-grid-cell--order-xl-8 {\n    order: 8;\n  }\n  .ux-grid-cell--order-xl-9 {\n    order: 9;\n  }\n  .ux-grid-cell--order-xl-10 {\n    order: 10;\n  }\n}\n\n.ux-grid+.ux-grid {\n  padding-top: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/grid/ux-grid.html":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/grid/dist/native-modules/ux-grid.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template class=\"ux-grid\">\n  <require from=\"./ux-grid.css\"></require>\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "EkW4":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/grid/dist/native-modules/ux-grid-theme.js ***!
  \****************************************************************************/
/*! exports provided: UxGridTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxGridTheme", function() { return UxGridTheme; });
var UxGridTheme = /** @class */ (function () {
    function UxGridTheme() {
        this.themeKey = 'grid';
    }
    return UxGridTheme;
}());

//# sourceMappingURL=ux-grid-theme.js.map

/***/ }),

/***/ "QLt9":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/form/dist/native-modules/ux-submit-attribute.js ***!
  \**********************************************************************************/
/*! exports provided: UxSubmitCustomAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxSubmitCustomAttribute", function() { return UxSubmitCustomAttribute; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-templating */ "hij8");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UxSubmitCustomAttribute = /** @class */ (function () {
    function UxSubmitCustomAttribute(element) {
        this.element = element;
        this.canSubmit = false;
    }
    UxSubmitCustomAttribute.prototype.attached = function () {
        var _this = this;
        var currentParent = this.element.parentElement;
        while (currentParent != null) {
            if (currentParent.tagName === 'UX-FORM') {
                this.canSubmit = true;
                this.submitEvent = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].createCustomEvent('submit', { bubbles: true });
                this.element.addEventListener('mouseup', function () {
                    _this.element.dispatchEvent(_this.submitEvent);
                });
                break;
            }
            currentParent = currentParent.parentElement;
        }
    };
    UxSubmitCustomAttribute.prototype.detached = function () {
        var _this = this;
        if (this.canSubmit) {
            this.element.removeEventListener('mouseup', function () {
                _this.element.dispatchEvent(_this.submitEvent);
            });
        }
    };
    UxSubmitCustomAttribute = __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_2__["customAttribute"])('ux-submit'),
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element)
    ], UxSubmitCustomAttribute);
    return UxSubmitCustomAttribute;
}());

//# sourceMappingURL=ux-submit-attribute.js.map

/***/ }),

/***/ "VKpV":
/*!**************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/grid/dist/native-modules/ux-responsive-utilities.js ***!
  \**************************************************************************************/
/*! exports provided: UxResponsiveUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxResponsiveUtilities", function() { return UxResponsiveUtilities; });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ "70NS");

/** Utility class that assists with designing a responsive site. */
var UxResponsiveUtilities = /** @class */ (function () {
    function UxResponsiveUtilities() {
        var _this = this;
        /** Visible on screens smaller than 480px. */
        this.xs = false;
        /** Visible on screens larger than 480px, and smaller than 960px. */
        this.sm = false;
        /** Visible on screens larger than 960px, and smaller than 1280px. */
        this.md = false;
        /** Visible on screens larger than 1280px, and smaller than 1925px. */
        this.lg = false;
        /** Visible on screens larger than 1925px. */
        this.xl = false;
        this.updating = false;
        this.calculateResponsiveValues = function () {
            _this.height = aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].global.innerHeight;
            _this.width = aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].global.innerWidth;
            _this.xs = _this.width <= 480;
            _this.sm = _this.width > 480 && _this.width <= 960;
            _this.md = _this.width > 960 && _this.width <= 1280;
            _this.lg = _this.width > 1280 && _this.width <= 1925;
            _this.xl = _this.width > 1925;
            _this.updating = false;
        };
        aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].global.addEventListener('resize', function () { return _this.onResize(); });
        this.calculateResponsiveValues();
    }
    UxResponsiveUtilities.prototype.onResize = function () {
        if (this.updating) {
            return;
        }
        this.updating = true;
        if (aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].global.requestAnimationFrame) {
            aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].global.requestAnimationFrame(this.calculateResponsiveValues);
        }
        else {
            setTimeout(this.calculateResponsiveValues, 100);
        }
    };
    UxResponsiveUtilities.prototype.dispose = function () {
        aurelia_pal__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].global.removeEventListener('resize', this.calculateResponsiveValues);
    };
    return UxResponsiveUtilities;
}());

//# sourceMappingURL=ux-responsive-utilities.js.map

/***/ }),

/***/ "ch81":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/form/dist/native-modules/ux-form-theme.js ***!
  \****************************************************************************/
/*! exports provided: UxFormTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxFormTheme", function() { return UxFormTheme; });
var UxFormTheme = /** @class */ (function () {
    function UxFormTheme() {
        this.themeKey = 'form';
    }
    return UxFormTheme;
}());

//# sourceMappingURL=ux-form-theme.js.map

/***/ })

}]);
//# sourceMappingURL=vendors~e508581e.bde6ca224d90a14751b3.bundle.map