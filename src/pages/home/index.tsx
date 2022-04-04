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
import Send from "../../static/images/home/send@2x.png"
import Linian from "../../static/images/home/linian@3x.png"
import Fuwu from "../../static/images/home/fuwu@3x.png"
import Xinren from "../../static/images/home/xinren@3x.png"
import Fazhan from "../../static/images/home/fazhan@3x.png"
import Kefu from "../../static/images/home/kefu.png"
import Lvse from "../../static/images/home/linian@3x(1).png"
import Yes from "../../static/images/home/login_yes@3x.png"
import PayTips from "../../static/images/home/pay_tips@2x.png"
import Erweima from "../../static/images/home/erweima.jpeg"




const { safeArea } = Taro.getSystemInfoSync();
const { height } = Taro.getMenuButtonBoundingClientRect();



console.log(safeArea);
const WayBill = (props) => {
  const [current, setCurrent] = useState(0);
  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };
  const { overview, dispatch } = props;

  const [kf, setKf] = useState(false)

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

        <View className="page">

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
              <Image src={Send} className='sao-img'></Image>
              &nbsp;<Text className={"sao-text"}>扫码寄</Text>
            </View>
          </View>

          <View className="i-cent">
            <View className="i-select">
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
                  <View className="kd">
                    <Text lines="1" className="word1">
                      寄大件
                    </Text>
                    {/* <Text className="daikaifang">待开放</Text> */}
                  </View>

                  <Text lines="1" decode="true" className="word2">
                    20公斤以上，门到门一口价
                  </Text>
                  {/* <Text lines="1" className="info4">
                寄大件
              </Text>
              <Text lines="1" className="word15">
                20公斤以上，门到门一口价
              </Text> */}
                </View>
              </View>

              <View
                className="layer14"
                onClick={() => {
                  // Taro.navigateTo({
                  //   url: "/pages/guonei/index",
                  // });
                }}
              >
                <Image src={BG2} className="bg1"></Image>
                <View className="main5">
                  <View className="bd4">
                    <Image src={Zhuanxian} className="img9"></Image>
                  </View>
                  <View className="kd">
                    <Text lines="1" className="word1">
                      寄专线
                    </Text>
                    {/* <Text className="daikaifang">待开放</Text> */}
                  </View>

                  <Text lines="1" decode="true" className="word2">
                    200公斤或体积1立方以上
                  </Text>
                  {/* <Text lines="1" className="word16">
                寄专线
              </Text>
              <Text lines="1" decode="true" className="txt3">
                200公斤或体积1立方以上
              </Text> */}
                </View>
                <View className="main6"></View>
              </View>
            </View>

            <View className="layer1">
              <View className="box1">
                <View className="outer1">
                  <View className="wrap1">
                    <View className="layer2">
                      <Image src={BG3} className="bg1"></Image>
                      <View className="main1">
                        <Image className="main3" src={Kuaidi}></Image>
                        <View className="main4"></View>
                        <View className="kd">
                          <Text lines="1" className="word1">
                            寄快递
                          </Text>
                          <Text className="daikaifang">待开放</Text>
                        </View>

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
                        <View className="kd">
                          <Text lines="1" className="word1">
                            寄国际
                          </Text>
                          <Text className="daikaifang">待开放</Text>
                        </View>

                        <Text lines="1" decode="true" className="word2">
                          国际快递/专线 电商小包
                        </Text>


                      </View>
                    </View>
                  </View>
                </View>


              </View>
            </View>

            <View className="tipsView" >
              <Image className="tipsIcon" src={Tips} />
              <Text className="tipsText" >寄快递、寄国际目前仅对特定商户开放服务</Text>
            </View>

            <View className="fuwu">
              <Image src={Linian} className='linian'></Image>
              <View className="fuwu-box">
                <View className="fuwu-item">
                  <Image className="fuwu-img" src={Fuwu}></Image>&nbsp;
                  <Text className="fuwu-text">用心服务</Text>
                </View>
                <View className="fuwu-item">
                  <Image className="fuwu-img" src={Xinren}></Image>&nbsp;
                  <Text className="fuwu-text">建立信任</Text>
                </View>
                <View className="fuwu-item">
                  <Image className="fuwu-img" src={Fazhan}></Image>&nbsp;
                  <Text className="fuwu-text">持续发展</Text>
                </View>
              </View>
            </View>

            <View className="jf">
              <View className="jf-header">
                <View style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Image src={Lvse} className='jf-img-big'></Image> &nbsp;
                  <Text className='jf-text-blod'>先寄后付</Text> &nbsp;
                  <Text className='jf-text'>收费有疑问，核实退差价</Text>
                </View>
                <Image src={Yes} className='jf-img'></Image>
              </View>
              <View className="jf-center">
                <Image src={PayTips} className="jf-tip"></Image> &nbsp;
                <Text className="jf-tip-text">请勿线下付款给揽收人员，避免收费不标准及</Text>
              </View>
            </View>

          </View>

          <View className="kf-tu" onClick={e => {
            setKf(true)
            e.stopPropagation()
          }}>
            <Image
              src={Kefu}
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

        {

          kf &&
          <View className="mask" onClick={e => {
            setKf(false)
            e.stopPropagation()
          }}>




            <Image src={Erweima} show-menu-by-longpress mode="aspectFit" className="img"></Image>




          </View>
        }
      </ScrollView>
    </StyledOverview >
  );
};

export default connect(({ home }: ConnectState & FilterConnectState) => {
  return {
    ...home,
  };
})(WayBill);
