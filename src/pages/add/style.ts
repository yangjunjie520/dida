import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const StyledOverview = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;
  padding-top: 16rpx;
  display: flex;
  align-items: center;
  flex-direction: column;
  .layer2 {
    z-index: 3;
    height: 156rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;

    width: 702rpx;
    display: flex;
    flex-direction: column;
  }
  .block1 {
    z-index: auto;
    width: 504rpx;
    height: 44rpx;
    flex-direction: row;
    display: flex;
    margin: 22rpx 0 0 24rpx;
  }
  .word3 {
    z-index: 7;
    width: 504rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(187, 187, 187, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
  }
  .block2 {
    z-index: auto;
    width: 654rpx;
    height: 48rpx;
    flex-direction: row;
    display: flex;
    margin: 30rpx 0 0 24rpx;
  }
  .label3 {
    z-index: 29;
    width: 36rpx;
    height: 36rpx;
    margin-top: 6rpx;
  }
  .word4 {
    z-index: 8;
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
    margin: 2rpx 0 0 4rpx;
  }
  .section2 {
    z-index: 5;
    height: 48rpx;
    border-radius: 24rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    margin-left: 382rpx;
    width: 136rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .word5 {
    z-index: 6;
    width: 48rpx;
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

  .layer3 {
    z-index: 39;
    height: 560rpx;
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
    height: 502rpx;
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
`

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${props => props.height || 200}px;
  }
`
