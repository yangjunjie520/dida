(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/guonei/baojia/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/baojia/index.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/baojia/index.tsx ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/pages/guonei/baojia/style.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var setCurrentSwiper = function setCurrentSwiper(current) {
    setCurrent(current);
  };

  var params = props.params,
      dispatch = props.dispatch;
  var guaranteeValueAmount = params.guaranteeValueAmount;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(function () {
    return guaranteeValueAmount ? guaranteeValueAmount / 0.05 : 0;
  }),
      _useState4 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
      amount = _useState4[0],
      setAmout = _useState4[1];

  var handleClick = function handleClick() {
    dispatch({
      type: "order/save",
      payload: {
        guaranteeValueAmount: amount ? amount * 0.05 : 0
      }
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateBack({});
  };

  console.log(amount);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_6__[/* StyledOverView */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "box2",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "main5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            lines: "1",
            className: "word2",
            children: "\u8BF7\u8F93\u5165\u7269\u54C1\u5B9E\u9645\u4EF7\u503C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "m-inp",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
              className: "main6",
              placeholder: "0-300000",
              value: amount,
              type: "number",
              onInput: function onInput(e) {
                setAmout(e.detail.value);
              }
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              lines: "1",
              className: "info3",
              children: "\u5143"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "main7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              lines: "1",
              className: "word3",
              children: "\u4FDD\u4EF7\uFF1A"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              lines: "1",
              className: "txt1",
              children: "\xA5".concat(amount ? (amount * 0.05).toFixed(2) : 0.0)
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            lines: "1",
            className: "txt2",
            children: "\u6E29\u99A8\u63D0\u793A:"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            lines: "1",
            decode: "true",
            className: "paragraph1",
            children: "1.\u8BF7\u6309\u7269\u54C1\u5B9E\u9645\u4EF7\u503C\u6765\u586B\u5199\u7269\u54C1\u58F0\u660E\u4EF7\u503C\u3002\n2.\u8FD0\u9001\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u4E22\u5931\u6216\u7834\u635F\uFF0C\u4F1A\u6309\u7269\u54C1\u58F0\u660E\u7684\u5B9E\u9645\u4EF7\u503C\n\u8FDB\u884C-\u5B9A\u6BD4\u4F8B\u8D54\u4ED8\u3002\u4FDD\u4EF7\u4E0D\u8D85100\u4E07\u5143(\u542B)\uFF0C&nbsp;\u8D85\u989D\u4FDD\u4EF7\u90E8\u5206\n\u65E0\u6CD5\u7406\u8D54\u3002\n3.\u5BA2\u6237\u5BC4\u9012\u8D27\u7269\u8BF7\u58F0\u660E\u8D27\u7269\u4EF7\u503C\uFF0C\u5E76\u652F\u4ED8\u76F8\u5E94\u8D39\u7528\u3002\u82E5\u914D\n\u9001\u8FC7\u7A0B\u4E2D\u7531\u4E8E\u670D\u52A1\u5546\u8D23\u4EFB\u9020\u6210\u635F\u5931\u7684\uFF0C\u670D\u52A1\u5546\u4F1A\u6309\u7167\u58F0\u660E\n\u4EF7\u503C\u548C\u635F\u5931\u6BD4\u4F8B\u8FDB\u884C\u8D54\u507F\u3002\n4.\u7279\u5FEB\u91CD\u8D27\u8D39\u7387\u8BA1\u7B97\u89C4\u5219\u4E3A:\u4FDD\u4EF71000\u5143\u4EE5\u5185\u514D\u8D39\uFF0C1000\n\u5143\u4EE5\u4E0A\u6536\u8D39\uFF0C\u8D39\u7387\u4E3A5%\u3002\n5.\u4FDD\u8D39\u8D39\u7387\u7684\u8BA1\u7B97\u89C4\u5219:\u8D39\u7387\u4E3A5%o\uFF0C\u5355\u7968\u6700\u4F4E\u6536\u8D3910\u5143\n(\u4EF7\u683C\u8FDB\u4F4D\u89C4\u5219:\u56DB\u820D\u4E94\u5165\u53D6\u6574)\uFF0C\u4FDD\u4EF7\u4E0A\u9650100\u4E07\u5143\u3002"
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "foot",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
          onClick: handleClick,
          className: "box8s",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            lines: "1",
            decode: "true",
            className: "info2s",
            children: "\u786E\u8BA4\u4FDD\u4EF7"
          })
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[/* connect */ "b"])(function (_ref) {
  var order = _ref.order;
  return Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, order);
})(Index));

/***/ }),

/***/ "./src/pages/guonei/baojia/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/guonei/baojia/index.tsx ***!
  \*******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/baojia/index.tsx");


var config = {"navigationBarTitleText":"保价","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/guonei/baojia/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/guonei/baojia/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/baojia/style.ts":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/pages/guonei/baojia/style.linaria.css = ./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/baojia/style.ts ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/guonei/baojia/style.ts":
/*!******************************************!*\
  !*** ./src/pages/guonei/baojia/style.ts ***!
  \******************************************/
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
  class: "s1jqtux3"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "dugkhj",
  vars: {
    "dugkhj-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ./style.linaria.css = ../../../../node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./style.ts */ "./src/pages/guonei/baojia/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/baojia/style.ts");

/***/ })

},[["./src/pages/guonei/baojia/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map