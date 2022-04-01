import { ConnectState as FilterConnectState } from "@/models/filter";
import { Text, View, Image, ScrollView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AtToast } from "taro-ui";
import { ConnectState } from "./model";
import { StyledOverview } from "./style";
import Navbar from "../../components/navbar";

import BG1 from "../../static/images/home/bg1.png";
import BG2 from "../../static/images/home/bg2.png";
import BG3 from "../../static/images/home/bg3.png";
import BG4 from "../../static/images/home/bg4.png";
import Dajian from "../../static/images/home/dajian.png"
import Zhuanxian from "../../static/images/home/zhuanxian.png"
import Kuaidi from "../../static/images/home/kuaidi.png"
import GuoJi from "../../static/images/home/guoji.png";
import Tips from "../../static/images/home/tips.png"

const { safeArea } = Taro.getSystemInfoSync();
const { height } = Taro.getMenuButtonBoundingClientRect();

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

console.log(safeArea);
const WayBill = (props) => {
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

  const scanCode = () => {
    Taro.scanCode({
      onlyFromCamera: true,
      scanType: ["barCode"],
      success(res) {

        Taro.navigateTo({
          url: `/pages/guonei/index?deliveryId=${res.result}`,
        });
      },
    });
  }

  return (
    <StyledOverview>
      <ScrollView scrollY={true} className={"scrollview"}>
        <Loading />
        <View className="page">
          <View className="layer1">
            <View className="box1">
              <View className="outer1">
                <View className="wrap1">
                  <View className="layer2">
                    <Image src={BG3} className="bg1"></Image>
                    <View className="main1">
                      <Image className="main3" src={Kuaidi}></Image>
                      <View className="main4"></View>
                      <Text lines="1" className="word1">
                        寄快递
                      </Text>
                      <Text lines="1" decode="true" className="word2">
                        单票快递寄全国6.6元起
                      </Text>
                    </View>
                  </View>
                  <View className="layer3">
                    <Image src={BG4} className="bg1"></Image>
                    <View className="main1">
                      <Image className="main3" src={GuoJi}></Image>
                      <View className="layer4"></View>
                      <Text lines="1" className="info1">
                        寄国际
                      </Text>
                      <View className="layer5">
                        <Text lines="1" className="txt1">
                        国际快递/专线 电商小包
                        </Text> 
                      </View>
                    </View>
                  </View>
                </View>
              </View>
             
              <Image
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng256f0701a0a3d73f7bfe57d4d8d8a9269906c65233a63e6b13ce9e733dd1b237"
                className="icon4"
              ></Image>
              <View className="outer2">
                <Text lines="1" className="txt2">
                  1分钟极速报价
                </Text>
                <Text lines="1" className="word10">
                  在线客服
                </Text>
              </View>
            </View>
          </View>
          <View className="layer9">
            <Navbar></Navbar>
            <View
              className="wrap10"
              style={{ height: `${height}px`, alignItems: "center" }}
            >
              <Text lines="1" className="word14">
                嘀嗒货运
              </Text>
            </View>

            <View
              className="sao"
              onClick={() => scanCode()}
            >
              <Text className={"sao-text"}>扫码寄</Text>
            </View>
          </View>

          <View
            className="layer13"
            onClick={() => {
              // Taro.navigateTo({
              //   url: "/pages/guonei/index",
              // });
            }}
          >
            <Image src={BG1} className="bg1"></Image>
            <View className="box12">
              <Image src={Dajian} className="img8"></Image>
              <Text lines="1" className="info4">
                寄大件
              </Text>
              <Text lines="1" className="word15">
                20公斤以上，门到门一口价
              </Text>
            </View>
          </View>

          <View
            className="layer14"
            onClick={() => {
              // Taro.navigateTo({
              //   url: "/pages/guoji/index",
              // });
            }}
          >
            <Image src={BG2} className="bg1"></Image>
            <View className="main5">
              <View className="bd4">
                <Image src={Zhuanxian} className="img9"></Image>
              </View>
              <Text lines="1" className="word16">
                寄专线
              </Text>
              <Text lines="1" decode="true" className="txt3">
              200公斤或体积1立方以上
              </Text>
            </View>
            <View className="main6"></View>
          </View>
        
        <View className="tipsView" >
          <Image className="tipsIcon"  src={Tips} />
          <Text className="tipsText" >寄快递、寄国际目前仅对特定商户开放服务</Text>
        </View>
        
        </View>


      </ScrollView>
    </StyledOverview>
  );
};

export default connect(({ home }: ConnectState & FilterConnectState) => {
  return {
    ...home,
  };
})(WayBill);
