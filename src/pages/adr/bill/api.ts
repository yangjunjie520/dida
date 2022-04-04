import Request from "../../../utils/request";

// 列表
export const getAccountWxRecord = (data) =>
  Request({
    url: "/prod-api/api/getAccountWxRecord",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
    },
  });
