require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/app.tsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/app.tsx ***!
  \***************************************************************************************************/
/*! exports provided: dvaApp, store, getApp, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dvaApp */
/* unused harmony export store */
/* unused harmony export getApp */
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_dva__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/dva */ "./src/utils/dva.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











var dvaApp = _utils_dva__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].createApp({
  initialState: {},
  models: _models__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
  // enableLog: process.env.NODE_ENV !== 'production'
  enableLog: false
});
var store = dvaApp.getStore();
var getApp = function getApp() {
  return dvaApp;
};
_tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.getDvaApp = getApp;
_tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.dvaApp = dvaApp;

var App = /*#__PURE__*/function (_React$Component) {
  Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(App, _React$Component);

  var _super = Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App);

  function App() {
    Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "onLaunch",
    value: function onLaunch() {
      // 展示本地存储能力
      var logs = wx.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      wx.setStorageSync("logs", logs); // 登录

      wx.login({
        success: function success(res) {
          console.log("进入login函数", res);

          if (res.code) {
            wx.request({
              // url: "http://localhost:8080/wx/login",
              url: "http://159.75.52.36:8080/wx/login",
              data: {
                code: res.code,
                wxUserVo: {
                  gender: 0,
                  parentOpenid: "",
                  sign: "316419CD5A933DD552F21A978190C098",
                  userId: 1817,
                  smallSource: 0
                }
              },
              method: "POST",
              header: {
                "content-type": "application/json"
              },
              success: function success(res) {
                console.log("res==", res);

                if (res.code) {
                  var openid = res.data.openid;
                  wx.getUserInfo({
                    success: function success(res) {
                      // 保存用户信息到服务端
                      wx.request({
                        // url: "http://localhost:8080/wx/getUserInfo",
                        url: "http://159.75.52.36:8080/wx/getUserInfo",
                        data: {
                          userInfo: res.userInfo,
                          openid: openid
                        },
                        method: "POST",
                        header: {
                          "content-type": "application/json"
                        },
                        success: function success(res) {
                          console.log("success");
                        },
                        fail: function fail(error) {
                          console.log(error);
                        }
                      });
                    }
                  });
                } else {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.reLaunch({
                    url: "/pages/login/index"
                  });
                }
              },
              fail: function fail(error) {
                console.log(error);
              }
            });
          } else {
            console.log("error code " + res.errMsg);
          }
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// wx.onAppRoute(function(res) {
      //   Taro.eventCenter.trigger("userCenterHide");
      // });
      // console.log(Taro.getMenuButtonBoundingClientRect());
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_5__[/* Provider */ "a"], {
        store: store,
        children: this.props.children
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/dva-core/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/dva-core/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: saga, create, utils */
/*! exports used: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* unused harmony export utils */
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(is_plain_object__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! warning */ "./node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var flatten__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flatten */ "./node_modules/flatten/index.js");
/* harmony import */ var flatten__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flatten__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! global/window */ "./node_modules/global/window.js");
/* harmony import */ var global_window__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(global_window__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14__);


















var isArray = Array.isArray.bind(Array);
var isFunction = function isFunction(o) {
  return typeof o === 'function';
};
var returnSelf = function returnSelf(m) {
  return m;
};
var noop = function noop() {};
var findIndex = function findIndex(array, predicate) {
  for (var i = 0, length = array.length; i < length; i += 1) {
    if (predicate(array[i], i)) return i;
  }

  return -1;
};

var utils = /*#__PURE__*/Object.freeze({
  isPlainObject: is_plain_object__WEBPACK_IMPORTED_MODULE_5___default.a,
  isArray: isArray,
  isFunction: isFunction,
  returnSelf: returnSelf,
  noop: noop,
  findIndex: findIndex
});

function checkModel(model, existModels) {
  var namespace = model.namespace,
      reducers = model.reducers,
      effects = model.effects,
      subscriptions = model.subscriptions; // namespace 必须被定义

  invariant__WEBPACK_IMPORTED_MODULE_3___default()(namespace, "[app.model] namespace should be defined"); // 并且是字符串

  invariant__WEBPACK_IMPORTED_MODULE_3___default()(typeof namespace === 'string', "[app.model] namespace should be string, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(namespace))); // 并且唯一

  invariant__WEBPACK_IMPORTED_MODULE_3___default()(!existModels.some(function (model) {
    return model.namespace === namespace;
  }), "[app.model] namespace should be unique"); // state 可以为任意值
  // reducers 可以为空，PlainObject 或者数组

  if (reducers) {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(reducers) || isArray(reducers), "[app.model] reducers should be plain object or array, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(reducers))); // 数组的 reducers 必须是 [Object, Function] 的格式

    invariant__WEBPACK_IMPORTED_MODULE_3___default()(!isArray(reducers) || is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(reducers[0]) && isFunction(reducers[1]), "[app.model] reducers with array should be [Object, Function]");
  } // effects 可以为空，PlainObject


  if (effects) {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(effects), "[app.model] effects should be plain object, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(effects)));
  }

  if (subscriptions) {
    // subscriptions 可以为空，PlainObject
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(subscriptions), "[app.model] subscriptions should be plain object, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(subscriptions))); // subscription 必须为函数

    invariant__WEBPACK_IMPORTED_MODULE_3___default()(isAllFunction(subscriptions), "[app.model] subscription should be function");
  }
}

function isAllFunction(obj) {
  return Object.keys(obj).every(function (key) {
    return isFunction(obj[key]);
  });
}

var NAMESPACE_SEP = '/';

function prefix(obj, namespace, type) {
  return Object.keys(obj).reduce(function (memo, key) {
    warning__WEBPACK_IMPORTED_MODULE_8___default()(key.indexOf("".concat(namespace).concat(NAMESPACE_SEP)) !== 0, "[prefixNamespace]: ".concat(type, " ").concat(key, " should not be prefixed with namespace ").concat(namespace));
    var newKey = "".concat(namespace).concat(NAMESPACE_SEP).concat(key);
    memo[newKey] = obj[key];
    return memo;
  }, {});
}

function prefixNamespace(model) {
  var namespace = model.namespace,
      reducers = model.reducers,
      effects = model.effects;

  if (reducers) {
    if (isArray(reducers)) {
      // 需要复制一份，不能直接修改 model.reducers[0], 会导致微前端场景下，重复添加前缀
      var _reducers = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(reducers),
          reducer = _reducers[0],
          rest = _reducers.slice(1);

      model.reducers = [prefix(reducer, namespace, 'reducer')].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(rest));
    } else {
      model.reducers = prefix(reducers, namespace, 'reducer');
    }
  }

  if (effects) {
    model.effects = prefix(effects, namespace, 'effect');
  }

  return model;
}

var hooks = ['onError', 'onStateChange', 'onAction', 'onHmr', 'onReducer', 'onEffect', 'extraReducers', 'extraEnhancers', '_handleActions'];
function filterHooks(obj) {
  return Object.keys(obj).reduce(function (memo, key) {
    if (hooks.indexOf(key) > -1) {
      memo[key] = obj[key];
    }

    return memo;
  }, {});
}

var Plugin =
/*#__PURE__*/
function () {
  function Plugin() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(this, Plugin);

    this._handleActions = null;
    this.hooks = hooks.reduce(function (memo, key) {
      memo[key] = [];
      return memo;
    }, {});
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Plugin, [{
    key: "use",
    value: function use(plugin) {
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(is_plain_object__WEBPACK_IMPORTED_MODULE_5___default()(plugin), 'plugin.use: plugin should be plain object');
      var hooks = this.hooks;

      for (var key in plugin) {
        if (Object.prototype.hasOwnProperty.call(plugin, key)) {
          invariant__WEBPACK_IMPORTED_MODULE_3___default()(hooks[key], "plugin.use: unknown plugin property: ".concat(key));

          if (key === '_handleActions') {
            this._handleActions = plugin[key];
          } else if (key === 'extraEnhancers') {
            hooks[key] = plugin[key];
          } else {
            hooks[key].push(plugin[key]);
          }
        }
      }
    }
  }, {
    key: "apply",
    value: function apply(key, defaultHandler) {
      var hooks = this.hooks;
      var validApplyHooks = ['onError', 'onHmr'];
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(validApplyHooks.indexOf(key) > -1, "plugin.apply: hook ".concat(key, " cannot be applied"));
      var fns = hooks[key];
      return function () {
        if (fns.length) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = fns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var fn = _step.value;
              fn.apply(void 0, arguments);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else if (defaultHandler) {
          defaultHandler.apply(void 0, arguments);
        }
      };
    }
  }, {
    key: "get",
    value: function get(key) {
      var hooks = this.hooks;
      invariant__WEBPACK_IMPORTED_MODULE_3___default()(key in hooks, "plugin.get: hook ".concat(key, " cannot be got"));

      if (key === 'extraReducers') {
        return getExtraReducers(hooks[key]);
      } else if (key === 'onReducer') {
        return getOnReducer(hooks[key]);
      } else {
        return hooks[key];
      }
    }
  }]);

  return Plugin;
}();

function getExtraReducers(hook) {
  var ret = {};
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = hook[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var reducerObj = _step2.value;
      ret = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, ret, reducerObj);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return ret;
}

function getOnReducer(hook) {
  return function (reducer) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = hook[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var reducerEnhancer = _step3.value;
        reducer = reducerEnhancer(reducer);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return reducer;
  };
}

function createStore (_ref) {
  var reducers = _ref.reducers,
      initialState = _ref.initialState,
      plugin = _ref.plugin,
      sagaMiddleware = _ref.sagaMiddleware,
      promiseMiddleware = _ref.promiseMiddleware,
      _ref$createOpts$setup = _ref.createOpts.setupMiddlewares,
      setupMiddlewares = _ref$createOpts$setup === void 0 ? returnSelf : _ref$createOpts$setup;
  // extra enhancers
  var extraEnhancers = plugin.get('extraEnhancers');
  invariant__WEBPACK_IMPORTED_MODULE_3___default()(isArray(extraEnhancers), "[app.start] extraEnhancers should be array, but got ".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(extraEnhancers)));
  var extraMiddlewares = plugin.get('onAction');
  var middlewares = setupMiddlewares([promiseMiddleware, sagaMiddleware].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(flatten__WEBPACK_IMPORTED_MODULE_11___default()(extraMiddlewares))));
  var composeEnhancers =  false ? undefined : redux__WEBPACK_IMPORTED_MODULE_1__[/* compose */ "c"];
  var enhancers = [redux__WEBPACK_IMPORTED_MODULE_1__[/* applyMiddleware */ "a"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(middlewares))].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(extraEnhancers));
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[/* createStore */ "d"])(reducers, initialState, composeEnhancers.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(enhancers)));
}

function prefixType(type, model) {
  var prefixedType = "".concat(model.namespace).concat(NAMESPACE_SEP).concat(type);
  var typeWithoutAffix = prefixedType.replace(/\/@@[^/]+?$/, '');
  var reducer = Array.isArray(model.reducers) ? model.reducers[0][typeWithoutAffix] : model.reducers && model.reducers[typeWithoutAffix];

  if (reducer || model.effects && model.effects[typeWithoutAffix]) {
    return prefixedType;
  }

  return type;
}

function getSaga(effects$1, model, onError, onEffect) {
  var opts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  return (
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee3() {
      var key;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.keys(effects$1);

            case 1:
              if ((_context3.t1 = _context3.t0()).done) {
                _context3.next = 7;
                break;
              }

              key = _context3.t1.value;

              if (!Object.prototype.hasOwnProperty.call(effects$1, key)) {
                _context3.next = 5;
                break;
              }

              return _context3.delegateYield(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee2() {
                var watcher, task;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        watcher = getWatcher(key, effects$1[key], model, onError, onEffect, opts);
                        _context2.next = 3;
                        return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].fork(watcher);

                      case 3:
                        task = _context2.sent;
                        _context2.next = 6;
                        return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].fork(
                        /*#__PURE__*/
                        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee() {
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take("".concat(model.namespace, "/@@CANCEL_EFFECTS"));

                                case 2:
                                  _context.next = 4;
                                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].cancel(task);

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              })(), "t2", 5);

            case 5:
              _context3.next = 1;
              break;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })
  );
}

function getWatcher(key, _effect, model, onError, onEffect, opts) {
  var _marked =
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(sagaWithCatch);

  var effect = _effect;
  var type = 'takeEvery';
  var ms;
  var delayMs;

  if (Array.isArray(_effect)) {
    var _effect2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(_effect, 1);

    effect = _effect2[0];
    var _opts = _effect[1];

    if (_opts && _opts.type) {
      type = _opts.type;

      if (type === 'throttle') {
        invariant__WEBPACK_IMPORTED_MODULE_3___default()(_opts.ms, 'app.start: opts.ms should be defined if type is throttle');
        ms = _opts.ms;
      }

      if (type === 'poll') {
        invariant__WEBPACK_IMPORTED_MODULE_3___default()(_opts.delay, 'app.start: opts.delay should be defined if type is poll');
        delayMs = _opts.delay;
      }
    }

    invariant__WEBPACK_IMPORTED_MODULE_3___default()(['watcher', 'takeEvery', 'takeLatest', 'throttle', 'poll'].indexOf(type) > -1, 'app.start: effect type should be takeEvery, takeLatest, throttle, poll or watcher');
  }

  function noop() {}

  function sagaWithCatch() {
    var _len,
        args,
        _key,
        _ref,
        _ref$__dva_resolve,
        resolve,
        _ref$__dva_reject,
        reject,
        ret,
        _args4 = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function sagaWithCatch$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            for (_len = _args4.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args4[_key];
            }

            _ref = args.length > 0 ? args[0] : {}, _ref$__dva_resolve = _ref.__dva_resolve, resolve = _ref$__dva_resolve === void 0 ? noop : _ref$__dva_resolve, _ref$__dva_reject = _ref.__dva_reject, reject = _ref$__dva_reject === void 0 ? noop : _ref$__dva_reject;
            _context4.prev = 2;
            _context4.next = 5;
            return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].put({
              type: "".concat(key).concat(NAMESPACE_SEP, "@@start")
            });

          case 5:
            _context4.next = 7;
            return effect.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(args.concat(createEffects(model, opts))));

          case 7:
            ret = _context4.sent;
            _context4.next = 10;
            return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].put({
              type: "".concat(key).concat(NAMESPACE_SEP, "@@end")
            });

          case 10:
            resolve(ret);
            _context4.next = 17;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](2);
            onError(_context4.t0, {
              key: key,
              effectArgs: args
            });

            if (!_context4.t0._dontReject) {
              reject(_context4.t0);
            }

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _marked, null, [[2, 13]]);
  }

  var sagaWithOnEffect = applyOnEffect(onEffect, sagaWithCatch, model, key);

  switch (type) {
    case 'watcher':
      return sagaWithCatch;

    case 'takeLatest':
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee4() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee4$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].takeLatest(key, sagaWithOnEffect);

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee4);
        })
      );

    case 'throttle':
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee5() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee5$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].throttle(ms, key, sagaWithOnEffect);

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee5);
        })
      );

    case 'poll':
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee6() {
          var _marked2, delay, pollSagaWorker, call, take, race, action;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee6$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  pollSagaWorker = function _ref3(sagaEffects, action) {
                    var call;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function pollSagaWorker$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            call = sagaEffects.call;

                          case 1:

                            _context7.next = 4;
                            return call(sagaWithOnEffect, action);

                          case 4:
                            _context7.next = 6;
                            return call(delay, delayMs);

                          case 6:
                            _context7.next = 1;
                            break;

                          case 8:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _marked2);
                  };

                  delay = function _ref2(timeout) {
                    return new Promise(function (resolve) {
                      return setTimeout(resolve, timeout);
                    });
                  };

                  _marked2 =
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(pollSagaWorker);
                  call = redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].call, take = redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take, race = redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].race;

                case 4:

                  _context8.next = 7;
                  return take("".concat(key, "-start"));

                case 7:
                  action = _context8.sent;
                  _context8.next = 10;
                  return race([call(pollSagaWorker, redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"], action), take("".concat(key, "-stop"))]);

                case 10:
                  _context8.next = 4;
                  break;

                case 12:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee6);
        })
      );

    default:
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.mark(function _callee7() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_14___default.a.wrap(function _callee7$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].takeEvery(key, sagaWithOnEffect);

                case 2:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee7);
        })
      );
  }
}

function createEffects(model, opts) {
  function assertAction(type, name) {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(type, 'dispatch: action should be a plain Object with type');
    var _opts$namespacePrefix = opts.namespacePrefixWarning,
        namespacePrefixWarning = _opts$namespacePrefix === void 0 ? true : _opts$namespacePrefix;

    if (namespacePrefixWarning) {
      warning__WEBPACK_IMPORTED_MODULE_8___default()(type.indexOf("".concat(model.namespace).concat(NAMESPACE_SEP)) !== 0, "[".concat(name, "] ").concat(type, " should not be prefixed with namespace ").concat(model.namespace));
    }
  }

  function put(action) {
    var type = action.type;
    assertAction(type, 'sagaEffects.put');
    return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].put(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, action, {
      type: prefixType(type, model)
    }));
  } // The operator `put` doesn't block waiting the returned promise to resolve.
  // Using `put.resolve` will wait until the promsie resolve/reject before resuming.
  // It will be helpful to organize multi-effects in order,
  // and increase the reusability by seperate the effect in stand-alone pieces.
  // https://github.com/redux-saga/redux-saga/issues/336


  function putResolve(action) {
    var type = action.type;
    assertAction(type, 'sagaEffects.put.resolve');
    return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].put.resolve(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, action, {
      type: prefixType(type, model)
    }));
  }

  put.resolve = putResolve;

  function take(type) {
    if (typeof type === 'string') {
      assertAction(type, 'sagaEffects.take');
      return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take(prefixType(type, model));
    } else if (Array.isArray(type)) {
      return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take(type.map(function (t) {
        if (typeof t === 'string') {
          assertAction(t, 'sagaEffects.take');
          return prefixType(t, model);
        }

        return t;
      }));
    } else {
      return redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"].take(type);
    }
  }

  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"], {
    put: put,
    take: take
  });
}

function applyOnEffect(fns, effect, model, key) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = fns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var fn = _step.value;
      effect = fn(effect, redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* effects */ "b"], model, key);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return effect;
}

function identify(value) {
  return value;
}

function handleAction(actionType) {
  var reducer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identify;
  return function (state, action) {
    var type = action.type;
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(type, 'dispatch: action should be a plain Object with type');

    if (actionType === type) {
      return reducer(state, action);
    }

    return state;
  };
}

function reduceReducers() {
  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (previous, current) {
    return reducers.reduce(function (p, r) {
      return r(p, current);
    }, previous);
  };
}

function handleActions(handlers, defaultState) {
  var reducers = Object.keys(handlers).map(function (type) {
    return handleAction(type, handlers[type]);
  });
  var reducer = reduceReducers.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(reducers));
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    return reducer(state, action);
  };
}

function getReducer(reducers, state, handleActions$1) {
  // Support reducer enhancer
  // e.g. reducers: [realReducers, enhancer]
  if (Array.isArray(reducers)) {
    return reducers[1]((handleActions$1 || handleActions)(reducers[0], state));
  } else {
    return (handleActions$1 || handleActions)(reducers || {}, state);
  }
}

function createPromiseMiddleware(app) {
  return function () {
    return function (next) {
      return function (action) {
        var type = action.type;

        if (isEffect(type)) {
          return new Promise(function (resolve, reject) {
            next(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
              __dva_resolve: resolve,
              __dva_reject: reject
            }, action));
          });
        } else {
          return next(action);
        }
      };
    };
  };

  function isEffect(type) {
    if (!type || typeof type !== 'string') return false;

    var _type$split = type.split(NAMESPACE_SEP),
        _type$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(_type$split, 1),
        namespace = _type$split2[0];

    var model = app._models.filter(function (m) {
      return m.namespace === namespace;
    })[0];

    if (model) {
      if (model.effects && model.effects[type]) {
        return true;
      }
    }

    return false;
  }
}

function prefixedDispatch(dispatch, model) {
  return function (action) {
    var type = action.type;
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(type, 'dispatch: action should be a plain Object with type');
    warning__WEBPACK_IMPORTED_MODULE_8___default()(type.indexOf("".concat(model.namespace).concat(NAMESPACE_SEP)) !== 0, "dispatch: ".concat(type, " should not be prefixed with namespace ").concat(model.namespace));
    return dispatch(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, action, {
      type: prefixType(type, model)
    }));
  };
}

function run(subs, model, app, onError) {
  var funcs = [];
  var nonFuncs = [];

  for (var key in subs) {
    if (Object.prototype.hasOwnProperty.call(subs, key)) {
      var sub = subs[key];
      var unlistener = sub({
        dispatch: prefixedDispatch(app._store.dispatch, model),
        history: app._history
      }, onError);

      if (isFunction(unlistener)) {
        funcs.push(unlistener);
      } else {
        nonFuncs.push(key);
      }
    }
  }

  return {
    funcs: funcs,
    nonFuncs: nonFuncs
  };
}
function unlisten(unlisteners, namespace) {
  if (!unlisteners[namespace]) return;
  var _unlisteners$namespac = unlisteners[namespace],
      funcs = _unlisteners$namespac.funcs,
      nonFuncs = _unlisteners$namespac.nonFuncs;
  warning__WEBPACK_IMPORTED_MODULE_8___default()(nonFuncs.length === 0, "[app.unmodel] subscription should return unlistener function, check these subscriptions ".concat(nonFuncs.join(', ')));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = funcs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var unlistener = _step.value;
      unlistener();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  delete unlisteners[namespace];
}

var noop$1 = noop,
    findIndex$1 = findIndex; // Internal model to update global state when do unmodel

var dvaModel = {
  namespace: '@@dva',
  state: 0,
  reducers: {
    UPDATE: function UPDATE(state) {
      return state + 1;
    }
  }
};
/**
 * Create dva-core instance.
 *
 * @param hooksAndOpts
 * @param createOpts
 */

function create() {
  var hooksAndOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var createOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var initialReducer = createOpts.initialReducer,
      _createOpts$setupApp = createOpts.setupApp,
      setupApp = _createOpts$setupApp === void 0 ? noop$1 : _createOpts$setupApp;
  var plugin = new Plugin();
  plugin.use(filterHooks(hooksAndOpts));
  var app = {
    _models: [prefixNamespace(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, dvaModel))],
    _store: null,
    _plugin: plugin,
    use: plugin.use.bind(plugin),
    model: model,
    start: start
  };
  return app;
  /**
   * Register model before app is started.
   *
   * @param m {Object} model to register
   */

  function model(m) {
    if (false) {}

    var prefixedModel = prefixNamespace(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, m));

    app._models.push(prefixedModel);

    return prefixedModel;
  }
  /**
   * Inject model after app is started.
   *
   * @param createReducer
   * @param onError
   * @param unlisteners
   * @param m
   */


  function injectModel(createReducer, onError, unlisteners, m) {
    m = model(m);
    var store = app._store;
    store.asyncReducers[m.namespace] = getReducer(m.reducers, m.state, plugin._handleActions);
    store.replaceReducer(createReducer());

    if (m.effects) {
      store.runSaga(app._getSaga(m.effects, m, onError, plugin.get('onEffect'), hooksAndOpts));
    }

    if (m.subscriptions) {
      unlisteners[m.namespace] = run(m.subscriptions, m, app, onError);
    }
  }
  /**
   * Unregister model.
   *
   * @param createReducer
   * @param reducers
   * @param unlisteners
   * @param namespace
   *
   * Unexpected key warn problem:
   * https://github.com/reactjs/redux/issues/1636
   */


  function unmodel(createReducer, reducers, unlisteners, namespace) {
    var store = app._store; // Delete reducers

    delete store.asyncReducers[namespace];
    delete reducers[namespace];
    store.replaceReducer(createReducer());
    store.dispatch({
      type: '@@dva/UPDATE'
    }); // Cancel effects

    store.dispatch({
      type: "".concat(namespace, "/@@CANCEL_EFFECTS")
    }); // Unlisten subscrioptions

    unlisten(unlisteners, namespace); // Delete model from app._models

    app._models = app._models.filter(function (model) {
      return model.namespace !== namespace;
    });
  }
  /**
   * Replace a model if it exsits, if not, add it to app
   * Attention:
   * - Only available after dva.start gets called
   * - Will not check origin m is strict equal to the new one
   * Useful for HMR
   * @param createReducer
   * @param reducers
   * @param unlisteners
   * @param onError
   * @param m
   */


  function replaceModel(createReducer, reducers, unlisteners, onError, m) {
    var store = app._store;
    var namespace = m.namespace;
    var oldModelIdx = findIndex$1(app._models, function (model) {
      return model.namespace === namespace;
    });

    if (~oldModelIdx) {
      // Cancel effects
      store.dispatch({
        type: "".concat(namespace, "/@@CANCEL_EFFECTS")
      }); // Delete reducers

      delete store.asyncReducers[namespace];
      delete reducers[namespace]; // Unlisten subscrioptions

      unlisten(unlisteners, namespace); // Delete model from app._models

      app._models.splice(oldModelIdx, 1);
    } // add new version model to store


    app.model(m);
    store.dispatch({
      type: '@@dva/UPDATE'
    });
  }
  /**
   * Start the app.
   *
   * @returns void
   */


  function start() {
    // Global error handler
    var onError = function onError(err, extension) {
      if (err) {
        if (typeof err === 'string') err = new Error(err);

        err.preventDefault = function () {
          err._dontReject = true;
        };

        plugin.apply('onError', function (err) {
          throw new Error(err.stack || err);
        })(err, app._store.dispatch, extension);
      }
    };

    var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
    var promiseMiddleware = createPromiseMiddleware(app);
    app._getSaga = getSaga.bind(null);
    var sagas = [];

    var reducers = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, initialReducer);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = app._models[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var m = _step.value;
        reducers[m.namespace] = getReducer(m.reducers, m.state, plugin._handleActions);

        if (m.effects) {
          sagas.push(app._getSaga(m.effects, m, onError, plugin.get('onEffect'), hooksAndOpts));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var reducerEnhancer = plugin.get('onReducer');
    var extraReducers = plugin.get('extraReducers');
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(Object.keys(extraReducers).every(function (key) {
      return !(key in reducers);
    }), "[app.start] extraReducers is conflict with other reducers, reducers list: ".concat(Object.keys(reducers).join(', '))); // Create store

    app._store = createStore({
      reducers: createReducer(),
      initialState: hooksAndOpts.initialState || {},
      plugin: plugin,
      createOpts: createOpts,
      sagaMiddleware: sagaMiddleware,
      promiseMiddleware: promiseMiddleware
    });
    var store = app._store; // Extend store

    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {}; // Execute listeners when state is changed

    var listeners = plugin.get('onStateChange');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop = function _loop() {
        var listener = _step2.value;
        store.subscribe(function () {
          listener(store.getState());
        });
      };

      for (var _iterator2 = listeners[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        _loop();
      } // Run sagas

    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    sagas.forEach(sagaMiddleware.run); // Setup app

    setupApp(app); // Run subscriptions

    var unlisteners = {};
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = this._models[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _model = _step3.value;

        if (_model.subscriptions) {
          unlisteners[_model.namespace] = run(_model.subscriptions, _model, app, onError);
        }
      } // Setup app.model and app.unmodel

    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    app.model = injectModel.bind(app, createReducer, onError, unlisteners);
    app.unmodel = unmodel.bind(app, createReducer, reducers, unlisteners);
    app.replaceModel = replaceModel.bind(app, createReducer, reducers, unlisteners, onError);
    /**
     * Create global reducer for redux.
     *
     * @returns {Object}
     */

    function createReducer() {
      return reducerEnhancer(Object(redux__WEBPACK_IMPORTED_MODULE_1__[/* combineReducers */ "b"])(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, reducers, extraReducers, app._store ? app._store.asyncReducers : {})));
    }
  }
}




/***/ }),

/***/ "./node_modules/dva-loading/dist/index.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/dva-loading/dist/index.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");




var SHOW = '@@DVA_LOADING/SHOW';
var HIDE = '@@DVA_LOADING/HIDE';
var NAMESPACE = 'loading';

function createLoading() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var namespace = opts.namespace || NAMESPACE;
  var _opts$only = opts.only,
      only = _opts$only === void 0 ? [] : _opts$only,
      _opts$except = opts.except,
      except = _opts$except === void 0 ? [] : _opts$except;

  if (only.length > 0 && except.length > 0) {
    throw Error('It is ambiguous to configurate `only` and `except` items at the same time.');
  }

  var initialState = {
    global: false,
    models: {},
    effects: {}
  };

  var extraReducers = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, namespace, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

    var _ref = arguments.length > 1 ? arguments[1] : undefined,
        type = _ref.type,
        payload = _ref.payload;

    var _ref2 = payload || {},
        namespace = _ref2.namespace,
        actionType = _ref2.actionType;

    var ret;

    switch (type) {
      case SHOW:
        ret = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state, {
          global: true,
          models: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state.models, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, namespace, true)),
          effects: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state.effects, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, actionType, true))
        });
        break;

      case HIDE:
        {
          var effects = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state.effects, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, actionType, false));

          var models = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state.models, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, namespace, Object.keys(effects).some(function (actionType) {
            var _namespace = actionType.split('/')[0];
            if (_namespace !== namespace) return false;
            return effects[actionType];
          })));

          var global = Object.keys(models).some(function (namespace) {
            return models[namespace];
          });
          ret = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, state, {
            global: global,
            models: models,
            effects: effects
          });
          break;
        }

      default:
        ret = state;
        break;
    }

    return ret;
  });

  function onEffect(effect, _ref3, model, actionType) {
    var put = _ref3.put;
    var namespace = model.namespace;

    if (only.length === 0 && except.length === 0 || only.length > 0 && only.indexOf(actionType) !== -1 || except.length > 0 && except.indexOf(actionType) === -1) {
      return (
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var _args = arguments;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return put({
                    type: SHOW,
                    payload: {
                      namespace: namespace,
                      actionType: actionType
                    }
                  });

                case 2:
                  _context.next = 4;
                  return effect.apply(void 0, _args);

                case 4:
                  _context.next = 6;
                  return put({
                    type: HIDE,
                    payload: {
                      namespace: namespace,
                      actionType: actionType
                    }
                  });

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })
      );
    } else {
      return effect;
    }
  }

  return {
    extraReducers: extraReducers,
    onEffect: onEffect
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createLoading);


/***/ }),

/***/ "./node_modules/flatten/index.js":
/*!***************************************!*\
  !*** ./node_modules/flatten/index.js ***!
  \***************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = function flatten(list, depth) {
  depth = (typeof depth == 'number') ? depth : Infinity;

  if (!depth) {
    if (Array.isArray(list)) {
      return list.map(function(i) { return i; });
    }
    return list;
  }

  return _flatten(list, 1);

  function _flatten(list, d) {
    return list.reduce(function (acc, item) {
      if (Array.isArray(item) && d < depth) {
        return acc.concat(_flatten(item, d + 1));
      }
      else {
        return acc.concat(item);
      }
    }, []);
  }
};


/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window, global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/redux-saga/es/effects.js":
/*!***********************************************!*\
  !*** ./node_modules/redux-saga/es/effects.js ***!
  \***********************************************/
/*! exports provided: take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, takeEvery, takeLatest, throttle */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "put", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _internal_io__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony import */ var _internal_io_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/io-helpers */ "./node_modules/redux-saga/es/internal/io-helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return _internal_io_helpers__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return _internal_io_helpers__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _internal_io_helpers__WEBPACK_IMPORTED_MODULE_1__["c"]; });





/***/ }),

/***/ "./node_modules/redux-saga/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/redux-saga/es/index.js ***!
  \*********************************************/
/*! exports provided: default, runSaga, END, eventChannel, channel, buffers, takeEvery, takeLatest, throttle, delay, CANCEL, detach, effects, utils */
/*! exports used: default, effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/middleware */ "./node_modules/redux-saga/es/internal/middleware.js");
/* harmony import */ var _internal_runSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/runSaga */ "./node_modules/redux-saga/es/internal/runSaga.js");
/* harmony import */ var _internal_channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _internal_buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _internal_sagaHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/sagaHelpers */ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js");
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _internal_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects */ "./node_modules/redux-saga/es/effects.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _effects__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/utils.js");

/* harmony default export */ __webpack_exports__["a"] = (_internal_middleware__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);













/***/ }),

/***/ "./node_modules/redux-saga/es/internal/buffers.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/buffers.js ***!
  \********************************************************/
/*! exports provided: BUFFER_OVERFLOW, buffers */
/*! exports used: buffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BUFFER_OVERFLOW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buffers; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");


var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: _utils__WEBPACK_IMPORTED_MODULE_0__[/* kTrue */ "o"], put: _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"], take: _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"] };

function ringBuffer() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var overflowAction = arguments[1];

  var arr = new Array(limit);
  var length = 0;
  var pushIndex = 0;
  var popIndex = 0;

  var push = function push(it) {
    arr[pushIndex] = it;
    pushIndex = (pushIndex + 1) % limit;
    length++;
  };

  var take = function take() {
    if (length != 0) {
      var it = arr[popIndex];
      arr[popIndex] = null;
      length--;
      popIndex = (popIndex + 1) % limit;
      return it;
    }
  };

  var flush = function flush() {
    var items = [];
    while (length) {
      items.push(take());
    }
    return items;
  };

  return {
    isEmpty: function isEmpty() {
      return length == 0;
    },
    put: function put(it) {
      if (length < limit) {
        push(it);
      } else {
        var doubledLimit = void 0;
        switch (overflowAction) {
          case ON_OVERFLOW_THROW:
            throw new Error(BUFFER_OVERFLOW);
          case ON_OVERFLOW_SLIDE:
            arr[pushIndex] = it;
            pushIndex = (pushIndex + 1) % limit;
            popIndex = pushIndex;
            break;
          case ON_OVERFLOW_EXPAND:
            doubledLimit = 2 * limit;

            arr = flush();

            length = arr.length;
            pushIndex = arr.length;
            popIndex = 0;

            arr.length = doubledLimit;
            limit = doubledLimit;

            push(it);
            break;
          default:
          // DROP
        }
      }
    },
    take: take,
    flush: flush
  };
}

var buffers = {
  none: function none() {
    return zeroBuffer;
  },
  fixed: function fixed(limit) {
    return ringBuffer(limit, ON_OVERFLOW_THROW);
  },
  dropping: function dropping(limit) {
    return ringBuffer(limit, ON_OVERFLOW_DROP);
  },
  sliding: function sliding(limit) {
    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
  },
  expanding: function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  }
};

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/channel.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/channel.js ***!
  \********************************************************/
/*! exports provided: END, isEnd, emitter, INVALID_BUFFER, UNDEFINED_INPUT_ERROR, channel, eventChannel, stdChannel */
/*! exports used: END, emitter, eventChannel, isEnd, stdChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emitter; });
/* unused harmony export INVALID_BUFFER */
/* unused harmony export UNDEFINED_INPUT_ERROR */
/* unused harmony export channel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return eventChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stdChannel; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler */ "./node_modules/redux-saga/es/internal/scheduler.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = { type: CHANNEL_END_TYPE };
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* remove */ "t"])(subscribers, sub);
    };
  }

  function emit(item) {
    var arr = subscribers.slice();
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i](item);
    }
  }

  return {
    subscribe: subscribe,
    emit: emit
  };
}

var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (false) {}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers__WEBPACK_IMPORTED_MODULE_1__[/* buffers */ "a"].fixed();

  var closed = false;
  var takers = [];

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* internalErr */ "m"])('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* internalErr */ "m"])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(input, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[_utils__WEBPACK_IMPORTED_MODULE_0__[/* MATCH */ "b"]] || cb[_utils__WEBPACK_IMPORTED_MODULE_0__[/* MATCH */ "b"]](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(cb, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* remove */ "t"])(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(cb, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, "channel.flush' callback must be a function");
    if (closed && buffer.isEmpty()) {
      cb(END);
      return;
    }
    cb(buffer.flush());
  }

  function close() {
    checkForbiddenStates();
    if (!closed) {
      closed = true;
      if (takers.length) {
        var arr = takers;
        takers = [];
        for (var i = 0, len = arr.length; i < len; i++) {
          arr[i](END);
        }
      }
    }
  }

  return {
    take: take,
    put: put,
    flush: flush,
    close: close,
    get __takers__() {
      return takers;
    },
    get __closed__() {
      return closed;
    }
  };
}

function eventChannel(subscribe) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers__WEBPACK_IMPORTED_MODULE_1__[/* buffers */ "a"].none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(matcher, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, 'Invalid match function passed to eventChannel');
  }

  var chan = channel(buffer);
  var close = function close() {
    if (!chan.__closed__) {
      if (unsubscribe) {
        unsubscribe();
      }
      chan.close();
    }
  };
  var unsubscribe = subscribe(function (input) {
    if (isEnd(input)) {
      close();
      return;
    }
    if (matcher && !matcher(input)) {
      return;
    }
    chan.put(input);
  });
  if (chan.__closed__) {
    unsubscribe();
  }

  if (!_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(unsubscribe)) {
    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
  }

  return {
    take: chan.take,
    flush: chan.flush,
    close: close
  };
}

function stdChannel(subscribe) {
  var chan = eventChannel(function (cb) {
    return subscribe(function (input) {
      if (input[_utils__WEBPACK_IMPORTED_MODULE_0__[/* SAGA_ACTION */ "c"]]) {
        cb(input);
        return;
      }
      Object(_scheduler__WEBPACK_IMPORTED_MODULE_2__[/* asap */ "a"])(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(matcher, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, "channel.take's matcher argument must be a function");
        cb[_utils__WEBPACK_IMPORTED_MODULE_0__[/* MATCH */ "b"]] = matcher;
      }
      chan.take(cb);
    }
  });
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/io-helpers.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/io-helpers.js ***!
  \***********************************************************/
/*! exports provided: takeEvery, takeLatest, throttle */
/*! exports used: takeEvery, takeLatest, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeEvery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return takeLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return throttle; });
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _sagaHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sagaHelpers */ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js");



function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return _io__WEBPACK_IMPORTED_MODULE_0__[/* fork */ "j"].apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__[/* takeEveryHelper */ "a"], patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return _io__WEBPACK_IMPORTED_MODULE_0__[/* fork */ "j"].apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__[/* takeLatestHelper */ "b"], patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len3 = arguments.length, args = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
    args[_key3 - 3] = arguments[_key3];
  }

  return _io__WEBPACK_IMPORTED_MODULE_0__[/* fork */ "j"].apply(undefined, [_sagaHelpers__WEBPACK_IMPORTED_MODULE_1__[/* throttleHelper */ "c"], ms, pattern, worker].concat(args));
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/io.js":
/*!***************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/io.js ***!
  \***************************************************/
/*! exports provided: detach, take, takem, put, all, race, call, apply, cps, fork, spawn, join, cancel, select, actionChannel, cancelled, flush, getContext, setContext, asEffect */
/*! exports used: actionChannel, all, apply, asEffect, call, cancel, cancelled, cps, flush, fork, getContext, join, put, race, select, setContext, spawn, take, takem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export detach */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return takem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return put; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return call; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return cps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return spawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return cancelled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return asEffect; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");


var IO = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* sym */ "u"])('IO');
var TAKE = 'TAKE';
var PUT = 'PUT';
var ALL = 'ALL';
var RACE = 'RACE';
var CALL = 'CALL';
var CPS = 'CPS';
var FORK = 'FORK';
var JOIN = 'JOIN';
var CANCEL = 'CANCEL';
var SELECT = 'SELECT';
var ACTION_CHANNEL = 'ACTION_CHANNEL';
var CANCELLED = 'CANCELLED';
var FLUSH = 'FLUSH';
var GET_CONTEXT = 'GET_CONTEXT';
var SET_CONTEXT = 'SET_CONTEXT';

var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';

var effect = function effect(type, payload) {
  var _ref;

  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
};

var detach = function detach(eff) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(asEffect.fork(eff), _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].object, 'detach(eff): argument must be a fork effect');
  eff[FORK].detached = true;
  return eff;
};

function take() {
  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

  if (arguments.length) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(arguments[0], _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* deprecate */ "k"])(take.maybe, /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* updateIncentive */ "w"])('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'put(channel, action): argument channel is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(action, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'put(channel, action): argument action is undefined');
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'put(action): argument action is undefined');
    action = channel;
    channel = null;
  }
  return effect(PUT, { channel: channel, action: action });
}

put.resolve = function () {
  var eff = put.apply(undefined, arguments);
  eff[PUT].resolve = true;
  return eff;
};

put.sync = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* deprecate */ "k"])(put.resolve, /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* updateIncentive */ "w"])('put.sync', 'put.resolve'));

function all(effects) {
  return effect(ALL, effects);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(fn, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }
  if (context && _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].string(fn) && _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(context[fn])) {
    fn = context[fn];
  }
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(fn, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, meth + ': argument ' + fn + ' is not a function');

  return { context: context, fn: fn, args: args };
}

function call(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return effect(CALL, getFnCallDesc('call', fn, args));
}

function apply(context, fn) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
}

function cps(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return effect(CPS, getFnCallDesc('cps', fn, args));
}

function fork(fn) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return effect(FORK, getFnCallDesc('fork', fn, args));
}

function spawn(fn) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return detach(fork.apply(undefined, [fn].concat(args)));
}

function join() {
  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    tasks[_key5] = arguments[_key5];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return join(t);
    }));
  }
  var task = tasks[0];
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'join(task): argument task is undefined');
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  return effect(JOIN, task);
}

function cancel() {
  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    tasks[_key6] = arguments[_key6];
  }

  if (tasks.length > 1) {
    return all(tasks.map(function (t) {
      return cancel(t);
    }));
  }
  var task = tasks[0];
  if (tasks.length === 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'cancel(task): argument task is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(task, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }
  return effect(CANCEL, task || _utils__WEBPACK_IMPORTED_MODULE_0__[/* SELF_CANCELLATION */ "d"]);
}

function select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = _utils__WEBPACK_IMPORTED_MODULE_0__[/* ident */ "l"];
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(selector, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'select(selector,[...]): argument selector is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(selector, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(pattern, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(buffer, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(channel, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function getContext(prop) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(prop, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].string, 'getContext(prop): argument ' + prop + ' is not a string');
  return effect(GET_CONTEXT, prop);
}

function setContext(props) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(props, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].object, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* createSetContextWarning */ "h"])(null, props));
  return effect(SET_CONTEXT, props);
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = {
  take: /*#__PURE__*/createAsEffectType(TAKE),
  put: /*#__PURE__*/createAsEffectType(PUT),
  all: /*#__PURE__*/createAsEffectType(ALL),
  race: /*#__PURE__*/createAsEffectType(RACE),
  call: /*#__PURE__*/createAsEffectType(CALL),
  cps: /*#__PURE__*/createAsEffectType(CPS),
  fork: /*#__PURE__*/createAsEffectType(FORK),
  join: /*#__PURE__*/createAsEffectType(JOIN),
  cancel: /*#__PURE__*/createAsEffectType(CANCEL),
  select: /*#__PURE__*/createAsEffectType(SELECT),
  actionChannel: /*#__PURE__*/createAsEffectType(ACTION_CHANNEL),
  cancelled: /*#__PURE__*/createAsEffectType(CANCELLED),
  flush: /*#__PURE__*/createAsEffectType(FLUSH),
  getContext: /*#__PURE__*/createAsEffectType(GET_CONTEXT),
  setContext: /*#__PURE__*/createAsEffectType(SET_CONTEXT)
};

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/middleware.js":
/*!***********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/middleware.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sagaMiddlewareFactory; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _runSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runSaga */ "./node_modules/redux-saga/es/internal/runSaga.js");
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






function sagaMiddlewareFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$context = _ref.context,
      context = _ref$context === undefined ? {} : _ref$context,
      options = _objectWithoutProperties(_ref, ['context']);

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;


  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(options)) {
    if (true) {
      throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
    } else {}
  }

  if (logger && !_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(logger)) {
    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
  }

  if (false) {}

  if (onError && !_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(onError)) {
    throw new Error('`options.onError` passed to the Saga middleware is not a function!');
  }

  if (options.emitter && !_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(options.emitter)) {
    throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
  }

  function sagaMiddleware(_ref2) {
    var getState = _ref2.getState,
        dispatch = _ref2.dispatch;

    var sagaEmitter = Object(_channel__WEBPACK_IMPORTED_MODULE_1__[/* emitter */ "b"])();
    sagaEmitter.emit = (options.emitter || _utils__WEBPACK_IMPORTED_MODULE_0__[/* ident */ "l"])(sagaEmitter.emit);

    sagaMiddleware.run = _runSaga__WEBPACK_IMPORTED_MODULE_2__[/* runSaga */ "a"].bind(null, {
      context: context,
      subscribe: sagaEmitter.subscribe,
      dispatch: dispatch,
      getState: getState,
      sagaMonitor: sagaMonitor,
      logger: logger,
      onError: onError
    });

    return function (next) {
      return function (action) {
        if (sagaMonitor && sagaMonitor.actionDispatched) {
          sagaMonitor.actionDispatched(action);
        }
        var result = next(action); // hit reducers
        sagaEmitter.emit(action);
        return result;
      };
    };
  }

  sagaMiddleware.run = function () {
    throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
  };

  sagaMiddleware.setContext = function (props) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(props, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].object, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* createSetContextWarning */ "h"])('sagaMiddleware', props));
    _utils__WEBPACK_IMPORTED_MODULE_0__[/* object */ "s"].assign(context, props);
  };

  return sagaMiddleware;
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/proc.js":
/*!*****************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/proc.js ***!
  \*****************************************************/
/*! exports provided: NOT_ITERATOR_ERROR, CHANNEL_END, TASK_CANCEL, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NOT_ITERATOR_ERROR */
/* unused harmony export CHANNEL_END */
/* unused harmony export TASK_CANCEL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return proc; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler */ "./node_modules/redux-saga/es/internal/scheduler.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }







var NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator';

var CHANNEL_END = {
  toString: function toString() {
    return '@@redux-saga/CHANNEL_END';
  }
};
var TASK_CANCEL = {
  toString: function toString() {
    return '@@redux-saga/TASK_CANCEL';
  }
};

var matchers = {
  wildcard: function wildcard() {
    return _utils__WEBPACK_IMPORTED_MODULE_0__[/* kTrue */ "o"];
  },
  default: function _default(pattern) {
    return (typeof pattern === 'undefined' ? 'undefined' : _typeof(pattern)) === 'symbol' ? function (input) {
      return input.type === pattern;
    } : function (input) {
      return input.type === String(pattern);
    };
  },
  array: function array(patterns) {
    return function (input) {
      return patterns.some(function (p) {
        return matcher(p)(input);
      });
    };
  },
  predicate: function predicate(_predicate) {
    return function (input) {
      return _predicate(input);
    };
  }
};

function matcher(pattern) {
  // prettier-ignore
  return (pattern === '*' ? matchers.wildcard : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(pattern) ? matchers.array : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].stringableFunc(pattern) ? matchers.default : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(pattern) ? matchers.predicate : matchers.default)(pattern);
}

/**
  Used to track a parent task and its forks
  In the new fork model, forked tasks are attached by default to their parent
  We model this using the concept of Parent task && main Task
  main task is the main flow of the current Generator, the parent tasks is the
  aggregation of the main tasks + all its forked tasks.
  Thus the whole model represents an execution tree with multiple branches (vs the
  linear execution tree in sequential (non parallel) programming)

  A parent tasks has the following semantics
  - It completes if all its forks either complete or all cancelled
  - If it's cancelled, all forks are cancelled as well
  - It aborts if any uncaught error bubbles up from forks
  - If it completes, the return value is the one returned by the main task
**/
function forkQueue(name, mainTask, cb) {
  var tasks = [],
      result = void 0,
      completed = false;
  addTask(mainTask);

  function abort(err) {
    cancelAll();
    cb(err, true);
  }

  function addTask(task) {
    tasks.push(task);
    task.cont = function (res, isErr) {
      if (completed) {
        return;
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* remove */ "t"])(tasks, task);
      task.cont = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
      if (isErr) {
        abort(res);
      } else {
        if (task === mainTask) {
          result = res;
        }
        if (!tasks.length) {
          completed = true;
          cb(result);
        }
      }
    };
    // task.cont.cancel = task.cancel
  }

  function cancelAll() {
    if (completed) {
      return;
    }
    completed = true;
    tasks.forEach(function (t) {
      t.cont = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
      t.cancel();
    });
    tasks = [];
  }

  return {
    addTask: addTask,
    cancelAll: cancelAll,
    abort: abort,
    getTasks: function getTasks() {
      return tasks;
    },
    taskNames: function taskNames() {
      return tasks.map(function (t) {
        return t.name;
      });
    }
  };
}

function createTaskIterator(_ref) {
  var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(fn)) {
    return fn;
  }

  // catch synchronous failures; see #152 and #441
  var result = void 0,
      error = void 0;
  try {
    result = fn.apply(context, args);
  } catch (err) {
    error = err;
  }

  // i.e. a generator function returns an iterator
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(result)) {
    return result;
  }

  // do not bubble up synchronous failures for detached forks
  // instead create a failed task. See #152 and #441
  return error ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* makeIterator */ "q"])(function () {
    throw error;
  }) : Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* makeIterator */ "q"])(function () {
    var pc = void 0;
    var eff = { done: false, value: result };
    var ret = function ret(value) {
      return { done: true, value: value };
    };
    return function (arg) {
      if (!pc) {
        pc = true;
        return eff;
      } else {
        return ret(arg);
      }
    };
  }());
}

var wrapHelper = function wrapHelper(helper) {
  return { fn: helper };
};

function proc(iterator) {
  var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
  };
  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
  var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
  var parentContext = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var parentEffectId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var name = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'anonymous';
  var cont = arguments[8];

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(iterator, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator, NOT_ITERATOR_ERROR);

  var effectsString = '[...effects]';
  var runParallelEffect = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* deprecate */ "k"])(runAllEffect, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* updateIncentive */ "w"])(effectsString, 'all(' + effectsString + ')'));

  var sagaMonitor = options.sagaMonitor,
      logger = options.logger,
      onError = options.onError;

  var log = logger || _utils__WEBPACK_IMPORTED_MODULE_0__[/* log */ "p"];
  var logError = function logError(err) {
    var message = err.sagaStack;

    if (!message && err.stack) {
      message = err.stack.split('\n')[0].indexOf(err.message) !== -1 ? err.stack : 'Error: ' + err.message + '\n' + err.stack;
    }

    log('error', 'uncaught at ' + name, message || err.message || err);
  };
  var stdChannel = Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* stdChannel */ "e"])(subscribe);
  var taskContext = Object.create(parentContext);
  /**
    Tracks the current effect cancellation
    Each time the generator progresses. calling runEffect will set a new value
    on it. It allows propagating cancellation to child effects
  **/
  next.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];

  /**
    Creates a new task descriptor for this generator, We'll also create a main task
    to track the main flow (besides other forked tasks)
  **/
  var task = newTask(parentEffectId, name, iterator, cont);
  var mainTask = { name: name, cancel: cancelMain, isRunning: true };
  var taskQueue = forkQueue(name, mainTask, end);

  /**
    cancellation of the main task. We'll simply resume the Generator with a Cancel
  **/
  function cancelMain() {
    if (mainTask.isRunning && !mainTask.isCancelled) {
      mainTask.isCancelled = true;
      next(TASK_CANCEL);
    }
  }

  /**
    This may be called by a parent generator to trigger/propagate cancellation
    cancel all pending tasks (including the main task), then end the current task.
     Cancellation propagates down to the whole execution tree holded by this Parent task
    It's also propagated to all joiners of this task and their execution tree/joiners
     Cancellation is noop for terminated/Cancelled tasks tasks
  **/
  function cancel() {
    /**
      We need to check both Running and Cancelled status
      Tasks can be Cancelled but still Running
    **/
    if (iterator._isRunning && !iterator._isCancelled) {
      iterator._isCancelled = true;
      taskQueue.cancelAll();
      /**
        Ending with a Never result will propagate the Cancellation to all joiners
      **/
      end(TASK_CANCEL);
    }
  }
  /**
    attaches cancellation logic to this task's continuation
    this will permit cancellation to propagate down the call chain
  **/
  cont && (cont.cancel = cancel);

  // tracks the running status
  iterator._isRunning = true;

  // kicks up the generator
  next();

  // then return the task descriptor to the caller
  return task;

  /**
    This is the generator driver
    It's a recursive async/continuation function which calls itself
    until the generator terminates or throws
  **/
  function next(arg, isErr) {
    // Preventive measure. If we end up here, then there is really something wrong
    if (!mainTask.isRunning) {
      throw new Error('Trying to resume an already finished generator');
    }

    try {
      var result = void 0;
      if (isErr) {
        result = iterator.throw(arg);
      } else if (arg === TASK_CANCEL) {
        /**
          getting TASK_CANCEL automatically cancels the main task
          We can get this value here
           - By cancelling the parent task manually
          - By joining a Cancelled task
        **/
        mainTask.isCancelled = true;
        /**
          Cancels the current effect; this will propagate the cancellation down to any called tasks
        **/
        next.cancel();
        /**
          If this Generator has a `return` method then invokes it
          This will jump to the finally block
        **/
        result = _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(iterator.return) ? iterator.return(TASK_CANCEL) : { done: true, value: TASK_CANCEL };
      } else if (arg === CHANNEL_END) {
        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
        result = _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(iterator.return) ? iterator.return() : { done: true };
      } else {
        result = iterator.next(arg);
      }

      if (!result.done) {
        runEffect(result.value, parentEffectId, '', next);
      } else {
        /**
          This Generator has ended, terminate the main task and notify the fork queue
        **/
        mainTask.isMainRunning = false;
        mainTask.cont && mainTask.cont(result.value);
      }
    } catch (error) {
      if (mainTask.isCancelled) {
        logError(error);
      }
      mainTask.isMainRunning = false;
      mainTask.cont(error, true);
    }
  }

  function end(result, isErr) {
    iterator._isRunning = false;
    stdChannel.close();
    if (!isErr) {
      iterator._result = result;
      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
    } else {
      if (result instanceof Error) {
        Object.defineProperty(result, 'sagaStack', {
          value: 'at ' + name + ' \n ' + (result.sagaStack || result.stack),
          configurable: true
        });
      }
      if (!task.cont) {
        if (result instanceof Error && onError) {
          onError(result);
        } else {
          logError(result);
        }
      }
      iterator._error = result;
      iterator._isAborted = true;
      iterator._deferredEnd && iterator._deferredEnd.reject(result);
    }
    task.cont && task.cont(result, isErr);
    task.joiners.forEach(function (j) {
      return j.cb(result, isErr);
    });
    task.joiners = null;
  }

  function runEffect(effect, parentEffectId) {
    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var cb = arguments[3];

    var effectId = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* uid */ "v"])();
    sagaMonitor && sagaMonitor.effectTriggered({ effectId: effectId, parentEffectId: parentEffectId, label: label, effect: effect });

    /**
      completion callback and cancel callback are mutually exclusive
      We can't cancel an already completed effect
      And We can't complete an already cancelled effectId
    **/
    var effectSettled = void 0;

    // Completion callback passed to the appropriate effect runner
    function currCb(res, isErr) {
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      cb.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"]; // defensive measure
      if (sagaMonitor) {
        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
      }
      cb(res, isErr);
    }
    // tracks down the current cancel
    currCb.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];

    // setup cancellation logic on the parent cb
    cb.cancel = function () {
      // prevents cancelling an already completed effect
      if (effectSettled) {
        return;
      }

      effectSettled = true;
      /**
        propagates cancel downward
        catch uncaught cancellations errors; since we can no longer call the completion
        callback, log errors raised during cancellations into the console
      **/
      try {
        currCb.cancel();
      } catch (err) {
        logError(err);
      }
      currCb.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"]; // defensive measure

      sagaMonitor && sagaMonitor.effectCancelled(effectId);
    };

    /**
      each effect runner must attach its own logic of cancellation to the provided callback
      it allows this generator to propagate cancellation downward.
       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
      And the setup must occur before calling the callback
       This is a sort of inversion of control: called async functions are responsible
      for completing the flow by calling the provided continuation; while caller functions
      are responsible for aborting the current flow by calling the attached cancel function
       Library users can attach their own cancellation logic to promises by defining a
      promise[CANCEL] method in their returned promises
      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
    **/
    var data = void 0;
    // prettier-ignore
    return (
      // Non declarative effect
      _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].promise(effect) ? resolvePromise(effect, currCb) : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(effect) ? resolveIterator(effect, effectId, name, currCb)

      // declarative effects
      : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(effect) ? runParallelEffect(effect, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].take(effect)) ? runTakeEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].put(effect)) ? runPutEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].all(effect)) ? runAllEffect(data, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].race(effect)) ? runRaceEffect(data, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].call(effect)) ? runCallEffect(data, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].cps(effect)) ? runCPSEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].fork(effect)) ? runForkEffect(data, effectId, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].join(effect)) ? runJoinEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].cancel(effect)) ? runCancelEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].select(effect)) ? runSelectEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].actionChannel(effect)) ? runChannelEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].flush(effect)) ? runFlushEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].cancelled(effect)) ? runCancelledEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].getContext(effect)) ? runGetContextEffect(data, currCb) : (data = _io__WEBPACK_IMPORTED_MODULE_2__[/* asEffect */ "d"].setContext(effect)) ? runSetContextEffect(data, currCb) : /* anything else returned as is */currCb(effect)
    );
  }

  function resolvePromise(promise, cb) {
    var cancelPromise = promise[_utils__WEBPACK_IMPORTED_MODULE_0__[/* CANCEL */ "a"]];
    if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(cancelPromise)) {
      cb.cancel = cancelPromise;
    } else if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func(promise.abort)) {
      cb.cancel = function () {
        return promise.abort();
      };
      // TODO: add support for the fetch API, whenever they get around to
      // adding cancel support
    }
    promise.then(cb, function (error) {
      return cb(error, true);
    });
  }

  function resolveIterator(iterator, effectId, name, cb) {
    proc(iterator, subscribe, dispatch, getState, taskContext, options, effectId, name, cb);
  }

  function runTakeEffect(_ref2, cb) {
    var channel = _ref2.channel,
        pattern = _ref2.pattern,
        maybe = _ref2.maybe;

    channel = channel || stdChannel;
    var takeCb = function takeCb(inp) {
      return inp instanceof Error ? cb(inp, true) : Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* isEnd */ "d"])(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
    };
    try {
      channel.take(takeCb, matcher(pattern));
    } catch (err) {
      return cb(err, true);
    }
    cb.cancel = takeCb.cancel;
  }

  function runPutEffect(_ref3, cb) {
    var channel = _ref3.channel,
        action = _ref3.action,
        resolve = _ref3.resolve;

    /**
      Schedule the put in case another saga is holding a lock.
      The put will be executed atomically. ie nested puts will execute after
      this put has terminated.
    **/
    Object(_scheduler__WEBPACK_IMPORTED_MODULE_1__[/* asap */ "a"])(function () {
      var result = void 0;
      try {
        result = (channel ? channel.put : dispatch)(action);
      } catch (error) {
        // If we have a channel or `put.resolve` was used then bubble up the error.
        if (channel || resolve) return cb(error, true);
        logError(error);
      }

      if (resolve && _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].promise(result)) {
        resolvePromise(result, cb);
      } else {
        return cb(result);
      }
    });
    // Put effects are non cancellables
  }

  function runCallEffect(_ref4, effectId, cb) {
    var context = _ref4.context,
        fn = _ref4.fn,
        args = _ref4.args;

    var result = void 0;
    // catch synchronous failures; see #152
    try {
      result = fn.apply(context, args);
    } catch (error) {
      return cb(error, true);
    }
    return _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].promise(result) ? resolvePromise(result, cb) : _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
  }

  function runCPSEffect(_ref5, cb) {
    var context = _ref5.context,
        fn = _ref5.fn,
        args = _ref5.args;

    // CPS (ie node style functions) can define their own cancellation logic
    // by setting cancel field on the cb

    // catch synchronous failures; see #152
    try {
      var cpsCb = function cpsCb(err, res) {
        return _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].undef(err) ? cb(res) : cb(err, true);
      };
      fn.apply(context, args.concat(cpsCb));
      if (cpsCb.cancel) {
        cb.cancel = function () {
          return cpsCb.cancel();
        };
      }
    } catch (error) {
      return cb(error, true);
    }
  }

  function runForkEffect(_ref6, effectId, cb) {
    var context = _ref6.context,
        fn = _ref6.fn,
        args = _ref6.args,
        detached = _ref6.detached;

    var taskIterator = createTaskIterator({ context: context, fn: fn, args: args });

    try {
      Object(_scheduler__WEBPACK_IMPORTED_MODULE_1__[/* suspend */ "c"])();
      var _task = proc(taskIterator, subscribe, dispatch, getState, taskContext, options, effectId, fn.name, detached ? null : _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"]);

      if (detached) {
        cb(_task);
      } else {
        if (taskIterator._isRunning) {
          taskQueue.addTask(_task);
          cb(_task);
        } else if (taskIterator._error) {
          taskQueue.abort(taskIterator._error);
        } else {
          cb(_task);
        }
      }
    } finally {
      Object(_scheduler__WEBPACK_IMPORTED_MODULE_1__[/* flush */ "b"])();
    }
    // Fork effects are non cancellables
  }

  function runJoinEffect(t, cb) {
    if (t.isRunning()) {
      var joiner = { task: task, cb: cb };
      cb.cancel = function () {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* remove */ "t"])(t.joiners, joiner);
      };
      t.joiners.push(joiner);
    } else {
      t.isAborted() ? cb(t.error(), true) : cb(t.result());
    }
  }

  function runCancelEffect(taskToCancel, cb) {
    if (taskToCancel === _utils__WEBPACK_IMPORTED_MODULE_0__[/* SELF_CANCELLATION */ "d"]) {
      taskToCancel = task;
    }
    if (taskToCancel.isRunning()) {
      taskToCancel.cancel();
    }
    cb();
    // cancel effects are non cancellables
  }

  function runAllEffect(effects, effectId, cb) {
    var keys = Object.keys(effects);

    if (!keys.length) {
      return cb(_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(effects) ? [] : {});
    }

    var completedCount = 0;
    var completed = void 0;
    var results = {};
    var childCbs = {};

    function checkEffectEnd() {
      if (completedCount === keys.length) {
        completed = true;
        cb(_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(effects) ? _utils__WEBPACK_IMPORTED_MODULE_0__[/* array */ "f"].from(_extends({}, results, { length: keys.length })) : results);
      }
    }

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }
        if (isErr || Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* isEnd */ "d"])(res) || res === CHANNEL_END || res === TASK_CANCEL) {
          cb.cancel();
          cb(res, isErr);
        } else {
          results[key] = res;
          completedCount++;
          checkEffectEnd();
        }
      };
      chCbAtKey.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };

    keys.forEach(function (key) {
      return runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runRaceEffect(effects, effectId, cb) {
    var completed = void 0;
    var keys = Object.keys(effects);
    var childCbs = {};

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr) {
          // Race Auto cancellation
          cb.cancel();
          cb(res, true);
        } else if (!Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* isEnd */ "d"])(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
          var _response;

          cb.cancel();
          completed = true;
          var response = (_response = {}, _response[key] = res, _response);
          cb(_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].array(effects) ? [].slice.call(_extends({}, response, { length: keys.length })) : response);
        }
      };
      chCbAtKey.cancel = _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      // prevents unnecessary cancellation
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };
    keys.forEach(function (key) {
      if (completed) {
        return;
      }
      runEffect(effects[key], effectId, key, childCbs[key]);
    });
  }

  function runSelectEffect(_ref7, cb) {
    var selector = _ref7.selector,
        args = _ref7.args;

    try {
      var state = selector.apply(undefined, [getState()].concat(args));
      cb(state);
    } catch (error) {
      cb(error, true);
    }
  }

  function runChannelEffect(_ref8, cb) {
    var pattern = _ref8.pattern,
        buffer = _ref8.buffer;

    var match = matcher(pattern);
    match.pattern = pattern;
    cb(Object(_channel__WEBPACK_IMPORTED_MODULE_3__[/* eventChannel */ "c"])(subscribe, buffer || _buffers__WEBPACK_IMPORTED_MODULE_4__[/* buffers */ "a"].fixed(), match));
  }

  function runCancelledEffect(data, cb) {
    cb(!!mainTask.isCancelled);
  }

  function runFlushEffect(channel, cb) {
    channel.flush(cb);
  }

  function runGetContextEffect(prop, cb) {
    cb(taskContext[prop]);
  }

  function runSetContextEffect(props, cb) {
    _utils__WEBPACK_IMPORTED_MODULE_0__[/* object */ "s"].assign(taskContext, props);
    cb();
  }

  function newTask(id, name, iterator, cont) {
    var _done, _ref9, _mutatorMap;

    iterator._deferredEnd = null;
    return _ref9 = {}, _ref9[_utils__WEBPACK_IMPORTED_MODULE_0__[/* TASK */ "e"]] = true, _ref9.id = id, _ref9.name = name, _done = 'done', _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, _mutatorMap[_done].get = function () {
      if (iterator._deferredEnd) {
        return iterator._deferredEnd.promise;
      } else {
        var def = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* deferred */ "i"])();
        iterator._deferredEnd = def;
        if (!iterator._isRunning) {
          iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
        }
        return def.promise;
      }
    }, _ref9.cont = cont, _ref9.joiners = [], _ref9.cancel = cancel, _ref9.isRunning = function isRunning() {
      return iterator._isRunning;
    }, _ref9.isCancelled = function isCancelled() {
      return iterator._isCancelled;
    }, _ref9.isAborted = function isAborted() {
      return iterator._isAborted;
    }, _ref9.result = function result() {
      return iterator._result;
    }, _ref9.error = function error() {
      return iterator._error;
    }, _ref9.setContext = function setContext(props) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(props, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].object, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* createSetContextWarning */ "h"])('task', props));
      _utils__WEBPACK_IMPORTED_MODULE_0__[/* object */ "s"].assign(taskContext, props);
    }, _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
  }
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/runSaga.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/runSaga.js ***!
  \********************************************************/
/*! exports provided: runSaga */
/*! exports used: runSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return runSaga; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _proc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proc */ "./node_modules/redux-saga/es/internal/proc.js");



var RUN_SAGA_SIGNATURE = 'runSaga(storeInterface, saga, ...args)';
var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ': saga argument must be a Generator function!';

function runSaga(storeInterface, saga) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var iterator = void 0;

  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator(storeInterface)) {
    if (false) {}
    iterator = storeInterface;
    storeInterface = saga;
  } else {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(saga, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].func, NON_GENERATOR_ERR);
    iterator = saga.apply(undefined, args);
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* check */ "g"])(iterator, _utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].iterator, NON_GENERATOR_ERR);
  }

  var _storeInterface = storeInterface,
      subscribe = _storeInterface.subscribe,
      dispatch = _storeInterface.dispatch,
      getState = _storeInterface.getState,
      context = _storeInterface.context,
      sagaMonitor = _storeInterface.sagaMonitor,
      logger = _storeInterface.logger,
      onError = _storeInterface.onError;


  var effectId = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* uid */ "v"])();

  if (sagaMonitor) {
    // monitors are expected to have a certain interface, let's fill-in any missing ones
    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];
    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _utils__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "r"];

    sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: saga, args: args } });
  }

  var task = Object(_proc__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iterator, subscribe, Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* wrapSagaDispatch */ "x"])(dispatch), getState, context, { sagaMonitor: sagaMonitor, logger: logger, onError: onError }, effectId, saga.name);

  if (sagaMonitor) {
    sagaMonitor.effectResolved(effectId, task);
  }

  return task;
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js ***!
  \************************************************************************/
/*! exports provided: qEnd, safeName, default */
/*! exports used: default, qEnd, safeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return qEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return safeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fsmIterator; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");


var done = { done: true, value: undefined };
var qEnd = {};

function safeName(patternOrChannel) {
  if (_utils__WEBPACK_IMPORTED_MODULE_0__[/* is */ "n"].channel(patternOrChannel)) {
    return 'channel';
  } else if (Array.isArray(patternOrChannel)) {
    return String(patternOrChannel.map(function (entry) {
      return String(entry);
    }));
  } else {
    return String(patternOrChannel);
  }
}

function fsmIterator(fsm, q0) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';

  var updateState = void 0,
      qNext = q0;

  function next(arg, error) {
    if (qNext === qEnd) {
      return done;
    }

    if (error) {
      qNext = qEnd;
      throw error;
    } else {
      updateState && updateState(arg);

      var _fsm$qNext = fsm[qNext](),
          q = _fsm$qNext[0],
          output = _fsm$qNext[1],
          _updateState = _fsm$qNext[2];

      qNext = q;
      updateState = _updateState;
      return qNext === qEnd ? done : output;
    }
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* makeIterator */ "q"])(next, function (error) {
    return next(null, error);
  }, name, true);
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/index.js ***!
  \******************************************************************/
/*! exports provided: takeEvery, takeLatest, throttle, takeEveryHelper, takeLatestHelper, throttleHelper */
/*! exports used: takeEveryHelper, takeLatestHelper, throttleHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export takeEvery */
/* unused harmony export takeLatest */
/* unused harmony export throttle */
/* harmony import */ var _takeEvery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./takeEvery */ "./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _takeEvery__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _takeLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./takeLatest */ "./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _takeLatest__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ "./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _throttle__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");






var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var takeEvery = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* deprecate */ "k"])(_takeEvery__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* deprecate */ "k"])(_takeLatest__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* deprecate */ "k"])(_throttle__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], /*#__PURE__*/deprecationWarning('throttle'));



/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js":
/*!**********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/takeEvery.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeEvery; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");




function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* take */ "r"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "j"].apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__[/* END */ "a"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* qEnd */ "b"]] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* safeName */ "c"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js":
/*!***********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/takeLatest.js ***!
  \***********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return takeLatest; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");




function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* take */ "r"])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "j"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* cancel */ "f"])(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__[/* END */ "a"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* qEnd */ "b"]] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* safeName */ "c"])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js":
/*!*********************************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/sagaHelpers/throttle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throttle; });
/* harmony import */ var _fsmIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsmIterator */ "./node_modules/redux-saga/es/internal/sagaHelpers/fsmIterator.js");
/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _channel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../channel */ "./node_modules/redux-saga/es/internal/channel.js");
/* harmony import */ var _buffers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buffers */ "./node_modules/redux-saga/es/internal/buffers.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/redux-saga/es/internal/utils.js");






function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* actionChannel */ "a"])(pattern, _buffers__WEBPACK_IMPORTED_MODULE_3__[/* buffers */ "a"].sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* take */ "r"])(channel) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: _io__WEBPACK_IMPORTED_MODULE_1__[/* fork */ "j"].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: Object(_io__WEBPACK_IMPORTED_MODULE_1__[/* call */ "e"])(_utils__WEBPACK_IMPORTED_MODULE_4__[/* delay */ "j"], delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === _channel__WEBPACK_IMPORTED_MODULE_2__[/* END */ "a"] ? [_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* qEnd */ "b"]] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + Object(_fsmIterator__WEBPACK_IMPORTED_MODULE_0__[/* safeName */ "c"])(pattern) + ', ' + worker.name + ')');
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/scheduler.js":
/*!**********************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/scheduler.js ***!
  \**********************************************************/
/*! exports provided: asap, suspend, flush */
/*! exports used: asap, flush, suspend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return asap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return suspend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flush; });
var queue = [];
/**
  Variable to hold a counting semaphore
  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
    already suspended)
  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
    triggers flushing the queued tasks.
**/
var semaphore = 0;

/**
  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
  and flushed after this task has finished (assuming the scheduler endup in a released
  state).
**/
function exec(task) {
  try {
    suspend();
    task();
  } finally {
    release();
  }
}

/**
  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
**/
function asap(task) {
  queue.push(task);

  if (!semaphore) {
    suspend();
    flush();
  }
}

/**
  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
  scheduler is released.
**/
function suspend() {
  semaphore++;
}

/**
  Puts the scheduler in a `released` state.
**/
function release() {
  semaphore--;
}

/**
  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
**/
function flush() {
  release();

  var task = void 0;
  while (!semaphore && (task = queue.shift()) !== undefined) {
    exec(task);
  }
}

/***/ }),

/***/ "./node_modules/redux-saga/es/internal/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/redux-saga/es/internal/utils.js ***!
  \******************************************************/
/*! exports provided: sym, TASK, HELPER, MATCH, CANCEL, SAGA_ACTION, SELF_CANCELLATION, konst, kTrue, kFalse, noop, ident, check, hasOwn, is, object, remove, array, deferred, arrayOfDeffered, delay, createMockTask, autoInc, uid, makeIterator, log, deprecate, updateIncentive, internalErr, createSetContextWarning, wrapSagaDispatch, cloneableGenerator */
/*! exports used: CANCEL, MATCH, SAGA_ACTION, SELF_CANCELLATION, TASK, array, check, createSetContextWarning, deferred, delay, deprecate, ident, internalErr, is, kTrue, log, makeIterator, noop, object, remove, sym, uid, updateIncentive, wrapSagaDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sym; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TASK; });
/* unused harmony export HELPER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SELF_CANCELLATION; });
/* unused harmony export konst */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return kTrue; });
/* unused harmony export kFalse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return check; });
/* unused harmony export hasOwn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return deferred; });
/* unused harmony export arrayOfDeffered */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return delay; });
/* unused harmony export createMockTask */
/* unused harmony export autoInc */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return makeIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return updateIncentive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createSetContextWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return wrapSagaDispatch; });
/* unused harmony export cloneableGenerator */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = /*#__PURE__*/sym('TASK');
var HELPER = /*#__PURE__*/sym('HELPER');
var MATCH = /*#__PURE__*/sym('MATCH');
var CANCEL = /*#__PURE__*/sym('CANCEL_PROMISE');
var SAGA_ACTION = /*#__PURE__*/sym('SAGA_ACTION');
var SELF_CANCELLATION = /*#__PURE__*/sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = /*#__PURE__*/konst(true);
var kFalse = /*#__PURE__*/konst(false);
var noop = function noop() {};
var ident = function ident(v) {
  return v;
};

function check(value, predicate, error) {
  if (!predicate(value)) {
    log('error', 'uncaught at check', error);
    throw new Error(error);
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(object, property) {
  return is.notUndef(object) && hasOwnProperty.call(object, property);
}

var is = {
  undef: function undef(v) {
    return v === null || v === undefined;
  },
  notUndef: function notUndef(v) {
    return v !== null && v !== undefined;
  },
  func: function func(f) {
    return typeof f === 'function';
  },
  number: function number(n) {
    return typeof n === 'number';
  },
  string: function string(s) {
    return typeof s === 'string';
  },
  array: Array.isArray,
  object: function object(obj) {
    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  },
  promise: function promise(p) {
    return p && is.func(p.then);
  },
  iterator: function iterator(it) {
    return it && is.func(it.next) && is.func(it.throw);
  },
  iterable: function iterable(it) {
    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
  },
  task: function task(t) {
    return t && t[TASK];
  },
  observable: function observable(ob) {
    return ob && is.func(ob.subscribe);
  },
  buffer: function buffer(buf) {
    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
  },
  pattern: function pattern(pat) {
    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
  },
  channel: function channel(ch) {
    return ch && is.func(ch.take) && is.func(ch.close);
  },
  helper: function helper(it) {
    return it && it[HELPER];
  },
  stringableFunc: function stringableFunc(f) {
    return is.func(f) && hasOwn(f, 'toString');
  }
};

var object = {
  assign: function assign(target, source) {
    for (var i in source) {
      if (hasOwn(source, i)) {
        target[i] = source[i];
      }
    }
  }
};

function remove(array, item) {
  var index = array.indexOf(item);
  if (index >= 0) {
    array.splice(index, 1);
  }
}

var array = {
  from: function from(obj) {
    var arr = Array(obj.length);
    for (var i in obj) {
      if (hasOwn(obj, i)) {
        arr[i] = obj[i];
      }
    }
    return arr;
  }
};

function deferred() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var def = _extends({}, props);
  var promise = new Promise(function (resolve, reject) {
    def.resolve = resolve;
    def.reject = reject;
  });
  def.promise = promise;
  return def;
}

function arrayOfDeffered(length) {
  var arr = [];
  for (var i = 0; i < length; i++) {
    arr.push(deferred());
  }
  return arr;
}

function delay(ms) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var timeoutId = void 0;
  var promise = new Promise(function (resolve) {
    timeoutId = setTimeout(function () {
      return resolve(val);
    }, ms);
  });

  promise[CANCEL] = function () {
    return clearTimeout(timeoutId);
  };

  return promise;
}

function createMockTask() {
  var _ref;

  var running = true;
  var _result = void 0,
      _error = void 0;

  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
    return running;
  }, _ref.result = function result() {
    return _result;
  }, _ref.error = function error() {
    return _error;
  }, _ref.setRunning = function setRunning(b) {
    return running = b;
  }, _ref.setResult = function setResult(r) {
    return _result = r;
  }, _ref.setError = function setError(e) {
    return _error = e;
  }, _ref;
}

function autoInc() {
  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return function () {
    return ++seed;
  };
}

var uid = /*#__PURE__*/autoInc();

var kThrow = function kThrow(err) {
  throw err;
};
var kReturn = function kReturn(value) {
  return { value: value, done: true };
};
function makeIterator(next) {
  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var isHelper = arguments[3];

  var iterator = { name: name, next: next, throw: thro, return: kReturn };

  if (isHelper) {
    iterator[HELPER] = true;
  }
  if (typeof Symbol !== 'undefined') {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }
  return iterator;
}

/**
  Print error in a useful way whether in a browser environment
  (with expandable error stack traces), or in a node.js environment
  (text-only log output)
 **/
function log(level, message) {
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  /*eslint-disable no-console*/
  if (typeof window === 'undefined') {
    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
  } else {
    console[level](message, error);
  }
}

function deprecate(fn, deprecationWarning) {
  return function () {
    if (false) {}
    return fn.apply(undefined, arguments);
  };
}

var updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var history = [];
    var gen = generatorFunc.apply(undefined, args);
    return {
      next: function next(arg) {
        history.push(arg);
        return gen.next(arg);
      },
      clone: function clone() {
        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
        history.forEach(function (arg) {
          return clonedGen.next(arg);
        });
        return clonedGen;
      },
      return: function _return(value) {
        return gen.return(value);
      },
      throw: function _throw(exception) {
        return gen.throw(exception);
      }
    };
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/redux-saga/es/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/redux-saga/es/utils.js ***!
  \*********************************************/
/*! exports provided: TASK, SAGA_ACTION, noop, is, deferred, arrayOfDeffered, createMockTask, cloneableGenerator, asEffect, CHANNEL_END */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/utils */ "./node_modules/redux-saga/es/internal/utils.js");
/* harmony import */ var _internal_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/io */ "./node_modules/redux-saga/es/internal/io.js");
/* harmony import */ var _internal_proc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/proc */ "./node_modules/redux-saga/es/internal/proc.js");




/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/*! exports used: applyMiddleware, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __DO_NOT_USE__ActionTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyMiddleware; });
/* unused harmony export bindActionCreators */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createStore; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : undefined);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : undefined);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : undefined);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : undefined);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : undefined);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : undefined);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : undefined);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : undefined);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : undefined);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : undefined);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : undefined);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : undefined);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : undefined);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : undefined);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : undefined);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : undefined);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : undefined);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ }),

/***/ "./node_modules/warning/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_app_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!../node_modules/linaria/lib/webpack4-loader.js!./app.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");









var config = {"pages":["pages/home/index","pages/freight/index","pages/my/index","pages/freight/details/index","pages/freight/edit/index","pages/freight/suc/index","pages/freight/clear/index","pages/my/bill/index","pages/my/address/index","pages/my/address/add/index","pages/guonei/index","pages/guonei/zengzhi/index","pages/guonei/baojia/index","pages/guonei/xinxi/index","pages/guoji/index","pages/huiyuan/index"],"subPackages":[{"root":"pages/login","pages":["index"]}],"tabBar":{"color":"#151741","selectedColor":"#151741","borderStyle":"white","backgroundColor":"#FAFAFC","list":[{"text":"首页","pagePath":"pages/home/index","iconPath":"static/images/home/home_not.png","selectedIconPath":"static/images/home/home_yes.png"},{"text":"查货运","pagePath":"pages/freight/index","iconPath":"static/images/home/chajian_not.png","selectedIconPath":"static/images/home/chajian_yes.png"},{"text":"我的","pagePath":"pages/my/index","iconPath":"static/images/home/wd_not.png","selectedIconPath":"static/images/home/wd_yes.png"}]},"window":{"backgroundColor":"#f4f7fc","backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"Prism","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createReactApp"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_app_tsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_4__, react_dom__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["initPxTransform"])({
  designWidth: 375,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/models/common.ts":
/*!******************************!*\
  !*** ./src/models/common.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api */ "./src/service/api.ts");




/* harmony default export */ __webpack_exports__["a"] = ({
  namespace: 'common',
  state: {
    accessToken: _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync('accessToken'),
    userInfo: _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync('userInfo')
  },
  effects: {
    // 获取用户信息
    getUserInfo: /*#__PURE__*/_Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function getUserInfo(_ref, _ref2) {
      var payload, call, put, res;
      return _Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getUserInfo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref.payload;
              call = _ref2.call, put = _ref2.put;
              _context.next = 4;
              return call(_service_api__WEBPACK_IMPORTED_MODULE_3__[/* getUserInfo */ "a"]);

            case 4:
              res = _context.sent;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, getUserInfo);
    })
  },
  reducers: {
    save: function save(state, _ref3) {
      var payload = _ref3.payload;
      return Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), payload);
    }
  }
});

/***/ }),

/***/ "./src/models/filter.ts":
/*!******************************!*\
  !*** ./src/models/filter.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _service_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/service/filter */ "./src/service/filter.ts");



var model = {
  namespace: 'filter',
  state: {
    countryList: [],
    stationList: [],
    clientList: [],
    orderTypeList: [],
    countryRes: []
  },
  effects: {
    // 国家
    country: /*#__PURE__*/_Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function country(_ref, _ref2) {
      var onSuccess, call, put, res, list;
      return _Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function country$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              onSuccess = _ref.onSuccess;
              call = _ref2.call, put = _ref2.put;
              _context.next = 4;
              return call(_service_filter__WEBPACK_IMPORTED_MODULE_2__[/* getCountry */ "c"], {});

            case 4:
              res = _context.sent;
              list = res === null || res === void 0 ? void 0 : res.map(function (item) {
                return Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, item), {}, {
                  label: "".concat(item === null || item === void 0 ? void 0 : item.countryName),
                  value: item.countryName
                });
              });
              _context.next = 8;
              return put({
                type: 'save',
                payload: {
                  countryList: list,
                  countryRes: res
                }
              });

            case 8:
              onSuccess && onSuccess(res);
              return _context.abrupt("return", res);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, country);
    }),
    // 站点
    station: /*#__PURE__*/_Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function station(_ref3, _ref4) {
      var payload, call, put, select, stationList, res, list;
      return _Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function station$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              payload = _ref3.payload;
              call = _ref4.call, put = _ref4.put, select = _ref4.select;
              _context2.next = 4;
              return select(function (state) {
                return state.filter.stationList;
              });

            case 4:
              stationList = _context2.sent;

              if (!stationList.length) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return");

            case 7:
              _context2.next = 9;
              return call(_service_filter__WEBPACK_IMPORTED_MODULE_2__[/* getStation */ "d"], {
                payload: payload
              });

            case 9:
              res = _context2.sent;

              if (res) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return");

            case 12:
              list = res.map(function (item) {
                return {
                  label: "".concat(item.ocName, " | ").concat(item.ocCode),
                  value: item.ocCode
                };
              });
              list === null || list === void 0 ? void 0 : list.unshift({
                label: 'ALL',
                value: 'ALL'
              });
              _context2.next = 16;
              return put({
                type: 'save',
                payload: {
                  stationList: list
                }
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, station);
    }),
    // 商家
    client: /*#__PURE__*/_Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function client(_ref5, _ref6) {
      var payload, call, put, select, clientList, res, list;
      return _Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function client$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              payload = _ref5.payload;
              call = _ref6.call, put = _ref6.put, select = _ref6.select;
              _context3.next = 4;
              return select(function (state) {
                return state.filter.stationList;
              });

            case 4:
              clientList = _context3.sent;

              if (!clientList.length) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return");

            case 7:
              _context3.next = 9;
              return call(_service_filter__WEBPACK_IMPORTED_MODULE_2__[/* getClient */ "b"], {
                payload: payload
              });

            case 9:
              res = _context3.sent;

              if (res) {
                _context3.next = 12;
                break;
              }

              return _context3.abrupt("return");

            case 12:
              list = res.map(function (item) {
                return {
                  label: "".concat(item.label, " | ").concat(item.value),
                  value: item.value
                };
              });
              list === null || list === void 0 ? void 0 : list.unshift({
                label: 'ALL',
                value: 'ALL'
              });
              _context3.next = 16;
              return put({
                type: 'save',
                payload: {
                  clientList: list
                }
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, client);
    }),
    // 订单类型
    orderType: /*#__PURE__*/_Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function orderType(_ref7, _ref8) {
      var payload, call, put, res;
      return _Users_apple_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function orderType$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              payload = _ref7.payload;
              call = _ref8.call, put = _ref8.put;
              _context4.next = 4;
              return call(_service_filter__WEBPACK_IMPORTED_MODULE_2__[/* getBizDictData */ "a"], {
                typeCode: 'OMSOrderType'
              });

            case 4:
              res = _context4.sent;
              _context4.next = 7;
              return put({
                type: 'save',
                payload: {
                  orderTypeList: res === null || res === void 0 ? void 0 : res.OMSOrderType
                }
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, orderType);
    })
  },
  reducers: {
    save: function save(state, _ref9) {
      var payload = _ref9.payload;
      return Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state), payload);
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (model);

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/models/common.ts");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./src/models/filter.ts");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals */ "./src/models/modals.ts");
// import table from '../components/Table/model'
// import financial from '../pages/financial/model'
// import Login from '../pages/login/model'
// import OfdModel from '../pages/ofd/model.tsx'
// import WaybillModel from '../pages/waybill/model.tsx'



/* harmony default export */ __webpack_exports__["a"] = ([_filter__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _common__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _modals__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]]);

/***/ }),

/***/ "./src/models/modals.ts":
/*!******************************!*\
  !*** ./src/models/modals.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");

var modals = {
  namespace: 'modals',
  state: {
    // 每个页面维护一个弹框的数组，可能有多个的情况
    ofd_page: [],
    waybill_page: []
  },
  effects: {},
  reducers: {
    save: function save(state, _ref) {
      var payload = _ref.payload;
      return Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), payload);
    },
    updateProps: function updateProps(state, _ref2) {
      var _state$pageName;

      var index = _ref2.index,
          pageName = _ref2.pageName,
          ModalProps = _ref2.ModalProps;
      var currentPage = (_state$pageName = state[pageName]) === null || _state$pageName === void 0 ? void 0 : _state$pageName.map(function (item, i) {
        if (i === index) {
          item = Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, item), ModalProps);
        }

        return item;
      });
      var changedPage = {};
      changedPage[pageName] = currentPage;
      return Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), changedPage);
    },
    addProps: function addProps(state, _ref3) {
      var index = _ref3.index,
          pageName = _ref3.pageName,
          ModalProps = _ref3.ModalProps;
      var changedPage = {};
      changedPage[pageName] = [Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, ModalProps)];
      return Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, state), changedPage);
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (modals);

/***/ }),

/***/ "./src/service/api.ts":
/*!****************************!*\
  !*** ./src/service/api.ts ***!
  \****************************/
/*! exports provided: account, getUserInfo, getTimeZone, setTimeZone, queryCountryTimeZoneList */
/*! exports used: getUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export account */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserInfo; });
/* unused harmony export getTimeZone */
/* unused harmony export setTimeZone */
/* unused harmony export queryCountryTimeZoneList */
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.ts");

var account = function account(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/url',
    method: 'GET',
    data: data
  });
};
var getUserInfo = function getUserInfo(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/sys/sysUser/info',
    method: 'GET',
    data: data
  });
};
var getTimeZone = function getTimeZone(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/hermes/self/getTimeZone',
    method: 'POST',
    data: data,
    noLoading: true
  });
};
var setTimeZone = function setTimeZone(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/hermes/self/setTimeZone',
    method: 'POST',
    data: data
  });
};
var queryCountryTimeZoneList = function queryCountryTimeZoneList(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/hermes/country/queryCountryTimeZoneList',
    method: 'GET',
    data: data,
    noLoading: true
  });
};

/***/ }),

/***/ "./src/service/filter.ts":
/*!*******************************!*\
  !*** ./src/service/filter.ts ***!
  \*******************************/
/*! exports provided: getCountry, getClient, getStation, getBizDictData */
/*! exports used: getBizDictData, getClient, getCountry, getStation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBizDictData; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.ts");
 // 筛选—国家

var getCountry = function getCountry(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'hermes/country/queryCountryTimeZoneList',
    method: 'GET',
    data: data
  });
}; // 筛选—商家

var getClient = function getClient(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'hermes/client/clientInfo/getAuthorizeClientOption',
    method: 'POST',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}; // 筛选—网点

var getStation = function getStation(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'hermes/ent/oc/getAuthorizeOcOptions',
    method: 'GET',
    data: data
  });
}; // 筛选-订单类型

var getBizDictData = function getBizDictData(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: 'hermes/bizDictData/opitions',
    method: 'GET',
    data: data
  });
};

/***/ }),

/***/ "./src/utils/baseUrl.ts":
/*!******************************!*\
  !*** ./src/utils/baseUrl.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getBaseUrl = function getBaseUrl(url) {
  var BASE_URL = '';

  if (['development'].includes("production")) {
    // 开发环境 - 根据请求不同返回不同的BASE_URL
    BASE_URL = 'https://uat-prism.imile.com/'; // BASE_URL='https://hk-scs.imile.com/'
    // BASE_URL = 'https://dev-scs.52imile.cn/'
  } else if (true) {
    // BASE_URL = 'https://uat-prism.imile.com/'
    BASE_URL = 'https://prism.imile.com/'; // BASE_URL='https://dev-scs.52imile.cn/'
  }

  return BASE_URL;
};

/* harmony default export */ __webpack_exports__["a"] = (getBaseUrl);

/***/ }),

/***/ "./src/utils/dva.ts":
/*!**************************!*\
  !*** ./src/utils/dva.ts ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dva_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva-core */ "./node_modules/dva-core/dist/index.esm.js");
/* harmony import */ var dva_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva-loading */ "./node_modules/dva-loading/dist/index.esm.js");



var app;
var store;
var dispatch;

function createApp(opt) {
  // redux日志
  // opt.onAction = [createLogger()];
  opt.onError = function (err) {
    console.error(err); // Taro.hideLoading();
  };

  app = Object(dva_core__WEBPACK_IMPORTED_MODULE_1__[/* create */ "a"])(opt);
  app.use(Object(dva_loading__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({})); // 适配支付宝小程序

  if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.ENV_TYPE.ALIPAY) {
    global = {};
  }

  if (!global.registered) opt.models.forEach(function (model) {
    return app.model(model);
  });
  global.registered = true;
  app.start();
  store = app._store;

  app.getStore = function () {
    return store;
  };

  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  createApp: createApp,
  getDispatch: function getDispatch() {
    return app.dispatch;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/utils/interceptors.ts":
/*!***********************************!*\
  !*** ./src/utils/interceptors.ts ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

var HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};

var rspInterceptor = function rspInterceptor(chain) {
  var requestParams = chain.requestParams;
  return chain.proceed(requestParams).then(function (res) {
    if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject('服务端出现了问题');
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.setStorageSync('Authorization', ''); // TODO 根据自身业务修改

      return Promise.reject('没有权限访问');
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default.a.setStorageSync('Authorization', '');
      return Promise.reject('需要鉴权');
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return res === null || res === void 0 ? void 0 : res.data;
    }
  });
}; // Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。


var interceptors = [rspInterceptor];
/* harmony default export */ __webpack_exports__["a"] = (interceptors);

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors */ "./src/utils/interceptors.ts");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseUrl */ "./src/utils/baseUrl.ts");




_interceptors__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].forEach(function (interceptorItem) {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.addInterceptor(interceptorItem);
});
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    method: 'GET',
    data: {},
    url: '',
    noLoading: false,
    header: {}
  };

  for (var key in options.data) {
    if (options.data.hasOwnProperty(key) && (options.data[key] === undefined || options.data[key] == null)) {
      delete options.data[key];
    }
  }

  var baseUrl = Object(_baseUrl__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  var timezone = '';
  var timezoneCountry = '';

  if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('timeZoneObj') && _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('timeZoneObj').timeZone) {
    if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('timeZoneObj').timeZone > 0) {
      timezone = "+".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('timeZoneObj').timeZone);
    } else {
      timezone = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('timeZoneObj').timeZone;
    }

    timezoneCountry = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('timeZoneObj').countryName;
  }

  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.request({
    url: baseUrl + options.url,
    data: Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options.data),
    header: Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      Authorization: options.url === '/ucenter/imile/login' ? 'Basic cHJpc21XaW5YSW46cHJpc21XaW5YSW4=' : "Bearer ".concat(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getStorageSync('access_token')),
      'Content-Type': 'application/json',
      timezone: timezone,
      lang: 'en_US',
      'timezone-country': timezoneCountry
    }, options.header),
    method: options.method.toUpperCase()
  }).then(function (res) {
    // Taro.hideLoading();
    if (res && res.status === 'success') {
      return res.resultObject;
    } // 00002,没token 00018,token失效 00020,token异地登录 600100,用户已被禁用
    // if (res && ['00002', '00018', '00020', '600100'].includes(res.resultCode)) {
    //   let pages = Taro.getCurrentPages()
    //   let page = pages[pages.length - 1]
    //   if (page.route !== 'pages/login/index') {
    //     Taro.reLaunch({
    //       url: '/pages/login/index',
    //     })
    //   }
    //   return
    // }
    // Taro.showToast({
    //   title: res?.message || 'error',
    //   icon: 'none',
    //   duration: 3000,
    // })

  });
});

/***/ })

},[["./src/app.tsx","runtime","taro","vendors"]]]);;
//# sourceMappingURL=app.js.map