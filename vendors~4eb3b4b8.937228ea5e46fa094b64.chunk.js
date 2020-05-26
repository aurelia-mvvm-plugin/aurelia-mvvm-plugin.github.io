(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~4eb3b4b8"],{

/***/ "QgUw":
/*!******************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/wait.js ***!
  \******************************************************************/
/*! exports provided: waitFor, waitForDocumentElement, waitForDocumentElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitFor", function() { return waitFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForDocumentElement", function() { return waitForDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitForDocumentElements", function() { return waitForDocumentElements; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * Generic function to wait for something to happen. Uses polling
 * @param getter: a getter function that returns anything else than `null` or an
 *                empty array or an empty jQuery object when the
 *                condition is met
 * @param options: lookup options, defaults to
 *                 `{present: true, interval: 50, timeout: 5000}`
 */
function waitFor(getter, options) {
    if (options === void 0) { options = { present: true, interval: 50, timeout: 5000 }; }
    // prevents infinite recursion if the request times out
    var timedOut = false;
    options = __assign({ present: true, interval: 50, timeout: 5000 }, options);
    function wait() {
        var element = getter();
        // boolean is needed here, hence the length > 0
        var found = element !== null && (!(element instanceof NodeList) &&
            !element.jquery || element.length > 0);
        if (!options.present === !found || timedOut) {
            return Promise.resolve(element);
        }
        return new Promise(function (rs) { return setTimeout(rs, options.interval); }).then(wait);
    }
    return Promise.race([
        new Promise(function (_, rj) { return setTimeout(function () {
            timedOut = true;
            rj(new Error(options.present ? 'Element not found' : 'Element not removed'));
        }, options.timeout); }),
        wait()
    ]);
}
function waitForDocumentElement(selector, options) {
    return waitFor(function () { return document.querySelector(selector); }, options);
}
function waitForDocumentElements(selector, options) {
    return waitFor(function () { return document.querySelectorAll(selector); }, options);
}


/***/ }),

/***/ "RZ7W":
/*!******************************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/component-tester.js ***!
  \******************************************************************************/
/*! exports provided: StageComponent, ComponentTester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageComponent", function() { return StageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentTester", function() { return ComponentTester; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wait */ "QgUw");


var StageComponent = /** @class */ (function () {
    function StageComponent() {
    }
    StageComponent.withResources = function (resources) {
        if (resources === void 0) { resources = []; }
        return new ComponentTester().withResources(resources);
    };
    return StageComponent;
}());

var ComponentTester = /** @class */ (function () {
    function ComponentTester() {
        this.resources = [];
    }
    ComponentTester.prototype.configure = function (aurelia) {
        return aurelia.use.standardConfiguration();
    };
    ComponentTester.prototype.bootstrap = function (configure) {
        this.configure = configure;
    };
    ComponentTester.prototype.withResources = function (resources) {
        this.resources = resources;
        return this;
    };
    ComponentTester.prototype.inView = function (html) {
        this.html = html;
        return this;
    };
    ComponentTester.prototype.boundTo = function (bindingContext) {
        this.bindingContext = bindingContext;
        return this;
    };
    ComponentTester.prototype.manuallyHandleLifecycle = function () {
        this._prepareLifecycle();
        return this;
    };
    ComponentTester.prototype.create = function (bootstrap) {
        var _this = this;
        return bootstrap(function (aurelia) {
            return Promise.resolve(_this.configure(aurelia)).then(function () {
                if (_this.resources) {
                    aurelia.use.globalResources(_this.resources);
                }
                return aurelia.start().then(function () {
                    _this.host = document.createElement('div');
                    _this.host.innerHTML = _this.html;
                    document.body.appendChild(_this.host);
                    return aurelia.enhance(_this.bindingContext, _this.host).then(function () {
                        _this.rootView = aurelia.root;
                        _this.element = _this.host.firstElementChild;
                        if (aurelia.root.controllers.length) {
                            _this.viewModel = aurelia.root.controllers[0].viewModel;
                        }
                        return new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, 0); });
                    });
                });
            });
        });
    };
    ComponentTester.prototype.dispose = function () {
        if (this.host === undefined || this.rootView === undefined) {
            throw new Error('Cannot call ComponentTester.dispose() before ComponentTester.create()');
        }
        this.rootView.detached();
        this.rootView.unbind();
        return this.host.parentNode.removeChild(this.host);
    };
    ComponentTester.prototype._prepareLifecycle = function () {
        var _this = this;
        // bind
        var bindPrototype = aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["View"].prototype.bind;
        // tslint:disable-next-line:no-empty
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["View"].prototype.bind = function () { };
        this.bind = function (bindingContext) { return new Promise(function (resolve) {
            aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["View"].prototype.bind = bindPrototype;
            if (bindingContext !== undefined) {
                _this.bindingContext = bindingContext;
            }
            _this.rootView.bind(_this.bindingContext);
            setTimeout(function () { return resolve(); }, 0);
        }); };
        // attached
        var attachedPrototype = aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["View"].prototype.attached;
        // tslint:disable-next-line:no-empty
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["View"].prototype.attached = function () { };
        this.attached = function () { return new Promise(function (resolve) {
            aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["View"].prototype.attached = attachedPrototype;
            _this.rootView.attached();
            setTimeout(function () { return resolve(); }, 0);
        }); };
        // detached
        this.detached = function () { return new Promise(function (resolve) {
            _this.rootView.detached();
            setTimeout(function () { return resolve(); }, 0);
        }); };
        // unbind
        this.unbind = function () { return new Promise(function (resolve) {
            _this.rootView.unbind();
            setTimeout(function () { return resolve(); }, 0);
        }); };
    };
    ComponentTester.prototype.waitForElement = function (selector, options) {
        var _this = this;
        return Object(_wait__WEBPACK_IMPORTED_MODULE_1__["waitFor"])(function () { return _this.element.querySelector(selector); }, options);
    };
    ComponentTester.prototype.waitForElements = function (selector, options) {
        var _this = this;
        return Object(_wait__WEBPACK_IMPORTED_MODULE_1__["waitFor"])(function () { return _this.element.querySelectorAll(selector); }, options);
    };
    return ComponentTester;
}());



/***/ }),

/***/ "aurelia-testing":
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/aurelia-testing.js ***!
  \*****************************************************************************/
/*! exports provided: CompileSpy, ViewSpy, StageComponent, ComponentTester, waitFor, waitForDocumentElement, waitForDocumentElements, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var _compile_spy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compile-spy */ "aurelia-testing/compile-spy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompileSpy", function() { return _compile_spy__WEBPACK_IMPORTED_MODULE_0__["CompileSpy"]; });

/* harmony import */ var _view_spy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-spy */ "aurelia-testing/view-spy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewSpy", function() { return _view_spy__WEBPACK_IMPORTED_MODULE_1__["ViewSpy"]; });

/* harmony import */ var _component_tester__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-tester */ "RZ7W");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StageComponent", function() { return _component_tester__WEBPACK_IMPORTED_MODULE_2__["StageComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentTester", function() { return _component_tester__WEBPACK_IMPORTED_MODULE_2__["ComponentTester"]; });

/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wait */ "QgUw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitFor", function() { return _wait__WEBPACK_IMPORTED_MODULE_3__["waitFor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitForDocumentElement", function() { return _wait__WEBPACK_IMPORTED_MODULE_3__["waitForDocumentElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitForDocumentElements", function() { return _wait__WEBPACK_IMPORTED_MODULE_3__["waitForDocumentElements"]; });





function configure(config) {
    config.globalResources([
        './compile-spy',
        './view-spy'
    ]);
}


/***/ }),

/***/ "aurelia-testing/compile-spy":
/*!*************************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/compile-spy.js ***!
  \*************************************************************************/
/*! exports provided: CompileSpy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompileSpy", function() { return CompileSpy; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-logging */ "MP1E");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ "70NS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Attribute to be placed on any element to have it emit the View Compiler's
 * TargetInstruction into the debug console, giving you insight into all the
 * parsed bindings, behaviors and event handers for the targeted element.
 */
var CompileSpy = /** @class */ (function () {
    /**
     * Creates and instanse of CompileSpy.
     * @param element target element on where attribute is placed on.
     * @param instruction instructions for how the target element should be enhanced.
     */
    function CompileSpy(element, instruction) {
        Object(aurelia_logging__WEBPACK_IMPORTED_MODULE_2__["getLogger"])('compile-spy').info(element.toString(), instruction);
    }
    CompileSpy = __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customAttribute"])('compile-spy'),
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(aurelia_pal__WEBPACK_IMPORTED_MODULE_3__["DOM"].Element, aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["TargetInstruction"])
    ], CompileSpy);
    return CompileSpy;
}());



/***/ }),

/***/ "aurelia-testing/view-spy":
/*!**********************************************************************!*\
  !*** ./node_modules/aurelia-testing/dist/native-modules/view-spy.js ***!
  \**********************************************************************/
/*! exports provided: ViewSpy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSpy", function() { return ViewSpy; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-logging */ "MP1E");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Attribute to be placed on any HTML element in a view to emit the View instance
 * to the debug console, giving you insight into the live View instance, including
 * all child views, live bindings, behaviors and more.
 */
var ViewSpy = /** @class */ (function () {
    /**
     * Creates a new instance of ViewSpy.
     */
    function ViewSpy() {
        this.logger = Object(aurelia_logging__WEBPACK_IMPORTED_MODULE_1__["getLogger"])('view-spy');
    }
    ViewSpy.prototype._log = function (lifecycleName, context) {
        if (!this.value && lifecycleName === 'created') {
            this.logger.info(lifecycleName, this.view);
        }
        else if (this.value && this.value.indexOf(lifecycleName) !== -1) {
            this.logger.info(lifecycleName, this.view, context);
        }
    };
    /**
     * Invoked when the target view is created.
     * @param view The target view.
     */
    ViewSpy.prototype.created = function (view) {
        this.view = view;
        this._log('created');
    };
    /**
     * Invoked when the target view is bound.
     * @param bindingContext The target view's binding context.
     */
    ViewSpy.prototype.bind = function (bindingContext) {
        this._log('bind', bindingContext);
    };
    /**
     * Invoked when the target element is attached to the DOM.
     */
    ViewSpy.prototype.attached = function () {
        this._log('attached');
    };
    /**
     * Invoked when the target element is detached from the DOM.
     */
    ViewSpy.prototype.detached = function () {
        this._log('detached');
    };
    /**
     * Invoked when the target element is unbound.
     */
    ViewSpy.prototype.unbind = function () {
        this._log('unbind');
    };
    ViewSpy = __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customAttribute"])('view-spy')
    ], ViewSpy);
    return ViewSpy;
}());



/***/ })

}]);
//# sourceMappingURL=vendors~4eb3b4b8.937228ea5e46fa094b64.bundle.map