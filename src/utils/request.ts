import Taro from "@tarojs/taro";
import interceptors from "./interceptors";
import getBaseUrl from "./baseUrl";

interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem));

interface OptionsType {
  method: "GET" | "POST" | "PUT";
  data: any;
  url: string;
  noLoading?: boolean;
  header?: object;
}
export default (
  options: OptionsType = {
    method: "GET",
    data: {},
    url: "",
    noLoading: false,
    header: {},
  }
) => {
  for (const key in options.data) {
    if (
      options.data.hasOwnProperty(key) &&
      (options.data[key] === undefined || options.data[key] == null)
    ) {
      delete options.data[key];
    }
  }

  const baseUrl = getBaseUrl();

  let timezone = "";
  let timezoneCountry = "";
  if (
    Taro.getStorageSync("timeZoneObj") &&
    Taro.getStorageSync("timeZoneObj").timeZone
  ) {
    if (Taro.getStorageSync("timeZoneObj").timeZone > 0) {
      timezone = `+${Taro.getStorageSync("timeZoneObj").timeZone}`;
    } else {
      timezone = Taro.getStorageSync("timeZoneObj").timeZone;
    }
    timezoneCountry = Taro.getStorageSync("timeZoneObj").countryName;
  }

  const url = `${baseUrl}${options.url}`.replace(/\s+/g, "");
  // Taro.showToast({
  //   title: `开始请求${url}`,
  //   icon: "none",
  //   duration: 2000,
  // });
  return Taro.request({
    url,
    data: {
      ...options.data,
    },
    header: {
      timezone: timezone,
      "timezone-country": timezoneCountry,
      ...options.header,
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    Taro.hideLoading();
    if (res && (res.code === 200 || res.success)) {
      
      // Taro.showToast({
      //   title: `${url}请求结束`,
      //   icon: "none",
      //   duration: 2000,
      // });
      return res;
      
    } else {
      Taro.hideLoading();
      Taro.showToast({
        title: res.msg,
        icon: "none",
        duration: 2000,
      });
    }

    // 00002,没token 00018,token失效 00020,token异地登录 600100,用户已被禁用
    // if (res && ['00002', '00018', '00020', '600100'].includes(res.resultCode)) {
    //   let pages = Taro.getCurrentPages()
    //   let page = pages[pages.length - 1]
    //   if (page.route !== 'pages/login/index') {
    //     Taro.reLaunch({
    //       url: '/pages/login/index',
    //     })
    //   }
    //   return
    // }
    // Taro.showToast({
    //   title: res?.message || 'error',
    //   icon: 'none',
    //   duration: 3000,
    // })
  }).catch(error=>{
    Taro.showToast({
      title: JSON.stringify(error),
      icon: "none",
      duration: 5000,
    });
  })
};
