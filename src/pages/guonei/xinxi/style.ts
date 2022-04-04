import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverView = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24rpx 200rpx;

  .mod6 {
    z-index: 75;
    height: 200rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    width: 702rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .layer1 {
    z-index: auto;
    width: 646rpx;
    height: 290rpx;
    display: flex;
    flex-direction: column;
  }
  .mod7 {
    margin-top: 32rpx;
    z-index: auto;
    width: 200rpx;
    height: 44rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .info2 {
    z-index: 97;
    width: 128rpx;
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
  .mod8 {
    z-index: 95;
    height: 32rpx;
    border-radius: 4rpx;
    background-color: rgba(255, 230, 190, 1);
    margin-top: 6rpx;
    width: 64rpx;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .word2 {
    z-index: 96;
    width: 40rpx;
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
  .mod9 {
    z-index: auto;
    width: 646rpx;
    height: 72rpx;
    margin-top: 26rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .layer {
    display: flex;
    flex: 1;
    position: relative;
  }
  .layer2 {
    z-index: 77;
    height: 72rpx;
    border-radius: 36rpx;
    background-color: rgba(241, 241, 241, 1);
    width: 468rpx;
    justify-content: center;
    align-items: flex-start;
    /* padding-left: 36rpx; */
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    text-indent: 80rpx;
    padding: 0 24rpx;
  }
  .outer2 {
    z-index: auto;
    width: 240rpx;
    height: 44rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .wrap1 {
    z-index: 78;
    width: 32rpx;
    height: 32rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6ee6885c943d88113a7b4230d497cbaae7fad1bcc4118f167374a5f26935c7dc)
      100% no-repeat;
    margin-top: 6rpx;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 36rpx;
    top: 20rpx;
  }
  .info3 {
    z-index: 81;
    width: 196rpx;
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
  .layer3 {
    z-index: 94;
    height: 72rpx;
    border-radius: 36rpx;
    background-color: rgba(255, 114, 1, 1);
    width: 162rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .txt1 {
    z-index: 98;
    width: 56rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .mod10 {
    z-index: auto;
    width: 646rpx;
    height: 126rpx;
    margin-top: 22rpx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .outer3 {
    z-index: 82;
    height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid rgba(238, 238, 238, 1);
    background-color: rgba(255, 255, 255, 1);
    width: 200rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 0 14rpx 0;
  }
  .word3 {
    z-index: 88;
    /* width: 56rpx; */
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .outer4 {
    z-index: 84;
    height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid rgba(238, 238, 238, 1);
    background-color: rgba(255, 255, 255, 1);
    width: 200rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 22rpx 14rpx 0;
  }
  .info4 {
    z-index: 90;
    width: 112rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .outer5 {
    z-index: 86;
    height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid rgba(238, 238, 238, 1);
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 14rpx;
    width: 200rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .txt2 {
    z-index: 92;
    width: 84rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .outer6 {
    z-index: 83;
    height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid rgba(238, 238, 238, 1);
    background-color: rgba(255, 255, 255, 1);
    width: 200rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 24rpx 14rpx 0;
  }
  .info5 {
    z-index: 89;
    width: 112rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .outer7 {
    z-index: 85;
    height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid rgba(238, 238, 238, 1);
    background-color: rgba(255, 255, 255, 1);
    width: 200rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 22rpx 14rpx 0;
  }
  .word4 {
    z-index: 91;
    width: 56rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .outer8 {
    z-index: 87;
    height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid rgba(238, 238, 238, 1);
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 14rpx;
    width: 200rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .word5 {
    z-index: 93;
    width: 56rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }

  .mod11 {
    z-index: 27;
    height: 108rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    width: 702rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .main1 {
    z-index: auto;
    width: 650rpx;
    height: 60rpx;
    flex-direction: row;
    display: flex;
  }
  .txt3 {
    z-index: 29;
    width: 96rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    margin-top: 8rpx;
  }
  .info6 {
    z-index: 30;
    width: 36rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
    margin: 4rpx 0 0 160rpx;
  }
  .modInp {
    position: relative;
  }
  .mod12 {
    z-index: 28;
    height: 60rpx;
    border-radius: 4rpx;
    background-color: rgba(241, 241, 241, 1);
    margin-left: 16rpx;
    width: 302rpx;
    justify-content: center;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: center;
  }
  .main2 {
    z-index: auto;
    width: 176rpx;
    height: 44rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .word6 {
    z-index: 31;
    width: 40rpx;
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
  .txt4 {
    z-index: 32;
    width: 42rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(187, 187, 187, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 2rpx;
    position: absolute;
    top: 10rpx;
    right: 10rpx;
  }
  .word7 {
    z-index: 33;
    width: 36rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
    margin: 4rpx 0 0 24rpx;
  }

  .mod13 {
    z-index: 56;
    height: 300rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    width: 702rpx;
    justify-content: center;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    padding: 0;
    align-items: center;
  }
  .wrap2 {
    z-index: auto;
    width: 656rpx;
    /* height: 252rpx; */
    height: 192rpx;
    display: flex;
    flex-direction: column;
  }
  .bd1 {
    z-index: auto;
    width: 650rpx;
    height: 60rpx;
    flex-direction: row;
    display: flex;
  }
  .word8 {
    z-index: 62;
    width: 96rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    margin-top: 8rpx;
  }
  .info7 {
    z-index: 63;
    width: 36rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
    margin: 4rpx 0 0 160rpx;
  }
  .bd2 {
    z-index: 61;
    height: 60rpx;
    border-radius: 4rpx;
    background-color: rgba(241, 241, 241, 1);
    margin-left: 16rpx;
    width: 282rpx;
    justify-content: center;
    align-items: flex-end;
    padding-right: 12rpx;
    display: flex;
    flex-direction: column;
  }
  .main3 {
    z-index: auto;
    width: 186rpx;
    height: 44rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .txt5 {
    z-index: 64;
    width: 62rpx;
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
  .info8 {
    z-index: 72;
    width: 40rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(187, 187, 187, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 2rpx;
  }
  .info9 {
    z-index: 73;
    width: 36rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
    margin: 4rpx 0 0 24rpx;
  }
  .bd3 {
    z-index: 57;
    height: 86rpx;
    background-color: rgba(247, 247, 247, 1);
    align-self: flex-start;
    margin-top: 22rpx;
    width: 646rpx;
    justify-content: center;
    align-items: flex-start;
    padding-left: 16rpx;
    display: flex;
    flex-direction: column;
  }
  .bd4 {
    z-index: auto;
    width: 586rpx;
    height: 50rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .wrap3 {
    z-index: 58;
    height: 50rpx;
    background-color: rgba(255, 255, 255, 1);
    width: 112rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    line-height: 50rpx;
  }
  .word9 {
    z-index: 65;

    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;

    text-align: left;
  }
  .wrap4 {
    z-index: 68;
    width: 72rpx;
    height: 40rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    margin-top: 4rpx;
    font-size: 0rpx;
  }
  .info10 {
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    color: rgba(170, 170, 170, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word10 {
    font-size: 28rpx;
    font-family: Menlo-Regular;
    color: rgba(170, 170, 170, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .wrap5 {
    z-index: 59;
    height: 50rpx;
    background-color: rgba(255, 255, 255, 1);
    width: 112rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .word11 {
    z-index: 66;
    width: 28rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .wrap6 {
    z-index: 70;
    width: 72rpx;
    height: 40rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    margin-top: 4rpx;
    font-size: 0rpx;
  }
  .txt6 {
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    color: rgba(170, 170, 170, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word12 {
    font-size: 28rpx;
    font-family: Menlo-Regular;
    color: rgba(170, 170, 170, 1);
    line-height: 40rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .wrap7 {
    z-index: 60;
    height: 50rpx;
    background-color: rgba(255, 255, 255, 1);
    width: 112rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .info11 {
    z-index: 67;
    width: 28rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .info12 {
    z-index: 71;
    width: 46rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(170, 170, 170, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 4rpx;
  }
  .paragraph1 {
    z-index: 69;
    width: 656rpx;
    height: 68rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    line-height: 34rpx;
    text-align: left;
    margin-top: 16rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mod15 {
    z-index: 43;
    height: 408rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    width: 702rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .mod16 {
    z-index: auto;
    width: 646rpx;
    height: 344rpx;
    display: flex;
    flex-direction: column;
  }
  .main5 {
    z-index: auto;
    width: 646rpx;
    height: 44rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .word15 {
    z-index: 53;
    width: 192rpx;
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
  .txt9 {
    z-index: 54;
    width: 260rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-top: 6rpx;
  }
  .main6 {
    z-index: 50;
    height: 214rpx;
    border-radius: 12rpx;
    background-color: rgba(241, 241, 241, 1);
    margin-top: 20rpx;
    width: 646rpx;
    display: flex;
    flex-direction: column;
  }
  .bd5 {
    z-index: auto;
    width: 238rpx;
    height: 40rpx;
    flex-direction: row;
    display: flex;
    margin: 20rpx 0 0 20rpx;
  }
  .word16 {
    z-index: 51;
    display: block;
    overflow-wrap: break-word;
    color: rgba(170, 170, 170, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    padding: 20rpx;
    width: 608rpx;
  }
  .bd6 {
    z-index: auto;
    width: 72rpx;
    height: 36rpx;
    flex-direction: row;
    display: flex;
    margin: 106rpx 0 0 554rpx;
  }
  .txt10 {
    z-index: 52;
    width: 72rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(170, 170, 170, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
  }
  .main7 {
    z-index: auto;
    width: 388rpx;
    height: 48rpx;
    margin-top: 18rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .box1 {
    z-index: 44;
    height: 48rpx;
    border-radius: 8rpx;
    background-color: rgba(241, 241, 241, 1);
    width: 124rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .info14 {
    z-index: 47;
    width: 96rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .box2 {
    z-index: 45;
    height: 48rpx;
    border-radius: 8rpx;
    background-color: rgba(241, 241, 241, 1);
    width: 124rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .txt11 {
    z-index: 48;
    width: 96rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .box3 {
    z-index: 46;
    height: 48rpx;
    border-radius: 8rpx;
    background-color: rgba(241, 241, 241, 1);
    width: 124rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .word17 {
    z-index: 49;
    width: 96rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
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
  .info2s {
    z-index: 7;

    display: block;
    overflow-wrap: break-word;
    color: #ffffff;
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
  }
  .active {
    z-index: 76;
    height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid rgba(255, 114, 1, 1);
    background-color: rgba(255, 255, 255, 1);
    margin-top: 26rpx;
    width: 200rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .ac-text {
    z-index: 77;
    width: 84rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 114, 1, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .label2 {
    z-index: 81;
    position: absolute;
    right: -12rpx;
    top: -12rpx;
    width: 36rpx;
    height: 36rpx;
  }
  .r-active {
    border: 2rpx solid #ff7201;
    box-sizing: border-box;
    .r {
      color: #ff7201;
    }
  }
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
