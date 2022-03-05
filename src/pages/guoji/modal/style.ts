import { styled } from "linaria/react";
import { View } from "@tarojs/components";

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

  .section9 {
    z-index: 223;
    min-height: 902rpx;
    border-radius: 12rpx;
    background-color: rgba(255, 255, 255, 1);
    width: 614rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .mod9 {
    z-index: auto;
    width: 574rpx;
    min-height: 850rpx;
    display: flex;
    flex-direction: column;
  }
  .info7 {
    z-index: 117;
    width: 138rpx;
    height: 44rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: left;
    align-self: flex-start;
    margin-left: 214rpx;
  }
  .paragraph2 {
    z-index: 118;
    width: 564rpx;
    min-height: 660rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(136, 136, 136, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    line-height: 44rpx;
    text-align: left;
    align-self: flex-end;
    margin-top: 26rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .box4 {
    z-index: 115;
    height: 80rpx;
    border-radius: 8rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    margin-top: 40rpx;
    width: 566rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .txt11 {
    z-index: 116;
    width: 90rpx;
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
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
