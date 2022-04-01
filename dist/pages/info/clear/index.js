(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/info/clear/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/info/clear/index.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/info/clear/index.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/pages/info/clear/style.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var Edit = function Edit(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var setCurrentSwiper = function setCurrentSwiper(current) {
    setCurrent(current);
  };

  var overView = props.overView,
      dispatch = props.dispatch;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {// dispatch({ type: 'waybill/getDefault' })
    // // 监听时区变化
    // Taro.eventCenter.on('timeZoneOnChange', arg => {
    //   dispatch({ type: 'waybill/getDefault' })
    // })
    // Taro.showShareMenu({
    //   withShareTicket: true,
    // })
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_4__[/* StyledOverView */ "a"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
      className: "main2",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
        className: "main3",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
          lines: "1",
          className: "word2",
          children: "\u8BF7\u544A\u8BC9\u6211\u4EEC\u53D6\u6D88\u8FD0\u5355\u7684\u539F\u56E0"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
          lines: "1",
          className: "word3",
          children: "\u6211\u4EEC\u4F1A\u4E3A\u60A8\u63D0\u4F9B\u66F4\u597D\u7684\u670D\u52A1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
          className: "outer1",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Radio */ "g"], {
            color: "#ff7201"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
            lines: "1",
            className: "word4",
            children: "\u8BA1\u5212\u6709\u53D8\uFF0C\u4E0D\u9700\u8981\u5BC4\u4E86"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
          className: "outer2",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Radio */ "g"], {
            color: "#ff7201"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
            lines: "1",
            className: "txt1",
            children: "\u6362\u4E2A\u65F6\u95F4\u5BC4"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
          className: "outer3",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Radio */ "g"], {
            color: "#ff7201"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
            lines: "1",
            className: "txt2",
            children: "\u670D\u52A1\u6001\u5EA6\u4E0D\u597D"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
          className: "outer5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Radio */ "g"], {
            color: "#ff7201"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
            lines: "1",
            className: "word5",
            children: "\u8D85\u65F6\u672A\u53D6\u4EF6"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
          className: "outer6",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Radio */ "g"], {
            color: "#ff7201"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
            lines: "1",
            className: "txt3",
            children: "\u4EF7\u683C\u592A\u8D35"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
          className: "outer7",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Radio */ "g"], {
            color: "#ff7201"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
            lines: "1",
            className: "word6",
            children: "\u5176\u4ED6"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
          className: "outer8",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
            lines: "1",
            className: "paragraph1",
            children: ["\u53D6\u6D88\u6210\u529F", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("br", {}), "\u611F\u8C22\u60A8\u4F7F\u7528\u5600\u55D2\u8D27\u8FD0~"]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"], {
          className: "foot",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], {
            bindtap: "onClick",
            className: "box8s",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "j"], {
              lines: "1",
              decode: "true",
              className: "info2s",
              children: "\u63D0\xA0\u4EA4"
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),

/***/ "./src/pages/info/clear/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/info/clear/index.tsx ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/info/clear/index.tsx");


var config = {"navigationBarTitleText":"取消运单","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/info/clear/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/info/clear/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/info/clear/style.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/pages/info/clear/style.linaria.css = ./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/info/clear/style.ts ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/info/clear/style.ts":
/*!***************************************!*\
  !*** ./src/pages/info/clear/style.ts ***!
  \***************************************/
/*! exports provided: StyledOverView, DialogView */
/*! exports used: StyledOverView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyledOverView; });
/* unused harmony export DialogView */
/* harmony import */ var linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linaria/react */ "./node_modules/linaria/esm/react.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");


var StyledOverView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "l"])({
  name: "StyledOverView",
  class: "s9jljoi"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "dpv647a",
  vars: {
    "dpv647a-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ./style.linaria.css = ../../../../node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./style.ts */ "./src/pages/info/clear/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/info/clear/style.ts");

/***/ })

},[["./src/pages/info/clear/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map