import { styled } from 'linaria/react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

export const StyledOverview = styled(View)`
  background: #f5f7fd;
  border-radius: 12px;
  box-shadow: 0px 4px 6px -4px rgba(228, 228, 240, 1);
  .overview-tit {
    font-size: 12px;
    font-weight: 600;
    color: #151741;
    font-family: SFProText-Semibold;
  }
  .at-row-top {
    margin: 16px 0 16px 0;
    box-sizing: border-box;
    width: 25%;
    font-weight: 600;
    .value {
      position: absolute;
      font-size: 12px;
      font-family: SFProText-Bold;
    }
    &:not(:nth-child(1)) {
      margin-left: 12px;
    }
  }
  .chart-box {
    overflow: hidden;
    height: 60px;
    .at-col {
      position: relative;
      background: #f5f7fd;
      height: 60px;
    }
    .at-col:not(:last-child) {
      margin-right: 12px;
    }
  }
  .chart-txt {
    margin: 8px 0 21px;
    font-size: 12px;
    width: 25%;
    color: rgba(91, 92, 115, 100);
    font-family: SFProText-Regular;
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
  .table-wrapper {
    background: #fff;
    border-radius: 12px;
    margin-top: 12px;
  }
  // .at-table-display {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   height: 46px;
  //   background: #fff;
  //   box-shadow: inset 0px -0.5px 0px 0px rgba(232, 234, 243, 1);
  //   font-size: 12px;
  //   padding: 0 12px;
  //   margin-top: 10px;
  //   font-family: SFProText-Semibold;
  //   font-weight: 600;
  //   border-radius: 12px 12px 0 0;
  // }

  .overview-wrapper {
    background: #fff;
    padding: 12px 12px 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 6px -4px rgba(228, 228, 240, 1);
  }
`

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${props => props.height || 200}px;
  }
`
