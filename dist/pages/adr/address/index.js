(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/adr/address/index"],{

/***/ "./.linaria-cache/src/pages/adr/address/style.linaria.css":
/*!****************************************************************!*\
  !*** ./.linaria-cache/src/pages/adr/address/style.linaria.css ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/adr/address/index.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/adr/address/index.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var taro_ui_lib_components_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui/lib/components/input */ "./node_modules/taro-ui/lib/components/input/index.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/pages/adr/address/style.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var Address = function Address(props) {
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
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "header",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui_lib_components_input__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
        className: "layer3",
        placeholder: "\u8FD0\u5355\u53F7\u67E5\u8BE2/\u5173\u952E\u5B57\u7D22\u5F15",
        name: "order",
        onChange: function onChange(e) {
          return console.log(e);
        }
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "mod2",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "tab",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
          lines: "1",
          className: "word2",
          children: "\u5BC4\u4EF6\u4EBA\u5730\u5740\u7C3F"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "active"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "tab",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
          lines: "1",
          className: "word3",
          children: "\u6536\u4EF6\u4EBA\u5730\u5740\u7C3F"
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "cont-box",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "item",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "box1",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng01967dbc284fd6fa6ff8e9d91c24943dae9c3847ebdac60b35125449588df629",
            className: "label2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "bd2"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "bd1-0",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "outer1-0",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "info1-0",
              children: "\u67D0\u67D0\u67D0\xA0\xA0123****12313"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              className: "word6-0",
              children: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u7559\u5B66\u751F\u521B\u4E1A\u5927\u53A61304\u5BA4"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "main2-0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "main3-0",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
                src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd65a38bc31deefc8bc07dfc92083dba422bf5fbd9f581c2d7aab0bc1655929de",
                className: "label3-0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                lines: "1",
                className: "txt1-0",
                children: "\u9ED8\u8BA4\u5BC4\u4EF6\u5730\u5740"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
                src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngda26c7f14bcf0b64e4f0995c712bf2348f671dc9e452d856c78cf9488629bafe",
                className: "label4-0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                lines: "1",
                className: "info2-0",
                children: "\u7F16\u8F91"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
                src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge2ce394495eda650fc19789244ad1e40cabcf1c786e9e06740f9d52feaa4da96",
                className: "icon2-0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                lines: "1",
                className: "info3-0",
                children: "\u5220\u9664"
              })]
            })]
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "item",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "box1",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng01967dbc284fd6fa6ff8e9d91c24943dae9c3847ebdac60b35125449588df629",
            className: "label2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "bd2"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "bd1-0",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "outer1-0",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "info1-0",
              children: "\u67D0\u67D0\u67D0\xA0\xA0123****12313"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              className: "word6-0",
              children: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u7559\u5B66\u751F\u521B\u4E1A\u5927\u53A61304\u5BA4"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "main2-0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "main3-0",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
                src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd65a38bc31deefc8bc07dfc92083dba422bf5fbd9f581c2d7aab0bc1655929de",
                className: "label3-0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                lines: "1",
                className: "txt1-0",
                children: "\u9ED8\u8BA4\u5BC4\u4EF6\u5730\u5740"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
                src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngda26c7f14bcf0b64e4f0995c712bf2348f671dc9e452d856c78cf9488629bafe",
                className: "label4-0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                lines: "1",
                className: "info2-0",
                children: "\u7F16\u8F91"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
                src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge2ce394495eda650fc19789244ad1e40cabcf1c786e9e06740f9d52feaa4da96",
                className: "icon2-0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                lines: "1",
                className: "info3-0",
                children: "\u5220\u9664"
              })]
            })]
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "block5",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
        bindtap: "onClick",
        className: "group1",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
          lines: "1",
          className: "txt5",
          children: "\u5220\u9664"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
        onClick: function onClick() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
            url: '/pages/my/address/add/index'
          });
        },
        className: "section2",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
          lines: "1",
          className: "word8",
          children: "\u65B0\u589E\u5730\u5740"
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Address);

/***/ }),

/***/ "./src/pages/adr/address/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/adr/address/index.tsx ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/adr/address/index.tsx");


var config = {"navigationBarTitleText":"地址管理","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/adr/address/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/adr/address/style.ts":
/*!****************************************!*\
  !*** ./src/pages/adr/address/style.ts ***!
  \****************************************/
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
  class: "s1x051o3"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "dogx3yz",
  vars: {
    "dogx3yz-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ../../../../.linaria-cache/src/pages/adr/address/style.linaria.css */ "./.linaria-cache/src/pages/adr/address/style.linaria.css");

/***/ })

},[["./src/pages/adr/address/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map