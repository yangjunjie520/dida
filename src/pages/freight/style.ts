import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const StyledOverview = styled(View)`
    min-height: 100vh;
    background: #F7F7F7;
  .mod1 {
    z-index: 2;
    height: 260rpx;
    background: linear-gradient(133deg, #ff9433 0%, rgba(255, 196, 86, 0.5) 100%);
    justify-content: flex-start;
    padding-top: 4rpx;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .section1 {
    z-index: auto;
    width: 702rpx;
    height: 232rpx;
    display: flex;
    flex-direction: column;
  }
  .layer1 {
    z-index: auto;
    width: 680rpx;
    height: 42rpx;
    margin-left: 12rpx;
    flex-direction: row;
    display: flex;
  }

  .layer2 {
    z-index: auto;
    width: 394rpx;
    height: 54rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 14rpx 0 0 298rpx;
  }
  .word1 {
    z-index: 30;
    width: 108rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
    margin-top: 2rpx;
  }

  .layer3 {
    z-index: 24;
    height: 76rpx;
    border-radius: 38rpx;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 46rpx;

    justify-content: center;
    align-items: flex-start;
    padding: 0 24rpx;
    position: relative;
    margin-left: 0;

    .at-input__container {
      height: 76rpx;
    }
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
  .mod3 {
    z-index: 33;
    width: 48rpx;
    height: 6rpx;
    border-radius: NaNrpx;
    background-color: rgba(255, 114, 1, 1);
    box-shadow: 0px 2px 4px 0px rgba(255, 114, 0, 0.7);
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    margin: 8rpx 0 0 234rpx;
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

  .list {
    padding: 24rpx;
  }

  .mod4 {
    z-index: 35;
    height: 500rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 20px 0px rgba(119, 119, 119, 0.05);
    align-self: center;
    margin-top: 24rpx;
    width: 702rpx;
    justify-content: center;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .outer2 {
    z-index: auto;
    width: 702rpx;
    height: 464rpx;
    display: flex;
    flex-direction: column;
  }
  .layer6 {
    z-index: auto;
    width: 352rpx;
    height: 40rpx;
    margin-left: 24rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .word4 {
    z-index: 52;
    width: 314rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(184, 184, 184, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .icon1 {
    z-index: 42;
    width: 30rpx;
    height: 30rpx;
    margin-top: 6rpx;
  }
  .layer7 {
    z-index: 64;
    width: 702rpx;
    height: 4rpx;
    margin-top: 18rpx;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #f3f3f3;
  }
  .layer8 {
    z-index: auto;
    width: 484rpx;
    height: 50rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 38rpx 0 0 110rpx;
  }
  .word5 {
    z-index: 53;
    width: 84rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(184, 184, 184, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 10rpx;
  }
  .txt1 {
    z-index: 61;
    width: 90rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(98, 98, 110, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .info3 {
    z-index: 58;
    width: 84rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(184, 184, 184, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 10rpx;
  }
  .layer9 {
    z-index: auto;
    width: 502rpx;
    height: 48rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 4rpx 0 0 100rpx;
  }
  .txt2 {
    z-index: 62;
    width: 102rpx;
    height: 48rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
  }
  .img1 {
    z-index: 36;
    width: 152rpx;
    height: 10rpx;
    margin-top: 20rpx;
  }
  .info4 {
    z-index: 63;
    width: 102rpx;
    height: 48rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
  }
  .layer10 {
    z-index: auto;
    width: 652rpx;
    height: 72rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 40rpx 0 0 24rpx;
  }
  .info5 {
    z-index: 54;
    width: 78rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(184, 184, 184, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
  }
  .layer11 {
    z-index: 56;
    width: 554rpx;
    height: 72rpx;
    overflow-wrap: break-word;
    text-align: left;
    font-size: 0rpx;
  }
  .info6 {
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    color: rgba(184, 184, 184, 1);
    line-height: 36rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .paragraph1 {
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    color: rgba(98, 98, 110, 1);
    line-height: 36rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .layer12 {
    z-index: auto;
    width: 378rpx;
    height: 36rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 14rpx 0 0 24rpx;
  }
  .word6 {
    z-index: 55;
    width: 104rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(184, 184, 184, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
  }
  .word7 {
    z-index: 57;
    width: 254rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(98, 98, 110, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
  }
  .layer13 {
    z-index: 65;
    width: 702rpx;
    height: 4rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1beebaa12aa79a057b9888fe8d0f9033ebf723b88d538380cbcf609edc5af39b)
      100% no-repeat;
    margin-top: 26rpx;
    display: flex;
    flex-direction: column;
  }
  .layer14 {
    z-index: auto;
    width: 358rpx;
    height: 56rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 14rpx 0 0 320rpx;
  }
  .box2 {
    z-index: 67;
    width: 200rpx;
    height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid rgba(238, 238, 238, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box3 {
    z-index: 66;
    width: 142rpx;
    height: 56rpx;
    border-radius: 28rpx;
    border: 1px solid rgba(238, 238, 238, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .word8 {
    z-index: 60;

    overflow-wrap: break-word;
    color: rgba(98, 98, 110, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
  }
  .txt3 {
    display: block;
    overflow-wrap: break-word;
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    text-align: left;
    color: #fe7100;
  }
`

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${props => props.height || 200}px;
  }
`
