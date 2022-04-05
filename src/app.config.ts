export default {
  pages: [
    "pages/home/index",
    "pages/freight/index",
    "pages/my/index",
    // "pages/freight/details/index",
    // "pages/freight/edit/index",
    // "pages/freight/suc/index",
    // "pages/freight/clear/index",
    // "pages/my/bill/index",
    // "pages/my/address/index",
    // "pages/my/address/add/index",
    // "pages/guonei/index",
    // "pages/guonei/zengzhi/index",
    // "pages/guonei/baojia/index",
    // "pages/guonei/xinxi/index",
    // "pages/guoji/index",
    // "pages/huiyuan/index",
  ],
  subPackages: [
    // 分包
    {
      root: "pages/login",
      pages: ["index"],
    },
    {
      root: "pages/info",
      pages: ["details/index", "edit/index", "suc/index", "clear/index"],
    },
    {
      root: "pages/adr/",
      pages: ["bill/index", "address/index", "address/add/index"],
    },
    {
      root: "pages/guonei/",
      pages: ["index", "zengzhi/index", "xinxi/index", "baojia/index"],
    },
    {
      root: "pages/guoji/",
      pages: ["index"],
    },
    {
      root: "pages/huiyuan/",
      pages: ["index"],
    },
    {
      root: "pages/add/",
      pages: ["index"],
    },
  ],
  tabBar: {
    // custom: true,
    color: "#151741",
    selectedColor: "#151741",
    borderStyle: "white",
    backgroundColor: "#FAFAFC",
    list: [
      {
        text: "首页",
        pagePath: "pages/home/index",
        iconPath: "static/images/home/home_not.png",
        selectedIconPath: "static/images/home/home_yes.png",
      },
      {
        text: "查货运",
        pagePath: "pages/freight/index",
        iconPath: "static/images/home/chajian_not.png",
        selectedIconPath: "static/images/home/chajian_yes.png",
      },
      {
        text: "我的",
        pagePath: "pages/my/index",
        iconPath: "static/images/home/wd_not.png",
        selectedIconPath: "static/images/home/wd_yes.png",
      },
    ],
  },
  window: {
    backgroundColor: "#f4f7fc",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "Prism",
    navigationBarTextStyle: "black",
  },
  quickMenu: {
    share: true,
    favorite: false,
    sendToDesktop: false,
  },
  lazyCodeLoading: "requiredComponents",
};
