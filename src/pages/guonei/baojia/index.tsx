import { ConnectState as FilterConnectState } from "@/models/filter";
import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Input,
  Switch,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { StyledOverView } from "./style";
import Modals from "../modal";

import Warning_circle from "../../../static/images/warning-circle.png";

const { safeArea } = Taro.getSystemInfoSync();

const Index = (props) => {
  const [current, setCurrent] = useState(0);
  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };
  const { params, dispatch } = props;

  const { guaranteeValueAmount } = params;

  const [amount, setAmout] = useState(() => {
    return guaranteeValueAmount ? guaranteeValueAmount / 0.05 : 0;
  });

  const handleClick = () => {
    dispatch({
      type: "order/save",
      payload: {
        guaranteeValueAmount: amount ? amount * 0.05 : 0,
      },
    });

    Taro.navigateBack({});
  };

  console.log(amount);
  return (
    <>
      <StyledOverView>
        <View className="box2">
          <View className="main5">
            <Text lines="1" className="word2">
              请输入物品实际价值
            </Text>
            {/* <View className="main6">
                <View className="section1">
                  <Text lines="1" className="info2">0-100000</Text>

                  <Text lines="1" className="info3">元</Text>
                </View>
              </View> */}
            <View className="m-inp">
              <Input
                className="main6"
                placeholder={`0-300000`}
                value={amount}
                type="number"
                onInput={(e) => {
                  setAmout(e.detail.value);
                }}
              />

              <Text lines="1" className="info3">
                元
              </Text>
            </View>

            <View className="main7">
              <Text lines="1" className="word3">
                保价：
              </Text>
              <Text lines="1" className="txt1">
                {`¥${amount ? (amount * 0.05).toFixed(2) : 0.0}`}
              </Text>
            </View>
            <Text lines="1" className="txt2">
              温馨提示:
            </Text>
            <Text
              lines="1"
              decode="true"
              className="paragraph1"
            >{`1.请按物品实际价值来填写物品声明价值。\n2.运送过程中出现丢失或破损，会按物品声明的实际价值\n进行-定比例赔付。保价不超100万元(含)，&nbsp;超额保价部分\n无法理赔。\n3.客户寄递货物请声明货物价值，并支付相应费用。若配\n送过程中由于服务商责任造成损失的，服务商会按照声明\n价值和损失比例进行赔偿。\n4.特快重货费率计算规则为:保价1000元以内免费，1000\n元以上收费，费率为5%。\n5.保费费率的计算规则:费率为5%o，单票最低收费10元\n(价格进位规则:四舍五入取整)，保价上限100万元。`}</Text>
          </View>
        </View>



        <View className="foot">
          <Button onClick={handleClick} className="box8s">
            <Text lines="1" decode="true" className="info2s">
              确认保价
            </Text>
          </Button>
        </View>
      </StyledOverView>
    </>
  );
};

export default connect(({ order }: any) => {
  return {
    ...order,
  };
})(Index);
