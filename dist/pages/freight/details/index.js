(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/freight/details/index"],{

/***/ "./.linaria-cache/src/pages/freight/details/style.linaria.css":
/*!********************************************************************!*\
  !*** ./.linaria-cache/src/pages/freight/details/style.linaria.css ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/freight/details/index.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/freight/details/index.tsx ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui/lib/components/icon */ "./node_modules/taro-ui/lib/components/icon/index.js");
/* harmony import */ var _Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/pages/freight/details/style.ts");
/* harmony import */ var _static_images_yundan_icon_quxiao_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../static/images/yundan/icon_quxiao.png */ "./src/static/images/yundan/icon_quxiao.png");
/* harmony import */ var _static_images_yundan_icon_quxiao_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_yundan_icon_quxiao_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_yundan_icon_xiugai_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../static/images/yundan/icon_xiugai.png */ "./src/static/images/yundan/icon_xiugai.png");
/* harmony import */ var _static_images_yundan_icon_xiugai_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_yundan_icon_xiugai_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/navbar */ "./src/components/navbar/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var _Taro$getMenuButtonBo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.getMenuButtonBoundingClientRect(),
    height = _Taro$getMenuButtonBo.height;

var WayBillDatails = function WayBillDatails(props) {
  var _jsx2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState2 = Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var setCurrentSwiper = function setCurrentSwiper(current) {
    setCurrent(current);
  };

  var overView = props.overView,
      dispatch = props.dispatch;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {// dispatch({ type: 'waybill/getDefault' })
    // // 监听时区变化
    // Taro.eventCenter.on('timeZoneOnChange', arg => {
    //   dispatch({ type: 'waybill/getDefault' })
    // })
    // Taro.showShareMenu({
    //   withShareTicket: true,
    // })
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_6__[/* StyledOverView */ "a"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "f"], {
      scrollY: true,
      className: 'scrollview',
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
        className: "section1",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_navbar__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "main2s",
          style: {
            height: "".concat(height, "px"),
            alignItems: 'center'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
            value: "chevron-LEFT",
            size: "30",
            color: "#FFF",
            className: "label2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            className: "info2",
            children: "\u8FD0\u5355\u8BE6\u60C5"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "main3",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            className: "txt1",
            children: "\u67D0\u67D0\u67D0"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            className: "word1",
            children: "\u5F85\u53D6\u4EF6"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            className: "word2",
            children: "\u67D0\u67D0\u67D0"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "main4",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            className: "info3",
            children: "\u6DF1\u5733\u5E02"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6f988cf86efc9efa12167ecb77d6c598173d9af90d2b7520dabb8e6edc8eaedf",
            className: "pic1"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            className: "info3",
            children: "\u6DF1\u5733\u5E02"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "main5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            className: "info5s",
            children: "\u8FD0\u5355\u53F7\uFF1A1234243243"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc5c5548cf42781c6f76f016c0c7b9ece38c882121a20076f05eb9431e8a73c7b",
            className: "icon2"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "main6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            decode: "true",
            className: "info5s",
            children: "\u4E0B\u5355\u65F6\u95F4\uFF1A2021-09-09\xA0\xA017:04:23"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
        className: "box4",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "mod3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            className: "word14",
            children: "\u8FD0\u5355\u4FE1\u606F"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "mod5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info15",
              children: "\u5DF2\u7B7E\u6536"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "section8"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "section9"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod8",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "word20",
              children: "2021-09-09\xA017:06:22"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "word18",
              children: "\u8FD0\u5355\u5DF2\u7B7E\u6536"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "mod5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "word16",
              children: "\u6D3E\u4EF6\u4E2D"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "section8"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "section9"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod8",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "word20",
              children: "2021-09-09\xA017:06:22"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              className: "word18",
              children: "\u8D27\u7269\u4EA4\u7ED9\u67D0\u67D0\u67D0\uFF0C\u6B63\u5728\u6D3E\u4EF6\u9014\u4E2D(\u8054\u7CFB\u7535\u8BDD:\xA0 1231234567\uFF0C\u603B\u4EF6\u6570:\xA01\u4EF6)"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "mod5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "word16",
              children: "\u8FD0\u8F93\u4E2D"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "section8"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "section9"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod8",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "word20",
              children: "2021-09-09\xA017:06:22"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "word18",
              children: "\u8D27\u7269\u5DF2\u53D1\u8F66"
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "mod5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "word16",
              children: "\u5F85\u53D6\u4EF6"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod7",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "main2",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], (_jsx2 = {
                className: "1"
              }, Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsx2, "className", "info18"), Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_jsx2, "children", "\u5BC4"), _jsx2))
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "mod8",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              decode: "true",
              className: "word20",
              children: "2021-09-09\xA017:06:22"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "word18",
              children: "\u8FD0\u5355\u5DF2\u521B\u5EFA"
            })]
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
        className: "bd2",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "block2",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
            lines: "1",
            className: "info4",
            children: "\u8BA2\u5355\u4FE1\u606F"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group1",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "box2",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
                lines: "1",
                className: "txt2",
                children: "\u5BC4"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "box3",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
                lines: "1",
                decode: "true",
                className: "word6",
                children: "\u5BC4\u4EF6\u4EBA\xA0\xA0123****12313"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
                lines: "1",
                className: "paragraph1",
                children: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u7559\u5B66\u751F\u521B\u4E1A\u5927\u53A6 1304\u5BA4"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group2",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "layer1",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
                lines: "1",
                className: "info5",
                children: "\u6536"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
              className: "layer2",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
                lines: "1",
                decode: "true",
                className: "info6",
                children: "\u6536\u4EF6\u4EBA\xA0\xA0123****12313"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
                lines: "1",
                className: "infoBox1",
                children: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u7559\u5B66\u751F\u521B\u4E1A\u5927\u53A6 1304\u5BA4"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u9884\u4F30\u8D39\u7528"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "199.00\u5143"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u4FDD\u9669\u8D39\u7528"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "100.00\u5143"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u5305\u88C5\u8D39\u7528"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "10.00\u5143"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u8D39\u7528\u5408\u8BA1\xA0"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "309.00\u5143"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u652F\u4ED8\u65B9\u5F0F"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "\u5BC4\u4ED8\u73B0\u7ED3"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u65F6\u6548\u7C7B\u578B"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "\u7279\u5FEB\u91CD\u8D27"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u7269\u54C1\u4FE1\u606F"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "\u670D\u88C5/59KG/10m3/1\u4EF6/\u8F7B\u62FF \u8F7B\u653E"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u4EAC\u4E1C\u79F0\u91CD"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "\u670D\u88C5/59KG/10m3/1\u4EF6"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u4FDD\u4EF7\u91D1\u989D"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "000.00\u5143"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "group12",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info13",
              children: "\u589E\u503C\u670D\u52A1"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "infoBox2",
              children: "\u7B7E\u5355\u8FD4\u8FD8;\u4EE3\u6536\u8D27\u6B3E\uFF0C\u4EE3\u6536\u91D1 \u989D:10000.00\u5143"
            })]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
        className: "section4",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
          className: "block3",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "bd8",
            onClick: function onClick() {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
                url: '/pages/freight/edit/index'
              });
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
              src: _static_images_yundan_icon_xiugai_png__WEBPACK_IMPORTED_MODULE_8___default.a,
              className: "icon3"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "txt6",
              children: "\u4FEE\u6539\u8FD0\u5355"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "j"], {
            className: "bd9",
            onClick: function onClick() {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default.a.navigateTo({
                url: '/pages/freight/clear/index'
              });
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
              src: _static_images_yundan_icon_quxiao_png__WEBPACK_IMPORTED_MODULE_7___default.a,
              className: "label3"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "word10",
              children: "\u53D6\u6D88\u8FD0\u5355"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
            bindtap: "onClick",
            className: "bd10",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "h"], {
              lines: "1",
              className: "info9",
              children: "\u5206\u4EAB"
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (WayBillDatails);

/***/ }),

/***/ "./src/pages/freight/details/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/freight/details/index.tsx ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/freight/details/index.tsx");


var config = {"navigationBarTitleText":"Home","navigationStyle":"custom","disableScroll":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/freight/details/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/freight/details/style.ts":
/*!********************************************!*\
  !*** ./src/pages/freight/details/style.ts ***!
  \********************************************/
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
  class: "sppwags"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "d1eks3b2",
  vars: {
    "d1eks3b2-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ../../../../.linaria-cache/src/pages/freight/details/style.linaria.css */ "./.linaria-cache/src/pages/freight/details/style.linaria.css");

/***/ }),

/***/ "./src/static/images/yundan/icon_quxiao.png":
/*!**************************************************!*\
  !*** ./src/static/images/yundan/icon_quxiao.png ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAA81BMVEUAAAD/gAD/VQBAQED/gAD/ZgD/bQD/gAD/dAD/agD/dgD/dwBLS1pHR1VATVlNTVlDQ1lDTllASlVFRVhCQlVFRVtDR1j/cQD/cQP/dANDRlpFSFlFR1hCR1hER1hDSFn/dAL/cwL/cgL/cQL/cwL/cgL/cwL/cgJESFlER1hER1pDR1pERlj/cgL/dQL/cQL/cwL/cwL/cwJDRllDRlhESFpFSFn/cwFER1hDRln/cwH/cwFDRlhESFpFSFtFR1tDR1lDRlhERlhDRllER1pDRlhER1lERlhESFpDRlhDRln/dwH/eAH/egH/ewH/fQH/fgEQSTJ1AAAAS3RSTlMAAgMEBAUHCAsMDQ8REhQUFxcYGhs7PUhaWltcXWVlZ25xfX6FhoyNkpOTlJaYmJmbnZ6nqKqrr7Gys7TG4ODh4+Tk7+/w8PHz9PQ4GIPPAAAA70lEQVQoz2NgIBuISGtbWmpLi6AJC2m4OduYmNg4u2kIIYuL2dvKC4IYgvK29mIIcVEPUz4Ym8/UQxTGFnAyY0aoYjZzEoAyNR14kM3lcdSEMIQ9ZYGkuBIrkFSUBBJyXsJgCRlXkAXKAYYsDKr+BkAmv7sMWELHBkSyG/rpq/hacYPYNjpgCUtjMMWi6+1tzglmmlgiSzCoePsYMSFLQIxiVPU1N/I1ZEMyCmK5or81B6OhvzqS5cKeckBSQo+LgYFVTQHJuege5IV5EHeQ4AxEYLDbIYLdTgw1olwgEeWCGlEgt0lpWVhoSQmTnzgAkU0gDupaoWkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/static/images/yundan/icon_xiugai.png":
/*!**************************************************!*\
  !*** ./src/static/images/yundan/icon_xiugai.png ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAABSlBMVEUAAABAQEBAQID/gABAQGA5OVU7O2I7TmJOTmJAUGD/cABLS1r/ZgD/bQD/dADgcApCQlVHR1z/cQBFRVpDQ1dGRlk3Q2GfWy1BR1dHR1dARVVARVpFRVVFRVpESVhCR1xCR1r/dAD/cwD/dgBDR1lbTU13U0JFRVhDRllERlhDRVhDSFhFR1pER1lERlhERlpESFpDRVdERlhqUUtDRVlCRlhER1lER1j/cQBESFpBR1xER1lBRllER1hFSFlERllER1lER1pFR1pESFpFR1lER1pFSFpERllERlhARVn/cwFER1pESFpERlhFR1pDRlhER1lFSFpGSFtESFlGSVxER1pFR1pFSVpFSFpBRllDRlhBRlr/dQD/cQBFSFr/cgD/cgH/cwH/cwFFSFpDRldER1lFSFtER1lFSFpFSFtESFxFSFpGSVxIS15ofa87AAAAbHRSTlMABAQECAkNDQ0QEBEUFRYZGyQkJSYoKi0vLzAwMDAxMjY5RUVISU1OX2Zrbm9wcXFxcnR0gYOEiJGkqqqsra6vr6+2ubq8xM/T1tje4OHi5OXm5ufn6Ojo6e3t7u7v8PDw8PHz9fj6+/z8/f22u81IAAAAxElEQVQoz2NgoBXQtuTAKq6XGufMjkVcN1lDxM+FDUNcJ9edkUHUx4kb3Zx0M187Vga5HHM08QxNBtkIWwFrP3lU8WxNICnhHRIggyJuABZnYHINkkQR188Ei7M6BEqhiBtmQMTtw6VRxLXSwOIsjmGo6ln8TSHmhKHayyCYogARl0LzmXoUJ0g8FF2cwcRDWMXILVgGI4xssqIjPa3EMANV1VhNnJ+Hhw8KuOASFjGx8QmJMJDkxQuTEFJWQgaKzOTFPgDYyyEBGjSjmAAAAABJRU5ErkJggg=="

/***/ })

},[["./src/pages/freight/details/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map