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

const model: Model & ModelType = {
  namespace: "freight",
  state: {
    params: {
      userId: "",
      openid: "",
      deliveryId: "",
    },
    list: [],
  },
  effects: {
    *orderList({}, { put, select }) {
      try {
        Taro.showLoading({
          title: "加载中",
        });
        let freight = yield select((state) => state.freight);
        const res = yield OrderList(freight.params);
        if (res.code === 200) {
          Taro.hideLoading();
          yield put({
            type: "setList",
            payload: res.rows,
          });
        } else {
          Taro.hideLoading();
          Taro.showToast({
            title: `接口异常${res.msg}`,
            icon: "none",
            duration: 2000,
          });
        }
      } catch (error) {
        Taro.showModal({
          title: "错误",
          content: error,
          success: function(res) {
            if (res.confirm) {
              console.log("用户点击确定");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
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
      const user = Taro.getStorageSync("user");
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
