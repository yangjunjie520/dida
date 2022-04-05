import { Text, View, Image, ScrollView, Button } from "@tarojs/components";
import Taro, { useDidShow, useRouter } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AtToast, AtIcon, AtInput } from "taro-ui";
import { queryWxAddList, deleteWxAddList } from './api'
import AddressParse from "address-parse";

import { StyledOverview } from "./style";

import Quxiao from "../../../static/images/icon_shanchu@2x.png";
import Xiugai from "../../../static/images/icon_bianji@2x.png";

const { safeArea } = Taro.getSystemInfoSync();

const Address = (props) => {
  const [list, setList] = useState([])
  const { overview, dispatch } = props;
  const user = Taro.getStorageSync("user");
  const router = useRouter();
  const type = router.params.type
  const queryList = () => {
    Taro.showLoading({
      title: "加载中",
    });
    queryWxAddList({
      openid: user.openid,
      userId: user.userId,
    }).then(res => {
      Taro.hideLoading();

      if (res.code === 200) {
        setList(res.rows)
      } else {
        Taro.showToast({
          title: `接口异常${res.msg}`,
          icon: "none",
          duration: 2000,
        });
      }
    })
  }
  // 对应 onShow
  useDidShow(() => {
    queryList()
  })

  const del = (id) => {
    deleteWxAddList({
      openid: user.openid,
      userId: user.userId,
      ids: [id]
    }).then(res => {

      if (res.code === 200) {
        Taro.showToast({
          title: "删除成功",
          icon: "none",
          duration: 2000,
        });
        queryList()
      } else {
        Taro.showToast({
          title: `接口异常${res.msg}`,
          icon: "none",
          duration: 2000,
        });
      }
    })
  }

  const handleItem = (item) => {
    if (!type) return
    const result = AddressParse.parse(item.address);
    if (type === 'ji') {


      dispatch({
        type: "order/save",
        payload: {
          senderAddress: item.address,
          senderMobile: item.wxPhone,
          senderName: item.wxName,
          sendProvinceCode: result[0].code.substr(0, 2) + "0000",
        },
      });
    } else if (type === 'shou') {
      dispatch({
        type: "order/save",
        payload: {
          receiveAddress: item.address,
          receiveMobile: item.wxPhone,
          receiveName: item.wxName,
          receiveProvinceCode: result[0].code.substr(0, 2) + "0000",
        },
      });
    }
    Taro.navigateBack({});
  }

  return (
    <StyledOverview>
      {/* <View className="header">
        <AtInput
          className="layer3"
          placeholder="运单号查询/关键字索引"
          name="order"
          onChange={(e) => console.log(e)}
        ></AtInput>
        <View className="outer1"></View>
      </View> */}

      <View className="mod2">
        <View className="tab">
          <Text lines="1" className="word2">
            地址簿
          </Text>

          <View className="active"></View>
        </View>
        {/* <View className="tab">
          <Text lines="1" className="word3">
            收件人地址簿
          </Text>
        </View> */}
      </View>

      <View className="cont-box">
        {
          list.map(item => {
            return <View className="item" onClick={(e) => {
              handleItem(item)
              e.stopPropagation()
            }}>
              {/* <View className="box1">
              <Image
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng01967dbc284fd6fa6ff8e9d91c24943dae9c3847ebdac60b35125449588df629"
                className="label2"
              ></Image>
              <View className="bd2"></View>
            </View> */}

              <View className="bd1-0">
                <View className="outer1-0">
                  <Text lines="1" decode="true" className="info1-0">
                    {item.wxName}&nbsp;&nbsp;{item.wxPhone}
                  </Text>
                  <Text lines="1" className="word6-0">
                    {item.address}
                  </Text>
                  <View className="main2-0"></View>
                  <View className="main3-0">
                    {/* <Image
                      src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd65a38bc31deefc8bc07dfc92083dba422bf5fbd9f581c2d7aab0bc1655929de"
                      className="label3-0"
                    ></Image>
                    <Text lines="1" className="txt1-0">
                      默认寄件地址
                    </Text> */}
                    <View className="label3-0"></View>
                    <Text lines="1" className="txt1-0">

                    </Text>
                    <View style={{ display: 'flex' }} onClick={e => {
                      Taro.setStorageSync("addres", item);
                      Taro.navigateTo({
                        url: `/pages/adr/address/add/index?id=${item.id}`,
                      });
                      e.stopPropagation()
                    }}>
                      <Image
                        src={Xiugai}
                        className="label4-0"
                      ></Image>
                      <Text lines="1" className="info2-0">
                        编辑
                      </Text>
                    </View>

                    <View style={{ display: 'flex' }} onClick={e => {
                      del(item.id)

                      e.stopPropagation()
                    }}>
                      <Image
                        src={Quxiao}
                        className="icon2-0"
                      ></Image>
                      <Text lines="1" className="info3-0">
                        删除
                      </Text>
                    </View>

                  </View>
                </View>
              </View>
            </View>
          })
        }


        {/* <View className="item">
          <View className="box1">
            <Image
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng01967dbc284fd6fa6ff8e9d91c24943dae9c3847ebdac60b35125449588df629"
              className="label2"
            ></Image>
            <View className="bd2"></View>
          </View>

          <View className="bd1-0">
            <View className="outer1-0">
              <Text lines="1" decode="true" className="info1-0">
                某某某&nbsp;&nbsp;123****12313
              </Text>
              <Text lines="1" className="word6-0">
                广东省深圳市深圳市南山区留学生创业大厦1304室
              </Text>
              <View className="main2-0"></View>
              <View className="main3-0">
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd65a38bc31deefc8bc07dfc92083dba422bf5fbd9f581c2d7aab0bc1655929de"
                  className="label3-0"
                ></Image>
                <Text lines="1" className="txt1-0">
                  默认寄件地址
                </Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngda26c7f14bcf0b64e4f0995c712bf2348f671dc9e452d856c78cf9488629bafe"
                  className="label4-0"
                ></Image>
                <Text lines="1" className="info2-0">
                  编辑
                </Text>
                <Image
                  src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge2ce394495eda650fc19789244ad1e40cabcf1c786e9e06740f9d52feaa4da96"
                  className="icon2-0"
                ></Image>
                <Text lines="1" className="info3-0">
                  删除
                </Text>
              </View>
            </View>
          </View>
        </View> */}
      </View>

      <View className="block5">
        {/* <Button bindtap="onClick" className="group1">
          <Text lines="1" className="txt5">
            删除
          </Text>
        </Button> */}
        {/* <View className="section1">
                    <Text lines="1" className="word7">管理</Text>
                </View> */}
        <Button
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/adr/address/add/index",
            });
          }}
          className="section2"
        >
          <Text lines="1" className="word8">
            新增地址
          </Text>
        </Button>
      </View>
    </StyledOverview>
  );
};

export default connect(({ order }: any) => {
  return {
    ...order,
  };
})(Address);
