const getBaseUrl = url => {
  let BASE_URL = ''
  if (['development'].includes(process.env.NODE_ENV)) {
    // 开发环境 - 根据请求不同返回不同的BASE_URL
    BASE_URL = 'https://uat-prism.imile.com/'
    // BASE_URL='https://hk-scs.imile.com/'
    // BASE_URL = 'https://dev-scs.52imile.cn/'
  } else if (process.env.NODE_ENV === 'production') {
    // BASE_URL = 'https://uat-prism.imile.com/'
    BASE_URL = 'https://prism.imile.com/'
    // BASE_URL='https://dev-scs.52imile.cn/'
  }
  return BASE_URL
}

export default getBaseUrl
