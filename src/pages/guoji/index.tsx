
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input, Switch } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Navbar from '@/components/navbar'
import { StyledOverView, ZhongHuo } from './style'
import Modals from './modal'
import Icon_feiji from '../../static/images/yundan/icon_feiji.png'
import Icon_kefu from '../../static/images/yundan/icon_kefu.png'
import Icon_erweima from '../../static/images/my/icon_erweima.png'

import Jiantou from '../../static/images/my/jiantou.png'



const { safeArea } = Taro.getSystemInfoSync()
const {height} =  Taro.getMenuButtonBoundingClientRect()



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
        <View className="section1">
          <Navbar></Navbar>
          <View className="section3" style={{height: `${height}px`,alignItems: 'center'}}>
            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng264c18d51b5f751eed7b7c217f1a4539ba96e0f4d7e2c645b3942c7ade4c0ba7" className="icon1"></Image>
            <Text lines="1" className="txt1">国际物流</Text>
          
          </View>
        </View>

        <View className="box">
          <View className="tab">
            <View className="tab-item tab-item-active"><Text className='tab-Text tab-Text-active'>国际快递</Text></View>
            <View className="tab-item"><Text className='tab-Text'>电商小包</Text></View>
            <View className="tab-item"><Text className='tab-Text'>东南亚专线</Text></View>
          </View>

          <View className="layer6">
            <View className="bd8">
              <View className="box6">
                <Text lines="1" className="word19">深圳市</Text>
                <Image src={Icon_feiji} className="pic3"></Image>
                <Text lines="1" className="txt11">美国</Text>
              </View>
              <View className="box7"></View>
              <View className="box8">
                <Text lines="1" className="info7">货物信息</Text>
                <Text lines="1" className="word20">请选择</Text>
                <Image src={Jiantou} className="icon5"></Image>
              </View>
            </View>
          </View>
        </View>

        <View className="section6">
          <View className="mod2">
            <Text lines="1" className="info1">体积重量</Text>
            <View className="section7">
              <View className="box1-0">
                <View className="outer1-0">
                  <Text lines="1" className="txt3-0">总重量</Text>
                  <Text lines="1" className="word3-0">－</Text>

                  <View className="modInp">
                    <Input placeholder="1" className="mod12" />
                    <Text lines="1" className="txt4">KG</Text>
                  </View>
                  <Text lines="1" className="word5-0">＋</Text>
                </View>
              </View>
              <View className="box1-1">
                <View className="outer1-1">
                  <Text lines="1" className="txt3-1">总体积</Text>
                  <Text lines="1" className="word3-1">－</Text>
                  <View className="modInp">
                    <Input placeholder="0.01" className="mod12" />
                    <Text lines="1" className="txt4">CBM</Text>
                  </View>
                  <Text lines="1" className="word5-1">＋</Text>
                </View>
              </View>
            </View>
            <View className="section8">
              <Text lines="1" className="word6">查询</Text>
            </View>
          </View>
        </View>

        <View className="section9">
          <View className="main2">
            <View className="box2">
              <View className="layer4">
                <View className="bd2">
                  <Text lines="1" className="info3">联系人</Text>
                  <Text lines="1" className="txt4s">请填写</Text>
                  <Image src={Jiantou} className="label3"></Image>
                </View>
                <View className="bd3"></View>
              </View>
            </View>
            <View className="box3">
              <View className="box4">
                <Text lines="1" className="word7">联系电话</Text>
                <Text lines="1" className="txt5">请填写</Text>
                <Image src={Jiantou} className="label4"></Image>
              </View>
            </View>
          </View>
        </View>

        <View className="tuijian">
          <Text lines="1" className="word21">推荐线路</Text>
          <View className="section10"></View>
        </View>


        <View className="section11">
          <View className="bd4">
            <Text lines="1" className="txt6">UPS红单小货价-UPS</Text>
            <View className="box5">
              <Text lines="1" className="word8">包税</Text>
            </View>
          </View>
          <View className="bd5">
            <View className="mod3">
              <Text lines="1" className="word9">5个自然日</Text>
            </View>
            <View className="mod4">
              <Text lines="1" className="word10">普货/纺织品</Text>
            </View>
          </View>
          <View className="bd6">
            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf52d81bc7899f9de5f2dfb9fcca7d902ec27b8f9eee626ac600f49e864dcdb33" className="icon2"></Image>
            <Text lines="1" className="info4">渠道说明</Text>
            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdf7e77f24ca11679e03d89cf2903605d757b47057c9a3e367b987abd022c9777" className="label5"></Image>
            <Text lines="1" className="info5">预估</Text>
            <Text lines="1" className="info6">¥</Text>
            <Text lines="1" className="word11">12321</Text>
          </View>
        </View>

        <View className="section12">
          <View className="wrap1">
            <View className="block1">
              <Text lines="1" className="word12">UPS红单小货价-UPS</Text>
              <View className="bd7">
                <Text lines="1" className="txt7">包税</Text>
              </View>
            </View>
            <View className="block2">
              <View className="mod5">
                <Text lines="1" className="word13">5个自然日</Text>
              </View>
              <View className="mod6">
                <Text lines="1" className="txt8">普货/纺织品</Text>
              </View>
            </View>
            <View className="block3">
              <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf52d81bc7899f9de5f2dfb9fcca7d902ec27b8f9eee626ac600f49e864dcdb33" className="icon3"></Image>
              <Text lines="1" className="word14">渠道说明</Text>
              <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6bde7d735630e06a4fdde95c8547eaae4576d4ffafdfda960ca39ced89b72bbe" className="label6"></Image>
              <Text lines="1" className="txt9">预估</Text>
              <Text lines="1" className="word15">¥</Text>
              <Text lines="1" className="word16">12321</Text>
            </View>
            <View className="block4"></View>
            <Text lines="1" decode="true" className="infoBox1">${`50g起收\n1、包裹尺寸限制按USPS规则.&nbsp;限重9.979kg&nbsp;，周长（长+2*宽\n+2*高）小于125CM，最长边不超过60CM\n"2、暂不接收所有圆柱形和管状包裹。\n非美国大陆地区不承运：&nbsp;非美国大陆地区指除美国本土外的阿\n拉斯加、波多黎各、夏威夷、关岛、北马里亚纳群岛、美属维\n尔京群岛、美属萨摩亚、贝克岛、豪兰岛、贾维斯岛、约翰斯\n顿环礁、金曼礁、海燕群岛、塞班尼娜岛、中途岛、纳弗沙岛、\n&nbsp;威克岛等地区。"\n3、本线路为IB清派服务，绿色电子清关，800美金免税，一单\n到底；\n4、根据国际航海运输相关条款、美国海关规定的不能邮寄或\n限制邮寄的商品。包括但不限于所有化妆品、烟草、电子烟、\n酒类、处方药、刀具、火柴、打火机、激光笔、粉末、膏状体、\n毒品、军火、酒精、香水、指甲油、烟雾剂、漂白剂、泳池化\n学品、油漆等，以及各种侵权、仿牌商品。\n5、此报价不包含因货物不符合美国海关准入要求而产生的海关\n罚金，滞仓费等`}</Text>
          </View>
        </View>

        <View className="section4s">
          <View className="mod7">
            <View className="outer2">
              <Image src={Icon_kefu} className="icon4"></Image>
              <Text lines="1" className="word17">联系客服</Text>
            </View>
            <View className="outer3">
              <Text lines="1" className="txt10">立即下单</Text>
            </View>
          </View>
        </View>
      </StyledOverView>

      {/* <ZhongHuo>  
        <View className="mod7">
          <View className="mod8">
            <Text lines="1" className="info2">嘀嗒货运</Text>
            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng798a46565fe973931230e2e6f830f0dc41b807bd63ddbc05bb75f96be72c56e9" className="label3"></Image>
          </View>
          <View className="mod9">
            <Text lines="1" className="infoBox1">长按识别图片<br />联系线上客服</Text>
          </View>
          <View className="mod10">
            <Image src={Icon_erweima} className="icon4"></Image>
            <Text lines="1" className="info3">40000-56756极速报价</Text>
          </View>
          <View className="mod11"></View>
         
          <Image src={Icon_erweima} className="mod12"></Image>
        </View>
      </ZhongHuo> */}
    </>
  )
}

export default Index
