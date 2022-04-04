import { Text, View, Image, ScrollView } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AtToast, AtInput, AtIcon } from "taro-ui";
import { ConnectState } from "./model";
import { StyledOverview } from "./style";
import Navbar from "../../components/navbar";
import moment from "moment";
import AddressParse from "address-parse";

import Copy from "../../static/images/yundan/icon_fuzhi_2.png";

const { height } = Taro.getMenuButtonBoundingClientRect();
let timerId = null //整数 定时器的编号 用来取消这个定时器

const Index = (props) => {
  const [current, setCurrent] = useState(0);
  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };
  const { dispatch, list, params } = props;
  const [val, setVal] = useState('')

  // useEffect(() => {

  // }, [dispatch]);
  useDidShow(() => {

    const user = Taro.getStorageSync("user");
    dispatch({
      type: "freight/changes", payload: {
        userId: user.userId,
        openid: user.openid,
      }
    });
  })



  const copyText = function (e) {

    console.log(e)

    Taro.setClipboardData({
      data: e,
      success: function (res) {
        Taro.getClipboardData({
          success: function (res) {
            Taro.showToast({
              title: "复制成功",
              icon: "none",
              duration: 2000,
            });

          }

        })

      }

    })

  }

  const debounce = (fn, delay = 3000) => {
    //期间间隔执行 节流
    return (...rest) => {
      //箭头函数是没有arguments的 所以用...rest 来代替
      let args = rest
      if (timerId) clearTimeout(timerId) //要用this.timerId 而不能直接定义var timerId=null;
      timerId = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
  }
  const getInfo = (e) => {
    console.log(e)
    dispatch({ type: "freight/changes", payload: { deliveryId: e } });

  }
  const onDebounceKeyUpClick = e => {
    //加入防抖动后 在频繁输入后 不会发送请求
    let debounceAjax = debounce(getInfo, 500)
    debounceAjax(e)
  }

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
              placeholder="运单号查询"
              name="order"

              onChange={(e) => {

                onDebounceKeyUpClick(e)
              }}
              value={params.deliveryId}
            ></AtInput>
            <View className="outer1"></View>
          </View>
        </View>
      </View>

      <View className="mod2">
        <View className="tab">
          <Text className="word2">下单记录</Text>

          <View className="active"></View>
        </View>
        {/* <View className="tab">
          <Text className="word3">收件记录</Text>
        </View> */}
      </View>
      <ScrollView scrollY={true} className={"scrollview"}>
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
                  <Image src={Copy} className="icon1" onClick={(e) => {
                    copyText(item.deliveryId)
                    e.stopPropagation()
                  }}></Image>
                </View>
                <View className="layer7"></View>
                <View className="layer8">
                  <Text className="word5">{item.senderName}</Text>
                  <Text className="txt1">{item.logisticsInfo[0].opeTitle}</Text>
                  <Text className="info3">{item.receiveName}</Text>
                </View>
                <View className="layer9">
                  <Text className="txt2">{AddressParse.parse(item.senderAddress)[0]?.city}</Text>
                  <Image
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf214f0facdbdea24090090d4028bd5d20d2f8165c6daeb3e565d54a8a2042dbb"
                    className="img1"
                  ></Image>
                  <Text className="info4">{AddressParse.parse(item.receiveAddress)[0]?.city}</Text>
                </View>
                <View className="layer10">
                  <Text className="info5">{item.logisticsInfo[0].opeTitle}：</Text>
                  <View className="layer11">
                    <Text className="info6">{item.logisticsInfo[0].opeRemark} </Text>
                    {/* <Text
                      className="paragraph1"
                      onClick={(e) => {
                        Taro.makePhoneCall({
                          phoneNumber: item.senderMobile, //仅为示例，并非真实的电话号码
                        });
                        e.stopPropagation();
                      }}
                    >
                      【某某, 电话{item.senderMobile}】
                    </Text> */}
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
                  <View className="box3" onClick={(e) => {
                    dispatch({ type: "freight/clear", deliveryId: item.deliveryId });
                    e.stopPropagation()
                  }}>
                    <Text className="txt3">删除</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </StyledOverview>
  );
};

export default connect(({ freight }: any) => {
  return {
    ...freight,
  };
})(Index);
