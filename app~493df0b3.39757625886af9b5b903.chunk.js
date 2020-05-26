(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~493df0b3"],{

/***/ "+4k+":
/*!*****************************!*\
  !*** ../src/model/model.ts ***!
  \*****************************/
/*! exports provided: Model, EditableModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableModel", function() { return EditableModel; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "@logofx/aurelia-mvvm-plugin");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Model = (function () {
    function Model() {
    }
    Object.defineProperty(Model.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        set: function (value) {
            if (value === this._rules) {
                return;
            }
            this._rules = value;
        },
        enumerable: false,
        configurable: true
    });
    Model.prototype.toString = function () {
        return Object(_index__WEBPACK_IMPORTED_MODULE_0__["makeString"])(this);
    };
    return Model;
}());

var EditableModel = (function (_super) {
    __extends(EditableModel, _super);
    function EditableModel() {
        var _this = _super.call(this) || this;
        _this._isDirty = false;
        _this._isNew = false;
        _this._isEditing = false;
        return _this;
    }
    Object.defineProperty(EditableModel.prototype, "isNew", {
        get: function () {
            return this._isNew;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditableModel.prototype, "isDirty", {
        get: function () {
            return this._isDirty;
        },
        enumerable: false,
        configurable: true
    });
    EditableModel.prototype.makeDirty = function () {
        this._isDirty = ( true && this._isEditing);
    };
    EditableModel.prototype.cleanDirty = function () {
        this._isDirty = false;
    };
    EditableModel.prototype.beginEdit = function () {
        this.cleanDirty();
        this._isEditing = true;
    };
    EditableModel.prototype.cancelEdit = function () {
        this.cleanDirty();
        this._isEditing = false;
    };
    EditableModel.prototype.commitEdit = function () {
        this.cleanDirty();
        this._isEditing = false;
    };
    EditableModel.prototype.makeNew = function () {
        if (!this._newGuard) {
            this._newGuard = this._isNew = true;
        }
    };
    return EditableModel;
}(Model));



/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ "10Hp":
/*!****************************************!*\
  !*** ../src/core/collections/queue.ts ***!
  \****************************************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ "MKMg");

var Queue = (function () {
    function Queue() {
        this.list = new _linked_list__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]();
    }
    Queue.prototype.enqueue = function (elem) {
        return this.list.add(elem);
    };
    Queue.prototype.add = function (elem) {
        return this.list.add(elem);
    };
    Queue.prototype.dequeue = function () {
        if (this.list.size() !== 0) {
            var el = this.list.first();
            this.list.removeElementAtIndex(0);
            return el;
        }
        return undefined;
    };
    Queue.prototype.peek = function () {
        if (this.list.size() !== 0) {
            return this.list.first();
        }
        return undefined;
    };
    Queue.prototype.size = function () {
        return this.list.size();
    };
    Queue.prototype.contains = function (elem, equalsFunction) {
        return this.list.contains(elem, equalsFunction);
    };
    Queue.prototype.isEmpty = function () {
        return this.list.size() <= 0;
    };
    Queue.prototype.clear = function () {
        this.list.clear();
    };
    Queue.prototype.forEach = function (callback) {
        this.list.forEach(callback);
    };
    return Queue;
}());



/***/ }),

/***/ "13mn":
/*!*****************************************!*\
  !*** ./images/aurelia-icon-128x128.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c6eb8ff5967f46ef5309a346595f17ed.png");

/***/ }),

/***/ "5iGm":
/*!*****************************************!*\
  !*** ../src/core/collections/arrays.ts ***!
  \*****************************************/
/*! exports provided: indexOf, lastIndexOf, contains, remove, frequency, equals, copy, swap, toString, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return lastIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frequency", function() { return frequency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _collection_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-util */ "8Xfo");

function indexOf(array, item, equalsFunction) {
    var equalityFunction = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__["defaultEquals"];
    var length = array.length;
    for (var i = 0; i < length; i++) {
        if (equalityFunction(array[i], item)) {
            return i;
        }
    }
    return -1;
}
function lastIndexOf(array, item, equalsFunction) {
    var equalityFunction = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__["defaultEquals"];
    var length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        if (equalityFunction(array[i], item)) {
            return i;
        }
    }
    return -1;
}
function contains(array, item, equalsFunction) {
    return indexOf(array, item, equalsFunction) >= 0;
}
function remove(array, item, equalsFunction) {
    var index = indexOf(array, item, equalsFunction);
    if (index < 0) {
        return false;
    }
    array.splice(index, 1);
    return true;
}
function frequency(array, item, equalsFunction) {
    var equalityFunction = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__["defaultEquals"];
    var length = array.length;
    var freq = 0;
    for (var i = 0; i < length; i++) {
        if (equalityFunction(array[i], item)) {
            freq++;
        }
    }
    return freq;
}
function equals(array1, array2, equalsFunction) {
    var equalityFunction = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__["defaultEquals"];
    if (array1.length !== array2.length) {
        return false;
    }
    var length = array1.length;
    for (var i = 0; i < length; i++) {
        if (!equalityFunction(array1[i], array2[i])) {
            return false;
        }
    }
    return true;
}
function copy(array) {
    return array.concat();
}
function swap(array, i, j) {
    if (i < 0 || i >= array.length || j < 0 || j >= array.length) {
        return false;
    }
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return true;
}
function toString(array) {
    return "[ " + array.toString() + " ]";
}
function forEach(array, callback) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var ele = array_1[_i];
        if (callback(ele) === false) {
            return;
        }
    }
}


/***/ }),

/***/ "7Hn3":
/*!***************************************************************!*\
  !*** ./src/resources/elements/ux/toolbar/ux-toolbar-theme.ts ***!
  \***************************************************************/
/*! exports provided: UxToolbarTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxToolbarTheme", function() { return UxToolbarTheme; });
var UxToolbarTheme = (function () {
    function UxToolbarTheme() {
        this.themeKey = 'toolbar';
        this.info = '#0ca4ec';
        this.infoForeground = '#fff';
        this.success = '#3eb77a';
        this.successForeground = '#fff';
        this.warning = '#f48536';
        this.warningForeground = '#fff';
        this.error = '#F44336';
        this.errorForeground = '#fff';
    }
    return UxToolbarTheme;
}());



/***/ }),

/***/ "8Xfo":
/*!**************************************************!*\
  !*** ../src/core/collections/collection-util.ts ***!
  \**************************************************/
/*! exports provided: has, defaultCompare, defaultEquals, defaultToString, makeString, isFunction, isUndefined, isString, reverseCompareFunction, compareToEquals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCompare", function() { return defaultCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultEquals", function() { return defaultEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultToString", function() { return defaultToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeString", function() { return makeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseCompareFunction", function() { return reverseCompareFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareToEquals", function() { return compareToEquals; });
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
function defaultCompare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a === b) {
        return 0;
    }
    else {
        return 1;
    }
}
function defaultEquals(a, b) {
    return a === b;
}
function defaultToString(item) {
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return "$s + " + item;
    }
    else {
        return "$o + " + item.toString();
    }
}
function makeString(item, join) {
    if (join === void 0) { join = ','; }
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return item.toString();
    }
    else {
        var toret = '{';
        var first = true;
        for (var prop in item) {
            if (has(item, prop)) {
                if (first) {
                    first = false;
                }
                else {
                    toret = toret + join;
                }
                toret = toret + " " + prop + " : " + item[prop];
            }
        }
        return toret + " }";
    }
}
function isFunction(func) {
    return (typeof func) === 'function';
}
function isUndefined(obj) {
    return (typeof obj) === 'undefined';
}
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function reverseCompareFunction(compareFunction) {
    if (isUndefined(compareFunction) || !isFunction(compareFunction)) {
        return function (a, b) {
            if (a < b) {
                return 1;
            }
            else if (a === b) {
                return 0;
            }
            else {
                return -1;
            }
        };
    }
    else {
        return function (d, v) {
            return compareFunction(d, v) * -1;
        };
    }
}
function compareToEquals(compareFunction) {
    return function (a, b) {
        return compareFunction(a, b) === 0;
    };
}


/***/ }),

/***/ "9V3K":
/*!********************************************!*\
  !*** ../src/ui-services/window-manager.ts ***!
  \********************************************/
/*! exports provided: WindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowManager", function() { return WindowManager; });
/* harmony import */ var aurelia_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dialog */ "cI5h");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "DMpY");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-framework */ "KOsu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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



var WindowManager = (function () {
    function WindowManager(dialogService) {
        this.dialogService = dialogService;
    }
    WindowManager.prototype.show = function (viewModel) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        _this.dialogService.open({
                            viewModel: _dialog__WEBPACK_IMPORTED_MODULE_1__["Dialog"],
                            model: viewModel
                        })
                            .whenClosed(function (response) {
                            resolve(response);
                        });
                    })];
            });
        });
    };
    WindowManager = __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_2__["autoinject"],
        __metadata("design:paramtypes", [aurelia_dialog__WEBPACK_IMPORTED_MODULE_0__["DialogService"]])
    ], WindowManager);
    return WindowManager;
}());



/***/ }),

/***/ "@logofx/aurelia-mvvm-plugin":
/*!***********************!*\
  !*** ../src/index.ts ***!
  \***********************/
/*! exports provided: utils, Model, EditableModel, Guid, arrays, Dictionary, LinkedList, Queue, Set, getDefaultBindingEngine, getDefaultObserverLocator, ObjectViewModel, ScreenObjectViewModel, ViewModelCreatorService, WrappingCollection, EditableObjectViewModel, WindowManager, isUndefined, isString, has, makeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeString", function() { return makeString; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "fzNA");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/model */ "+4k+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _model_model__WEBPACK_IMPORTED_MODULE_1__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableModel", function() { return _model_model__WEBPACK_IMPORTED_MODULE_1__["EditableModel"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "yqyd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Guid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrays", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["arrays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Dictionary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["LinkedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["Set"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultBindingEngine", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["getDefaultBindingEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultObserverLocator", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["getDefaultObserverLocator"]; });

/* harmony import */ var _view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-model */ "lICO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectViewModel", function() { return _view_model__WEBPACK_IMPORTED_MODULE_3__["ObjectViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenObjectViewModel", function() { return _view_model__WEBPACK_IMPORTED_MODULE_3__["ScreenObjectViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelCreatorService", function() { return _view_model__WEBPACK_IMPORTED_MODULE_3__["ViewModelCreatorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrappingCollection", function() { return _view_model__WEBPACK_IMPORTED_MODULE_3__["WrappingCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableObjectViewModel", function() { return _view_model__WEBPACK_IMPORTED_MODULE_3__["EditableObjectViewModel"]; });

/* harmony import */ var _ui_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-services */ "P+mA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowManager", function() { return _ui_services__WEBPACK_IMPORTED_MODULE_4__["WindowManager"]; });







function isUndefined(obj) {
    return (typeof obj) === 'undefined';
}
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
function makeString(item, join) {
    if (join === void 0) { join = ','; }
    if (item === null) {
        return 'COLLECTION_NULL';
    }
    else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    }
    else if (isString(item)) {
        return item.toString();
    }
    else {
        var toret = '{';
        var first = true;
        for (var prop in item) {
            if (has(item, prop)) {
                if (first) {
                    first = false;
                }
                else {
                    toret = toret + join;
                }
                toret = toret + " " + prop + ": " + item[prop];
            }
        }
        return "" + toret + '}';
    }
}


/***/ }),

/***/ "BEPO":
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/*! exports provided: debug, testing, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"debug\":false,\"testing\":false}");

/***/ }),

/***/ "DMpY":
/*!************************************!*\
  !*** ../src/ui-services/dialog.ts ***!
  \************************************/
/*! exports provided: Dialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
var Dialog = (function () {
    function Dialog(dialogController) {
    }
    Dialog.prototype.activate = function (viewModel) {
        this.viewModel = viewModel;
    };
    return Dialog;
}());



/***/ }),

/***/ "KU75":
/*!*******************************************************!*\
  !*** ../src/view-model/view-model-creator-service.ts ***!
  \*******************************************************/
/*! exports provided: ViewModelCreatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelCreatorService", function() { return ViewModelCreatorService; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "KOsu");

var ViewModelCreatorService = (function () {
    function ViewModelCreatorService() {
    }
    ViewModelCreatorService.prototype.create = function (type) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        var instance = aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["Container"].instance.get(type);
        if (rest.length > 0) {
            instance['model'] = rest[0];
            if (rest.length > 1) {
                instance['navigationService'] = rest[1];
            }
        }
        return instance;
    };
    return ViewModelCreatorService;
}());



/***/ }),

/***/ "MKMg":
/*!**********************************************!*\
  !*** ../src/core/collections/linked-list.ts ***!
  \**********************************************/
/*! exports provided: LinkedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/* harmony import */ var _collection_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-util */ "8Xfo");
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrays */ "5iGm");


var LinkedList = (function () {
    function LinkedList() {
        this.firstNode = null;
        this.lastNode = null;
        this.nElements = 0;
    }
    LinkedList.prototype.add = function (item, index) {
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](index)) {
            index = this.nElements;
        }
        if (index < 0 || index > this.nElements || _collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](item)) {
            return false;
        }
        var newNode = this.createNode(item);
        if (this.nElements === 0 || this.lastNode === null) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else if (index === this.nElements) {
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        else if (index === 0) {
            newNode.next = this.firstNode;
            this.firstNode = newNode;
        }
        else {
            var prev = this.nodeAtIndex(index - 1);
            if (prev === null) {
                return false;
            }
            newNode.next = prev.next;
            prev.next = newNode;
        }
        this.nElements++;
        return true;
    };
    LinkedList.prototype.first = function () {
        if (this.firstNode !== null) {
            return this.firstNode.element;
        }
        return undefined;
    };
    LinkedList.prototype.last = function () {
        if (this.lastNode !== null) {
            return this.lastNode.element;
        }
        return undefined;
    };
    LinkedList.prototype.elementAtIndex = function (index) {
        var node = this.nodeAtIndex(index);
        if (node === null) {
            return undefined;
        }
        return node.element;
    };
    LinkedList.prototype.indexOf = function (item, equalsFunction) {
        var equalsF = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__["defaultEquals"];
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](item)) {
            return -1;
        }
        var currentNode = this.firstNode;
        var index = 0;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                return index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    };
    LinkedList.prototype.contains = function (item, equalsFunction) {
        return (this.indexOf(item, equalsFunction) >= 0);
    };
    LinkedList.prototype.remove = function (item, equalsFunction) {
        var equalsF = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__["defaultEquals"];
        if (this.nElements < 1 || _collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](item)) {
            return false;
        }
        var previous = null;
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (equalsF(currentNode.element, item)) {
                if (previous === null) {
                    this.firstNode = currentNode.next;
                    if (currentNode === this.lastNode) {
                        this.lastNode = null;
                    }
                }
                else if (currentNode === this.lastNode) {
                    this.lastNode = previous;
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                else {
                    previous.next = currentNode.next;
                    currentNode.next = null;
                }
                this.nElements--;
                return true;
            }
            previous = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    };
    LinkedList.prototype.clear = function () {
        this.firstNode = null;
        this.lastNode = null;
        this.nElements = 0;
    };
    LinkedList.prototype.equals = function (other, equalsFunction) {
        var eqF = equalsFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__["defaultEquals"];
        if (!(other instanceof LinkedList)) {
            return false;
        }
        if (this.size() !== other.size()) {
            return false;
        }
        return this.equalsAux(this.firstNode, other.firstNode, eqF);
    };
    LinkedList.prototype.removeElementAtIndex = function (index) {
        if (index < 0 || index >= this.nElements || this.firstNode === null || this.lastNode === null) {
            return undefined;
        }
        var element;
        if (this.nElements === 1) {
            element = this.firstNode.element;
            this.firstNode = null;
            this.lastNode = null;
        }
        else {
            var previous = this.nodeAtIndex(index - 1);
            if (previous === null) {
                element = this.firstNode.element;
                this.firstNode = this.firstNode.next;
            }
            else if (previous.next === this.lastNode) {
                element = this.lastNode.element;
                this.lastNode = previous;
            }
            if (previous !== null && previous.next !== null) {
                element = previous.next.element;
                previous.next = previous.next.next;
            }
        }
        this.nElements--;
        return element;
    };
    LinkedList.prototype.forEach = function (callback) {
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            if (callback(currentNode.element) === false) {
                break;
            }
            currentNode = currentNode.next;
        }
    };
    LinkedList.prototype.reverse = function () {
        var previous = null;
        var current = this.firstNode;
        var temp = null;
        while (current !== null) {
            temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        temp = this.firstNode;
        this.firstNode = this.lastNode;
        this.lastNode = temp;
    };
    LinkedList.prototype.toArray = function () {
        var array = [];
        var currentNode = this.firstNode;
        while (currentNode !== null) {
            array.push(currentNode.element);
            currentNode = currentNode.next;
        }
        return array;
    };
    LinkedList.prototype.size = function () {
        return this.nElements;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    LinkedList.prototype.toString = function () {
        return _arrays__WEBPACK_IMPORTED_MODULE_1__["toString"](this.toArray());
    };
    LinkedList.prototype.equalsAux = function (n1, n2, eqF) {
        while (n1 !== null && n2 !== null) {
            if (!eqF(n1.element, n2.element)) {
                return false;
            }
            n1 = n1.next;
            n2 = n2.next;
        }
        return true;
    };
    LinkedList.prototype.nodeAtIndex = function (index) {
        if (index < 0 || index >= this.nElements) {
            return null;
        }
        if (index === (this.nElements - 1)) {
            return this.lastNode;
        }
        var node = this.firstNode;
        for (var i = 0; i < index && node !== null; i++) {
            node = node.next;
        }
        return node;
    };
    LinkedList.prototype.createNode = function (item) {
        return {
            element: item,
            next: null
        };
    };
    return LinkedList;
}());



/***/ }),

/***/ "P+mA":
/*!***********************************!*\
  !*** ../src/ui-services/index.ts ***!
  \***********************************/
/*! exports provided: WindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window-manager */ "9V3K");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowManager", function() { return _window_manager__WEBPACK_IMPORTED_MODULE_0__["WindowManager"]; });




/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App, CategoriesValueConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesValueConverter", function() { return CategoriesValueConverter; });
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "gLBg");
/* harmony import */ var _themes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes.json */ "uekW");
var _themes_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./themes.json */ "uekW", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var App = (function () {
    function App(styleEngine) {
        this.styleEngine = styleEngine;
        this.theme = localStorage.getItem('theme');
        this.styleEngine.applyThemeGroup(this.theme == 'dark' ? _themes_json__WEBPACK_IMPORTED_MODULE_3__["dark"] : _themes_json__WEBPACK_IMPORTED_MODULE_3__["light"]);
    }
    App.prototype.configureRouter = function (config, router) {
        this.router = router;
        config.options.pushState = true;
        config.options.root = '/';
        config.map(_routes__WEBPACK_IMPORTED_MODULE_2__["routes"]);
    };
    App.prototype.toggleTheme = function () {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.styleEngine.applyThemeGroup(this.theme == 'dark' ? _themes_json__WEBPACK_IMPORTED_MODULE_3__["dark"] : _themes_json__WEBPACK_IMPORTED_MODULE_3__["light"]);
    };
    App = __decorate([
        aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["autoinject"],
        __metadata("design:paramtypes", [_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_0__["StyleEngine"]])
    ], App);
    return App;
}());

var CategoriesValueConverter = (function () {
    function CategoriesValueConverter() {
    }
    CategoriesValueConverter.prototype.toView = function (navModels) {
        var categories = new Map();
        for (var _i = 0, navModels_1 = navModels; _i < navModels_1.length; _i++) {
            var model = navModels_1[_i];
            var routes_1 = categories.get(model.settings.category);
            if (!routes_1) {
                categories.set(model.settings.category, routes_1 = []);
            }
            routes_1.push(model);
        }
        return categories;
    };
    return CategoriesValueConverter;
}());



/***/ }),

/***/ "app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap);"]);
// Module
exports.push([module.i, "body {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n}\n\nbody {\n  background: var(--aurelia-ux--design-app-background);\n  color: var(--aurelia-ux--design-app-foreground);\n\n}\n\nsection {\n  max-width: 1024px;\n  margin: 0px auto;\n  padding: 20px 20px 40px 20px;\n}\n\nheader.main-header {\n  position: absolute;\n  top: 0;\n  left: 260px;\n  right: 0;\n  height: 70px;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  box-shadow: var(--aurelia-ux--design-elevation4dp);\n  background-color: var(--ux-swatch--grey-p200);\n  color: var(--ux-swatch--grey-p900);\n  z-index: 1;\n}\n\nheader.main-header > * {\n  margin-right: 16px;\n}\n\nheader.main-header > ux-chip {\n  cursor: pointer;\n}\n\nheader.main-header > ux-chip.theme-toggler {\n  justify-self: flex-end;\n}\n\nrouter-view.page {\n  position: absolute;\n  top: 70px;\n  left: 260px;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 16px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template>\n<require from=\"./app.css\"></require>\n<require from=\"resources/elements/layout/sidebar/sidebar\"></require>\n\n<sidebar></sidebar>\n\n<!-- <ux-drawer type=\"permanent\">\n  <header>\n    <a href=\"/getting-started\" style=\"max-width: 90px; width: 100%;\">\n      \n      <h1>Aurelia UX</h1>\n    </a>\n  </header>\n  <ux-list class=\"drawer-menu\">\n    <template repeat.for=\"[category, routes] of router.navigation | categories\">\n      <div class=\"ux-list-item header\">\n        ${category.title}\n      </div>\n      <div class=\"ux-list-item ${nav.isActive ? 'active' : ''}\" repeat.for=\"nav of routes\">\n        <a class=\"list-content\" href.bind=\"nav.href\">\n          ${nav.title}\n        </a>\n      </div>\n    </template>\n  </ux-list>\n</ux-drawer> -->\n\n<main>\n  <ux-toolbar>\n    <div class=\"toolbar-row\">\n      <span class=\"title\">\n        ${router.currentInstruction.config.navModel.title}\n      </span>\n      <span class=\"spacer\"></span>\n      <!-- <span click.delegate=\"toggleTheme()\" style=\"cursor: pointer;\">Toggle Theme</span> -->\n    </div>\n  </ux-toolbar>\n\n  <router-view class=\"page\"></router-view>\n</main>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "eO/j":
/*!****************************************!*\
  !*** ../src/core/collections/index.ts ***!
  \****************************************/
/*! exports provided: arrays, Dictionary, LinkedList, Queue, Set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrays", function() { return arrays; });
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrays */ "5iGm");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ "glzh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return _dictionary__WEBPACK_IMPORTED_MODULE_1__["Dictionary"]; });

/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linked-list */ "MKMg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return _linked_list__WEBPACK_IMPORTED_MODULE_2__["LinkedList"]; });

/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queue */ "10Hp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return _queue__WEBPACK_IMPORTED_MODULE_3__["Queue"]; });

/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set */ "mAAT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return _set__WEBPACK_IMPORTED_MODULE_4__["Set"]; });


var arrays = _arrays__WEBPACK_IMPORTED_MODULE_0__;






/***/ }),

/***/ "fy5R":
/*!*****************************************************!*\
  !*** ../src/view-model/screen-object-view-model.ts ***!
  \*****************************************************/
/*! exports provided: ScreenObjectViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenObjectViewModel", function() { return ScreenObjectViewModel; });
/* harmony import */ var aurelia_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-validation */ "5J/N");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "KOsu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenObjectViewModel = (function () {
    function ScreenObjectViewModel(model) {
        this._isSelected = false;
        this._isEnabled = true;
        this.model = model;
        var controllerFactory = aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["Container"].instance.get(aurelia_validation__WEBPACK_IMPORTED_MODULE_0__["ValidationControllerFactory"]);
        this.controller = controllerFactory.createForCurrentScope();
    }
    Object.defineProperty(ScreenObjectViewModel.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            if (this._isSelected === value) {
                return;
            }
            this._isSelected = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScreenObjectViewModel.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            if (this._isEnabled === value) {
                return;
            }
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["bindable"])(),
        __metadata("design:type", Object)
    ], ScreenObjectViewModel.prototype, "model", void 0);
    return ScreenObjectViewModel;
}());



/***/ }),

/***/ "fzNA":
/*!***********************!*\
  !*** ../src/utils.ts ***!
  \***********************/
/*! exports provided: clear, jsonClone, spreadClone, deepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonClone", function() { return jsonClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spreadClone", function() { return spreadClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
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
function clear(array) {
    array.splice(0, array.length);
    return array;
}
function jsonClone(source) {
    var seen = [];
    var json = JSON.stringify(source, function (_, val) {
        if (val != null && typeof val === 'object') {
            if (seen.indexOf(val) >= 0) {
                return;
            }
            seen.push(val);
        }
        return val;
    });
    var temp = JSON.parse(json);
    return temp;
}
function spreadClone(source) {
    return __assign({}, source);
}
function deepClone(obj) {
    var copy;
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = deepClone(obj[attr]);
            }
        }
        return copy;
    }
    throw new Error('Unable to copy obj! Its type isn\'t supported.');
}


/***/ }),

/***/ "gLBg":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ "70NS");

var coreFeatures = 'Core Features';
var formComponents = 'Form Components';
var layoutComponents = 'Layout Components';
var routes = [
    { route: '', redirect: 'getting-started' },
    { settings: { category: coreFeatures, icon: 'settings' }, route: 'getting-started', moduleId: 'routes/getting-started', name: 'gettingstarted', title: 'Getting Started', nav: true },
];


/***/ }),

/***/ "glzh":
/*!*********************************************!*\
  !*** ../src/core/collections/dictionary.ts ***!
  \*********************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony import */ var _collection_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-util */ "8Xfo");

var Dictionary = (function () {
    function Dictionary(toStrFunction) {
        this.table = {};
        this.nElements = 0;
        this.toStr = toStrFunction || _collection_util__WEBPACK_IMPORTED_MODULE_0__["defaultToString"];
    }
    Dictionary.prototype.getValue = function (key) {
        var pair = this.table["$" + this.toStr(key)];
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](pair)) {
            return undefined;
        }
        return pair.value;
    };
    Dictionary.prototype.setValue = function (key, value) {
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](key) || _collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](value)) {
            return undefined;
        }
        var ret;
        var k = "$" + this.toStr(key);
        var previousElement = this.table[k];
        if (_collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](previousElement)) {
            this.nElements++;
            ret = undefined;
        }
        else {
            ret = previousElement.value;
        }
        this.table[k] = {
            key: key,
            value: value
        };
        return ret;
    };
    Dictionary.prototype.remove = function (key) {
        var k = "$" + this.toStr(key);
        var previousElement = this.table[k];
        if (!_collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](previousElement)) {
            delete this.table[k];
            this.nElements--;
            return previousElement.value;
        }
        return undefined;
    };
    Dictionary.prototype.keys = function () {
        var array = [];
        for (var name_1 in this.table) {
            if (_collection_util__WEBPACK_IMPORTED_MODULE_0__["has"](this.table, name_1)) {
                var pair = this.table[name_1];
                array.push(pair.key);
            }
        }
        return array;
    };
    Dictionary.prototype.values = function () {
        var array = [];
        for (var name_2 in this.table) {
            if (_collection_util__WEBPACK_IMPORTED_MODULE_0__["has"](this.table, name_2)) {
                var pair = this.table[name_2];
                array.push(pair.value);
            }
        }
        return array;
    };
    Dictionary.prototype.forEach = function (callback) {
        for (var name_3 in this.table) {
            if (_collection_util__WEBPACK_IMPORTED_MODULE_0__["has"](this.table, name_3)) {
                var pair = this.table[name_3];
                var ret = callback(pair.key, pair.value);
                if (ret === false) {
                    return;
                }
            }
        }
    };
    Dictionary.prototype.containsKey = function (key) {
        return !_collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](this.getValue(key));
    };
    Dictionary.prototype.clear = function () {
        this.table = {};
        this.nElements = 0;
    };
    Dictionary.prototype.size = function () {
        return this.nElements;
    };
    Dictionary.prototype.isEmpty = function () {
        return this.nElements <= 0;
    };
    Dictionary.prototype.toString = function () {
        var toret = '{';
        this.forEach(function (k, v) {
            toret += "\n\t" + k + " : " + v;
        });
        return toret + "\\n}";
    };
    return Dictionary;
}());



/***/ }),

/***/ "hilo":
/*!*******************************************************!*\
  !*** ../src/view-model/editable-object-view-model.ts ***!
  \*******************************************************/
/*! exports provided: EditableObjectViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableObjectViewModel", function() { return EditableObjectViewModel; });
/* harmony import */ var _object_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-view-model */ "tlZ/");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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

var EditableObjectViewModel = (function (_super) {
    __extends(EditableObjectViewModel, _super);
    function EditableObjectViewModel(model) {
        return _super.call(this, model) || this;
    }
    EditableObjectViewModel.prototype.beginEdit = function () {
        this.model.beginEdit();
    };
    EditableObjectViewModel.prototype.cancelEdit = function () {
    };
    EditableObjectViewModel.prototype.endEdit = function () {
        var _this = this;
        this
            .validationController
            .validate()
            .then(function (validation) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!validation.valid) return [3, 1];
                        throw new Error(validation.results.toString());
                    case 1: return [4, this.save(this.model)
                            .then(function () {
                            _this.model.commitEdit();
                        })
                            .then(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2, this.afterSave(this.model)];
                        }); }); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        }); })
            .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.showError(error)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); });
    };
    return EditableObjectViewModel;
}(_object_view_model__WEBPACK_IMPORTED_MODULE_0__["ObjectViewModel"]));



/***/ }),

/***/ "htjf":
/*!*********************************************************!*\
  !*** ./src/resources/elements/ux/tabs/ux-tabs-theme.ts ***!
  \*********************************************************/
/*! exports provided: UxTabsTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxTabsTheme", function() { return UxTabsTheme; });
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");

var UxTabsTheme = (function () {
    function UxTabsTheme() {
        this.themeKey = 'tabs';
        this.background = 'transparent';
        this.foreground = _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.indicator = _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
    }
    return UxTabsTheme;
}());



/***/ }),

/***/ "jALf":
/*!***************************!*\
  !*** ../src/core/guid.ts ***!
  \***************************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = (function () {
    function Guid(guid) {
        if (!guid) {
            throw new TypeError('Invalid argument; `value` has no value.');
        }
        this.value = Guid.EMPTY;
        if (guid && Guid.isGuid(guid)) {
            this.value = guid;
        }
    }
    Guid.isGuid = function (guid) {
        var value = guid.toString();
        return guid && (guid instanceof Guid || Guid.validator.test(value));
    };
    Guid.create = function () {
        return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-'));
    };
    Guid.createEmpty = function () {
        return new Guid('emptyguid');
    };
    Guid.parse = function (guid) {
        return new Guid(guid);
    };
    Guid.raw = function () {
        return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join('-');
    };
    Guid.gen = function (count) {
        var out = '';
        for (var i = 0; i < count; i++) {
            var random = crypto.getRandomValues(new Uint32Array(1))[0];
            random = random / Math.pow(10, random.toString().length);
            out += (((1 + random) * 0x10000) | 0)
                .toString(16)
                .substring(1);
        }
        return out;
    };
    Guid.prototype.equals = function (other) {
        return Guid.isGuid(other) && this.value === other.toString();
    };
    Guid.prototype.isEmpty = function () {
        return this.value === Guid.EMPTY;
    };
    Guid.prototype.toString = function () {
        return this.value;
    };
    Guid.prototype.toJSON = function () {
        return {
            value: this.value
        };
    };
    Guid.validator = new RegExp('^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$', 'i');
    Guid.EMPTY = '00000000-0000-0000-0000-000000000000';
    return Guid;
}());



/***/ }),

/***/ "lICO":
/*!**********************************!*\
  !*** ../src/view-model/index.ts ***!
  \**********************************/
/*! exports provided: ObjectViewModel, ScreenObjectViewModel, ViewModelCreatorService, WrappingCollection, EditableObjectViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _object_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-view-model */ "tlZ/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectViewModel", function() { return _object_view_model__WEBPACK_IMPORTED_MODULE_0__["ObjectViewModel"]; });

/* harmony import */ var _screen_object_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen-object-view-model */ "fy5R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenObjectViewModel", function() { return _screen_object_view_model__WEBPACK_IMPORTED_MODULE_1__["ScreenObjectViewModel"]; });

/* harmony import */ var _view_model_creator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-model-creator-service */ "KU75");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelCreatorService", function() { return _view_model_creator_service__WEBPACK_IMPORTED_MODULE_2__["ViewModelCreatorService"]; });

/* harmony import */ var _wrapping_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapping-collection */ "t+/c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrappingCollection", function() { return _wrapping_collection__WEBPACK_IMPORTED_MODULE_3__["WrappingCollection"]; });

/* harmony import */ var _editable_object_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editable-object-view-model */ "hilo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableObjectViewModel", function() { return _editable_object_view_model__WEBPACK_IMPORTED_MODULE_4__["EditableObjectViewModel"]; });








/***/ }),

/***/ "mAAT":
/*!**************************************!*\
  !*** ../src/core/collections/set.ts ***!
  \**************************************/
/*! exports provided: Set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony import */ var _collection_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection-util */ "8Xfo");
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrays */ "5iGm");
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary */ "glzh");



var Set = (function () {
    function Set(toStringFunction) {
        this.dictionary = new _dictionary__WEBPACK_IMPORTED_MODULE_2__["Dictionary"](toStringFunction);
    }
    Set.prototype.contains = function (element) {
        return this.dictionary.containsKey(element);
    };
    Set.prototype.add = function (element) {
        if (this.contains(element) || _collection_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](element)) {
            return false;
        }
        else {
            this.dictionary.setValue(element, element);
            return true;
        }
    };
    Set.prototype.intersection = function (otherSet) {
        var _this = this;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                _this.remove(element);
            }
            return true;
        });
    };
    Set.prototype.union = function (otherSet) {
        otherSet.forEach(function (element) {
            this.add(element);
            return true;
        });
    };
    Set.prototype.difference = function (otherSet) {
        otherSet.forEach(function (element) {
            this.remove(element);
            return true;
        });
    };
    Set.prototype.isSubsetOf = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        var isSub = true;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                isSub = false;
                return false;
            }
            return true;
        });
        return isSub;
    };
    Set.prototype.remove = function (element) {
        if (!this.contains(element)) {
            return false;
        }
        else {
            this.dictionary.remove(element);
            return true;
        }
    };
    Set.prototype.forEach = function (callback) {
        this.dictionary.forEach(function (k, v) {
            return callback(v);
        });
    };
    Set.prototype.toArray = function () {
        return this.dictionary.values();
    };
    Set.prototype.isEmpty = function () {
        return this.dictionary.isEmpty();
    };
    Set.prototype.size = function () {
        return this.dictionary.size();
    };
    Set.prototype.clear = function () {
        this.dictionary.clear();
    };
    Set.prototype.toString = function () {
        return _arrays__WEBPACK_IMPORTED_MODULE_1__["toString"](this.toArray());
    };
    return Set;
}());



/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ "BEPO");
var _config_environment_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/environment.json */ "BEPO", 1);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var _aurelia_ux_icons_sets_full_array_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/icons/sets/full-array.json */ "MAWX");
var _aurelia_ux_icons_sets_full_array_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @aurelia-ux/icons/sets/full-array.json */ "MAWX", 1);



function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources/index')
        .plugin('@logofx/aurelia-mvvm-plugin')
        .plugin('aurelia-dialog')
        .plugin('aurelia-validation')
        .plugin('@aurelia-ux/core')
        .plugin('@aurelia-ux/button')
        .plugin('@aurelia-ux/card')
        .plugin('@aurelia-ux/checkbox')
        .plugin('@aurelia-ux/chip-input')
        .plugin('@aurelia-ux/datepicker')
        .plugin('@aurelia-ux/form')
        .plugin('@aurelia-ux/grid')
        .plugin('@aurelia-ux/icons', { icons: _aurelia_ux_icons_sets_full_array_json__WEBPACK_IMPORTED_MODULE_2__ })
        .plugin('@aurelia-ux/input')
        .plugin('@aurelia-ux/input-info')
        .plugin('@aurelia-ux/list')
        .plugin('@aurelia-ux/modal', function (config) {
        config.position = 'top';
        config.overlayDismiss = true;
    })
        .plugin('@aurelia-ux/positioning', function (config) {
        config.offsetX = 10;
        config.offsetY = 10;
    })
        .plugin('@aurelia-ux/radio')
        .plugin('@aurelia-ux/select')
        .plugin('@aurelia-ux/slider')
        .plugin('@aurelia-ux/switch')
        .plugin('@aurelia-ux/textarea');
    aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__["debug"] ? 'debug' : 'warn');
    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__["testing"]) {
        aurelia.use.plugin('aurelia-testing');
    }
    aurelia.start().then(function () { return aurelia.setRoot('app'); });
}


/***/ }),

/***/ "resources/elements/code-block":
/*!**********************************************!*\
  !*** ./src/resources/elements/code-block.ts ***!
  \**********************************************/
/*! exports provided: CodeBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlock", function() { return CodeBlock; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "wZee");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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


var CodeBlock = (function () {
    function CodeBlock(element) {
        this.element = element;
        this.type = 'javascript';
    }
    CodeBlock.prototype.bind = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.highlightAllUnder(this.element)];
                    case 1:
                        _a.sent();
                        this.fixRenderedHtml();
                        return [2];
                }
            });
        });
    };
    CodeBlock.prototype.fixRenderedHtml = function () {
        var lines = this.codeblock.innerHTML
            .replace('<!--slot-->', '')
            .replace(/^[\r\n]*|[\s\r\n]+$/g, '')
            .split(/\n/);
        if (lines.length < 1) {
            return;
        }
        var leadingSpaces = lines[0].search(/\S/);
        for (var index = 0; index < lines.length; index++) {
            lines[index] = lines[index].slice(leadingSpaces);
        }
        this.codeblock.innerHTML = lines.join("\n");
    };
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"],
        __metadata("design:type", Object)
    ], CodeBlock.prototype, "type", void 0);
    CodeBlock = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element),
        __metadata("design:paramtypes", [Element])
    ], CodeBlock);
    return CodeBlock;
}());



/***/ }),

/***/ "resources/elements/code-block.css":
/*!***********************************************!*\
  !*** ./src/resources/elements/code-block.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "code-block > pre[class*=\"language-\"] {\n  margin: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "resources/elements/code-block.html":
/*!************************************************!*\
  !*** ./src/resources/elements/code-block.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template>\n    <require from=\"./code-block.css\"></require>\n    <require from=\"prismjs/themes/prism.css\"></require>\n\n  <pre><code class=\"language-${type}\" ref=\"codeblock\"><slot></slot></code></pre>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "resources/elements/layout/sidebar/sidebar":
/*!**********************************************************!*\
  !*** ./src/resources/elements/layout/sidebar/sidebar.ts ***!
  \**********************************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-router */ "4ysu");
/* harmony import */ var aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-event-aggregator */ "aurelia-event-aggregator");
/* harmony import */ var _aurelia_ux_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aurelia-ux/grid */ "@aurelia-ux/grid");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Sidebar = (function () {
    function Sidebar(eventAggregator, router, uxResponsiveUtilities) {
        var _this = this;
        this.eventAggregator = eventAggregator;
        this.router = router;
        this.uxResponsiveUtilities = uxResponsiveUtilities;
        this.subscriptions = [];
        this.open = false;
        this.resizeEvent = function () {
            if (document.body.clientWidth <= 960) {
                _this.open = false;
                _this.drawer.removeAttribute('collapsible');
                _this.drawer.setAttribute('type', 'temporary');
                _this.drawer.setAttribute('position', 'left');
            }
            else {
                _this.open = true;
                _this.drawer.removeAttribute('position');
                _this.drawer.setAttribute('type', 'permanent');
                _this.drawer.setAttribute('collapsible', 'partial');
            }
        };
        this.router = router;
    }
    Sidebar.prototype.attached = function () {
        var _this = this;
        this.subscriptions.push(this.eventAggregator.subscribe('sidebar:action:toggle', function () {
            _this.toggleSidebar();
        }));
        this.resizeEvent();
        window.addEventListener('optimizedResize', this.resizeEvent);
    };
    Sidebar.prototype.detached = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.dispose();
        }
        window.removeEventListener('optimizedResize', this.resizeEvent);
    };
    Sidebar.prototype.toggleSidebar = function () {
        if (this.open) {
            this.open = false;
        }
        else {
            this.open = true;
        }
    };
    Sidebar = __decorate([
        aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["autoinject"],
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["containerless"],
        __metadata("design:paramtypes", [aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_3__["EventAggregator"],
            aurelia_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _aurelia_ux_grid__WEBPACK_IMPORTED_MODULE_4__["UxResponsiveUtilities"]])
    ], Sidebar);
    return Sidebar;
}());



/***/ }),

/***/ "resources/elements/layout/sidebar/sidebar-menu-group":
/*!*********************************************************************!*\
  !*** ./src/resources/elements/layout/sidebar/sidebar-menu-group.ts ***!
  \*********************************************************************/
/*! exports provided: SidebarMenuGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMenuGroup", function() { return SidebarMenuGroup; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-event-aggregator */ "aurelia-event-aggregator");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-router */ "4ysu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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



var SidebarMenuGroup = (function () {
    function SidebarMenuGroup(element, eventAggregator, router) {
        var _this = this;
        this.element = element;
        this.eventAggregator = eventAggregator;
        this.router = router;
        this.open = false;
        this.canClose = true;
        this.eventAggregator.subscribe('router:navigation:complete', function () {
            var isCurrentCategory = _this.router.currentInstruction.config.settings.category === _this.category;
            _this.canClose = !isCurrentCategory;
            if (isCurrentCategory) {
                _this.open = true;
            }
        });
    }
    SidebarMenuGroup.prototype.attached = function () {
        return __awaiter(this, void 0, void 0, function () {
            var detail, content;
            var _this = this;
            return __generator(this, function (_a) {
                detail = this.element.querySelector('.sidebar-menu-group__summary');
                content = this.element.querySelector('.sidebar-menu-group__details');
                if (detail != null && content != null) {
                    this.detailElement = detail;
                    this.contentElement = content;
                }
                else {
                    throw new Error('There was an issue setting up the component. Please make sure you have a sidebar-menu-group-summary element and a sidebar-menu-group-details element');
                }
                this.detailElement.addEventListener('mouseup', function (e) {
                    if (e.button !== 0) {
                        return;
                    }
                    _this.open = !_this.open;
                });
                return [2];
            });
        });
    };
    SidebarMenuGroup.prototype.openChanged = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.open) {
                    this.element.classList.add('sidebar-menu-group--open');
                    setTimeout(function () {
                        var wrapper = _this.element.querySelector('.sidebar-menu-group__content-wrapper');
                        if (_this.contentElement != null) {
                            _this.contentElement.style.height = wrapper.clientHeight + 'px';
                        }
                    }, 50);
                }
                else {
                    if (!this.canClose) {
                        return [2];
                    }
                    this.element.classList.remove('sidebar-menu-group--open');
                    this.contentElement.style.height = '0';
                }
                return [2];
            });
        });
    };
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"],
        __metadata("design:type", String)
    ], SidebarMenuGroup.prototype, "category", void 0);
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["observable"],
        __metadata("design:type", Object)
    ], SidebarMenuGroup.prototype, "open", void 0);
    SidebarMenuGroup = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element, aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_1__["EventAggregator"], aurelia_router__WEBPACK_IMPORTED_MODULE_2__["Router"]),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["customElement"])('sidebar-menu-group'),
        __metadata("design:paramtypes", [Element, aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_1__["EventAggregator"], aurelia_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarMenuGroup);
    return SidebarMenuGroup;
}());



/***/ }),

/***/ "resources/elements/layout/sidebar/sidebar-menu-group.css":
/*!**********************************************************************!*\
  !*** ./src/resources/elements/layout/sidebar/sidebar-menu-group.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sidebar-menu-group {\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid var(--aurelia-ux--drawer-border, #31313B);\n  color: var(--aurelia-ux--drawer-foreground, #fff);\n}\n\n.sidebar-menu-group--open {\n  background-color: var(--aurelia-ux--drawer-selected-background, #1E1E23);\n}\n\n.sidebar-menu-group--inactive {\n  touch-action: none;\n  pointer-events: none;\n  color: #ffffff55;\n  background-color: transparent;\n}\n\n.sidebar-menu-group__summary {\n  user-select: none;\n  display: flex;\n  flex-direction: row;\n  padding: 16px;\n  cursor: pointer;\n  align-items: center;\n}\n\n.sidebar-menu-group__summary-contents {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.sidebar-menu-group__sub-routes {\n  transition: 150ms ease;\n  margin-top: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sidebar-menu-group__summary-title {\n  color: var(--aurelia-ux--drawer-foreground, #fff);\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.sidebar-menu-group__open-indicator {\n  opacity: 0;\n  user-select: none;\n  align-self: flex-start;\n  transition: ease 250ms;\n}\n\n.sidebar-menu-group__details {\n  overflow: hidden;\n  transition: all 150ms ease 0s;\n  height: 0;\n}\n\n.sidebar-menu-group__spacer {\n  flex: 1;\n}\n\n.sidebar-menu-group__content-wrapper {\n  padding-bottom: 16px;\n}\n\n.sidebar-menu-group__details-anchor {\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  padding: 8px 16px;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.25px;\n}\n\n.sidebar-menu-group:last-of-type {\n  border-bottom: 1px solid var(--aurelia-ux--drawer-border, #31313B);\n}\n\n.sidebar-menu-group__details-anchor:hover {\n  background-color: rgba(255, 255, 255, .1);\n}\n\n.sidebar-menu-group--open .sidebar-menu-group__open-indicator {\n  transform: rotate(180deg);\n}\n\n.sidebar-menu-group--open .sidebar-menu-group__sub-routes {\n  display: none;\n}\n\n.sidebar-menu-group--inactive .sidebar-menu-group__summary-title {\n  color: #ffffffaa;\n}\n\n.sidebar-menu-group--inactive .sidebar-menu-group__sub-routes {\n  opacity: 1;\n}\n\n.sidebar-menu-group--inactive .sidebar-menu-group__details {\n  height: 0 !important;\n}\n\n.sidebar-menu-group__details-anchor .detail {\n  margin-right: 8px;\n}\n\n.sidebar-menu-group__details-anchor.active {\n  color: var(--aurelia-ux--drawer-active-foreground,#fff);\n}\n\n.sidebar-menu-group__summary:hover .sidebar-menu-group__open-indicator {\n  opacity: 1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "resources/elements/layout/sidebar/sidebar-menu-group.html":
/*!***********************************************************************!*\
  !*** ./src/resources/elements/layout/sidebar/sidebar-menu-group.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template class=\"sidebar-menu-group\">\n  <require from=\"./sidebar-menu-group.css\"></require>\n\n  <div class=\"sidebar-menu-group__summary\">\n    <div class=\"sidebar-menu-group__summary-contents\">\n      <span class=\"sidebar-menu-group__summary-title\">${category}</span>\n      <span class=\"sidebar-menu-group__sub-routes\">\n        <slot name=\"sub-routes\"></slot>\n      </span>\n    </div>\n    <div class=\"sidebar-menu-group__spacer\"></div>\n    <ux-icon class=\"sidebar-menu-group__open-indicator\" icon=\"keyboard_arrow_down\"></ux-icon>\n  </div>\n  <div class=\"sidebar-menu-group__details\">\n    <div class=\"sidebar-menu-group__content-wrapper\">\n      <slot name=\"content\"></slot>\n    </div>\n  </div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "resources/elements/layout/sidebar/sidebar.css":
/*!***********************************************************!*\
  !*** ./src/resources/elements/layout/sidebar/sidebar.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "sidebar {\n  display: block;\n}\n\n.app-drawer .logo {\n  padding-left: 13px;\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 0.5px;\n  color: var(--aurelia-ux--drawer-selected-foreground, #fff);\n  display: flex;\n  align-items: center;\n  height: 52px;\n}\n\nux-drawer.app-drawer aside {\n  background-color: var(--aurelia-ux--drawer-background, #fff);\n  color: var(--aurelia-ux--drawer-foreground, #fff);\n}\n\n.sidebar-menu__anchor {\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  padding: 0 16px;\n  height: 52px;\n  border-top: 1px solid var(--aurelia-ux--drawer-border, #31313B);\n  align-items: center;\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: 0.25px;\n}\n\n.sidebar-menu__anchor:last-of-type {\n  border-bottom: 1px solid var(--aurelia-ux--drawer-border, #31313B);\n}\n\n.sidebar-menu__anchor .detail {\n  margin-right: 8px;\n}\n\n.sidebar-menu__anchor.active {\n  color: var(--aurelia-ux--drawer-selected-foreground, #fff);\n}\n\n.sidebar-menu__bottom-actions {\n  display: flex;\n  border-top: 1px solid var(--aurelia-ux--drawer-border, #31313B);\n  flex-wrap: wrap;\n}\n\n.sidebar-menu__bottom-action {\n  user-select: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 16px;\n  border-right: 1px solid var(--aurelia-ux--drawer-border, #31313B);\n  color: inherit;\n}\n\n.sidebar-menu__collapse-button {\n  flex: 1;\n  user-select: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 16px;\n  border-top: none;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "resources/elements/layout/sidebar/sidebar.html":
/*!************************************************************!*\
  !*** ./src/resources/elements/layout/sidebar/sidebar.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "Rxnk");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../../../../../images/aurelia-icon-128x128.png */ "13mn");
// Module
var ___HTML_LOADER_REPLACER_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<template>\n  <require from=\"./sidebar.css\"></require>\n  <require from=\"./sidebar-menu-group\"></require>\n  <require from=\"./sidenav-categories\"></require>\n\n  <ux-drawer ref=\"drawer\" type=\"permanent\" position=\"left\" collapsible=\"partial\" open.bind=\"open\" class=\"app-drawer\">\n\n    <header>\n      <span class=\"logo\">\n        <img style=\"margin-right: 10px; height: 40px;\" src=\"" + ___HTML_LOADER_REPLACER_0___ + "\">\n        \n        <span class=\"ux-drawer__hide-on-collapse\">Aurelia MVVM Plugin</span>\n      </span>\n    </header>\n\n    <div class=\"drawer-menu drawer-menu--expanding\">\n      <template repeat.for=\"[category, routes] of router.navigation | sidenavCategories\">\n\n        <sidebar-menu-group category.bind=\"category\" if.bind=\"category != null\">\n          <span slot=\"sub-routes\">\n            <template repeat.for=\"route of routes\">\n              <template if.bind=\"!route.settings.hideFromSummary\">\n                ${route.title},\n              </template>\n            </template>\n          </span>\n          <a slot=\"content\" class=\"${route.isActive ? 'active' : ''} sidebar-menu-group__details-anchor\" href.bind=\"route.href\" repeat.for=\"route of routes\">\n            ${route.title}\n          </a>\n        </sidebar-menu-group>\n\n        <template if.bind=\"!category\">\n          <a class=\"${route.isActive ? 'active' : ''} sidebar-menu__anchor\" href.bind=\"route.href | routeParser\" repeat.for=\"route of routes\">\n            ${route.title}\n          </a>\n        </template>\n\n      </template>\n    </div>\n  </ux-drawer>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "resources/elements/layout/sidebar/sidenav-categories":
/*!*********************************************************************!*\
  !*** ./src/resources/elements/layout/sidebar/sidenav-categories.ts ***!
  \*********************************************************************/
/*! exports provided: SidenavCategoriesValueConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavCategoriesValueConverter", function() { return SidenavCategoriesValueConverter; });
var SidenavCategoriesValueConverter = (function () {
    function SidenavCategoriesValueConverter() {
    }
    SidenavCategoriesValueConverter.prototype.toView = function (navModels) {
        var categories = new Map();
        for (var _i = 0, navModels_1 = navModels; _i < navModels_1.length; _i++) {
            var model = navModels_1[_i];
            if (model.settings.category === undefined && model.config.nav === true) {
                model.settings.category = null;
            }
            var routes = categories.get(model.settings.category);
            if (!routes) {
                categories.set(model.settings.category, routes = []);
            }
            routes.push(model);
        }
        return categories;
    };
    return SidenavCategoriesValueConverter;
}());



/***/ }),

/***/ "resources/elements/ux/tabs/ux-tabs":
/*!***************************************************!*\
  !*** ./src/resources/elements/ux/tabs/ux-tabs.ts ***!
  \***************************************************/
/*! exports provided: UxTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxTooltip", function() { return UxTooltip; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _ux_tabs_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-tabs-theme */ "htjf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UxTooltip = (function () {
    function UxTooltip(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
    }
    UxTooltip.prototype.bind = function () {
        this.themeChanged(this.theme);
    };
    UxTooltip.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'alert';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"],
        __metadata("design:type", HTMLElement)
    ], UxTooltip.prototype, "for", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"],
        __metadata("design:type", _ux_tabs_theme__WEBPACK_IMPORTED_MODULE_3__["UxTabsTheme"])
    ], UxTooltip.prototype, "theme", void 0);
    UxTooltip = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["customElement"])('ux-tabs'),
        __metadata("design:paramtypes", [HTMLElement, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]])
    ], UxTooltip);
    return UxTooltip;
}());



/***/ }),

/***/ "resources/elements/ux/tabs/ux-tabs.css":
/*!****************************************************!*\
  !*** ./src/resources/elements/ux/tabs/ux-tabs.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ux-tabs .indicator {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  background-color: var(--aurelia-ux--tabs-indicator-color, #fff);\n}\n\n.ux-tab {\n  display: block;\n  position: relative;\n}\n\n.ux-tab {\n  display: inline-block;\n  text-transform: uppercase;\n  cursor: pointer;\n  opacity: 0.7;\n  padding: 14px 12px 20px 12px;\n  text-align: center;\n  color: var(--aurelia-ux--tabs-foreground, #fff);\n  background-color: var(--aurelia-ux--tabs-background-color, transparent);\n  font-family: Raleway, Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  font-size: 15px;\n  letter-spacing: 0.003em;\n  text-decoration: none;\n  outline: none;\n}\n\n.ux-tab.disabled {\n  cursor: not-allowed;\n}\n\n.ux-tab:hover,\n.ux-tab:focus {\n  opacity: 1;\n}\n\n.ux-tab.active {\n  opacity: 1;\n  padding-bottom: 18px;\n  border-bottom: var(--aurelia-ux--tabs-indicator-color, #fff) solid 2px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "resources/elements/ux/tabs/ux-tabs.html":
/*!*****************************************************!*\
  !*** ./src/resources/elements/ux/tabs/ux-tabs.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template role=\"tablist\">\n  <require from=\"./ux-tabs.css\"></require>\n\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "resources/elements/ux/toolbar/ux-toolbar":
/*!*********************************************************!*\
  !*** ./src/resources/elements/ux/toolbar/ux-toolbar.ts ***!
  \*********************************************************/
/*! exports provided: UxToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxToolbar", function() { return UxToolbar; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-event-aggregator */ "aurelia-event-aggregator");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var _ux_toolbar_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-toolbar-theme */ "7Hn3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UxToolbar = (function () {
    function UxToolbar(element, eventAggregator, styleEngine) {
        this.element = element;
        this.eventAggregator = eventAggregator;
        this.styleEngine = styleEngine;
        this.isNavigating = false;
        this.subscriber = {};
    }
    UxToolbar.prototype.bind = function () {
        this.themeChanged(this.theme);
    };
    UxToolbar.prototype.attached = function () {
        var _this = this;
        this.subscriber.processing = this.eventAggregator.subscribe('router:navigation:processing', function () {
            _this.isNavigating = true;
        });
        this.subscriber.complete = this.eventAggregator.subscribe('router:navigation:complete', function () {
            _this.isNavigating = false;
        });
    };
    UxToolbar.prototype.detached = function () {
        this.subscriber.processing.dispose();
        this.subscriber.complete.dispose();
    };
    UxToolbar.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'alert';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["bindable"],
        __metadata("design:type", _ux_toolbar_theme__WEBPACK_IMPORTED_MODULE_4__["UxToolbarTheme"])
    ], UxToolbar.prototype, "theme", void 0);
    UxToolbar = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element, aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_1__["EventAggregator"], _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["customElement"])('ux-toolbar'),
        __metadata("design:paramtypes", [HTMLElement,
            aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_1__["EventAggregator"],
            _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]])
    ], UxToolbar);
    return UxToolbar;
}());



/***/ }),

/***/ "resources/elements/ux/toolbar/ux-toolbar.css":
/*!**********************************************************!*\
  !*** ./src/resources/elements/ux/toolbar/ux-toolbar.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ux-toolbar {\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  background-color: #333235;\n  background-color: var(--aurelia-ux--toolbar-background, #333235);\n  color: #fff;\n  color: var(--aurelia-ux--toolbar-foreground, #fff);\n  position: relative;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: var(--aurelia-ux--toolbar-shadow, var(--ux-design--elevation2dp, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)));\n}\n\nux-toolbar .toolbar-row {\n  display: flex;\n  height: 72px;\n  align-items: center;\n}\n\nux-toolbar .toolbar-row .title {\n  color: #fff;\n  color: var(--aurelia-ux--toolbar-foreground, #fff);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 26px;\n  font-weight: 300;\n  letter-spacing: .02em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -ms-flex-item-align: center;\n  margin-left: 24px;\n  margin-right: 16px;\n  line-height: 1.5rem;\n}\n\nux-toolbar .toolbar-row :first-child {\n  margin-left: 16px;\n}\n\nux-toolbar .toolbar-row :last-child {\n  margin-right: 16px;\n}\n\nux-toolbar .toolbar-row .spacer {\n  flex: 1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "resources/elements/ux/toolbar/ux-toolbar.html":
/*!***********************************************************!*\
  !*** ./src/resources/elements/ux/toolbar/ux-toolbar.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template ref=\"elementToolbar\">\n  <require from=\"./ux-toolbar.css\"></require>\n\n  <slot></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "resources/elements/ux/ux-drawer/ux-drawer":
/*!**********************************************************!*\
  !*** ./src/resources/elements/ux/ux-drawer/ux-drawer.ts ***!
  \**********************************************************/
/*! exports provided: UxDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxDrawer", function() { return UxDrawer; });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _ux_drawer_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-drawer-theme */ "zgLv");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UxDrawer = (function () {
    function UxDrawer(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.showBackdrop = true;
        this.dismissable = true;
    }
    UxDrawer.prototype.bind = function () {
        if (this.theme != null) {
            this.themeChanged(this.theme);
        }
        this.positionChanged(this.position);
    };
    UxDrawer.prototype.close = function () {
        if (this.dismissable) {
            this.element.classList.remove('open');
        }
    };
    UxDrawer.prototype.toggle = function () {
        if (this.element.classList.contains('open')) {
            this.element.classList.remove('open');
        }
        else {
            this.element.classList.add('open');
        }
    };
    UxDrawer.prototype.themeChanged = function (newValue) {
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxDrawer.prototype.positionChanged = function (newValue) {
        if (this.type !== 'temporary') {
            return;
        }
        this.element.classList.remove('right', 'left');
        if (newValue === 'right') {
            this.element.classList.add('right');
        }
        else {
            this.element.classList.add('left');
        }
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"],
        __metadata("design:type", Boolean)
    ], UxDrawer.prototype, "showBackdrop", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"],
        __metadata("design:type", Boolean)
    ], UxDrawer.prototype, "dismissable", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"],
        __metadata("design:type", _ux_drawer_theme__WEBPACK_IMPORTED_MODULE_3__["UxDrawerTheme"])
    ], UxDrawer.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"],
        __metadata("design:type", String)
    ], UxDrawer.prototype, "position", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["bindable"],
        __metadata("design:type", String)
    ], UxDrawer.prototype, "type", void 0);
    UxDrawer = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_1__["customElement"])('ux-drawer'),
        __metadata("design:paramtypes", [HTMLElement, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]])
    ], UxDrawer);
    return UxDrawer;
}());



/***/ }),

/***/ "resources/elements/ux/ux-drawer/ux-drawer.css":
/*!***********************************************************!*\
  !*** ./src/resources/elements/ux/ux-drawer/ux-drawer.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ux-drawer .backdrop {\n  display: none;\n}\n\nux-drawer header {\n  padding: 16px;\n  text-align: center;\n  margin: 0;\n}\n\nux-drawer[type=temporary] aside {\n  position: fixed;\n  z-index: 100;\n  background-color: #fff;\n  background-color: var(--aurelia-ux--design-control-background, #fff);\n  color: #212121;\n  color: var(--aurelia-ux--design-control-foreground, #212121);\n  width: 320px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: 250ms;\n}\n\nux-drawer[type=temporary].left aside {\n  left: 0;\n  top: 0;\n  bottom: 0;\n  transform: translate3d(-100%, 0, 0);\n}\n\nux-drawer[type=temporary].right aside {\n  right: 0;\n  top: 0;\n  bottom: 0;\n  transform: translate3d(100%, 0, 0);\n}\n\nux-drawer[type=temporary] aside header {\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  background-color: #0094ff;\n  color: #fff;\n  padding: 16px;\n  font-size: 28px;\n  font-weight: 300;\n}\n\nux-drawer[type=temporary].open .backdrop {\n  display: block;\n  content: '';\n  position: fixed;\n  z-index: 99;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\nux-drawer[type=temporary].open aside {\n  transform: translate3d(0, 0, 0);\n}\n\nux-drawer[type=permanent] aside {\n  position: relative;\n  background-color: #fff;\n  background-color: var(--aurelia-ux--design-control-background, #fff);\n  color: #212121;\n  color: var(--aurelia-ux--design-control-foreground, #212121);\n  width: 280px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  transition: 250ms;\n  box-shadow: var(--aurelia-ux--design-elevation2dp);\n}\n\nux-drawer[type=permanent] aside ux-list {\n  background-color: #fff;\n  background-color: var(--aurelia-ux--design-control-background, #fff);\n  color: #212121;\n  color: var(--aurelia-ux--design-control-foreground, #212121);\n}\n\nux-drawer[type=permanent] aside ux-list > .ux-list-item, ux-list > ux-list-item {\n  color: #212121;\n  color: var(--aurelia-ux--design-control-foreground, #212121);\n}\n\nux-drawer ux-list.drawer-menu {\n  overflow-y: auto;\n}\n\nux-drawer ux-list.drawer-menu .ux-list-item {\n  font-weight: 600;\n  font-size: 14px;\n}\n\nux-drawer ux-list.drawer-menu a,\nux-drawer ux-list.drawer-menu a:visited {\n  color: inherit;\n}\n\nux-drawer ux-list.drawer-menu .ux-list-item.header {\n  font-size: 18px;\n  font-weight: 500;\n}\n\nux-drawer ux-list.drawer-menu .ux-list-item.active,\nux-drawer ux-list.drawer-menu .ux-list-item.active > .list-content {\n  color: var(--aurelia-ux--design-primary, #0094ff);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "resources/elements/ux/ux-drawer/ux-drawer.html":
/*!************************************************************!*\
  !*** ./src/resources/elements/ux/ux-drawer/ux-drawer.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template>\n  <require from=\"./ux-drawer.css\"></require>\n\n  <div class=\"backdrop\" click.trigger=\"close()\" if.bind=\"showBackdrop\"></div>\n\n  <aside>\n    <slot></slot>\n  </aside>\n\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");

function configure(config) {
    config.globalResources([
        './elements/code-block',
        './elements/ux/ux-drawer/ux-drawer',
        './elements/ux/toolbar/ux-toolbar',
        './elements/ux/tabs/ux-tabs'
    ]);
}


/***/ }),

/***/ "routes/getting-started":
/*!***************************************!*\
  !*** ./src/routes/getting-started.ts ***!
  \***************************************/
/*! exports provided: GettingStarted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStarted", function() { return GettingStarted; });
var GettingStarted = (function () {
    function GettingStarted() {
    }
    return GettingStarted;
}());



/***/ }),

/***/ "routes/getting-started.html":
/*!*****************************************!*\
  !*** ./src/routes/getting-started.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template>\n  <ux-grid fluid>\n    <ux-grid-cell>\n      <h1>What is Aurelia MVVM Plugin?</h1>\n  \n      <p>\n        MVVM PLugin is a companion framework to Aurelia.\n      </p>  \n      \n      <h1>Setting Up MVVM Plugin</h1>\n\n      <p>\n        Getting setup with Aurelia UX is a quick process, and depending on your bundler of choice can be ready to go with a quick\n        npm command and a couple lines of code.\n      </p>\n          \n      <h2>Installing Aurelia MVVM Plugin</h2>\n    \n      <h3>Webpack</h3>\n    \n      <p>\n        There is not much you are required to do to get Aurelia MVVM Plugin working with webpack.\n      </p>\n    \n      <h4>Install Aurelia MVVM Plugin</h4>\n\n      <code-block type=\"shell\">\n        npm install @logofx/aurelia-mvvm-plugin --save\n      </code-block>\n    \n      <h4>Setup the plugin in your application configuration</h4>\n      <code-block>\n        import {Aurelia} from 'aurelia-framework';\n        import {PLATFORM} from 'aurelia-pal';\n        import environment from './environment';\n      \n        export function configure(aurelia: Aurelia) {\n          aurelia.use\n            .standardConfiguration()\n            .feature(PLATFORM.moduleName('resources/index'));\n        \n            aurelia.use\n            .plugin(PLATFORM.moduleName('@logofx/aurelia-mvvm-plugin'))\n            .plugin(PLATFORM.moduleName('aurelia-dialog'))\n            .plugin(PLATFORM.moduleName('aurelia-validation'));\n        \n          if (environment.debug) {\n            aurelia.use.developmentLogging();\n          }\n        \n          if (environment.testing) {\n            aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));\n          }\n        \n          aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));\n        }\n      </code-block>\n    \n      <p>And that is it, you are ready to start using Aurelia MVVM Plugin.</p>\n\n      <p>And that is it, you are ready to start using Aurelia UX.</p>\n\n    </ux-grid-cell>\n  </ux-grid>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "t+/c":
/*!************************************************!*\
  !*** ../src/view-model/wrapping-collection.ts ***!
  \************************************************/
/*! exports provided: WrappingCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrappingCollection", function() { return WrappingCollection; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "KOsu");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "yqyd");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WrappingCollection = (function (_super) {
    __extends(WrappingCollection, _super);
    function WrappingCollection(factoryMethod, source) {
        var _newTarget = this.constructor;
        var _this = _super.call(this) || this;
        _this._internalMap = new WeakMap();
        _this.pushCore = function (model, wrapped) {
            _this._internalMap.set(model, wrapped);
            _this.push(wrapped);
        };
        _this.containsWrapper = function (model) {
            return _this._internalMap.has(model);
        };
        _this.addCore = function (modelItem, wrappedItem, indexOfModelItem) {
            if (_this.containsWrapper(modelItem)) {
                throw new Error('The duplications are not allowed for the model items.');
            }
            _this._internalMap.set(modelItem, wrappedItem);
            _this.splice(indexOfModelItem, 0, wrappedItem);
        };
        _this.removeCore = function (index, removedItem) {
            _this._internalMap.delete(removedItem);
            _this.splice(index, 1);
        };
        _this.onSubscribe = function (changes) {
            if (changes.length === 0) {
                return;
            }
            var innerChanges = changes[0];
            if (innerChanges.addedCount === 1) {
                _this.addCore(_this._source[innerChanges.index], WrappingCollection_1.createWrapper(_this._source[innerChanges.index], _this.factoryMethod), innerChanges.index);
            }
            else if (innerChanges.addedCount > 1) {
                for (var i = 0; i < innerChanges.addedCount; i++) {
                    _this.addCore(_this._source[innerChanges.index + i], WrappingCollection_1.createWrapper(_this._source[innerChanges.index + i], _this.factoryMethod), innerChanges.index + i);
                }
            }
            else if (innerChanges.removed.length === 1) {
                _this.removeCore(innerChanges.index, innerChanges.removed[0]);
            }
            else if (innerChanges.removed.length > 1) {
                innerChanges.removed.forEach(function (originalItem) {
                    var index = _this.findIndex(function (item) { return item.model === originalItem; });
                    _this.removeCore(index, originalItem);
                });
            }
        };
        Object.setPrototypeOf(_this, _newTarget.prototype);
        if (factoryMethod === null || factoryMethod === undefined) {
            factoryMethod = function (item) { return item; };
        }
        _this.factoryMethod = factoryMethod;
        if (source === null || source === undefined) {
            _this._source = [];
        }
        else {
            _this._source = source;
        }
        _core__WEBPACK_IMPORTED_MODULE_1__["getDefaultObserverLocator"]()
            .getArrayObserver(_this._source)
            .subscribe('clbk', _this.onSubscribe);
        for (var _i = 0, _a = _this._source; _i < _a.length; _i++) {
            var item = _a[_i];
            _this.pushCore(item, WrappingCollection_1.createWrapper(item, _this.factoryMethod));
        }
        return _this;
    }
    WrappingCollection_1 = WrappingCollection;
    WrappingCollection.createWrapper = function (item, factoryMethod) {
        return factoryMethod(item);
    };
    WrappingCollection.prototype.getSelectedItems = function () {
        return _super.prototype.filter.call(this, function (item) { return item.isSelected; });
    };
    WrappingCollection.prototype.canSelectAll = function () {
        return this.length > this.getSelectedItems().length;
    };
    WrappingCollection.prototype.selectAll = function () {
        this.forEach(function (item) { return item.isSelected = true; });
    };
    WrappingCollection.prototype.canUnselectAll = function () {
        return this.getSelectedItems().length > 0;
    };
    WrappingCollection.prototype.unselectAll = function () {
        this.forEach(function (item) { return item.isSelected = false; });
    };
    WrappingCollection.prototype.created = function (owningView, myView) {
    };
    WrappingCollection.prototype.attached = function () {
    };
    WrappingCollection.prototype.canActivate = function (params, routeConfig, navigationInstruction) {
    };
    WrappingCollection.prototype.activate = function (params, routeConfig, navigationInstruction) {
    };
    WrappingCollection.prototype.canDeactivate = function () {
    };
    WrappingCollection.prototype.deactivate = function () {
    };
    WrappingCollection.prototype.bind = function (bindingContext, overrideContext) {
    };
    WrappingCollection.prototype.unbind = function () {
    };
    WrappingCollection.prototype.clbk = function (changes) {
    };
    var WrappingCollection_1;
    WrappingCollection = WrappingCollection_1 = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["transient"])(WrappingCollection_1),
        __metadata("design:paramtypes", [Function, Array])
    ], WrappingCollection);
    return WrappingCollection;
}(Array));



/***/ }),

/***/ "tlZ/":
/*!**********************************************!*\
  !*** ../src/view-model/object-view-model.ts ***!
  \**********************************************/
/*! exports provided: ObjectViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectViewModel", function() { return ObjectViewModel; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "KOsu");
/* harmony import */ var aurelia_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-validation */ "5J/N");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjectViewModel = (function () {
    function ObjectViewModel(model) {
        this._isBusy = false;
        this._isSelected = false;
        this._isEnabled = true;
        this.model = model;
        this.validationController = aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["Container"].instance.get(aurelia_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationController"]);
        this.validationController.changeTrigger(aurelia_validation__WEBPACK_IMPORTED_MODULE_1__["validateTrigger"].changeOrBlur);
    }
    Object.defineProperty(ObjectViewModel.prototype, "isBusy", {
        get: function () {
            return this._isBusy;
        },
        set: function (value) {
            if (this._isBusy === value) {
                return;
            }
            this._isBusy = value;
            this.isBusyChanged(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObjectViewModel.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (value) {
            if (this._isSelected === value) {
                return;
            }
            this._isSelected = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObjectViewModel.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            if (this._isEnabled === value) {
                return;
            }
            this._isEnabled = value;
        },
        enumerable: false,
        configurable: true
    });
    ObjectViewModel.prototype.isBusyChanged = function (value) { };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])(),
        __metadata("design:type", Object)
    ], ObjectViewModel.prototype, "model", void 0);
    return ObjectViewModel;
}());



/***/ }),

/***/ "uekW":
/*!*************************!*\
  !*** ./src/themes.json ***!
  \*************************/
/*! exports provided: light, dark, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"light\":[{\"themeKey\":\"design\",\"controlBackground\":\"#fff\",\"controlForeground\":\"#212121\",\"appBackground\":\"#fafafa\",\"appForeground\":\"#212121\"},{\"themeKey\":\"toolbar\",\"shadow\":\"none\",\"background\":\"transparent\",\"foreground\":\"#333\"},{\"themeKey\":\"drawer\",\"background\":\"#fff\",\"foreground\":\"#333\",\"border\":\"#e8e8e8\",\"selectedBackground\":\"#f7f7f7\",\"selectedForeground\":\"#333\",\"activeForeground\":\"#777\"}],\"dark\":[{\"themeKey\":\"design\",\"controlBackground\":\"#373740\",\"controlForeground\":\"#fff\",\"appBackground\":\"#33333d\",\"appForeground\":\"#fff\"},{\"themeKey\":\"toolbar\",\"shadow\":\"none\",\"background\":\"transparent\",\"foreground\":\"inherit\"},{\"themeKey\":\"drawer\",\"background\":\"#31313B\",\"foreground\":\"#fff\",\"border\":\"#40404e\",\"selectedBackground\":\"#1E1E23\",\"selectedForeground\":\"#fff\"}]}");

/***/ }),

/***/ "yqyd":
/*!****************************!*\
  !*** ../src/core/index.ts ***!
  \****************************/
/*! exports provided: Guid, arrays, Dictionary, LinkedList, Queue, Set, getDefaultBindingEngine, getDefaultObserverLocator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultBindingEngine", function() { return getDefaultBindingEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultObserverLocator", function() { return getDefaultObserverLocator; });
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-framework */ "KOsu");
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid */ "jALf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return _guid__WEBPACK_IMPORTED_MODULE_2__["Guid"]; });

/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collections */ "eO/j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrays", function() { return _collections__WEBPACK_IMPORTED_MODULE_3__["arrays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return _collections__WEBPACK_IMPORTED_MODULE_3__["Dictionary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return _collections__WEBPACK_IMPORTED_MODULE_3__["LinkedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return _collections__WEBPACK_IMPORTED_MODULE_3__["Queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return _collections__WEBPACK_IMPORTED_MODULE_3__["Set"]; });





function getDefaultBindingEngine() {
    return aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["Container"].instance.get(aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["BindingEngine"]);
}
function getDefaultObserverLocator() {
    return aurelia_framework__WEBPACK_IMPORTED_MODULE_1__["Container"].instance.get(aurelia_binding__WEBPACK_IMPORTED_MODULE_0__["ObserverLocator"]);
}
String.empty = ''.toString();
String.isEmptyOrWhitespace = function (s) {
    return (s !== undefined && s !== null) && s.trim().length === 0;
};


/***/ }),

/***/ "zgLv":
/*!****************************************************************!*\
  !*** ./src/resources/elements/ux/ux-drawer/ux-drawer-theme.ts ***!
  \****************************************************************/
/*! exports provided: UxDrawerTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxDrawerTheme", function() { return UxDrawerTheme; });
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");

var UxDrawerTheme = (function () {
    function UxDrawerTheme() {
        this.themeKey = 'drawer';
        this.foreground = _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_0__["swatches"].white;
        this.background = _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_0__["swatches"].grey.p700;
    }
    return UxDrawerTheme;
}());



/***/ })

},[[0,"runtime~app","vendors~d7efa7cb","vendors~2905546b","vendors~46ff123a","vendors~18b01f04","vendors~62651a14","vendors~5172b010","vendors~e508581e","vendors~0877c396","vendors~7ba93e4b","vendors~fe3d664a","vendors~7ff531ff","vendors~2a42e354","vendors~0ba1d959","vendors~556c66f2","vendors~72fdf3f2","vendors~50e8d500","vendors~ecff2e3d","vendors~9e0f4621","vendors~4eb3b4b8","vendors~399b027d","vendors~e258e298","vendors~d22b72d1","vendors~8eeb4602","vendors~7db804d5","vendors~15f0789d","vendors~cc99a214","vendors~0a56fd24","vendors~f9ca8911"]]]);
//# sourceMappingURL=app~493df0b3.39757625886af9b5b903.bundle.map