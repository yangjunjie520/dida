import Taro from '@tarojs/taro'
import * as Api from '../service/api'

export default {
  namespace: 'common',
  state: {
    accessToken: Taro.getStorageSync('accessToken'),
    userInfo: Taro.getStorageSync('userInfo'),
  },

  effects: {
    // 获取用户信息
    *getUserInfo({ payload }, { call, put }) {
      const res = yield call(Api.getUserInfo)
      // if (res) {
      //   yield put({
      //     type: 'save',
      //     payload: {
      //       paymentMethodlist: res.FreightPayMethod.map(item => {
      //         return {
      //           ...item,
      //           label: item.value,
      //           value: item.key,
      //         }
      //       }),
      //     },
      //   })
      // }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}
