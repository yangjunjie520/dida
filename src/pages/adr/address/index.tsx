import { Text, View, Image, ScrollView, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AtToast, AtIcon, AtInput } from "taro-ui";

import { StyledOverview } from "./style";

const { safeArea } = Taro.getSystemInfoSync();

const Address = (props) => {
  const [current, setCurrent] = useState(0);
  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };
  const { overview, dispatch } = props;

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
      <View className="header">
        <AtInput
          className="layer3"
          placeholder="运单号查询/关键字索引"
          name="order"
          onChange={(e) => console.log(e)}
        ></AtInput>
        {/* <View className="outer1"></View> */}
      </View>

      <View className="mod2">
        <View className="tab">
          <Text lines="1" className="word2">
            寄件人地址簿
          </Text>

          <View className="active"></View>
        </View>
        <View className="tab">
          <Text lines="1" className="word3">
            收件人地址簿
          </Text>
        </View>
      </View>

      <View className="cont-box">
        <View className="item">
          {/* <View className="box1">
            <Image
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng01967dbc284fd6fa6ff8e9d91c24943dae9c3847ebdac60b35125449588df629"
              className="label2"
            ></Image>
            <View className="bd2"></View>
          </View> */}

          <View className="bd1-0">
            <View className="outer1-0">
              <Text lines="1" decode="true" className="info1-0">
                某某某&nbsp;&nbsp;123****12313
              </Text>
              <Text lines="1" className="word6-0">
                广东省深圳市深圳市南山区留学生创业大厦1304室
              </Text>
              <View className="main2-0"></View>
              <View className="main3-0">
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd65a38bc31deefc8bc07dfc92083dba422bf5fbd9f581c2d7aab0bc1655929de"
                  className="label3-0"
                ></Image>
                <Text lines="1" className="txt1-0">
                  默认寄件地址
                </Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngda26c7f14bcf0b64e4f0995c712bf2348f671dc9e452d856c78cf9488629bafe"
                  className="label4-0"
                ></Image>
                <Text lines="1" className="info2-0">
                  编辑
                </Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge2ce394495eda650fc19789244ad1e40cabcf1c786e9e06740f9d52feaa4da96"
                  className="icon2-0"
                ></Image>
                <Text lines="1" className="info3-0">
                  删除
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="item">
          <View className="box1">
            <Image
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng01967dbc284fd6fa6ff8e9d91c24943dae9c3847ebdac60b35125449588df629"
              className="label2"
            ></Image>
            <View className="bd2"></View>
          </View>

          <View className="bd1-0">
            <View className="outer1-0">
              <Text lines="1" decode="true" className="info1-0">
                某某某&nbsp;&nbsp;123****12313
              </Text>
              <Text lines="1" className="word6-0">
                广东省深圳市深圳市南山区留学生创业大厦1304室
              </Text>
              <View className="main2-0"></View>
              <View className="main3-0">
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd65a38bc31deefc8bc07dfc92083dba422bf5fbd9f581c2d7aab0bc1655929de"
                  className="label3-0"
                ></Image>
                <Text lines="1" className="txt1-0">
                  默认寄件地址
                </Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngda26c7f14bcf0b64e4f0995c712bf2348f671dc9e452d856c78cf9488629bafe"
                  className="label4-0"
                ></Image>
                <Text lines="1" className="info2-0">
                  编辑
                </Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge2ce394495eda650fc19789244ad1e40cabcf1c786e9e06740f9d52feaa4da96"
                  className="icon2-0"
                ></Image>
                <Text lines="1" className="info3-0">
                  删除
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="block5">
        {/* <Button bindtap="onClick" className="group1">
          <Text lines="1" className="txt5">
            删除
          </Text>
        </Button> */}
        {/* <View className="section1">
                    <Text lines="1" className="word7">管理</Text>
                </View> */}
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/adr/address/add/index",
            });
          }}
          className="section2"
        >
          <Text lines="1" className="word8">
            新增地址
          </Text>
        </Button>
      </View>
    </StyledOverview>
  );
};

export default Address;
