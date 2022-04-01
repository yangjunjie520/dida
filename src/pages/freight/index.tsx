import { Text, View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AtToast, AtInput, AtIcon } from "taro-ui";
import { ConnectState } from "./model";
import { StyledOverview } from "./style";
import Navbar from "../../components/navbar";
import moment from "moment";

import Copy from "../../static/images/yundan/icon_fuzhi_2.png";

const { height } = Taro.getMenuButtonBoundingClientRect();

const Index = (props) => {
  const [current, setCurrent] = useState(0);
  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };
  const { dispatch, list } = props;

  useEffect(() => {
    dispatch({ type: "freight/orderList" });
  }, [dispatch]);

  console.log(
    moment("2022-03-15T15:05:55.000+0800").format("YYYY-MM-DD HH:mm:ss")
  );

  return (
    <StyledOverview>
      <View className="mod1">
        <Navbar></Navbar>
        <View className="section1">
          <View className="layer2">
            <Text
              className="word1"
              style={{ height: `${height}px`, lineHeight: `${height}px` }}
            >
              查货运
            </Text>
          </View>
          <View>
            <AtInput
              className="layer3"
              placeholder="运单号查询/关键字索引"
              name="order"
              onChange={(e) => console.log(e)}
            ></AtInput>
            <View className="outer1"></View>
          </View>
        </View>
      </View>

      <View className="mod2">
        <View className="tab">
          <Text className="word2">寄件记录</Text>

          <View className="active"></View>
        </View>
        <View className="tab">
          <Text className="word3">收件记录</Text>
        </View>
      </View>

      <View className="list">
        {list.map((item) => (
          <View
            className="mod4"
            onClick={() => {
              Taro.navigateTo({
                url: `/pages/info/details/index?deliveryId=${item.deliveryId}`,
              });
            }}
          >
            <View className="outer2">
              <View className="layer6">
                <Text decode="true" className="word4">
                  运单号:&nbsp;{item.deliveryId}
                </Text>
                <Image src={Copy} className="icon1"></Image>
              </View>
              <View className="layer7"></View>
              <View className="layer8">
                <Text className="word5">{item.senderName}</Text>
                <Text className="txt1">已签收</Text>
                <Text className="info3">{item.receiveName}</Text>
              </View>
              <View className="layer9">
                <Text className="txt2">深圳市</Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf214f0facdbdea24090090d4028bd5d20d2f8165c6daeb3e565d54a8a2042dbb"
                  className="img1"
                ></Image>
                <Text className="info4">深圳市</Text>
              </View>
              <View className="layer10">
                <Text className="info5">已签收</Text>
                <View className="layer11">
                  <Text className="info6">
                    你的快件已签收，如有疑问请电联快递员
                  </Text>
                  <Text
                    className="paragraph1"
                    onClick={(e) => {
                      Taro.makePhoneCall({
                        phoneNumber: item.senderMobile, //仅为示例，并非真实的电话号码
                      });
                      e.stopPropagation();
                    }}
                  >
                    【某某, 电话{item.senderMobile}】
                  </Text>
                </View>
              </View>
              <View className="layer12">
                <Text className="word6">签收时间</Text>
                <Text decode="true" className="word7">
                  {moment(item.updateTime).format("YYYY-MM-DD HH:mm:ss")}
                </Text>
              </View>
              <View className="layer13"></View>
              <View className="layer14">
                <View className="box2">
                  <Text className="word8">通知收件人</Text>
                </View>
                <View className="box3">
                  <Text className="txt3">删除</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </StyledOverview>
  );
};

export default connect(({ freight }: any) => {
  return {
    ...freight,
  };
})(Index);
