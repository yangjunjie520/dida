import React from "react";
import { Provider } from "react-redux";
import dva from "./utils/dva";
import models from "./models";
import Taro from "@tarojs/taro";

import "./app.scss";

export const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  // enableLog: process.env.NODE_ENV !== 'production'
  enableLog: false,
});
export const store = dvaApp.getStore();

export const getApp = () => dvaApp;

Taro.getDvaApp = getApp;
Taro.dvaApp = dvaApp;

class App extends React.Component {
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wx.login({
      success: function(res) {
        console.log("进入login函数", res);
        if (res.code) {
          wx.request({
            // url: "http://localhost:8080/wx/login",
            url: "http://159.75.52.36:8080/wx/login",
            data: {
              code: res.code,
              wxUserVo: {
                gender: 0,
                parentOpenid: "",
                sign: "316419CD5A933DD552F21A978190C098",
                userId: 1817,
                smallSource: 0,
              },
            },
            method: "POST",
            header: {
              "content-type": "application/json",
            },
            success: function(res) {
              console.log("res==", res);
              if (res.code) {
                var openid = res.data.openid;
                wx.getUserInfo({
                  success: (res) => {
                    // 保存用户信息到服务端
                    wx.request({
                      // url: "http://localhost:8080/wx/getUserInfo",
                      url: "http://159.75.52.36:8080/wx/getUserInfo",
                      data: {
                        userInfo: res.userInfo,
                        openid: openid,
                      },
                      method: "POST",
                      header: {
                        "content-type": "application/json",
                      },
                      success: function(res) {
                        console.log("success");
                      },
                      fail: function(error) {
                        console.log(error);
                      },
                    });
                  },
                });
              } else {
                Taro.reLaunch({
                  url: "/pages/login/index",
                });
              }
            },
            fail: function(error) {
              console.log(error);
            },
          });
        } else {
          console.log("error code " + res.errMsg);
        }
      },
    });
  }

  componentDidMount() {
    // wx.onAppRoute(function(res) {
    //   Taro.eventCenter.trigger("userCenterHide");
    // });
    // console.log(Taro.getMenuButtonBoundingClientRect());
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
