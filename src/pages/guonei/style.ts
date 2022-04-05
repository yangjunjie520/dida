import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverView = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;
  padding-top: 16rpx;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 196rpx;

  .head {
    z-index: 12;
    height: 392rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    width: 702rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    .section3 {
      z-index: auto;
      width: 646rpx;
      height: 314rpx;
      display: flex;
      flex-direction: column;
    }
    .layer1 {
      z-index: auto;
      width: 620rpx;
      height: 132rpx;
      flex-direction: row;
      display: flex;
      justify-content: space-between;
    }
    .mod2 {
      z-index: 17;
      height: 72rpx;
      border-radius: 100%;
      background: #fe9f0c;
      width: 72rpx;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .word2 {
      z-index: 19;
      width: 38rpx;
      height: 52rpx;
      display: block;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 38rpx;
      font-family: PingFangSC-Medium;
      white-space: nowrap;
      line-height: 52rpx;
      text-align: left;
    }
    .mod3 {
      z-index: auto;
      width: 532rpx;
      height: 128rpx;
      margin-top: 4rpx;
      display: flex;
      flex-direction: column;
    }
    .info1 {
      z-index: 21;
      width: 300rpx;
      height: 42rpx;
      display: block;
      overflow-wrap: break-word;
      color: rgba(50, 53, 70, 1);
      font-size: 30rpx;
      font-family: PingFangSC-Medium;
      white-space: nowrap;
      line-height: 42rpx;
      text-align: left;
      align-self: flex-start;
    }
    .infoBox1 {
      z-index: 23;
      width: 532rpx;
      height: 80rpx;
      display: block;
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 28rpx;
      font-family: PingFangSC-Regular;
      line-height: 40rpx;
      text-align: left;
      margin-top: 6rpx;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .layer2 {
      z-index: 13;
      border-top: 1rpx solid #f3f3f3;
      padding-top: 24rpx;
    }
    .layer3s {
      z-index: auto;
      width: 646rpx;
      height: 134rpx;

      flex-direction: row;
      display: flex;
    }
    .main1 {
      z-index: 18;
      height: 72rpx;
      border-radius: 100%;
      background: #ff7201;
      width: 72rpx;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .info2 {
      z-index: 20;
      width: 38rpx;
      height: 52rpx;
      display: block;
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 38rpx;
      font-family: PingFangSC-Medium;
      white-space: nowrap;
      line-height: 52rpx;
      text-align: left;
    }
    .main2 {
      z-index: auto;
      width: 420rpx;
      height: 128rpx;
      display: flex;
      flex-direction: column;
      margin: 4rpx 0 0 16rpx;
    }
    .txt2 {
      z-index: 22;
      width: 300rpx;
      height: 42rpx;
      display: block;
      overflow-wrap: break-word;
      color: rgba(50, 53, 70, 1);
      font-size: 30rpx;
      font-family: PingFangSC-Medium;
      white-space: nowrap;
      line-height: 42rpx;
      text-align: left;
      align-self: flex-start;
    }
    .paragraph1 {
      z-index: 14;
      width: 420rpx;
      height: 80rpx;
      display: block;
      overflow-wrap: break-word;
      color: rgba(153, 153, 153, 1);
      font-size: 28rpx;
      font-family: PingFangSC-Regular;
      line-height: 40rpx;
      text-align: left;
      margin-top: 6rpx;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .main3 {
      z-index: 16;
      width: 2rpx;
      height: 82rpx;
      background: #f3f3f3;
      background-size: 4rpx 82rpx;
      display: flex;
      flex-direction: column;
      margin: 52rpx 0 0 32rpx;
    }
    .info3 {
      z-index: 15;
      width: 84rpx;
      height: 40rpx;
      display: block;
      overflow-wrap: break-word;
      color: rgba(255, 114, 1, 1);
      font-size: 28rpx;
      font-family: PingFangSC-Regular;
      white-space: nowrap;
      line-height: 40rpx;
      text-align: left;
      margin: 72rpx 0 0 20rpx;
    }
  }

  .layer3 {
    z-index: 39;

    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    width: 702rpx;
    justify-content: flex-end;
    padding-bottom: 26rpx;
    display: flex;
    flex-direction: column;
  }
  .layer4 {
    z-index: auto;
    width: 702rpx;

    display: flex;
    flex-direction: column;
  }
  .outer3 {
    z-index: auto;
    width: 646rpx;
    height: 50rpx;
    margin-left: 28rpx;
    flex-direction: row;
    display: flex;
  }
  .word6 {
    z-index: 75;
    width: 180rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
  }
  .label4 {
    z-index: 40;
    width: 36rpx;
    height: 36rpx;
    margin: 8rpx 0 0 296rpx;
  }
  .word7 {
    z-index: 71;
    width: 130rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
    margin: 8rpx 0 0 4rpx;
  }
  .outer7 {
    z-index: auto;
    width: 644rpx;
    height: 40rpx;
    flex-direction: row;
    display: flex;
    margin: 24rpx 0 0 28rpx;
  }
  .icon2 {
    z-index: 54;
    width: 32rpx;
    height: 32rpx;
    margin-top: 4rpx;
  }
  .info1 {
    z-index: 52;
    width: 172rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-left: 12rpx;
  }
  .txt1 {
    z-index: 53;
    width: 56rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-left: 372rpx;
  }

  .item {
    padding: 0 28rpx;
  }

  .group1-0 {
    z-index: 57;
    height: 96rpx;
    background-color: rgba(216, 216, 216, 0);

    justify-content: flex-end;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .mod2-0 {
    width: 646rpx;
    height: 68rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2rpx solid #f3f3f3;
  }

  .word8-0 {
    z-index: 69;
    width: 364rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(187, 187, 187, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .word9-0 {
    z-index: 70;
    width: 56rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(187, 187, 187, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .mod4-0 {
    z-index: 65;
    width: 646rpx;
    height: 2rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng55c9d5a7c519c66497c709fdb1f03ef7068c5683081c8adfc1daebbd8d9686d8)
      100% no-repeat;
    margin-top: 26rpx;
    display: flex;
    flex-direction: column;
  }

  .input {
    flex: 1;
    height: 40rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #bbbbbb;
    line-height: 40rpx;
    /* text-align: right; */
  }
  .opt {
    flex: 1;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
  }
  .blod {
    height: 40rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #bbbbbb;
    line-height: 40rpx;
    color: #323546;
  }

  .layer5 {
    z-index: 79;
    height: 80rpx;
    border-radius: 40rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    align-self: center;
    margin-top: 342rpx;
    width: 702rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .info2 {
    z-index: 80;
    width: 70rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }

  .jiantou {
    width: 36rpx;
    height: 36rpx;
    margin-left: 16rpx;
  }

  .bitian {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: 1;
  }
  .in-flex {
    display: inline-flex;
    flex: none;
  }

  .block7-2 {
    z-index: 31;
    height: 32rpx;
    border-radius: 4rpx;
    background-color: rgba(255, 230, 190, 1);
    width: 64rpx;
    justify-content: flex-start;
    align-items: center;

    display: flex;
    flex-direction: column;
  }
  .word6-2 {
    z-index: 35;

    height: 28rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(254, 159, 12, 1);
    font-size: 20rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 28rpx;
    text-align: left;
  }

  /* 重货上楼 */
  .outer8 {
    z-index: 71;
    height: 224rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    width: 702rpx;
    justify-content: flex-start;
    padding-top: 24rpx;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .main4 {
    z-index: auto;
    width: 702rpx;
    height: 168rpx;
    display: flex;
    flex-direction: column;
  }
  .group4 {
    z-index: auto;
    width: 650rpx;
    height: 44rpx;
    margin-left: 28rpx;
    flex-direction: row;
    display: flex;
    position: relative;
  }
  .txt9 {
    z-index: 81;
    width: 112rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 4rpx;
  }
  .label6 {
    z-index: 72;
    width: 32rpx;
    height: 32rpx;
    margin: 8rpx 0 0 8rpx;
  }
  .word12 {
    z-index: 82;
    width: 18rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin: 4rpx 0 0 368rpx;
  }
  .word13 {
    z-index: 85;
    width: 40rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    margin-left: 4rpx;
  }
  .block8 {
    z-index: 83;
    width: 56rpx;
    height: 26rpx;
    border-radius: NaNrpx;
    background-color: rgba(238, 238, 238, 1);
    display: flex;
    flex-direction: column;
    margin: 12rpx 0 0 12rpx;
  }
  .group5 {
    z-index: 80;
    width: 702rpx;
    height: 96rpx;
    background-color: rgba(216, 216, 216, 0);
    margin-top: 28rpx;
    display: flex;
    flex-direction: column;
  }
  .main5 {
    z-index: 84;
    position: absolute;
    left: 622rpx;
    top: 34rpx;
    width: 30rpx;
    height: 30rpx;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
    border-radius: 100%;
    display: flex;
    flex-direction: column;
  }
  .paragraph2 {
    z-index: 86;
    position: absolute;
    left: 28rpx;
    top: 84rpx;
    width: 654rpx;
    height: 108rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    line-height: 36rpx;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 下单 */
  .foot {
    position: fixed;
    bottom: 26rpx;
    left: 0;
    right: 0;

    z-index: 108;
    padding: 0 24rpx;
  }
  .outer9 {
    /* background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8db55a8506aef09b54030be274bf2ccec4577d04562bdea3981f5b7a202328cf)
      100% no-repeat; */
    background: #1f2430;
    align-self: center;

    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 52rpx;
    border-radius: 60rpx;
  }
  .section4 {
    z-index: auto;
    width: 100%;
    height: 80rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .layer7 {
    z-index: auto;
    width: 348rpx;
    height: 80rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .layer8 {
    z-index: auto;
    min-width: 168rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .info3 {
    z-index: 111;
    width: 104rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
    margin-top: 4rpx;
  }
  .block9 {
    z-index: 114;
    width: auto;

    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    font-size: 0rpx;
    margin-right: 10rpx;
  }
  .fangshi {
    display: flex;
  }
  .fangshi-text {
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    color: rgba(255, 255, 255, 1);

    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word14 {
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    color: rgba(255, 255, 255, 1);
    line-height: 34rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info4 {
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    color: rgba(255, 255, 255, 1);
    line-height: 34rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .layer9 {
    z-index: auto;
    width: 348rpx;
    height: 34rpx;

    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .label7 {
    z-index: 115;
    width: 28rpx;
    height: 28rpx;
    margin-top: 4rpx;
  }
  .word15 {
    z-index: 112;
    width: 312rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(191, 191, 191, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word16 {
    z-index: 113;

    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
  }

  /* Switch开关样式 */
  .wx-switch-input {
    width: 66rpx !important;
    height: 26rpx !important;
    display: flex;
    align-items: center;
    margin-top: -4rpx;
  }

  //开关checked为false时，开关的框框的样式
  .wx-switch-input::before {
    width: 66rpx !important;
    height: 26rpx !important;

    background-color: rgba(238, 238, 238, 1);
  }

  .check {
    display: flex;
    width: 702rpx;
    align-self: center;
    margin: 20rpx 0 0 0;
    align-items: center;
    .text {
      font-size: 28rpx;
    }
  }

  //白圈的样式
  .wx-switch-input::after {
    width: 34rpx !important;
    height: 34rpx !important;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
    border-radius: 100%;
    margin-top: -4rpx;
  }
  .zh-sw {
    position: absolute;
    position: absolute;
    z-index: 99;
    right: 0;
    top: -8rpx;
  }

  .mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
  }
  .modal {
    height: 326rpx;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .m-head {
    padding: 32rpx 24rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .m-tit {
    height: 50rpx;
    font-size: 36rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #323546;
    line-height: 50rpx;
  }
  .m-cont {
    display: flex;
    align-items: center;
    padding: 0 32rpx;
  }
  .selc {
    width: 256rpx;
    height: 60rpx;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .s-text {
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #323546;
  }
  .avtive {
    background: #ffffff;
    border-radius: 38rpx;
    border: 2rpx solid #ff7201;
  }

  .a-text {
    color: #ff7201;
  }

  .m-foot {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .m-bt {
    font-size: 30rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
  }
  .tixi {
    width: 160rpx;
    /* border-top: none;
    border-left: 40rpx solid transparent;
    border-bottom: 80rpx solid #ff7201;
    border-right: none; */
    height: 0;
    border-radius: 0 60rpx 60rpx 0;
    display: flex;
    height: 80rpx;
    background: #ff7201;
    align-items: center;
    justify-content: center;
  }

  .copy-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .copy {
    width: 616rpx;
    height: 420rpx;
    background: #ffffff;
    border-radius: 12rpx;
    /* padding: 0 34rpx; */
    .m-head {
      padding: 32rpx 34rpx 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .c-icon {
      position: absolute;
      top: 41rpx;
      right: 32rpx;
    }
    .copy-cont {
      padding: 0 34rpx;
    }
    .c-item {
      margin-top: 12rpx;
      display: flex;
    }
    .c-left {
      width: 78rpx;
      height: 44rpx;
      font-size: 26rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #888888;
    }
    .c-right {
      flex: 1;
      min-height: 44rpx;
      font-size: 26rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 44rpx;
    }

    .c-foot {
      margin-top: 40rpx;
      border-top: 2rpx solid #f3f3f3;
      height: 80rpx;
      display: flex;
      box-sizing: border-box;
    }
    .send,
    .rev {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .send {
      border-right: 2rpx solid #f3f3f3;
      box-sizing: border-box;
    }
    .s-text,
    .r-text {
      font-size: 30rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #323546;
    }
    .r-text {
      color: #ff7201;
    }
  }
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
