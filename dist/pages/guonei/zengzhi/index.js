(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/guonei/zengzhi/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/zengzhi/index.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/zengzhi/index.tsx ***!
  \**************************************************************************************************************************/
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/pages/guonei/zengzhi/style.ts");
/* harmony import */ var _static_images_warning_circle_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../static/images/warning-circle.png */ "./src/static/images/warning-circle.png");
/* harmony import */ var _static_images_warning_circle_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_warning_circle_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var Index = function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var params = props.params,
      dispatch = props.dispatch;
  var collectionMoney = params.collectionMoney;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(collectionMoney),
      _useState4 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
      money = _useState4[0],
      setMoney = _useState4[1];

  var handleClick = function handleClick() {
    dispatch({
      type: "order/save",
      payload: {
        collectionMoney: money
      }
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateBack({});
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_6__[/* StyledOverView */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "group2",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "mod2",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box1",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt1",
              children: "\u5305\u88C5\u670D\u52A1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ "i"], {
              color: "#ff7201"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "word1",
            children: "\u6297\u9707\u3001\u51CF\u538B\u3001\u7F13\u51B2\u7B49\u4E13\u4E1A\u5305\u88C5"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box3"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "word2",
            children: "\u5305\u88C5\u660E\u7EC6"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "infoBox1",
            children: "\u5305\u88C5\u9700\u989D\u5916\u6536\u8D39\uFF0C\u4EE5\u4E0B\u4FE1\u606F\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5B9E\u9645\u670D\u52A1\u60C5\u51B5\u8BF7\u4EE5\xA0\u5F53\u5730\u8425\u4E1A\u7F51\u70B9\u60C5\u51B5\u4E3A\u51C6"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "word3",
            children: "\u7EB8\u7BB1"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box4",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info3",
              children: "\u540D\u79F0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info4",
              children: "\u5C3A\u5BF8(cm\uFF09"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word4",
              children: "\u6536\u8D39\u6807\u51C6"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box5",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word5",
              children: "1\u53F7\u7EB8\u7BB1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt2",
              children: "20*18*10"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word6",
              children: "1\u5143/\u4E2A"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box6",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt3",
              children: "2\u53F7\u7EB8\u7BB1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word7",
              children: "30*23*23"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info5",
              children: "3\u5143/\u4E2A"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt4",
              children: "3\u53F7\u7EB8\u7BB1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word8",
              children: "46*28*33"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word9",
              children: "5\u5143/\u4E2A"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box8",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info6",
              children: "4\u53F7\u7EB8\u7BB1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt5",
              children: "50*32*54"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info7",
              children: "10\u5143/\u4E2A"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box9",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word10",
              children: "5\u53F7\u7EB8\u7BB1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt6",
              children: "60*50*40"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt7",
              children: "15\u5143/\u4E2A"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "info8",
            children: "\u7F16\u7EC7\u888B"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box10",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word11",
              children: "\u540D\u79F0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word12",
              children: "\u5C3A\u5BF8(cm\uFF09"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info9",
              children: "\u6536\u8D39\u6807\u51C6"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box11",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info10",
              children: "\u767D\u82721\u53F7"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word13",
              children: "150*120"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word14",
              children: "10\u5143/\u4E2A"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info11",
              children: "\u767D\u82722\u53F7"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word15",
              children: "120*100"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word16",
              children: "8\u5143/\u4E2A"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box13",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt8",
              children: "\u767D\u82723\u53F7"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt9",
              children: "100*80"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word17",
              children: "5\u5143/\u4E2A"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box14",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word18",
              children: "\u767D\u82724\u53F7"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word19",
              children: "80*60"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info12",
              children: "3\u5143/\u4E2A"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "info13",
            children: "\u6253\u6728\u7BB1"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box15",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word20",
              children: "\u540D\u79F0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word21",
              children: "\u5C3A\u5BF8(cm\uFF09"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word22",
              children: "\u6536\u8D39\u6807\u51C6"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box16",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word23",
              children: "\u6728\u7BB1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "infoBox2",
              children: "\u8BA1\u8D39\u4F53\u79EF=\u957F*\u9AD8*\u5BBD\xA0(cm)*1.4(\u7CFB\u6570)"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "paragraph1",
              children: "200\u5143/\u65B9\xA0\u6700\u4F4E40\u5143/\u7968"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "info14",
            children: "\u6728\u6258\u76D8"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box17",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt10",
              children: "\u540D\u79F0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word24",
              children: "\u5C3A\u5BF8(cm\uFF09"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word25",
              children: "\u6536\u8D39\u6807\u51C6"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box18",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word26",
              children: "\u6807\u51C6\u6258\u76D8"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt11",
              children: "120*100(\u957F*\u5BBD)"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word27",
              children: "60\u5143/\u5757"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "word28",
            children: "\u7F13\u51B2\u7269"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box19",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt12",
              children: "\u540D\u79F0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word29",
              children: "\u5C3A\u5BF8(cm\uFF09"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt13",
              children: "\u6536\u8D39\u6807\u51C6"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box20",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word30",
              children: "\u7F20\u7ED5\u819C"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt14",
              children: "100*100*1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "infoBox3",
              children: "50\u5143/\u65B9\xA0\u6700\u4F4E10\u5143/\u7968"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box21",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt15",
              children: "\u6C14\u6CE1\u819C"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word31",
              children: "100*100*1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word32",
              children: "2.5\u5143/\u7C73"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "box22",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt16",
              children: "\u73CD\u73E0\u68C9"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt17",
              children: "100*100*1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word33",
              children: "10\u5143/\u5F20"
            })]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "group3",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "bd3",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "layer3",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt18",
              children: "\u4EE3\u6536\u8D27\u6B3E"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
              src: _static_images_warning_circle_png__WEBPACK_IMPORTED_MODULE_7___default.a,
              className: "icon3"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ "i"], {
              color: "#ff7201"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "infoBox4",
            children: "\u7B7E\u6536\u6210\u529F\u540E\u5E76\u4E14\u5230\u8FD4\u6B3E\u65F6\u95F4\u540E\uFF0C\u8D27\u6B3E\u4F1A\u76F4\u63A5\u8FD4\u6B3E\u5230\u60A8\u7684\u8D26 \u6237\u91CC"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "layer4"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "layer5",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word34",
              children: "\u4EE3\u6536\u91D1\u989D"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
              className: "group4",
              placeholder: "\u8BF7\u8F93\u5165\u4EE3\u6536\u8FD8\u6B3E\u91D1\u989D(1-10\u4E07\u5143\u4EE5\u5185)",
              value: money,
              type: "number",
              onInput: function onInput(e) {
                setMoney(e.detail.value);
              }
            })]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "foot",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "box7s",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7a499fe45eed64ab25c974fecf15c70d576d564de3843223ef9dc9c37df903e5",
            className: "icon4"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "info1",
            children: "\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u300A\u4EE3\u6536\u8D27\u670D\u52A1\u534F\u8BAE\u300B"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
          onClick: handleClick,
          className: "box8s",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            decode: "true",
            className: "info2",
            children: "\u786E\xA0\u5B9A"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[/* connect */ "b"])(function (_ref) {
  var order = _ref.order;
  return Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, order);
})(Index));

/***/ }),

/***/ "./src/pages/guonei/zengzhi/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/guonei/zengzhi/index.tsx ***!
  \********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/zengzhi/index.tsx");


var config = {"navigationBarTitleText":"增值服务","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/guonei/zengzhi/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/guonei/zengzhi/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/zengzhi/style.ts":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/pages/guonei/zengzhi/style.linaria.css = ./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/zengzhi/style.ts ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/guonei/zengzhi/style.ts":
/*!*******************************************!*\
  !*** ./src/pages/guonei/zengzhi/style.ts ***!
  \*******************************************/
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
  class: "s1ql950a"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "d193fymt",
  vars: {
    "d193fymt-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ./style.linaria.css = ../../../../node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./style.ts */ "./src/pages/guonei/zengzhi/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/zengzhi/style.ts");

/***/ })

},[["./src/pages/guonei/zengzhi/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map