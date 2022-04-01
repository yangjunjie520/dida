(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/info/details/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/info/details/index.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/info/details/index.tsx ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-ui/lib/components/icon */ "./node_modules/taro-ui/lib/components/icon/index.js");
/* harmony import */ var C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/pages/info/details/style.ts");
/* harmony import */ var _static_images_yundan_icon_quxiao_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../static/images/yundan/icon_quxiao.png */ "./src/static/images/yundan/icon_quxiao.png");
/* harmony import */ var _static_images_yundan_icon_quxiao_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_yundan_icon_quxiao_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_yundan_icon_xiugai_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../static/images/yundan/icon_xiugai.png */ "./src/static/images/yundan/icon_xiugai.png");
/* harmony import */ var _static_images_yundan_icon_xiugai_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_yundan_icon_xiugai_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/dist/moment.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/navbar */ "./src/components/navbar/index.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api */ "./src/pages/info/details/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);















var _Taro$getMenuButtonBo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getMenuButtonBoundingClientRect(),
    height = _Taro$getMenuButtonBo.height;

var WayBillDatails = function WayBillDatails(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var setCurrentSwiper = function setCurrentSwiper(current) {
    setCurrent(current);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState4 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState6 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState5, 2),
      info = _useState6[0],
      setInfo = _useState6[1];

  var router = Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var deliveryId = router.params.deliveryId;
    var user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getStorageSync("user");
    var params = {
      userId: user.userId,
      openid: user.openid,
      deliveryId: deliveryId
    };
    Object(_api__WEBPACK_IMPORTED_MODULE_10__[/* OrderList */ "b"])(params).then(function (res) {
      if (res) {
        setList(res.rows);
      }
    }).catch(function (err) {
      console.log(err);
    });
    Object(_api__WEBPACK_IMPORTED_MODULE_10__[/* TraceGet */ "c"])({
      userId: user.userId,
      deliveryId: deliveryId
    }).then(function (res) {
      if (res) {
        setInfo(res.data);
      }
    }).catch(function (err) {
      console.log(err);
    });
  }, []);

  var clear = function clear() {
    var deliveryId = router.params.deliveryId;
    var user = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getStorageSync("user");
    var params = {
      userId: user.userId,
      deliveryId: deliveryId
    };
    Object(_api__WEBPACK_IMPORTED_MODULE_10__[/* CancelOrder */ "a"])(params).then(function (res) {
      if (res) {
        //   Taro.showToast({
        //     title: "取消成功",
        //     icon: "none",
        //     duration: 2000,
        //     complete: () => {
        //     },
        //   });
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateBack({});
      }
    }).catch(function (err) {
      console.log(err);
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_5__[/* StyledOverView */ "a"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "h"], {
      scrollY: true,
      className: "scrollview",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "section1",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_navbar__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "main2s",
          style: {
            height: "".concat(height, "px"),
            alignItems: "center"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui_lib_components_icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
            value: "chevron-LEFT",
            size: "30",
            color: "#FFF",
            className: "label2"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "info2",
            children: "\u8FD0\u5355\u8BE6\u60C5"
          })]
        }), list.map(function (item) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "main3",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "txt1",
                children: item.senderName
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "word1",
                children: "\u5F85\u53D6\u4EF6"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "word2",
                children: item.receiveName
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "main4",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info3",
                children: "\u6DF1\u5733\u5E02"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
                src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6f988cf86efc9efa12167ecb77d6c598173d9af90d2b7520dabb8e6edc8eaedf",
                className: "pic1"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info3",
                children: "\u6DF1\u5733\u5E02"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "main5",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info5s",
                children: ["\u8FD0\u5355\u53F7\uFF1A", item.deliveryId]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
                src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc5c5548cf42781c6f76f016c0c7b9ece38c882121a20076f05eb9431e8a73c7b",
                className: "icon2"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "main6",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                decode: "true",
                className: "info5s",
                children: ["\u4E0B\u5355\u65F6\u95F4\uFF1A", " ", Object(moment__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(item.updateTime).format("YYYY-MM-DD HH:mm:ss")]
              })
            })]
          });
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "box4",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "mod3",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "word14",
            children: "\u8FD0\u5355\u4FE1\u606F"
          })
        }), info.map(function (item, index) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "mod5",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "mod6",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "".concat(index !== 0 ? "word16" : "info15"),
                children: item.opeTitle
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "mod7",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "section8"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "section9"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "mod8",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                decode: "true",
                className: "word20",
                children: item.opeTime
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "word18",
                children: item.opeRemark
              })]
            })]
          });
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "bd2",
        children: list.map(function (item) {
          console.log(item);
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "block2",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info4",
              children: "\u8BA2\u5355\u4FE1\u606F"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group1",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "box2",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  className: "txt2",
                  children: "\u5BC4"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "box3",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  decode: "true",
                  className: "word6",
                  children: ["\u5BC4\u4EF6\u4EBA\xA0\xA0", item.senderMobile]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  className: "paragraph1",
                  children: item.senderAddress
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group2",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "layer1",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  className: "info5",
                  children: "\u6536"
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "layer2",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  decode: "true",
                  className: "info6",
                  children: ["\u6536\u4EF6\u4EBA\xA0\xA0", item.receiveMobile]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  className: "infoBox1",
                  children: item.receiveAddress
                })]
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u9884\u4F30\u8D39\u7528"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "199.00\u5143"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u4FDD\u9669\u8D39\u7528"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "100.00\u5143"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u5305\u88C5\u8D39\u7528"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "10.00\u5143"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u8D39\u7528\u5408\u8BA1\xA0"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "309.00\u5143"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u652F\u4ED8\u65B9\u5F0F"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "\u5BC4\u4ED8\u73B0\u7ED3"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u65F6\u6548\u7C7B\u578B"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "\u7279\u5FEB\u91CD\u8D27"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u7269\u54C1\u4FE1\u606F"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "\u670D\u88C5/59KG/10m3/1\u4EF6/\u8F7B\u62FF \u8F7B\u653E"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u4EAC\u4E1C\u79F0\u91CD"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "\u670D\u88C5/59KG/10m3/1\u4EF6"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u4FDD\u4EF7\u91D1\u989D"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "000.00\u5143"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "group12",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info13",
                children: "\u589E\u503C\u670D\u52A1"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "infoBox2",
                children: "\u7B7E\u5355\u8FD4\u8FD8;\u4EE3\u6536\u8D27\u6B3E\uFF0C\u4EE3\u6536\u91D1 \u989D:10000.00\u5143"
              })]
            })]
          });
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "section4",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "block3",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "bd8",
            onClick: function onClick() {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateTo({
                url: "/pages/freight/edit/index"
              });
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
              src: _static_images_yundan_icon_xiugai_png__WEBPACK_IMPORTED_MODULE_7___default.a,
              className: "icon3"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt6",
              children: "\u4FEE\u6539\u8FD0\u5355"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "bd9",
            onClick: function onClick() {
              clear();
            },
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
              src: _static_images_yundan_icon_quxiao_png__WEBPACK_IMPORTED_MODULE_6___default.a,
              className: "label3"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word10",
              children: "\u53D6\u6D88\u8FD0\u5355"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
            bindtap: "onClick",
            className: "bd10",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
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

/***/ "./src/pages/info/details/api.ts":
/*!***************************************!*\
  !*** ./src/pages/info/details/api.ts ***!
  \***************************************/
/*! exports provided: OrderList, TraceGet, CancelOrder */
/*! exports used: CancelOrder, OrderList, TraceGet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TraceGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelOrder; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/request */ "./src/utils/request.ts");
 // 下单

var OrderList = function OrderList(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: "/prod-api/api/apiOrderList",
    method: "POST",
    data: data
  });
}; // 物流

var TraceGet = function TraceGet(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: "/prod-api/api/apitraceGet",
    method: "POST",
    data: data
  });
}; // 取消

var CancelOrder = function CancelOrder(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: "/prod-api/api/apiCancelOrder",
    method: "POST",
    data: data
  });
};

/***/ }),

/***/ "./src/pages/info/details/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/info/details/index.tsx ***!
  \******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/info/details/index.tsx");


var config = {"navigationBarTitleText":"Home","navigationStyle":"custom","disableScroll":true};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/info/details/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/info/details/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/info/details/style.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/pages/info/details/style.linaria.css = ./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/info/details/style.ts ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/info/details/style.ts":
/*!*****************************************!*\
  !*** ./src/pages/info/details/style.ts ***!
  \*****************************************/
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
  class: "stnpe66"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "dg9rnmq",
  vars: {
    "dg9rnmq-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ./style.linaria.css = ../../../../node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./style.ts */ "./src/pages/info/details/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/info/details/style.ts");

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

},[["./src/pages/info/details/index.tsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map