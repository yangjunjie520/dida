import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverView = styled(View)`
  background: #fff;
  align-items: center;

  padding-top: 16rpx;
  display: flex;
  align-items: center;
  flex-direction: column;

  .group1 {
    z-index: auto;
    width: 750rpx;

    display: flex;
    flex-direction: column;
  }
  .layer1 {
    z-index: 2;
    height: 128rpx;
    background-color: rgba(255, 255, 255, 1);
    width: 750rpx;
    display: flex;
    flex-direction: column;
  }
  .main1 {
    z-index: auto;
    width: 680rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    margin: 4rpx 0 0 36rpx;
  }
  .info1 {
    z-index: 22;
    width: 108rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 30rpx;
    letter-spacing: -1rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: center;
  }
  .label1 {
    z-index: 17;
    width: 34rpx;
    height: 22rpx;
    margin: 8rpx 0 0 438rpx;
  }
  .main2 {
    z-index: 13;
    width: 32rpx;
    height: 22rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng97719293147618f9dfc8e8221707034d6593d6bd401094667000d741e5dd28c1)
      0rpx 0rpx no-repeat;
    background-size: 32rpx 24rpx;
    display: flex;
    flex-direction: column;
    margin: 8rpx 0 0 10rpx;
  }
  .icon1 {
    z-index: 9;
    width: 50rpx;
    height: 24rpx;
    margin: 6rpx 0 0 8rpx;
  }
  .main3 {
    z-index: auto;
    width: 696rpx;
    height: 54rpx;
    flex-direction: row;
    display: flex;
    margin: 14rpx 0 0 20rpx;
  }
  .label2 {
    z-index: 4;
    width: 48rpx;
    height: 48rpx;
    margin-top: 6rpx;
  }
  .txt1 {
    z-index: 3;
    width: 108rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
    margin: 2rpx 0 0 254rpx;
  }
  .bd1 {
    z-index: 7;
    width: 156rpx;
    height: 54rpx;
    border-radius: NaNrpx;
    border: 1px solid rgba(238, 238, 238, 1);
    margin-left: 130rpx;
    display: flex;
    flex-direction: column;
  }
  .layer2 {
    z-index: 35;
    height: 238rpx;
    background: url("../../static/images/icon_dida.png") 0rpx 0rpx no-repeat;
    background-size: 182rpx 238rpx;
    align-self: flex-start;
    width: 182rpx;
    display: flex;
    flex-direction: column;
    margin: 138rpx auto;
  }
  .layer3 {
    z-index: auto;
    width: 16rpx;
    height: 10rpx;
    flex-direction: row;
    display: flex;
    margin: 208rpx 0 0 68rpx;
  }
  .mod1 {
    z-index: 37;
    width: 16rpx;
    height: 10rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf29342118202ac2b728da7c045502c93391e9b8620fa5ac69fec8699422080cf)
      0rpx 0rpx no-repeat;
    background-size: 18rpx 12rpx;
    display: flex;
    flex-direction: column;
  }
  .layer4 {
    z-index: auto;
    width: 16rpx;
    height: 10rpx;
    flex-direction: row;
    display: flex;
    margin: 2rpx 0 0 100rpx;
  }
  .icon2 {
    z-index: 36;
    width: 16rpx;
    height: 10rpx;
  }
  .layer5 {
    z-index: 23;
    height: 88rpx;
    border-radius: 44rpx;
    background-color: rgba(0, 200, 0, 1);
    align-self: center;
    margin-top: 132rpx;
    width: 544rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .group2 {
    z-index: auto;
    width: 300rpx;
    height: 44rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .label3 {
    z-index: 26;
    width: 44rpx;
    height: 44rpx;
  }
  .word1 {
    z-index: 24;
    width: 544rpx;
    height: 88rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 88rpx;
    text-align: center;
    background-color: #00c800;
    border: none;
  }
  .layer6 {
    z-index: 25;
    height: 40rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    align-self: flex-end;
    font-size: 0rpx;
    position: fixed;
    bottom: 56rpx;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .word2 {
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    color: rgba(255, 114, 1, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info2 {
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    color: rgba(51, 51, 51, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info3 {
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    color: rgba(255, 114, 1, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99;

    .layer3s {
      z-index: 37;
      height: 890rpx;
      background-color: rgba(255, 255, 255, 1);
      position: fixed;
      left: 0;
      right: 0;

      bottom: 0;
      z-index: 99;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .layer4s {
      z-index: auto;
      width: 702rpx;
      height: 822rpx;
      display: flex;
      flex-direction: column;
    }
    .main2 {
      z-index: auto;
      width: 702rpx;
      height: 50rpx;
      flex-direction: row;
      display: flex;
      justify-content: space-between;
    }
    .word5 {
      z-index: 41;
      width: 324rpx;
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
    .icon5 {
      z-index: 38;
      width: 32rpx;
      height: 32rpx;
      margin-top: 10rpx;
    }
    .paragraph1 {
      z-index: 42;
      width: 670rpx;
      height: 612rpx;
      display: block;
      overflow-wrap: break-word;
      color: rgba(102, 102, 102, 1);
      font-size: 26rpx;
      font-family: PingFangSC-Regular;
      line-height: 36rpx;
      text-align: left;
      align-self: flex-end;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 30rpx 10rpx 0 0;
      white-space: pre-wrap;
    }
    .main3s {
      z-index: auto;
      width: 702rpx;
      height: 80rpx;
      margin-top: 50rpx;
      flex-direction: row;
      display: flex;
      justify-content: space-between;
    }
    .bd1s {
      z-index: 47;
      height: 80rpx;
      border-radius: 40rpx;
      border: 1px solid rgba(255, 114, 1, 1);
      width: 340rpx;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .word6 {
      z-index: 48;
      width: 90rpx;
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
    .bd2 {
      z-index: 44;
      height: 80rpx;
      border-radius: 40rpx;
      background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
      width: 340rpx;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    .info1 {
      z-index: 45;
      width: 60rpx;
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
  }
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
