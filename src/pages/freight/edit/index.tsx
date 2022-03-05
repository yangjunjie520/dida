
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast, AtIcon, AtInput } from 'taro-ui'

import { StyledOverView } from './style'
import Icon_pic from '../../../static/images/my/icon_pic.png'
import Icon_dizhibu from '../../../static/images/my/icon_dizhibu.png'


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

      <View className="head">
        <View className="section3">
          <View className="layer1">
            <View className="mod2">
              <Text lines="1" className="word2">寄</Text>
            </View>
            <View className="mod3">
              <Text lines="1" decode="true" className="info1">寄件人&nbsp;&nbsp;123****12313</Text>
              <Text lines="1" className="infoBox1">广东省深圳市深圳市南山区留学生 创业大厦1304室</Text>
            </View>
          </View>
          <View className="layer2"></View>
          <View className="layer3s">
            <View className="main1">
              <Text lines="1" className="info2">收</Text>
            </View>
            <View className="main2">
              <Text lines="1" decode="true" className="txt2">收件人&nbsp;&nbsp;123****12313</Text>
              <Text lines="1" className="paragraph1">广东省深圳市深圳市南山区留学生 创业大厦1304室</Text>
            </View>
            <View className="main3"></View>
            <Text lines="1" className="info3">地址簿</Text>
          </View>
        </View>
      </View>



      <View className="layer3">
        <View className="layer4">
          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Text className='input'>期望上门时间</Text>
                <View className='opt'>
                  <Text className='blod'>今天 2小时内</Text>
                  <AtIcon value='chevron-right' size='28' color='#999999 '></AtIcon>
                </View>
              </View>
            </View>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Text className='input'>预计送达时间</Text>
                <View className='opt'>
                  <Text className='blod'>2月12日 23:59</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Text className='input'>物品信息</Text>
                <View className='opt'>
                  <Text className='blod'>10m3 /98KG/1件/服装</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Text className='input'>付款方式</Text>
                <View className='opt'>
                  <Text className='blod'>寄付现结</Text>
                  <AtIcon value='chevron-right' size='28' color='#999999 '></AtIcon>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="layer3">
        <View className="layer4">


          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Text className='input'>保价</Text>
                <View className='opt'>
                  <Text className='blod'>999元</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Text className='input'>增值服务</Text>
                <View className='opt'>
                  <Text className='blod'>签单返还</Text>
                  <AtIcon value='chevron-right' size='28' color='#999999 '></AtIcon>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <Button bindtap="onClick" className="layer5">
        <Text lines="1" decode="true" className="info2">确&nbsp;定</Text>
      </Button>
    </StyledOverView>


  )
}

export default Edit
