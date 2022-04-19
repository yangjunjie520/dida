import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverView = styled(View)`
  background: #f7f7f7;

  .scrollview {
    height: 100vh;
  }

  .section1 {
    z-index: 2;
    height: 484rpx;
    background: url("../../../static/images/my/pic_bg_2.png") no-repeat;
    background-position: center;
    background-size: 750rpx 484rpx;
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
    z-index: 79;
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
    z-index: 74;
    width: 34rpx;
    height: 22rpx;
    margin: 8rpx 0 0 438rpx;
  }

  .icon1 {
    z-index: 66;
    width: 50rpx;
    height: 24rpx;
    margin: 6rpx 0 0 8rpx;
  }
  .main2s {
    z-index: auto;
    width: 696rpx;
    height: 54rpx;
    flex-direction: row;
    display: flex;
    margin: 14rpx 0 0 20rpx;
  }
  .label2 {
    z-index: 62;
    width: 48rpx;
    height: 48rpx;
    margin-top: 6rpx;
  }
  .info2 {
    z-index: 61;
    width: 144rpx;
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
  .section2 {
    z-index: 80;
    width: 156rpx;
    height: 54rpx;
    border-radius: NaNrpx;
    background-color: rgba(0, 0, 0, 0.1);
    margin-left: 338rpx;
    display: flex;
    flex-direction: column;
  }
  .main3 {
    z-index: auto;
    width: 516rpx;
    height: 46rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 54rpx 0 0 116rpx;
  }
  .txt1 {
    z-index: 44;
    width: 84rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(234, 234, 234, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 6rpx;
  }
  .word1 {
    z-index: 58;
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
  .word2 {
    z-index: 45;
    width: 84rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(234, 234, 234, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 6rpx;
  }
  .main4 {
    z-index: auto;
    width: 558rpx;
    height: 58rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 2rpx 0 0 96rpx;
  }
  .info3 {
    z-index: 59;
    width: 126rpx;
    height: 58rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 42rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 58rpx;
    text-align: left;
  }
  .pic1 {
    z-index: 38;
    width: 168rpx;
    height: 12rpx;
    margin-top: 26rpx;
  }
  .info4 {
    z-index: 60;
    width: 126rpx;
    height: 58rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 42rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 58rpx;
    text-align: left;
  }
  .main5 {
    z-index: auto;
    width: 314rpx;
    height: 40rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 24rpx 0 0 40rpx;
  }
  .info5s {
    z-index: 46;

    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(242, 242, 242, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .icon2 {
    z-index: 47;
    width: 30rpx;
    height: 30rpx;
    margin-top: 6rpx;
  }
  .main6 {
    z-index: auto;
    width: 430rpx;
    height: 40rpx;
    flex-direction: row;
    display: flex;
    margin: 4rpx 0 0 40rpx;
  }
  .info6 {
    z-index: 57;
    width: 430rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(242, 242, 242, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }

  /* 运输信息 */

  .box4 {
    z-index: 8;

    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    width: 702rpx;
    margin: -60rpx auto 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 48rpx;
  }
  .mod3 {
    z-index: auto;
    width: 136rpx;
    height: 48rpx;
    flex-direction: row;
    display: flex;
    margin: 40rpx 0 42rpx 43rpx;
  }
  .word14 {
    z-index: 11;
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
  .mod4 {
    z-index: auto;
    width: 470rpx;
    height: 46rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 44rpx 0 0 28rpx;
  }
  .info15 {
    z-index: 14;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 114, 1, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    line-height: 42rpx;
    text-align: left;
    margin-top: 2rpx;
    textoverflow: ellipsis;
    wordwrap: break-word;
    wordbreak: break-all;
  }
  .box5 {
    z-index: 10;
    height: 46rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5001434f8ed08c9ece8352b1a3b561956385502bd750cd266ff3e204689917ee)
      100% no-repeat;
    width: 46rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .info16 {
    z-index: 28;
    width: 24rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word15 {
    z-index: 19;
    width: 302rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    margin-top: 2rpx;
  }
  .mod5 {
    z-index: auto;
    width: 624rpx;

    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 28rpx;
  }
  .mod6 {
    z-index: auto;
    width: 120rpx;
  }
  .word16 {
    z-index: 13;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;

    line-height: 42rpx;
    text-align: left;
    textoverflow: ellipsis;
    wordwrap: break-word;
    wordbreak: break-all;
  }
  .info17 {
    z-index: 12;
    width: 90rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    margin-top: 78rpx;
  }
  .word17 {
    z-index: 15;
    width: 90rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    margin-top: 78rpx;
  }
  .mod7 {
    z-index: auto;
    width: 18rpx;
    /* height: 418rpx; */
    margin-top: 8rpx;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .section8 {
    z-index: 34;
    width: 2rpx;
    height: 110rpx;
    /* background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2e7d218e8df5558733af585aa8bb108b8799fc5255d737edea3308fe68a849ad)
      0rpx 0rpx no-repeat;
    background-size: 2rpx 72rpx; */
    align-self: center;
    display: flex;
    flex-direction: column;
    border-right: 2rpx dotted rgba(193, 193, 193, 1);
  }
  .section9 {
    z-index: 30;
    width: 18rpx;
    height: 18rpx;
    border: 2px solid rgba(193, 193, 193, 1);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: -2rpx;
    z-index: 99;
  }
  .section10 {
    z-index: 33;
    width: 2rpx;
    height: 84rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf69636341c322caac819da4e4fb6f5c5ea15cbc01cbacf784d940cfe65089797)
      0rpx 0rpx no-repeat;
    background-size: 2rpx 86rpx;
    align-self: center;
    margin-top: 10rpx;
    display: flex;
    flex-direction: column;
  }
  .section11 {
    z-index: 29;
    width: 18rpx;
    height: 18rpx;
    border: 2px solid rgba(193, 193, 193, 1);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 100%;
    margin-top: 8rpx;
    display: flex;
    flex-direction: column;
  }
  .section12 {
    z-index: 32;
    width: 2rpx;
    height: 84rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf69636341c322caac819da4e4fb6f5c5ea15cbc01cbacf784d940cfe65089797)
      0rpx 0rpx no-repeat;
    background-size: 2rpx 86rpx;
    align-self: center;
    margin-top: 10rpx;
    display: flex;
    flex-direction: column;
  }
  .section13 {
    z-index: 31;
    width: 18rpx;
    height: 18rpx;
    border: 2px solid rgba(193, 193, 193, 1);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 100%;
    margin-top: 8rpx;
    display: flex;
    flex-direction: column;
  }
  .section14 {
    z-index: 35;
    width: 2rpx;
    height: 72rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng67bd01c7bed494128e8cbaae1010a1d06107a6cebd3bf5f70451417a931b6527)
      0rpx 0rpx no-repeat;
    background-size: 2rpx 74rpx;
    align-self: center;
    margin-top: 10rpx;
    display: flex;
    flex-direction: column;
  }
  .mod8 {
    z-index: auto;
    width: 456rpx;
    display: flex;
    flex-direction: column;
  }
  .word18 {
    z-index: 24;

    /* height: 34rpx; */
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;

    line-height: 34rpx;
    text-align: left;
    align-self: flex-start;
  }
  .word19 {
    z-index: 18;
    width: 302rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 40rpx;
  }
  .infoBox3 {
    z-index: 23;
    width: 456rpx;
    height: 68rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    line-height: 34rpx;
    text-align: left;
    margin-top: 4rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word20 {
    z-index: 17;

    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    align-self: flex-start;
  }
  .word21 {
    z-index: 22;
    width: 120rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 4rpx;
  }
  .word22 {
    z-index: 20;
    width: 302rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 40rpx;
  }
  .word23 {
    z-index: 25;
    width: 168rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 4rpx;
  }
  .mod9 {
    z-index: auto;
    width: 470rpx;
    height: 46rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 8rpx 0 0 28rpx;
  }
  .word24 {
    z-index: 16;
    width: 90rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    margin-top: 2rpx;
  }
  .main2 {
    z-index: 9;
    height: 46rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4afafb84d4f375be9dc69ec0de12b8d85102338ae1758330f119efbd91fd76e4)
      100% no-repeat;
    width: 46rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .info18 {
    z-index: 27;
    width: 24rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .info19 {
    z-index: 21;
    width: 302rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .mod10 {
    z-index: auto;
    width: 120rpx;
    height: 34rpx;
    margin-left: 196rpx;
    flex-direction: row;
    display: flex;
  }
  .info20 {
    z-index: 26;
    width: 120rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }

  /* 详细信息 */
  .bd2 {
    z-index: 37;
    /* height: 1220rpx; */
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;

    width: 702rpx;
    justify-content: center;
    align-items: flex-start;

    display: flex;
    flex-direction: column;
    margin: 16rpx auto 128rpx;
  }
  .block2 {
    z-index: auto;
    width: 626rpx;
    padding: 32rpx 0 32rpx 28rpx;
    display: flex;
    flex-direction: column;
  }
  .info4 {
    z-index: 40;
    width: 144rpx;
    height: 50rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 36rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 50rpx;
    text-align: left;
    align-self: flex-start;
  }
  .group1 {
    z-index: auto;
    width: 620rpx;
    height: 132rpx;
    margin-top: 46rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .box2 {
    z-index: 38;
    height: 72rpx;
    border-radius: 100%;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbe3a7bac23ef7ed6123004ef9079af4940e2ed120da8797869abf0f9ccb879d0)
      100% no-repeat;
    width: 72rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .txt2 {
    z-index: 41;
    width: 38rpx;
    height: 52rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 38rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 52rpx;
    text-align: left;
  }
  .box3 {
    z-index: auto;
    width: 532rpx;
    height: 128rpx;
    margin-top: 4rpx;
    display: flex;
    flex-direction: column;
  }
  .word6 {
    z-index: 43;
    width: 300rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    align-self: flex-start;
  }
  .paragraph1 {
    z-index: 45;
    width: 532rpx;
    height: 80rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    line-height: 40rpx;
    text-align: left;
    margin-top: 6rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .group2 {
    z-index: auto;
    width: 620rpx;
    height: 132rpx;
    /* margin-top: 48rpx; */
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .layer1 {
    z-index: 39;
    height: 72rpx;
    border-radius: 100%;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngec7dd3e2450e3cccc672df506e52f257a165d6335ee33442aa6b76724a8d30d1)
      100% no-repeat;
    width: 72rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .info5 {
    z-index: 42;
    width: 38rpx;
    height: 52rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 38rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 52rpx;
    text-align: left;
  }
  .layer2 {
    z-index: auto;
    width: 532rpx;
    height: 128rpx;
    margin-top: 4rpx;
    display: flex;
    flex-direction: column;
  }
  .info6 {
    z-index: 44;
    width: 300rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    align-self: flex-start;
  }
  .infoBox1 {
    z-index: 46;
    width: 532rpx;
    height: 80rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    line-height: 40rpx;
    text-align: left;
    margin-top: 6rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .group3 {
    z-index: auto;

    height: 42rpx;
    flex-direction: row;
    display: flex;
    margin: 48rpx 0 0 88rpx;
  }
  .word7 {
    z-index: 47;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
    margin-right: 40rpx;
  }
  .info7 {
    z-index: 57;
    width: 124rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .group4 {
    z-index: auto;
    width: 284rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 88rpx;
  }
  .word8 {
    z-index: 51;
    width: 130rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .txt3 {
    z-index: 61;
    width: 124rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .group5 {
    z-index: auto;
    width: 266rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 88rpx;
  }
  .info8 {
    z-index: 49;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .word9 {
    z-index: 59;
    width: 106rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .group6 {
    z-index: auto;
    width: 290rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 88rpx;
  }
  .word10 {
    z-index: 53;
    width: 140rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .word11 {
    z-index: 63;
    width: 130rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .group7 {
    z-index: auto;
    width: 280rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 88rpx;
  }
  .info9 {
    z-index: 48;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .txt4 {
    z-index: 58;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .group8 {
    z-index: auto;
    width: 280rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 88rpx;
  }
  .info10 {
    z-index: 52;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .txt5 {
    z-index: 62;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .group9 {
    z-index: auto;
    width: 538rpx;
    height: 84rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 88rpx;
  }
  .info11 {
    z-index: 50;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .paragraph2 {
    z-index: 60;
    width: 378rpx;
    height: 84rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    line-height: 42rpx;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .group10 {
    z-index: auto;
    width: 472rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 88rpx;
  }
  .word12 {
    z-index: 54;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .txt6 {
    z-index: 64;
    width: 312rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .group11 {
    z-index: auto;
    width: 302rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 88rpx;
  }
  .info12 {
    z-index: 55;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .word13 {
    z-index: 65;
    width: 142rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .group12 {
    z-index: auto;
    width: 530rpx;

    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 88rpx;
  }
  .info13 {
    z-index: 56;
    width: 120rpx;
    height: 42rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 42rpx;
    text-align: left;
  }
  .infoBox2 {
    z-index: 66;
    width: 370rpx;

    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 30rpx;
    font-family: PingFangSC-Medium;
    line-height: 42rpx;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* 底部 */
  .section4 {
    z-index: 81;
    height: 108rpx;
    background-color: rgba(255, 255, 255, 1);

    width: 750rpx;
    justify-content: center;
    align-items: flex-end;
    padding-right: 24rpx;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .block3 {
    z-index: auto;
    width: 626rpx;
    height: 86rpx;
    flex-direction: row;
    display: flex;
  }
  .bd8 {
    z-index: auto;
    width: 96rpx;
    height: 86rpx;
    display: flex;
    flex-direction: column;
  }
  .icon3 {
    z-index: 86;
    width: 48rpx;
    height: 48rpx;
    align-self: center;
  }
  .txt6 {
    z-index: 84;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(67, 70, 88, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-top: 4rpx;
  }
  .bd9 {
    z-index: auto;
    width: 96rpx;
    height: 86rpx;
    /* margin-left: 120rpx; */
    display: flex;
    flex-direction: column;
  }
  .label3 {
    z-index: 93;
    width: 48rpx;
    height: 48rpx;
    align-self: center;
  }
  .word10 {
    z-index: 85;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(67, 70, 88, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-top: 4rpx;
  }
  .bd10 {
    z-index: 82;
    height: 72rpx;
    border-radius: 36rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    width: 176rpx;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 8rpx 0 0 138rpx;
  }
  .info9 {
    z-index: 83;
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
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
