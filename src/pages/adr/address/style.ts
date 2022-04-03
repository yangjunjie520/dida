import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverview = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;
  .header {
    height: 78rpx;
    display: flex;

    background: #fff;
    padding: 0 36rpx;
    margin-top: 40rpx;
  }

  .layer3 {
    z-index: 24;
    height: 76rpx;
    border-radius: 38rpx;
    background: #f1f1f1;

    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 24rpx;
    position: relative;
    margin-left: 0;

    .at-input__container {
      height: 76rpx;
    }
  }

  .at-input:after {
    border-top-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0);
  }

  .outer1 {
    z-index: 25;
    width: 32rpx;
    height: 32rpx;
    background-color: rgba(0, 0, 0, 0);
    margin-top: 6rpx;
    display: flex;
    flex-direction: column;
  }

  .mod2 {
    z-index: auto;

    height: 48rpx;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    width: 208rpx;
  }
  .active {
    width: 48rpx;
    height: 6rpx;
    background: #ff7201;
    box-shadow: 0px 4rpx 8rpx 0px rgba(255, 114, 0, 0.7);
    border-radius: 3rpx;
    margin-top: 8rpx;
  }

  .word2 {
    z-index: 31;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
    margin-top: 24rpx;
  }
  .word3 {
    z-index: 32;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(98, 98, 110, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    margin-top: 4rpx;
  }

  .cont-box {
    margin-top: 42rpx;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24rpx;
  }
  .bd1-0 {
    z-index: 30;

    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 16rpx;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 32rpx 24rpx 0;
  }
  .outer1-0 {
    z-index: auto;

    height: 176rpx;
    display: flex;
    flex-direction: column;
  }
  .info1-0 {
    z-index: 55;

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
    margin-left: 2rpx;
  }
  .word6-0 {
    z-index: 56;

    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    align-self: flex-start;
    margin: 6rpx 0 0 2rpx;
  }
  .main2-0 {
    z-index: 54;

    height: 2rpx;
    background: #f3f3f3;

    margin-top: 28rpx;
    display: flex;
    flex-direction: column;
  }
  .main3-0 {
    z-index: auto;

    height: 40rpx;
    margin-top: 18rpx;
    flex-direction: row;
    display: flex;
  }
  .label3-0 {
    z-index: 51;
    width: 32rpx;
    height: 32rpx;
    margin-top: 4rpx;
  }
  .txt1-0 {
    z-index: 48;
    width: 168rpx;
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
  .label4-0 {
    z-index: 31;
    width: 36rpx;
    height: 36rpx;
    margin: 2rpx 0 0 196rpx;
  }
  .info2-0 {
    z-index: 49;
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
    margin-left: 6rpx;
  }
  .icon2-0 {
    z-index: 39;
    width: 36rpx;
    height: 36rpx;
    margin: 2rpx 0 0 40rpx;
  }
  .info3-0 {
    z-index: 50;
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
    margin-left: 6rpx;
  }

  .box1 {
    z-index: auto;
    width: 48rpx;

    display: flex;
    flex-direction: column;
  }
  .label2 {
    z-index: 84;
    width: 48rpx;
    height: 48rpx;
  }
  .bd2 {
    z-index: 87;
    width: 48rpx;
    height: 48rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge562a6705f916fd643903ac460ad506b8736c3b277bf9bfe80e1ba00767445af) -2rpx -2rpx
      no-repeat;
    background-size: 52rpx 52rpx;
    display: flex;
    flex-direction: column;
  }

  .block5 {
    z-index: auto;
    width: 100%;
    height: 80rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 100rpx;
  }
  .section1 {
    z-index: 88;
    height: 80rpx;
    border-radius: 40rpx;
    border: 1px solid rgba(255, 114, 1, 1);
    width: 340rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .word7 {
    z-index: 89;
    width: 60rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 114, 1, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }

  .section2 {
    z-index: 85;
    height: 80rpx;
    border-radius: 40rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    width: 340rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .word8 {
    z-index: 86;
    width: 120rpx;
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

  /*  */
  .group1 {
    z-index: 93;
    height: 80rpx;
    border-radius: 40rpx;
    border: 1px solid rgba(187, 187, 187, 1);
    width: 340rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .txt5 {
    z-index: 94;
    width: 60rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
