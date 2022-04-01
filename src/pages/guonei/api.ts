import Request from "../../utils/request";

// 下单
export const SubmitOrder = (data) =>
  Request({
    url: "/prod-api/api/apiSubmitOrder",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
    },
  });

// 微信支付
export const ApiPays = (data) =>
  Request({
    url: "/prod-api/jsapi/jsapipays",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
    },
  });

// 支付结果
export const PaySearch = (data) =>
  Request({
    url: "/prod-api/jsapi/paySearch",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
    },
  });

// 扫码下单
export const WaybillSend = (data) =>
  Request({
    url: "/prod-api/api/waybillSend",
    method: "POST",
    data,
  });
