import Request from "../../../utils/request";

// 地址列表
export const queryWxAddList = (data) =>
  Request({
    url: "/prod-api/api/queryWxAddList",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
    },
  });

// 新增
export const insertWxAdd = (data) =>
  Request({
    url: "/prod-api/api/insertWxAdd",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
    },
  });

// 修改
export const updataWxAdd = (data) =>
  Request({
    url: "/prod-api/api/updataWxAdd",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
    },
  });

// 删除
export const deleteWxAddList = (data) =>
  Request({
    url: "/prod-api/api/deleteWxAddList",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
    },
  });
