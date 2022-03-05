import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverView = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;

  .bd1 {
    z-index: 2;
    height: 410rpx;
    background: url("../../static/images/huiyuan/pic_bg_3.png") 100% no-repeat;
    width: 750rpx;
    display: flex;
    flex-direction: column;
  }
  .outer1 {
    z-index: auto;
    width: 680rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    margin: 4rpx 0 0 36rpx;
  }
  .word1 {
    z-index: 25;
    width: 108rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 30rpx;
    letter-spacing: -1rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: center;
  }
  .label1 {
    z-index: 20;
    width: 34rpx;
    height: 22rpx;
    margin: 8rpx 0 0 438rpx;
  }
  .main1 {
    z-index: 16;
    width: 32rpx;
    height: 22rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng844e2577a5d293008bc4c73d8eff6816403b8c9c20a53b2b16a20e293a52d5c0)
      0rpx 0rpx no-repeat;
    background-size: 32rpx 24rpx;
    display: flex;
    flex-direction: column;
    margin: 8rpx 0 0 10rpx;
  }
  .icon1 {
    z-index: 12;
    width: 50rpx;
    height: 24rpx;
    margin: 6rpx 0 0 8rpx;
  }
  .outer2 {
    z-index: auto;
    width: 696rpx;
    height: 54rpx;
    flex-direction: row;
    display: flex;
    margin: 14rpx 0 0 20rpx;
  }
  .icon2 {
    z-index: 38;
    width: 48rpx;
    height: 48rpx;
    margin-top: 6rpx;
  }
  .txt1 {
    z-index: 37;
    width: 72rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
    margin: 2rpx 0 0 10rpx;
  }
  .outer3 {
    z-index: 26;
    width: 156rpx;
    height: 54rpx;
    border-radius: NaNrpx;
    background-color: rgba(0, 0, 0, 0.1);
    margin-left: 410rpx;
    display: flex;
    flex-direction: column;
  }
  .outer4 {
    z-index: auto;
    width: 670rpx;
    height: 102rpx;
    flex-direction: row;
    display: flex;
    justify-content: flex-end;
    margin: 56rpx 0 0 44rpx;
  }
  .mod1 {
    z-index: 10;
    width: 112rpx;
    height: 112rpx;
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 100%;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng02f02f6de52785d6b1ba5bc8efc342bdc434ace5b7ca0a74770210f4afc81f95) -4rpx -4rpx
      no-repeat;
    background-size: 108rpx 108rpx;
    display: flex;
    flex-direction: column;
    margin: -6rpx 0 0 -6rpx;
  }
  .mod2 {
    z-index: auto;
    width: 272rpx;
    height: 86rpx;
    display: flex;
    flex-direction: column;
    margin: 8rpx 0 0 10rpx;
  }
  .box1 {
    z-index: auto;
    width: 272rpx;
    height: 48rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .txt2 {
    z-index: 27;
    width: 136rpx;
    height: 48rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
  }
  .main2 {
    z-index: 32;
    height: 30rpx;
    background: url("../../static/images/huiyuan/pic_xing.png") 0rpx -4rpx no-repeat;
    background-size: 134rpx 36rpx;
    margin-top: 10rpx;
    width: 132rpx;
    justify-content: center;
    align-items: flex-end;
    padding-right: 6rpx;
    display: flex;
    flex-direction: column;
  }
  .info1 {
    z-index: 36;
    width: 90rpx;
    height: 26rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(254, 159, 12, 1);
    font-size: 18rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 26rpx;
    text-align: left;
  }
  .box2 {
    z-index: auto;
    width: 224rpx;
    height: 34rpx;
    margin-top: 4rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .word2 {
    z-index: 28;
    width: 164rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(187, 187, 187, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .info2 {
    z-index: 29;
    width: 48rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(243, 224, 185, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .mod3 {
    z-index: auto;
    width: 146rpx;
    height: 96rpx;
    display: flex;
    flex-direction: column;
    margin: 6rpx 0 0 136rpx;
  }
  .block1 {
    z-index: 77;
    height: 48rpx;
    border-radius: 24rpx;
    background: linear-gradient(227deg, #cbb088 0%, #ab8a64 100%);
    width: 146rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .txt3 {
    z-index: 78;
    width: 52rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
  }
  .block2 {
    z-index: auto;
    width: 128rpx;
    height: 34rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 14rpx 0 0 10rpx;
  }
  .label2 {
    z-index: 72;
    width: 24rpx;
    height: 24rpx;
    margin-top: 6rpx;
  }
  .info3 {
    z-index: 30;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(243, 224, 185, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }

  .layer3 {
    z-index: 41;
    height: 124rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.08);
    width: 702rpx;
    justify-content: center;
    align-items: center;
    margin: -88rpx auto 0;
    display: flex;
    flex-direction: column;
  }
  .outer5 {
    z-index: auto;
    width: 442rpx;
    height: 90rpx;
    flex-direction: row;
    display: flex;
  }
  .main4 {
    z-index: auto;
    width: 78rpx;
    height: 90rpx;
    display: flex;
    flex-direction: column;
  }
  .bd8 {
    z-index: 68;
    width: 78rpx;
    height: 44rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    font-size: 0rpx;
  }
  .word9 {
    font-size: 28rpx;
    font-family: DINAlternate-Bold;
    color: rgba(254, 159, 12, 1);
    line-height: 44rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .txt11 {
    font-size: 44rpx;
    font-family: DINAlternate-Bold;
    color: rgba(254, 159, 12, 1);
    line-height: 44rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word10 {
    z-index: 66;
    width: 78rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    margin-top: 2rpx;
  }
  .main5 {
    z-index: 70;
    width: 2rpx;
    height: 86rpx;
    border-right: 2rpx solid #f3f3f3;
    display: flex;
    flex-direction: column;
    margin: 2rpx 0 0 136rpx;
  }
  .main6 {
    z-index: auto;
    width: 104rpx;
    height: 90rpx;
    margin-left: 122rpx;
    display: flex;
    flex-direction: column;
  }
  .main7 {
    z-index: 69;
    width: 98rpx;
    height: 44rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    align-self: flex-start;
    font-size: 0rpx;
  }
  .word11 {
    font-size: 28rpx;
    font-family: DINAlternate-Bold;
    color: rgba(254, 159, 12, 1);
    line-height: 44rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word12 {
    font-size: 44rpx;
    font-family: DINAlternate-Bold;
    color: rgba(254, 159, 12, 1);
    line-height: 44rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word13 {
    z-index: 71;
    width: 104rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    margin-top: 2rpx;
  }

  .bd2 {
    z-index: auto;
    height: 44rpx;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 52rpx 0 0 0;
  }
  .label3 {
    z-index: 199;
    width: 32rpx;
    height: 32rpx;
    margin-right: 6rpx;
  }
  .txt4 {
    z-index: 67;
    width: 390rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }

  .bd3 {
    z-index: 80;
    height: 156rpx;
    border-radius: 20rpx;
    overflow: hidden;
    background: url("../../static/images/huiyuan/banner.png") no-repeat;
    background-size: 702rpx 156rpx;
    background-position: center;
    align-self: center;
    margin: 16rpx auto 0;
    width: 702rpx;
    justify-content: center;
    align-items: flex-start;

    position: relative;
    display: flex;
    flex-direction: column;
  }

  .bd4 {
    z-index: 43;
    height: 228rpx;
    border-radius: 24rpx;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.04);
    align-self: center;
    margin: 16rpx auto 0;
    width: 702rpx;
    justify-content: flex-start;
    padding-top: 20rpx;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .layer2 {
    z-index: auto;
    width: 646rpx;
    height: 184rpx;
    display: flex;
    flex-direction: column;
  }
  .block3 {
    z-index: auto;
    width: 646rpx;
    height: 48rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .txt5 {
    z-index: 55;
    width: 136rpx;
    height: 48rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
  }
  .main3 {
    z-index: 53;
    height: 48rpx;
    border-radius: 24rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    width: 136rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .word3 {
    z-index: 54;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .block4 {
    z-index: 52;
    width: 646rpx;
    height: 2rpx;
    border-bottom: 2rpx solid #f3f3f3;
    background-size: 646rpx 4rpx;
    margin-top: 20rpx;
    display: flex;
    flex-direction: column;
  }
  .block5 {
    z-index: auto;
    /* width: 622rpx; */
    height: 88rpx;
    flex-direction: row;
    display: flex;
    margin: 26rpx 0 0 2rpx;
    align-items: center;
    justify-content: space-between;
  }
  .bd5-0 {
    z-index: auto;

    height: 88rpx;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .section1-0 {
    z-index: auto;
    position: relative;
    flex: 1;
    height: 88rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .word4-0 {
    z-index: 44;
    position: absolute;
    left: 32rpx;
    top: 0rpx;
    width: 66rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 114, 1, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
  }
  .word6-0 {
    z-index: 48;
    width: 130rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
    margin-top: 52rpx;
  }
  .bd5-1 {
    z-index: auto;
    width: 130rpx;
    height: 88rpx;
    margin-right: 56rpx;
    display: flex;
    flex-direction: column;
  }
  .section1-1 {
    z-index: auto;
    position: relative;
    width: 130rpx;
    height: 88rpx;
    display: flex;
    flex-direction: column;
  }
  .word4-1 {
    z-index: 44;
    position: absolute;
    left: 32rpx;
    top: 0rpx;
    width: 66rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 114, 1, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
  }
  .word6-1 {
    z-index: 48;
    width: 130rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
    margin-top: 52rpx;
  }
  .bd5-2 {
    z-index: auto;
    width: 130rpx;
    height: 88rpx;
    margin-right: 56rpx;
    display: flex;
    flex-direction: column;
  }
  .section1-2 {
    z-index: auto;
    position: relative;
    width: 130rpx;
    height: 88rpx;
    display: flex;
    flex-direction: column;
  }
  .word4-2 {
    z-index: 44;
    position: absolute;
    left: 32rpx;
    top: 0rpx;
    width: 66rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 114, 1, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
  }
  .word6-2 {
    z-index: 48;
    width: 130rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
    margin-top: 52rpx;
  }
  .bd5-3 {
    z-index: auto;
    width: 130rpx;
    height: 88rpx;
    margin-right: 56rpx;
    display: flex;
    flex-direction: column;
  }
  .section1-3 {
    z-index: auto;
    position: relative;
    width: 130rpx;
    height: 88rpx;
    display: flex;
    flex-direction: column;
  }
  .word5-3 {
    z-index: 47;

    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 114, 1, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
  }
  .word6-3 {
    z-index: 48;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
  }

  .bd6 {
    z-index: 57;
    height: 228rpx;
    border-radius: 24rpx;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.04);
    align-self: center;
    margin: 16rpx auto 0;
    width: 702rpx;
    justify-content: flex-start;
    padding-top: 20rpx;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .bd7 {
    z-index: auto;
    width: 646rpx;
    height: 184rpx;
    display: flex;
    flex-direction: column;
  }
  .txt6 {
    z-index: 65;
    width: 102rpx;
    height: 48rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
    align-self: flex-start;
  }
  .box3 {
    z-index: 64;
    width: 646rpx;
    height: 2rpx;
    border-bottom: 2rpx solid #f3f3f3;
    background-size: 646rpx 4rpx;
    margin-top: 20rpx;
    display: flex;
    flex-direction: column;
  }
  .box4 {
    z-index: auto;
    width: 612rpx;
    height: 50rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 26rpx 0 0 26rpx;
  }
  .box5 {
    z-index: 58;
    width: 134rpx;
    height: 50rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    font-size: 0rpx;
  }
  .word7 {
    font-size: 28rpx;
    font-family: PingFangSC-Semibold;
    color: rgba(255, 114, 1, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info4 {
    font-size: 36rpx;
    font-family: PingFangSC-Semibold;
    color: rgba(255, 114, 1, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .box6 {
    z-index: 59;
    width: 128rpx;
    height: 50rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    font-size: 0rpx;
  }
  .info5 {
    font-size: 28rpx;
    font-family: PingFangSC-Semibold;
    color: rgba(255, 114, 1, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .txt7 {
    font-size: 36rpx;
    font-family: PingFangSC-Semibold;
    color: rgba(255, 114, 1, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .box7 {
    z-index: 60;
    width: 150rpx;
    height: 50rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    font-size: 0rpx;
  }
  .word8 {
    font-size: 28rpx;
    font-family: PingFangSC-Semibold;
    color: rgba(255, 114, 1, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .txt8 {
    font-size: 36rpx;
    font-family: PingFangSC-Semibold;
    color: rgba(255, 114, 1, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .box8 {
    z-index: auto;
    width: 588rpx;
    height: 36rpx;
    flex-direction: row;
    display: flex;
    margin: 2rpx 0 0 28rpx;
  }
  .info6 {
    z-index: 61;
    width: 130rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
  }
  .txt9 {
    z-index: 62;
    width: 104rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
    margin-left: 114rpx;
  }
  .txt10 {
    z-index: 63;
    width: 104rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
    margin-left: 136rpx;
  }
`;

export const ZhongHuo = styled(View)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 222;
  display: flex;
  align-items: center;
  justify-content: center;

  .block1 {
    z-index: 209;
    height: 802rpx;
    border-radius: 12rpx;
    background-color: rgba(255, 255, 255, 1);
    width: 616rpx;
    justify-content: flex-start;
    padding-top: 28rpx;
    display: flex;
    flex-direction: column;
  }
  .layer6 {
    z-index: auto;
    width: 616rpx;
    height: 724rpx;
    display: flex;
    flex-direction: column;
  }
  .mod7 {
    z-index: auto;
    width: 310rpx;
    height: 44rpx;
    margin-left: 276rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .word17 {
    z-index: 217;
    width: 64rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .label3 {
    z-index: 214;
    width: 32rpx;
    height: 32rpx;
    margin-top: 6rpx;
  }
  .word18 {
    z-index: 218;
    width: 130rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    align-self: flex-start;
    margin: 26rpx 0 0 38rpx;
  }
  .mod8 {
    z-index: auto;
    width: 548rpx;
    height: 48rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 6rpx 0 0 38rpx;
  }
  .layer7 {
    z-index: 221;
    width: 100rpx;
    height: 44rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    margin-top: 2rpx;
    font-size: 0rpx;
  }
  .word19 {
    font-size: 34rpx;
    font-family: PingFangSC-Semibold;
    color: rgba(255, 114, 1, 1);
    line-height: 44rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .txt8 {
    font-size: 44rpx;
    font-family: PingFangSC-Semibold;
    color: rgba(255, 114, 1, 1);
    line-height: 44rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .layer8 {
    z-index: 212;
    height: 48rpx;
    border-radius: 24rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    width: 150rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .txt9 {
    z-index: 213;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .mod9 {
    z-index: 210;
    width: 616rpx;
    height: 4rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfdc1f8df4b12ab55475ca43e40b6d481ba1c55700017b6d9f9a94ac05746a01a)
      100% no-repeat;
    margin-top: 32rpx;
    display: flex;
    flex-direction: column;
  }
  .txt10 {
    z-index: 219;
    width: 112rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    align-self: flex-start;
    margin: 22rpx 0 0 38rpx;
  }
  .paragraph1 {
    z-index: 220;
    width: 552rpx;
    height: 440rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    line-height: 44rpx;
    text-align: left;
    align-self: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 14rpx 26rpx 0 0;
  }
`;

export const DianZhang = styled(View)`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 222;
  display: flex;
  align-items: center;
  justify-content: center;

  .layer4 {
    z-index: 209;
    height: 428rpx;
    border-radius: 12rpx;
    background-color: rgba(255, 255, 255, 1);
    width: 616rpx;
    justify-content: flex-end;
    padding-bottom: 20rpx;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .outer7 {
    z-index: auto;
    width: 566rpx;
    height: 380rpx;
    display: flex;
    flex-direction: column;
  }
  .outer8 {
    z-index: auto;
    width: 358rpx;
    height: 44rpx;
    margin-left: 204rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .txt6 {
    z-index: 227;
    width: 160rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .label2 {
    z-index: 224;
    width: 32rpx;
    height: 32rpx;
    margin-top: 6rpx;
  }
  .txt7 {
    z-index: 228;
    width: 140rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(51, 51, 51, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    align-self: flex-start;
    margin: 26rpx 0 0 14rpx;
  }
  .word16 {
    z-index: 229;
    width: 408rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    align-self: flex-start;
    margin: 2rpx 0 0 14rpx;
  }
  .outer9 {
    z-index: 211;
    height: 72rpx;
    border-radius: 8rpx;
    background-color: rgba(241, 241, 241, 1);
    align-self: center;
    margin-top: 26rpx;
    width: 540rpx;
    /* justify-content: center; */
    align-items: center;
    padding-left: 18rpx;
    display: flex;

    position: relative;
  }
  .layer5 {
    z-index: auto;
    width: 184rpx;
    height: 44rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .label3 {
    z-index: 212;
    width: 32rpx;
    height: 32rpx;
    margin-top: 6rpx;
  }
  .word17 {
    z-index: 220;
    width: 140rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .outer10 {
    z-index: 222;
    height: 80rpx;
    border-radius: 8rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    margin-top: 42rpx;
    width: 566rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .txt8 {
    z-index: 223;
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
  .code {
    z-index: 211;
    height: 72rpx;
    border-radius: 8rpx;
    background-color: rgba(241, 241, 241, 1);
    align-self: center;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding-left: 32rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #cccccc;
  }
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
