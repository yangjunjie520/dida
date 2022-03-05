import Taro from '@tarojs/taro'
import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const StyledView = styled(View)`
  position: relative;
  .overview-swiper {
    height: 102px;
    min-height: 102px;
    background: #f5f7fd;
    border-radius: 8px;
    padding: 12px;
    box-sizing: border-box;
    .statistics-list {
      box-sizing: border-box;
      .item {
        &:not(:last-child) {
          padding-bottom: 8px;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          color: rgba(91, 92, 115, 100);
          font-size: 14px;
          font-family: SFProText-Regular;
        }
        .right {
          display: flex;
          justify-content: center;
          text {
            color: rgba(21, 23, 65, 100);
            font-size: 14px;
            font-family: SFProText-Bold;
            font-weight: 900;
            margin-left: 6px;
          }
          view {
            width: 54px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            color: #fff;
            border-radius: 10px;
            font-family: SFProText-Bold;
            font-weight: 900;
            font-size: 10px;
          }
        }
      }
    }
  }
  .swiper-dot-box {
    display: flex;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    bottom: -10px;
    .swiper-dot {
      width: 3px;
      height: 3px;
      border-radius: 3px;
      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
`
export const StyledChartCol = styled.view<{ color: string }>`
  position: absolute;
  width: 100%;
  bottom: 0;
  background: ${props => props.color};
  height: ${props => Taro.pxTransform(props.height || 0)};
  &::after {
    content: '';
    width: 12px;
    height: 60px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    transform-origin: 0% 50%;
    transform: translate(100%, 0) skewY(${props => props.deg}deg);
    background: #dee5f7;
  }
`

export const StyledChartTxt = styled.view<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 2px;
  margin-right: 4px;
`
