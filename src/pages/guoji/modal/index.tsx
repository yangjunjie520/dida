
import { ConnectState as FilterConnectState } from '@/models/filter'
import { Text, View, Image, ScrollView, Button, Input, Switch } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { ZhongHuo } from './style'

const Modals = (props) => {


  return (

    <ZhongHuo>
      <View className="section9">
        <View className="mod9">
          <Text lines="1" className="info7">{props.title}</Text>
          <Text lines="1" class="paragraph2">{props.text}</Text>
          <View className="box4">
            <Text lines="1" className="txt11">知道了</Text>
          </View>
        </View>
      </View>


    </ZhongHuo>


  )
}

export default Modals
