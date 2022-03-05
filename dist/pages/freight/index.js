(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/freight/index"],{

/***/ "./.linaria-cache/src/pages/freight/style.linaria.css":
/*!************************************************************!*\
  !*** ./.linaria-cache/src/pages/freight/style.linaria.css ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/freight/index.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/freight/index.tsx ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var taro_ui_lib_components_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui/lib/components/input */ "./node_modules/taro-ui/lib/components/input/index.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var taro_ui_lib_components_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-ui/lib/components/toast */ "./node_modules/taro-ui/lib/components/toast/index.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./src/pages/freight/style.ts");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/navbar */ "./src/components/navbar/index.tsx");
/* harmony import */ var _static_images_yundan_icon_fuzhi_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/images/yundan/icon_fuzhi_2.png */ "./src/static/images/yundan/icon_fuzhi_2.png");
/* harmony import */ var _static_images_yundan_icon_fuzhi_2_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_images_yundan_icon_fuzhi_2_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var Loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[/* connect */ "b"])(function (_ref) {
  var loading = _ref.loading;
  return {
    overviewLoading: loading.effects['waybill/overview']
  };
})(function (props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui_lib_components_toast__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    isOpened: props.overviewLoading,
    Text: "Loading",
    status: "loading"
  });
});

var _Taro$getMenuButtonBo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getMenuButtonBoundingClientRect(),
    height = _Taro$getMenuButtonBo.height;

var WayBill = function WayBill(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      _useState2 = Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var setCurrentSwiper = function setCurrentSwiper(current) {
    setCurrent(current);
  };

  var overview = props.overview,
      dispatch = props.dispatch;
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {// dispatch({ type: 'waybill/getDefault' })
    // // 监听时区变化
    // Taro.eventCenter.on('timeZoneOnChange', arg => {
    //   dispatch({ type: 'waybill/getDefault' })
    // })
    // Taro.showShareMenu({
    //   withShareTicket: true,
    // })
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_8__[/* StyledOverview */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Loading, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
      className: "mod1",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_navbar__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
        className: "section1",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
          className: "layer2",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
            lines: "1",
            className: "word1",
            style: {
              height: "".concat(height, "px"),
              lineHeight: "".concat(height, "px")
            },
            children: "\u67E5\u8D27\u8FD0"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui_lib_components_input__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
            className: "layer3",
            placeholder: "\u8FD0\u5355\u53F7\u67E5\u8BE2/\u5173\u952E\u5B57\u7D22\u5F15",
            name: "order",
            onChange: function onChange(e) {
              return console.log(e);
            }
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
            className: "outer1"
          })]
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
      className: "mod2",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
        className: "tab",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
          lines: "1",
          className: "word2",
          children: "\u5BC4\u4EF6\u8BB0\u5F55"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
          className: "active"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
        className: "tab",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
          lines: "1",
          className: "word3",
          children: "\u6536\u4EF6\u8BB0\u5F55"
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
      className: "list",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
        className: "mod4",
        onClick: function onClick() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
            url: '/pages/freight/details/index'
          });
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
          className: "outer2",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
            className: "layer6",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "word4",
              children: "\u8FD0\u5355\u53F7:\xA02192746284682"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
              src: _static_images_yundan_icon_fuzhi_2_png__WEBPACK_IMPORTED_MODULE_10___default.a,
              className: "icon1"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
            className: "layer7"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
            className: "layer8",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
              lines: "1",
              className: "word5",
              children: "\u67D0\u67D0\u67D0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
              lines: "1",
              className: "txt1",
              children: "\u5DF2\u7B7E\u6536"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
              lines: "1",
              className: "info3",
              children: "\u67D0\u67D0\u67D0"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
            className: "layer9",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
              lines: "1",
              className: "txt2",
              children: "\u6DF1\u5733\u5E02"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf214f0facdbdea24090090d4028bd5d20d2f8165c6daeb3e565d54a8a2042dbb",
              className: "img1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
              lines: "1",
              className: "info4",
              children: "\u6DF1\u5733\u5E02"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
            className: "layer10",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
              lines: "1",
              className: "info5",
              children: "\u5DF2\u7B7E\u6536"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
              className: "layer11",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
                lines: "1",
                className: "info6",
                children: "\u4F60\u7684\u5FEB\u4EF6\u5DF2\u7B7E\u6536\uFF0C\u5982\u6709\u7591\u95EE\u8BF7\u7535\u8054\u5FEB\u9012\u5458"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
                lines: "1",
                className: "paragraph1",
                children: "\u3010\u67D0\u67D0, \u7535\u8BDD122324435\u3011"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
            className: "layer12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
              lines: "1",
              className: "word6",
              children: "\u7B7E\u6536\u65F6\u95F4"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "word7",
              children: "2021-07-13\xA017:04:26"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
            className: "layer13"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
            className: "layer14",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
              className: "box2",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
                lines: "1",
                className: "word8",
                children: "\u901A\u77E5\u6536\u4EF6\u4EBA"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "j"], {
              className: "box3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "h"], {
                lines: "1",
                className: "txt3",
                children: "\u5220\u9664"
              })
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[/* connect */ "b"])(function (_ref2) {
  var waybill = _ref2.waybill;
  return Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, waybill);
})(WayBill));

/***/ }),

/***/ "./src/pages/freight/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/freight/index.tsx ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/freight/index.tsx");


var config = {"navigationBarTitleText":"Home","navigationStyle":"custom","disableScroll":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/freight/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/freight/style.ts":
/*!************************************!*\
  !*** ./src/pages/freight/style.ts ***!
  \************************************/
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
  class: "s2hjx5l"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "d13c4ms",
  vars: {
    "d13c4ms-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ../../../.linaria-cache/src/pages/freight/style.linaria.css */ "./.linaria-cache/src/pages/freight/style.linaria.css");

/***/ }),

/***/ "./src/static/images/yundan/icon_fuzhi_2.png":
/*!***************************************************!*\
  !*** ./src/static/images/yundan/icon_fuzhi_2.png ***!
  \***************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAD6ADAAQAAAABAAAADwAAAAAHNtsJAAAB1UlEQVQoFaVSPWgUQRT+5s3crZgcIqRJQLSzstDmsBAsbcQqloEjbUDEIsEqnX8oXDiw1UKRswnYBNLYWFoGxEIQ8YRAMMedXu52Z57fzu1uPC3zitm3877vfd97DHCCMP9y2+2Xm87Vrnif6mxNIIwQwvdGI9totVqHrgR0u936/v6ooaq7vPsoYisyCSYEHPG+z/rD4dBdZ74dyZ3Oq/O93viFtTYJgZKaBRarUIWp1ayk6fgem34CQpIXI5kWm8bIwa96srrxYzlFj5Wlgsv8UfODnRt9uWOMvcVGgerRVWWbUv31J7eP1m/iAeawgD4CqMjcYwebz669OXBIF8HLMiqyiDG4jCwzeOcCTkMiNccGNPDTwtuSVH4rMiHAWQiJS7CEayFhWMlQVxE1fmYV05nzTtHMN0i4iEUBzhRX0+YOSfCgmdk4VjZq0EQqQ07ocQpJNPzZPMYgp2xtpVYJ4a4MB4xRkQ1FsUfKOdylxAIbgHaf89yZQqcnmV41HG87X5aqh3mLESGrf4PLnIhMVRJr5elkMoluCmUZc+oLnc7rq977/54sXxiV7CU+jsO1tZWvZcNInp/P3g8G7gYb3C9WV9bjl87AOX+LuPZM4SQ/fwCk17hsx0UAbwAAAABJRU5ErkJggg=="

/***/ })

},[["./src/pages/freight/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map