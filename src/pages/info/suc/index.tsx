
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast, AtIcon, AtInput } from 'taro-ui'

import { StyledOverView } from './style'

import Icon_share from '../../../static/images/yundan/icon_share.png'
import Icon_xiadan from '../../../static/images/yundan/icon_xiadan.png'
import Icon_xiangqing from '../../../static/images/yundan/icon_xiangqing.png'


const { safeArea } = Taro.getSystemInfoSync()




const Edit = props => {
  const [current, setCurrent] = useState(0)
  const setCurrentSwiper = current => {
    setCurrent(current)
  }
  const { overView, dispatch } = props


  useEffect(() => {
    // dispatch({ type: 'waybill/getDefault' })
    // // 监听时区变化
    // Taro.eventCenter.on('timeZoneOnChange', arg => {
    //   dispatch({ type: 'waybill/getDefault' })
    // })
    // Taro.showShareMenu({
    //   withShareTicket: true,
    // })
  }, [dispatch])

  return (


    <StyledOverView>

      <View className="bd1">
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
          <Text lines="1" decode="true" className="word4">揽件员预计上门时间:&nbsp;12月12日12:12前</Text>
        </View>
      </View>

      <View className="mod3">
        <View className="layer2">
          <View className="group1">
            <View className="mod4">
              <Text lines="1" className="word5">寄</Text>
            </View>
            <View className="mod5">
              <Text lines="1" decode="true" className="info1">寄件人&nbsp;&nbsp;123****12313</Text>
              <Text lines="1" className="infoBox1">广东省深圳市深圳市南山区留学生创业大厦 1304室</Text>
            </View>
          </View>
          <View className="group2"></View>
          <View className="group3">
            <View className="mod6">
              <Text lines="1" className="word6">收</Text>
            </View>
            <View className="mod7">
              <Text lines="1" decode="true" className="word7">收件人&nbsp;&nbsp;123****12313</Text>
              <Text lines="1" className="paragraph1">广东省深圳市深圳市南山区留学生创业大厦 1304室</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="bd2">
      <View className="layer1">
        <Image src={Icon_xiadan} className="label1"></Image>
        <Text lines="1" className="txt1">继续下单</Text>
        <Image src={Icon_xiangqing} className="label2"></Image>
        <Text lines="1" className="txt2">查看详情</Text>
        <Image src={Icon_share} className="icon5"></Image>
        <Text lines="1" className="txt3">分享好友</Text>
      </View>
    </View>
    </StyledOverView>


  )
}

export default Edit
