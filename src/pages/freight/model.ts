import { Reducer } from 'redux'
import { Model } from 'dva'
import { Loading } from '@/models/connect'
import { THREE_WEEKS_AGO } from '@/utils/handleTime'
import { } from './api'

interface StateType {
  overview: Record<string, unknown>
  countryList: Record<string, unknown>[]
}
export interface ConnectState {
  loading: Loading
  waybill: StateType
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
  namespace: 'waybill',
  state: {
   
  },
  effects: {
    watchFilterChanges: [
      function*({ take, put, select }) {
        while (true) {
          yield take('saveFilterParams')
          yield put({ type: 'getDefault' })
        }
      },
      { type: 'watcher' },
    ],

    *getDefault({}, { put, select }) {
      let params = yield select(state => state.waybill.filterParams)
      params = {
        ...params,
        orderTypes: params.orderTypes?.[0] === 'ALL' ? [] : params.orderTypes,
        clientCodes: params.clientCodes?.[0] === 'ALL' ? [] : params.clientCodes,
        destinationCountry: params.destinationCountry,
        ocCode: params.ocCode === 'ALL' ? '' : params.ocCode,
      }
      yield put({
        type: 'waybillList',
        payload: {
          ...params,
          currentPage: 1,
        },
      })
      let { showCount, ...otherParams } = params
      yield put({
        type: 'overview',
        payload: otherParams,
      })
    },
    *overview({ payload }, { call, put }) {
     
    },
    *waybillList({ payload }, { call, put, select }) {
    

   
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
    saveFilterParams(state, { payload }) {
      return { ...state, filterParams: { ...state.filterParams, ...payload }, currentPage: 1 }
    },
  },
}

export default model