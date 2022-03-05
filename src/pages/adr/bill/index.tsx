
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast, AtIcon } from 'taro-ui'

import { StyledOverview } from './style'


const { safeArea } = Taro.getSystemInfoSync()




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
            <View className="header">
                <Text className="select">全部交易类型</Text>
                <AtIcon value='chevron-down' size='16' color='#888888'></AtIcon>
            </View>



            <View className="info">
                <View className="time">
                    <Text className="yer">2021年</Text><Text className="moon">7</Text><Text className="yer">月</Text>
                </View>
                <View className="money">
                    <Text>支出：&nbsp; ¥100.00 &nbsp;&nbsp; 收入：&nbsp;&nbsp;¥100.00</Text>
                </View>

            </View>

            <View className="list">
                <View className="item radus-t">
                    <View className="left">
                        <Text className="tit">输入文本输入文本输入文本</Text>
                        <Text className="riqi">9月14日 08:09</Text>
                    </View>
                    <View className="qian">
                        <Text>-10.00</Text>
                    </View>
                    <View className="borderb"></View>
                </View>
                <View className="item">
                    <View className="left">
                        <Text className="tit">输入文本输入文本输入文本</Text>
                        <Text className="riqi">9月14日 08:09</Text>
                    </View>
                    <View className="qian">
                        <Text>-10.00</Text>
                    </View>
                    <View className="borderb"></View>
                </View>
                <View className="item radus-b">
                    <View className="left">
                        <Text className="tit">输入文本输入文本输入文本</Text>
                        <Text className="riqi">9月14日 08:09</Text>
                    </View>
                    <View className="qian">
                        <Text>-10.00</Text>
                    </View>

                </View>
            </View>

            <View className="mask">
                <View className="modal">
                    <View className="m-head">
                        <Text className="m-tit">交易类型</Text>
                        <AtIcon value='close' size='16' color='#888888'></AtIcon>
                    </View>
                    <View className="m-cont">
                        <View className="selc avtive">
                            <Text className="s-text a-text">快递费用账单</Text>
                        </View>
                        <View className="selc">
                            <Text className="s-text">代收货款账单</Text>
                        </View>


                    </View>
                    <View className="m-foot">
                        <Text className="m-bt">确 定</Text>
                    </View>
                </View>
            </View>
        </StyledOverview>


    )
}

export default WayBill
