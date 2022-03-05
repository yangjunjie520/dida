import { Reducer } from 'redux'
import { Model } from 'dva'

interface StateType {
  ofd_page: Record<string, unknown>[]
}
interface ModelType {
  namespace: string
  state: StateType
  effects: {}
  reducers: {
    save: Reducer
  }
}
export interface ConnectState {
  modals: StateType
}

const modals: Model & ModelType = {
  namespace: 'modals',
  state: {
    // 每个页面维护一个弹框的数组，可能有多个的情况
    ofd_page: [],
    waybill_page: [],
  },
  effects: {},
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
    updateProps(state, { index, pageName, ModalProps }) {
      let currentPage = state[pageName]?.map((item, i) => {
        if (i === index) {
          item = { ...item, ...ModalProps }
        }
        return item
      })
      let changedPage = {}
      changedPage[pageName] = currentPage
      return {
        ...state,
        ...changedPage,
      }
    },
    addProps(state, { index, pageName, ModalProps }) {
      let changedPage = {}
      changedPage[pageName] = [{ ...ModalProps }]
      return {
        ...state,
        ...changedPage,
      }
    },
  },
}

export default modals
