
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast, AtIcon, AtInput } from 'taro-ui'

import { StyledOverview } from './style'
import Icon_pic from '../../../../static/images/my/icon_pic.png'
import Icon_dizhibu from '../../../../static/images/my/icon_dizhibu.png'


const { safeArea } = Taro.getSystemInfoSync()




const Address = props => {
  const [current, setCurrent] = useState(0)
  const setCurrentSwiper = current => {
    setCurrent(current)
  }
  const { overview, dispatch } = props


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


    <StyledOverview>
      <View className="layer2">
        <View className="block1">
          <Text lines="1" className="word3">粘贴地址信息，自动拆分姓名电话和地址</Text>
        </View>
        <View className="block2">
          <Image src={Icon_pic} className="label3"></Image>
          <Text lines="1" className="word4">图片识别</Text>
          <View className="section2">
            <Text lines="1" className="word5">识别</Text>
          </View>
        </View>
      </View>


      <View className="layer3">
        <View className="layer4">
          <View className="outer3">
            <Text lines="1" className="word6">联系人信息</Text>
            <Image src={Icon_dizhibu} className="label4"></Image>
            <Text lines="1" className="word7">微信地址簿</Text>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Input type='text' placeholder='真实姓名' className="input" />
                <Input type='text' placeholder='电话' className="input" />

                {/* <View className="mod4-0"></View> */}
              </View>
            </View>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Text className='input'>城市/区域</Text>

                {/* <View className="mod4-0"></View> */}
              </View>
            </View>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Input type='text' placeholder='详细地址（例如:&nbsp;**街**号**)' className="input" />


                {/* <View className="mod4-0"></View> */}
              </View>
            </View>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">

                <Input type='text' placeholder='公司名称（选填）' className="input" />


                {/* <View className="mod4-0"></View> */}
              </View>
            </View>
          </View>



          <View className="outer7">
            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd65a38bc31deefc8bc07dfc92083dba422bf5fbd9f581c2d7aab0bc1655929de" className="icon2"></Image>
            <Text lines="1" className="info1">默认寄件地址</Text>
            <Text lines="1" className="txt1">清空</Text>
          </View>
        </View>
      </View>

      <Button bindtap="onClick" class="layer5">
        <Text lines="1" decode="true" class="info2">确&nbsp;定</Text>
      </Button>
    </StyledOverview>


  )
}

export default Address
