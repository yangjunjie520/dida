
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
import AddressPicker from "../../components/addressPicker";
import { StyledOverview } from "./style";
import Icon_pic from "../../static/images/my/icon_pic.png";
import Icon_dizhibu from "../../static/images/my/icon_dizhibu.png";
import AddressParse from "address-parse";
import { connect } from "react-redux";

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
  const type = router.params.type

  useEffect(() => {
    if (type === 'ji') {

      Taro.setNavigationBarTitle({
        title: '填写寄件人信息'
      })

    } else if (type === 'shou') {
      Taro.setNavigationBarTitle({
        title: '填写收件人信息'
      })

    }
  })

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



    if (!type) return
    const result = AddressParse.parse(params.address);
    if (type === 'ji') {

      Taro.setNavigationBarTitle({
        title: '填写寄件人信息'
      })
      dispatch({
        type: "order/save",
        payload: {
          senderAddress: params.address,
          senderMobile: params.wxPhone,
          senderName: params.wxName,
          sendProvinceCode: result[0].code.substr(0, 2) + "0000",
          sendCityCode: `${result[0].code.slice(0, 4)}00`
        },
      });
    } else if (type === 'shou') {
      Taro.setNavigationBarTitle({
        title: '填写收件人信息'
      })
      dispatch({
        type: "order/save",
        payload: {
          receiveAddress: params.address,
          receiveMobile: params.wxPhone,
          receiveName: params.wxName,
          receiveProvinceCode: result[0].code.substr(0, 2) + "0000",
          receiveCityCode: `${result[0].code.slice(0, 4)}00`

        },
      });
    }
    Taro.navigateBack({});

  }

  const handleInp = () => {


    let parse_list = AddressParse.parse(val);


    setParams({
      ...params,
      wxPhone: parse_list[0]?.mobile,
      wxName: parse_list[0]?.name,
    })
    setInfo(`${parse_list[0]?.province}${parse_list[0]?.city}${parse_list[0]?.area}`)
    setDel(parse_list[0]?.details)

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
                <Text className="input">{info === '' ? '城市/区域' : info}</Text>

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
    </StyledOverview>
  );
};

export default connect(({ order }: any) => {
  return {
    ...order,
  };
})(Address);

