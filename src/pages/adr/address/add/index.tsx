
import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Input,
} from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import AddressPicker from "../../../../components/addressPicker";
import { insertWxAdd, updataWxAdd } from '../api'

import { StyledOverview } from "./style";
import Icon_pic from "../../../../static/images/my/icon_pic.png";
import Icon_dizhibu from "../../../../static/images/my/icon_dizhibu.png";
import AddressParse from "address-parse";
const par = require('../../../../utils/addressparse.js')

const { safeArea } = Taro.getSystemInfoSync();

const Address = (props) => {
  const user = Taro.getStorageSync("user");
  const [pickerShow, setPickerShow] = useState(false);
  const [params, setParams] = useState({
    openid: user.openid,
    userId: user.userId,
    address: '',
    wxPhone: '',
    wxName: '',
  })

  const [del, setDel] = useState('')
  const [info, setInfo] = useState('')
  const [gongsi, setGs] = useState('')
  const [val, setVal] = useState('')

  const { overview, dispatch } = props;
  const router = useRouter();
  const id = router.params.id
  useEffect(() => {


    if (id) {

      const addres = Taro.getStorageSync("addres");
      console.log(addres)
      setParams(addres)
      const result = AddressParse.parse(addres.address);
      const i = `${result[0].province}${result[0].city}${result[0].area}`
      setInfo(i)
      setDel(addres.address.replace(i, ''))


    }

  }, []);

  const onHandleToggleShow = (info) => {

    setInfo(info)
    setPickerShow(false)
  };

  const add = async () => {

    if (params.wxName === '') {
      Taro.showToast({
        title: "请填写姓名",
        icon: "none",
        duration: 2000,
      });
      return false
    }

    if (params.wxPhone === '') {
      Taro.showToast({
        title: "请填写电话号码",
        icon: "none",
        duration: 2000,
      });
      return false
    }

    if (info === '') {
      Taro.showToast({
        title: "请选择城市",
        icon: "none",
        duration: 2000,
      });
      return false
    }

    if (del === '') {
      Taro.showToast({
        title: "请填写详细地址",
        icon: "none",
        duration: 2000,
      });
      return false
    }
    params.address = `${info}${del}${gongsi}`

    const res = id ? await updataWxAdd(params) : await insertWxAdd(params)
    if (res.code === 200) {
      Taro.navigateBack({});
    } else {
      Taro.showToast({
        title: `接口异常${res.msg}`,
        icon: "none",
        duration: 2000,
      });
    }

    console.log(res)
  }

  const handleInp = () => {


    let parse_list = par.parse(val);

    setParams({
      ...params,

      wxPhone: parse_list?.phone,
      wxName: parse_list?.name,
    })
    setInfo(`${parse_list?.province}${parse_list?.city}${parse_list?.area}`)
    setDel(parse_list?.addr)

  }
  return (
    <StyledOverview>
      <View className="layer2">
        <View className="block1">
          <Input lines="1" className="word3" value={val} placeholder="粘贴地址信息，自动拆分姓名电话和地址" onInput={(e) => {
            setVal(e.detail.value)
          }}></Input>
        </View>
        <View className="block2">
          <Image src={Icon_pic} className="label3"></Image>
          <Text lines="1" className="word4">图片识别</Text>
          <View className="section2" onClick={handleInp}>
            <Text lines="1" className="word5">识别</Text>
          </View>
        </View>
      </View>

      <View className="layer3">
        <View className="layer4">
          <View className="outer3">
            <Text lines="1" className="word6">
              联系人信息
            </Text>
            <Image src={Icon_dizhibu} className="label4"></Image>
            <Text lines="1" className="word7">
              微信地址簿
            </Text>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">
                <Input type="text" placeholder="真实姓名" className="input" value={params.wxName}
                  onInput={(e) => {

                    setParams({
                      ...params,
                      wxName: e.detail.value
                    })
                  }} />
                <Input type="text" placeholder="电话" className="input" value={params.wxPhone} onInput={(e) => {

                  setParams({
                    ...params,
                    wxPhone: e.detail.value
                  })
                }} />

                {/* <View className="mod4-0"></View> */}
              </View>
            </View>
          </View>

          <View className="item" onClick={() => setPickerShow(true)}>
            <View className="group1-0">
              <View className="mod2-0">
                <Text className={info === '' ? "input none" : "input"}>{info === '' ? '城市/区域' : info}</Text>

                {/* <View className="mod4-0"></View> */}
              </View>
            </View>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">
                <Input
                  type="text"
                  placeholder="详细地址（例如:&nbsp;**街**号**)"
                  className="input"
                  value={del}
                  onInput={(e) => {

                    setDel(

                      e.detail.value
                    )
                  }}
                />

                {/* <View className="mod4-0"></View> */}
              </View>
            </View>
          </View>

          <View className="item">
            <View className="group1-0">
              <View className="mod2-0">
                <Input
                  type="text"
                  placeholder="公司名称（选填）"
                  className="input"
                  onInput={(e) => {
                    setGs(
                      e.detail.value
                    )
                  }}
                />

                {/* <View className="mod4-0"></View> */}
              </View>
            </View>
          </View>

          {/* <View className="outer7">
            <Image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd65a38bc31deefc8bc07dfc92083dba422bf5fbd9f581c2d7aab0bc1655929de" className="icon2"></Image>
            <Text lines="1" className="info1">默认寄件地址</Text>
            <Text lines="1" className="txt1">清空</Text>
          </View> */}
        </View>
      </View>

      <Button bindtap="onClick" class="layer5" onClick={add}>
        <Text lines="1" decode="true" class="info2">
          确&nbsp;定
        </Text>
      </Button>

      <AddressPicker
        pickerShow={pickerShow}
        onHandleToggleShow={onHandleToggleShow}
      ></AddressPicker>
    </StyledOverview >
  );
};

export default Address;
