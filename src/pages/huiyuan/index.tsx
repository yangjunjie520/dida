
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast, AtIcon } from 'taro-ui'

import { StyledOverView, DianZhang } from './style'
import Icon_share from '../../static/images/huiyuan/icon_share.png'
import Icon_laba from '../../static/images/huiyuan/icon_laba.png'
import Navbar from '@/components/navbar'

const { safeArea } = Taro.getSystemInfoSync()
const {height} =  Taro.getMenuButtonBoundingClientRect()



const WayBill = props => {
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
                <View className="bd1">
                    <Navbar></Navbar>
                    <View className="outer2" style={{height: `${height}px`,alignItems: 'center'}}>
                        <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng264c18d51b5f751eed7b7c217f1a4539ba96e0f4d7e2c645b3942c7ade4c0ba7" className="icon2"></Image>
                        <Text lines="1" className="txt1">会员</Text>

                    </View>
                    <View className="outer4">
                        <View className="mod1"></View>
                        <View className="mod2">
                            <View className="box1">
                                <Text lines="1" className="txt2">微信昵称</Text>
                                <View className="main2">
                                    <Text lines="1" className="info1">嘀嗒合伙人</Text>
                                </View>
                            </View>
                            <View className="box2">
                                <Text lines="1" decode="true" className="word2">邀请码&nbsp;EHBJID</Text>
                                <Text lines="1" className="info2">复制</Text>
                            </View>
                        </View>
                        <View className="mod3">
                            <Button bindtap="onClick" className="block1">
                                <Text lines="1" className="txt3">提现</Text>
                            </Button>
                            <View className="block2">
                                <Image src={Icon_share} className="label2"></Image>
                                <Text lines="1" className="info3">分享店铺</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View className="layer3">
                    <View className="outer5">
                        <View className="main4">
                            <View className="bd8">
                                <Text lines="1" className="word9">¥</Text>
                                <Text lines="1" className="txt11">600</Text>
                            </View>
                            <Text lines="1" className="word10">可提现</Text>
                        </View>
                        <View className="main5"></View>
                        <View className="main6">
                            <View className="main7">
                                <Text lines="1" className="word11">¥</Text>
                                <Text lines="1" className="word12">1200</Text>
                            </View>
                            <Text lines="1" className="word13">累计收益</Text>
                        </View>
                    </View>
                </View>

                <View className="bd2">
                    <Image src={Icon_laba} className="label3"></Image>
                    <Text lines="1" className="txt4">用户***刚刚获得21.86元货运收益</Text>
                </View>

                <View className="bd3">
                </View>

                <View className="bd4">
                    <View className="layer2">
                        <View className="block3">
                            <Text lines="1" className="txt5">我的团队</Text>
                            <View className="main3">
                                <Text lines="1" className="word3">邀请店长</Text>
                            </View>
                        </View>
                        <View className="block4"></View>
                        <View className="block5">
                            <View className="bd5-0">
                                <View className="section1-0">
                                    <Text lines="1" className="word4-0">204</Text>
                                    <Text lines="1" className="word6-0">直属合伙人</Text>
                                </View>
                            </View>
                            <View className="bd5-0 ">
                                <View className="section1-0">
                                    <Text lines="1" className="word4-1">109</Text>
                                    <Text lines="1" className="word6-1">直属店长</Text>
                                </View>
                            </View>
                            <View className="bd5-0">
                                <View className="section1-0">
                                    <Text lines="1" className="word4-2">24</Text>
                                    <Text lines="1" className="word6-2">直属用户</Text>
                                </View>
                            </View>
                            <View className="bd5-0">
                                <View className="section1-0">
                                    <Text lines="1" className="word5-3">500</Text>
                                    <Text lines="1" className="word6-3">总用户</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View className="bd6">
                    <View className="bd7">
                        <Text lines="1" className="txt6">总流水</Text>
                        <View className="box3"></View>
                        <View className="box4">
                            <View className="box5">
                                <Text lines="1" className="word7">¥</Text>
                                <Text lines="1" className="info4">230.27</Text>
                            </View>
                            <View className="box6">
                                <Text lines="1" className="info5">¥</Text>
                                <Text lines="1" className="txt7">100.00</Text>
                            </View>
                            <View className="box7">
                                <Text lines="1" className="word8">¥</Text>
                                <Text lines="1" className="txt8">1240.50</Text>
                            </View>
                        </View>
                        <View className="box8">
                            <Text lines="1" className="info6">直属合伙人</Text>
                            <Text lines="1" className="txt9">直属店长</Text>
                            <Text lines="1" className="txt10">直属用户</Text>
                        </View>
                    </View>
                </View>
            </StyledOverView>
            {/* <ZhongHuo>

                <View className="block1">
                    <View className="layer6">
                        <View className="mod7">
                            <Text lines="1" className="word17">提现</Text>
                            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng202a8b98366b89588013fade83b81224b8d7d54963fa142a42f7674faa2743d0" className="label3"></Image>
                        </View>
                        <Text lines="1" className="word18">可提现金额</Text>
                        <View className="mod8">
                            <View className="layer7">
                                <Text lines="1" className="word19">¥</Text>
                                <Text lines="1" className="txt8">200</Text>
                            </View>
                            <Button bindtap="onClick" className="layer8">
                                <Text lines="1" className="txt9">提现申请</Text>
                            </Button>
                        </View>
                        <View className="mod9"></View>
                        <Text lines="1" className="txt10">提现说明</Text>
                        <Text lines="1" className="paragraph1">{`1.每月27号出上月结算单收益可在当月27号至31号全\n天申请提现错过需要等下个月，提现金额会在1-5个\n工作日到账\n2.需要在提现前完成提现认证并审核通过维护完善\n银行卡信息，否则将影响提现进行\n3.结算单收益：订单完成时间在上个月的总收益上个\n月【已付款】但未完成订单可在下个月提现\n4.可提现金额已扣除各项税费，提现金额需大于10元\n5.本月未提现收益不会清0会累积到账户余额，下个\n月合并提现`}</Text>
                    </View>
                </View>

            </ZhongHuo> */}

            {/* <DianZhang>


                <View className="layer4">
                    <View className="outer7">
                        <View className="outer8">
                            <Text lines="1" className="txt6">店长邀请码</Text>
                            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng202a8b98366b89588013fade83b81224b8d7d54963fa142a42f7674faa2743d0" className="label2"></Image>
                        </View>
                        <Text lines="1" className="txt7">绑定邀请码</Text>
                        <Text lines="1" className="word16">请输入并绑定店长邀请码，绑定邀请人</Text>
                        <View className="outer9">
                           
                            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccf2ea89699daba203d6d92f0eaacc77ff232fa87ac989792a87b117b7d9a0b9" className="label3"></Image>
                            <Input placeholder="输入邀请码" className="code"/>
                        </View>
                        <Button bindtap="onClick" className="outer10">
                            <Text lines="1" className="txt8">确定</Text>
                        </Button>
                    </View>
                </View>
            </DianZhang> */}
        </>


    )
}

export default WayBill
