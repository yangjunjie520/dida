import { Text, View, Image, ScrollView, Button } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AtToast, AtInput, AtIcon } from "taro-ui";

import { StyledOverView } from "./style";
import Quxiao from "../../../static/images/yundan/icon_quxiao.png";
import Xiugai from "../../../static/images/yundan/icon_xiugai.png";
import moment from "moment";

import Navbar from "@/components/navbar";
import { OrderList, CancelOrder } from "./api";
import AddressParse from "address-parse";

const { height } = Taro.getMenuButtonBoundingClientRect();

const WayBillDatails = (props) => {
  const [current, setCurrent] = useState(0);
  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };

  const [list, setList] = useState([]);
  const [info, setInfo] = useState([]);

  const router = useRouter();
  useEffect(() => {
    const { deliveryId } = router.params;
    const user = Taro.getStorageSync("user");
    const params = {
      userId: user.userId,
      openid: user.openid,
      deliveryId,
    };
    OrderList(params)
      .then((res) => {
        if (res) {
          setList(res.rows);
          setInfo(res.rows[0].logisticsInfo)
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // TraceGet({
    //   userId: user.userId,
    //   deliveryId,
    // })
    //   .then((res) => {
    //     if (res) {
    //       setInfo(res.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  const clear = () => {
    const { deliveryId } = router.params;
    const user = Taro.getStorageSync("user");
    const params = {
      userId: user.userId,
      openid: user.openid,
      deliveryId,
    };
    CancelOrder(params)
      .then((res) => {
        if (res) {

          Taro.switchTab({
            url: '/pages/freight/index'
          })
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const promiseTimeType = (type) => {
    switch (type) {
      case 0:
        return '汽车配件'
      case 1:
        return '特惠送'
      case 2:
        return '特快送'
      case 4:
        return '城际闪送'
      case 7:
        return '微小件'
      case 8:
        return '生鲜专送'
      case 16:
        return '生鲜特快'
      case 17:
        return '生鲜特惠'
      case 20:
        return '函数达'
      case 21:
        return '特惠包裹'
      case 24:
        return '特惠小件'
      case 26:
        return '冷链专送'
      default:
        return '-'
    }
  }

  const orderStatus = (type) => {
    switch (type) {

      case '1':
        return '待取件'
      case '2':
        return '运输中'
      case '3':
        return '已签收'
      case '4':
        return '拒收退货'
      case '5':
        return '拦截'
      case '6':
        return '异常'
      case '7':
        return '异常已处理'
      case '10':
        return '已取消'
      case '11':
        return '终止'
      case '12':
        return '订单超区'
      case '13':
        return '下单失败'
      default:
        return ''
    }
  }

  return (
    <StyledOverView>
      <ScrollView scrollY={true} className={"scrollview"}>
        <View className="section1">
          <Navbar></Navbar>
          <View
            className="main2s"
            style={{ height: `${height}px`, alignItems: "center" }}
          >
            {/* <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng264c18d51b5f751eed7b7c217f1a4539ba96e0f4d7e2c645b3942c7ade4c0ba7" className="label2"></Image> */}
            <AtIcon
              value="chevron-LEFT"
              size="30"
              color="#FFF"
              className="label2"
            ></AtIcon>
            <Text className="info2">运单详情</Text>
          </View>
          {list.map((item) => (
            <>
              <View className="main3">
                <Text className="txt1">{item.senderName}</Text>
                <Text className="word1">{orderStatus(item.orderStatus)}</Text>
                <Text className="word2">{item.receiveName}</Text>
              </View>
              <View className="main4">
                <Text className="info3">{AddressParse.parse(item.senderAddress)[0]?.city}</Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6f988cf86efc9efa12167ecb77d6c598173d9af90d2b7520dabb8e6edc8eaedf"
                  className="pic1"
                ></Image>
                <Text className="info3">{AddressParse.parse(item.receiveAddress)[0]?.city}</Text>
              </View>
              <View className="main5">
                <Text className="info5s">运单号：{item.deliveryId}</Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc5c5548cf42781c6f76f016c0c7b9ece38c882121a20076f05eb9431e8a73c7b"
                  className="icon2"
                ></Image>
              </View>
              <View className="main6">
                <Text decode="true" className="info5s">
                  下单时间：{" "}
                  {moment(item.updateTime).format("YYYY-MM-DD HH:mm:ss")}
                </Text>
              </View>
            </>
          ))}
        </View>

        <View className="box4">
          <View className="mod3">
            <Text className="word14">运单信息</Text>
          </View>

          {/* 列表 */}
          {info.map((item, index) => {
            return (
              <View className="mod5">
                <View className="mod6">
                  <Text className={`${index !== 0 ? "word16" : "info15"}`}>
                    {item.opeTitle}
                  </Text>
                </View>
                <View className="mod7">
                  <View className="section8"></View>
                  <View className="section9"></View>
                  {/* <View className="box5">
                              <Text  className="info16">收</Text>
                          </View> */}
                </View>
                <View className="mod8">
                  <Text decode="true" className="word20">
                    {item.opeTime}
                  </Text>
                  <Text className="word18">{item.opeRemark}</Text>
                </View>
              </View>
            );
          })}

          {/* <View className="mod5">
            <View className="mod6">
              <Text className="info15">已签收</Text>
            </View>
            <View className="mod7">
              <View className="section8"></View>
              <View className="section9"></View>
              <View className="box5">
                                <Text  className="info16">收</Text>
                            </View>
            </View>
            <View className="mod8">
              <Text decode="true" className="word20">
                2021-09-09&nbsp;17:06:22
              </Text>
              <Text className="word18">运单已签收</Text>
            </View>
          </View> */}

          {/* <View className="mod5">
            <View className="mod6">
              <Text className="word16">派件中</Text>
            </View>
            <View className="mod7">
              <View className="section8"></View>
              <View className="section9"></View>
            </View>
            <View className="mod8">
              <Text decode="true" className="word20">
                2021-09-09&nbsp;17:06:22
              </Text>
              <Text className="word18">
                货物交给某某某，正在派件途中(联系电话:&nbsp;
                1231234567，总件数:&nbsp;1件)
              </Text>
            </View>
          </View>

          <View className="mod5">
            <View className="mod6">
              <Text className="word16">运输中</Text>
            </View>
            <View className="mod7">
              <View className="section8"></View>
              <View className="section9"></View>
            </View>
            <View className="mod8">
              <Text decode="true" className="word20">
                2021-09-09&nbsp;17:06:22
              </Text>
              <Text className="word18">货物已发车</Text>
            </View>
          </View>

          <View className="mod5">
            <View className="mod6">
              <Text className="word16">待取件</Text>
            </View>
            <View className="mod7">
              <View className="main2">
                <Text className="1" className="info18">
                  寄
                </Text>
              </View>
            </View>
            <View className="mod8">
              <Text decode="true" className="word20">
                2021-09-09&nbsp;17:06:22
              </Text>
              <Text className="word18">运单已创建</Text>
            </View>
          </View> */}
        </View>

        <View className="bd2">
          {list.map((item) => {

            return (
              <View className="block2">
                <Text className="info4">订单信息</Text>
                <View className="group1">
                  <View className="box2">
                    <Text className="txt2">寄</Text>
                  </View>
                  <View className="box3">
                    <Text decode="true" className="word6">寄件人&nbsp;&nbsp;{item.senderMobile}</Text>
                    <Text className="paragraph1">{item.senderAddress}</Text>
                  </View>
                </View>
                <View className="group2">
                  <View className="layer1">
                    <Text className="info5">收</Text>
                  </View>
                  <View className="layer2">
                    <Text decode="true" className="info6">收件人&nbsp;&nbsp;{item.receiveMobile}</Text>
                    <Text className="infoBox1">{item.receiveAddress}</Text>
                  </View>
                </View>

                <View className="group12">
                  <Text className="info13">预估费用</Text>
                  <Text className="infoBox2">{item?.preOrderFee || 0}元</Text>
                </View>
                <View className="group12">
                  <Text className="info13">保险费用</Text>
                  <Text className="infoBox2">{item?.bjFee || 0}元</Text>
                </View>
                <View className="group12">
                  <Text className="info13">包装费用</Text>
                  <Text className="infoBox2">{item?.costMaterialFee || 0}元</Text>
                </View>
                {/* <View className="group12">
                  <Text className="info13">费用合计&nbsp;</Text>
                  <Text className="infoBox2">309.00元</Text>
                </View> */}
                {/* <View className="group12">
                  <Text className="info13">支付方式</Text>
                  <Text className="infoBox2">寄付现结</Text>
                </View> */}
                <View className="group12">
                  <Text className="info13">时效类型</Text>
                  <Text className="infoBox2">{promiseTimeType(item.promiseTimeType)}</Text>
                </View>
                <View className="group12">
                  <Text className="info13">物品信息</Text>
                  <Text className="infoBox2">{`${item?.goods}/${item?.weight}KG/${item?.volume}m3/${item?.packageCount}件`}1</Text>
                </View>
                <View className="group12">
                  <Text className="info13">京东称重</Text>
                  <Text className="infoBox2">{`${item?.goods}/${item?.weight}KG/${item?.volume}m3/${item?.packageCount}件`}</Text>
                </View>
                <View className="group12">
                  <Text className="info13">保价金额</Text>
                  <Text className="infoBox2">{item?.guaranteeValueAmount || 0}元</Text>
                </View>
                {
                  item?.signReturn === 1 && <View className="group12">
                    <Text className="info13">增值服务</Text>
                    <Text className="infoBox2">
                      签单返还;代收货款，代收金 额:{item?.collectionMoney || 0}元
                    </Text>
                  </View>
                }

              </View>
            );
          })}

        </View>

        <View className="section4">
          <View className="block3">
            {/* <View
              className="bd8"
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/freight/edit/index",
                });
              }}
            >
              <Image src={Xiugai} className="icon3"></Image>
              <Text className="txt6">修改运单</Text>
            </View> */}
            {
              list[0]?.orderStatus !== '10' ? <View
                className="bd9"
                onClick={() => {
                  clear();
                }}
              >
                <Image src={Quxiao} className="label3"></Image>
                <Text className="word10">取消运单</Text>
              </View> : <View
                className="bd9"

              >

              </View>
            }

            <Button bindtap="onClick" className="bd10">
              <Text className="info9">分享</Text>
            </Button>
          </View>
        </View>


      </ScrollView>
    </StyledOverView>
  );
};

export default WayBillDatails;
