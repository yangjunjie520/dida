const getBaseUrl = () => {
  let BASE_URL = "";
  if (["development"].includes(process.env.NODE_ENV)) {
    // 开发环境 - 根据请求不同返回不同的BASE_URL
    BASE_URL = "https://jjddwwll.com";
  } else if (process.env.NODE_ENV === "production") {
    BASE_URL = "https://jjddwwll.com";
  }
  return BASE_URL;
};

export default getBaseUrl;
