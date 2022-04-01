import { Reducer } from "redux";
import { Model } from "dva";
import { SubmitOrder, WaybillSend } from "./api";
import Taro, { useRouter } from "@tarojs/taro";
import AddressParse from "address-parse";

interface StateType {
  params: Record<string, unknown>;
}
export interface ConnectState {
  waybill: StateType;
}

interface ModelType {
  namespace: string;
  state: StateType;
  effects: {};
  reducers: {
    save: Reducer;
  };
}

const user = Taro.getStorageSync("user");
const result = AddressParse.parse("广东省深圳市南山区沙井街道运华大厦1108");

const model: Model & ModelType = {
  namespace: "order",
  state: {
    // 大票直达参数
    params: {
      openid: user.openid,
      collectionMoney: 0,
      customerBoxCode: "",
      deliveryType: null,
      goods: "测试",
      guaranteeValue: 0,
      guaranteeValueAmount: 0,
      packageCount: 1,
      pickUpEndTime: "",
      pickUpStartTime: "",
      promiseTimeType: 0,
      receiveAddress: "广东省深圳市南山区沙井街道运华大厦1108",
      receiveMobile: "15300000000",
      receiveName: "效用用",
      receiveProvinceCode: result[0].code,
      receiveTel: "",
      remark: "",
      salesChannel: "",
      sendProvinceCode: result[0].code,
      senderAddress: "广东省深圳市南山区沙井街道运华大厦1108",
      senderMobile: "17333333333",
      senderName: "效用用",
      senderTel: "",
      signReturn: 0,
      thirdNo: "",
      transType: 0,
      userId: user.userId,
      userName: user.userName,
      vloumHeight: 0,
      vloumLong: 0,
      vloumWidth: 0,
      vloumn: 0,
      warehouseCode: "",
      weight: 20,
    },
    pay: {
      timeStamp: "",
      package: "",
      paySign: "",
      appId: "",
      outTradeNo: "", // 商户号 "signType": "MD5", "nonceStr": "30816973c78e426c80c9d218fbd5e182"
    },
  },
  effects: {
    *payOrder({ isId }, { put, select }) {
      let params = yield select((state) => state.order.params);
      const { deliveryType } = params;
      if (!deliveryType) {
        Taro.showToast({
          title: "请选择物品类型",
          icon: "none",
          duration: 2000,
        });
        return false;
      }
      const res = isId
        ? yield WaybillSend({ ...params, deliveryId: isId })
        : yield SubmitOrder(params);
      console.log(res);
      if (res.code === 200) {
        Taro.navigateBack({});
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        params: {
          ...state.params,
          ...payload,
        },
      };
    },
  },
};

export default model;
