const getBaseUrl = () => {
  let BASE_URL = "";
  if (["development"].includes(process.env.NODE_ENV)) {
    // 开发环境 - 根据请求不同返回不同的BASE_URL
    BASE_URL = "http://159.75.52.36";
  } else if (process.env.NODE_ENV === "production") {
    BASE_URL = "http://159.75.52.36";
  }
  return BASE_URL;
};

export default getBaseUrl;
