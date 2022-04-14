import { Reducer } from "redux";
import { Model } from "dva";
import { SubmitOrder, WaybillSend } from "./api";
import Taro, { useRouter } from "@tarojs/taro";
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

const model: Model & ModelType = {
  namespace: "order",
  state: {
    // 大票直达参数
    params: {
      collectionMoney: 0,
      customerBoxCode: "",
      deliveryType: 6,
      goods: null,
      guaranteeValue: 0,
      guaranteeValueAmount: 0,
      packageCount: 1,
      pickUpEndTime: "",
      pickUpStartTime: "",
      promiseTimeType: 0,
      receiveAddress: "",
      receiveMobile: "",
      receiveName: "",
      receiveProvinceCode: "",
      receiveCityCode: "",
      receiveTel: "",
      remark: "",
      salesChannel: "",
      sendProvinceCode: "",
      sendCityCode: "",
      senderAddress: "",
      senderMobile: "",
      senderName: "",
      senderTel: "",
      signReturn: 0,
      thirdNo: "",
      transType: 0,

      vloumHeight: 0,
      vloumLong: 0,
      vloumWidth: 0,
      vloumn: 0,
      warehouseCode: "",
      weight: 1,
      isPayFor: 1,
      isClosed: 0,
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
      const { goods } = params;
      if (!goods) {
        Taro.showToast({
          title: "请选择物品类型",
          icon: "none",
          duration: 2000,
        });
        return false;
      }
      const user = Taro.getStorageSync("user");
      const res = isId
        ? yield WaybillSend({
            ...params,
            deliveryId: isId,
            userId: user.userId,
            userName: user.userName,
            openid: user.openid,
          })
        : yield SubmitOrder({
            ...params,
            userId: user.userId,
            userName: user.userName,
            openid: user.openid,
          });

      if (res.code === 200) {
        console.log(res);
        Taro.navigateTo({
          url: `/pages/info/suc/index?deliveryId=${res.deliveryId}`,
        });
      } else {
        Taro.showToast({
          title: `接口异常${res.msg}`,
          icon: "none",
          duration: 2000,
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      console.log(payload);
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
