import { styled } from "linaria/react";
import { View } from "@tarojs/components";

export const StyledOverView = styled(View)`
  background: #f7f7f7;
  align-items: center;
  min-height: 100vh;

  padding-bottom: 196rpx;
  

  .section1 {
    z-index: 86;
    height: 324rpx;
    overflow: hidden;
    background: url("../../static/images/my/pic_bg_2.png") 100% no-repeat;
    background-size: 100% 324rpx;
    width: 750rpx;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }
  .section2 {
    z-index: auto;
    width: 680rpx;
    height: 42rpx;
    flex-direction: row;
    display: flex;
    margin: 4rpx 0 0 36rpx;
  }
  .word1 {
    z-index: 109;
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
    z-index: 104;
    width: 34rpx;
    height: 22rpx;
    margin: 8rpx 0 0 438rpx;
  }
  .mod1 {
    z-index: 100;
    width: 32rpx;
    height: 22rpx;
    background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng844e2577a5d293008bc4c73d8eff6816403b8c9c20a53b2b16a20e293a52d5c0)
      0rpx 0rpx no-repeat;
    background-size: 32rpx 24rpx;
    display: flex;
    flex-direction: column;
    margin: 8rpx 0 0 10rpx;
  }
  .label2 {
    z-index: 96;
    width: 50rpx;
    height: 24rpx;
    margin: 6rpx 0 0 8rpx;
  }
  .section3 {
    z-index: auto;
    width: 696rpx;
    height: 54rpx;
    flex-direction: row;
    display: flex;
    margin: 14rpx 0 0 20rpx;
  }
  .icon1 {
    z-index: 92;
    width: 48rpx;
    height: 48rpx;
    margin-top: 6rpx;
  }
  .txt1 {
    z-index: 91;
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
  .layer2 {
    z-index: 110;
    width: 156rpx;
    height: 54rpx;
    border-radius: NaNrpx;
    background-color: rgba(0, 0, 0, 0.1);
    margin-left: 338rpx;
    display: flex;
    flex-direction: column;
  }

  .box {
    padding: 0 24rpx;
    margin-top: -100rpx;
    z-index: 999;
    transform: translateZ(1);
    position: relative;
  }
  .tab {
    height: 80rpx;
    background: #fff1e3;
    border-radius: 12rpx 12rpx 0px 0px;
    display: flex;
  
  }
  .tab-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
  }
  .tab-item-active {
    position: relative;
    display: inline-block;
    background: transparent;
    &:before {
      content: "";
      position: absolute;
      top: -30rpx;
      left: 0;
      right: 0;
      background: #fff;

      　　　　　　　　　　border-bottom: none;
      　　　　　　　　　　transform: perspective(1.4em) scale(1, 1)
        rotateX(5deg);
      　　　　　　　　　　transform-origin: bottom left;
      z-index: 8;
      width: 238rpx;
      height: 116rpx;
      border-radius: 12px 12px 0 0;
    }
  }
  .tab-Text {
    z-index: 134;

    display: block;
    overflow-wrap: break-word;
    color: rgba(102, 102, 102, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    z-index: 999;
  }
  .tab-Text-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
   text-indent: 40rpx;
    font-weight: 500;
    color: #ff7201;
    font-size: 32rpx;
    line-height: 80rpx;
    z-index: 999;
  }

  .layer6 {
  z-index: 114;
  height: 202rpx;
  border-radius: NaNrpx;
  background-color: rgba(255,255,255,1);
  width: 702rpx;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  padding: 0 12rpx 18rpx 0;
}
.bd8 {
  z-index: auto;
  width: 662rpx;
  height: 154rpx;
  display: flex;
  flex-direction: column;
}
.box6 {
  z-index: auto;
  width: 488rpx;
  height: 66rpx;
  margin-left: 80rpx;
  flex-direction: row;
  display: flex;
}
.word19 {
  z-index: 131;
  width: 126rpx;
  height: 58rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 42rpx;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 58rpx;
  text-align: left;
  margin-top: 8rpx;
}
.pic3 {
  z-index: 121;
  width: 152rpx;
  height: 46rpx;
  margin-left: 42rpx;
}
.txt11 {
  z-index: 132;
  width: 84rpx;
  height: 58rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 42rpx;
  font-family: PingFangSC-Semibold;
  white-space: nowrap;
  line-height: 58rpx;
  text-align: left;
  margin: 8rpx 0 0 84rpx;
}
.box7 {
  z-index: 120;
  width: 646rpx;
  height: 2rpx;
  border-bottom: 2rpx solid #F3F3F3;
   align-self: flex-start;
  margin-top: 22rpx;
  display: flex;
  flex-direction: column;
}
.box8 {
  z-index: auto;
  width: 662rpx;
  height: 48rpx;
  margin-top: 16rpx;
  flex-direction: row;
  display: flex;
}
.info7 {
  z-index: 119;
  width: 112rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(136,136,136,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-top: 4rpx;
}
.word20 {
  z-index: 115;
  width: 84rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(204,204,204,1);
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin: 4rpx 0 0 410rpx;
}
.icon5 {
  z-index: 116;
  width: 48rpx;
  height: 48rpx;
  margin-left: 8rpx;
}

.section6 {
  z-index: 3;
  height: 404rpx;
  border-radius: 20rpx;
  background-color: rgba(255,255,255,1);
  align-self: center;
  margin: 16rpx auto 0;
  width: 702rpx;
  justify-content: flex-end;
  padding-bottom: 26rpx;
  display: flex;
  flex-direction: column;
}
.mod2 {
  z-index: auto;
  width: 702rpx;
  height: 346rpx;
  display: flex;
  flex-direction: column;
}
.info1 {
  z-index: 10;
  width: 128rpx;
  height: 44rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 32rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 44rpx;
  text-align: left;
  align-self: flex-start;
  margin-left: 28rpx;
}
.section7 {
  z-index: auto;
  width: 702rpx;
  height: 186rpx;
  margin-top: 12rpx;
  display: flex;
  flex-direction: column;
}
.box1-0 {
  z-index: 6;
  height: 90rpx;
  background-color: rgba(216,216,216,0);
  width: 702rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.outer1-0 {
  z-index: auto;
  width: 650rpx;
  height: 60rpx;
  flex-direction: row;
  display: flex;
}
.txt3-0 {
  z-index: 11;
  width: 84rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(136,136,136,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-top: 10rpx;
}
.word3-0 {
  z-index: 12;
  width: 36rpx;
  height: 50rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(136,136,136,1);
  font-size: 36rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 50rpx;
  text-align: left;
  margin: 4rpx 0 0 172rpx;
}
.layer3-0 {
  z-index: 8;
  height: 60rpx;
  border-radius: 4rpx;
  background-color: rgba(241,241,241,1);
  margin-left: 16rpx;
  width: 282rpx;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10rpx;
  display: flex;
  flex-direction: column;
}
.main1-0 {
  z-index: auto;
  width: 176rpx;
  height: 44rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.word4-0 {
  z-index: 14;
  width: 62rpx;
  height: 44rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 32rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 44rpx;
  text-align: left;
}
.info2-0 {
  z-index: 16;
  width: 66rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(187,187,187,1);
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-top: 2rpx;
}
.word5-0 {
  z-index: 18;
  width: 36rpx;
  height: 50rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(136,136,136,1);
  font-size: 36rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 50rpx;
  text-align: left;
  margin: 4rpx 0 0 24rpx;
}
.box1-1 {
  z-index: 6;
  height: 90rpx;
  background-color: rgba(216,216,216,0);
  width: 702rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.outer1-1 {
  z-index: auto;
  width: 650rpx;
  height: 60rpx;
  flex-direction: row;
  display: flex;
}
.txt3-1 {
  z-index: 11;
  width: 84rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(136,136,136,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-top: 10rpx;
}
.word3-1 {
  z-index: 12;
  width: 36rpx;
  height: 50rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(136,136,136,1);
  font-size: 36rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 50rpx;
  text-align: left;
  margin: 4rpx 0 0 172rpx;
}
.layer3-1 {
  z-index: 8;
  height: 60rpx;
  border-radius: 4rpx;
  background-color: rgba(241,241,241,1);
  margin-left: 16rpx;
  width: 282rpx;
  justify-content: center;
  align-items: flex-end;
  padding-right: 10rpx;
  display: flex;
  flex-direction: column;
}
.main1-1 {
  z-index: auto;
  width: 176rpx;
  height: 44rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.word4-1 {
  z-index: 14;
  width: 62rpx;
  height: 44rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 32rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 44rpx;
  text-align: left;
}
.info2-1 {
  z-index: 16;
  width: 66rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(187,187,187,1);
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-top: 2rpx;
}
.word5-1 {
  z-index: 18;
  width: 36rpx;
  height: 50rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(136,136,136,1);
  font-size: 36rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 50rpx;
  text-align: left;
  margin: 4rpx 0 0 24rpx;
}
.section8 {
  z-index: 4;
  height: 76rpx;
  border-radius: 8rpx;
  background: linear-gradient(136deg, #FE9F0C 0%, #FF7201 100%);
  align-self: center;
  margin-top: 28rpx;
  width: 646rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.word6 {
  z-index: 5;
  width: 60rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,255,255,1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
}

.modInp {
    position: relative;
  }
  .mod12 {
    z-index: 28;
    height: 60rpx;
    border-radius: 4rpx;
    background-color: rgba(241, 241, 241, 1);
    margin-left: 16rpx;
    width: 302rpx;
    justify-content: center;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
    color: #323546;
    font-size: 32rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 44rpx;
    text-align: center;
  }
  
  .txt4 {
    z-index: 32;
    width: 42rpx;
    height: 40rpx;
    display: block;
    overflow-wrap: break-word;
    color: rgba(187, 187, 187, 1);
    font-size: 28rpx;
    font-family: PingFangSC-Medium;
    white-space: nowrap;
    line-height: 40rpx;
    text-align: left;
    margin-top: 2rpx;
    position: absolute;
    top: 10rpx;
    right: 10rpx;
  }


  .section9 {
    z-index: 22;
    height: 192rpx;
    border-radius: 20rpx;
    background-color: rgba(255,255,255,1);
    align-self: center;
    margin: 16rpx auto 0;
    width: 702rpx;
    display: flex;
    flex-direction: column;
  }
.main2 {
  z-index: auto;
  width: 702rpx;
  height: 192rpx;
  display: flex;
  flex-direction: column;
}
.box2 {
  z-index: 23;
  height: 96rpx;
  background-color: rgba(216,216,216,0);
  width: 702rpx;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 12rpx;
  display: flex;
  flex-direction: column;
}
.layer4 {
  z-index: auto;
  width: 662rpx;
  height: 72rpx;
  display: flex;
  flex-direction: column;
}
.bd2 {
  z-index: auto;
  width: 662rpx;
  height: 48rpx;
  flex-direction: row;
  display: flex;
}
.info3 {
  z-index: 26;
  width: 84rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(136,136,136,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-top: 4rpx;
}
.txt4s {
  z-index: 28;
  width: 84rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(204,204,204,1);
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin: 4rpx 0 0 438rpx;
}
.label3 {
  z-index: 30;
  width: 48rpx;
  height: 48rpx;
  margin-left: 8rpx;
}
.bd3 {
  z-index: 25;
  width: 646rpx;
  height: 2rpx;
  border-bottom: 2rpx solid #F3F3F3;
  align-self: flex-start;
  margin-top: 22rpx;
  display: flex;
  flex-direction: column;
}
.box3 {
  z-index: 24;
  height: 96rpx;
  background-color: rgba(216,216,216,0);
  width: 702rpx;
  justify-content: center;
  align-items: flex-end;
  padding-right: 12rpx;
  display: flex;
  flex-direction: column;
}
.box4 {
  z-index: auto;
  width: 662rpx;
  height: 48rpx;
  flex-direction: row;
  display: flex;
}
.word7 {
  z-index: 27;
  width: 112rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(136,136,136,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin-top: 4rpx;
}
.txt5 {
  z-index: 29;
  width: 84rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(204,204,204,1);
  font-size: 28rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin: 4rpx 0 0 410rpx;
}

.label4 {
  z-index: 33;
  width: 48rpx;
  height: 48rpx;
  margin-left: 8rpx;
}
.section10 {
  z-index: 83;
  width: 146rpx;
  height: 24rpx;
  border-radius: 12rpx;
  background-image: url('../../static/images/yundan/juxing.png');
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  margin: 72rpx 0 15rpx 52rpx;
}

.word21 {
  z-index: 84;
  position: absolute;
  left: 24rpx;
  bottom: 2rpx;
 
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 40rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  
  text-align: left;
}

.section11 {
  z-index: 38;
  height: 186rpx;
  border-radius: 20rpx;
  border: 2px solid rgba(255,114,1,1);
  background-color: rgba(255,255,255,1);
  align-self: center;
  margin-top: 30rpx;
  width: 702rpx;
  display: flex;
  flex-direction: column;
  margin: 16rpx auto;
}
.bd4 {
  z-index: auto;
  width: 672rpx;
  height: 56rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin: 6rpx 0 0 28rpx;
}
.txt6 {
  z-index: 39;
  width: 290rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
  margin-top: 14rpx;
}
.box5 {
  z-index: 44;
  height: 52rpx;

  background-color: rgba(255,230,190,1);
  width: 122rpx;
  justify-content: flex-start;
  padding-top: 4rpx;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 0 16rpx 0 32rpx;
}
.word8 {
  z-index: 57;
  width: 48rpx;
  height: 34rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,114,1,1);
  font-size: 24rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 34rpx;
  text-align: left;
}
.bd5 {
  z-index: auto;
  width: 242rpx;
  height: 36rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin: 8rpx 0 0 28rpx;
}
.mod3 {
  z-index: 43;
  height: 36rpx;
  border-radius: 4rpx;
  background-color: rgba(244,247,250,1);
  width: 108rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.word9 {
  z-index: 46;
  width: 92rpx;
  height: 28rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 20rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 28rpx;
  text-align: left;
}
.mod4 {
  z-index: 45;
  height: 36rpx;
  border-radius: 4rpx;
  background-color: rgba(244,247,250,1);
  width: 126rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.word10 {
  z-index: 58;
  width: 110rpx;
  height: 28rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 20rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 28rpx;
  text-align: left;
}
.bd6 {
  z-index: auto;
  width: 646rpx;
  height: 60rpx;
  flex-direction: row;
  display: flex;
  margin: 4rpx 0 0 28rpx;
}
.icon2 {
  z-index: 51;
  width: 32rpx;
  height: 32rpx;
  margin-top: 20rpx;
}
.info4 {
  z-index: 47;
  width: 112rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin: 16rpx 0 0 8rpx;
}
.label5 {
  z-index: 48;
  width: 40rpx;
  height: 40rpx;
  margin: 16rpx 0 0 2rpx;
}
.info5 {
  z-index: 40;
  width: 60rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 30rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
  margin: 14rpx 0 0 242rpx;
}
.info6 {
  z-index: 41;
  width: 18rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,114,1,1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
  margin: 14rpx 0 0 14rpx;
}
.word11 {
  z-index: 42;
  width: 116rpx;
  height: 60rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,114,1,1);
  font-size: 44rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 60rpx;
  text-align: left;
  margin-left: 2rpx;
}


.section12 {
  z-index: 60;
  height: 890rpx;
  border-radius: 20rpx;
  background-color: rgba(255,255,255,1);
  align-self: center;
  margin: 16rpx auto 0;
  width: 702rpx;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
}
.wrap1 {
  z-index: auto;
  width: 674rpx;
  height: 858rpx;
  display: flex;
  flex-direction: column;
}
.block1 {
  z-index: auto;
  width: 674rpx;
  height: 62rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.word12 {
  z-index: 63;
  width: 290rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(50,53,70,1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
  margin-top: 20rpx;
}
.bd7 {
  z-index: 68;
  height: 56rpx;
  border-radius: NaNrpx;
  background-color: rgba(255,230,190,1);
  width: 124rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 0 16rpx 0 32rpx;
}
.txt7 {
  z-index: 81;
  width: 48rpx;
  height: 34rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,114,1,1);
  font-size: 24rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 34rpx;
  text-align: left;
}
.block2 {
  z-index: auto;
  width: 242rpx;
  height: 36rpx;
  margin-top: 8rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.mod5 {
  z-index: 67;
  height: 36rpx;
  border-radius: 4rpx;
  background-color: rgba(244,247,250,1);
  width: 108rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.word13 {
  z-index: 70;
  width: 92rpx;
  height: 28rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 20rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 28rpx;
  text-align: left;
}
.mod6 {
  z-index: 69;
  height: 36rpx;
  border-radius: 4rpx;
  background-color: rgba(244,247,250,1);
  width: 126rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.txt8 {
  z-index: 82;
  width: 110rpx;
  height: 28rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 20rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 28rpx;
  text-align: left;
}
.block3 {
  z-index: auto;
  width: 646rpx;
  height: 60rpx;
  margin-top: 4rpx;
  flex-direction: row;
  display: flex;
}
.icon3 {
  z-index: 75;
  width: 32rpx;
  height: 32rpx;
  margin-top: 20rpx;
}
.word14 {
  z-index: 71;
  width: 112rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: left;
  margin: 16rpx 0 0 8rpx;
}
.label6 {
  z-index: 72;
  width: 40rpx;
  height: 40rpx;
  margin: 16rpx 0 0 2rpx;
}
.txt9 {
  z-index: 64;
  width: 60rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 30rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
  margin: 14rpx 0 0 242rpx;
}
.word15 {
  z-index: 65;
  width: 18rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,114,1,1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
  margin: 14rpx 0 0 14rpx;
}
.word16 {
  z-index: 66;
  width: 116rpx;
  height: 60rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,114,1,1);
  font-size: 44rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 60rpx;
  text-align: left;
  margin-left: 2rpx;
}
.block4 {
  z-index: 62;
  width: 646rpx;
  height: 2rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc81cb673e4bd3e6b41cf067a820197b23b482652883b074f24304e8b293dca87) 100% no-repeat;
  align-self: flex-start;
  margin-top: 20rpx;
  display: flex;
  flex-direction: column;
}
.infoBox1 {
  z-index: 61;
  width: 672rpx;
  height: 648rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(102,102,102,1);
  font-size: 24rpx;
  font-family: PingFangSC-Regular;
  line-height: 36rpx;
  text-align: left;
  align-self: flex-start;
  margin-top: 18rpx;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tuijian{
  position: relative;
}


 /* 底部 */
 .section4s {
  z-index: 81;
  height: 108rpx;
  background-color: rgba(255,255,255,1);
 
 
  justify-content: center;
  align-items: flex-end;
  padding-right: 24rpx;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 24rpx;
  z-index: 999;
}

.section13 {
  z-index: 137;
  height: 108rpx;
  background-color: rgba(255,255,255,1);
  margin-top: 32rpx;
  width: 750rpx;
  justify-content: center;
  align-items: flex-end;
  padding-right: 24rpx;
  display: flex;
  flex-direction: column;
}
.mod7 {
  z-index: auto;
  width: 626rpx;
  height: 86rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}
.outer2 {
  z-index: auto;
  width: 96rpx;
  height: 86rpx;
  display: flex;
  flex-direction: column;
}
.icon4 {
  z-index: 141;
  width: 48rpx;
  height: 48rpx;
  align-self: center;
}
.word17 {
  z-index: 140;
  width: 96rpx;
  height: 34rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(67,70,88,1);
  font-size: 24rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 34rpx;
  text-align: left;
  margin-top: 4rpx;
}
.outer3 {
  z-index: 138;
  height: 72rpx;
  border-radius: 36rpx;
  background: linear-gradient(136deg, #FE9F0C 0%, #FF7201 100%);
  margin-top: 8rpx;
  width: 380rpx;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.txt10 {
  z-index: 139;
  width: 120rpx;
  height: 42rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,255,255,1);
  font-size: 30rpx;
  font-family: PingFangSC-Medium;
  white-space: nowrap;
  line-height: 42rpx;
  text-align: left;
}
`;

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
  z-index: 1000;

  .mod7 {
  z-index: 88;
  height: 628rpx;
  border-radius: 36rpx;
  overflow: hidden;
  background: #fff;
  width: 522rpx;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1000;
}
.mod8 {
  z-index: auto;
  width: 328rpx;
  height: 62rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin: 16rpx 0 0 170rpx;
}
.info2 {
  z-index: 94;
  width: 176rpx;
  height: 50rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,255,255,1);
  font-size: 44rpx;
  font-family: FZZYJW--GB1-0;
  white-space: nowrap;
  line-height: 50rpx;
  text-align: left;
  margin-top: 12rpx;
}
.label3 {
  z-index: 103;
  width: 32rpx;
  height: 32rpx;
}
.mod9 {
  z-index: auto;
  width: 168rpx;
  height: 80rpx;
  flex-direction: row;
  display: flex;
  margin: 356rpx 0 0 174rpx;
}
.infoBox1 {
  z-index: 95;
  width: 168rpx;
  height: 80rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(51,51,51,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  line-height: 40rpx;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mod10 {
  z-index: auto;
  width: 338rpx;
  height: 40rpx;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin: 38rpx 0 0 90rpx;
}
.icon4 {
  z-index: 97;
  width: 32rpx;
  height: 32rpx;
  margin-top: 4rpx;
}
.info3 {
  z-index: 96;
  width: 296rpx;
  height: 40rpx;
  display: block;
  overflow-wrap: break-word;
  color: rgba(255,114,1,1);
  font-size: 28rpx;
  font-family: PingFangSC-Regular;
  white-space: nowrap;
  line-height: 40rpx;
  text-align: center;
}
.mod11 {
  z-index: 93;
  position: absolute;
  left: 0rpx;
  top: 0rpx;
  width: 522rpx;
  height: 104rpx;
  background: linear-gradient(232deg, #FFA00C 0%, #FF7201 100%);
  display: flex;
  flex-direction: column;
}
.mod12 {
  z-index: 90;
  height: 282rpx;
  /* background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6d9cd0c6055dd7b63f69879ad09958161ffd9ed4c0904280d0014202ca3cde25) 100% no-repeat; */
  width: 282rpx;
  justify-content: flex-end;
  padding-bottom: 106rpx;
  align-items: center;
  position: absolute;
  left: 122rpx;
  top: 142rpx;
  display: flex;
  flex-direction: column;
}
.mod13 {
  z-index: auto;
  width: 54rpx;
  height: 64rpx;
  display: flex;
  flex-direction: column;
}
.label4 {
  z-index: 91;
  width: 50rpx;
  height: 44rpx;
  align-self: flex-end;
}
.icon5 {
  z-index: 92;
  width: 52rpx;
  height: 12rpx;
  align-self: flex-start;
  margin-top: 8rpx;
}
`;

export const DialogView = styled.view<{ height: string }>`
  .at-float-layout__container {
    height: ${(props) => props.height || 200}px;
  }
`;
