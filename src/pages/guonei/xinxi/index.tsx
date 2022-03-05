
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input, Textarea } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { StyledOverView } from './style'
import Modals from '../modal'

import Icon_close from '../../../static/images/yundan/icon_close.png'



const { safeArea } = Taro.getSystemInfoSync()




const Index = props => {
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
    <>
      <StyledOverView>
        <View className="mod6">
          <View className="layer1">
            <View className="mod7">
              <Text lines="1" className="info2">物品类型</Text>
              <View className="mod8">
                <Text lines="1" className="word2">必填</Text>
              </View>
            </View>
            <View className="mod9">
              <View className="layer">
                <View className="wrap1"></View>
                <Input placeholder="请输入物品名称" className="layer2" />
              </View>
              <Button bindtap="onClick" className="layer3">
                <Text lines="1" className="txt1">确定</Text>
              </Button>
            </View>
            {/* <View className="mod10">
              <View className="outer3">
                <Text lines="1" className="word3">粽子</Text>
              </View>
              <View className="outer3">
                <Text lines="1" className="info4">会展物品</Text>
              </View>
              <View className="outer3">
                <Text lines="1" className="txt2">日用品</Text>
              </View>
              <View className="outer3">
                <Text lines="1" className="info5">家电家具</Text>
              </View>
              <View className="outer3">
                <Text lines="1" className="word4">食品</Text>
              </View>
              <View className="outer3">
                <Text lines="1" className="word5">其它</Text>
              </View>
            </View>
            */}

            <View className="active">
              <Text lines="1" className="ac-text">日用品</Text>
              <Image src={Icon_close} className="label2"></Image>

            </View>

          </View>
        </View>

        <View className="mod11">
          <View className="main1">
            <Text lines="1" className="txt3">总重量</Text>
            <Text lines="1" className="info6">－</Text>
            <View className="modInp">
              <Input placeholder="20" className="mod12" />
              <Text lines="1" className="txt4">KG</Text>
            </View>
            <Text lines="1" className="word7">＋</Text>
          </View>
        </View>

        <View className="mod13">
          <View className="wrap2">
            <View className="bd1">
              <Text lines="1" className="word8">总体积</Text>
              <Text lines="1" className="info7">－</Text>

              <View className="modInp">
                <Input placeholder="0.01" className="mod12" />
                <Text lines="1" className="txt4">m³</Text>
              </View>
              <Text lines="1" className="info9">＋</Text>
            </View>
            <View className="bd3">
              <View className="bd4">
                {/* <View className="wrap3">
                  <Text lines="1" className="word9">长</Text>
                </View> */}
                <Input placeholder="长" className="word9 wrap3" />
                <View className="wrap4">
                  <Text lines="1" className="info10">CM</Text>
                  <Text lines="1" className="word10">×</Text>
                </View>
                {/* <View className="wrap5">
                  <Text lines="1" className="word11">宽</Text>
                </View> */}
                <Input placeholder="宽" className="word9 wrap3" />
                <View className="wrap6">
                  <Text lines="1" className="txt6">CM</Text>
                  <Text lines="1" className="word12">×</Text>
                </View>
                {/* <View className="wrap7">
                  <Text lines="1" className="info11">高</Text>
                </View> */}
                <Input placeholder="高" className="word9 wrap3" />
                <Text lines="1" className="info12">CM</Text>
              </View>
            </View>
            <Text lines="1" className="paragraph1">注: 实际重量体积以收派员确定为准，体积较大时可能会按体积 重量收费，录入长宽高，预估费用更精准。</Text>
          </View>
        </View>

        <View className="mod11">
          <View className="main1">
            <Text lines="1" className="txt3">件数</Text>
            <Text lines="1" className="info6">－</Text>
            <View className="modInp">
              <Input placeholder="1" className="mod12" />
              <Text lines="1" className="txt4">件</Text>
            </View>
            <Text lines="1" className="word7">＋</Text>
          </View>
        </View>


        <View className="mod15">
          <View className="mod16">
            <View className="main5">
              <Text lines="1" className="word15">给揽件员捎话</Text>
              <Text lines="1" className="txt9">注: 纸箱需要额外收费哦~</Text>
            </View>
            {/* <View className="main6">
              <View className="bd5">
                <Text lines="1" className="word16">给揽件员捎句话吧~</Text>
              </View>
              <View className="bd6">
                <Text lines="1" className="txt10">0/100</Text>
              </View>
            </View> */}
            <Textarea className="main6 word16" placeholder="给揽件员捎句话吧" maxlength={100}></Textarea>
            <View className="main7">
              <View className="box1">
                <Text lines="1" className="info14">请带纸箱</Text>
              </View>
              <View className="box2">
                <Text lines="1" className="txt11">请带胶带</Text>
              </View>
              <View className="box3">
                <Text lines="1" className="word17">需爬楼梯</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="foot">
          <Button bindtap="onClick" className="box8s">
            <Text lines="1" decode="true" className="info2s">确认</Text>
          </Button>
        </View>

      </StyledOverView>


    </>
  )
}

export default Index
