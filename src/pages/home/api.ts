import Request from "@/utils/request";
export const getGStateApi= (data) =>
  Request({
    url: "/prod-api/api/getGState",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
    },
  });