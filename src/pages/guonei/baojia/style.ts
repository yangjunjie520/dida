import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverView = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 16rpx 24rpx 200rpx;

  .box2 {
    z-index: 4;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 16rpx;

    padding: 28rpx 24rpx 0;
    align-items: center;
  }
  .main5 {
    z-index: auto;

    height: 772rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .word2 {
    z-index: 5;

    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    width: 100%;
    text-align: center;
  }
  .main6 {
    z-index: 6;
    height: 76rpx;
    border-radius: 38rpx;
    border: 1px solid rgba(238, 238, 238, 1);
    background-color: rgba(249, 249, 249, 1);

    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #cccccc;
    /* width: 646rpx; */

    /* padding-right: 40rpx; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
    text-align: center;
    width: 100%;
  }
  .section1 {
    z-index: auto;
    /* width: 346rpx; */
    height: 40rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .info2s {
    z-index: 7;
    width: 130rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: #ffffff;
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .info3 {
    z-index: 12;
    width: 28rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    position: absolute;
    right: 42rpx;
    top: 18rpx;
  }
  .main7 {
    z-index: auto;
    width: 500rpx;
    height: 56rpx;
    flex-direction: row;
    display: flex;
    justify-content: flex-end;
    margin: 20rpx 0 0 130rpx;
  }
  .word3 {
    z-index: 8;
    width: 84rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 8rpx;
  }
  .txt1 {
    z-index: 11;

    height: 56rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 114, 1, 1);
    font-size: 40rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 56rpx;
    text-align: left;
  }
  .txt2 {
    z-index: 9;
    width: 120rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 32rpx;
  }
  .paragraph1 {
    z-index: 10;
    width: 656rpx;
    height: 462rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    line-height: 42rpx;
    text-align: left;
    margin-top: 12rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* 下单 */
  .foot {
    position: fixed;
    bottom: 26rpx;
    left: 0;
    right: 0;
    height: 142rpx;
    z-index: 108;
    padding: 0 24rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box7s {
    z-index: auto;
    width: 420rpx;
    height: 34rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 28rpx;
  }
  .icon4 {
    z-index: 46;
    width: 28rpx;
    height: 28rpx;
    margin-top: 4rpx;
  }
  .info1 {
    z-index: 45;
    width: 384rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .box8s {
    z-index: 43;
    height: 80rpx;
    border-radius: 40rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    align-self: center;
    margin-top: 28rpx;
    width: 702rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .info2 {
    z-index: 44;
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

  .group3 {
    z-index: 75;
    height: 300rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    width: 702rpx;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .bd3 {
    z-index: auto;
    width: 692rpx;
    height: 246rpx;
    display: flex;
    flex-direction: column;
  }
  .layer3 {
    z-index: auto;
    width: 650rpx;
    height: 42rpx;
    margin-left: 28rpx;
    flex-direction: row;
    display: flex;
  }
  .txt18 {
    z-index: 85;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .icon3 {
    z-index: 76;
    width: 32rpx;
    height: 32rpx;
    margin: 6rpx 0 0 4rpx;
  }
  .section1 {
    z-index: 86;
    width: 56rpx;
    height: 26rpx;
    border-radius: NaNrpx;
    background-color: rgba(255, 114, 1, 1);
    display: flex;
    flex-direction: column;
    margin: 10rpx 0 0 438rpx;
  }
  .infoBox4 {
    z-index: 88;
    width: 650rpx;
    height: 72rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    line-height: 36rpx;
    text-align: left;
    align-self: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 16rpx 14rpx 0 0;
  }
  .layer4 {
    z-index: 84;
    width: 692rpx;
    height: 4rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng739ce0b3289b0add6b7f59c9790aebcdf8299b75918bbc9dc6c28e8ad876cbda)
      100% no-repeat;
    margin-top: 30rpx;
    display: flex;
    flex-direction: column;
  }
  .layer5 {
    z-index: auto;
    width: 650rpx;
    height: 60rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 22rpx 0 0 28rpx;
  }
  .word34 {
    z-index: 89;
    width: 112rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 10rpx;
  }
  .group4 {
    z-index: 90;
    height: 60rpx;
    border-radius: 4rpx;
    background-color: rgba(241, 241, 241, 1);
    width: 522rpx;
    padding-left: 20rpx;
    /* color: rgba(204, 204, 204, 1); */
    font-size: 26rpx;
  }
  .word35 {
    z-index: 91;
    width: 408rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
  }
  .bd4 {
    z-index: 87;
    position: absolute;
    left: 650rpx;
    top: 34rpx;
    width: 30rpx;
    height: 30rpx;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
    border-radius: 100%;
    display: flex;
    flex-direction: column;
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

  .m-inp {
    position: relative;
    width: 100%;
    margin-top: 30rpx;
  }
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
