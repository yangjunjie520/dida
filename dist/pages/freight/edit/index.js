(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/freight/edit/index"],{

/***/ "./.linaria-cache/src/pages/freight/edit/style.linaria.css":
/*!*****************************************************************!*\
  !*** ./.linaria-cache/src/pages/freight/edit/style.linaria.css ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/freight/edit/index.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/freight/edit/index.tsx ***!
  \************************************************************************************************************************/
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/pages/freight/edit/style.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var Edit = function Edit(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var setCurrentSwiper = function setCurrentSwiper(current) {
    setCurrent(current);
  };

  var overView = props.overView,
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_5__[/* StyledOverView */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "head",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "section3",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "layer1",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "mod2",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              className: "word2",
              children: "\u5BC4"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "mod3",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "info1",
              children: "\u5BC4\u4EF6\u4EBA\xA0\xA0123****12313"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox1",
              children: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u7559\u5B66\u751F \u521B\u4E1A\u5927\u53A61304\u5BA4"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "layer2"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "layer3s",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "main1",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              className: "info2",
              children: "\u6536"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "main2",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "txt2",
              children: "\u6536\u4EF6\u4EBA\xA0\xA0123****12313"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
              lines: "1",
              className: "paragraph1",
              children: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u7559\u5B66\u751F \u521B\u4E1A\u5927\u53A61304\u5BA4"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "main3"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
            lines: "1",
            className: "info3",
            children: "\u5730\u5740\u7C3F"
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "layer3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "layer4",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "mod2-0",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                className: "input",
                children: "\u671F\u671B\u4E0A\u95E8\u65F6\u95F4"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
                className: "opt",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                  className: "blod",
                  children: "\u4ECA\u5929 2\u5C0F\u65F6\u5185"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
                  value: "chevron-right",
                  size: "28",
                  color: "#999999 "
                })]
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "mod2-0",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                className: "input",
                children: "\u9884\u8BA1\u9001\u8FBE\u65F6\u95F4"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
                className: "opt",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                  className: "blod",
                  children: "2\u670812\u65E5 23:59"
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "mod2-0",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                className: "input",
                children: "\u7269\u54C1\u4FE1\u606F"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
                className: "opt",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                  className: "blod",
                  children: "10m3 /98KG/1\u4EF6/\u670D\u88C5"
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "mod2-0",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                className: "input",
                children: "\u4ED8\u6B3E\u65B9\u5F0F"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
                className: "opt",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                  className: "blod",
                  children: "\u5BC4\u4ED8\u73B0\u7ED3"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
                  value: "chevron-right",
                  size: "28",
                  color: "#999999 "
                })]
              })]
            })
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
      className: "layer3",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
        className: "layer4",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "mod2-0",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                className: "input",
                children: "\u4FDD\u4EF7"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
                className: "opt",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                  className: "blod",
                  children: "999\u5143"
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
          className: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
            className: "group1-0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
              className: "mod2-0",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                className: "input",
                children: "\u589E\u503C\u670D\u52A1"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "j"], {
                className: "opt",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
                  className: "blod",
                  children: "\u7B7E\u5355\u8FD4\u8FD8"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
                  value: "chevron-right",
                  size: "28",
                  color: "#999999 "
                })]
              })]
            })
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
      bindtap: "onClick",
      className: "layer5",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "h"], {
        lines: "1",
        decode: "true",
        className: "info2",
        children: "\u786E\xA0\u5B9A"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),

/***/ "./src/pages/freight/edit/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/freight/edit/index.tsx ***!
  \******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/freight/edit/index.tsx");


var config = {"navigationBarTitleText":"修改运单","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/freight/edit/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/freight/edit/style.ts":
/*!*****************************************!*\
  !*** ./src/pages/freight/edit/style.ts ***!
  \*****************************************/
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
  class: "s1cosv4y"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "d1i3voze",
  vars: {
    "d1i3voze-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ../../../../.linaria-cache/src/pages/freight/edit/style.linaria.css */ "./.linaria-cache/src/pages/freight/edit/style.linaria.css");

/***/ })

},[["./src/pages/freight/edit/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map