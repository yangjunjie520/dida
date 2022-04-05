import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Input,
  Switch,
  Radio,
  Icon
} from "@tarojs/components";
import Taro, { useRouter, useDidShow } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { StyledOverView } from "./style";
import Modals from "./modal";
import AddressParse from 'address-parse';
import { AtModal, AtModalHeader, AtModalContent, AtModalAction, AtIcon } from "taro-ui"

import Jiantou from "../../static/images/my/jiantou.png";
import Warning_circle from "../../static/images/warning-circle.png";
import { ApiPays, PaySearch, getPreOrderPrice } from "./api";
const par = require('../../utils/addressparse.js')

const { safeArea } = Taro.getSystemInfoSync();

const Index = (props) => {
  const router = useRouter();

  const isId = router.params.deliveryId
  const [current, setCurrent] = useState(0);
  const [xieyi, setXieyi] = useState(true)
  const [fukuan, setFukuan] = useState(false)
  const [price, setPrice] = useState(null)

  const [pays, setPya] = useState(1) // 1到付  2寄付

  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };
  const [copy, setCopy] = useState({
    addr: "parse_list",
    area: "",
    city: "",
    detail: "",
    mobile: "",
    name: "",
    phone: "",
    province: "",
    result: undefined,
    zip_code: "",
  })

  const [copyShow, setCopyShow] = useState(false)

  const { params, dispatch } = props;

  const {
    deliveryType,
    guaranteeValueAmount,
    collectionMoney,
    openid,
    senderAddress,
    senderMobile,
    senderName,
    sendProvinceCode,
    receiveAddress,
    receiveMobile,
    receiveName,
    receiveProvinceCode,
    goods,
    weight
  } = params;

  useEffect(() => {
    Taro.getClipboardData({
      success: function (res) {

        let parse_list = par.parse(res.data);
        console.log(parse_list)
        if (parse_list?.phone !== '') {
          setCopy(parse_list)
          setCopyShow(true)
        }

      }
    })
  }, [])

  // 对应 onShow
  useDidShow(() => {

    if (senderName !== '' && receiveName !== '' && weight !== '') {
      const user = Taro.getStorageSync("user");
      getPreOrderPrice({
        userId: user.userId,
        openid: user.openid,
        sendProvinceCode,
        senderAddress,
        senderMobile,
        receiveProvinceCode,
        receiveAddress,
        weight,
      }).then(res => {

        if (res.code === 200) {
          setPrice(res.data)
        } else {
          Taro.showToast({
            title: `接口异常${res.msg}`,
            icon: "none",
            duration: 2000,
          });
        }


      })
    }
  })

  const pay = async () => {
    if (senderName === '') {
      Taro.showToast({
        title: "请填写寄件人信息",
        icon: "none",
        duration: 2000,
      });
      return false;
    }
    if (receiveName === '') {
      Taro.showToast({
        title: "请填写收件人信息",
        icon: "none",
        duration: 2000,
      });
      return false;
    }
    if (!goods) {
      Taro.showToast({
        title: "请选择物品类型",
        icon: "none",
        duration: 2000,
      });
      return false;
    }
    if (isId) {
      dispatch({ type: "order/payOrder", isId });
    } else {
      const user = Taro.getStorageSync("user");
      const res = await ApiPays({
        openid: user.openid,
        totalFee: price,
      });

      Taro.requestPayment({
        ...res.message,
        success: function (r) {
          PaySearch({
            outTradeNo: res?.message?.outTradeNo,
          })
            .then((res) => {
              if (res) {
                dispatch({ type: "order/payOrder", isId });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
        fail: function (err) {
          console.log("支付失败---", res);
        },
      });
    }


  };

  const handelCopy = (type) => {

    if (type === 'ji') {
      dispatch({
        type: "order/save",
        payload: {
          senderAddress: copy.province + copy.city + copy.area + copy.addr,
          senderMobile: copy.phone,
          senderName: copy.name,
          sendProvinceCode: copy.zip_code.substr(0, 2) + "0000",
        },
      });
    } else if (type === 'shou') {
      dispatch({
        type: "order/save",
        payload: {
          receiveAddress: copy.province + copy.city + copy.area + copy.addr,
          receiveMobile: copy.phone,
          receiveName: copy.name,
          receiveProvinceCode: copy.zip_code.substr(0, 2) + "0000",
        },
      });
    }

    setCopyShow(false)
  }



  return (
    <>
      <StyledOverView>
        <View className="head">
          <View className="section3">
            <View className="layer3s" style={{ marginBottom: '24rpx' }} onClick={() => {
              Taro.navigateTo({
                url: `/pages/add/index?type=ji`,
              });
            }}>
              <View className="mod2">
                <Text className="word2">寄</Text>
              </View>
              <View className="main2">
                <Text decode="true" className="txt2">
                  {senderName === '' ? '寄件人信息' : `${senderName}&nbsp;&nbsp;${senderMobile}`}
                </Text>
                <Text className="paragraph1">
                  {senderAddress === '' ? '填写完整信息' : `${senderAddress}`}
                </Text>
              </View>
              <View className="main3"></View>
              <Text className="info3" >地址簿</Text>
            </View>
            {/* <View className="layer2"></View> */}
            <View className="layer3s layer2" onClick={() => {
              Taro.navigateTo({
                url: `/pages/add/index?type=shou`,
              });
            }}>
              <View className="main1">
                <Text className="info2">收</Text>
              </View>
              <View className="main2">
                <Text decode="true" className="txt2">
                  {receiveName === '' ? '收件人信息' : `${receiveName}&nbsp;&nbsp;${receiveMobile}`}
                </Text>
                <Text className="paragraph1">
                  {receiveAddress === '' ? '填写完整信息' : `${receiveAddress}`}
                </Text>
              </View>
              <View className="main3"></View>
              <Text className="info3">地址簿</Text>
            </View>
          </View>
        </View>

        <View className="layer3">
          <View className="layer4">
            <View className="item">
              <View className="group1-0">
                <View className="mod2-0">
                  <Text className="input">期望上门时间</Text>
                  <View className="opt">
                    <Text className="blod" style={{
                      textAlign: 'right'
                    }}>今天 2小时内</Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View>

            {/* <View className="item">
              <View className="group1-0">
                <View className="mod2-0">
                  <Text className="input">预计送达时间</Text>
                  <View className="opt">
                    <Text className="input">信息填写完整后显示</Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View> */}

            <View
              className="item"
              onClick={() => {
                console.log(11);
                Taro.navigateTo({
                  url: "/pages/guonei/xinxi/index",
                });
              }}
            >
              <View className="group1-0">
                <View className="mod2-0">
                  <View className="bitian">
                    <Text className="input in-flex">物品信息</Text>&nbsp;&nbsp;
                    <View className="block7-2">
                      <Text className="word6-2">必填</Text>
                    </View>
                  </View>

                  <View className="opt">
                    <Text className="input" style={{
                      textAlign: 'right'
                    }}>
                      {" "}
                      {/* {deliveryType
                        ? deliveryType === 6
                          ? "特快零担"
                          : "特快重货"
                        : "请填写(20KG以上物品)"} */}
                      {goods
                        ? `${goods}/${weight}KG`
                        : "请填写物品信息"}
                    </Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View>

            {
              !isId && <View className="item">
                <View className="group1-0">
                  <View className="mod2-0">
                    <Text className="input" style={{ flex: "none" }}>
                      大票直达
                    </Text>
                    <View className="opt" style={{ flex: "none" }}>
                      <Text className="blod">300公斤货物以上适用</Text>&nbsp;
                      &nbsp;
                      <Switch color="#ff7201" />
                    </View>
                  </View>
                </View>
              </View>
            }

            {/* <View className="item">
              <View className="group1-0">
                <View className="mod2-0">
                  <Text className="input">付款方式</Text>
                  <View className="opt">
                    <Text className="blod">寄付现结</Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View> */}
          </View>
        </View>

        <View className="layer3">
          <View className="layer4">
            {
              !isId && <View
                className="item"
                onClick={() => {
                  Taro.navigateTo({
                    url: "/pages/guonei/baojia/index",
                  });
                }}
              >
                <View className="group1-0">
                  <View className="mod2-0">
                    <Text className="input">保价</Text>
                    <View className="opt">
                      <Text className="input" style={{
                        textAlign: 'right'
                      }}>
                        {guaranteeValueAmount
                          ? `￥${guaranteeValueAmount}`
                          : "请填写保价信息"}
                      </Text>
                      <Image src={Jiantou} className="jiantou"></Image>
                    </View>
                  </View>
                </View>
              </View>
            }

            <View
              className="item"
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/guonei/zengzhi/index",
                });
              }}
            >
              <View className="group1-0">
                <View className="mod2-0">
                  <Text className="input">增值服务</Text>
                  <View className="opt">
                    <Text className="input" style={{
                      textAlign: 'right'
                    }}>
                      {collectionMoney
                        ? `￥${collectionMoney}`
                        : "包装服务/代收货款"}
                    </Text>
                    <Image src={Jiantou} className="jiantou"></Image>
                  </View>
                </View>
              </View>
            </View>
            {
              isId && <View
                className="item"

              >
                <View className="group1-0">
                  <View className="mod2-0">
                    <Text className="input">运单号</Text>
                    <View className="opt">
                      <Text className="input" style={{
                        textAlign: 'right'
                      }}>
                        {isId}
                      </Text>

                    </View>
                  </View>
                </View>
              </View>
            }

          </View>
        </View>

        {
          !isId && <View className="outer8">
            <View className="main4">
              <View className="group4">
                <Text className="txt9">重货上楼</Text>
                <Image src={Warning_circle} className="label6"></Image>
                <Text className="word12">¥</Text>
                <Text className="word13">40</Text>
                &nbsp;&nbsp;
                {/* <View className="block8"></View> */}
                <Switch color="#ff7201" className="zh-sw" />
              </View>
              <View className="group5"></View>
            </View>
            {/* <View className="main5"></View> */}
            <Text decode="true" className="paragraph2">
              整票&lt;&nbsp;50KG，&nbsp;免费，整票&gt;&nbsp;50KG且≤140KG时，固定
              <br />
              40元/票，整票&gt;&nbsp;140KG，0.3元/公斤，&nbsp;(最重件≥100KG
              <br />
              整票不上楼)
            </Text>
          </View>
        }
        <View className="check">

          <Radio className='radio-list__radio' style={{
            transform: 'scale(0.6)',
            display: 'flex',
          }} color='#FF7464'

            onClick={(e) => setXieyi(!xieyi)}
            checked={xieyi}
          ></Radio>
          <Text className='text'>阅读并同意《货运服务协议》</Text>
        </View>

        <View className="foot">
          <View
            className="outer9"
            onClick={(e) => {
              Taro.navigateTo({
                url: "/pages/freight/suc/index",
              });
              e.stopPropagation();
            }}
          >
            <View className="section4">
              <View className="layer7">
                <View className="layer8">
                  {/* <Text className="info3">预估费用</Text> */}
                  <View className="block9">
                    <Text className="word14">¥</Text>
                    <Text className="info4">{price ? price : '--'}</Text>
                  </View>
                  <View className="fangshi" onClick={(e) => {
                    setFukuan(true)
                    e.stopPropagation()
                  }}><Text className="fangshi-text">{pays === 1 ? '货到付款' : '' || pays === 2 ? '寄付现结' : ''}</Text></View>
                </View>
                <View className="layer9">
                  {/* <Image
                    src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7a499fe45eed64ab25c974fecf15c70d576d564de3843223ef9dc9c37df903e5"
                    className="label7"
                  ></Image> */}
                  <Text className="word15">费用以小哥核算为准</Text>
                </View>
              </View>
              <View className="tixi">
                <Text
                  className="word16"
                  onClick={(e) => {
                    pay();
                    e.stopPropagation();
                  }}
                >
                  下单
                </Text>
              </View>

            </View>
          </View>
        </View>

        {
          fukuan && <View className="mask">
            <View className="modal">
              <View className="m-head">
                <Text className="m-tit">付款方式</Text>
                <AtIcon value='close' size='16' color='#888888'></AtIcon>
              </View>
              <View className="m-cont">
                <View className={`selc ${pays === 1 ? 'avtive' : ''}`} onClick={(e) => {
                  setPya(1)
                  e.stopPropagation()
                }}>
                  <Text className={`s-text ${pays === 1 ? 'a-text' : ''}`}>货到付款</Text>
                </View>
                <View className={`selc ${pays === 2 ? 'avtive' : ''}`} onClick={(e) => {
                  setPya(2)
                  e.stopPropagation()
                }}>
                  <Text className={`s-text ${pays === 2 ? 'a-text' : ''}`}>寄付现结</Text>
                </View>
                {/* <View className="selc">
                  <Text className="s-text">寄付月结</Text>
                </View> */}


              </View>
              <View className="m-foot" onClick={(e) => {
                setFukuan(false)
                e.stopPropagation()
              }}>
                <Text className="m-bt">确 定</Text>
              </View>
            </View>
          </View>
        }

        {
          copyShow && <View className="mask copy-box">
            <View className="copy">
              <View className="m-head">
                <Text className="m-tit">是否使用剪切板中地址</Text>
                <AtIcon value='close' size='16' color='#888888' className="c-icon" onClick={() => setCopyShow(false)}></AtIcon>
              </View>
              <View className="copy-cont">
                <View className="c-item">
                  <Text className="c-left">姓名：</Text>
                  <Text className="c-right">{copy.name}</Text>
                </View>
                <View className="c-item">
                  <Text className="c-left">电话：</Text>
                  <Text className="c-right">{copy.phone}</Text>
                </View>
                <View className="c-item">
                  <Text className="c-left">地址：</Text>
                  <Text className="c-right" style={{ height: '88rpx' }}>{copy.province}{copy.city}{copy.area}{copy.addr}</Text>
                </View>


              </View>
              <View className="c-foot">
                <View className="send" onClick={(e) => {
                  handelCopy('ji')
                  e.stopPropagation()
                }}><Text className="s-text">寄件地址</Text></View>
                <View className="rev" onClick={(e) => {
                  handelCopy('shou')
                  e.stopPropagation()
                }}><Text className="r-text">收件地址</Text></View>
              </View>
            </View>
          </View>
        }
      </StyledOverView>


      {/* 重货上楼 */}
      {/* <Modals
        title={'重货上楼'}
        text={`嘀嗒物流承运货物是，当单票货物重量50KG&nbsp;(含)\n以下，嘀嗒物流提供免费上楼服务。当单票货物\n重量50KG以上，且货物最长边小于2米(含)\n提供收费送货上楼服务\n服务特性:\n专业团队保障，为客户提供便利的上楼服务，计\n费简单，全网统一\n服务范围:\n中国内地地区互寄\n收费标准:\n中国内地地区互寄:\n重货上楼服务费=货物重量*标准费率\n重货产品:单件100KG以内，且货物最长边小于\n2米(含),整单免费上楼，反之整票不上楼\n零担产品：当单票货物重量50KG`}
      ></Modals> */}

      {/* <Modals
        title={'重货上楼'}
        text={`零担产品：当单票货物重量50KG(含)以下，嘀嗒\n物流提供免费上楼服务。当单票货物重量50KG\n以上，且货物最长边小于2米(含)，提供收费送货\n上楼服务\n注:以.上仅供参考，具体以当地嘀嗒销售人员报\n价为准`}
      ></Modals> */}

    </>
  );
};

export default connect(({ order }: any) => {
  return {
    ...order,
  };
})(Index);
