import { Reducer } from 'redux'
import { Model } from 'dva'
import { Loading } from './connect'
import { getCountry, getClient, getStation, getBizDictData } from '@/service/filter'

interface StateType {
  countryData: Record<string, unknown>[]
  countryList: Record<string, unknown>[]
  stationList: Record<string, unknown>[]
  clientList: Record<string, unknown>[]
  orderTypeList: Record<string, unknown>[]
}
export interface ConnectState {
  loading: Loading
  filter: StateType
}

interface ModelType {
  namespace: string
  state: StateType
  effects: {}
  reducers: {
    save: Reducer
  }
}

const model: Model & ModelType = {
  namespace: 'filter',
  state: {
    countryList: [],
    stationList: [],
    clientList: [],
    orderTypeList: [],
    countryRes: [],
  },
  effects: {
    // 国家
    *country({ onSuccess }, { call, put }) {
      const res = yield call(getCountry, {})
      let list = res?.map(item => {
        return {
          ...item,
          label: `${item?.countryName}`,
          value: item.countryName,
        }
      })
      yield put({
        type: 'save',
        payload: {
          countryList: list,
          countryRes: res,
        },
      })
      onSuccess && onSuccess(res)
      return res
    },
    // 站点
    *station({ payload }, { call, put, select }) {
      const stationList = yield select(state => state.filter.stationList)
      if (stationList.length) return
      const res = yield call(getStation, { payload })

      if (!res) return
      let list = res.map(item => {
        return {
          label: `${item.ocName} | ${item.ocCode}`,
          value: item.ocCode,
        }
      })
      list?.unshift({
        label: 'ALL',
        value: 'ALL',
      })
      yield put({
        type: 'save',
        payload: {
          stationList: list,
        },
      })
    },
    // 商家
    *client({ payload }, { call, put, select }) {
      const clientList = yield select(state => state.filter.stationList)
      if (clientList.length) return
      const res = yield call(getClient, { payload })
      if (!res) return
      let list = res.map(item => {
        return {
          label: `${item.label} | ${item.value}`,
          value: item.value,
        }
      })
      list?.unshift({
        label: 'ALL',
        value: 'ALL',
      })
      yield put({
        type: 'save',
        payload: {
          clientList: list,
        },
      })
    },
    // 订单类型
    *orderType({ payload }, { call, put }) {
      const res = yield call(getBizDictData, {
        typeCode: 'OMSOrderType',
      })
      yield put({
        type: 'save',
        payload: {
          orderTypeList: res?.OMSOrderType,
        },
      })
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}

export default model
