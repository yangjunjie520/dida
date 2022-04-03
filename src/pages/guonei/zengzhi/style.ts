import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverView = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 16rpx 24rpx 200rpx;

  .group2 {
    z-index: 4;
    height: 1656rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    justify-content: flex-start;

    position: relative;
    display: flex;
    flex-direction: column;
    padding: 26rpx 24rpx 0;
  }
  .mod2 {
    z-index: auto;
    width: 652rpx;
    height: 1590rpx;
    display: flex;
    flex-direction: column;
  }
  .box1 {
    z-index: auto;
    width: 650rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .txt1 {
    z-index: 6;
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
  .box2 {
    z-index: 70;
    width: 56rpx;
    height: 26rpx;
    border-radius: NaNrpx;
    background-color: rgba(255, 114, 1, 1);
    margin-top: 10rpx;
    display: flex;
    flex-direction: column;
  }
  .word1 {
    z-index: 72;
    width: 338rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 16rpx;
  }
  .box3 {
    z-index: 5;
    width: 646rpx;
    height: 2rpx;
    /* background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc81cb673e4bd3e6b41cf067a820197b23b482652883b074f24304e8b293dca87)
      100% no-repeat; */
    align-self: flex-start;
    margin-top: 26rpx;
    display: flex;
    flex-direction: column;
    border-bottom: 2px dashed #f3f3f3;
  }
  .word2 {
    z-index: 7;
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
    align-self: flex-start;
    margin-top: 26rpx;
  }
  .infoBox1 {
    z-index: 73;
    width: 650rpx;
    height: 72rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    line-height: 36rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 8rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word3 {
    z-index: 8;
    width: 56rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 28rpx;
  }
  .box4 {
    z-index: auto;
    width: 610rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .info3 {
    z-index: 13;
    width: 48rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .info4 {
    z-index: 32;
    width: 116rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 188rpx;
  }
  .word4 {
    z-index: 51;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 162rpx;
  }
  .box5 {
    z-index: auto;
    width: 584rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .word5 {
    z-index: 18;
    width: 82rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .txt2 {
    z-index: 37;
    width: 102rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 154rpx;
  }
  .word6 {
    z-index: 56;
    width: 70rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 176rpx;
  }
  .box6 {
    z-index: auto;
    width: 590rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .txt3 {
    z-index: 27;
    width: 88rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word7 {
    z-index: 46;
    width: 112rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 148rpx;
  }
  .info5 {
    z-index: 65;
    width: 76rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 166rpx;
  }
  .box7 {
    z-index: auto;
    width: 590rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .txt4 {
    z-index: 25;
    width: 88rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word8 {
    z-index: 44;
    width: 112rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 148rpx;
  }
  .word9 {
    z-index: 63;
    width: 76rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 166rpx;
  }
  .box8 {
    z-index: auto;
    width: 600rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .info6 {
    z-index: 29;
    width: 88rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .txt5 {
    z-index: 48;
    width: 112rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 148rpx;
  }
  .info7 {
    z-index: 67;
    width: 86rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 166rpx;
  }
  .box9 {
    z-index: auto;
    width: 600rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .word10 {
    z-index: 31;
    width: 88rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .txt6 {
    z-index: 50;
    width: 112rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 148rpx;
  }
  .txt7 {
    z-index: 69;
    width: 86rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 166rpx;
  }
  .info8 {
    z-index: 9;
    width: 84rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 36rpx;
  }
  .box10 {
    z-index: auto;
    width: 610rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .word11 {
    z-index: 14;
    width: 48rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word12 {
    z-index: 33;
    width: 116rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 188rpx;
  }
  .info9 {
    z-index: 52;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 162rpx;
  }
  .box11 {
    z-index: auto;
    width: 600rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .info10 {
    z-index: 19;
    width: 82rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word13 {
    z-index: 38;
    width: 90rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 154rpx;
  }
  .word14 {
    z-index: 57;
    width: 86rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 188rpx;
  }
  .box12 {
    z-index: auto;
    width: 590rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .info11 {
    z-index: 28;
    width: 88rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word15 {
    z-index: 47;
    width: 90rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 148rpx;
  }
  .word16 {
    z-index: 66;
    width: 76rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 188rpx;
  }
  .box13 {
    z-index: auto;
    width: 590rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .txt8 {
    z-index: 26;
    width: 88rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .txt9 {
    z-index: 45;
    width: 80rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 148rpx;
  }
  .word17 {
    z-index: 64;
    width: 76rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 198rpx;
  }
  .box14 {
    z-index: auto;
    width: 590rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .word18 {
    z-index: 30;
    width: 88rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word19 {
    z-index: 49;
    width: 70rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 148rpx;
  }
  .info12 {
    z-index: 68;
    width: 76rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 208rpx;
  }
  .info13 {
    z-index: 10;
    width: 84rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 36rpx;
  }
  .box15 {
    z-index: auto;
    width: 610rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .word20 {
    z-index: 15;
    width: 48rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word21 {
    z-index: 34;
    width: 116rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 188rpx;
  }
  .word22 {
    z-index: 53;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 162rpx;
  }
  .box16 {
    z-index: auto;
    width: 652rpx;
    height: 68rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .word23 {
    z-index: 20;
    width: 48rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-top: 18rpx;
  }
  .infoBox2 {
    z-index: 39;
    width: 208rpx;
    height: 68rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    line-height: 34rpx;
    text-align: left;
    margin-left: 188rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .paragraph1 {
    z-index: 58;
    width: 138rpx;
    height: 68rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    line-height: 34rpx;
    text-align: left;
    margin-left: 70rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info14 {
    z-index: 11;
    width: 84rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 36rpx;
  }
  .box17 {
    z-index: auto;
    width: 610rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .txt10 {
    z-index: 16;
    width: 48rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word24 {
    z-index: 35;
    width: 116rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 188rpx;
  }
  .word25 {
    z-index: 54;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 162rpx;
  }
  .box18 {
    z-index: auto;
    width: 604rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .word26 {
    z-index: 21;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .txt11 {
    z-index: 40;
    width: 166rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 140rpx;
  }
  .word27 {
    z-index: 59;
    width: 90rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 112rpx;
  }
  .word28 {
    z-index: 12;
    width: 84rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 36rpx;
  }
  .box19 {
    z-index: auto;
    width: 610rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
  }
  .txt12 {
    z-index: 17;
    width: 48rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word29 {
    z-index: 36;
    width: 116rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 188rpx;
  }
  .txt13 {
    z-index: 55;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-left: 162rpx;
  }
  .box20 {
    z-index: auto;
    width: 648rpx;
    height: 68rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .word30 {
    z-index: 22;
    width: 72rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-top: 18rpx;
  }
  .txt14 {
    z-index: 41;
    width: 112rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-top: 18rpx;
  }
  .infoBox3 {
    z-index: 60;
    width: 134rpx;
    height: 68rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    line-height: 34rpx;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .box21 {
    z-index: auto;
    width: 610rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .txt15 {
    z-index: 23;
    width: 72rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word31 {
    z-index: 42;
    width: 112rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word32 {
    z-index: 61;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .box22 {
    z-index: auto;
    width: 600rpx;
    height: 34rpx;
    margin-top: 12rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .txt16 {
    z-index: 24;
    width: 72rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .txt17 {
    z-index: 43;
    width: 112rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word33 {
    z-index: 62;
    width: 86rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .mod3 {
    z-index: 71;
    position: absolute;
    left: 650rpx;
    top: 34rpx;
    width: 30rpx;
    height: 30rpx;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
    border-radius: 100%;
    display: flex;
    flex-direction: column;
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

  .box7s {
    z-index: auto;
    width: 420rpx;
    height: 34rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 28rpx;
  }
  .icon4 {
    z-index: 46;
    width: 28rpx;
    height: 28rpx;
    margin-top: 4rpx;
  }
  .info1 {
    z-index: 45;
    width: 384rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
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
  .info2 {
    z-index: 44;
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

  .group3 {
    z-index: 75;
    height: 300rpx;
    border-radius: 20rpx;
    background-color: rgba(255, 255, 255, 1);
    align-self: center;
    margin-top: 16rpx;
    width: 702rpx;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .bd3 {
    z-index: auto;
    width: 692rpx;
    height: 246rpx;
    display: flex;
    flex-direction: column;
  }
  .layer3 {
    z-index: auto;
    width: 650rpx;
    height: 42rpx;
    margin-left: 28rpx;
    flex-direction: row;
    display: flex;
  }
  .txt18 {
    z-index: 85;
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
  .icon3 {
    z-index: 76;
    width: 32rpx;
    height: 32rpx;
    margin: 6rpx 0 0 4rpx;
  }
  .section1 {
    z-index: 86;
    width: 56rpx;
    height: 26rpx;
    border-radius: NaNrpx;
    background-color: rgba(255, 114, 1, 1);
    display: flex;
    flex-direction: column;
    margin: 10rpx 0 0 438rpx;
  }
  .infoBox4 {
    z-index: 88;
    width: 650rpx;
    height: 72rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(153, 153, 153, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    line-height: 36rpx;
    text-align: left;
    align-self: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 16rpx 14rpx 0 0;
  }
  .layer4 {
    z-index: 84;
    width: 692rpx;
    height: 4rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng739ce0b3289b0add6b7f59c9790aebcdf8299b75918bbc9dc6c28e8ad876cbda)
      100% no-repeat;
    margin-top: 30rpx;
    display: flex;
    flex-direction: column;
  }
  .layer5 {
    z-index: auto;
    width: 650rpx;
    height: 60rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 22rpx 0 0 28rpx;
  }
  .word34 {
    z-index: 89;
    width: 112rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 10rpx;
  }
  .group4 {
    z-index: 90;
    height: 60rpx;
    border-radius: 4rpx;
    background-color: rgba(241, 241, 241, 1);
    width: 522rpx;
    padding-left: 20rpx;
    /* color: rgba(204, 204, 204, 1); */
    font-size: 26rpx;
  }
  .word35 {
    z-index: 91;
    width: 408rpx;
    height: 36rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(204, 204, 204, 1);
    font-size: 26rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 36rpx;
    text-align: left;
  }
  .bd4 {
    z-index: 87;
    position: absolute;
    left: 650rpx;
    top: 34rpx;
    width: 30rpx;
    height: 30rpx;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
    border-radius: 100%;
    display: flex;
    flex-direction: column;
  }

  /* Switch开关样式 */
  .wx-switch-input {
    width: 66rpx !important;
    height: 26rpx !important;
    display: flex;
    align-items: center;

    margin-top: -10rpx;
  }

  //开关checked为false时，开关的框框的样式
  .wx-switch-input::before {
    width: 66rpx !important;
    height: 26rpx !important;

    background-color: rgba(238, 238, 238, 1);
  }

  //白圈的样式
  .wx-switch-input::after {
    width: 34rpx !important;
    height: 34rpx !important;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
    border-radius: 100%;
    margin-top: -10rpx;
  }
  .zh-sw {
    position: absolute;
    position: absolute;
    z-index: 99;
    right: 0;
    top: -8rpx;
  }
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
