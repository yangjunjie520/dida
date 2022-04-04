
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast, AtIcon, AtInput } from 'taro-ui'

import { StyledOverView } from './style'

import Icon_share from '../../../static/images/yundan/icon_share.png'
import Icon_xiadan from '../../../static/images/yundan/icon_xiadan.png'
import Icon_xiangqing from '../../../static/images/yundan/icon_xiangqing.png'

import { OrderList } from "./api";

import Navbar from "@/components/navbar";


const { safeArea } = Taro.getSystemInfoSync()




const Edit = props => {
  const [current, setCurrent] = useState(0)
  const setCurrentSwiper = current => {
    setCurrent(current)
  }
  const { overView, dispatch } = props
  const [list, setList] = useState([]);
  const [info, setInfo] = useState([]);

  const router = useRouter();
  const { deliveryId } = router.params;
  useEffect(() => {

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

  }, []);

  const agin = () => {
    dispatch({
      type: "order/save",
      payload: {

        collectionMoney: 0,
        customerBoxCode: "",
        deliveryType: 6,
        goods: null,
        guaranteeValue: 0,
        guaranteeValueAmount: 0,
        packageCount: 1,
        pickUpEndTime: "",
        pickUpStartTime: "",
        promiseTimeType: 0,
        receiveAddress: "",
        receiveMobile: "",
        receiveName: "",
        receiveProvinceCode: "",
        receiveTel: "",
        remark: "",
        salesChannel: "",
        sendProvinceCode: "",
        senderAddress: "",
        senderMobile: "",
        senderName: "",
        senderTel: "",
        signReturn: 0,
        thirdNo: "",
        transType: 0,

        vloumHeight: 0,
        vloumLong: 0,
        vloumWidth: 0,
        vloumn: 0,
        warehouseCode: "",
        weight: 1,
      },
    });
    Taro.navigateBack({});
  }



  const del = () => {
    Taro.navigateTo({
      url: `/pages/info/details/index?deliveryId=${deliveryId}`,
    });
  }

  return (

    <StyledOverView>

      <View className="bd1">
        <Navbar></Navbar>
        <View className="main1">
          <View className="box2">
            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0d3e7d27ca150463e9f9bbff0b35d691841696f2de362c6edf926832ef95ac51" className="icon3"></Image>
            <Text lines="1" className="word2">运单</Text>
            {/* <View className="section1"></View> */}
          </View>
          <View className="box3">
            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng68ca22e86ed27499f93e76529b4b71b735ab9b12832f9d1e0fb6c0dce799faec" className="icon4"></Image>
            <Text lines="1" className="word3">下单成功！</Text>
          </View>
          <Text lines="1" decode="true" className="word4">揽件员即将上门揽件</Text>
        </View>
      </View>

      <View className="mod3">
        {
          list.map(item => {
            return <View className="layer2">
              <View className="group1">
                <View className="mod4">
                  <Text lines="1" className="word5">寄</Text>
                </View>
                <View className="mod5">
                  <Text lines="1" decode="true" className="info1">寄件人&nbsp;&nbsp;{item.senderMobile}</Text>
                  <Text lines="1" className="infoBox1">{item.senderAddress}</Text>
                </View>
              </View>
              <View className="group2"></View>
              <View className="group3">
                <View className="mod6">
                  <Text lines="1" className="word6">收</Text>
                </View>
                <View className="mod7">
                  <Text lines="1" decode="true" className="word7">收件人&nbsp;&nbsp;{item.receiveMobile}</Text>
                  <Text lines="1" className="paragraph1">{item.receiveAddress}</Text>
                </View>
              </View>
            </View>
          })
        }

      </View>

      <View className="bd2">
        <View className="layer1">
          <Image src={Icon_xiadan} className="label1" onClick={agin}></Image>
          <Text lines="1" className="txt1" onClick={agin}>继续下单</Text>
          <Image src={Icon_xiangqing} className="label2" onClick={del}></Image>
          <Text lines="1" className="txt2" onClick={del}>查看详情</Text>
          <Image src={Icon_share} className="icon5"></Image>
          <Text lines="1" className="txt3">分享好友</Text>
        </View>
      </View>
    </StyledOverView>


  )
}



export default connect(({ order }: any) => {
  return {
    ...order,
  };
})(Edit);
