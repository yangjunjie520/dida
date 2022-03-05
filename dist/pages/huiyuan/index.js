(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/huiyuan/index"],{

/***/ "./.linaria-cache/src/pages/huiyuan/style.linaria.css":
/*!************************************************************!*\
  !*** ./.linaria-cache/src/pages/huiyuan/style.linaria.css ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/huiyuan/index.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/huiyuan/index.tsx ***!
  \*******************************************************************************************************************/
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/pages/huiyuan/style.ts");
/* harmony import */ var _static_images_huiyuan_icon_share_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/images/huiyuan/icon_share.png */ "./src/static/images/huiyuan/icon_share.png");
/* harmony import */ var _static_images_huiyuan_icon_share_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_huiyuan_icon_share_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_huiyuan_icon_laba_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/images/huiyuan/icon_laba.png */ "./src/static/images/huiyuan/icon_laba.png");
/* harmony import */ var _static_images_huiyuan_icon_laba_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_huiyuan_icon_laba_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/navbar */ "./src/components/navbar/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var _Taro$getMenuButtonBo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getMenuButtonBoundingClientRect(),
    height = _Taro$getMenuButtonBo.height;

var WayBill = function WayBill(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_Users_apple_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_4__[/* StyledOverView */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "bd1",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_navbar__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "outer2",
          style: {
            height: "".concat(height, "px"),
            alignItems: 'center'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "b"], {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng264c18d51b5f751eed7b7c217f1a4539ba96e0f4d7e2c645b3942c7ade4c0ba7",
            className: "icon2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
            lines: "1",
            className: "txt1",
            children: "\u4F1A\u5458"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "outer4",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "mod1"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "mod2",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "box1",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "txt2",
                children: "\u5FAE\u4FE1\u6635\u79F0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
                className: "main2",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                  lines: "1",
                  className: "info1",
                  children: "\u5600\u55D2\u5408\u4F19\u4EBA"
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "box2",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                decode: "true",
                className: "word2",
                children: "\u9080\u8BF7\u7801\xA0EHBJID"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "info2",
                children: "\u590D\u5236"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "mod3",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], {
              bindtap: "onClick",
              className: "block1",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "txt3",
                children: "\u63D0\u73B0"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "block2",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "b"], {
                src: _static_images_huiyuan_icon_share_png__WEBPACK_IMPORTED_MODULE_5___default.a,
                className: "label2"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "info3",
                children: "\u5206\u4EAB\u5E97\u94FA"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "layer3",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "outer5",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "main4",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "bd8",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "word9",
                children: "\xA5"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "txt11",
                children: "600"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
              lines: "1",
              className: "word10",
              children: "\u53EF\u63D0\u73B0"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "main5"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "main6",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "main7",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "word11",
                children: "\xA5"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "word12",
                children: "1200"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
              lines: "1",
              className: "word13",
              children: "\u7D2F\u8BA1\u6536\u76CA"
            })]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "bd2",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Image */ "b"], {
          src: _static_images_huiyuan_icon_laba_png__WEBPACK_IMPORTED_MODULE_6___default.a,
          className: "label3"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
          lines: "1",
          className: "txt4",
          children: "\u7528\u6237***\u521A\u521A\u83B7\u5F9721.86\u5143\u8D27\u8FD0\u6536\u76CA"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "bd3"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "bd4",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "layer2",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "block3",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
              lines: "1",
              className: "txt5",
              children: "\u6211\u7684\u56E2\u961F"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "main3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "word3",
                children: "\u9080\u8BF7\u5E97\u957F"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "block4"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "block5",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "bd5-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
                className: "section1-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                  lines: "1",
                  className: "word4-0",
                  children: "204"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                  lines: "1",
                  className: "word6-0",
                  children: "\u76F4\u5C5E\u5408\u4F19\u4EBA"
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "bd5-0 ",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
                className: "section1-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                  lines: "1",
                  className: "word4-1",
                  children: "109"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                  lines: "1",
                  className: "word6-1",
                  children: "\u76F4\u5C5E\u5E97\u957F"
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "bd5-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
                className: "section1-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                  lines: "1",
                  className: "word4-2",
                  children: "24"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                  lines: "1",
                  className: "word6-2",
                  children: "\u76F4\u5C5E\u7528\u6237"
                })]
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "bd5-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
                className: "section1-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                  lines: "1",
                  className: "word5-3",
                  children: "500"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                  lines: "1",
                  className: "word6-3",
                  children: "\u603B\u7528\u6237"
                })]
              })
            })]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
        className: "bd6",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
          className: "bd7",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
            lines: "1",
            className: "txt6",
            children: "\u603B\u6D41\u6C34"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "box3"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "box4",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "box5",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "word7",
                children: "\xA5"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "info4",
                children: "230.27"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "box6",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "info5",
                children: "\xA5"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "txt7",
                children: "100.00"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
              className: "box7",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "word8",
                children: "\xA5"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
                lines: "1",
                className: "txt8",
                children: "1240.50"
              })]
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"], {
            className: "box8",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
              lines: "1",
              className: "info6",
              children: "\u76F4\u5C5E\u5408\u4F19\u4EBA"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
              lines: "1",
              className: "txt9",
              children: "\u76F4\u5C5E\u5E97\u957F"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "h"], {
              lines: "1",
              className: "txt10",
              children: "\u76F4\u5C5E\u7528\u6237"
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (WayBill);

/***/ }),

/***/ "./src/pages/huiyuan/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/huiyuan/index.tsx ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/huiyuan/index.tsx");


var config = {"navigationBarTitleText":"会员","navigationStyle":"custom","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/huiyuan/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/huiyuan/style.ts":
/*!************************************!*\
  !*** ./src/pages/huiyuan/style.ts ***!
  \************************************/
/*! exports provided: StyledOverView, ZhongHuo, DianZhang, DialogView */
/*! exports used: StyledOverView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyledOverView; });
/* unused harmony export ZhongHuo */
/* unused harmony export DianZhang */
/* unused harmony export DialogView */
/* harmony import */ var linaria_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! linaria/react */ "./node_modules/linaria/esm/react.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");


var StyledOverView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"])({
  name: "StyledOverView",
  class: "si2q32u"
});
var ZhongHuo = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"])({
  name: "ZhongHuo",
  class: "zmq2zky"
});
var DianZhang = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "j"])({
  name: "DianZhang",
  class: "dqrwnm"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "de1gu6t",
  vars: {
    "de1gu6t-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ../../../.linaria-cache/src/pages/huiyuan/style.linaria.css */ "./.linaria-cache/src/pages/huiyuan/style.linaria.css");

/***/ }),

/***/ "./src/static/images/huiyuan/icon_laba.png":
/*!*************************************************!*\
  !*** ./src/static/images/huiyuan/icon_laba.png ***!
  \*************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABxklEQVQ4Ec2SP0gcQRTGvzdzq5dGzhAIbiMEBMFKSJtSSWOwiI3EU5vlSBE0/kHQkBVBLBQsUmy2EhGEawLCiZ1gsLCx1T5w6cKpIPGSnZdvyS3GZHszy+yb3Xm/N9/7doH/egRBMMM5norUKZQ0hPlb8D8vsgSCi8VicT2BGdQRPISRE1zLqU7bySwnjbkFCL8TkaVms/nVijr0oQGjZSRyBM9F+tZ8yNQUwjAs1Ov11wSepBUZfYZhzleq+oKzHSfw0Gu70UyW0YZ9WNRwhWPm7BrCJS5WOJ8zuZ8FHjGORVFUdc61K8ThMR4wrKAox4Q/w8k2VN4ozysQTEdCaCaO49rvx9s7O7CyhYbO6jOCZ9wZhro9skMI0JHrwS3+x+oHpHXx4NboBDIFltI3aN68tTZVww6iapqmYhKdQAmWBirqcPgEMTF3zrGGy4Lv+w36sMgCPQTBvn2ud1hMGW+cahvrfCcU4jo5oBsD/CKjbPqlCOu3xNwJhN8TXjDGfPvp3GHc9bGMCzyFMWXCAb3YlA03n0K5HtDMZapZ9TzPd9SBL2zByA5hGmkmM/jOqXkPVDJXqVQm0j1dQCf/SJuXd7/vfgGWHLT2WFLEugAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/static/images/huiyuan/icon_share.png":
/*!**************************************************!*\
  !*** ./src/static/images/huiyuan/icon_share.png ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAATDPpdAAABcklEQVQoFWVRzytFQRg9Z+5c4j2ssFDKliLZS/m1I/8AYaOwkGz8B8qCnYUQW8XCxkpsJBtZKKWwIJE87148z535zL3Ie3w1M9+vc76ZMwyudsXXHkpKfPwYfR+vQTCQqu/dlrV0u7Go0SPhZlzXvtb4iKKTfGT2SKo4WZqPYMpqz2IfgkZPc05WKnIcCXZo7/clzOXnK+u7Z5KG702W0ILy1CQsWwXOp8MajCeMFPm9T0y6mh5DquIAUDUu3AIZUHCuhKcJoIh5tapbiEUIJzgY9LlalpRL0PRwNDgsAojAEZlpdy5zMLuREIleRz7s4tDbTRzrJFmw0agJmvQtECZZDmcymbujhvDqecFqNVUEIJ0myF64VUAB8PWp2pL9Gt7s16MJU9TxJ7DAuxMpB7GSTBCRusz1bhsiN+OP+VokMqoJtF5c0i9v748Q6fSgOuB0i5OFJkLRWpQVPNlIGa2IZrgPJr1/zYVAJ4ZJHT88fAJSsJP5jUYtsQAAAABJRU5ErkJggg=="

/***/ })

},[["./src/pages/huiyuan/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map