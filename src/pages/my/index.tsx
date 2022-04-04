import { ConnectState as FilterConnectState } from "@/models/filter";
import { Text, View, Image, ScrollView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AtToast } from "taro-ui";
import { ConnectState } from "./model";
import { StyledOverview } from "./style";

import Icon_dizhi from "../../static/images/my/icon_dizhi.png";
import Jiantou from "../../static/images/my/jiantou.png";
import Icon_zhangdan from "../../static/images/my/icon_zhangdan.png";
import Icon_youhuiquan from "../../static/images/my/icon_youhuiquan.png";
import Icon_tuiguang from "../../static/images/my/icon_tuiguang.png";

const { safeArea } = Taro.getSystemInfoSync();

const Loading = connect(({ loading }: ConnectState & FilterConnectState) => ({
  overviewLoading: loading.effects["waybill/overview"],
}))((props: any) => {
  return (
    <AtToast
      isOpened={props.overviewLoading}
      text="Loading"
      status="loading"
    ></AtToast>
  );
});

const WayBill = (props) => {
  const [current, setCurrent] = useState(0);
  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };
  const { overview, dispatch } = props;
  const user = Taro.getStorageSync("user");

  useEffect(() => {
    // dispatch({ type: 'waybill/getDefault' })
    // // 监听时区变化
    // Taro.eventCenter.on('timeZoneOnChange', arg => {
    //   dispatch({ type: 'waybill/getDefault' })
    // })
    // Taro.showShareMenu({
    //   withShareTicket: true,
    // })
  }, [dispatch]);

  return (
    <StyledOverview>
      <ScrollView scrollY={true} className={"scrollview"}>
        <Loading />
        <View className="layer9"></View>
        <View className="info">
          <Image className="photo" src={user.avatarurl}></Image>
          <Text className="phone">{user.nickname}</Text>
        </View>

        <View className="list">
          <View
            className="item"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/adr/address/index",
              });
            }}
          >
            <View className="left">
              <Image src={Icon_dizhi} className="icon"></Image>
              <Text className="text">地址管理</Text>
            </View>
            <Image src={Jiantou} className="right"></Image>
          </View>

          <View
            className="item"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/adr/bill/index",
              });
            }}
          >
            <View className="left">
              <Image src={Icon_zhangdan} className="icon"></Image>
              <Text className="text">我的账单</Text>
            </View>
            <Image src={Jiantou} className="right"></Image>
          </View>

          {/* <View className="item">
            <View className="left">
              <Image src={Icon_youhuiquan} className="icon"></Image>
              <Text className="text">我的优惠券</Text>
            </View>
            <Image src={Jiantou} className="right"></Image>
          </View> */}

          {/* <View
            className="item"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/huiyuan/index",
              });
            }}
          >
            <View className="left">
              <Image src={Icon_tuiguang} className="icon"></Image>
              <Text className="text">嘀嗒店长</Text>
            </View>
            <Image src={Jiantou} className="right"></Image>
          </View> */}

          {/* <View className="item" onClick={() => {
            Taro.navigateTo({
              url: '/pages/login/index',
            })
          }}>
            <View className="left">
              <Image src={Icon_tuiguang} className="icon"></Image>
              <Text className="text">登录</Text>
            </View>
            <Image src={Jiantou} className="right"></Image>
          </View> */}
        </View>
      </ScrollView>
    </StyledOverview>
  );
};

export default connect(({ my }: ConnectState & FilterConnectState) => {
  return {
    ...my,
  };
})(WayBill);
