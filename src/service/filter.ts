import Request from '@/utils/request'

// 筛选—国家
export const getCountry = data =>
  Request({
    url: 'hermes/country/queryCountryTimeZoneList',
    method: 'GET',
    data,
  })

// 筛选—商家
export const getClient = data =>
  Request({
    url: 'hermes/client/clientInfo/getAuthorizeClientOption',
    method: 'POST',
    data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })

// 筛选—网点
export const getStation = data =>
  Request({
    url: 'hermes/ent/oc/getAuthorizeOcOptions',
    method: 'GET',
    data,
  })

// 筛选-订单类型
export const getBizDictData = data =>
  Request({
    url: 'hermes/bizDictData/opitions',
    method: 'GET',
    data,
  })
