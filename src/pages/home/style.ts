import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

export const StyledOverview = styled(View)`
  .scrollview {
    height: 100vh;
  }

  .page {
    z-index: 1;
    position: relative;
    width: 750rpx;
    height: 1600rpx;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .layer1 {
    z-index: auto;
    width: 746rpx;
    height: 1600rpx;
    display: flex;
    flex-direction: column;
  }
  .box1 {
    z-index: 2;
    height: 1600rpx;
    background-color: rgba(247, 247, 247, 1);
    width: 746rpx;
    justify-content: flex-end;
    padding-bottom: 136rpx;
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .outer1 {
    z-index: auto;
    width: 702rpx;
    height: 808rpx;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 704rpx;
  }
  .wrap1 {
    z-index: auto;
    width: 702rpx;
    height: 260rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }

  .layer2 {
    z-index: 143;
    background: linear-gradient(270deg, #ffffff 0%, #ffffff 100%);

    width: 316rpx;
    height: 236rpx;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0 24rpx 22rpx;
    border-radius: 20rpx;
  }
  .main1 {
    z-index: auto;
    width: 228rpx;
    height: 200rpx;
    display: flex;
    flex-direction: column;
  }
  .main2 {
    z-index: 149;
    width: 136rpx;
    height: 99rpx;

    justify-content: flex-end;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 0 0 8rpx 4rpx;
  }
  .main3 {
    z-index: 151;
    width: 136rpx;
    height: 99rpx;
    display: flex;
    flex-direction: column;
  }
  .main4 {
    z-index: 148;
    width: 142rpx;
    height: 2rpx;

    align-self: flex-start;
    display: flex;
    flex-direction: column;
  }
  .word1 {
    z-index: 154;
    width: 136rpx;
    height: 48rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
    align-self: flex-start;
    margin: 18rpx 0 0 8rpx;
  }
  .word2 {
    z-index: 155;
    width: 200rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(171, 174, 189, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin: 8rpx 0 0 8rpx;
  }
  .icon1 {
    z-index: 153;
    position: absolute;
    left: 110rpx;
    top: 34rpx;
    width: 44rpx;
    height: 58rpx;
  }
  .icon2 {
    z-index: 152;
    position: absolute;
    left: 34rpx;
    top: 28rpx;
    width: 74rpx;
    height: 94rpx;
  }

  .layer3 {
    z-index: 175;
    background: linear-gradient(270deg, #ffffff 0%, #ffffff 100%);

    width: 316rpx;
    height: 236rpx;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0 24rpx 22rpx;
    border-radius: 20rpx;
  }
  .section1 {
    z-index: auto;
    width: 230rpx;
    height: 108rpx;
    display: flex;
    flex-direction: column;
  }
  .layer4 {
    z-index: 180;
    width: 142rpx;
    height: 2rpx;

    align-self: flex-start;
    display: flex;
    flex-direction: column;
  }
  .info1 {
    z-index: 182;
    width: 136rpx;
    height: 48rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
    align-self: flex-start;
    margin: 16rpx 0 0 8rpx;
  }
  .layer5 {
    z-index: 183;
    width: 222rpx;
    height: 34rpx;
    overflow-wrap: break-word;
    text-align: left;
    white-space: nowrap;
    align-self: flex-end;
    margin-top: 8rpx;
    font-size: 0rpx;
  }
  .txt1 {
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    color: rgba(171, 174, 189, 1);
    line-height: 34rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word3 {
    font-size: 24rpx;
    font-family: PingFangSC-Semibold;
    color: rgba(171, 174, 189, 1);
    line-height: 34rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .word4 {
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    color: rgba(171, 174, 189, 1);
    line-height: 34rpx;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pic1 {
    z-index: 181;
    position: absolute;
    left: 48rpx;
    top: 16rpx;
    width: 94rpx;
    height: 114rpx;
  }
  .wrap2 {
    z-index: 239;
    height: 82rpx;
    background: #efeff2;
    border-radius: 20px;
    margin-top: 30rpx;
    width: 702rpx;
    justify-content: center;
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .box2 {
    z-index: auto;
    width: 646rpx;
    height: 52rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon3 {
    z-index: 242;
    width: 70rpx;
    height: 36rpx;
  }
  .block1 {
    z-index: 251;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 140rpx;
    height: 52rpx;
    background: linear-gradient(136deg, #fe9f0c 0%, #ff7201 100%);
    border-radius: 30rpx;
  }
  .word5 {
    z-index: 252;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .word6 {
    z-index: 241;
    position: absolute;
    left: 102rpx;
    top: 22rpx;
    width: 572rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .wrap3 {
    z-index: 253;
    width: 146rpx;
    height: 24rpx;
    border-radius: 12rpx;
    background-image: linear-gradient(
      100deg,
      rgba(254, 159, 12, 0.12) 0%,
      rgba(255, 114, 1, 1) 100%
    );
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    margin: 72rpx 0 0 24rpx;
  }
  .wrap4 {
    z-index: 256;
    height: 310rpx;
    border-radius: 40rpx;
    overflow: hidden;
    background: #FFFFFF;
    border-radius: 40rpx;
    margin-top: 30rpx;
    width: 702rpx;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .wrap5 {
    z-index: auto;
    width: 532rpx;
    height: 120rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 20rpx 0 0 20rpx;
  }
  .bd1 {
    z-index: 296;
    position: relative;
    width: 120rpx;
    height: 120rpx;
    border-radius: 20rpx;
    overflow: hidden;
  
    display: flex;
    flex-direction: column;
  }
  .box3 {
    z-index: 297;
    height: 120rpx;
 
    width: 120rpx;
    position: absolute;
    left: 0rpx;
    top: 0rpx;
    display: flex;
    flex-direction: column;
  }
  .img1 {
    z-index: 298;
    width: 120rpx;
    height: 120rpx;
  }
  .bd2 {
    z-index: auto;
    width: 398rpx;
    height: 84rpx;
    margin-top: 20rpx;
    display: flex;
    flex-direction: column;
  }
  .word7 {
    z-index: 293;
    width: 398rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(42, 42, 42, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
  }
  .word8 {
    z-index: 294;
    width: 136rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(184, 184, 184, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 10rpx;
  }
  .wrap6 {
    z-index: auto;
    width: 534rpx;
    height: 124rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 28rpx 0 0 20rpx;
  }
  .layer6 {
    z-index: 303;
    position: relative;
    width: 120rpx;
    height: 120rpx;
    border-radius: 20rpx;
    overflow: hidden;

    margin-top: 2rpx;
    display: flex;
    flex-direction: column;
  }
  .mod1 {
    z-index: 304;
    height: 120rpx;

    width: 120rpx;
    position: absolute;
    left: 0rpx;
    top: 0rpx;
    display: flex;
    flex-direction: column;
  }
  .box4 {
    z-index: 305;
    height: 120rpx;
  
    width: 120rpx;
    display: flex;
    flex-direction: column;
  }
  .pic2 {
    z-index: 306;
    width: 120rpx;
    height: 120rpx;
  }
  .layer7 {
    z-index: auto;
    width: 400rpx;
    height: 124rpx;
    display: flex;
    flex-direction: column;
  }
  .word9 {
    z-index: 300;
    width: 400rpx;
    height: 80rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(42, 42, 42, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Semibold;
    line-height: 40rpx;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info2 {
    z-index: 301;
    width: 136rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(184, 184, 184, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    align-self: flex-start;
    margin-top: 10rpx;
  }
  .wrap7 {
    z-index: 259;
    position: absolute;
    left: 654rpx;
    top: 20rpx;
    width: 48rpx;
    height: 120rpx;
    border-radius: 20rpx;
    overflow: hidden;

    display: flex;
    flex-direction: column;
  }
  .group1 {
    z-index: 260;
    height: 120rpx;

    width: 48rpx;
    position: absolute;
    left: 0rpx;
    top: 0rpx;
    display: flex;
    flex-direction: column;
  }
  .img2 {
    z-index: 261;
    width: 48rpx;
    height: 120rpx;
  }
  .wrap8 {
    z-index: 264;
    position: absolute;
    left: 654rpx;
    top: 168rpx;
    width: 48rpx;
    height: 120rpx;
    border-radius: 20rpx;
    overflow: hidden;

    display: flex;
    flex-direction: column;
  }
  .pic3 {
    z-index: 265;
    position: absolute;
    left: 0rpx;
    top: 0rpx;
    width: 48rpx;
    height: 120rpx;
  }
  .info3 {
    z-index: 254;
    position: absolute;
    left: 24rpx;
    top: 1112rpx;
    width: 160rpx;
    height: 56rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 40rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 56rpx;
    text-align: left;
  }
  .icon4 {
    z-index: 270;
    position: absolute;
    left: 626rpx;
    top: 1226rpx;
    width: 54rpx;
    height: 62rpx;
  }
  .outer2 {
    z-index: 267;
    height: 98rpx;
    border-radius: 10rpx;

    width: 146rpx;
    justify-content: flex-end;
    padding-bottom: 10rpx;
    align-items: center;
    position: absolute;
    left: 580rpx;
    top: 1258rpx;
    display: flex;
    flex-direction: column;
  }
  .txt2 {
    z-index: 269;
    width: 116rpx;
    height: 26rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 0.75);
    font-size: 18rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 26rpx;
    text-align: left;
  }
  .word10 {
    z-index: 268;
    position: absolute;
    left: 26rpx;
    top: 30rpx;
    width: 96rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
  }
  .box5 {
    z-index: auto;
    width: 594rpx;
    height: 50rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 72rpx 0 0 82rpx;
  }
  .outer3 {
    z-index: 184;
    width: 40rpx;
    height: 42rpx;

    margin-top: 2rpx;
    display: flex;
    flex-direction: column;
  }
  .label1 {
    z-index: 196;
    width: 44rpx;
    height: 44rpx;
    margin-top: 2rpx;
  }
  .icon5 {
    z-index: 225;
    width: 52rpx;
    height: 50rpx;
  }
  .box6 {
    z-index: auto;
    width: 588rpx;
    height: 50rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 30rpx 0 0 82rpx;
  }
  .mod2 {
    z-index: 235;
    width: 48rpx;
    height: 48rpx;

    margin-top: 2rpx;
    display: flex;
    flex-direction: column;
  }
  .label2 {
    z-index: 205;
    width: 48rpx;
    height: 48rpx;
    margin-top: 2rpx;
  }
  .label3 {
    z-index: 220;
    width: 46rpx;
    height: 48rpx;
  }
  .label4 {
    z-index: 328;
    width: 54rpx;
    height: 62rpx;
    align-self: flex-start;
    margin: 74rpx 0 0 74rpx;
  }
  .box7 {
    z-index: auto;
    width: 494rpx;
    height: 100rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 84rpx 0 0 48rpx;
  }
  .pic4 {
    z-index: 307;
    width: 144rpx;
    height: 78rpx;
    margin-top: 8rpx;
  }
  .bd3 {
    z-index: 318;
    position: relative;
    width: 138rpx;
    height: 100rpx;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .pic5 {
    z-index: 319;
    position: absolute;
    left: 16rpx;
    top: -2rpx;
    width: 120rpx;
    height: 100rpx;
  }
  .box8 {
    z-index: 310;
    height: 48rpx;
 
    align-self: flex-start;
    width: 84rpx;
    justify-content: flex-end;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: 108rpx 0 0 90rpx;
    padding: 0 0 8rpx 4rpx;
  }
  .layer8 {
    z-index: 312;
    width: 66rpx;
    height: 26rpx;

    display: flex;
    flex-direction: column;
  }
  .box9 {
    z-index: 309;
    width: 142rpx;
    height: 2rpx;

    align-self: flex-start;
    margin-left: 46rpx;
    display: flex;
    flex-direction: column;
  }
  .box10 {
    z-index: 322;
    width: 142rpx;
    height: 2rpx;
 
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    margin: 4rpx 196rpx 0 0;
  }
  .box11 {
    z-index: auto;
    width: 640rpx;
    height: 152rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 60rpx 0 0 34rpx;
  }
  .img3 {
    z-index: 324;
    width: 140rpx;
    height: 150rpx;
  }
  .img4 {
    z-index: 169;
    width: 140rpx;
    height: 150rpx;
    margin-top: 2rpx;
  }
  .img5 {
    z-index: 350;
    width: 140rpx;
    height: 150rpx;
    margin-top: 2rpx;
  }
  .pic6 {
    z-index: 355;
    width: 140rpx;
    height: 150rpx;
    margin-top: 2rpx;
  }
  .layer9 {
    z-index: 4;
    height: 566rpx;
    overflow: hidden;
    background-image: url('../../static/images/home/banner.png');
    background-repeat: no-repeat;
    background-size: 750rpx 566rpx;
    width: 750rpx;
    position: absolute;
    left: 0rpx;
    top: 0rpx;
    display: flex;
    flex-direction: column;
  }
  .wrap9 {
    z-index: auto;
    width: 728rpx;
    height: 38rpx;
    flex-direction: row;
    display: flex;
    margin: 4rpx 0 0 12rpx;
  }
  .layer10 {
    z-index: 119;
    width: 34rpx;
    height: 20rpx;

    margin-top: 6rpx;
    display: flex;
    flex-direction: column;
  }
  .word11 {
    z-index: 118;
    width: 80rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 34rpx;
    margin-left: 6rpx;
  }
  .layer11 {
    z-index: 124;
    width: 30rpx;
    height: 20rpx;

    display: flex;
    flex-direction: column;
    margin: 6rpx 0 0 12rpx;
  }
  .word12 {
    z-index: 116;
    width: 92rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: center;
    margin: 4rpx 0 0 156rpx;
  }
  .layer12 {
    z-index: 115;
    width: 12rpx;
    height: 20rpx;

    display: flex;
    flex-direction: column;
    margin: 6rpx 0 0 176rpx;
  }
  .word13 {
    z-index: 114;
    width: 66rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: right;
    margin: 4rpx 0 0 4rpx;
  }
  .label5 {
    z-index: 108;
    width: 54rpx;
    height: 24rpx;
    margin: 6rpx 0 0 6rpx;
  }
  .wrap10 {
    z-index: auto;
    width: 432rpx;
    height: 64rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 6rpx 0 0 304rpx;
  }
  .word14 {
    z-index: 128;
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
    margin-top: 8rpx;
  }
  .block2 {
    z-index: 104;
    width: 174rpx;
    height: 64rpx;
    border-radius: 32rpx;
    background-color: rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
  }
  .wrap11 {
    z-index: 10;
    position: absolute;
    left: 492rpx;
    top: 64rpx;
    width: 40rpx;
    height: 40rpx;
    background-image: linear-gradient(
      137deg,
      rgba(254, 178, 12, 0.69) 0%,
      rgba(233, 104, 0, 0.69) 100%
    );
    border-radius: 100%;
    display: flex;
    flex-direction: column;
  }
  .wrap12 {
    z-index: 6;
    height: 244rpx;

    width: 194rpx;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    left: 0rpx;
    top: 0rpx;
    display: flex;
    flex-direction: column;
  }
  .img6 {
    z-index: 8;
    width: 128rpx;
    height: 124rpx;
  }
  .pic7 {
    z-index: 5;
    position: absolute;
    left: 522rpx;
    top: 8rpx;
    width: 228rpx;
    height: 260rpx;
  }
  .wrap13 {
    z-index: 12;
    position: absolute;
    left: 244rpx;
    top: 148rpx;
    width: 252rpx;
    height: 36rpx;
    background-image: linear-gradient(
      99deg,
      rgba(254, 191, 12, 0.38) 0%,
      rgba(255, 185, 1, 0) 100%
    );
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
  }
  .pic8 {
    z-index: 40;
    position: absolute;
    left: 38rpx;
    top: 162rpx;
    width: 402rpx;
    height: 130rpx;
  }
  .pic9 {
    z-index: 103;
    position: absolute;
    left: 418rpx;
    top: 66rpx;
    width: 332rpx;
    height: 500rpx;
  }
  .pic10 {
    z-index: 13;
    position: absolute;
    left: 38rpx;
    top: 324rpx;
    width: 294rpx;
    height: 44rpx;
  }
  .wrap14 {
    z-index: 102;
    position: absolute;
    left: 362rpx;
    top: 344rpx;
    width: 312rpx;
    height: 4rpx;

    display: flex;
    flex-direction: column;
  }
  .wrap15 {
    z-index: 11;
    position: absolute;
    left: 214rpx;
    top: 346rpx;
    width: 228rpx;
    height: 18rpx;
    background-image: linear-gradient(
      273deg,
      rgba(255, 217, 181, 0) 0%,
      rgba(255, 216, 126, 0.31) 100%
    );
    display: flex;
    flex-direction: column;
  }
  .img7 {
    z-index: 9;
    position: absolute;
    left: 0rpx;
    top: 340rpx;
    width: 116rpx;
    height: 152rpx;
  }
  .pic11 {
    z-index: 7;
    position: absolute;
    left: 384rpx;
    top: 304rpx;
    width: 366rpx;
    height: 262rpx;
  }
  .layer13 {
    z-index: 135;

    background: linear-gradient(270deg, #ffffff 0%, #ffffff 100%);

    width: 316rpx;
    height: 236rpx;
    justify-content: flex-end;
    align-items: flex-start;
    position: absolute;
    left: 24rpx;
    top: 418rpx;
    display: flex;
    flex-direction: column;
    padding: 0 0 24rpx 24rpx;
    border-radius: 20rpx;
  }
  .bg1 {
    width: 138rpx;
    height: 148rpx;
    position: absolute;
    right: 0;
    top: 0;
  }
  .box12 {
    z-index: auto;
    width: 228rpx;
    height: 200rpx;
    display: flex;
    flex-direction: column;
  }
  .img8 {
    z-index: 141;
    width: 136rpx;
    height: 99rpx;
    align-self: flex-start;
  }
  .info4 {
    z-index: 139;
    width: 136rpx;
    height: 48rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
    align-self: flex-start;
    margin: 20rpx 0 0 6rpx;
  }
  .word15 {
    z-index: 140;
    width: 222rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(171, 174, 189, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    align-self: flex-end;
    margin-top: 8rpx;
  }

  .layer14 {
    position: absolute;
    left: 386rpx;
    top: 418rpx;
    display: flex;
    flex-direction: column;
    border-radius: 20rpx;
    padding: 0 0 24rpx 24rpx;

    z-index: 135;

    background: linear-gradient(270deg, #ffffff 0%, #ffffff 100%);

    width: 316rpx;
    height: 236rpx;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .main5 {
    z-index: auto;
    width: 272rpx;
    height: 200rpx;
    display: flex;
    flex-direction: column;
  }
  .bd4 {
    z-index: 166;
    position: relative;
    width: 138rpx;
    height: 100rpx;
    overflow: hidden;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
  }
  .img9 {
    z-index: 167;
    position: absolute;
    left: 16rpx;
    top: -2rpx;
    width: 136rpx;
    height: 99rpx;
  }
  .word16 {
    z-index: 161;
    width: 136rpx;
    height: 48rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(50, 53, 70, 1);
    font-size: 34rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 48rpx;
    text-align: left;
    align-self: flex-start;
    margin: 28rpx 0 0 12rpx;
  }
  .txt3 {
    z-index: 162;
    width: 260rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(171, 174, 189, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    align-self: flex-end;
    margin-top: 8rpx;
  }
  .main6 {
    z-index: 168;
    position: absolute;
    left: 22rpx;
    top: 124rpx;
    width: 142rpx;
    height: 2rpx;

    display: flex;
    flex-direction: column;
  }
  .layer15 {
    z-index: 129;
    height: 102rpx;

    width: 750rpx;
    justify-content: flex-end;
    padding-bottom: 6rpx;
    align-items: center;
    position: absolute;
    left: 0rpx;
    top: 1564rpx;
    display: flex;
    flex-direction: column;
  }
  .main7 {
    z-index: auto;
    width: 594rpx;
    height: 84rpx;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .group2 {
    z-index: auto;
    width: 50rpx;
    height: 82rpx;
    margin-top: 2rpx;
    display: flex;
    flex-direction: column;
  }
  .wrap16 {
    z-index: auto;
    width: 50rpx;
    height: 82rpx;
    display: flex;
    flex-direction: column;
  }
  .layer16 {
    z-index: 231;
    width: 48rpx;
    height: 48rpx;

    align-self: flex-end;
    display: flex;
    flex-direction: column;
  }
  .info5 {
    z-index: 131;
    width: 48rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(67, 70, 88, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Semibold;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    align-self: flex-start;
  }
  .group3 {
    z-index: auto;
    width: 72rpx;
    height: 82rpx;
    margin-top: 2rpx;
    display: flex;
    flex-direction: column;
  }
  .layer17 {
    z-index: auto;
    width: 72rpx;
    height: 82rpx;
    display: flex;
    flex-direction: column;
  }
  .icon6 {
    z-index: 187;
    width: 44rpx;
    height: 44rpx;
    align-self: center;
  }
  .word17 {
    z-index: 133;
    width: 72rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(132, 132, 132, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-top: 4rpx;
  }
  .group4 {
    z-index: auto;
    width: 48rpx;
    height: 84rpx;
    display: flex;
    flex-direction: column;
  }
  .section2 {
    z-index: auto;
    width: 48rpx;
    height: 84rpx;
    display: flex;
    flex-direction: column;
  }
  .icon7 {
    z-index: 215;
    width: 46rpx;
    height: 48rpx;
    align-self: flex-start;
  }
  .txt4 {
    z-index: 132;
    width: 48rpx;
    height: 34rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(132, 132, 132, 1);
    font-size: 24rpx;
    font-family: PingFangSC-Regular;
    white-space: nowrap;
    line-height: 34rpx;
    text-align: left;
    margin-top: 2rpx;
  }
  .layer18 {
    z-index: 320;
    position: absolute;
    left: 408rpx;
    top: 2162rpx;
    width: 142rpx;
    height: 2rpx;

    display: flex;
    flex-direction: column;
  }
  .icon8 {
    z-index: 314;
    position: absolute;
    left: 134rpx;
    top: 2234rpx;
    width: 44rpx;
    height: 58rpx;
  }
  .label6 {
    z-index: 313;
    position: absolute;
    left: 58rpx;
    top: 2228rpx;
    width: 74rpx;
    height: 94rpx;
  }
  .img10 {
    z-index: 323;
    position: absolute;
    left: 434rpx;
    top: 2216rpx;
    width: 94rpx;
    height: 114rpx;
  }
`

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${props => props.height || 200}px;
  }
`
