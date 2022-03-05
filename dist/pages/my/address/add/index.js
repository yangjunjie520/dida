(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/address/add/index"],{

/***/ "./.linaria-cache/src/pages/my/address/add/style.linaria.css":
/*!*******************************************************************!*\
  !*** ./.linaria-cache/src/pages/my/address/add/style.linaria.css ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/my/address/add/index.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/my/address/add/index.tsx ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/pages/my/address/add/style.ts");
/* harmony import */ var _static_images_my_icon_pic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../static/images/my/icon_pic.png */ "./src/static/images/my/icon_pic.png");
/* harmony import */ var _static_images_my_icon_pic_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_my_icon_pic_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_my_icon_dizhibu_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../static/images/my/icon_dizhibu.png */ "./src/static/images/my/icon_dizhibu.png");
/* harmony import */ var _static_images_my_icon_dizhibu_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_my_icon_dizhibu_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var Address = function Address(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var setCurrentSwiper = function setCurrentSwiper(current) {
    setCurrent(current);
  };

  var overview = props.overview,
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_4__[/* StyledOverview */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
      className: "layer2",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "block1",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
          lines: "1",
          className: "word3",
          children: "\u7C98\u8D34\u5730\u5740\u4FE1\u606F\uFF0C\u81EA\u52A8\u62C6\u5206\u59D3\u540D\u7535\u8BDD\u548C\u5730\u5740"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "block2",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "b"], {
          src: _static_images_my_icon_pic_png__WEBPACK_IMPORTED_MODULE_5___default.a,
          className: "label3"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
          lines: "1",
          className: "word4",
          children: "\u56FE\u7247\u8BC6\u522B"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "section2",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
            lines: "1",
            className: "word5",
            children: "\u8BC6\u522B"
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
      className: "layer3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "layer4",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "outer3",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
            lines: "1",
            className: "word6",
            children: "\u8054\u7CFB\u4EBA\u4FE1\u606F"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "b"], {
            src: _static_images_my_icon_dizhibu_png__WEBPACK_IMPORTED_MODULE_6___default.a,
            className: "label4"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
            lines: "1",
            className: "word7",
            children: "\u5FAE\u4FE1\u5730\u5740\u7C3F"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "mod2-0",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "c"], {
                type: "text",
                placeholder: "\u771F\u5B9E\u59D3\u540D",
                className: "input"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "c"], {
                type: "text",
                placeholder: "\u7535\u8BDD",
                className: "input"
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "mod2-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                className: "input",
                children: "\u57CE\u5E02/\u533A\u57DF"
              })
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "mod2-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "c"], {
                type: "text",
                placeholder: "\u8BE6\u7EC6\u5730\u5740\uFF08\u4F8B\u5982:\xA0**\u8857**\u53F7**)",
                className: "input"
              })
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "mod2-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Input */ "c"], {
                type: "text",
                placeholder: "\u516C\u53F8\u540D\u79F0\uFF08\u9009\u586B\uFF09",
                className: "input"
              })
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "outer7",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "b"], {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd65a38bc31deefc8bc07dfc92083dba422bf5fbd9f581c2d7aab0bc1655929de",
            className: "icon2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
            lines: "1",
            className: "info1",
            children: "\u9ED8\u8BA4\u5BC4\u4EF6\u5730\u5740"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
            lines: "1",
            className: "txt1",
            children: "\u6E05\u7A7A"
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], {
      bindtap: "onClick",
      class: "layer5",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
        lines: "1",
        decode: "true",
        class: "info2",
        children: "\u786E\xA0\u5B9A"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Address);

/***/ }),

/***/ "./src/pages/my/address/add/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/my/address/add/index.tsx ***!
  \********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/babel-loader/lib!../../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/my/address/add/index.tsx");


var config = {"navigationBarTitleText":"填写寄件人信息","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/my/address/add/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/my/address/add/style.ts":
/*!*******************************************!*\
  !*** ./src/pages/my/address/add/style.ts ***!
  \*******************************************/
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
  class: "sr0lkan"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "doud1vt",
  vars: {
    "doud1vt-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ../../../../../.linaria-cache/src/pages/my/address/add/style.linaria.css */ "./.linaria-cache/src/pages/my/address/add/style.linaria.css");

/***/ })

},[["./src/pages/my/address/add/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map