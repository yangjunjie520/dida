import { Reducer } from "redux";
import { Model } from "dva";
import { OrderList, CancelOrder } from "./api";
import Taro from "@tarojs/taro";

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

const model: Model & ModelType = {
  namespace: "freight",
  state: {
    params: {
      userId: user.userId,
      openid: user.openid,
      deliveryId: "",
    },
    list: [],
  },
  effects: {
    *orderList({}, { put, select }) {
      Taro.showLoading({
        title: "加载中",
      });
      let freight = yield select((state) => state.freight);
      const res = yield OrderList(freight.params);
      if (res) {
        Taro.hideLoading();
        yield put({
          type: "setList",
          payload: res.rows,
        });
      }
    },
    *changes({ payload }, { put, select }) {
      yield put({
        type: "save",
        payload,
      });

      yield put({
        type: "orderList",
      });
    },

    *clear({ deliveryId }, { put, select }) {
      const res = yield CancelOrder({
        userId: user.userId,
        openid: user.openid,
        deliveryId,
      });

      if (res) {
        Taro.showToast({
          title: "删除成功",
          icon: "none",
          duration: 2000,
        });
        yield put({
          type: "orderList",
        });
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
    setList(state, { payload }) {
      return {
        ...state,
        list: payload,
      };
    },
  },
};

export default model;
