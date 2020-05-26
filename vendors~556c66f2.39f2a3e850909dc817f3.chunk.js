(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~556c66f2"],{

/***/ "3U8n":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/aurelia-dependency-injection/dist/native-modules/aurelia-dependency-injection.js ***!
  \*******************************************************************************************************/
/*! exports provided: _emptyParameters, InvocationHandler, Container, autoinject, inject, invoker, invokeAsFactory, FactoryInvoker, registration, transient, singleton, TransientRegistration, SingletonRegistration, resolver, Strategy, StrategyResolver, Lazy, All, Optional, Parent, Factory, NewInstance, getDecoratorDependencies, lazy, all, optional, parent, factory, newInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_emptyParameters", function() { return _emptyParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvocationHandler", function() { return InvocationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoinject", function() { return autoinject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoker", function() { return invoker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokeAsFactory", function() { return invokeAsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryInvoker", function() { return FactoryInvoker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registration", function() { return registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transient", function() { return transient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransientRegistration", function() { return TransientRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonRegistration", function() { return SingletonRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolver", function() { return resolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strategy", function() { return Strategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyResolver", function() { return StrategyResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return Lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "All", function() { return All; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Optional", function() { return Optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parent", function() { return Parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Factory", function() { return Factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInstance", function() { return NewInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecoratorDependencies", function() { return getDecoratorDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return newInstance; });
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-metadata */ "qrcG");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function isInjectable(potentialTarget) {
    return !!potentialTarget;
}
function autoinject(potentialTarget) {
    var deco = function (target) {
        if (!target.hasOwnProperty('inject')) {
            target.inject = (aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].paramTypes, target) ||
                _emptyParameters).slice();
            if (target.inject && target.inject.length > 0) {
                if (target.inject[target.inject.length - 1] === Object) {
                    target.inject.splice(-1, 1);
                }
            }
        }
    };
    if (isInjectable(potentialTarget)) {
        return deco(potentialTarget);
    }
    return deco;
}
function inject() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return function (target, _key, descriptor) {
        if (typeof descriptor === 'number') {
            autoinject(target);
            if (rest.length === 1) {
                target.inject[descriptor] = rest[0];
            }
            return;
        }
        if (descriptor) {
            var fn = descriptor.value;
            fn.inject = rest;
        }
        else {
            target.inject = rest;
        }
    };
}

var resolver = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["protocol"].create('aurelia:resolver', function (target) {
    if (!(typeof target.get === 'function')) {
        return 'Resolvers must implement: get(container: Container, key: any): any';
    }
    return true;
});
var Strategy;
(function (Strategy) {
    Strategy[Strategy["instance"] = 0] = "instance";
    Strategy[Strategy["singleton"] = 1] = "singleton";
    Strategy[Strategy["transient"] = 2] = "transient";
    Strategy[Strategy["function"] = 3] = "function";
    Strategy[Strategy["array"] = 4] = "array";
    Strategy[Strategy["alias"] = 5] = "alias";
})(Strategy || (Strategy = {}));
function isStrategy(actual, expected, state) {
    return actual === expected;
}
var StrategyResolver = (function () {
    function StrategyResolver(strategy, state) {
        this.strategy = strategy;
        this.state = state;
    }
    StrategyResolver.prototype.get = function (container, key) {
        if (isStrategy(this.strategy, Strategy.instance, this.state)) {
            return this.state;
        }
        if (isStrategy(this.strategy, Strategy.singleton, this.state)) {
            var singleton = container.invoke(this.state);
            this.state = singleton;
            this.strategy = 0;
            return singleton;
        }
        if (isStrategy(this.strategy, Strategy.transient, this.state)) {
            return container.invoke(this.state);
        }
        if (isStrategy(this.strategy, Strategy.function, this.state)) {
            return this.state(container, key, this);
        }
        if (isStrategy(this.strategy, Strategy.array, this.state)) {
            return this.state[0].get(container, key);
        }
        if (isStrategy(this.strategy, Strategy.alias, this.state)) {
            return container.get(this.state);
        }
        throw new Error('Invalid strategy: ' + this.strategy);
    };
    StrategyResolver = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Number, Object])
    ], StrategyResolver);
    return StrategyResolver;
}());
var Lazy = (function () {
    function Lazy(key) {
        this._key = key;
    }
    Lazy_1 = Lazy;
    Lazy.prototype.get = function (container) {
        var _this = this;
        return function () { return container.get(_this._key); };
    };
    Lazy.of = function (key) {
        return new Lazy_1(key);
    };
    var Lazy_1;
    Lazy = Lazy_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Lazy);
    return Lazy;
}());
var All = (function () {
    function All(key) {
        this._key = key;
    }
    All_1 = All;
    All.prototype.get = function (container) {
        return container.getAll(this._key);
    };
    All.of = function (key) {
        return new All_1(key);
    };
    var All_1;
    All = All_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], All);
    return All;
}());
var Optional = (function () {
    function Optional(key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        this._key = key;
        this._checkParent = checkParent;
    }
    Optional_1 = Optional;
    Optional.prototype.get = function (container) {
        if (container.hasResolver(this._key, this._checkParent)) {
            return container.get(this._key);
        }
        return null;
    };
    Optional.of = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        return new Optional_1(key, checkParent);
    };
    var Optional_1;
    Optional = Optional_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Boolean])
    ], Optional);
    return Optional;
}());
var Parent = (function () {
    function Parent(key) {
        this._key = key;
    }
    Parent_1 = Parent;
    Parent.prototype.get = function (container) {
        return container.parent ? container.parent.get(this._key) : null;
    };
    Parent.of = function (key) {
        return new Parent_1(key);
    };
    var Parent_1;
    Parent = Parent_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Parent);
    return Parent;
}());
var Factory = (function () {
    function Factory(key) {
        this._key = key;
    }
    Factory_1 = Factory;
    Factory.prototype.get = function (container) {
        var fn = this._key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === Strategy.function) {
            fn = resolver.state;
        }
        return function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            return container.invoke(fn, rest);
        };
    };
    Factory.of = function (key) {
        return new Factory_1(key);
    };
    var Factory_1;
    Factory = Factory_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Factory);
    return Factory;
}());
var NewInstance = (function () {
    function NewInstance(key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        this.key = key;
        this.asKey = key;
        this.dynamicDependencies = dynamicDependencies;
    }
    NewInstance_1 = NewInstance;
    NewInstance.prototype.get = function (container) {
        var dynamicDependencies = this.dynamicDependencies.length > 0
            ? this.dynamicDependencies.map(function (dependency) {
                return dependency['protocol:aurelia:resolver']
                    ? dependency.get(container)
                    : container.get(dependency);
            })
            : undefined;
        var fn = this.key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === 3) {
            fn = resolver.state;
        }
        var instance = container.invoke(fn, dynamicDependencies);
        container.registerInstance(this.asKey, instance);
        return instance;
    };
    NewInstance.prototype.as = function (key) {
        this.asKey = key;
        return this;
    };
    NewInstance.of = function (key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        return new (NewInstance_1.bind.apply(NewInstance_1, [void 0, key].concat(dynamicDependencies)))();
    };
    var NewInstance_1;
    NewInstance = NewInstance_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Object])
    ], NewInstance);
    return NewInstance;
}());
function getDecoratorDependencies(target) {
    autoinject(target);
    return target.inject;
}
function lazy(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Lazy.of(keyValue);
    };
}
function all(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = All.of(keyValue);
    };
}
function optional(checkParentOrTarget) {
    if (checkParentOrTarget === void 0) { checkParentOrTarget = true; }
    var deco = function (checkParent) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = Optional.of(inject$$1[index], checkParent);
        };
    };
    if (typeof checkParentOrTarget === 'boolean') {
        return deco(checkParentOrTarget);
    }
    return deco(true);
}
function parent(target, _key, index) {
    var inject$$1 = getDecoratorDependencies(target);
    inject$$1[index] = Parent.of(inject$$1[index]);
}
function factory(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Factory.of(keyValue);
    };
}
function newInstance(asKeyOrTarget) {
    var dynamicDependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dynamicDependencies[_i - 1] = arguments[_i];
    }
    var deco = function (asKey) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = NewInstance.of.apply(NewInstance, [inject$$1[index]].concat(dynamicDependencies));
            if (!!asKey) {
                inject$$1[index].as(asKey);
            }
        };
    };
    if (arguments.length >= 1) {
        return deco(asKeyOrTarget);
    }
    return deco();
}

function validateKey(key) {
    if (key === null || key === undefined) {
        throw new Error('key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
    }
}
var _emptyParameters = Object.freeze([]);
aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].registration = 'aurelia:registration';
aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].invoker = 'aurelia:invoker';
var resolverDecorates = resolver.decorates;
var InvocationHandler = (function () {
    function InvocationHandler(fn, invoker, dependencies) {
        this.fn = fn;
        this.invoker = invoker;
        this.dependencies = dependencies;
    }
    InvocationHandler.prototype.invoke = function (container, dynamicDependencies) {
        return dynamicDependencies !== undefined
            ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies)
            : this.invoker.invoke(container, this.fn, this.dependencies);
    };
    return InvocationHandler;
}());
function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
    var i = staticDependencies.length;
    var args = new Array(i);
    var lookup;
    while (i--) {
        lookup = staticDependencies[i];
        if (lookup === null || lookup === undefined) {
            throw new Error('Constructor Parameter with index ' +
                i +
                ' cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
        }
        else {
            args[i] = container.get(lookup);
        }
    }
    if (dynamicDependencies !== undefined) {
        args = args.concat(dynamicDependencies);
    }
    return Reflect.construct(fn, args);
}
var classInvoker = {
    invoke: function (container, Type, deps) {
        var instances = deps.map(function (dep) { return container.get(dep); });
        return Reflect.construct(Type, instances);
    },
    invokeWithDynamicDependencies: invokeWithDynamicDependencies
};
function getDependencies(f) {
    if (!f.hasOwnProperty('inject')) {
        return [];
    }
    if (typeof f.inject === 'function') {
        return f.inject();
    }
    return f.inject;
}
var Container = (function () {
    function Container(configuration) {
        if (configuration === undefined) {
            configuration = {};
        }
        this._configuration = configuration;
        this._onHandlerCreated = configuration.onHandlerCreated;
        this._handlers =
            configuration.handlers || (configuration.handlers = new Map());
        this._resolvers = new Map();
        this.root = this;
        this.parent = null;
    }
    Container.prototype.makeGlobal = function () {
        Container.instance = this;
        return this;
    };
    Container.prototype.setHandlerCreatedCallback = function (onHandlerCreated) {
        this._onHandlerCreated = onHandlerCreated;
        this._configuration.onHandlerCreated = onHandlerCreated;
    };
    Container.prototype.registerInstance = function (key, instance) {
        return this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
    };
    Container.prototype.registerSingleton = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
    };
    Container.prototype.registerTransient = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
    };
    Container.prototype.registerHandler = function (key, handler) {
        return this.registerResolver(key, new StrategyResolver(3, handler));
    };
    Container.prototype.registerAlias = function (originalKey, aliasKey) {
        return this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
    };
    Container.prototype.registerResolver = function (key, resolver$$1) {
        validateKey(key);
        var allResolvers = this._resolvers;
        var result = allResolvers.get(key);
        if (result === undefined) {
            allResolvers.set(key, resolver$$1);
        }
        else if (result.strategy === 4) {
            result.state.push(resolver$$1);
        }
        else {
            allResolvers.set(key, new StrategyResolver(4, [result, resolver$$1]));
        }
        return resolver$$1;
    };
    Container.prototype.autoRegister = function (key, fn) {
        fn = fn === undefined ? key : fn;
        if (typeof fn === 'function') {
            var registration = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].get(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].registration, fn);
            if (registration === undefined) {
                return this.registerResolver(key, new StrategyResolver(1, fn));
            }
            return registration.registerResolver(this, key, fn);
        }
        return this.registerResolver(key, new StrategyResolver(0, fn));
    };
    Container.prototype.autoRegisterAll = function (fns) {
        var i = fns.length;
        while (i--) {
            this.autoRegister(fns[i]);
        }
    };
    Container.prototype.unregister = function (key) {
        this._resolvers.delete(key);
    };
    Container.prototype.hasResolver = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = false; }
        validateKey(key);
        return (this._resolvers.has(key) ||
            (checkParent &&
                this.parent !== null &&
                this.parent.hasResolver(key, checkParent)));
    };
    Container.prototype.getResolver = function (key) {
        return this._resolvers.get(key);
    };
    Container.prototype.get = function (key) {
        validateKey(key);
        if (key === Container) {
            return this;
        }
        if (resolverDecorates(key)) {
            return key.get(this, key);
        }
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            var registration = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].get(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].registration, key);
            if (registration === undefined) {
                return this.parent._get(key);
            }
            return registration.registerResolver(this, key, key).get(this, key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype._get = function (key) {
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            return this.parent._get(key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype.getAll = function (key) {
        validateKey(key);
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return _emptyParameters;
            }
            return this.parent.getAll(key);
        }
        if (resolver$$1.strategy === 4) {
            var state = resolver$$1.state;
            var i = state.length;
            var results = new Array(i);
            while (i--) {
                results[i] = state[i].get(this, key);
            }
            return results;
        }
        return [resolver$$1.get(this, key)];
    };
    Container.prototype.createChild = function () {
        var child = new Container(this._configuration);
        child.root = this.root;
        child.parent = this;
        return child;
    };
    Container.prototype.invoke = function (fn, dynamicDependencies) {
        try {
            var handler = this._handlers.get(fn);
            if (handler === undefined) {
                handler = this._createInvocationHandler(fn);
                this._handlers.set(fn, handler);
            }
            return handler.invoke(this, dynamicDependencies);
        }
        catch (e) {
            throw new aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["AggregateError"]("Error invoking " + fn.name + ". Check the inner error for details.", e, true);
        }
    };
    Container.prototype._createInvocationHandler = function (fn) {
        var dependencies;
        if (fn.inject === undefined) {
            dependencies =
                aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].paramTypes, fn) || _emptyParameters;
        }
        else {
            dependencies = [];
            var ctor = fn;
            while (typeof ctor === 'function') {
                dependencies.push.apply(dependencies, getDependencies(ctor));
                ctor = Object.getPrototypeOf(ctor);
            }
        }
        var invoker = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].invoker, fn) || classInvoker;
        var handler = new InvocationHandler(fn, invoker, dependencies);
        return this._onHandlerCreated !== undefined
            ? this._onHandlerCreated(handler)
            : handler;
    };
    return Container;
}());

function invoker(value) {
    return function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].invoker, value, target);
    };
}
function invokeAsFactory(potentialTarget) {
    var deco = function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].invoker, FactoryInvoker.instance, target);
    };
    return potentialTarget ? deco(potentialTarget) : deco;
}
var FactoryInvoker = (function () {
    function FactoryInvoker() {
    }
    FactoryInvoker.prototype.invoke = function (container, fn, dependencies) {
        var i = dependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(dependencies[i]);
        }
        return fn.apply(undefined, args);
    };
    FactoryInvoker.prototype.invokeWithDynamicDependencies = function (container, fn, staticDependencies, dynamicDependencies) {
        var i = staticDependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(staticDependencies[i]);
        }
        if (dynamicDependencies !== undefined) {
            args = args.concat(dynamicDependencies);
        }
        return fn.apply(undefined, args);
    };
    return FactoryInvoker;
}());
FactoryInvoker.instance = new FactoryInvoker();

function registration(value) {
    return function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["metadata"].registration, value, target);
    };
}
function transient(key) {
    return registration(new TransientRegistration(key));
}
function singleton(keyOrRegisterInChild, registerInChild) {
    if (registerInChild === void 0) { registerInChild = false; }
    return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
}
var TransientRegistration = (function () {
    function TransientRegistration(key) {
        this._key = key;
    }
    TransientRegistration.prototype.registerResolver = function (container, key, fn) {
        var existingResolver = container.getResolver(this._key || key);
        return existingResolver === undefined
            ? container.registerTransient((this._key || key), fn)
            : existingResolver;
    };
    return TransientRegistration;
}());
var SingletonRegistration = (function () {
    function SingletonRegistration(keyOrRegisterInChild, registerInChild) {
        if (registerInChild === void 0) { registerInChild = false; }
        if (typeof keyOrRegisterInChild === 'boolean') {
            this._registerInChild = keyOrRegisterInChild;
        }
        else {
            this._key = keyOrRegisterInChild;
            this._registerInChild = registerInChild;
        }
    }
    SingletonRegistration.prototype.registerResolver = function (container, key, fn) {
        var targetContainer = this._registerInChild ? container : container.root;
        var existingResolver = targetContainer.getResolver(this._key || key);
        return existingResolver === undefined
            ? targetContainer.registerSingleton(this._key || key, fn)
            : existingResolver;
    };
    return SingletonRegistration;
}());




/***/ }),

/***/ "5jyU":
/*!*******************************************************************************************!*\
  !*** ./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js ***!
  \*******************************************************************************************/
/*! exports provided: TextTemplateLoader, ensureOriginOnExports, WebpackLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTemplateLoader", function() { return TextTemplateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureOriginOnExports", function() { return ensureOriginOnExports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebpackLoader", function() { return WebpackLoader; });
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-metadata */ "qrcG");
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-loader */ "ZdUM");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ "70NS");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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



/**
* An implementation of the TemplateLoader interface implemented with text-based loading.
*/
var TextTemplateLoader = /** @class */ (function () {
    function TextTemplateLoader() {
    }
    /**
    * Loads a template.
    * @param loader The loader that is requesting the template load.
    * @param entry The TemplateRegistryEntry to load and populate with a template.
    * @return A promise which resolves when the TemplateRegistryEntry is loaded with a template.
    */
    TextTemplateLoader.prototype.loadTemplate = function (loader, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loader.loadText(entry.address)];
                    case 1:
                        text = _a.sent();
                        entry.template = aurelia_pal__WEBPACK_IMPORTED_MODULE_2__["DOM"].createTemplateFromMarkup(text);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TextTemplateLoader;
}());

function ensureOriginOnExports(moduleExports, moduleId) {
    var target = moduleExports;
    var key;
    var exportedValue;
    if (target.__useDefault) {
        target = target.default;
    }
    aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["Origin"].set(target, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["Origin"](moduleId, 'default'));
    if (typeof target === 'object') {
        for (key in target) {
            exportedValue = target[key];
            if (typeof exportedValue === 'function') {
                aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["Origin"].set(exportedValue, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__["Origin"](moduleId, key));
            }
        }
    }
    return moduleExports;
}
/**
* A default implementation of the Loader abstraction which works with webpack (extended common-js style).
*/
var WebpackLoader = /** @class */ (function (_super) {
    __extends(WebpackLoader, _super);
    function WebpackLoader() {
        var _this = _super.call(this) || this;
        _this.moduleRegistry = Object.create(null);
        _this.loaderPlugins = Object.create(null);
        _this.modulesBeingLoaded = new Map();
        _this.useTemplateLoader(new TextTemplateLoader());
        _this.addPlugin('template-registry-entry', {
            fetch: function (moduleId) { return __awaiter(_this, void 0, void 0, function () {
                var HmrContext, entry;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // HMR:
                            if (false) {}
                            entry = this.getOrCreateTemplateRegistryEntry(moduleId);
                            if (!!entry.templateIsLoaded) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.templateLoader.loadTemplate(this, entry)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/, entry];
                    }
                });
            }); }
        });
        aurelia_pal__WEBPACK_IMPORTED_MODULE_2__["PLATFORM"].eachModule = function (callback) {
            var registry = __webpack_require__.c;
            var cachedModuleIds = Object.getOwnPropertyNames(registry);
            cachedModuleIds
                // Note: we use .some here like a .forEach that can be "break"ed out of.
                // It will stop iterating only when a truthy value is returned.
                // Even though the docs say "true" explicitly, loader-default also goes by truthy
                // and this is to keep it consistent with that.
                .some(function (moduleId) {
                var moduleExports = registry[moduleId].exports;
                if (typeof moduleExports === 'object') {
                    return callback(moduleId, moduleExports);
                }
                return false;
            });
        };
        return _this;
    }
    WebpackLoader.prototype._import = function (address, defaultHMR) {
        if (defaultHMR === void 0) { defaultHMR = true; }
        return __awaiter(this, void 0, void 0, function () {
            var addressParts, moduleId, loaderPlugin, plugin_1, asyncModuleId, callback;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressParts = address.split('!');
                        moduleId = addressParts.splice(addressParts.length - 1, 1)[0];
                        loaderPlugin = addressParts.length === 1 ? addressParts[0] : null;
                        if (!loaderPlugin) return [3 /*break*/, 2];
                        plugin_1 = this.loaderPlugins[loaderPlugin];
                        if (!plugin_1) {
                            throw new Error("Plugin " + loaderPlugin + " is not registered in the loader.");
                        }
                        if (false) {}
                        return [4 /*yield*/, plugin_1.fetch(moduleId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (__webpack_require__.m[moduleId]) {
                            if (defaultHMR && module.hot && this.hmrContext) {
                                module.hot.accept(moduleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });
                            }
                            return [2 /*return*/, __webpack_require__(moduleId)];
                        }
                        asyncModuleId = "async!" + moduleId;
                        if (!__webpack_require__.m[asyncModuleId]) return [3 /*break*/, 4];
                        if (defaultHMR && module.hot && this.hmrContext) {
                            module.hot.accept(moduleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });
                            module.hot.accept(asyncModuleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });
                        }
                        callback = __webpack_require__(asyncModuleId);
                        return [4 /*yield*/, new Promise(callback)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: throw new Error("Unable to find module with ID: " + moduleId);
                }
            });
        });
    };
    /**
    * Maps a module id to a source.
    * @param id The module id.
    * @param source The source to map the module to.
    */
    WebpackLoader.prototype.map = function (id, source) { };
    /**
    * Normalizes a module id.
    * @param moduleId The module id to normalize.
    * @param relativeTo What the module id should be normalized relative to.
    * @return The normalized module id.
    */
    WebpackLoader.prototype.normalizeSync = function (moduleId, relativeTo) {
        return moduleId;
    };
    /**
    * Normalizes a module id.
    * @param moduleId The module id to normalize.
    * @param relativeTo What the module id should be normalized relative to.
    * @return The normalized module id.
    */
    WebpackLoader.prototype.normalize = function (moduleId, relativeTo) {
        return Promise.resolve(moduleId);
    };
    /**
    * Instructs the loader to use a specific TemplateLoader instance for loading templates
    * @param templateLoader The instance of TemplateLoader to use for loading templates.
    */
    WebpackLoader.prototype.useTemplateLoader = function (templateLoader) {
        this.templateLoader = templateLoader;
    };
    /**
    * Loads a collection of modules.
    * @param ids The set of module ids to load.
    * @return A Promise for an array of loaded modules.
    */
    WebpackLoader.prototype.loadAllModules = function (ids) {
        var _this = this;
        return Promise.all(ids.map(function (id) { return _this.loadModule(id); }));
    };
    /**
    * Loads a module.
    * @param moduleId The module ID to load.
    * @return A Promise for the loaded module.
    */
    WebpackLoader.prototype.loadModule = function (moduleId, defaultHMR) {
        if (defaultHMR === void 0) { defaultHMR = true; }
        return __awaiter(this, void 0, void 0, function () {
            var existing, beingLoaded, moduleExports;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        existing = this.moduleRegistry[moduleId];
                        if (existing) {
                            return [2 /*return*/, existing];
                        }
                        beingLoaded = this.modulesBeingLoaded.get(moduleId);
                        if (beingLoaded) {
                            return [2 /*return*/, beingLoaded];
                        }
                        beingLoaded = this._import(moduleId, defaultHMR);
                        this.modulesBeingLoaded.set(moduleId, beingLoaded);
                        return [4 /*yield*/, beingLoaded];
                    case 1:
                        moduleExports = _a.sent();
                        this.moduleRegistry[moduleId] = ensureOriginOnExports(moduleExports, moduleId);
                        this.modulesBeingLoaded.delete(moduleId);
                        return [2 /*return*/, moduleExports];
                }
            });
        });
    };
    /**
    * Loads a template.
    * @param url The url of the template to load.
    * @return A Promise for a TemplateRegistryEntry containing the template.
    */
    WebpackLoader.prototype.loadTemplate = function (url) {
        return this.loadModule(this.applyPluginToUrl(url, 'template-registry-entry'), false);
    };
    /**
    * Loads a text-based resource.
    * @param url The url of the text file to load.
    * @return A Promise for text content.
    */
    WebpackLoader.prototype.loadText = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadModule(url, false)];
                    case 1:
                        result = _a.sent();
                        if (result instanceof Array && result[0] instanceof Array && result.hasOwnProperty('toString')) {
                            // we're dealing with a file loaded using the css-loader:
                            return [2 /*return*/, result.toString()];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
    * Alters a module id so that it includes a plugin loader.
    * @param url The url of the module to load.
    * @param pluginName The plugin to apply to the module id.
    * @return The plugin-based module id.
    */
    WebpackLoader.prototype.applyPluginToUrl = function (url, pluginName) {
        return pluginName + "!" + url;
    };
    /**
    * Registers a plugin with the loader.
    * @param pluginName The name of the plugin.
    * @param implementation The plugin implementation.
    */
    WebpackLoader.prototype.addPlugin = function (pluginName, implementation) {
        this.loaderPlugins[pluginName] = implementation;
    };
    return WebpackLoader;
}(aurelia_loader__WEBPACK_IMPORTED_MODULE_1__["Loader"]));

aurelia_pal__WEBPACK_IMPORTED_MODULE_2__["PLATFORM"].Loader = WebpackLoader;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "MP1E":
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-logging/dist/native-modules/aurelia-logging.js ***!
  \*****************************************************************************/
/*! exports provided: logLevel, getLogger, addAppender, removeAppender, getAppenders, clearAppenders, addCustomLevel, removeCustomLevel, setLevel, getLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logLevel", function() { return logLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogger", function() { return getLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAppender", function() { return addAppender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAppender", function() { return removeAppender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppenders", function() { return getAppenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAppenders", function() { return clearAppenders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomLevel", function() { return addCustomLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCustomLevel", function() { return removeCustomLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLevel", function() { return setLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLevel", function() { return getLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });


var logLevel = {
  none: 0,
  error: 10,
  warn: 20,
  info: 30,
  debug: 40
};

var loggers = {};
var appenders = [];
var globalDefaultLevel = logLevel.none;

var standardLevels = ['none', 'error', 'warn', 'info', 'debug'];
function isStandardLevel(level) {
  return standardLevels.filter(function (l) {
    return l === level;
  }).length > 0;
}

function appendArgs() {
  return [this].concat(Array.prototype.slice.call(arguments));
}

function logFactory(level) {
  var threshold = logLevel[level];
  return function () {
    if (this.level < threshold) {
      return;
    }

    var args = appendArgs.apply(this, arguments);
    var i = appenders.length;
    while (i--) {
      var _appenders$i;

      (_appenders$i = appenders[i])[level].apply(_appenders$i, args);
    }
  };
}

function logFactoryCustom(level) {
  var threshold = logLevel[level];
  return function () {
    if (this.level < threshold) {
      return;
    }

    var args = appendArgs.apply(this, arguments);
    var i = appenders.length;
    while (i--) {
      var appender = appenders[i];
      if (appender[level] !== undefined) {
        appender[level].apply(appender, args);
      }
    }
  };
}

function connectLoggers() {
  var proto = Logger.prototype;
  for (var _level in logLevel) {
    if (isStandardLevel(_level)) {
      if (_level !== 'none') {
        proto[_level] = logFactory(_level);
      }
    } else {
      proto[_level] = logFactoryCustom(_level);
    }
  }
}

function disconnectLoggers() {
  var proto = Logger.prototype;
  for (var _level2 in logLevel) {
    if (_level2 !== 'none') {
      proto[_level2] = function () {};
    }
  }
}

function getLogger(id) {
  return loggers[id] || new Logger(id);
}

function addAppender(appender) {
  if (appenders.push(appender) === 1) {
    connectLoggers();
  }
}

function removeAppender(appender) {
  appenders = appenders.filter(function (a) {
    return a !== appender;
  });
}

function getAppenders() {
  return [].concat(appenders);
}

function clearAppenders() {
  appenders = [];
  disconnectLoggers();
}

function addCustomLevel(name, value) {
  if (logLevel[name] !== undefined) {
    throw Error('Log level "' + name + '" already exists.');
  }

  if (isNaN(value)) {
    throw Error('Value must be a number.');
  }

  logLevel[name] = value;

  if (appenders.length > 0) {
    connectLoggers();
  } else {
    Logger.prototype[name] = function () {};
  }
}

function removeCustomLevel(name) {
  if (logLevel[name] === undefined) {
    return;
  }

  if (isStandardLevel(name)) {
    throw Error('Built-in log level "' + name + '" cannot be removed.');
  }

  delete logLevel[name];
  delete Logger.prototype[name];
}

function setLevel(level) {
  globalDefaultLevel = level;
  for (var key in loggers) {
    loggers[key].setLevel(level);
  }
}

function getLevel() {
  return globalDefaultLevel;
}

var Logger = function () {
  function Logger(id) {
    

    var cached = loggers[id];
    if (cached) {
      return cached;
    }

    loggers[id] = this;
    this.id = id;
    this.level = globalDefaultLevel;
  }

  Logger.prototype.debug = function debug(message) {};

  Logger.prototype.info = function info(message) {};

  Logger.prototype.warn = function warn(message) {};

  Logger.prototype.error = function error(message) {};

  Logger.prototype.setLevel = function setLevel(level) {
    this.level = level;
  };

  Logger.prototype.isDebugEnabled = function isDebugEnabled() {
    return this.level === logLevel.debug;
  };

  return Logger;
}();

/***/ }),

/***/ "P/zd":
/*!******************************************************************!*\
  !*** ./node_modules/aurelia-dialog/dist/native-modules/chunk.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Renderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createDialogCancelError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return invokeLifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DialogController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createDialogCloseError; });
var Renderer = (function () {
    function Renderer() {
    }
    Renderer.prototype.getDialogContainer = function () {
        throw new Error('DialogRenderer must implement getDialogContainer().');
    };
    Renderer.prototype.showDialog = function (dialogController) {
        throw new Error('DialogRenderer must implement showDialog().');
    };
    Renderer.prototype.hideDialog = function (dialogController) {
        throw new Error('DialogRenderer must implement hideDialog().');
    };
    return Renderer;
}());

function createDialogCancelError(output) {
    var error = new Error('Operation cancelled.');
    error.wasCancelled = true;
    error.output = output;
    return error;
}

function createDialogCloseError(output) {
    var error = new Error();
    error.wasCancelled = false;
    error.output = output;
    return error;
}

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

var DialogController = (function () {
    function DialogController(renderer, settings, resolve, reject) {
        this.resolve = resolve;
        this.reject = reject;
        this.settings = settings;
        this.renderer = renderer;
    }
    DialogController.prototype.releaseResources = function (result) {
        var _this = this;
        return invokeLifecycle(this.controller.viewModel || {}, 'deactivate', result)
            .then(function () { return _this.renderer.hideDialog(_this); })
            .then(function () {
            _this.controller.unbind();
        });
    };
    DialogController.prototype.cancelOperation = function () {
        if (!this.settings.rejectOnCancel) {
            return { wasCancelled: true };
        }
        throw createDialogCancelError();
    };
    DialogController.prototype.ok = function (output) {
        return this.close(true, output);
    };
    DialogController.prototype.cancel = function (output) {
        return this.close(false, output);
    };
    DialogController.prototype.error = function (output) {
        var _this = this;
        var closeError = createDialogCloseError(output);
        return this.releaseResources(closeError).then(function () { _this.reject(closeError); });
    };
    DialogController.prototype.close = function (ok, output) {
        var _this = this;
        if (this.closePromise) {
            return this.closePromise;
        }
        var dialogResult = { wasCancelled: !ok, output: output };
        return this.closePromise = invokeLifecycle(this.controller.viewModel || {}, 'canDeactivate', dialogResult)
            .catch(function (reason) {
            _this.closePromise = undefined;
            return Promise.reject(reason);
        }).then(function (canDeactivate) {
            if (!canDeactivate) {
                _this.closePromise = undefined;
                return _this.cancelOperation();
            }
            return _this.releaseResources(dialogResult).then(function () {
                if (!_this.settings.rejectOnCancel || ok) {
                    _this.resolve(dialogResult);
                }
                else {
                    _this.reject(createDialogCancelError(output));
                }
                return { wasCancelled: false };
            }).catch(function (reason) {
                _this.closePromise = undefined;
                return Promise.reject(reason);
            });
        });
    };
    DialogController.inject = [Renderer];
    return DialogController;
}());


//# sourceMappingURL=chunk.js.map


/***/ }),

/***/ "ZdUM":
/*!***************************************************************************!*\
  !*** ./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js ***!
  \***************************************************************************/
/*! exports provided: TemplateDependency, TemplateRegistryEntry, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDependency", function() { return TemplateDependency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRegistryEntry", function() { return TemplateRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-path */ "iD3O");
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-metadata */ "qrcG");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();






var TemplateDependency = function TemplateDependency(src, name) {
  

  this.src = src;
  this.name = name;
};

var TemplateRegistryEntry = function () {
  function TemplateRegistryEntry(address) {
    

    this.templateIsLoaded = false;
    this.factoryIsReady = false;
    this.resources = null;
    this.dependencies = null;

    this.address = address;
    this.onReady = null;
    this._template = null;
    this._factory = null;
  }

  TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
    var finalSrc = typeof src === 'string' ? Object(aurelia_path__WEBPACK_IMPORTED_MODULE_0__["relativeToFile"])(src, this.address) : aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__["Origin"].get(src).moduleId;

    this.dependencies.push(new TemplateDependency(finalSrc, name));
  };

  _createClass(TemplateRegistryEntry, [{
    key: 'template',
    get: function get() {
      return this._template;
    },
    set: function set(value) {
      var address = this.address;
      var requires = void 0;
      var current = void 0;
      var src = void 0;
      var dependencies = void 0;

      this._template = value;
      this.templateIsLoaded = true;

      requires = value.content.querySelectorAll('require');
      dependencies = this.dependencies = new Array(requires.length);

      for (var i = 0, ii = requires.length; i < ii; ++i) {
        current = requires[i];
        src = current.getAttribute('from');

        if (!src) {
          throw new Error('<require> element in ' + address + ' has no "from" attribute.');
        }

        dependencies[i] = new TemplateDependency(Object(aurelia_path__WEBPACK_IMPORTED_MODULE_0__["relativeToFile"])(src, address), current.getAttribute('as'));

        if (current.parentNode) {
          current.parentNode.removeChild(current);
        }
      }
    }
  }, {
    key: 'factory',
    get: function get() {
      return this._factory;
    },
    set: function set(value) {
      this._factory = value;
      this.factoryIsReady = true;
    }
  }]);

  return TemplateRegistryEntry;
}();

var Loader = function () {
  function Loader() {
    

    this.templateRegistry = {};
  }

  Loader.prototype.map = function map(id, source) {
    throw new Error('Loaders must implement map(id, source).');
  };

  Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalizeSync(moduleId, relativeTo).');
  };

  Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.');
  };

  Loader.prototype.loadModule = function loadModule(id) {
    throw new Error('Loaders must implement loadModule(id).');
  };

  Loader.prototype.loadAllModules = function loadAllModules(ids) {
    throw new Error('Loader must implement loadAllModules(ids).');
  };

  Loader.prototype.loadTemplate = function loadTemplate(url) {
    throw new Error('Loader must implement loadTemplate(url).');
  };

  Loader.prototype.loadText = function loadText(url) {
    throw new Error('Loader must implement loadText(url).');
  };

  Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
    throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
  };

  Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
    throw new Error('Loader must implement addPlugin(pluginName, implementation).');
  };

  Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
    return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
  };

  return Loader;
}();

/***/ }),

/***/ "aurelia-dialog":
/*!***************************************************************************!*\
  !*** ./node_modules/aurelia-dialog/dist/native-modules/aurelia-dialog.js ***!
  \***************************************************************************/
/*! exports provided: DialogController, Renderer, createDialogCancelError, createDialogCloseError, DefaultDialogSettings, DialogConfiguration, DialogService, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDialogSettings", function() { return DefaultDialogSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogConfiguration", function() { return DialogConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk.js */ "P/zd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogController", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDialogCancelError", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDialogCloseError", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ "hij8");






var DefaultDialogSettings = (function () {
    function DefaultDialogSettings() {
        this.lock = true;
        this.startingZIndex = 1000;
        this.centerHorizontalOnly = false;
        this.rejectOnCancel = false;
        this.ignoreTransitions = false;
        this.restoreFocus = function (lastActiveElement) { return lastActiveElement.focus(); };
    }
    return DefaultDialogSettings;
}());

var RENDERRERS = {
    ux: function () { return __webpack_require__.e(/*! import() */ "vendors.async~493df0b3").then(__webpack_require__.bind(null, /*! ./ux-dialog-renderer.js */ "yfWE")).then(function (m) { return m.DialogRenderer; }); },
    native: function () { return __webpack_require__.e(/*! import() */ "vendors.async~493df0b3").then(__webpack_require__.bind(null, /*! ./native-dialog-renderer.js */ "MzFQ")).then(function (m) { return m.NativeDialogRenderer; }); }
};
var DEFAULT_RESOURCES = {
    'ux-dialog': function () { return __webpack_require__.e(/*! import() */ "vendors.async~493df0b3").then(__webpack_require__.bind(null, /*! ./ux-dialog.js */ "mbV6")).then(function (m) { return m.UxDialog; }); },
    'ux-dialog-header': function () { return __webpack_require__.e(/*! import() */ "vendors.async~493df0b3").then(__webpack_require__.bind(null, /*! ./ux-dialog-header.js */ "kAWR")).then(function (m) { return m.UxDialogHeader; }); },
    'ux-dialog-body': function () { return __webpack_require__.e(/*! import() */ "vendors.async~493df0b3").then(__webpack_require__.bind(null, /*! ./ux-dialog-body.js */ "K1pw")).then(function (m) { return m.UxDialogBody; }); },
    'ux-dialog-footer': function () { return __webpack_require__.e(/*! import() */ "vendors.async~493df0b3").then(__webpack_require__.bind(null, /*! ./ux-dialog-footer.js */ "It9J")).then(function (m) { return m.UxDialogFooter; }); },
    'attach-focus': function () { return __webpack_require__.e(/*! import() */ "vendors.async~493df0b3").then(__webpack_require__.bind(null, /*! ./attach-focus.js */ "e1DJ")).then(function (m) { return m.AttachFocus; }); }
};
var DEFAULT_CSS_TEXT = function () { return __webpack_require__.e(/*! import() */ "vendors.async~493df0b3").then(__webpack_require__.bind(null, /*! ./default-styles.js */ "em5G")).then(function (cssM) { return cssM['default']; }); };
var DialogConfiguration = (function () {
    function DialogConfiguration(frameworkConfiguration, applySetter) {
        var _this = this;
        this.renderer = 'ux';
        this.cssText = DEFAULT_CSS_TEXT;
        this.resources = [];
        this.fwConfig = frameworkConfiguration;
        this.settings = frameworkConfiguration.container.get(DefaultDialogSettings);
        applySetter(function () { return _this._apply(); });
    }
    DialogConfiguration.prototype._apply = function () {
        var _this = this;
        var renderer = this.renderer;
        var cssText = this.cssText;
        return Promise
            .all([
            typeof renderer === 'string' ? RENDERRERS[renderer]() : renderer,
            cssText
                ? typeof cssText === 'string'
                    ? cssText
                    : cssText()
                : ''
        ])
            .then(function (_a) {
            var rendererImpl = _a[0], $cssText = _a[1];
            var fwConfig = _this.fwConfig;
            fwConfig.transient(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["a"], rendererImpl);
            if ($cssText) {
                aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].injectStyles($cssText);
            }
            return Promise
                .all(_this.resources.map(function (name) { return DEFAULT_RESOURCES[name](); }))
                .then(function (modules) {
                fwConfig.globalResources(modules);
            });
        });
    };
    DialogConfiguration.prototype.useDefaults = function () {
        return this
            .useRenderer('ux')
            .useCSS(DEFAULT_CSS_TEXT)
            .useStandardResources();
    };
    DialogConfiguration.prototype.useStandardResources = function () {
        Object.keys(DEFAULT_RESOURCES).forEach(this.useResource, this);
        return this;
    };
    DialogConfiguration.prototype.useResource = function (resourceName) {
        this.resources.push(resourceName);
        return this;
    };
    DialogConfiguration.prototype.useRenderer = function (renderer, settings) {
        this.renderer = renderer;
        if (settings) {
            Object.assign(this.settings, settings);
        }
        return this;
    };
    DialogConfiguration.prototype.useCSS = function (cssText) {
        this.cssText = cssText;
        return this;
    };
    return DialogConfiguration;
}());

function whenClosed(onfulfilled, onrejected) {
    return this.then(function (r) { return r.wasCancelled ? r : r.closeResult; }).then(onfulfilled, onrejected);
}
function asDialogOpenPromise(promise) {
    promise.whenClosed = whenClosed;
    return promise;
}
var DialogService = (function () {
    function DialogService(container, compositionEngine, defaultSettings) {
        this.controllers = [];
        this.hasOpenDialog = false;
        this.hasActiveDialog = false;
        this.container = container;
        this.compositionEngine = compositionEngine;
        this.defaultSettings = defaultSettings;
    }
    DialogService.prototype.validateSettings = function (settings) {
        if (!settings.viewModel && !settings.view) {
            throw new Error('Invalid Dialog Settings. You must provide "viewModel", "view" or both.');
        }
    };
    DialogService.prototype.createCompositionContext = function (childContainer, host, settings) {
        return {
            container: childContainer.parent,
            childContainer: childContainer,
            bindingContext: null,
            viewResources: null,
            model: settings.model,
            view: settings.view,
            viewModel: settings.viewModel,
            viewSlot: new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewSlot"](host, true),
            host: host
        };
    };
    DialogService.prototype.ensureViewModel = function (compositionContext) {
        if (typeof compositionContext.viewModel === 'object') {
            return Promise.resolve(compositionContext);
        }
        return this.compositionEngine.ensureViewModel(compositionContext);
    };
    DialogService.prototype._cancelOperation = function (rejectOnCancel) {
        if (!rejectOnCancel) {
            return { wasCancelled: true };
        }
        throw Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["b"])();
    };
    DialogService.prototype.composeAndShowDialog = function (compositionContext, dialogController) {
        var _this = this;
        if (!compositionContext.viewModel) {
            compositionContext.bindingContext = { controller: dialogController };
        }
        return this.compositionEngine
            .compose(compositionContext)
            .then(function (controller) {
            dialogController.controller = controller;
            return dialogController.renderer
                .showDialog(dialogController)
                .then(function () {
                _this.controllers.push(dialogController);
                _this.hasActiveDialog = _this.hasOpenDialog = !!_this.controllers.length;
            }, function (reason) {
                if (controller.viewModel) {
                    Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["c"])(controller.viewModel, 'deactivate');
                }
                return Promise.reject(reason);
            });
        });
    };
    DialogService.prototype.createSettings = function (settings) {
        settings = Object.assign({}, this.defaultSettings, settings);
        if (typeof settings.keyboard !== 'boolean' && !settings.keyboard) {
            settings.keyboard = !settings.lock;
        }
        if (typeof settings.overlayDismiss !== 'boolean') {
            settings.overlayDismiss = !settings.lock;
        }
        Object.defineProperty(settings, 'rejectOnCancel', {
            writable: false,
            configurable: true,
            enumerable: true
        });
        this.validateSettings(settings);
        return settings;
    };
    DialogService.prototype.open = function (settings) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        settings = this.createSettings(settings);
        var childContainer = settings.childContainer || this.container.createChild();
        var resolveCloseResult;
        var rejectCloseResult;
        var closeResult = new Promise(function (resolve, reject) {
            resolveCloseResult = resolve;
            rejectCloseResult = reject;
        });
        var dialogController = childContainer.invoke(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["d"], [settings, resolveCloseResult, rejectCloseResult]);
        childContainer.registerInstance(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["d"], dialogController);
        closeResult.then(function () {
            removeController(_this, dialogController);
        }, function () {
            removeController(_this, dialogController);
        });
        var compositionContext = this.createCompositionContext(childContainer, dialogController.renderer.getDialogContainer(), dialogController.settings);
        var openResult = this.ensureViewModel(compositionContext).then(function (compositionContext) {
            if (!compositionContext.viewModel) {
                return true;
            }
            return Object(_chunk_js__WEBPACK_IMPORTED_MODULE_0__["c"])(compositionContext.viewModel, 'canActivate', dialogController.settings.model);
        }).then(function (canActivate) {
            if (!canActivate) {
                return _this._cancelOperation(dialogController.settings.rejectOnCancel);
            }
            return _this.composeAndShowDialog(compositionContext, dialogController)
                .then(function () { return ({ controller: dialogController, closeResult: closeResult, wasCancelled: false }); });
        });
        return asDialogOpenPromise(openResult);
    };
    DialogService.prototype.closeAll = function () {
        return Promise.all(this.controllers.slice(0).map(function (controller) {
            if (!controller.settings.rejectOnCancel) {
                return controller.cancel().then(function (result) {
                    if (result.wasCancelled) {
                        return controller;
                    }
                    return null;
                });
            }
            return controller.cancel().then(function () { return null; }).catch(function (reason) {
                if (reason.wasCancelled) {
                    return controller;
                }
                throw reason;
            });
        })).then(function (unclosedControllers) { return unclosedControllers.filter(function (unclosed) { return !!unclosed; }); });
    };
    DialogService.inject = [aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_2__["Container"], aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["CompositionEngine"], DefaultDialogSettings];
    return DialogService;
}());
function removeController(service, dialogController) {
    var i = service.controllers.indexOf(dialogController);
    if (i !== -1) {
        service.controllers.splice(i, 1);
        service.hasActiveDialog = service.hasOpenDialog = !!service.controllers.length;
    }
}

function configure(frameworkConfig, callback) {
    var applyConfig = null;
    var config = new DialogConfiguration(frameworkConfig, function (apply) { applyConfig = apply; });
    if (typeof callback === 'function') {
        callback(config);
    }
    else {
        config.useDefaults();
    }
    return applyConfig();
}


//# sourceMappingURL=aurelia-dialog.js.map


/***/ }),

/***/ "aurelia-event-aggregator":
/*!***********************************************************************************************!*\
  !*** ./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js ***!
  \***********************************************************************************************/
/*! exports provided: EventAggregator, includeEventsIn, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAggregator", function() { return EventAggregator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeEventsIn", function() { return includeEventsIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ "MP1E");




var logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__["getLogger"]('event-aggregator');

var Handler = function () {
  function Handler(messageType, callback) {
    

    this.messageType = messageType;
    this.callback = callback;
  }

  Handler.prototype.handle = function handle(message) {
    if (message instanceof this.messageType) {
      this.callback.call(null, message);
    }
  };

  return Handler;
}();

function invokeCallback(callback, data, event) {
  try {
    callback(data, event);
  } catch (e) {
    logger.error(e);
  }
}

function invokeHandler(handler, data) {
  try {
    handler.handle(data);
  } catch (e) {
    logger.error(e);
  }
}

var EventAggregator = function () {
  function EventAggregator() {
    

    this.eventLookup = {};
    this.messageHandlers = [];
  }

  EventAggregator.prototype.publish = function publish(event, data) {
    var subscribers = void 0;
    var i = void 0;

    if (!event) {
      throw new Error('Event was invalid.');
    }

    if (typeof event === 'string') {
      subscribers = this.eventLookup[event];
      if (subscribers) {
        subscribers = subscribers.slice();
        i = subscribers.length;

        while (i--) {
          invokeCallback(subscribers[i], data, event);
        }
      }
    } else {
      subscribers = this.messageHandlers.slice();
      i = subscribers.length;

      while (i--) {
        invokeHandler(subscribers[i], event);
      }
    }
  };

  EventAggregator.prototype.subscribe = function subscribe(event, callback) {
    var handler = void 0;
    var subscribers = void 0;

    if (!event) {
      throw new Error('Event channel/type was invalid.');
    }

    if (typeof event === 'string') {
      handler = callback;
      subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
    } else {
      handler = new Handler(event, callback);
      subscribers = this.messageHandlers;
    }

    subscribers.push(handler);

    return {
      dispose: function dispose() {
        var idx = subscribers.indexOf(handler);
        if (idx !== -1) {
          subscribers.splice(idx, 1);
        }
      }
    };
  };

  EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
    var sub = this.subscribe(event, function (a, b) {
      sub.dispose();
      return callback(a, b);
    });

    return sub;
  };

  return EventAggregator;
}();

function includeEventsIn(obj) {
  var ea = new EventAggregator();

  obj.subscribeOnce = function (event, callback) {
    return ea.subscribeOnce(event, callback);
  };

  obj.subscribe = function (event, callback) {
    return ea.subscribe(event, callback);
  };

  obj.publish = function (event, data) {
    ea.publish(event, data);
  };

  return ea;
}

function configure(config) {
  config.instance(EventAggregator, includeEventsIn(config.aurelia));
}

/***/ }),

/***/ "aurelia-framework":
/*!*********************************************************************************!*\
  !*** ./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js ***!
  \*********************************************************************************/
/*! exports provided: Aurelia, FrameworkConfiguration, _emptyParameters, InvocationHandler, Container, autoinject, inject, invoker, invokeAsFactory, FactoryInvoker, registration, transient, singleton, TransientRegistration, SingletonRegistration, resolver, Strategy, StrategyResolver, Lazy, All, Optional, Parent, Factory, NewInstance, getDecoratorDependencies, lazy, all, optional, parent, factory, newInstance, getArrayObserver, getMapObserver, getSetObserver, targetContext, sourceContext, camelCase, createOverrideContext, getContextFor, createScopeForTest, connectable, enqueueBindingConnect, setConnectQueueThreshold, enableConnectQueue, disableConnectQueue, getConnectQueueSize, subscriberCollection, ExpressionObserver, calcSplices, mergeSplice, projectArraySplices, getChangeRecords, ModifyCollectionObserver, CollectionLengthObserver, Expression, BindingBehavior, ValueConverter, Assign, Conditional, AccessThis, AccessScope, AccessMember, AccessKeyed, CallScope, CallMember, CallFunction, Binary, Unary, LiteralPrimitive, LiteralString, LiteralTemplate, LiteralArray, LiteralObject, Unparser, ExpressionCloner, cloneExpression, bindingMode, Parser, ParserImplementation, delegationStrategy, EventManager, EventSubscriber, DirtyChecker, DirtyCheckProperty, propertyAccessor, PrimitiveObserver, SetterObserver, XLinkAttributeObserver, dataAttributeAccessor, DataAttributeObserver, StyleObserver, ValueAttributeObserver, CheckedObserver, SelectValueObserver, ClassObserver, hasDeclaredDependencies, declarePropertyDependencies, computedFrom, ComputedExpression, createComputedObserver, elements, presentationElements, presentationAttributes, SVGAnalyzer, ObserverLocator, ObjectObservationAdapter, BindingExpression, Binding, CallExpression, Call, ValueConverterResource, valueConverter, BindingBehaviorResource, bindingBehavior, ListenerExpression, Listener, NameExpression, BindingEngine, observable, connectBindingToSignal, signalBindings, metadata, Origin, decorators, deprecated, mixin, protocol, animationEvent, Animator, CompositionTransactionNotifier, CompositionTransactionOwnershipToken, CompositionTransaction, _hyphenate, _isAllWhitespace, ViewEngineHooksResource, viewEngineHooks, ElementEvents, ResourceLoadContext, ViewCompileInstruction, BehaviorInstruction, TargetInstruction, viewStrategy, RelativeViewStrategy, ConventionalViewStrategy, NoViewStrategy, TemplateRegistryViewStrategy, InlineViewStrategy, StaticViewStrategy, ViewLocator, BindingLanguage, SlotCustomAttribute, PassThroughSlot, ShadowSlot, ShadowDOM, validateBehaviorName, ViewResources, View, ViewSlot, BoundViewFactory, ViewFactory, ViewCompiler, ResourceModule, ResourceDescription, ModuleAnalyzer, ViewEngine, Controller, BehaviorPropertyObserver, BindableProperty, HtmlBehaviorResource, children, child, SwapStrategies, CompositionEngine, ElementConfigResource, resource, behavior, customElement, customAttribute, templateController, bindable, dynamicOptions, useShadowDOM, processAttributes, processContent, containerless, useViewStrategy, useView, inlineView, noView, view, elementConfig, viewResources, TemplatingEngine, TemplateDependency, TemplateRegistryEntry, Loader, TaskQueue, relativeToFile, join, buildQueryString, parseQueryString, AggregateError, FEATURE, PLATFORM, DOM, isInitialized, initializePAL, reset, LogManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aurelia", function() { return Aurelia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkConfiguration", function() { return FrameworkConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogManager", function() { return LogManager; });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ "MP1E");
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-dependency-injection */ "3U8n");
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-loader */ "ZdUM");
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ "hij8");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-pal */ "70NS");
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-path */ "iD3O");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_emptyParameters", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["_emptyParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvocationHandler", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["InvocationHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["Container"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoinject", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["autoinject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoker", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["invoker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invokeAsFactory", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["invokeAsFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FactoryInvoker", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["FactoryInvoker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registration", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["registration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transient", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["transient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["singleton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransientRegistration", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["TransientRegistration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingletonRegistration", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["SingletonRegistration"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolver", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["resolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Strategy", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["Strategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrategyResolver", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["StrategyResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["Lazy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "All", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["All"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Optional", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["Optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parent", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["Parent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Factory", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["Factory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewInstance", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["NewInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDecoratorDependencies", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["getDecoratorDependencies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["lazy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["parent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["factory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newInstance", function() { return aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["newInstance"]; });

/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aurelia-binding */ "X5gX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getArrayObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["getArrayObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMapObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["getMapObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["getSetObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "targetContext", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["targetContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sourceContext", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["sourceContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["camelCase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOverrideContext", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["createOverrideContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContextFor", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["getContextFor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createScopeForTest", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["createScopeForTest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectable", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["connectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enqueueBindingConnect", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["enqueueBindingConnect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setConnectQueueThreshold", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["setConnectQueueThreshold"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableConnectQueue", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["enableConnectQueue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableConnectQueue", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["disableConnectQueue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getConnectQueueSize", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["getConnectQueueSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscriberCollection", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["subscriberCollection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ExpressionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcSplices", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["calcSplices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeSplice", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["mergeSplice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "projectArraySplices", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["projectArraySplices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChangeRecords", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["getChangeRecords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModifyCollectionObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ModifyCollectionObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollectionLengthObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["CollectionLengthObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Expression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingBehavior", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["BindingBehavior"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueConverter", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ValueConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Conditional", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Conditional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessThis", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["AccessThis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessScope", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["AccessScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessMember", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["AccessMember"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessKeyed", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["AccessKeyed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallScope", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["CallScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallMember", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["CallMember"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallFunction", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["CallFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Binary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Unary", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Unary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiteralPrimitive", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["LiteralPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiteralString", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["LiteralString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiteralTemplate", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["LiteralTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiteralArray", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["LiteralArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiteralObject", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["LiteralObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Unparser", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Unparser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionCloner", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ExpressionCloner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneExpression", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["cloneExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindingMode", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["bindingMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Parser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParserImplementation", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ParserImplementation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delegationStrategy", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["delegationStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventManager", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["EventManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventSubscriber", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["EventSubscriber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirtyChecker", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["DirtyChecker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirtyCheckProperty", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["DirtyCheckProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyAccessor", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["propertyAccessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimitiveObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["PrimitiveObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetterObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["SetterObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XLinkAttributeObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["XLinkAttributeObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataAttributeAccessor", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["dataAttributeAccessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataAttributeObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["DataAttributeObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["StyleObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueAttributeObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ValueAttributeObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckedObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["CheckedObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectValueObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["SelectValueObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ClassObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasDeclaredDependencies", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["hasDeclaredDependencies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "declarePropertyDependencies", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["declarePropertyDependencies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computedFrom", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["computedFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComputedExpression", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ComputedExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComputedObserver", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["createComputedObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elements", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["elements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "presentationElements", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["presentationElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "presentationAttributes", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["presentationAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGAnalyzer", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["SVGAnalyzer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObserverLocator", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ObserverLocator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectObservationAdapter", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ObjectObservationAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingExpression", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["BindingExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Binding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallExpression", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["CallExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Call", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Call"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueConverterResource", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ValueConverterResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueConverter", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["valueConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingBehaviorResource", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["BindingBehaviorResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindingBehavior", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["bindingBehavior"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerExpression", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["ListenerExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Listener", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["Listener"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NameExpression", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["NameExpression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingEngine", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["BindingEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectBindingToSignal", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["connectBindingToSignal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signalBindings", function() { return aurelia_binding__WEBPACK_IMPORTED_MODULE_6__["signalBindings"]; });

/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aurelia-metadata */ "qrcG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__["metadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Origin", function() { return aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__["Origin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decorators", function() { return aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__["decorators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__["deprecated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__["mixin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "protocol", function() { return aurelia_metadata__WEBPACK_IMPORTED_MODULE_7__["protocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationEvent", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["animationEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animator", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["Animator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompositionTransactionNotifier", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["CompositionTransactionNotifier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompositionTransactionOwnershipToken", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["CompositionTransactionOwnershipToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompositionTransaction", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["CompositionTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_hyphenate", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["_hyphenate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_isAllWhitespace", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["_isAllWhitespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEngineHooksResource", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewEngineHooksResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewEngineHooks", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["viewEngineHooks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementEvents", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ElementEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceLoadContext", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ResourceLoadContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewCompileInstruction", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewCompileInstruction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorInstruction", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["BehaviorInstruction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetInstruction", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["TargetInstruction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewStrategy", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["viewStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelativeViewStrategy", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["RelativeViewStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConventionalViewStrategy", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ConventionalViewStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoViewStrategy", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["NoViewStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateRegistryViewStrategy", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["TemplateRegistryViewStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineViewStrategy", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["InlineViewStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticViewStrategy", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["StaticViewStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewLocator", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewLocator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindingLanguage", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["BindingLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlotCustomAttribute", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["SlotCustomAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PassThroughSlot", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["PassThroughSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShadowSlot", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ShadowSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShadowDOM", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ShadowDOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateBehaviorName", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["validateBehaviorName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewResources", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewResources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["View"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewSlot", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewSlot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundViewFactory", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["BoundViewFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewFactory", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewCompiler", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewCompiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceModule", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ResourceModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResourceDescription", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ResourceDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleAnalyzer", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ModuleAnalyzer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorPropertyObserver", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["BehaviorPropertyObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindableProperty", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["BindableProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HtmlBehaviorResource", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["HtmlBehaviorResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "children", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["children"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "child", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["child"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwapStrategies", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["SwapStrategies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompositionEngine", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["CompositionEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementConfigResource", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ElementConfigResource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resource", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["resource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "behavior", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["behavior"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customAttribute", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["customAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateController", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["templateController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindable", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["bindable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicOptions", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["dynamicOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useShadowDOM", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["useShadowDOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processAttributes", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["processAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processContent", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["processContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containerless", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["containerless"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useViewStrategy", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["useViewStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useView", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["useView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inlineView", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["inlineView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noView", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["noView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "view", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["view"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementConfig", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["elementConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewResources", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["viewResources"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplatingEngine", function() { return aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["TemplatingEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateDependency", function() { return aurelia_loader__WEBPACK_IMPORTED_MODULE_2__["TemplateDependency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateRegistryEntry", function() { return aurelia_loader__WEBPACK_IMPORTED_MODULE_2__["TemplateRegistryEntry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return aurelia_loader__WEBPACK_IMPORTED_MODULE_2__["Loader"]; });

/* harmony import */ var aurelia_task_queue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aurelia-task-queue */ "K/SW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskQueue", function() { return aurelia_task_queue__WEBPACK_IMPORTED_MODULE_8__["TaskQueue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relativeToFile", function() { return aurelia_path__WEBPACK_IMPORTED_MODULE_5__["relativeToFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return aurelia_path__WEBPACK_IMPORTED_MODULE_5__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildQueryString", function() { return aurelia_path__WEBPACK_IMPORTED_MODULE_5__["buildQueryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return aurelia_path__WEBPACK_IMPORTED_MODULE_5__["parseQueryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AggregateError", function() { return aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["AggregateError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FEATURE", function() { return aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["FEATURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLATFORM", function() { return aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["PLATFORM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInitialized", function() { return aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["isInitialized"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializePAL", function() { return aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["initializePAL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["reset"]; });

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };










function preventActionlessFormSubmit() {
  aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"].addEventListener('submit', function (evt) {
    var target = evt.target;
    var action = target.action;

    if (target.tagName.toLowerCase() === 'form' && !action) {
      evt.preventDefault();
    }
  });
}

var Aurelia = function () {
  function Aurelia(loader, container, resources) {
    

    this.loader = loader || new aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["PLATFORM"].Loader();
    this.container = container || new aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_1__["Container"]().makeGlobal();
    this.resources = resources || new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewResources"]();
    this.use = new FrameworkConfiguration(this);
    this.logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__["getLogger"]('aurelia');
    this.hostConfigured = false;
    this.host = null;

    this.use.instance(Aurelia, this);
    this.use.instance(aurelia_loader__WEBPACK_IMPORTED_MODULE_2__["Loader"], this.loader);
    this.use.instance(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewResources"], this.resources);
  }

  Aurelia.prototype.start = function start() {
    var _this = this;

    if (this._started) {
      return this._started;
    }

    this.logger.info('Aurelia Starting');
    return this._started = this.use.apply().then(function () {
      preventActionlessFormSubmit();

      if (!_this.container.hasResolver(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["BindingLanguage"])) {
        var message = 'You must configure Aurelia with a BindingLanguage implementation.';
        _this.logger.error(message);
        throw new Error(message);
      }

      _this.logger.info('Aurelia Started');
      var evt = aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"].createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
      aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"].dispatchEvent(evt);
      return _this;
    });
  };

  Aurelia.prototype.enhance = function enhance() {
    var _this2 = this;

    var bindingContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var applicationHost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    this._configureHost(applicationHost || aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"].querySelectorAll('body')[0]);

    return new Promise(function (resolve) {
      var engine = _this2.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["TemplatingEngine"]);
      _this2.root = engine.enhance({ container: _this2.container, element: _this2.host, resources: _this2.resources, bindingContext: bindingContext });
      _this2.root.attached();
      _this2._onAureliaComposed();
      resolve(_this2);
    });
  };

  Aurelia.prototype.setRoot = function setRoot() {
    var _this3 = this;

    var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var applicationHost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var instruction = {};

    if (this.root && this.root.viewModel && this.root.viewModel.router) {
      this.root.viewModel.router.deactivate();
      this.root.viewModel.router.reset();
    }

    this._configureHost(applicationHost);

    var engine = this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["TemplatingEngine"]);
    var transaction = this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["CompositionTransaction"]);
    delete transaction.initialComposition;

    if (!root) {
      if (this.configModuleId) {
        root = Object(aurelia_path__WEBPACK_IMPORTED_MODULE_5__["relativeToFile"])('./app', this.configModuleId);
      } else {
        root = 'app';
      }
    }

    instruction.viewModel = root;
    instruction.container = instruction.childContainer = this.container;
    instruction.viewSlot = this.hostSlot;
    instruction.host = this.host;

    return engine.compose(instruction).then(function (r) {
      _this3.root = r;
      instruction.viewSlot.attached();
      _this3._onAureliaComposed();
      return _this3;
    });
  };

  Aurelia.prototype._configureHost = function _configureHost(applicationHost) {
    if (this.hostConfigured) {
      return;
    }
    applicationHost = applicationHost || this.host;

    if (!applicationHost || typeof applicationHost === 'string') {
      this.host = aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"].getElementById(applicationHost || 'applicationHost');
    } else {
      this.host = applicationHost;
    }

    if (!this.host) {
      throw new Error('No applicationHost was specified.');
    }

    this.hostConfigured = true;
    this.host.aurelia = this;
    this.hostSlot = new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewSlot"](this.host, true);
    this.hostSlot.transformChildNodesIntoView();
    this.container.registerInstance(aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"].boundary, this.host);
  };

  Aurelia.prototype._onAureliaComposed = function _onAureliaComposed() {
    var evt = aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"].createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
    setTimeout(function () {
      return aurelia_pal__WEBPACK_IMPORTED_MODULE_4__["DOM"].dispatchEvent(evt);
    }, 1);
  };

  return Aurelia;
}();

var logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__["getLogger"]('aurelia');
var extPattern = /\.[^/.]+$/;

function runTasks(config, tasks) {
  var current = void 0;
  var next = function next() {
    current = tasks.shift();
    if (current) {
      return Promise.resolve(current(config)).then(next);
    }

    return Promise.resolve();
  };

  return next();
}

function loadPlugin(fwConfig, loader, info) {
  logger.debug('Loading plugin ' + info.moduleId + '.');
  if (typeof info.moduleId === 'string') {
    fwConfig.resourcesRelativeTo = info.resourcesRelativeTo;

    var id = info.moduleId;

    if (info.resourcesRelativeTo.length > 1) {
      return loader.normalize(info.moduleId, info.resourcesRelativeTo[1]).then(function (normalizedId) {
        return _loadPlugin(normalizedId);
      });
    }

    return _loadPlugin(id);
  } else if (typeof info.configure === 'function') {
    if (fwConfig.configuredPlugins.indexOf(info.configure) !== -1) {
      return Promise.resolve();
    }
    fwConfig.configuredPlugins.push(info.configure);

    return Promise.resolve(info.configure.call(null, fwConfig, info.config || {}));
  }
  throw new Error(invalidConfigMsg(info.moduleId || info.configure, 'plugin'));

  function _loadPlugin(moduleId) {
    return loader.loadModule(moduleId).then(function (m) {
      if ('configure' in m) {
        if (fwConfig.configuredPlugins.indexOf(m.configure) !== -1) {
          return Promise.resolve();
        }
        return Promise.resolve(m.configure(fwConfig, info.config || {})).then(function () {
          fwConfig.configuredPlugins.push(m.configure);
          fwConfig.resourcesRelativeTo = null;
          logger.debug('Configured plugin ' + info.moduleId + '.');
        });
      }

      fwConfig.resourcesRelativeTo = null;
      logger.debug('Loaded plugin ' + info.moduleId + '.');
    });
  }
}

function loadResources(aurelia, resourcesToLoad, appResources) {
  if (Object.keys(resourcesToLoad).length === 0) {
    return Promise.resolve();
  }
  var viewEngine = aurelia.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["ViewEngine"]);

  return Promise.all(Object.keys(resourcesToLoad).map(function (n) {
    return _normalize(resourcesToLoad[n]);
  })).then(function (loads) {
    var names = [];
    var importIds = [];

    loads.forEach(function (l) {
      names.push(undefined);
      importIds.push(l.importId);
    });

    return viewEngine.importViewResources(importIds, names, appResources);
  });

  function _normalize(load) {
    var moduleId = load.moduleId;
    var ext = getExt(moduleId);

    if (isOtherResource(moduleId)) {
      moduleId = removeExt(moduleId);
    }

    return aurelia.loader.normalize(moduleId, load.relativeTo).then(function (normalized) {
      return {
        name: load.moduleId,
        importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
      };
    });
  }

  function isOtherResource(name) {
    var ext = getExt(name);
    if (!ext) return false;
    if (ext === '') return false;
    if (ext === '.js' || ext === '.ts') return false;
    return true;
  }

  function removeExt(name) {
    return name.replace(extPattern, '');
  }

  function addOriginalExt(normalized, ext) {
    return removeExt(normalized) + '.' + ext;
  }
}

function getExt(name) {
  var match = name.match(extPattern);
  if (match && match.length > 0) {
    return match[0].split('.')[1];
  }
}

function loadBehaviors(config) {
  return Promise.all(config.behaviorsToLoad.map(function (m) {
    return m.load(config.container, m.target);
  })).then(function () {
    config.behaviorsToLoad = null;
  });
}

function assertProcessed(plugins) {
  if (plugins.processed) {
    throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
  }
}

function invalidConfigMsg(cfg, type) {
  return 'Invalid ' + type + ' [' + cfg + '], ' + type + ' must be specified as functions or relative module IDs.';
}

var FrameworkConfiguration = function () {
  function FrameworkConfiguration(aurelia) {
    var _this4 = this;

    

    this.aurelia = aurelia;
    this.container = aurelia.container;

    this.info = [];
    this.processed = false;
    this.preTasks = [];
    this.postTasks = [];

    this.behaviorsToLoad = [];

    this.configuredPlugins = [];
    this.resourcesToLoad = {};
    this.preTask(function () {
      return aurelia.loader.normalize('aurelia-bootstrapper').then(function (name) {
        return _this4.bootstrapperName = name;
      });
    });
    this.postTask(function () {
      return loadResources(aurelia, _this4.resourcesToLoad, aurelia.resources);
    });
  }

  FrameworkConfiguration.prototype.instance = function instance(type, _instance) {
    this.container.registerInstance(type, _instance);
    return this;
  };

  FrameworkConfiguration.prototype.singleton = function singleton(type, implementation) {
    this.container.registerSingleton(type, implementation);
    return this;
  };

  FrameworkConfiguration.prototype.transient = function transient(type, implementation) {
    this.container.registerTransient(type, implementation);
    return this;
  };

  FrameworkConfiguration.prototype.preTask = function preTask(task) {
    assertProcessed(this);
    this.preTasks.push(task);
    return this;
  };

  FrameworkConfiguration.prototype.postTask = function postTask(task) {
    assertProcessed(this);
    this.postTasks.push(task);
    return this;
  };

  FrameworkConfiguration.prototype.feature = function feature(plugin) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (typeof plugin === 'undefined' ? 'undefined' : _typeof(plugin)) {
      case 'string':
        var hasIndex = /\/index$/i.test(plugin);
        var _moduleId = hasIndex || getExt(plugin) ? plugin : plugin + '/index';
        var root = hasIndex ? plugin.substr(0, plugin.length - 6) : plugin;
        this.info.push({ moduleId: _moduleId, resourcesRelativeTo: [root, ''], config: config });
        break;

      case 'function':
        this.info.push({ configure: plugin, config: config || {} });
        break;
      default:
        throw new Error(invalidConfigMsg(plugin, 'feature'));
    }
    return this;
  };

  FrameworkConfiguration.prototype.globalResources = function globalResources(resources) {
    var _this5 = this;

    assertProcessed(this);

    var toAdd = Array.isArray(resources) ? resources : arguments;
    var resource = void 0;
    var resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];

    for (var i = 0, ii = toAdd.length; i < ii; ++i) {
      resource = toAdd[i];
      switch (typeof resource === 'undefined' ? 'undefined' : _typeof(resource)) {
        case 'string':
          var parent = resourcesRelativeTo[0];
          var grandParent = resourcesRelativeTo[1];
          var name = resource;

          if ((resource.startsWith('./') || resource.startsWith('../')) && parent !== '') {
            name = Object(aurelia_path__WEBPACK_IMPORTED_MODULE_5__["join"])(parent, resource);
          }

          this.resourcesToLoad[name] = { moduleId: name, relativeTo: grandParent };
          break;
        case 'function':
          var meta = this.aurelia.resources.autoRegister(this.container, resource);
          if (meta instanceof aurelia_templating__WEBPACK_IMPORTED_MODULE_3__["HtmlBehaviorResource"] && meta.elementName !== null) {
            if (this.behaviorsToLoad.push(meta) === 1) {
              this.postTask(function () {
                return loadBehaviors(_this5);
              });
            }
          }
          break;
        default:
          throw new Error(invalidConfigMsg(resource, 'resource'));
      }
    }

    return this;
  };

  FrameworkConfiguration.prototype.globalName = function globalName(resourcePath, newName) {
    assertProcessed(this);
    this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
    return this;
  };

  FrameworkConfiguration.prototype.plugin = function plugin(_plugin, pluginConfig) {
    assertProcessed(this);

    var info = void 0;
    switch (typeof _plugin === 'undefined' ? 'undefined' : _typeof(_plugin)) {
      case 'string':
        info = { moduleId: _plugin, resourcesRelativeTo: [_plugin, ''], config: pluginConfig || {} };
        break;
      case 'function':
        info = { configure: _plugin, config: pluginConfig || {} };
        break;
      default:
        throw new Error(invalidConfigMsg(_plugin, 'plugin'));
    }
    this.info.push(info);
    return this;
  };

  FrameworkConfiguration.prototype._addNormalizedPlugin = function _addNormalizedPlugin(name, config) {
    var _this6 = this;

    var plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
    this.info.push(plugin);

    this.preTask(function () {
      var relativeTo = [name, _this6.bootstrapperName];
      plugin.moduleId = name;
      plugin.resourcesRelativeTo = relativeTo;
      return Promise.resolve();
    });

    return this;
  };

  FrameworkConfiguration.prototype.defaultBindingLanguage = function defaultBindingLanguage() {
    return this._addNormalizedPlugin('aurelia-templating-binding');
  };

  FrameworkConfiguration.prototype.router = function router() {
    return this._addNormalizedPlugin('aurelia-templating-router');
  };

  FrameworkConfiguration.prototype.history = function history() {
    return this._addNormalizedPlugin('aurelia-history-browser');
  };

  FrameworkConfiguration.prototype.defaultResources = function defaultResources() {
    return this._addNormalizedPlugin('aurelia-templating-resources');
  };

  FrameworkConfiguration.prototype.eventAggregator = function eventAggregator() {
    return this._addNormalizedPlugin('aurelia-event-aggregator');
  };

  FrameworkConfiguration.prototype.basicConfiguration = function basicConfiguration() {
    return this.defaultBindingLanguage().defaultResources().eventAggregator();
  };

  FrameworkConfiguration.prototype.standardConfiguration = function standardConfiguration() {
    return this.basicConfiguration().history().router();
  };

  FrameworkConfiguration.prototype.developmentLogging = function developmentLogging(level) {
    var _this7 = this;

    var logLevel = level ? aurelia_logging__WEBPACK_IMPORTED_MODULE_0__["logLevel"][level] : undefined;

    if (logLevel === undefined) {
      logLevel = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__["logLevel"].debug;
    }

    this.preTask(function () {
      return _this7.aurelia.loader.normalize('aurelia-logging-console', _this7.bootstrapperName).then(function (name) {
        return _this7.aurelia.loader.loadModule(name).then(function (m) {
          aurelia_logging__WEBPACK_IMPORTED_MODULE_0__["addAppender"](new m.ConsoleAppender());
          aurelia_logging__WEBPACK_IMPORTED_MODULE_0__["setLevel"](logLevel);
        });
      });
    });

    return this;
  };

  FrameworkConfiguration.prototype.apply = function apply() {
    var _this8 = this;

    if (this.processed) {
      return Promise.resolve();
    }

    return runTasks(this, this.preTasks).then(function () {
      var loader = _this8.aurelia.loader;
      var info = _this8.info;
      var current = void 0;

      var next = function next() {
        current = info.shift();
        if (current) {
          return loadPlugin(_this8, loader, current).then(next);
        }

        _this8.processed = true;
        _this8.configuredPlugins = null;
        return Promise.resolve();
      };

      return next().then(function () {
        return runTasks(_this8, _this8.postTasks);
      });
    });
  };

  return FrameworkConfiguration;
}();













var LogManager = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__;

/***/ }),

/***/ "aurelia-history-browser":
/*!*********************************************************************************************!*\
  !*** ./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js ***!
  \*********************************************************************************************/
/*! exports provided: BrowserHistory, DefaultLinkHandler, LinkHandler, configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserHistory", function() { return BrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLinkHandler", function() { return DefaultLinkHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHandler", function() { return LinkHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var aurelia_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-history */ "eP1p");
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ "70NS");



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var LinkHandler = (function () {
    function LinkHandler() {
    }
    LinkHandler.prototype.activate = function (history) { };
    LinkHandler.prototype.deactivate = function () { };
    return LinkHandler;
}());
var DefaultLinkHandler = (function (_super) {
    __extends(DefaultLinkHandler, _super);
    function DefaultLinkHandler() {
        var _this = _super.call(this) || this;
        _this.handler = function (e) {
            var _a = DefaultLinkHandler.getEventInfo(e), shouldHandleEvent = _a.shouldHandleEvent, href = _a.href;
            if (shouldHandleEvent) {
                e.preventDefault();
                _this.history.navigate(href);
            }
        };
        return _this;
    }
    DefaultLinkHandler.prototype.activate = function (history) {
        if (history._hasPushState) {
            this.history = history;
            aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].addEventListener('click', this.handler, true);
        }
    };
    DefaultLinkHandler.prototype.deactivate = function () {
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].removeEventListener('click', this.handler, true);
    };
    DefaultLinkHandler.getEventInfo = function (event) {
        var $event = event;
        var info = {
            shouldHandleEvent: false,
            href: null,
            anchor: null
        };
        var target = DefaultLinkHandler.findClosestAnchor($event.target);
        if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) {
            return info;
        }
        if (hasAttribute(target, 'download')
            || hasAttribute(target, 'router-ignore')
            || hasAttribute(target, 'data-router-ignore')) {
            return info;
        }
        if ($event.altKey || $event.ctrlKey || $event.metaKey || $event.shiftKey) {
            return info;
        }
        var href = target.getAttribute('href');
        info.anchor = target;
        info.href = href;
        var leftButtonClicked = $event.which === 1;
        var isRelative = href && !(href.charAt(0) === '#' || (/^[a-z]+:/i).test(href));
        info.shouldHandleEvent = leftButtonClicked && isRelative;
        return info;
    };
    DefaultLinkHandler.findClosestAnchor = function (el) {
        while (el) {
            if (el.tagName === 'A') {
                return el;
            }
            el = el.parentNode;
        }
    };
    DefaultLinkHandler.targetIsThisWindow = function (target) {
        var targetWindow = target.getAttribute('target');
        var win = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].global;
        return !targetWindow ||
            targetWindow === win.name ||
            targetWindow === '_self';
    };
    return DefaultLinkHandler;
}(LinkHandler));
var hasAttribute = function (el, attr) { return el.hasAttribute(attr); };

var BrowserHistory = (function (_super) {
    __extends(BrowserHistory, _super);
    function BrowserHistory(linkHandler) {
        var _this = _super.call(this) || this;
        _this._isActive = false;
        _this._checkUrlCallback = _this._checkUrl.bind(_this);
        _this.location = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].location;
        _this.history = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].history;
        _this.linkHandler = linkHandler;
        return _this;
    }
    BrowserHistory.prototype.activate = function (options) {
        if (this._isActive) {
            throw new Error('History has already been activated.');
        }
        var $history = this.history;
        var wantsPushState = !!options.pushState;
        this._isActive = true;
        var normalizedOptions = this.options = Object.assign({}, { root: '/' }, this.options, options);
        var rootUrl = this.root = ('/' + normalizedOptions.root + '/').replace(rootStripper, '/');
        var wantsHashChange = this._wantsHashChange = normalizedOptions.hashChange !== false;
        var hasPushState = this._hasPushState = !!(normalizedOptions.pushState && $history && $history.pushState);
        var eventName;
        if (hasPushState) {
            eventName = 'popstate';
        }
        else if (wantsHashChange) {
            eventName = 'hashchange';
        }
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].addEventListener(eventName, this._checkUrlCallback);
        if (wantsHashChange && wantsPushState) {
            var $location = this.location;
            var atRoot = $location.pathname.replace(/[^\/]$/, '$&/') === rootUrl;
            if (!hasPushState && !atRoot) {
                var fragment = this.fragment = this._getFragment(null, true);
                $location.replace(rootUrl + $location.search + '#' + fragment);
                return true;
            }
            else if (hasPushState && atRoot && $location.hash) {
                var fragment = this.fragment = this._getHash().replace(routeStripper, '');
                $history.replaceState({}, aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].title, rootUrl + fragment + $location.search);
            }
        }
        if (!this.fragment) {
            this.fragment = this._getFragment('');
        }
        this.linkHandler.activate(this);
        if (!normalizedOptions.silent) {
            return this._loadUrl('');
        }
    };
    BrowserHistory.prototype.deactivate = function () {
        var handler = this._checkUrlCallback;
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].removeEventListener('popstate', handler);
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["PLATFORM"].removeEventListener('hashchange', handler);
        this._isActive = false;
        this.linkHandler.deactivate();
    };
    BrowserHistory.prototype.getAbsoluteRoot = function () {
        var $location = this.location;
        var origin = createOrigin($location.protocol, $location.hostname, $location.port);
        return "" + origin + this.root;
    };
    BrowserHistory.prototype.navigate = function (fragment, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.trigger, trigger = _c === void 0 ? true : _c, _d = _b.replace, replace = _d === void 0 ? false : _d;
        var location = this.location;
        if (fragment && absoluteUrl.test(fragment)) {
            location.href = fragment;
            return true;
        }
        if (!this._isActive) {
            return false;
        }
        fragment = this._getFragment(fragment || '');
        if (this.fragment === fragment && !replace) {
            return false;
        }
        this.fragment = fragment;
        var url = this.root + fragment;
        if (fragment === '' && url !== '/') {
            url = url.slice(0, -1);
        }
        if (this._hasPushState) {
            url = url.replace('//', '/');
            this.history[replace ? 'replaceState' : 'pushState']({}, aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].title, url);
        }
        else if (this._wantsHashChange) {
            updateHash(location, fragment, replace);
        }
        else {
            location.assign(url);
        }
        if (trigger) {
            return this._loadUrl(fragment);
        }
        return true;
    };
    BrowserHistory.prototype.navigateBack = function () {
        this.history.back();
    };
    BrowserHistory.prototype.setTitle = function (title) {
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__["DOM"].title = title;
    };
    BrowserHistory.prototype.setState = function (key, value) {
        var $history = this.history;
        var state = Object.assign({}, $history.state);
        var _a = this.location, pathname = _a.pathname, search = _a.search, hash = _a.hash;
        state[key] = value;
        $history.replaceState(state, null, "" + pathname + search + hash);
    };
    BrowserHistory.prototype.getState = function (key) {
        var state = Object.assign({}, this.history.state);
        return state[key];
    };
    BrowserHistory.prototype.getHistoryIndex = function () {
        var historyIndex = this.getState('HistoryIndex');
        if (historyIndex === undefined) {
            historyIndex = this.history.length - 1;
            this.setState('HistoryIndex', historyIndex);
        }
        return historyIndex;
    };
    BrowserHistory.prototype.go = function (movement) {
        this.history.go(movement);
    };
    BrowserHistory.prototype._getHash = function () {
        return this.location.hash.substr(1);
    };
    BrowserHistory.prototype._getFragment = function (fragment, forcePushState) {
        var rootUrl;
        if (!fragment) {
            if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                var location_1 = this.location;
                fragment = location_1.pathname + location_1.search;
                rootUrl = this.root.replace(trailingSlash, '');
                if (!fragment.indexOf(rootUrl)) {
                    fragment = fragment.substr(rootUrl.length);
                }
            }
            else {
                fragment = this._getHash();
            }
        }
        return '/' + fragment.replace(routeStripper, '');
    };
    BrowserHistory.prototype._checkUrl = function () {
        var current = this._getFragment('');
        if (current !== this.fragment) {
            this._loadUrl('');
        }
    };
    BrowserHistory.prototype._loadUrl = function (fragmentOverride) {
        var fragment = this.fragment = this._getFragment(fragmentOverride);
        return this.options.routeHandler ?
            this.options.routeHandler(fragment) :
            false;
    };
    BrowserHistory.inject = [LinkHandler];
    return BrowserHistory;
}(aurelia_history__WEBPACK_IMPORTED_MODULE_0__["History"]));
var routeStripper = /^#?\/*|\s+$/g;
var rootStripper = /^\/+|\/+$/g;
var trailingSlash = /\/$/;
var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;
function updateHash($location, fragment, replace) {
    if (replace) {
        var href = $location.href.replace(/(javascript:|#).*$/, '');
        $location.replace(href + '#' + fragment);
    }
    else {
        $location.hash = '#' + fragment;
    }
}
function createOrigin(protocol, hostname, port) {
    return protocol + "//" + hostname + (port ? ':' + port : '');
}

function configure(config) {
    var $config = config;
    $config.singleton(aurelia_history__WEBPACK_IMPORTED_MODULE_0__["History"], BrowserHistory);
    $config.transient(LinkHandler, DefaultLinkHandler);
}


//# sourceMappingURL=aurelia-history-browser.js.map


/***/ }),

/***/ "aurelia-logging-console":
/*!*********************************************************************************************!*\
  !*** ./node_modules/aurelia-logging-console/dist/native-modules/aurelia-logging-console.js ***!
  \*********************************************************************************************/
/*! exports provided: ConsoleAppender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleAppender", function() { return ConsoleAppender; });


var ConsoleAppender = function () {
  function ConsoleAppender() {
    
  }

  ConsoleAppender.prototype.debug = function debug(logger) {
    var _console;

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    (_console = console).debug.apply(_console, ["DEBUG [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.info = function info(logger) {
    var _console2;

    for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    (_console2 = console).info.apply(_console2, ["INFO [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.warn = function warn(logger) {
    var _console3;

    for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      rest[_key3 - 1] = arguments[_key3];
    }

    (_console3 = console).warn.apply(_console3, ["WARN [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.error = function error(logger) {
    var _console4;

    for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      rest[_key4 - 1] = arguments[_key4];
    }

    (_console4 = console).error.apply(_console4, ["ERROR [" + logger.id + "]"].concat(rest));
  };

  return ConsoleAppender;
}();

/***/ }),

/***/ "eP1p":
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-history/dist/native-modules/aurelia-history.js ***!
  \*****************************************************************************/
/*! exports provided: History */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });


function mi(name) {
  throw new Error('History must implement ' + name + '().');
}

var History = function () {
  function History() {
    
  }

  History.prototype.activate = function activate(options) {
    mi('activate');
  };

  History.prototype.deactivate = function deactivate() {
    mi('deactivate');
  };

  History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
    mi('getAbsoluteRoot');
  };

  History.prototype.navigate = function navigate(fragment, options) {
    mi('navigate');
  };

  History.prototype.navigateBack = function navigateBack() {
    mi('navigateBack');
  };

  History.prototype.setTitle = function setTitle(title) {
    mi('setTitle');
  };

  History.prototype.setState = function setState(key, value) {
    mi('setState');
  };

  History.prototype.getState = function getState(key) {
    mi('getState');
  };

  History.prototype.getHistoryIndex = function getHistoryIndex() {
    mi('getHistoryIndex');
  };

  History.prototype.go = function go(movement) {
    mi('go');
  };

  return History;
}();

/***/ })

}]);
//# sourceMappingURL=vendors~556c66f2.39f2a3e850909dc817f3.bundle.map