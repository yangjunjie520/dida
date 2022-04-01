import { Text, View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AtToast, AtIcon, AtInput, AtButton } from "taro-ui";

import { StyledOverView } from "./style";
import Icon_dida from "../../static/images/icon_dida.png";
import { login } from "./api";

const { safeArea } = Taro.getSystemInfoSync();

const Edit = (props) => {
  const [current, setCurrent] = useState(false);

  const { overView, dispatch } = props;

  const getUserProfile = (e) => {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    Taro.getUserProfile({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res);
        const { signature, userInfo } = res;
        login({
          code: signature,
          wxUserVo: userInfo,
        }).then((res) => {
          console.log(res);
        });
      },
    });
  };
  return (
    <StyledOverView>
      <View className="group1">
        <View className="layer2">
          {/* <View className="layer3">
        <View className="mod1"></View>
      </View>
      <View className="layer4">
        <Image src={Icon_dida} className="icon2"></Image>
      </View> */}
        </View>
        <View className="layer5" onClick={getUserProfile}>
          {/* <View className="group2">
            <Image
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0cfa5377c56f14a0806890ce8cf618244b290a8e5ab331c9e4ae1c3c00d5824a"
              className="label3"
            ></Image>
            
          </View> */}
          {/* <Button
            className="word1"
            openType="getUserInfo"
            onGetUserInfo={getUserInfo}
          >
            微信账号快捷登录
          </Button> */}
          <Text className="word1">微信账号快捷登录</Text>
        </View>
        <View className="layer6">
          <Text lines="1" className="word2">
            《服务条款》
          </Text>
          <Text lines="1" className="info2">
            与
          </Text>
          <Text lines="1" className="info3">
            《隐私政策》
          </Text>
        </View>
      </View>

      {current && (
        <View className="mask">
          <View className="layer3s">
            <View className="layer4s">
              <View className="main2">
                <Text lines="1" className="word5">
                  服务条款及隐私政策
                </Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng202a8b98366b89588013fade83b81224b8d7d54963fa142a42f7674faa2743d0"
                  className="icon5"
                ></Image>
              </View>
              <Text
                space="ensp"
                lines="1"
                decode={true}
                className="paragraph1"
              >{`在您注册成为嘀嗒货运会员的过程中，您需要通过点击同 \n\n 意的形式在线签署《嘀嗒货运服务条款》、《嘀嗒货运隐私政策》，请&nbsp;您务必仔细阅读、充分理解条款内容后再点击同意(尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制)。 \n\n :如果您不同意上述服务条款、隐私政策或其中任何约定，请您停止注册。如您阅读并点击同意即表示您已充分阅读、理解并接受其全部内策来处理您的个人信息。如您对以上服务条款、隐策来处理您的个人信息。如您对以上服务条款、隐私政策有任何疑问，您可联系嘀嗒货运客服。 \n\n\n\n点击同意即表示您已阅读并同意嘀嗒货运《服务条款》与《隐私政策》`}</Text>
              <View className="main3s">
                <View className="bd1s">
                  <Text lines="1" className="word6">
                    不同意
                  </Text>
                </View>
                <View className="bd2">
                  <Text lines="1" className="info1">
                    同意
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </StyledOverView>
  );
};

export default Edit;
