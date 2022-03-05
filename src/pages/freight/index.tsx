
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast, AtInput, AtIcon } from 'taro-ui'
import { ConnectState } from './model'
import { StyledOverview } from './style'
import Navbar from '../../components/navbar'

import Copy from '../../static/images/yundan/icon_fuzhi_2.png'

const { safeArea } = Taro.getSystemInfoSync()

const Loading = connect(({ loading }: ConnectState & FilterConnectState) => ({
  overviewLoading: loading.effects['waybill/overview'],
}))((props: any) => {
  return <AtToast isOpened={props.overviewLoading} Text='Loading' status='loading'></AtToast>
})


const {height} =  Taro.getMenuButtonBoundingClientRect()
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
      <Loading />
      <View className="mod1">
        <Navbar></Navbar>
        <View className="section1">
          <View className="layer2">
            <Text lines="1" className="word1" style={{height: `${height}px`, lineHeight: `${height}px`}}>查货运</Text>
          </View>
          <View>
            <AtInput
              className="layer3"
              placeholder="运单号查询/关键字索引"
              name="order"
              onChange={e => console.log(e)} >
            </AtInput>
            <View className="outer1"></View>
          </View>
        </View>
      </View>

      <View className="mod2">
        <View className="tab">
          <Text lines="1" className="word2">寄件记录</Text>

          <View className="active"></View>
        </View>
        <View className="tab">
          <Text lines="1" className="word3">收件记录</Text>
        </View>
      </View>



      <View className="list">
        <View className="mod4" onClick={() => {
            Taro.navigateTo({
              url: '/pages/freight/details/index',
            })
          }}>
          <View className="outer2">
            <View className="layer6">
              <Text lines="1" decode="true" className="word4">运单号:&nbsp;2192746284682</Text>
              <Image src={Copy} className="icon1"></Image>
            </View>
            <View className="layer7"></View>
            <View className="layer8">
              <Text lines="1" className="word5">某某某</Text>
              <Text lines="1" className="txt1">已签收</Text>
              <Text lines="1" className="info3">某某某</Text>
            </View>
            <View className="layer9">
              <Text lines="1" className="txt2">深圳市</Text>
              <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf214f0facdbdea24090090d4028bd5d20d2f8165c6daeb3e565d54a8a2042dbb" className="img1"></Image>
              <Text lines="1" className="info4">深圳市</Text>
            </View>
            <View className="layer10">
              <Text lines="1" className="info5">已签收</Text>
              <View className="layer11">
                <Text lines="1" className="info6">你的快件已签收，如有疑问请电联快递员</Text>
                <Text lines="1" className="paragraph1">【某某, 
                电话122324435】</Text>
              </View>
            </View>
            <View className="layer12">
              <Text lines="1" className="word6">签收时间</Text>
              <Text lines="1" decode="true" className="word7">2021-07-13&nbsp;17:04:26</Text>
            </View>
            <View className="layer13"></View>
            <View className="layer14">
              <View className="box2">
                <Text lines="1" className="word8">通知收件人</Text>
              </View>
              <View className="box3">
                <Text lines="1" className="txt3">删除</Text>
              </View>
            </View>
          </View>


        </View>
      </View>

    </StyledOverview>
  )
}

export default connect(({ waybill }: ConnectState & FilterConnectState) => {
  return {
    ...waybill,
  }
})(WayBill)
