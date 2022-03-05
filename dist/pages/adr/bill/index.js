(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/adr/bill/index"],{

/***/ "./.linaria-cache/src/pages/adr/bill/style.linaria.css":
/*!*************************************************************!*\
  !*** ./.linaria-cache/src/pages/adr/bill/style.linaria.css ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/adr/bill/index.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/adr/bill/index.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui/lib/components/icon */ "./node_modules/taro-ui/lib/components/icon/index.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/pages/adr/bill/style.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var WayBill = function WayBill(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var setCurrentSwiper = function setCurrentSwiper(current) {
    setCurrent(current);
  };

  var overview = props.overview,
      dispatch = props.dispatch;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {// dispatch({ type: 'waybill/getDefault' })
    // // 监听时区变化
    // Taro.eventCenter.on('timeZoneOnChange', arg => {
    //   dispatch({ type: 'waybill/getDefault' })
    // })
    // Taro.showShareMenu({
    //   withShareTicket: true,
    // })
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_5__[/* StyledOverview */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "header",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
        className: "select",
        children: "\u5168\u90E8\u4EA4\u6613\u7C7B\u578B"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
        value: "chevron-down",
        size: "16",
        color: "#888888"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "info",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "time",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
          className: "yer",
          children: "2021\u5E74"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
          className: "moon",
          children: "7"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
          className: "yer",
          children: "\u6708"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "money",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
          children: "\u652F\u51FA\uFF1A\xA0 \xA5100.00 \xA0\xA0 \u6536\u5165\uFF1A\xA0\xA0\xA5100.00"
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "list",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "item radus-t",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "left",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            className: "tit",
            children: "\u8F93\u5165\u6587\u672C\u8F93\u5165\u6587\u672C\u8F93\u5165\u6587\u672C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            className: "riqi",
            children: "9\u670814\u65E5 08:09"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "qian",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            children: "-10.00"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "borderb"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "item",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "left",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            className: "tit",
            children: "\u8F93\u5165\u6587\u672C\u8F93\u5165\u6587\u672C\u8F93\u5165\u6587\u672C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            className: "riqi",
            children: "9\u670814\u65E5 08:09"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "qian",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            children: "-10.00"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "borderb"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "item radus-b",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "left",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            className: "tit",
            children: "\u8F93\u5165\u6587\u672C\u8F93\u5165\u6587\u672C\u8F93\u5165\u6587\u672C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            className: "riqi",
            children: "9\u670814\u65E5 08:09"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "qian",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            children: "-10.00"
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "mask",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "modal",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "m-head",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            className: "m-tit",
            children: "\u4EA4\u6613\u7C7B\u578B"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            value: "close",
            size: "16",
            color: "#888888"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "m-cont",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "selc avtive",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              className: "s-text a-text",
              children: "\u5FEB\u9012\u8D39\u7528\u8D26\u5355"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "selc",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              className: "s-text",
              children: "\u4EE3\u6536\u8D27\u6B3E\u8D26\u5355"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "m-foot",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            className: "m-bt",
            children: "\u786E \u5B9A"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (WayBill);

/***/ }),

/***/ "./src/pages/adr/bill/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/adr/bill/index.tsx ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/adr/bill/index.tsx");


var config = {"navigationBarTitleText":"我的账单","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/adr/bill/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/adr/bill/style.ts":
/*!*************************************!*\
  !*** ./src/pages/adr/bill/style.ts ***!
  \*************************************/
/*! exports provided: StyledOverview, DialogView */
/*! exports used: StyledOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyledOverview; });
/* unused harmony export DialogView */
/* harmony import */ var linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linaria/react */ "./node_modules/linaria/esm/react.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");


var StyledOverview = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"])({
  name: "StyledOverview",
  class: "s4ajiil"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "dn65qm9",
  vars: {
    "dn65qm9-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ../../../../.linaria-cache/src/pages/adr/bill/style.linaria.css */ "./.linaria-cache/src/pages/adr/bill/style.linaria.css");

/***/ })

},[["./src/pages/adr/bill/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map