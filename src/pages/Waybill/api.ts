import Request from '@/utils/request'

export const getOverview = data =>
  Request({
    url: 'saasprism/compass/waybill/general/view',
    method: 'POST',
    data,
    header: {
      'Content-Type': 'application/json',
    },
  })

// delivery Performance list
export const getDeliveryList = data =>
  Request({
    url: 'saasprism/compass/waybill/delivery/getPageList',
    method: 'POST',
    data,
    header: {
      'Content-Type': 'application/json',
    },
  })
// lineHaul Performance list
export const getLineHaulList = data =>
  Request({
    url: 'saasprism/compass/waybill/lineHaul/getPageList',
    method: 'POST',
    data,
    header: {
      'Content-Type': 'application/json',
    },
  })
// rdc Performance list
export const getRDCList = data =>
  Request({
    url: 'saasprism/compass/waybill/rdc/getPageList',
    method: 'POST',
    data,
    header: {
      'Content-Type': 'application/json',
    },
  })
// firstMile Performance list
export const getFirstMileList = data =>
  Request({
    url: 'saasprism/compass/waybill/firstMile/getPageList',
    method: 'POST',
    data,
    header: {
      'Content-Type': 'application/json',
    },
  })

// 动态列
export const getTemplate = data =>
  Request({
    url: 'hermes/base/report/selfTemplate',
    method: 'POST',
    data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
