(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/index"],{

/***/ "./.linaria-cache/src/pages/login/style.linaria.css":
/*!**********************************************************!*\
  !*** ./.linaria-cache/src/pages/login/style.linaria.css ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/login/index.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/login/index.tsx ***!
  \*****************************************************************************************************************/
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/pages/login/style.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var Edit = function Edit(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

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

  var getUserInfo = function getUserInfo(e) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getUserInfo({
      lang: "zh_CN",
      withCredentials: true
    }).then(function (res) {
      var userInfo = res.userInfo;
      var nickName = userInfo.nickName;
      var avatarUrl = userInfo.avatarUrl;
      var gender = userInfo.gender; //性别 0：未知、1：男、2：女

      var province = userInfo.province;
      var city = userInfo.city;
      var country = userInfo.country;
      console.log(res);
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_4__[/* StyledOverView */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
      className: "group1",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "layer2"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "layer5",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], {
          className: "word1",
          openType: "getUserInfo",
          onGetUserInfo: getUserInfo,
          children: "\u5FAE\u4FE1\u8D26\u53F7\u5FEB\u6377\u767B\u5F55"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "layer6",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
          lines: "1",
          className: "word2",
          children: "\u300A\u670D\u52A1\u6761\u6B3E\u300B"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
          lines: "1",
          className: "info2",
          children: "\u4E0E"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
          lines: "1",
          className: "info3",
          children: "\u300A\u9690\u79C1\u653F\u7B56\u300B"
        })]
      })]
    }), current && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
      className: "mask",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "layer3s",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "layer4s",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "main2",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
              lines: "1",
              className: "word5",
              children: "\u670D\u52A1\u6761\u6B3E\u53CA\u9690\u79C1\u653F\u7B56"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "b"], {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng202a8b98366b89588013fade83b81224b8d7d54963fa142a42f7674faa2743d0",
              className: "icon5"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
            space: "ensp",
            lines: "1",
            decode: true,
            className: "paragraph1",
            children: "\u5728\u60A8\u6CE8\u518C\u6210\u4E3A\u5600\u55D2\u8D27\u8FD0\u4F1A\u5458\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u60A8\u9700\u8981\u901A\u8FC7\u70B9\u51FB\u540C \n\n \u610F\u7684\u5F62\u5F0F\u5728\u7EBF\u7B7E\u7F72\u300A\u5600\u55D2\u8D27\u8FD0\u670D\u52A1\u6761\u6B3E\u300B\u3001\u300A\u5600\u55D2\u8D27\u8FD0\u9690\u79C1\u653F\u7B56\u300B\uFF0C\u8BF7&nbsp;\u60A8\u52A1\u5FC5\u4ED4\u7EC6\u9605\u8BFB\u3001\u5145\u5206\u7406\u89E3\u6761\u6B3E\u5185\u5BB9\u540E\u518D\u70B9\u51FB\u540C\u610F(\u5C24\u5176\u662F\u4EE5\u7C97\u4F53\u5E76\u4E0B\u5212\u7EBF\u6807\u8BC6\u7684\u6761\u6B3E\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u6761\u6B3E\u53EF\u80FD\u4F1A\u660E\u786E\u60A8\u5E94\u5C65\u884C\u7684\u4E49\u52A1\u6216\u5BF9\u60A8\u7684\u6743\u5229\u6709\u6240\u9650\u5236)\u3002 \n\n :\u5982\u679C\u60A8\u4E0D\u540C\u610F\u4E0A\u8FF0\u670D\u52A1\u6761\u6B3E\u3001\u9690\u79C1\u653F\u7B56\u6216\u5176\u4E2D\u4EFB\u4F55\u7EA6\u5B9A\uFF0C\u8BF7\u60A8\u505C\u6B62\u6CE8\u518C\u3002\u5982\u60A8\u9605\u8BFB\u5E76\u70B9\u51FB\u540C\u610F\u5373\u8868\u793A\u60A8\u5DF2\u5145\u5206\u9605\u8BFB\u3001\u7406\u89E3\u5E76\u63A5\u53D7\u5176\u5168\u90E8\u5185\u7B56\u6765\u5904\u7406\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002\u5982\u60A8\u5BF9\u4EE5\u4E0A\u670D\u52A1\u6761\u6B3E\u3001\u9690\u7B56\u6765\u5904\u7406\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002\u5982\u60A8\u5BF9\u4EE5\u4E0A\u670D\u52A1\u6761\u6B3E\u3001\u9690\u79C1\u653F\u7B56\u6709\u4EFB\u4F55\u7591\u95EE\uFF0C\u60A8\u53EF\u8054\u7CFB\u5600\u55D2\u8D27\u8FD0\u5BA2\u670D\u3002 \n\n\n\n\u70B9\u51FB\u540C\u610F\u5373\u8868\u793A\u60A8\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u5600\u55D2\u8D27\u8FD0\u300A\u670D\u52A1\u6761\u6B3E\u300B\u4E0E\u300A\u9690\u79C1\u653F\u7B56\u300B"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "main3s",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "bd1s",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "word6",
                children: "\u4E0D\u540C\u610F"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "bd2",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "info1",
                children: "\u540C\u610F"
              })
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),

/***/ "./src/pages/login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/login/index.tsx");


var config = {"navigationBarTitleText":"请登录","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/login/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/login/style.ts":
/*!**********************************!*\
  !*** ./src/pages/login/style.ts ***!
  \**********************************/
/*! exports provided: StyledOverView, DialogView */
/*! exports used: StyledOverView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyledOverView; });
/* unused harmony export DialogView */
/* harmony import */ var linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linaria/react */ "./node_modules/linaria/esm/react.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");


var StyledOverView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"])({
  name: "StyledOverView",
  class: "s1xuqlrm"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "d1x6kre2",
  vars: {
    "d1x6kre2-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ../../../.linaria-cache/src/pages/login/style.linaria.css */ "./.linaria-cache/src/pages/login/style.linaria.css");

/***/ })

},[["./src/pages/login/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map