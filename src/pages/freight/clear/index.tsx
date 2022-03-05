
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input, Radio } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast, AtIcon, AtInput } from 'taro-ui'

import { StyledOverView } from './style'



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
      <View className="main2">
        <View className="main3">
          <Text lines="1" className="word2">请告诉我们取消运单的原因</Text>
          <Text lines="1" className="word3">我们会为您提供更好的服务</Text>
          <View className="outer1">
          <Radio color="#ff7201"></Radio>
            <Text lines="1" className="word4">计划有变，不需要寄了</Text>
          </View>
          <View className="outer2">
            {/* <View className="layer1"></View> */}
            <Radio color="#ff7201"></Radio>
            <Text lines="1" className="txt1">换个时间寄</Text>
          </View>
          <View className="outer3">
            <Radio color="#ff7201"></Radio>
            <Text lines="1" className="txt2">服务态度不好</Text>
          </View>
          <View className="outer5">
          <Radio color="#ff7201"></Radio>
            <Text lines="1" className="word5">超时未取件</Text>

          </View>
          <View className="outer6">
          <Radio color="#ff7201"></Radio>
            <Text lines="1" className="txt3">价格太贵</Text>
          </View>
          <View className="outer7">
          <Radio color="#ff7201"></Radio>
            <Text lines="1" className="word6">其他</Text>
          </View>
          <View className="outer8">
            <Text lines="1" className="paragraph1">取消成功<br />感谢您使用嘀嗒货运~</Text>
          </View>

          <View className="foot">
            <Button bindtap="onClick" className="box8s">
              <Text lines="1" decode="true" className="info2s">提&nbsp;交</Text>
            </Button>
          </View>
        </View>
      </View>

    </StyledOverView>


  )
}

export default Edit
