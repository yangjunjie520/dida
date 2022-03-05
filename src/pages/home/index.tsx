
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast } from 'taro-ui'
import { ConnectState } from './model'
import { StyledOverview } from './style'
import Navbar from '../../components/navbar'

import Guonei from '../../static/images/home/guonei.png'
import GuoJi from '../../static/images/home/guoji.png'
import BG1 from '../../static/images/home/bg1.png'
import BG2 from '../../static/images/home/bg2.png'
import BG3 from '../../static/images/home/bg3.png'
import BG4 from '../../static/images/home/bg4.png'
import Tongcheng from '../../static/images/home/tongcheng.png'
import Xianzhi from '../../static/images/home/xianzhi.png'
import News from '../../static/images/home/new.png'
import L19 from '../../static/images/home/19.png'


const { safeArea } = Taro.getSystemInfoSync()
const {height} =  Taro.getMenuButtonBoundingClientRect()

const Loading = connect(({ loading }: ConnectState & FilterConnectState) => ({
  overviewLoading: loading.effects['waybill/overview'],
}))((props: any) => {
  return <AtToast isOpened={props.overviewLoading} text='Loading' status='loading'></AtToast>
})


console.log(safeArea)
const WayBill = props => {
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
      <ScrollView
        scrollY={true}
        className={'scrollview'}
      >
        <Loading />
        <View className="page">
          <View className="layer1">
            <View className="box1">
              <View className="outer1">
                <View className="wrap1">
                  <View className="layer2">
                    <Image src={BG3} className="bg1"></Image>
                    <View className="main1">
                      <Image className="main3" src={Tongcheng}></Image>
                      <View className="main4"></View>
                      <Text lines="1" className="word1">同城快送</Text>
                      <Text lines="1" decode="true" className="word2">聚合快送&nbsp;优质服务</Text>
                    </View>

                  </View>
                  <View className="layer3">
                    <Image src={BG4} className="bg1"></Image>
                    <View className="main1">
                      <Image className="main3" src={Xianzhi}></Image>
                      <View className="layer4"></View>
                      <Text lines="1" className="info1">闲置回收</Text>
                      <View className="layer5">
                        <Text lines="1" className="txt1">全国百城</Text>
                        <Text lines="1" className="word3">30</Text>
                        <Text lines="1" className="word4">分钟上门</Text>
                      </View>
                    </View>
                    <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngace841b6a0c4dfa7f026a4017cbc20279715eeee6183a12171f195a8aa4c45ef" className="pic1"></Image>
                  </View>
                </View>
                <View className="wrap2">
                  <View className="box2">
                    <Image src={News} className="icon3"></Image>
                    <View className="block1">
                      <Text lines="1" className="word5">去领券</Text>
                    </View>
                  </View>
                  <Text lines="1" className="word6">领券寄件更优惠</Text>
                </View>
                <View className="wrap3"></View>
                <View className="wrap4">
                  <View className="wrap5">
                    <View className="bd1">
                      <View className="box3">
                        <Image src={L19} className="img1"></Image>
                      </View>
                    </View>
                    <View className="bd2">
                      <Text lines="1" decode="true" className="word7">字节加码物流&nbsp;业务对标菜鸟?</Text>
                      <Text lines="1" className="word8">2019-03-21</Text>
                    </View>
                  </View>
                  <View className="wrap6">
                    <View className="layer6">
                      <View className="mod1">
                        <View className="box4">
                          <Image src={L19} className="pic2"></Image>
                        </View>
                      </View>
                    </View>
                    <View className="layer7">
                      <Text lines="1" className="word9">国家邮政局:8月快递业务收入预计同比增近19%</Text>
                      <Text lines="1" className="info2">2019-03-21</Text>
                    </View>
                  </View>


                </View>
              </View>
              <Text lines="1" className="info3">嘀嗒快报</Text>
              <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng256f0701a0a3d73f7bfe57d4d8d8a9269906c65233a63e6b13ce9e733dd1b237" className="icon4"></Image>
              <View className="outer2">
                <Text lines="1" className="txt2">1分钟极速报价</Text>
                <Text lines="1" className="word10">在线客服</Text>
              </View>
            </View>





          </View>
          <View className="layer9">
            <Navbar></Navbar>
            <View className="wrap10" style={{height: `${height}px`,alignItems: 'center'}}>
              <Text lines="1" className="word14">嘀嗒货运</Text>
            </View>
          </View>

          <View className="layer13" onClick={() => {
            Taro.navigateTo({
              url: '/pages/guonei/index',
            })
          }}>
            <Image src={BG1} className="bg1"></Image>
            <View className="box12">
              <Image src={Guonei} className="img8"></Image>
              <Text lines="1" className="info4">国内货运</Text>
              <Text lines="1" className="word15">20公斤以上特惠优选</Text>
            </View>
          </View>


          <View className="layer14" onClick={() => {
            Taro.navigateTo({
              url: '/pages/guoji/index',
            })
          }}>
            <Image src={BG2} className="bg1"></Image>
            <View className="main5">
              <View className="bd4">
                <Image src={GuoJi} className="img9"></Image>
              </View>
              <Text lines="1" className="word16">国际物流</Text>
              <Text lines="1" decode="true" className="txt3">国际快递\专线&nbsp;电商小包</Text>
            </View>
            <View className="main6"></View>
          </View>

        </View>
      </ScrollView>
    </StyledOverview>


  )
}

export default connect(({ home }: ConnectState & FilterConnectState) => {
  return {
    ...home,
  }
})(WayBill)
