import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Input,
  Textarea,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { StyledOverView } from "./style";
import Modals from "../modal";

import Icon_close from "../../../static/images/yundan/icon_close.png";

const Index = (props) => {
  const [current, setCurrent] = useState(0);
  const setCurrentSwiper = (current) => {
    setCurrent(current);
  };
  const { params, dispatch } = props;

  const [paramss, setParamss] = useState(params);
  const {
    goods,
    weight,
    vloumn,
    vloumHeight,
    vloumLong,
    vloumWidth,
    remark,
    packageCount,
  } = paramss;

  const [zhix, setZhix] = useState(false);
  const [jiaod, setJiaod] = useState(false);
  const [lout, setLout] = useState(false);

  const select = [
    {
      label: "汽车配件",
      value: '汽车配件',
    },
    // {
    //   label: "特快零担",
    //   value: 6,
    // },
    // {
    //   label: "特快重货",
    //   value: 25,
    // },
  ];

  const handleSelect = (type) => {
    // dispatch({
    //   type: "order/save",
    //   payload: {
    //     goods: type,
    //   },
    // });
    setParamss({
      ...paramss,
      goods: type,
    });
  };

  const handleKg = (type) => {
    let w = weight;
    if (type === "minus") {
      w = w > 1 ? w - 1 : w;
    } else if (type === "add") {
      w = w + 1;
    }
    // dispatch({
    //   type: "order/save",
    //   payload: {
    //     weight: w,
    //   },
    // });
    setParamss({
      ...paramss,
      weight: w,
    });
  };

  const blur = (val) => {
    const reg = new RegExp(/^[+-]?(0|([1-9]\d*))(\.\d{1, 2})?$/);

    if (!reg.test(val)) {
      const v = Number(val.toString().match(/^\d+(?:\.\d{0,2})?/));
      // dispatch({
      //   type: "order/save",
      //   payload: {
      //     weight: v,
      //   },
      // });
      setParamss({
        ...paramss,
        weight: v,
      });
      return false;
    }
  };
  const handleSub = () => {
    if (!goods) {
      Taro.showToast({
        title: "请选择物品类型",
        icon: "none",
        duration: 2000,
      });
      return false;
    }
    const reg = new RegExp(/^[+-]?(0|([1-9]\d*))(\.\d{1, 2})?$/);
    if (vloumn !== "" && !reg.test(vloumn)) {
      Taro.showToast({
        title: "请输入正确体积",
        icon: "none",
        duration: 2000,
      });
      return false;
    }

    if (vloumLong !== "" && !reg.test(vloumLong)) {
      Taro.showToast({
        title: "请输入正确的长度",
        icon: "none",
        duration: 2000,
      });
      return false;
    }

    if (vloumWidth !== "" && !reg.test(vloumWidth)) {
      Taro.showToast({
        title: "请输入正确的宽度",
        icon: "none",
        duration: 2000,
      });
      return false;
    }

    if (vloumHeight !== "" && !reg.test(vloumHeight)) {
      Taro.showToast({
        title: "请输入正确的高度",
        icon: "none",
        duration: 2000,
      });
      return false;
    }

    if (packageCount === "") {
      Taro.showToast({
        title: "请输入物品件数",
        icon: "none",
        duration: 2000,
      });
      return false;
    }

    dispatch({
      type: "order/save",
      payload: paramss,
    });
    Taro.navigateBack({});
  };

  return (
    <>
      <StyledOverView>
        <View className="mod6">
          <View className="layer1">
            <View className="mod7">
              <Text className="info2">物品类型</Text>
              <View className="mod8">
                <Text className="word2">必填</Text>
              </View>
            </View>
            {/* <View className="mod9">
              <View className="layer">
                <View className="wrap1"></View>
                <Input placeholder="请输入物品名称" className="layer2" />
              </View>
              <Button bindtap="onClick" className="layer3">
                <Text className="txt1">确定</Text>
              </Button>
            </View> */}
            {goods ? (
              <View className="active">
                <Text className="ac-text">
                  {goods === '汽车配件' ? "汽车配件" : ""}
                </Text>
                <Image
                  src={Icon_close}
                  className="label2"
                  onClick={() => handleSelect(null)}
                ></Image>
              </View>
            ) : (
              <View className="mod10">
                {select.map((item) => {
                  return (
                    <View
                      className="outer3"
                      key={item.label}
                      onClick={() => handleSelect(item.value)}
                    >
                      <Text className="word3">{item.label}</Text>
                    </View>
                  );
                })}

                <View className="outer3" style={{ border: "none" }}></View>
              </View>
            )}
          </View>
        </View>

        <View className="mod11">
          <View className="main1">
            <Text className="txt3">总重量</Text>
            <Text className="info6" onClick={() => handleKg("minus")}>
              －
            </Text>
            <View className="modInp">
              <Input
                placeholder="20"
                className="mod12"
                type="digit"
                value={weight}
                onInput={(e) => {
                  // dispatch({
                  //   type: "order/save",
                  //   payload: {
                  //     weight: e.detail.value,
                  //   },
                  // });
                  setParamss({
                    ...paramss,
                    weight: e.detail.value,
                  });
                }}
                onBlur={(e) => blur(e.detail.value)}
              />
              <Text className="txt4">KG</Text>
            </View>
            <Text className="word7" onClick={() => handleKg("add")}>
              ＋
            </Text>
          </View>
        </View>

        <View className="mod13">
          <View className="wrap2">
            {/* <View className="bd1">
              <Text className="word8">总体积</Text>
              <Text
                className="info7"
                onClick={() => {
                  let w = vloumn;
                  w = w > 1 ? w - 1 : w;
                  // dispatch({
                  //   type: "order/save",
                  //   payload: {
                  //     vloumn: w,
                  //   },
                  // });
                  setParamss({
                    ...paramss,
                    vloumn: w,
                  });
                }}
              >
                －
              </Text>

              <View className="modInp">
                <Input
                  placeholder="0.01"
                  className="mod12"
                  type="digit"
                  value={vloumn}
                  onInput={(e) => {
                    // dispatch({
                    //   type: "order/save",
                    //   payload: {
                    //     vloumn: e.detail.value,
                    //   },
                    // });
                    setParamss({
                      ...paramss,
                      vloumn: e.detail.value,
                    });
                  }}
                />
                <Text className="txt4">m³</Text>
              </View>
              <Text
                className="info9"
                onClick={() => {
                  let w = vloumn;
                  w = w + 1;
                  // dispatch({
                  //   type: "order/save",
                  //   payload: {
                  //     vloumn: w,
                  //   },
                  // });
                  setParamss({
                    ...paramss,
                    vloumn: w,
                  });
                }}
              >
                ＋
              </Text>
            </View> */}
            <View className="bd3">
              <View className="bd4">
                {/* <View className="wrap3">
                  <Text  className="word9">长</Text>
                </View> */}
                <Input
                  placeholder="长"
                  className="word9 wrap3"
                  value={vloumLong}
                  onInput={(e) => {
                    // dispatch({
                    //   type: "order/save",
                    //   payload: {
                    //     vloumLong: e.detail.value,
                    //   },
                    // });
                    setParamss({
                      ...paramss,
                      vloumLong: e.detail.value,
                    });
                  }}
                  type="digit"
                />
                <View className="wrap4">
                  <Text className="info10">CM</Text>
                  <Text className="word10">×</Text>
                </View>
                {/* <View className="wrap5">
                  <Text  className="word11">宽</Text>
                </View> */}
                <Input
                  placeholder="宽"
                  className="word9 wrap3"
                  value={vloumWidth}
                  onInput={(e) => {
                    // dispatch({
                    //   type: "order/save",
                    //   payload: {
                    //     vloumWidth: e.detail.value,
                    //   },
                    // });
                    setParamss({
                      ...paramss,
                      vloumWidth: e.detail.value,
                    });
                  }}
                  type="digit"
                />
                <View className="wrap6">
                  <Text className="txt6">CM</Text>
                  <Text className="word12">×</Text>
                </View>
                {/* <View className="wrap7">
                  <Text  className="info11">高</Text>
                </View> */}
                <Input
                  placeholder="高"
                  className="word9 wrap3"
                  value={vloumHeight}
                  onInput={(e) => {
                    // dispatch({
                    //   type: "order/save",
                    //   payload: {
                    //     vloumHeight: e.detail.value,
                    //   },
                    // });
                    setParamss({
                      ...paramss,
                      vloumHeight: e.detail.value,
                    });
                  }}
                  type="digit"
                />
                <Text className="info12">CM</Text>
              </View>
            </View>
            <Text className="paragraph1">
              注: 实际重量体积以收派员确定为准，体积较大时可能会按体积
              重量收费，录入长宽高，预估费用更精准。
            </Text>
          </View>
        </View>

        <View className="mod11">
          <View className="main1">
            <Text className="txt3">件数</Text>
            <Text
              className="info6"
              onClick={() => {
                let w = packageCount;
                w = w > 1 ? w - 1 : w;
                // dispatch({
                //   type: "order/save",
                //   payload: {
                //     packageCount: w,
                //   },
                // });
                setParamss({
                  ...paramss,
                  packageCount: w,
                });
              }}
            >
              －
            </Text>
            <View className="modInp">
              <Input
                placeholder="1"
                className="mod12"
                value={packageCount}
                type="number"
                onInput={(e) => {
                  // dispatch({
                  //   type: "order/save",
                  //   payload: {
                  //     packageCount: e.detail.value,
                  //   },
                  // });
                  setParamss({
                    ...paramss,
                    packageCount: e.detail.value,
                  });
                }}
              />
              <Text className="txt4">件</Text>
            </View>
            <Text
              className="word7"
              onClick={() => {
                let w = packageCount;
                w = w + 1;
                // dispatch({
                //   type: "order/save",
                //   payload: {
                //     packageCount: w,
                //   },
                // });
                setParamss({
                  ...paramss,
                  packageCount: w,
                });
              }}
            >
              ＋
            </Text>
          </View>
        </View>

        <View className="mod15">
          <View className="mod16">
            <View className="main5">
              <Text className="word15">给揽件员捎话</Text>
              <Text className="txt9">注: 纸箱需要额外收费哦~</Text>
            </View>
            {/* <View className="main6">
              <View className="bd5">
                <Text  className="word16">给揽件员捎句话吧~</Text>
              </View>
              <View className="bd6">
                <Text  className="txt10">0/100</Text>
              </View>
            </View> */}
            <Textarea
              className="main6 word16"
              placeholder="给揽件员捎句话吧"
              maxlength={100}
              value={remark}
              onInput={(e) => {
                // dispatch({
                //   type: "order/save",
                //   payload: {
                //     remark: e.detail.value,
                //   },
                // });
                setParamss({
                  ...paramss,
                  remark: e.detail.value,
                });
              }}
            ></Textarea>
            <View className="main7">
              <View className={`box1 ${zhix ? 'r-active' : ''}`} onClick={() => {
                if (!zhix) {
                  setParamss({
                    ...paramss,
                    remark: `${remark}请带纸箱`,
                  });
                } else {
                  setParamss({
                    ...paramss,
                    remark: remark.replace('请带纸箱', ''),
                  });
                }
                setZhix(!zhix)
              }}>
                <Text className="info14 r">请带纸箱</Text>
              </View>
              <View className={`box1 ${jiaod ? 'r-active' : ''}`} onClick={() => {
                if (!jiaod) {
                  setParamss({
                    ...paramss,
                    remark: `${remark}请带胶带`,
                  });
                } else {
                  setParamss({
                    ...paramss,
                    remark: remark.replace('请带胶带', ''),
                  });
                }
                setJiaod(!jiaod)
              }}>
                <Text className="txt11 r">请带胶带</Text>
              </View>
              <View className={`box1 ${lout ? 'r-active' : ''}`} onClick={() => {
                if (!lout) {
                  setParamss({
                    ...paramss,
                    remark: `${remark}需爬楼梯`,
                  });
                } else {
                  setParamss({
                    ...paramss,
                    remark: remark.replace('需爬楼梯', ''),
                  });
                }
                setLout(!lout)
              }}>
                <Text className="word17 r">需爬楼梯</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="foot">
          <Button onClick={handleSub} className="box8s">
            <Text decode="true" className="info2s">
              确认
            </Text>
          </Button>
        </View>
      </StyledOverView>
    </>
  );
};

export default connect(({ order }: any) => {
  return {
    ...order,
  };
})(Index);
