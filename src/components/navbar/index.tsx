// Taro.getMenuButtonBoundingClientRect()

import {View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React from 'react'




const { safeArea } = Taro.getSystemInfoSync()

const {height} =  Taro.getMenuButtonBoundingClientRect()


const Navbar = () => {
console.log(safeArea)

  return <View style={{height:`${safeArea.top}px`}}></View>
}

export default Navbar
