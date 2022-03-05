import Request from '../utils/request'

export const account = data => Request({ url: '/url', method: 'GET', data })

export const getUserInfo = data =>
  Request({
    url: '/sys/sysUser/info',
    method: 'GET',
    data,
  })

export const getTimeZone = data =>
  Request({
    url: '/hermes/self/getTimeZone',
    method: 'POST',
    data,
    noLoading: true,
  })

export const setTimeZone = data =>
  Request({
    url: '/hermes/self/setTimeZone',
    method: 'POST',
    data,
  })

export const queryCountryTimeZoneList = data =>
  Request({
    url: '/hermes/country/queryCountryTimeZoneList',
    method: 'GET',
    data,
    noLoading: true,
  })
