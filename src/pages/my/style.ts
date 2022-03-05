import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const StyledOverview = styled(View)`
  .scrollview {
    height: 100vh;
    background: #ffffff;
  }

  .layer9 {
    width: 750rpx;
    height: 332rpx;
    background-image: url('../../static/images/my/pic_bg_2.png');
    background-repeat: no-repeat;
    background-size: 750rpx 332rpx;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -86rpx;
  }

  .photo {
    width: 172rpx;
    height: 172rpx;
    border-radius: 50%;
    background: blue;
  }
  .phone {
    height: 50rpx;
    font-size: 36rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 50rpx;
    margin-top: 32rpx;
  }

  .list {
    margin-top: 64rpx;
  }

  .item {
    height: 96rpx;
    padding: 0 36rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left{
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 36rpx;
    height: 36rpx;
    margin-right: 32rpx;
  }
  .text {

    height: 44rpx;
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #323546;
    line-height: 44rpx;
  }

  .right{
    width: 48rpx;
    height: 48rpx;
  }
`

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${props => props.height || 200}px;
  }
`
