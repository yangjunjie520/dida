(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/guonei/xinxi/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/xinxi/index.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/xinxi/index.tsx ***!
  \************************************************************************************************************************/
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/pages/guonei/xinxi/style.ts");
/* harmony import */ var _static_images_yundan_icon_close_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../static/images/yundan/icon_close.png */ "./src/static/images/yundan/icon_close.png");
/* harmony import */ var _static_images_yundan_icon_close_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_yundan_icon_close_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(params),
      _useState4 = Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState3, 2),
      paramss = _useState4[0],
      setParamss = _useState4[1];

  var deliveryType = paramss.deliveryType,
      weight = paramss.weight,
      vloumn = paramss.vloumn,
      vloumHeight = paramss.vloumHeight,
      vloumLong = paramss.vloumLong,
      vloumWidth = paramss.vloumWidth,
      remark = paramss.remark,
      packageCount = paramss.packageCount;
  var select = [{
    label: "特快零担",
    value: 6
  }, {
    label: "特快重货",
    value: 25
  }];

  var handleSelect = function handleSelect(type) {
    // dispatch({
    //   type: "order/save",
    //   payload: {
    //     deliveryType: type,
    //   },
    // });
    setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
      deliveryType: type
    }));
  };

  var handleKg = function handleKg(type) {
    var w = weight;

    if (type === "minus") {
      w = w > 1 ? w - 1 : w;
    } else if (type === "add") {
      w = w + 1;
    } // dispatch({
    //   type: "order/save",
    //   payload: {
    //     weight: w,
    //   },
    // });


    setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
      weight: w
    }));
  };

  var blur = function blur(val) {
    var reg = new RegExp(/^[+-]?(0|([1-9]\d*))(\.\d{1, 2})?$/);

    if (!reg.test(val)) {
      var v = Number(val.toString().match(/^\d+(?:\.\d{0,2})?/)); // dispatch({
      //   type: "order/save",
      //   payload: {
      //     weight: v,
      //   },
      // });

      setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
        weight: v
      }));
      return false;
    }
  };

  var handleSub = function handleSub() {
    if (!deliveryType) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
        title: "请选择物品类型",
        icon: "none",
        duration: 2000
      });
      return false;
    }

    var reg = new RegExp(/^[+-]?(0|([1-9]\d*))(\.\d{1, 2})?$/);

    if (vloumn !== "" && !reg.test(vloumn)) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
        title: "请输入正确体积",
        icon: "none",
        duration: 2000
      });
      return false;
    }

    if (vloumLong !== "" && !reg.test(vloumLong)) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
        title: "请输入正确的长度",
        icon: "none",
        duration: 2000
      });
      return false;
    }

    if (vloumWidth !== "" && !reg.test(vloumWidth)) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
        title: "请输入正确的宽度",
        icon: "none",
        duration: 2000
      });
      return false;
    }

    if (vloumHeight !== "" && !reg.test(vloumHeight)) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
        title: "请输入正确的高度",
        icon: "none",
        duration: 2000
      });
      return false;
    }

    if (packageCount === "") {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
        title: "请输入物品件数",
        icon: "none",
        duration: 2000
      });
      return false;
    }

    dispatch({
      type: "order/save",
      payload: paramss
    });
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.navigateBack({});
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_style__WEBPACK_IMPORTED_MODULE_6__[/* StyledOverView */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "mod6",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "layer1",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "mod7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info2",
              children: "\u7269\u54C1\u7C7B\u578B"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "mod8",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "word2",
                children: "\u5FC5\u586B"
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "mod9",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "layer",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "wrap1"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
                placeholder: "\u8BF7\u8F93\u5165\u7269\u54C1\u540D\u79F0",
                className: "layer2"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
              bindtap: "onClick",
              className: "layer3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "txt1",
                children: "\u786E\u5B9A"
              })
            })]
          }), deliveryType ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "active",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "ac-text",
              children: deliveryType === 6 ? "特快零担" : "特快重货"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "b"], {
              src: _static_images_yundan_icon_close_png__WEBPACK_IMPORTED_MODULE_7___default.a,
              className: "label2",
              onClick: function onClick() {
                return handleSelect(null);
              }
            })]
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "mod10",
            children: [select.map(function (item) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "outer3",
                onClick: function onClick() {
                  return handleSelect(item.value);
                },
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  className: "word3",
                  children: item.label
                })
              }, item.label);
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "outer3",
              style: {
                border: "none"
              }
            })]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "mod11",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "main1",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "txt3",
            children: "\u603B\u91CD\u91CF"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "info6",
            onClick: function onClick() {
              return handleKg("minus");
            },
            children: "\uFF0D"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "modInp",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
              placeholder: "20",
              className: "mod12",
              type: "digit",
              value: weight,
              onInput: function onInput(e) {
                // dispatch({
                //   type: "order/save",
                //   payload: {
                //     weight: e.detail.value,
                //   },
                // });
                setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                  weight: e.detail.value
                }));
              },
              onBlur: function onBlur(e) {
                return blur(e.detail.value);
              }
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt4",
              children: "KG"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "word7",
            onClick: function onClick() {
              return handleKg("add");
            },
            children: "\uFF0B"
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "mod13",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "wrap2",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "bd1",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word8",
              children: "\u603B\u4F53\u79EF"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info7",
              onClick: function onClick() {
                var w = vloumn;
                w = w > 1 ? w - 1 : w; // dispatch({
                //   type: "order/save",
                //   payload: {
                //     vloumn: w,
                //   },
                // });

                setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                  vloumn: w
                }));
              },
              children: "\uFF0D"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "modInp",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
                placeholder: "0.01",
                className: "mod12",
                type: "digit",
                value: vloumn,
                onInput: function onInput(e) {
                  // dispatch({
                  //   type: "order/save",
                  //   payload: {
                  //     vloumn: e.detail.value,
                  //   },
                  // });
                  setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                    vloumn: e.detail.value
                  }));
                }
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "txt4",
                children: "m\xB3"
              })]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "info9",
              onClick: function onClick() {
                var w = vloumn;
                w = w + 1; // dispatch({
                //   type: "order/save",
                //   payload: {
                //     vloumn: w,
                //   },
                // });

                setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                  vloumn: w
                }));
              },
              children: "\uFF0B"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "bd3",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "bd4",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
                placeholder: "\u957F",
                className: "word9 wrap3",
                value: vloumLong,
                onInput: function onInput(e) {
                  // dispatch({
                  //   type: "order/save",
                  //   payload: {
                  //     vloumLong: e.detail.value,
                  //   },
                  // });
                  setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                    vloumLong: e.detail.value
                  }));
                },
                type: "digit"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "wrap4",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  className: "info10",
                  children: "CM"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  className: "word10",
                  children: "\xD7"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
                placeholder: "\u5BBD",
                className: "word9 wrap3",
                value: vloumWidth,
                onInput: function onInput(e) {
                  // dispatch({
                  //   type: "order/save",
                  //   payload: {
                  //     vloumWidth: e.detail.value,
                  //   },
                  // });
                  setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                    vloumWidth: e.detail.value
                  }));
                },
                type: "digit"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
                className: "wrap6",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  className: "txt6",
                  children: "CM"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                  className: "word12",
                  children: "\xD7"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
                placeholder: "\u9AD8",
                className: "word9 wrap3",
                value: vloumHeight,
                onInput: function onInput(e) {
                  // dispatch({
                  //   type: "order/save",
                  //   payload: {
                  //     vloumHeight: e.detail.value,
                  //   },
                  // });
                  setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                    vloumHeight: e.detail.value
                  }));
                },
                type: "digit"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info12",
                children: "CM"
              })]
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "paragraph1",
            children: "\u6CE8: \u5B9E\u9645\u91CD\u91CF\u4F53\u79EF\u4EE5\u6536\u6D3E\u5458\u786E\u5B9A\u4E3A\u51C6\uFF0C\u4F53\u79EF\u8F83\u5927\u65F6\u53EF\u80FD\u4F1A\u6309\u4F53\u79EF \u91CD\u91CF\u6536\u8D39\uFF0C\u5F55\u5165\u957F\u5BBD\u9AD8\uFF0C\u9884\u4F30\u8D39\u7528\u66F4\u7CBE\u51C6\u3002"
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "mod11",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "main1",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "txt3",
            children: "\u4EF6\u6570"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "info6",
            onClick: function onClick() {
              var w = packageCount;
              w = w > 1 ? w - 1 : w; // dispatch({
              //   type: "order/save",
              //   payload: {
              //     packageCount: w,
              //   },
              // });

              setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                packageCount: w
              }));
            },
            children: "\uFF0D"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "modInp",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "c"], {
              placeholder: "1",
              className: "mod12",
              value: packageCount,
              type: "number",
              onInput: function onInput(e) {
                // dispatch({
                //   type: "order/save",
                //   payload: {
                //     packageCount: e.detail.value,
                //   },
                // });
                setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                  packageCount: e.detail.value
                }));
              }
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt4",
              children: "\u4EF6"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            className: "word7",
            onClick: function onClick() {
              var w = packageCount;
              w = w + 1; // dispatch({
              //   type: "order/save",
              //   payload: {
              //     packageCount: w,
              //   },
              // });

              setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                packageCount: w
              }));
            },
            children: "\uFF0B"
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "mod15",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
          className: "mod16",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "main5",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "word15",
              children: "\u7ED9\u63FD\u4EF6\u5458\u634E\u8BDD"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
              className: "txt9",
              children: "\u6CE8: \u7EB8\u7BB1\u9700\u8981\u989D\u5916\u6536\u8D39\u54E6~"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Textarea */ "k"], {
            className: "main6 word16",
            placeholder: "\u7ED9\u63FD\u4EF6\u5458\u634E\u53E5\u8BDD\u5427",
            maxlength: 100,
            value: remark,
            onInput: function onInput(e) {
              // dispatch({
              //   type: "order/save",
              //   payload: {
              //     remark: e.detail.value,
              //   },
              // });
              setParamss(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(C_Users_JokunHe_Desktop_dida_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, paramss), {}, {
                remark: e.detail.value
              }));
            }
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
            className: "main7",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "box1",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "info14",
                children: "\u8BF7\u5E26\u7EB8\u7BB1"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "box2",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "txt11",
                children: "\u8BF7\u5E26\u80F6\u5E26"
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
              className: "box3",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
                className: "word17",
                children: "\u9700\u722C\u697C\u68AF"
              })
            })]
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "l"], {
        className: "foot",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
          onClick: handleSub,
          className: "box8s",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "j"], {
            decode: "true",
            className: "info2s",
            children: "\u786E\u8BA4"
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

/***/ "./src/pages/guonei/xinxi/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/guonei/xinxi/index.tsx ***!
  \******************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!../../../../node_modules/linaria/lib/webpack4-loader.js!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./node_modules/linaria/lib/webpack4-loader.js!./src/pages/guonei/xinxi/index.tsx");


var config = {"navigationBarTitleText":"物品信息","navigationBarTextStyle":"black"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_node_modules_linaria_lib_webpack4_loader_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/guonei/xinxi/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/guonei/xinxi/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/xinxi/style.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/pages/guonei/xinxi/style.linaria.css = ./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/xinxi/style.ts ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/guonei/xinxi/style.ts":
/*!*****************************************!*\
  !*** ./src/pages/guonei/xinxi/style.ts ***!
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
  class: "s1nazxdd"
});
var DialogView = /*#__PURE__*/Object(linaria_react__WEBPACK_IMPORTED_MODULE_0__[/* styled */ "a"])("view")({
  name: "DialogView",
  class: "d2ztu73",
  vars: {
    "d2ztu73-0": [function (props) {
      return props.height || 200;
    }, "px"]
  }
});

__webpack_require__(/*! ./style.linaria.css = ../../../../node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./style.ts */ "./src/pages/guonei/xinxi/style.linaria.css!./=!./node_modules/@linaria/webpack4-loader/lib/outputCssLoader.js?cacheProvider=!./src/pages/guonei/xinxi/style.ts");

/***/ }),

/***/ "./src/static/images/yundan/icon_close.png":
/*!*************************************************!*\
  !*** ./src/static/images/yundan/icon_close.png ***!
  \*************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAAAt1BMVEUAAAD/AAD/cAD/dQD/cQD/bgD/cgD/cwD/cQD/dAX/cwT/dgD/cgD/dAD/cwD/cwL/cgL/cwL/cwL/cgL/cwL/dAL/dAH/cwH/dAH/dAH/cwH/cgH/cwH/cwH/bQD/bgD/bwD/cAD/cAL/cQD/cQL/cgD/cgH/cwH/cwP/dQH/dgH/dwH/dwr/gBz/gB3/hyr/iCn/kTn/rGr/uH7/vYj/v4v/wpH/yZ//69z/7Nz/8uf/9ez/9e0Je2SsAAAAHnRSTlMAASAjJCUmKCs3PF1iY2Z+hIeipamp3uDi4/P29veuXZiHAAAAwUlEQVQYGQXBAVLCMBAAwE3SxuKAojL6/w8Cggqk7cVdAAAkYKyDpc0gQd5P+6Sf7+dAwebta4yIeHoVC4X8flh6Qo9t3LrC++eiPLK59titN1mdFrE7tHbYhWWqsrrvllY/Pmpb9H01GFBP+Tn9niYMMpB60hMwWDvzy3Szieuor7J2TdKmH48xJenaFDG+RI5LSj+pG88/Co/83FvOOc+5nI6h0KNvIZXxeHkw4G9en17x/TjPSMBUi7XdAQAA/gEfZ1x610s+5wAAAABJRU5ErkJggg=="

/***/ })

},[["./src/pages/guonei/xinxi/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map