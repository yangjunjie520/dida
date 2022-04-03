/*
 * @Date: 2022-03-31 12:39:05
 * @LastEditors: Jokun
 * @LastEditTime: 2022-03-31 12:40:21
 * @FilePath: \dida\src\components\addressPicker\index.tsx
 */
import { View, PickerView, PickerViewColumn } from "@tarojs/components";
// import PropTypes from 'prop-types'
import React, { Component } from "react";
import address from "../../utils/city.js";
import "./index.scss";

class AddressPicker extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    value: [18, 11, 0],
    provinces: address.provinces,
    citys: address.citys[440000],
    areas: address.areas[441400],
    areaInfo: "",
  };
  cityChange = (e) => {
   
    const pickerValue = e.detail.value;
    const { provinces, citys, value } = this.state;

    const provinceNum = pickerValue[0];
    const cityNum = pickerValue[1];
    const countyNum = pickerValue[2];
    // 如果省份选择项和之前不一样，表示滑动了省份，此时市默认是省的第一组数据，
    if (value[0] != provinceNum) {
      const id = provinces[provinceNum].id;
      this.setState({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id],
      });
    } else if (value[1] != cityNum) {
      // 滑动选择了第二项数据，即市，此时区显示省市对应的第一组数据
      const id = citys[cityNum].id;
      console.log(id);
      this.setState({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id],
      });
    } else {
      // 滑动选择了区
      this.setState({
        value: [provinceNum, cityNum, countyNum],
      });
    }
  }

  //  params true代表传递地址，false不传递
  handlePickerShow(params: boolean) {
    if (params) {
      console.log(this.props);
      const { provinces, citys, areas, value, areaInfo } = this.state;
      // 将选择的城市信息显示到输入框
      const tempAreaInfo =
        provinces[value[0]].name +
        "" +
        citys[value[1]].name +
        areas[value[2]].name;
      this.setState(
        {
          areaInfo: tempAreaInfo,
        },
        () => {
          this.props.onHandleToggleShow(this.state.areaInfo);
        }
      );
    }
  }


  render() {
    const { provinces, citys, areas, value } = this.state;
    const { pickerShow } = this.props;
    console.log(this.state)
    return (
      <View
        className={
          pickerShow
            ? "address-picker-container show"
            : "address-picker-container"
        }
        onClick={this.handlePickerShow.bind(this, true)}
      >
        <View className="picker-content">
          <View className="dialog-header">
            <View
              className="dialog-button cancel"
              onClick={this.handlePickerShow.bind(this, false)}
            >
              取消
            </View>
            <View className="dialog-title">请选择省市区</View>
            <View
              className="dialog-button"
              onClick={this.handlePickerShow.bind(this, true)}
            >
              确定
            </View>
          </View>
          <PickerView
            onChange={this.cityChange}
            value={value}
            className="picker-view-wrap"
          >
            <PickerViewColumn>
              {provinces.map((province, index) => {
                return (
                  <View className="picker-item" key={index}>
                    {province.name}
                  </View>
                );
              })}
            </PickerViewColumn>
            <PickerViewColumn>
              {citys.map((city, index) => {
                return (
                  <View className="picker-item" key={index}>
                    {city.name}
                  </View>
                );
              })}
            </PickerViewColumn>
            <PickerViewColumn>
              {areas.map((area, index) => {
                return (
                  <View className="picker-item" key={index}>
                    {area.name}
                  </View>
                );
              })}
            </PickerViewColumn>
          </PickerView>
        </View>
      </View>
    );
  }
}

// AddressPicker.propTypes = {
//   pickerShow: PropTypes.bool.isRequired,
//   onHandleToggleShow: PropTypes.func.isRequired,
// }

export default AddressPicker;
