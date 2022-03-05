import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const StyledOverview = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;
  .header {
    height: 78rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .select {
    font-size: 30rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #323546;
    margin-right: 12rpx;
  }

  .info {
    padding: 0 24rpx;
  }
  .time {
    height: 72rpx;

    line-height: 44rpx;
    display: flex;
    align-items: flex-end;
  }
  .yer {
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #323546;
  }
  .moon {
    font-size: 50rpx;
  }
  .money {
    height: 40rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #888888;
    line-height: 40rpx;
  }

  .list {
    width: 702rpx;
    margin: 24rpx auto 0;
  }

  .left {
    flex: 1;
    flex-direction: column;
    display: flex;
  }
  .item {
    height: 152rpx;
    padding: 0 28rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background: #fff;
  }

  .tit {
    height: 42rpx;
    font-size: 30rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #323546;
    line-height: 42rpx;
  }
  .riqi {
    height: 40rpx;
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #888888;
    line-height: 40rpx;
  }
  .qian {
    height: 50rpx;
    font-size: 36rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #323546;
    line-height: 50rpx;
    width: 200rpx;
    text-align: right;
  }

  .borderb {
    width: 646rpx;
    height: 2rpx;
    border-bottom: 2rpx solid #f3f3f3;
    position: absolute;
    bottom: 0;
  }
  .radus-t {
    border-radius: 16rpx 16rpx 0 0;
  }
  .radus-b {
    border-radius: 0 0 16rpx 16rpx;
  }

  .mask {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
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
`

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${props => props.height || 200}px;
  }
`
