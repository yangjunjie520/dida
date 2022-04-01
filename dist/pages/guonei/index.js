(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/guonei/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/index.tsx":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/index.tsx ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./src/pages/guonei/style.ts");
/* harmony import */ var _static_images_my_jiantou_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static/images/my/jiantou.png */ "./src/static/images/my/jiantou.png");
/* harmony import */ var _static_images_my_jiantou_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_my_jiantou_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_images_warning_circle_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/images/warning-circle.png */ "./src/static/images/warning-circle.png");
/* harmony import */ var _static_images_warning_circle_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_images_warning_circle_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);















var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getSystemInfoSync(),
    safeArea = _Taro$getSystemInfoSy.safeArea;

var Index = function Index(props) {
  var router = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var isId = router.params.deliveryId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      _useState2 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var setCurrentSwiper = function setCurrentSwiper(current) {
    setCurrent(current);
  };

  var params = props.params,
      dispatch = props.dispatch;
  var deliveryType = params.deliveryType,
      guaranteeValueAmount = params.guaranteeValueAmount,
      collectionMoney = params.collectionMoney,
      openid = params.openid;
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {// console.log(props);
  }, [props]);

  var pay = /*#__PURE__*/function () {
    var _ref = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (deliveryType) {
                _context.next = 3;
                break;
              }

              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.showToast({
                title: "请选择物品类型",
                icon: "none",
                duration: 2000
              });
              return _context.abrupt("return", false);

            case 3:
              dispatch({
                type: "order/payOrder",
                isId: isId
              });
            // const res = await ApiPays({
            //   openid: openid,
            //   totalFee: 0.01,
            // });
            // Taro.requestPayment({
            //   ...res.message,
            //   success: function (r) {
            //     PaySearch({
            //       outTradeNo: res?.message?.outTradeNo,
            //     })
            //       .then((res) => {
            //         if (res) {
            //           dispatch({ type: "order/payOrder" });
            //         }
            //       })
            //       .catch((err) => {
            //         console.log(err);
            //       });
            //   },
            //   fail: function (err) {
            //     console.log("支付失败---", res);
            //   },
            // });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function pay() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_8__[/* StyledOverView */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
        className: "head",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
          className: "section3",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "layer3s",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "mod2",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                className: "word2",
                children: "\u5BC4"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "main2",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                decode: "true",
                className: "txt2",
                children: "\u5BC4\u4EF6\u4EBA\xA0\xA0123****12313"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                className: "paragraph1",
                children: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u7559\u5B66\u751F \u521B\u4E1A\u5927\u53A61304\u5BA4"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "main3"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
              className: "info3",
              children: "\u5730\u5740\u7C3F"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "layer2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "layer3s",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "main1",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                className: "info2",
                children: "\u6536"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "main2",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                decode: "true",
                className: "txt2",
                children: "\u6536\u4EF6\u4EBA\xA0\xA0123****12313"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                className: "paragraph1",
                children: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u7559\u5B66\u751F \u521B\u4E1A\u5927\u53A61304\u5BA4"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "main3"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
              className: "info3",
              children: "\u5730\u5740\u7C3F"
            })]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
        className: "layer3",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
          className: "layer4",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "item",
            onClick: function onClick() {
              console.log(11);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
                url: "/pages/guonei/xinxi/index"
              });
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "group1-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                className: "mod2-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                  className: "bitian",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                    className: "input in-flex",
                    children: "\u7269\u54C1\u4FE1\u606F"
                  }), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                    className: "block7-2",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                      className: "word6-2",
                      children: "\u5FC5\u586B"
                    })
                  })]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                  className: "opt",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                    className: "input",
                    children: [" ", deliveryType ? deliveryType === 6 ? "特快零担" : "特快重货" : "请填写(20KG以上物品)"]
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
                    src: _static_images_my_jiantou_png__WEBPACK_IMPORTED_MODULE_9___default.a,
                    className: "jiantou"
                  })]
                })]
              })
            })
          }), !isId && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "item",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "group1-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                className: "mod2-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                  className: "input",
                  style: {
                    flex: "none"
                  },
                  children: "\u5927\u7968\u76F4\u8FBE"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                  className: "opt",
                  style: {
                    flex: "none"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                    className: "blod",
                    children: "300\u516C\u65A4\u8D27\u7269\u4EE5\u4E0A\u9002\u7528"
                  }), "\xA0 \xA0", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Switch */ "i"], {
                    color: "#ff7201"
                  })]
                })]
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "item",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "group1-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                className: "mod2-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                  className: "input",
                  children: "\u4ED8\u6B3E\u65B9\u5F0F"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                  className: "opt",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                    className: "blod",
                    children: "\u5BC4\u4ED8\u73B0\u7ED3"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
                    src: _static_images_my_jiantou_png__WEBPACK_IMPORTED_MODULE_9___default.a,
                    className: "jiantou"
                  })]
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
        className: "layer3",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
          className: "layer4",
          children: [!isId && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "item",
            onClick: function onClick() {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
                url: "/pages/guonei/baojia/index"
              });
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "group1-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                className: "mod2-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                  className: "input",
                  children: "\u4FDD\u4EF7"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                  className: "opt",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                    className: "input",
                    children: guaranteeValueAmount ? "\uFFE5".concat(guaranteeValueAmount) : "请填写保价信息"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
                    src: _static_images_my_jiantou_png__WEBPACK_IMPORTED_MODULE_9___default.a,
                    className: "jiantou"
                  })]
                })]
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "item",
            onClick: function onClick() {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
                url: "/pages/guonei/zengzhi/index"
              });
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "group1-0",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                className: "mod2-0",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                  className: "input",
                  children: "\u589E\u503C\u670D\u52A1"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                  className: "opt",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                    className: "input",
                    children: collectionMoney ? "\uFFE5".concat(collectionMoney) : "包装服务/代收货款"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
                    src: _static_images_my_jiantou_png__WEBPACK_IMPORTED_MODULE_9___default.a,
                    className: "jiantou"
                  })]
                })]
              })
            })
          })]
        })
      }), !isId && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
        className: "outer8",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
          className: "main4",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "group4",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
              className: "txt9",
              children: "\u91CD\u8D27\u4E0A\u697C"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "b"], {
              src: _static_images_warning_circle_png__WEBPACK_IMPORTED_MODULE_10___default.a,
              className: "label6"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
              className: "word12",
              children: "\xA5"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
              className: "word13",
              children: "40"
            }), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Switch */ "i"], {
              color: "#ff7201",
              className: "zh-sw"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "group5"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
          decode: "true",
          className: "paragraph2",
          children: ["\u6574\u7968<\xA050KG\uFF0C\xA0\u514D\u8D39\uFF0C\u6574\u7968>\xA050KG\u4E14\u2264140KG\u65F6\uFF0C\u56FA\u5B9A", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("br", {}), "40\u5143/\u7968\uFF0C\u6574\u7968>\xA0140KG\uFF0C0.3\u5143/\u516C\u65A4\uFF0C\xA0(\u6700\u91CD\u4EF6\u2265100KG", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])("br", {}), "\u6574\u7968\u4E0D\u4E0A\u697C)"]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
        className: "foot",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
          className: "outer9",
          onClick: function onClick(e) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
              url: "/pages/freight/suc/index"
            });
            e.stopPropagation();
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
            className: "section4",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
              className: "layer7",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                className: "layer8",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                  className: "info3",
                  children: "\u9884\u4F30\u8D39\u7528"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                  className: "block9",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                    className: "word14",
                    children: "\xA5"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                    className: "info4",
                    children: "23"
                  })]
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "l"], {
                className: "layer9",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
                  className: "word15",
                  children: "\u9605\u8BFB\u5E76\u540C\u610F\u300A\u8D27\u8FD0\u670D\u52A1\u534F\u8BAE\u300B"
                })
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "j"], {
              className: "word16",
              onClick: function onClick(e) {
                pay();
                e.stopPropagation();
              },
              children: "\u4E0B\u5355"
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[/* connect */ "b"])(function (_ref2) {
  var order = _ref2.order;
  return Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, order);
})(Index));

/***/ }),

/***/ "./src/pages/guonei/index.tsx":
/*!************************************!*\
  !*** ./src/pages/guonei/index.tsx ***!
  \************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/index.tsx");


var config = {"navigationBarTitleText":"国内物流","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/guonei/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/guonei/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/style.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/pages/guonei/style.linaria.css = ./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/style.ts ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/guonei/style.ts":
/*!***********************************!*\
  !*** ./src/pages/guonei/style.ts ***!
  \***********************************/
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
  class: "s1idp8ti"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "d6dg23q",
  vars: {
    "d6dg23q-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ./style.linaria.css = ../../../node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./style.ts */ "./src/pages/guonei/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/style.ts");

/***/ })

},[["./src/pages/guonei/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map