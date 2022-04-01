import Request from "../../utils/request";

// 下单
export const OrderList = (data) =>
  Request({
    url: "/prod-api/api/apiOrderList",
    method: "POST",
    data,
  });
