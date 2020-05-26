(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~7ff531ff"],{

/***/ "69MR":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/ux-select-theme.js ***!
  \********************************************************************************/
/*! exports provided: UxSelectTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxSelectTheme", function() { return UxSelectTheme; });
var UxSelectTheme = /** @class */ (function () {
    function UxSelectTheme() {
        this.themeKey = 'select';
    }
    return UxSelectTheme;
}());

//# sourceMappingURL=ux-select-theme.js.map

/***/ }),

/***/ "@aurelia-ux/select":
/*!**********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/index.js ***!
  \**********************************************************************/
/*! exports provided: UxOption, UxOptGroup, UxSelect, UxSelectTheme, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _ux_option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-option */ "@aurelia-ux/select/ux-option");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxOption", function() { return _ux_option__WEBPACK_IMPORTED_MODULE_3__["UxOption"]; });

/* harmony import */ var _ux_optgroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-optgroup */ "@aurelia-ux/select/ux-optgroup");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxOptGroup", function() { return _ux_optgroup__WEBPACK_IMPORTED_MODULE_4__["UxOptGroup"]; });

/* harmony import */ var _ux_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ux-select */ "@aurelia-ux/select/ux-select");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxSelect", function() { return _ux_select__WEBPACK_IMPORTED_MODULE_5__["UxSelect"]; });

/* harmony import */ var _ux_select_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ux-select-theme */ "69MR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxSelectTheme", function() { return _ux_select_theme__WEBPACK_IMPORTED_MODULE_6__["UxSelectTheme"]; });








function configure(config) {
    config.container.get(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["AureliaUX"]).registerUxElementConfig(uxSelectConfig);
    config.globalResources([
        './ux-select',
        './ux-optgroup',
        './ux-option'
    ]);
}
var uxSelectConfig = {
    tagName: 'ux-select',
    properties: {
        value: {
            defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindingMode"].twoWay,
            getObserver: function (element, _) {
                return new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["ValueAttributeObserver"](element, 'value', new aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["EventSubscriber"](['change']));
            }
        }
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/select/ux-optgroup":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/ux-optgroup.js ***!
  \****************************************************************************/
/*! exports provided: UxOptGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxOptGroup", function() { return UxOptGroup; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "u40P");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UxOptGroup = /** @class */ (function () {
    function UxOptGroup(element, bindingEngine) {
        this.element = element;
        this.bindingEngine = bindingEngine;
        Object.setPrototypeOf(element, UxOptGroupElementProto);
    }
    UxOptGroup.prototype.created = function () {
        var element = this.element;
        this.setDisabled(element.hasAttribute('disabled'));
        element.removeAttribute('disabled');
    };
    UxOptGroup.prototype.bind = function () {
        var uxSelect = this.uxSelect = this.getUxSelect();
        this.setParentDisabled(uxSelect.isDisabled);
    };
    UxOptGroup.prototype.attached = function () {
        var be = this.bindingEngine;
        var uxSelect = this.uxSelect;
        this.subscriptions = [
            be.propertyObserver(uxSelect, 'isDisabled').subscribe(this.setParentDisabled.bind(this))
        ];
    };
    UxOptGroup.prototype.detached = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var s = _a[_i];
            s.dispose();
        }
        this.subscriptions.length = 0;
    };
    UxOptGroup.prototype.getUxSelect = function () {
        var el = this.element;
        while (el) {
            if (el.tagName === 'UX-SELECT') {
                return Object(_util__WEBPACK_IMPORTED_MODULE_1__["getAuViewModel"])(el);
            }
            el = el.parentElement;
        }
        throw new Error('Ux option group has no "ux-select" parent');
    };
    UxOptGroup.prototype.setParentDisabled = function (disabled) {
        this.parentDisabled = !!disabled;
        this.isDisabled = this.disabled || this.parentDisabled;
    };
    UxOptGroup.prototype.getOptions = function () {
        if (!this.optionsCt) {
            return [];
        }
        return Array.from(this.optionsCt.children);
    };
    UxOptGroup.prototype.getDisabled = function () {
        return this.disabled;
    };
    UxOptGroup.prototype.setDisabled = function (disabled) {
        this.disabled = disabled;
        this.isDisabled = disabled || this.parentDisabled;
    };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])()
    ], UxOptGroup.prototype, "label", void 0);
    UxOptGroup = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["inject"])(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["DOM"].Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["BindingEngine"]),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["processContent"])(ensureOnlyUxOption),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-optgroup')
    ], UxOptGroup);
    return UxOptGroup;
}());

/**
 * A View-compiler hook that will remove any element that is not `<ux-option>` as child of `<ux-optgroup/>`
 */
function ensureOnlyUxOption(_, __, node) {
    var currentChild = node.firstChild;
    while (currentChild) {
        var nextSibling = currentChild.nextSibling;
        if (currentChild.nodeName !== 'UX-OPTION') {
            node.removeChild(currentChild);
        }
        currentChild = nextSibling;
    }
    return true;
}
var UxOptGroupElementProto = Object.create(HTMLElement.prototype, {
    options: {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_1__["getAuViewModel"])(this).getOptions();
        }
    },
    disabled: {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_1__["getAuViewModel"])(this).getDisabled();
        },
        set: function (disabled) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_1__["getAuViewModel"])(this).setDisabled(disabled);
        }
    }
});
//# sourceMappingURL=ux-optgroup.js.map

/***/ }),

/***/ "@aurelia-ux/select/ux-optgroup.html":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/ux-optgroup.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template class=\"ux-optgroup\"\n  class.bind=\"isDisabled ? 'ux-optgroup--disabled' : ''\"\n  disabled.bind=\"isDisabled & booleanAttr\"\n  aria-disabled.bind=\"isDisabled & booleanAttr\">\n  <div class=\"ux-optgroup-label\" textcontent.bind=\"label\"></div>\n  <div class=\"ux-optgroup-options-ct\" ref=\"optionsCt\"><slot></slot></div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/select/ux-option":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/ux-option.js ***!
  \**************************************************************************/
/*! exports provided: UxOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxOption", function() { return UxOption; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "u40P");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UxOption = /** @class */ (function () {
    function UxOption(element, bindingEngine) {
        this.element = element;
        this.bindingEngine = bindingEngine;
        this.selected = false;
        this.focused = false;
        Object.setPrototypeOf(element, UxOptionElementProto);
    }
    UxOption.prototype.created = function () {
        var element = this.element;
        if (element.hasAttribute('value')) {
            this.value = element.getAttribute('value');
        }
        this.setDisabled(element.hasAttribute('disabled'));
        element.removeAttribute('disabled');
        element.removeAttribute('text');
    };
    UxOption.prototype.bind = function () {
        if (this.value === undefined) {
            this.value = this.text;
        }
    };
    UxOption.prototype.attached = function () {
        var optGroup = this.optGroup = this.getOptGroup();
        var uxSelect = this.uxSelect = this.getUxSelect();
        var bindingEngine = this.bindingEngine;
        this.setParentDisabled(optGroup ? optGroup.isDisabled : uxSelect.isDisabled);
        this.isMultiple = uxSelect.isMultiple;
        this.subscriptions = [
            bindingEngine.propertyObserver(uxSelect, 'isMultiple').subscribe(this.uxMultipleChanged.bind(this)),
            optGroup
                // ux-opt group will also subscribe to ux-select to know if it's disabled
                ? bindingEngine.propertyObserver(optGroup, 'isDisabled').subscribe(this.setParentDisabled.bind(this))
                // If ux-option is not a member of a group, then subscribe to disabled state of ux-select
                : bindingEngine.propertyObserver(uxSelect, 'isDisabled').subscribe(this.setParentDisabled.bind(this))
        ];
    };
    UxOption.prototype.detached = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var s = _a[_i];
            s.dispose();
        }
        this.subscriptions.length = 0;
    };
    UxOption.prototype.getOptGroup = function () {
        var el = this.element;
        while (el) {
            if (el.tagName === 'UX-OPTGROUP') {
                return Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(el);
            }
            el = el.parentElement;
        }
        return null;
    };
    UxOption.prototype.getUxSelect = function () {
        var el = this.element;
        while (el) {
            if (el.tagName === 'UX-SELECT') {
                return Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(el);
            }
            el = el.parentElement;
        }
        throw new Error('Ux option has no "ux-select" parent');
    };
    UxOption.prototype.uxMultipleChanged = function (useSelect) {
        this.isMultiple = useSelect;
    };
    UxOption.prototype.setParentDisabled = function (disabled) {
        this.parentDisabled = !!disabled;
        this.isDisabled = this.disabled || this.parentDisabled;
    };
    UxOption.prototype.notify = function () {
        this.element.dispatchEvent(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["DOM"].createCustomEvent('select', { bubbles: true, detail: this.element }));
    };
    UxOption.prototype.getFocused = function () {
        return this.focused;
    };
    UxOption.prototype.setFocused = function (focused) {
        this.focused = !!focused;
    };
    UxOption.prototype.getSelected = function () {
        return this.selected;
    };
    UxOption.prototype.setSelected = function (selected) {
        var oldValue = this.selected;
        var newValue = !!selected;
        if (newValue !== oldValue) {
            this.selected = newValue;
            this.notify();
        }
    };
    UxOption.prototype.getDisabled = function () {
        return this.disabled || this.parentDisabled;
    };
    UxOption.prototype.setDisabled = function (disabled) {
        this.disabled = !!disabled;
        this.isDisabled = this.disabled || this.parentDisabled;
    };
    UxOption.prototype.onClick = function () {
        if (!this.disabled) {
            if (this.isMultiple) {
                this.setSelected(!this.selected);
            }
            else {
                this.selected = true;
                this.notify();
            }
        }
    };
    UxOption.prototype.onMouseDown = function (e) {
        this.addWave(e);
        return true;
    };
    /**
     * @param autoEnd Internal flag to distinguish between keyboard navigation and mouse
     */
    UxOption.prototype.addWave = function (e, autoEnd) {
        var target = this.element;
        if (target.classList.contains('ripple')) {
            if (target.ripple === null || target.ripple === undefined) {
                target.ripple = new _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_1__["PaperRipple"]();
                target.appendChild(target.ripple.$);
            }
            target.ripple.downAction(e);
            if (autoEnd) {
                setTimeout(removeWave, 125, target);
            }
            else {
                new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["ElementEvents"](aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].global).subscribeOnce('mouseup', function () {
                    target.ripple.upAction();
                }, true);
            }
        }
    };
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])()
    ], UxOption.prototype, "text", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])()
    ], UxOption.prototype, "value", void 0);
    UxOption = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["inject"])(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["DOM"].Element, aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["BindingEngine"]),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-option'),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["processAttributes"])(convertTextToAttr)
    ], UxOption);
    return UxOption;
}());

function removeWave(el) {
    el.ripple.upAction();
}
function convertTextToAttr(_, __, node, attributes) {
    var ii = attributes.length;
    for (var i = 0; ii > i; ++i) {
        var attr = attributes[i];
        if (attr.nodeName === 'text') {
            return;
        }
        var parts = attr.nodeName.split('.');
        if (parts[0] === 'text') {
            return;
        }
    }
    node.setAttribute('text', node.textContent || '');
    node.textContent = '';
}
var UxOptionElementProto = Object.create(HTMLElement.prototype, {
    disabled: {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(this).getDisabled();
        },
        set: function (disabled) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(this).setDisabled(disabled);
        }
    },
    focused: {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(this).getFocused();
        },
        set: function (focused) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(this).setFocused(focused);
        }
    },
    selected: {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(this).getSelected();
        },
        set: function (selected) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(this).setSelected(selected);
        }
    },
    value: {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(this).value;
        },
        set: function (value) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(this).value = value;
        }
    },
    wave: {
        value: function () {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["getAuViewModel"])(this).addWave(null, true);
        }
    }
});
//# sourceMappingURL=ux-option.js.map

/***/ }),

/***/ "@aurelia-ux/select/ux-option.html":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/ux-option.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<template\n  class=\"ux-option ripple ${selected ? 'ux-option--selected' : ''} ${focused ? 'ux-option--focused' : ''} ${isDisabled ? 'ux-option--disabled' : ''}\"\n  click.trigger=\"onClick()\"\n  mousedown.delegate=\"onMouseDown($event)\"\n  disabled.bind=\"isDisabled & booleanAttr\"\n  aria-disabled.bind=\"isDisabled & booleanAttr\">\n  <svg xml:space=\"preserve\" if.bind=\"isMultiple\" class=\"ux-checkbox\" viewBox=\"0 0 24 24\">\n    <path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\" show.bind=\"selected\" />\n  </svg>\n  <div class=\"ux-option__text\" ref=\"textEl\" textcontent.bind='text'></div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/select/ux-select":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/ux-select.js ***!
  \**************************************************************************/
/*! exports provided: UxSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxSelect", function() { return UxSelect; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-logging */ "MP1E");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "u40P");
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

var UP = 38;
// const RIGHT = 39;
var DOWN = 40;
// const LEFT = 37;
// const ESC = 27;
var ENTER = 13;
var SPACE = 32;
var logger = Object(aurelia_logging__WEBPACK_IMPORTED_MODULE_1__["getLogger"])('ux-select');
var invalidMultipleValueMsg = 'Only null or Array instances can be bound to a multi-select';
var selectArrayContext = 'context:ux-select';
var UxSelect = /** @class */ (function () {
    function UxSelect(element, styleEngine, observerLocator, taskQueue) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.observerLocator = observerLocator;
        this.taskQueue = taskQueue;
        this.selectedOption = null;
        this.variant = 'filled';
        this.dense = false;
        this.ignoreSelectEvent = true;
        // Only chrome persist the element prototype when cloning with clone node
        Object.setPrototypeOf(element, UxSelectElementProto);
    }
    UxSelect.prototype.bind = function () {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["bool"])(this.autofocus)) {
            // setTimeout(focusEl, 0, this.button);
        }
        this.dense = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["normalizeBooleanAttribute"])('dense', this.dense);
        if (this.isMultiple) {
            if (!this.value) {
                this.value = [];
            }
            else if (!Array.isArray(this.value)) {
                throw new Error(invalidMultipleValueMsg);
            }
        }
        if (!this.winEvents) {
            this.winEvents = new aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["ElementEvents"](window);
        }
        // Initially Synchronize options with value of this element
        this.taskQueue.queueMicroTask(this);
    };
    UxSelect.prototype.attached = function () {
        this.resolveDisplayValue();
        this.variantChanged(this.variant);
    };
    UxSelect.prototype.unbind = function () {
        this.winEvents.disposeAll();
        if (this.arrayObserver) {
            this.arrayObserver.unsubscribe(selectArrayContext, this);
            this.arrayObserver = null;
        }
        this.selectedOption = null;
    };
    UxSelect.prototype.resolveDisplayValue = function () {
        var _this = this;
        var values = this.options
            .filter(function (option) {
            return Array.isArray(_this.value) ?
                _this.value.some(function (value) { return value === option.value; }) :
                option.value === _this.value;
        })
            .map(function (t) { return t.innerText; });
        this.displayValue = values.join(', ');
        this.element.classList.toggle('ux-input-component--has-value', this.displayValue.length > 0);
    };
    UxSelect.prototype.synchronizeOptions = function () {
        var value = this.value;
        var isArray = Array.isArray(value);
        var options = this.options;
        var matcher = this.element.matcher || defaultMatcher;
        var i = options.length;
        this.ignoreSelectEvent = true;
        var _loop_1 = function () {
            var option = options[i];
            var optionValue = option.value;
            if (isArray) {
                option.selected = value.findIndex(function (item) { return !!matcher(optionValue, item); }) !== -1;
                return "continue";
            }
            option.selected = !!matcher(optionValue, value);
        };
        while (i--) {
            _loop_1();
        }
        this.ignoreSelectEvent = false;
    };
    UxSelect.prototype.synchronizeValue = function () {
        var options = this.options;
        var ii = options.length;
        var count = 0;
        var optionValues = [];
        // extract value from ux-option
        for (var i = 0; i < ii; i++) {
            var option = options[i];
            if (!option.selected) {
                continue;
            }
            optionValues.push(option.value);
            count++;
        }
        if (this.isMultiple) {
            // multi-select
            if (Array.isArray(this.value)) {
                var selectValues = this.value;
                var matcher_1 = this.element.matcher || defaultMatcher;
                // remove items that are no longer selected.
                var i = 0;
                var _loop_2 = function () {
                    var a = selectValues[i];
                    if (optionValues.findIndex(function (b) { return matcher_1(a, b); }) === -1) {
                        selectValues.splice(i, 1);
                    }
                    else {
                        i++;
                    }
                };
                while (i < selectValues.length) {
                    _loop_2();
                }
                // add items that have been selected.
                i = 0;
                var _loop_3 = function () {
                    var a = optionValues[i];
                    if (selectValues.findIndex(function (b) { return matcher_1(a, b); }) === -1) {
                        selectValues.push(a);
                    }
                    i++;
                };
                while (i < optionValues.length) {
                    _loop_3();
                }
                this.resolveDisplayValue();
                return; // don't notify.
            }
        }
        else {
            // single-select
            // tslint:disable-next-line:prefer-conditional-expression
            if (count === 0) {
                optionValues = null;
            }
            else {
                optionValues = optionValues[0];
            }
            this.setValue(optionValues);
        }
    };
    UxSelect.prototype.setupListAnchor = function () {
        var _this = this;
        this.calcAnchorPosition();
        this.winEvents.subscribe('wheel', function (e) {
            if (_this.expanded) {
                if (e.target === aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["PLATFORM"].global || !_this.optionWrapperEl.contains(e.target)) {
                    _this.collapse();
                }
            }
        }, true);
    };
    UxSelect.prototype.unsetupListAnchor = function () {
        this.listAnchor = null;
        this.winEvents.disposeAll();
    };
    UxSelect.prototype.calcAnchorPosition = function () {
        var elDim = this.element.getBoundingClientRect();
        var offsetY = (48 - elDim.height) / 2;
        this.listAnchor = { x: elDim.left, y: elDim.top - offsetY };
    };
    UxSelect.prototype.onKeyboardSelect = function () {
        if (!this.expanded) {
            return;
        }
        var focusedOption = this.focusedUxOption;
        if (this.isMultiple) {
            if (!focusedOption) {
                return;
            }
            focusedOption.selected = !focusedOption.selected;
        }
        else {
            this.collapse();
        }
    };
    UxSelect.prototype.call = function () {
        this.synchronizeOptions();
    };
    UxSelect.prototype.getValue = function () {
        return this.value;
    };
    UxSelect.prototype.setValue = function (newValue) {
        if (newValue !== null && newValue !== undefined && this.isMultiple && !Array.isArray(newValue)) {
            throw new Error('Only null, undenfined or Array instances can be bound to a multi-select.');
        }
        if (this.value === newValue) {
            return;
        }
        // unsubscribe from old array.
        if (this.arrayObserver) {
            this.arrayObserver.unsubscribe(selectArrayContext, this);
            this.arrayObserver = null;
        }
        if (this.isMultiple) {
            // subscribe to new array.
            if (Array.isArray(newValue)) {
                this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
                this.arrayObserver.subscribe(selectArrayContext, this);
            }
        }
        if (newValue !== this.value) {
            this.value = newValue;
            this.resolveDisplayValue();
            this.element.dispatchEvent(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["DOM"].createCustomEvent('change', { bubbles: true }));
        }
    };
    UxSelect.prototype.expand = function () {
        var _this = this;
        if (this.expanded) {
            return;
        }
        if (this.isExpanding) {
            return;
        }
        this.isExpanding = true;
        this.optionWrapperEl.classList.add('ux-select__list-wrapper--open');
        setTimeout(function () {
            _this.optionCtEl.classList.add('ux-select__list-container--open');
            _this.isExpanding = false;
            _this.expanded = true;
            _this.setFocusedOption(_this.selectedOption);
        }, 0);
        this.setupListAnchor();
    };
    UxSelect.prototype.collapse = function () {
        var _this = this;
        if (this.isCollapsing) {
            return;
        }
        this.isCollapsing = true;
        this.optionCtEl.classList.remove('ux-select__list-container--open');
        setTimeout(function () {
            _this.optionWrapperEl.classList.remove('ux-select__list-wrapper--open');
            _this.isCollapsing = false;
            _this.expanded = false;
            _this.setFocusedOption(null);
            _this.unsetupListAnchor();
        }, this.theme && this.theme.listTransition || 125);
    };
    UxSelect.prototype.setFocusedOption = function (focusedOption) {
        var oldFocusedOption = this.focusedUxOption;
        if (focusedOption !== oldFocusedOption) {
            if (oldFocusedOption) {
                oldFocusedOption.focused = false;
            }
            if (focusedOption) {
                focusedOption.focused = true;
                focusedOption.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            }
            this.focusedUxOption = focusedOption;
        }
    };
    UxSelect.prototype.moveSelectedIndex = function (offset) {
        var currentIndex = 0;
        var options = this.options;
        if (this.focusedUxOption) {
            currentIndex = options.indexOf(this.focusedUxOption);
        }
        else if (this.selectedOption) {
            currentIndex = options.indexOf(this.selectedOption);
        }
        var nextIndex = currentIndex + offset;
        if (nextIndex > options.length - 1) {
            nextIndex = options.length - 1;
        }
        if (nextIndex < 0) {
            nextIndex = 0;
        }
        var focusedOption = options[nextIndex];
        if (focusedOption.disabled) {
            if (offset > 0) {
                if (nextIndex === options.length - 1) {
                    return;
                }
                this.moveSelectedIndex(offset + 1);
            }
            else {
                if (nextIndex < 0) {
                    return;
                }
                this.moveSelectedIndex(offset - 1);
            }
            return;
        }
        this.setFocusedOption(focusedOption);
        focusedOption.focused = true;
        if (this.isMultiple) {
            // empty
        }
        else {
            this.ignoreSelectEvent = true;
            if (this.selectedOption) {
                this.selectedOption.selected = false;
            }
            this.selectedOption = focusedOption;
            this.selectedOption.selected = true;
            this.ignoreSelectEvent = false;
            this.setValue(this.selectedOption.value);
        }
    };
    UxSelect.prototype.onTriggerClick = function () {
        if (!this.isDisabled) {
            if (this.expanded) {
                return;
            }
            this.expand();
        }
    };
    UxSelect.prototype.onBlur = function () {
        if (!this.element.contains(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["DOM"].activeElement)) {
            this.collapse();
        }
    };
    UxSelect.prototype.onSelect = function (e) {
        e.stopPropagation();
        if (this.ignoreSelectEvent) {
            return;
        }
        var newSelection = e.detail;
        var lastSelection = this.selectedOption;
        if (this.isMultiple) {
            this.synchronizeValue();
        }
        else {
            this.ignoreSelectEvent = true;
            if (lastSelection) {
                lastSelection.selected = false;
            }
            this.ignoreSelectEvent = false;
            this.selectedOption = newSelection;
            this.setValue(newSelection.value);
            if (this.expanded) {
                this.collapse();
            }
        }
    };
    UxSelect.prototype.onKeyDown = function (event) {
        if (this.isDisabled) {
            return;
        }
        // tslint:disable-next-line:switch-default
        switch (event.which) {
            case UP:
            case DOWN:
                this.moveSelectedIndex(event.which === UP ? -1 : 1);
                event.preventDefault();
                break;
            case ENTER:
            case SPACE:
                this.onKeyboardSelect();
                event.preventDefault();
                break;
        }
        return true;
    };
    UxSelect.prototype.themeChanged = function (newValue) {
        if (newValue && !newValue.themeKey) {
            newValue.themeKey = 'ux-select';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxSelect.prototype.multipleChanged = function (newValue, oldValue) {
        newValue = Object(_util__WEBPACK_IMPORTED_MODULE_3__["bool"])(newValue);
        oldValue = Object(_util__WEBPACK_IMPORTED_MODULE_3__["bool"])(oldValue);
        var hasChanged = newValue !== oldValue;
        if (hasChanged) {
            this.ignoreSelectEvent = true;
            for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
                var opt = _a[_i];
                opt.selected = false;
            }
            this.ignoreSelectEvent = false;
            this.selectedOption = null;
            this.setValue(newValue
                ? [] // Changing from single to multiple = reset value to empty array
                : null // Changing from multiple to single = reset value to null
            );
        }
    };
    UxSelect.prototype.variantChanged = function (newValue) {
        this.element.style.backgroundColor = newValue === 'outline' ?
            this.element.style.backgroundColor = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["getBackgroundColorThroughParents"])(this.element) :
            '';
    };
    Object.defineProperty(UxSelect.prototype, "placeholderMode", {
        get: function () {
            return typeof this.label !== 'string' || this.label.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UxSelect.prototype, "options", {
        get: function () {
            if (!this.optionCtEl) {
                return [];
            }
            var result = [];
            var children = this.optionCtEl.children;
            var ii = children.length;
            for (var i = 0; ii > i; ++i) {
                var element = children[i];
                if (element.nodeName === 'UX-OPTION') {
                    result.push(element);
                }
                else if (element.nodeName === 'UX-OPTGROUP') {
                    var groupOptions = element.options;
                    var jj = groupOptions.length;
                    for (var j = 0; jj > j; ++j) {
                        result.push(groupOptions[j]);
                    }
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    UxSelect.prototype.getOptions = function () {
        return this.options;
    };
    Object.defineProperty(UxSelect.prototype, "isMultiple", {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_3__["bool"])(this.multiple);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UxSelect.prototype, "isDisabled", {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_3__["bool"])(this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])()
    ], UxSelect.prototype, "theme", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])()
    ], UxSelect.prototype, "autofocus", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])({ defaultValue: false })
    ], UxSelect.prototype, "disabled", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])({ defaultValue: false })
    ], UxSelect.prototype, "multiple", void 0);
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSelect.prototype, "label", void 0);
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSelect.prototype, "placeholder", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"])()
    ], UxSelect.prototype, "variant", void 0);
    __decorate([
        aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSelect.prototype, "dense", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["computedFrom"])('label')
    ], UxSelect.prototype, "placeholderMode", null);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["computedFrom"])('multiple')
    ], UxSelect.prototype, "isMultiple", null);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["computedFrom"])('disabled')
    ], UxSelect.prototype, "isDisabled", null);
    UxSelect = __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"], aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["ObserverLocator"], aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["TaskQueue"]),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["processContent"])(ensureUxOptionOrUxOptGroup),
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-select')
    ], UxSelect);
    return UxSelect;
}());

/**
 * A View-compiler hook that will remove any element that is not `<ux-option>` or `<ux-optgroup/>`
 * as child of this `<ux-select/>` element
 */
function ensureUxOptionOrUxOptGroup(_, __, node) {
    if (node.hasAttribute('containerless')) {
        logger.warn('Cannot use containerless on <ux-select/>. Consider using as-element instead.');
        node.removeAttribute('containerless');
    }
    var currentChild = node.firstChild;
    while (currentChild) {
        var nextSibling = currentChild.nextSibling;
        if (currentChild.nodeName === 'UX-OPTION' || currentChild.nodeName === 'UX-OPTGROUP') {
            currentChild = nextSibling;
            continue;
        }
        node.removeChild(currentChild);
        currentChild = nextSibling;
    }
    return true;
}
var UxSelectElementProto = Object.create(HTMLElement.prototype, {
    value: {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_3__["getAuViewModel"])(this).getValue();
        },
        set: function (v) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_3__["getAuViewModel"])(this).setValue(v);
        }
    },
    options: {
        get: function () {
            return Object(_util__WEBPACK_IMPORTED_MODULE_3__["getAuViewModel"])(this).getOptions();
        }
    }
});
function defaultMatcher(a, b) {
    return a === b;
}
//# sourceMappingURL=ux-select.js.map

/***/ }),

/***/ "@aurelia-ux/select/ux-select.css":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/ux-select.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-select {\n  --foreground: var(--aurelia-ux--select-foreground, var(--aurelia-ux--design-control-foreground, #212121));\n  --foreground-label: var(--aurelia-ux--select-foreground-label, var(--aurelia-ux--design-control-label-color, #757575));\n  --background: var(--aurelia-ux--select-background, var(--aurelia-ux--design-control-background, #E0E0E0));\n  --background-hover: var(--aurelia-ux--select-background-hover, #00000027);\n  --active-color: var(--aurelia-ux--select-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n\n  --font-size: var(--aurelia-ux--select-font-size, 16px);\n  --letter-spacing: var(--aurelia-ux--select-letter-spacing, inherit);\n  --label-font-size: var(--aurelia-ux--select-label-font-size, 12px);\n  --label-letter-spacing: var(--aurelia-ux--select-label-letter-spacing, 0.5px);\n  --line-height: var(--aurelia-ux--select-line-height, 1.6);\n  --label-line-height: var(--aurelia-ux--select-label-line-height, 1.6);\n\n  --border-color: var(--aurelia-ux--select-border-color, var(--aurelia-ux--design-control-label-color, #757575));\n  --border-radius: var(--aurelia-ux--select-border-radius, 4px);\n  --border-width: var(--aurelia-ux--select-border-width, 1px);\n  --border-active-width: var(--aurelia-ux--select-border-active-width, 2px);\n\n  --disabled-foreground: var(--aurelia-ux--select-disabled-foreground, var(--aurelia-ux--design-disabled-foreground, #9E9E9E));\n  --disabled-background: var(--aurelia-ux--select-disabled-background, var(--aurelia-ux--design-disabled-background, #e1e1e1));\n\n  --error: var(--aurelia-ux--select-error, var(--aurelia-ux--design-error, #F44336));\n}\n\n.ux-select__value {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 400;\n}\n\n.ux-select__arrow {\n  text-align: center;\n}\n\n.ux-select__list-wrapper {\n  position: fixed;\n  display: none;\n  min-width: 180px;\n  z-index: 9999;\n  user-select: none;\n}\n\n.ux-select__list-container {\n  max-height: 400px;\n  overflow-y: auto;\n  background-color: rgba(0, 0, 0, 0);\n  opacity: 0;\n  transform: scale(0.7, 0.7);\n  transition: 125ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: var(--aurelia-ux--select-list-transition, 125ms);\n}\n\n.ux-select__list-wrapper--open {\n  display: block;\n}\n\n.ux-select__list-container--open {\n  opacity: 1;\n  background-color: #F5F5F5;\n  background-color: var(--aurelia-ux--select-list-background, var(--aurelia-ux--design-surface-background, #F5F5F5));\n  color: #212121;\n  color: var(--aurelia-ux--select-list-foreground, var(--aurelia-ux--design-surface-foreground, #212121));\n  transform: scale(1, 1);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: var(--aurelia-ux--select-list-elevation, var(--aurelia-ux--design-elevation2dp, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)))\n}\n\n.ux-optgroup {\n  display: block;\n}\n\n.ux-optgroup--disabled {\n  color: #c0c0c0;\n  pointer-events: none !important;\n}\n\n.ux-option {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  max-width: 100%;\n  height: 48px;\n  padding: 0 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n  text-align: left;\n  cursor: pointer;\n}\n\n.ux-option:hover {\n  background-color: var(--aurelia-ux--select-option-hover, rgba(0, 0, 0, 0.05));\n}\n\n.ux-option--focused {\n  background-color: var(--aurelia-ux--select-option-focused, rgba(0, 0, 0, 0.1));\n}\n\n.ux-option--selected {\n  background-color: var(--aurelia-ux--select-option-selected, rgba(0, 0, 0, 0.1));\n}\n\n.ux-option--disabled {\n  color: #c0c0c0;\n  pointer-events: none;\n}\n\n.ux-option__text {\n  display: inline-block;\n  flex-grow: 1;\n  align-self: stretch;\n  line-height: 48px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ux-select__arrow:before {\n  content: '';\n  display: inline-block;\n  transform: translateY(-2px);\n  border-top: 5px solid lightgrey;\n  border-top-color: #757575;\n  border-top-color: var(--foreground, #757575);\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.ux-input-component--has-error .ux-select__arrow:before {\n  border-top-color: #F44336;\n  border-top-color: var(--error, #F44336);\n}\n\n.ux-select:focus {\n  outline: none;\n}\n\n.ux-optgroup .ux-optgroup-label {\n  height: 48px;\n  line-height: 48px;\n  padding-left: 16px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  pointer-events: none;\n}\n\n.ux-option .ux-checkbox {\n  width: 20px;\n  height: 20px;\n  flex-basis: 20px;\n  flex-shrink: 0;\n  margin-right: 8px;\n  border: 2px solid rgba(0, 0, 0, 0.5);\n}\n\n.ux-select--multiple .ux-option--elected {\n  background-color: transparent;\n  color: blue;\n}\n\n\n.ux-select:not(.ux-select--multiple) .ux-optgroup .ux-option {\n  padding-left: 32px;\n}\n\n.ux-select[disabled] .ux-select__arrow:before,\n.ux-select[readonly] .ux-select__arrow:before {\n  border-top-color: #9E9E9E;\n  border-top-color: var(--disabled-foreground, #9E9E9E);\n}\n\n.ux-select--outline[disabled] .ux-select__arrow:before,\n.ux-select--outline[readonly] .ux-select__arrow:before {\n  border-top-color: #e1e1e1;\n  border-top-color: var(--disabled-background, #e1e1e1);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/select/ux-select.html":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/ux-select.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template\n  class=\"ux-input-component ux-input-component--${variant} ${dense ? 'ux-input-component--dense' : ''} ${placeholderMode ? 'ux-input-component--placeholder' : ''} ux-select ${multiple ? 'ux-select--multiple' : ''} ${expanded ? 'ux-input-component--focused':''}\"\n  tabindex=\"0\"\n  disabled.bind=\"disabled & booleanAttr\"\n  readonly.bind=\"readonly & booleanAttr\"\n  aria-disabled.bind=\"disabled & booleanAttr\"\n  aria-readonly.bind=\"readonly & booleanAttr\"\n  aria-multiselectable.bind=\"multiple\"\n  keydown.trigger=\"onKeyDown($event)\"\n  blur.trigger=\"onBlur() & debounce:1\"\n  click.trigger=\"onTriggerClick()\">\n  <require from=\"@aurelia-ux/core/effects/paper-ripple.css\"></require>\n  <require from=\"./ux-select.css\"></require>\n\n  <slot name=\"leading-icon\"></slot>\n\n  <span class=\"ux-input-component__content\">\n    <div class=\"ux-input-component__label-background\" if.bind=\"variant === 'outline' && (label || placeholder)\" css=\"width: ${labelEl.offsetWidth + 6}px;\"></div>\n    <div class=\"ux-input-component__label\" ref=\"labelEl\">${label || placeholder}</div>\n  \n    <div class=\"ux-input-component__inner-input ux-select__value\">${displayValue}</div>\n  </span>\n\n  <span class=\"ux-input-component__trailing\">\n    <div class=\"ux-select__arrow\"></div>\n  </span>\n\n  <div class=\"ux-input-component__border\" show.bind=\"!(variant === 'filled' && disabled)\"></div>\n  \n  <div ref=\"optionWrapperEl\"\n    class=\"ux-select__list-wrapper\"\n    css=\"top: ${listAnchor.y}px; left: ${listAnchor.x}px;\">\n    <div ref=\"optionCtEl\"\n      class=\"ux-select__list-container\"\n      select.trigger=\"onSelect($event)\"\n      css=\"\n        max-width: ${theme.listMaxWidth}px;\n        max-height: ${theme.listMaxHeight}\"><slot></slot></div>\n  </div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/slider":
/*!**********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/slider/dist/native-modules/index.js ***!
  \**********************************************************************/
/*! exports provided: UxSliderTheme, UxSlider, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _ux_slider_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ux-slider-theme */ "Tn7p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxSliderTheme", function() { return _ux_slider_theme__WEBPACK_IMPORTED_MODULE_1__["UxSliderTheme"]; });

/* harmony import */ var _ux_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ux-slider */ "@aurelia-ux/slider/ux-slider");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxSlider", function() { return _ux_slider__WEBPACK_IMPORTED_MODULE_2__["UxSlider"]; });




function configure(config) {
    config.globalResources('./ux-slider');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "@aurelia-ux/slider/ux-slider":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/slider/dist/native-modules/ux-slider.js ***!
  \**************************************************************************/
/*! exports provided: UxSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxSlider", function() { return UxSlider; });
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




var UxSlider = /** @class */ (function () {
    function UxSlider(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        Object.setPrototypeOf(element, uxSliderElementProto);
    }
    Object.defineProperty(UxSlider.prototype, "sliderBeforeWidth", {
        get: function () {
            return this.percentValue * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UxSlider.prototype, "sliderAfterWidth", {
        get: function () {
            return (1 - this.percentValue) * 100;
        },
        enumerable: true,
        configurable: true
    });
    UxSlider.prototype.bind = function () {
        this.themeChanged(this.theme);
        this.minChanged();
        this.maxChanged();
        this.valueChanged();
        this.stepChanged();
    };
    UxSlider.prototype.stepChanged = function () {
        if (this.step === undefined || this.step === null) {
            this.step = 1;
            return;
        }
        this.step = Number(this.step);
    };
    UxSlider.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'slider';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxSlider.prototype.minChanged = function () {
        if (this.min === undefined || this.min === null) {
            this.min = 0;
            return;
        }
        this.min = Number(this.min);
    };
    UxSlider.prototype.maxChanged = function () {
        if (this.max === undefined || this.max === null) {
            this.max = 100;
            return;
        }
        this.max = Number(this.max);
    };
    UxSlider.prototype.valueChanged = function () {
        if (this.value === undefined || this.value === null) {
            this.value = this.min;
            this.percentValue = 0;
            return;
        }
        var percentValue = (this.value - this.min) / (this.max - this.min);
        this.percentValue = percentValue > 1
            ? 1
            : percentValue < 0
                ? 0
                : percentValue;
    };
    UxSlider.prototype.updateValue = function (currentMouseX) {
        var rect = this.sliderContainer.getBoundingClientRect();
        var normalizedMouseX = currentMouseX - rect.x;
        var percentValue = normalizedMouseX / rect.width;
        var rawValue = ((this.max - this.min) * percentValue) + this.min;
        var numSteps = Math.round((rawValue - this.min) / this.step);
        var steppedValue = this.min + (this.step * numSteps);
        this.value = this.boundValue(steppedValue);
    };
    UxSlider.prototype.onTrackMouseDown = function (e) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.isActive = true;
        var isMouseEvent = e instanceof MouseEvent;
        var winEvents = new aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["ElementEvents"](window);
        var upAction = function (e) {
            if (!_this.isActive) {
                winEvents.disposeAll();
                return;
            }
            if (isMouseEvent) {
                _this.updateValue(e.clientX);
            }
            else {
                var touches = e.touches;
                if (touches.length === 1) {
                    _this.updateValue(touches[0].clientX);
                }
            }
            _this.isActive = false;
            winEvents.disposeAll();
        };
        var moveAction = function (e) {
            if (!_this.isActive) {
                return;
            }
            _this.updateValue(isMouseEvent ? e.clientX : e.touches[0].clientX);
        };
        winEvents.subscribe('blur', upAction, true);
        if (isMouseEvent) {
            winEvents.subscribe('mouseup', upAction, true);
            winEvents.subscribe('mousemove', moveAction, true);
        }
        else {
            winEvents.subscribe('touchend', upAction, true);
            winEvents.subscribe('touchmove', moveAction, true);
        }
    };
    UxSlider.prototype.onKeyDown = function (e) {
        var steppedValue = e.keyCode === 37 || e.keyCode === 40
            ? this.value - this.step
            : e.keyCode === 38 || e.keyCode === 39
                ? this.value + this.step
                : this.value;
        this.value = this.boundValue(steppedValue);
        return true;
    };
    UxSlider.prototype.getValue = function () {
        return this.value;
    };
    UxSlider.prototype.setValue = function (value) {
        this.value = value;
    };
    UxSlider.prototype.boundValue = function (potentialValue) {
        return potentialValue > this.max
            ? this.max
            : potentialValue < this.min
                ? this.min
                : potentialValue;
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSlider.prototype, "theme", void 0);
    __decorate([
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"])({ defaultBindingMode: aurelia_binding__WEBPACK_IMPORTED_MODULE_3__["bindingMode"].twoWay })
    ], UxSlider.prototype, "value", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSlider.prototype, "min", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSlider.prototype, "max", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSlider.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSlider.prototype, "step", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_3__["computedFrom"])('percentValue')
    ], UxSlider.prototype, "sliderBeforeWidth", null);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_3__["computedFrom"])('percentValue')
    ], UxSlider.prototype, "sliderAfterWidth", null);
    UxSlider = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-slider')
    ], UxSlider);
    return UxSlider;
}());

var getVm = function (_) { return _.au.controller.viewModel; };
var uxSliderElementProto = Object.create(HTMLElement.prototype, {
    value: {
        get: function () {
            return getVm(this).getValue();
        },
        set: function (value) {
            getVm(this).setValue(value);
        }
    }
});
//# sourceMappingURL=ux-slider.js.map

/***/ }),

/***/ "@aurelia-ux/slider/ux-slider.css":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/slider/dist/native-modules/ux-slider.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-slider {\n  display: inline-flex;\n  position: relative;\n  padding: 8px 0;\n  width: 100%;\n}\n\n.ux-slider [slot=\"leading-icon\"] {\n  margin-right: 8px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n\n.ux-slider [slot=\"trailing-icon\"] {\n  margin-left: 8px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n\n.ux-slider__container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.ux-slider__track {\n  z-index: 1;\n  background-color: var(--aurelia-ux--slider-background, var(--aurelia-ux--design-primary, #3F51B5));\n  height: var(--aurelia-ux--slider-track-height, 4px);\n}\n\n.ux-slider__track--active {\n  transition: none;\n  border-top-left-radius: var(--aurelia-ux--slider-track-height, 4px);\n  border-bottom-left-radius: var(--aurelia-ux--slider-track-height, 4px);\n}\n\n.ux-slider__track--inactive {\n  transition: width 0.2s ease-out;\n  border-top-right-radius: var(--aurelia-ux--slider-track-height, 4px);\n  border-bottom-right-radius: var(--aurelia-ux--slider-track-height, 4px);\n}\n\n.ux-slider__track-before {\n  opacity: 0.8;\n}\n\n.ux-slider__track-after {\n  opacity: 0.4;\n}\n\n.ux-slider__container * {\n  cursor: pointer;\n}\n.ux-slider__thumb-container {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  margin-left: -5px; /* this margin (left/right) allow the track to go well behind the thumb */\n  margin-right: -5px; /* even when the track has a great height */\n}\n\n.ux-slider__thumb-button {\n  border-radius: 50%;\n  border: none;\n  padding: 0px;\n  z-index: 2;\n  background-color: var(--aurelia-ux--slider-background, var(--aurelia-ux--design-primary, #3F51B5));\n  height: var(--aurelia-ux--slider-thumb-diameter, 18px);\n  width: var(--aurelia-ux--slider-thumb-diameter, 18px);\n  box-shadow: none;\n  transition: box-shadow 0.15s;\n  outline: 0;\n}\n\n.ux-slider--disabled {\n  cursor: no-drop;\n}\n\n.ux-slider--disabled * {\n  cursor: no-drop;\n}\n\n.ux-slider--disabled .ux-slider__track {\n  background-color: var(--aurelia-ux--slider-disabled-background, #e1e1e1);\n}\n\n.ux-slider--disabled .ux-slider__thumb-button {\n  background-color: var(--aurelia-ux--slider-disabled-background, #e1e1e1);\n}\n\n.ux-slider--enabled .ux-slider__thumb-button:hover,\n.ux-slider--enabled .ux-slider__thumb-button:focus {\n  box-shadow: 0px 0px 0px calc(var(--aurelia-ux--slider-thumb-diameter, 18px) * 0.75) rgba(63, 81, 181, 0.2);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/slider/ux-slider.html":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/slider/dist/native-modules/ux-slider.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template class=\"ux-slider ${disabled ? 'ux-slider--disabled' : ''}\">\n  <require from=\"./ux-slider.css\"></require>\n  <slot name=\"leading-icon\"></slot>\n  <div ref=\"sliderContainer\" class=\"ux-slider__container ${disabled ? 'ux-slider__container--disabled' : 'ux-slider__container--enabled'}\"\n       touchstart.trigger=\"onTrackMouseDown($event)\"\n       mousedown.delegate=\"onTrackMouseDown($event)\">\n    <div class=\"ux-slider__track ux-slider__track-before ${isActive ? 'ux-slider__track--active' : 'ux-slider__track--inactive'}\" \n         css=\"width: ${sliderBeforeWidth}%;\"></div>\n    <div class=\"ux-slider__thumb-container\">\n      <button class=\"ux-slider__thumb-button\" keydown.delegate=\"onKeyDown($event)\">\n      </button>\n    </div>\n    <div class=\"ux-slider__track ux-slider__track-after ${isActive ? 'ux-slider__track--active' : 'ux-slider__track--inactive'}\" \n         css=\"width: ${sliderAfterWidth}%;\"></div>\n  </div>\n  <slot name=\"trailing-icon\"></slot>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/switch":
/*!**********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/switch/dist/native-modules/index.js ***!
  \**********************************************************************/
/*! exports provided: UxSwitchTheme, UxSwitch, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _ux_switch_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-switch-theme */ "v2iM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxSwitchTheme", function() { return _ux_switch_theme__WEBPACK_IMPORTED_MODULE_3__["UxSwitchTheme"]; });

/* harmony import */ var _ux_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-switch */ "@aurelia-ux/switch/ux-switch");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxSwitch", function() { return _ux_switch__WEBPACK_IMPORTED_MODULE_4__["UxSwitch"]; });






function configure(config) {
    config.container.get(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["AureliaUX"]).registerUxElementConfig(uxSwitchConfig);
    config.globalResources('./ux-switch');
}
var uxSwitchConfig = {
    tagName: 'ux-switch',
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

/***/ "@aurelia-ux/switch/ux-switch":
/*!**************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/switch/dist/native-modules/ux-switch.js ***!
  \**************************************************************************/
/*! exports provided: UxSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxSwitch", function() { return UxSwitch; });
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





var UxSwitch = /** @class */ (function () {
    function UxSwitch(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.disabled = false;
        this.effect = 'ripple';
        this.ripple = null;
        Object.setPrototypeOf(element, uxSwitchElementProto);
    }
    Object.defineProperty(UxSwitch.prototype, "isDisabled", {
        get: function () {
            return Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('disabled', this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    UxSwitch.prototype.bind = function () {
        if (this.element.hasAttribute('id')) {
            var attributeValue = this.element.getAttribute('id');
            if (attributeValue != null) {
                this.checkbox.setAttribute('id', attributeValue);
            }
        }
        if (this.element.hasAttribute('tabindex')) {
            var attributeValue = this.element.getAttribute('tabindex');
            if (attributeValue != null) {
                this.checkbox.setAttribute('tabindex', attributeValue);
            }
        }
        if (this.element.hasAttribute('checked')) {
            var attributeValue = this.element.getAttribute('checked');
            if (attributeValue || attributeValue === '') {
                this.element.checked = true;
            }
        }
        this.valueChanged(this.value);
        this.disabledChanged(this.checkbox.disabled);
        this.themeChanged(this.theme);
    };
    UxSwitch.prototype.attached = function () {
        this.checkbox.addEventListener('change', stopEvent);
    };
    UxSwitch.prototype.detached = function () {
        this.checkbox.removeEventListener('change', stopEvent);
    };
    UxSwitch.prototype.getChecked = function () {
        return this.checked;
    };
    UxSwitch.prototype.setChecked = function (value) {
        var oldValue = this.checked;
        var newValue = !!value;
        if (newValue !== oldValue) {
            this.checked = newValue;
            this.ignoreValueChanges = true;
            this.value = newValue;
            this.ignoreValueChanges = false;
            this.element.dispatchEvent(aurelia_framework__WEBPACK_IMPORTED_MODULE_4__["DOM"].createCustomEvent('change', { bubbles: true }));
        }
    };
    UxSwitch.prototype.checkedChanged = function (newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        if (newValue === true) {
            this.element.classList.add('ux-switch--checked');
        }
        else {
            this.element.classList.remove('ux-switch--checked');
        }
    };
    UxSwitch.prototype.focusedChanged = function (newValue) {
        if (newValue === true) {
            this.element.classList.add('ux-switch--focused');
        }
        else {
            this.element.classList.remove('ux-switch--focused');
        }
    };
    UxSwitch.prototype.valueChanged = function (newValue) {
        if (this.ignoreValueChanges) {
            return;
        }
        this.setChecked(newValue);
    };
    UxSwitch.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'switch';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxSwitch.prototype.disabledChanged = function (newValue) {
        if (newValue === true) {
            this.element.classList.add('ux-switch--disabled');
        }
        else {
            this.element.classList.remove('ux-switch--disabled');
        }
    };
    UxSwitch.prototype.onMouseDown = function (e) {
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
        e.preventDefault();
    };
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSwitch.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSwitch.prototype, "effect", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSwitch.prototype, "id", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxSwitch.prototype, "theme", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"])()
    ], UxSwitch.prototype, "checked", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"])({ initializer: function () { return false; } })
    ], UxSwitch.prototype, "value", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["observable"])()
    ], UxSwitch.prototype, "focused", void 0);
    __decorate([
        Object(aurelia_binding__WEBPACK_IMPORTED_MODULE_1__["computedFrom"])('disabled')
    ], UxSwitch.prototype, "isDisabled", null);
    UxSwitch = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-switch')
    ], UxSwitch);
    return UxSwitch;
}());

function stopEvent(e) {
    e.stopPropagation();
}
var getVm = function (_) { return _.au.controller.viewModel; };
var uxSwitchElementProto = Object.create(HTMLElement.prototype, {
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
    }
});
//# sourceMappingURL=ux-switch.js.map

/***/ }),

/***/ "@aurelia-ux/switch/ux-switch.css":
/*!***************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/switch/dist/native-modules/ux-switch.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-switch {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n}\n\n.ux-switch--disabled {\n  opacity: 0.5;\n}\n\n.ux-switch__inner-input {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  z-index: 1;\n}\n\n.ux-switch__track {\n  margin: 6px 5px;\n  height: 12px;\n  width: 32px;\n  border: none;\n  border-radius: 6px;\n  background-color: #E0E0E0;\n  background-color: var(--aurelia-ux--switch-ux-switch__track, #E0E0E0);\n  transition: background-color 150ms ease-in-out;\n  position: relative;\n}\n\n.ux-switch__indicator {\n  position: relative;\n  left: -3px;\n  top: -3px;\n  height: 18px;\n  width: 18px;\n  background-color: #FFF;\n  background-color: var(--aurelia-ux--switch-indicator, #FFF);\n  border-radius: 50%;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);\n  transition: left .1s ease-in-out, background-color .1s ease-in-out;\n}\n\n.ux-switch:focus {\n  outline: none;\n}\n\n.ux-switch__inner-input:disabled {\n  cursor: default;\n}\n\n.ux-switch--checked .ux-switch__track {\n  background-color: #6776cc;\n  background-color: var(--aurelia-ux--switch-ux-switch__track-active, var(--aurelia-ux--design-primary-light, #6776cc));\n}\n\n.ux-switch--checked .ux-switch__indicator {\n  left: calc(100% - 14px);\n  background-color: #3F51B5;\n  background-color: var(--aurelia-ux--switch-indicator-active, var(--aurelia-ux--design-primary, #3F51B5));\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.4);\n}\n\n.ux-switch .ripplecontainer {\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n.ux-switch .paper-ripple {\n  top: -11px;\n  left: -11px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.ux-switch .ripple {\n  position: absolute;\n  top: -11px;\n  left: -11px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  pointer-events: none;\n  background-color: rgba(132, 132, 132, 0.25);\n  transition: transform 100ms ease-in-out;\n  transform: scale3d(0, 0, 0);\n}\n\n.ux-switch--focused .ripple {\n  transform: scale3d(1, 1, 1);\n}\n\n.ux-switch--disabled.ux-switch--focused .ripple {\n  transform: scale3d(0, 0, 0);\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/switch/ux-switch.html":
/*!****************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/switch/dist/native-modules/ux-switch.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template class=\"ux-switch ${effect !== null ? effect : ''}\">\n  <require from=\"@aurelia-ux/core/effects/paper-ripple.css\"></require>\n  <require from=\"./ux-switch.css\"></require>\n  <input type=\"checkbox\"\n    ref=\"checkbox\"\n    class=\"ux-switch__inner-input\"\n    checked.bind=\"value\"\n    focus.bind=\"focused\"\n    mousedown.trigger=\"onMouseDown($event)\"\n    disabled.bind=\"disabled & booleanAttr\"\n    aria-checked.bind=\"value & booleanAttr\"\n    aria-disabled.bind=\"disabled & booleanAttr\">\n\n  <div class=\"ux-switch__track\">\n    <div class=\"ux-switch__indicator\">\n      <div class=\"ripplecontainer\">\n        <span class=\"ripple\"></span>\n      </div>\n    </div>\n  </div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "@aurelia-ux/textarea":
/*!************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/textarea/dist/native-modules/index.js ***!
  \************************************************************************/
/*! exports provided: UxTextAreaTheme, UxTextArea, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var _ux_textarea_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ux-textarea-theme */ "X1Fv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxTextAreaTheme", function() { return _ux_textarea_theme__WEBPACK_IMPORTED_MODULE_3__["UxTextAreaTheme"]; });

/* harmony import */ var _ux_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ux-textarea */ "@aurelia-ux/textarea/ux-textarea");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UxTextArea", function() { return _ux_textarea__WEBPACK_IMPORTED_MODULE_4__["UxTextArea"]; });






function configure(config) {
    config.container.get(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_2__["AureliaUX"]).registerUxElementConfig(uxTextAreaConfig);
    config.globalResources('./ux-textarea');
}
var uxTextAreaConfig = {
    tagName: 'ux-textarea',
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

/***/ "@aurelia-ux/textarea/ux-textarea":
/*!******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/textarea/dist/native-modules/ux-textarea.js ***!
  \******************************************************************************/
/*! exports provided: UxTextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxTextArea", function() { return UxTextArea; });
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aurelia-ux/core */ "@aurelia-ux/core");
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
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

var UxTextArea = /** @class */ (function () {
    function UxTextArea(element, styleEngine) {
        this.element = element;
        this.styleEngine = styleEngine;
        this.autofocus = null;
        this.autoResize = false;
        this.disabled = false;
        this.focus = false;
        this.readonly = false;
        this.variant = 'filled';
        this.dense = false;
        this.value = undefined;
        Object.setPrototypeOf(element, uxTextAreaElementProto);
    }
    UxTextArea.prototype.bind = function () {
        var element = this.element;
        var textbox = this.textbox;
        if (this.autofocus || this.autofocus === '') {
            this.focus = true;
        }
        this.dense = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["normalizeBooleanAttribute"])('dense', this.dense);
        if (this.cols) {
            textbox.setAttribute('cols', this.cols.toString());
            element.removeAttribute('cols');
        }
        if (this.rows) {
            textbox.setAttribute('rows', this.rows.toString());
            element.removeAttribute('rows');
        }
        if (this.minlength) {
            textbox.setAttribute('minlength', this.minlength.toString());
        }
        if (this.maxlength) {
            textbox.setAttribute('maxlength', this.maxlength.toString());
        }
        this.themeChanged(this.theme);
        this.autocompleteChanged(this.autocomplete);
    };
    UxTextArea.prototype.attached = function () {
        var textbox = this.textbox;
        this.isAttached = true;
        this.textbox.addEventListener('change', stopEvent);
        this.textbox.addEventListener('input', stopEvent);
        this.fitTextContent();
        textbox.addEventListener('change', stopEvent);
        textbox.addEventListener('input', stopEvent);
        this.variantChanged(this.variant);
    };
    UxTextArea.prototype.detached = function () {
        var textbox = this.textbox;
        this.isAttached = false;
        textbox.removeEventListener('change', stopEvent);
        textbox.removeEventListener('input', stopEvent);
    };
    UxTextArea.prototype.getValue = function () {
        return this.value;
    };
    UxTextArea.prototype.setValue = function (value) {
        var oldValue = this.value;
        var newValue = value === null || value === undefined ? null : value.toString();
        if (oldValue !== newValue) {
            this.value = newValue;
            this.ignoreRawChanges = true;
            this.rawValue = newValue === null ? '' : newValue.toString();
            this.fitTextContent();
            this.ignoreRawChanges = false;
            this.element.dispatchEvent(aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].createCustomEvent('change', { bubbles: true }));
        }
    };
    UxTextArea.prototype.autocompleteChanged = function (newValue) {
        if (newValue != null) {
            this.textbox.setAttribute('autocomplete', newValue);
        }
        else {
            this.textbox.removeAttribute('autocomplete');
        }
    };
    UxTextArea.prototype.rawValueChanged = function (newValue) {
        this.element.classList.toggle('ux-input-component--has-value', typeof newValue === 'string' && newValue.length > 0);
        if (this.ignoreRawChanges) {
            return;
        }
        this.setValue(newValue);
    };
    UxTextArea.prototype.themeChanged = function (newValue) {
        if (newValue != null && newValue.themeKey == null) {
            newValue.themeKey = 'textarea';
        }
        this.styleEngine.applyTheme(newValue, this.element);
    };
    UxTextArea.prototype.fitTextContent = function () {
        if (this.isAttached && (this.autoResize || this.autoResize === '')) {
            this.textbox.style.height = 'auto';
            this.textbox.style.height = this.textbox.scrollHeight + 2 + "px";
        }
    };
    UxTextArea.prototype.focusChanged = function (focus) {
        focus = focus || focus === '' ? true : false;
        this.element.classList.toggle('ux-input-component--focused', focus);
        this.element.dispatchEvent(aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].createCustomEvent(focus ? 'focus' : 'blur', { bubbles: true }));
    };
    UxTextArea.prototype.variantChanged = function (newValue) {
        this.element.style.backgroundColor = newValue === 'outline' ?
            this.element.style.backgroundColor = Object(_aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["getBackgroundColorThroughParents"])(this.element) :
            '';
    };
    Object.defineProperty(UxTextArea.prototype, "placeholderMode", {
        get: function () {
            return typeof this.label !== 'string' || this.label.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "autocomplete", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "autofocus", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "autoResize", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "cols", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "focus", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "maxlength", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "minlength", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "readonly", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "rows", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "label", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "placeholder", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "theme", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "variant", void 0);
    __decorate([
        aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["bindable"]
    ], UxTextArea.prototype, "dense", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_4__["observable"])({ initializer: function () { return ''; } })
    ], UxTextArea.prototype, "rawValue", void 0);
    __decorate([
        Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_4__["computedFrom"])('label')
    ], UxTextArea.prototype, "placeholderMode", null);
    UxTextArea = __decorate([
        Object(aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["inject"])(Element, _aurelia_ux_core__WEBPACK_IMPORTED_MODULE_3__["StyleEngine"]),
        Object(aurelia_templating__WEBPACK_IMPORTED_MODULE_0__["customElement"])('ux-textarea')
    ], UxTextArea);
    return UxTextArea;
}());

function stopEvent(e) {
    e.stopPropagation();
}
var getVm = function (_) { return _.au.controller.viewModel; };
var uxTextAreaElementProto = Object.create(HTMLElement.prototype, {
    value: {
        get: function () {
            return getVm(this).getValue();
        },
        set: function (value) {
            getVm(this).setValue(value);
        }
    }
});
//# sourceMappingURL=ux-textarea.js.map

/***/ }),

/***/ "@aurelia-ux/textarea/ux-textarea.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/textarea/dist/native-modules/ux-textarea.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ux-textarea {\n  --foreground: var(--aurelia-ux--textarea-foreground, var(--aurelia-ux--design-control-foreground, #212121));\n  --foreground-label: var(--aurelia-ux--textarea-foreground-label, var(--aurelia-ux--design-control-label-color, #757575));\n  --background: var(--aurelia-ux--textarea-background, var(--aurelia-ux--design-control-background, #E0E0E0));\n  --background-hover: var(--aurelia-ux--textarea-background-hover, #00000027);\n  --active-color: var(--aurelia-ux--textarea-active-color, var(--aurelia-ux--design-primary, #3F51B5));\n\n  --font-size: var(--aurelia-ux--textarea-font-size, 16px);\n  --letter-spacing: var(--aurelia-ux--textarea-letter-spacing, inherit);\n  --label-font-size: var(--aurelia-ux--textarea-label-font-size, 12px);\n  --label-letter-spacing: var(--aurelia-ux--textarea-label-letter-spacing, 0.5px);\n  --line-height: var(--aurelia-ux--textarea-line-height, 1.6);\n  --label-line-height: var(--aurelia-ux--textarea-label-line-height, 1.6);\n\n  --border-color: var(--aurelia-ux--textarea-border-color, var(--aurelia-ux--design-control-label-color, #757575));\n  --border-radius: var(--aurelia-ux--textarea-border-radius, 4px);\n  --border-width: var(--aurelia-ux--textarea-border-width, 1px);\n  --border-active-width: var(--aurelia-ux--textarea-border-active-width, 2px);\n\n  --disabled-foreground: var(--aurelia-ux--textarea-disabled-foreground, var(--aurelia-ux--design-disabled-foreground, #9E9E9E));\n  --disabled-background: var(--aurelia-ux--textarea-disabled-background, var(--aurelia-ux--design-disabled-background, #e1e1e1));\n\n  --error: var(--aurelia-ux--textarea-error, var(--aurelia-ux--design-error, #F44336));\n}\n\n.ux-textarea .ux-input-component__inner-input {\n  resize: none;\n}\n\n.ux-textarea--show-grip .ux-input-component__inner-input {\n  resize: both;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "@aurelia-ux/textarea/ux-textarea.html":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/textarea/dist/native-modules/ux-textarea.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Module
var code = "<template role=\"textbox\" \n  class=\"ux-input-component ux-input-component--${variant} ${dense ? 'ux-input-component--dense' : ''} ${placeholderMode ? 'ux-input-component--placeholder' : ''} ux-textarea \"\n  disabled.bind=\"disabled & booleanAttr\"\n  readonly.bind=\"readonly & booleanAttr\"\n  aria-disabled.bind=\"disabled & booleanAttr\"\n  aria-readonly.bind=\"readonly & booleanAttr\"\n  click.trigger=\"focus = true\">\n  <require from=\"./ux-textarea.css\"></require>\n\n  <slot name=\"leading-icon\"></slot>\n\n  <span class=\"ux-input-component__content\">\n    <div class=\"ux-input-component__label-background\" if.bind=\"variant === 'outline' && (label || placeholder)\" css=\"width: ${labelEl.offsetWidth + 6}px;\"></div>\n    <div class=\"ux-input-component__label\" ref=\"labelEl\">${label || placeholder}</div>\n    <textarea ref=\"textbox\"\n      class=\"ux-input-component__inner-input\"\n      value.bind=\"rawValue\"\n      focus.bind=\"focus\" \n      disabled.bind=\"disabled & booleanAttr\"\n      readonly.bind=\"readonly & booleanAttr\"\n      require.bind=\"required & booleanAttr\"\n      aria-disabled.bind=\"disabled & booleanAttr\"\n      aria-readonly.bind=\"readonly & booleanAttr\"\n      aria-required.bind=\"required & booleanAttr\">\n    </textarea>\n  </span>\n\n  <slot name=\"trailing-icon\"></slot>\n\n  <div class=\"ux-input-component__border\" show.bind=\"!(variant === 'filled' && disabled)\"></div>\n</template>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "Tn7p":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/slider/dist/native-modules/ux-slider-theme.js ***!
  \********************************************************************************/
/*! exports provided: UxSliderTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxSliderTheme", function() { return UxSliderTheme; });
var UxSliderTheme = /** @class */ (function () {
    function UxSliderTheme() {
        this.themeKey = 'slider';
    }
    return UxSliderTheme;
}());

//# sourceMappingURL=ux-slider-theme.js.map

/***/ }),

/***/ "X1Fv":
/*!************************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/textarea/dist/native-modules/ux-textarea-theme.js ***!
  \************************************************************************************/
/*! exports provided: UxTextAreaTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxTextAreaTheme", function() { return UxTextAreaTheme; });
var UxTextAreaTheme = /** @class */ (function () {
    function UxTextAreaTheme() {
        this.themeKey = 'textarea';
    }
    return UxTextAreaTheme;
}());

//# sourceMappingURL=ux-textarea-theme.js.map

/***/ }),

/***/ "u40P":
/*!*********************************************************************!*\
  !*** ./node_modules/@aurelia-ux/select/dist/native-modules/util.js ***!
  \*********************************************************************/
/*! exports provided: getAuViewModel, bool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuViewModel", function() { return getAuViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bool", function() { return bool; });
function getAuViewModel(el) {
    return el.au.controller.viewModel;
}
function bool(v) {
    return !!(v || v === '');
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "v2iM":
/*!********************************************************************************!*\
  !*** ./node_modules/@aurelia-ux/switch/dist/native-modules/ux-switch-theme.js ***!
  \********************************************************************************/
/*! exports provided: UxSwitchTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxSwitchTheme", function() { return UxSwitchTheme; });
var UxSwitchTheme = /** @class */ (function () {
    function UxSwitchTheme() {
        this.themeKey = 'switch';
    }
    return UxSwitchTheme;
}());

//# sourceMappingURL=ux-switch-theme.js.map

/***/ })

}]);
//# sourceMappingURL=vendors~7ff531ff.7e7596554f1f8c836c09.bundle.map