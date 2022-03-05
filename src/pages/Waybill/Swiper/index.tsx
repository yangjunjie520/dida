import React, { useEffect, useState } from 'react'
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { StyledView, StyledChartCol, StyledChartTxt } from './style'

const getTanDeg = tan => {
  var result = Math.atan(tan) / (Math.PI / 180)
  result = Math.round(result)
  return result
}

const CustomSwiper = React.forwardRef((props, ref) => {
  const { charts, data, cur } = props
  const [current, setCurrent] = useState(0)

  const initData = [
    {
      items: [
        {
          label: 'Created',
          value: data?.createdCnt || 0,
          bg: charts[0].color,
        },
        {
          label: 'Received',
          value: data?.receivedCnt || 0,
          bg: charts[0].color,
          percent: !Number.isNaN(data?.receivedRate * 100)
            ? `${(data?.receivedRate * 100).toFixed(2)}%`
            : '0%',
        },
      ],
    },
    {
      items: [
        {
          label: 'RDC Arrived',
          value: data?.totalArrivedCnt || 0,
          bg: charts[1].color,
        },
        {
          label: 'Shipped',
          value: data?.rdcShippedCnt || 0,
          bg: charts[1].color,
          percent: !Number.isNaN(data?.shippedRate * 100)
            ? `${(data?.shippedRate * 100).toFixed(2)}%`
            : '0%',
        },
        {
          label: 'In Transiting',
          value: data?.inTransitCnt || 0,
          bg: charts[1].color,
          percent: !Number.isNaN(data?.inTransitRate * 100)
            ? `${(data?.inTransitRate * 100).toFixed(2)}%`
            : '0%',
        },
      ],
    },
    {
      items: [
        {
          label: 'DS Received',
          value: data?.dSReceivedCnt || 0,
          bg: '#CDD5FF',
          color: charts[2].color,
        },
        {
          label: 'Delivered',
          value: data?.deliveredCnt || 0,
          bg: '#CDD5FF',
          color: charts[2].color,
          percent: !Number.isNaN(data?.deliveredRate * 100)
            ? `${(data?.deliveredRate * 100).toFixed(2)}%`
            : '0%',
        },
        {
          label: 'Delivering',
          value: data?.deliveringCnt || 0,
          bg: '#CDD5FF',
          color: charts[2].color,
          percent: !Number.isNaN(data?.deliveringRate * 100)
            ? `${(data?.deliveringRate * 100).toFixed(2)}%`
            : '0%',
        },
      ],
    },
    {
      items: [
        {
          label: 'Waybill Closed',
          value: data?.waybillClosedCnt || 0,
          bg: '#DEE5F7',
          color: charts[3].color,
          percent: !Number.isNaN(data?.waybillClosedRate * 100)
            ? `${(data?.waybillClosedRate * 100).toFixed(2)}%`
            : '0%',
        },
        {
          label: 'Order Closed',
          value: data?.orderClosedCnt || 0,
          bg: '#DEE5F7',
          color: charts[3].color,
          percent: !Number.isNaN(data?.orderClosedRate * 100)
            ? `${(data?.orderClosedRate * 100).toFixed(2)}%`
            : '0%',
        },
      ],
    },
  ]

  useEffect(() => {
    setCurrent(cur)
  }, [cur])

  return (
    <StyledView>
      <View className='at-row at-row__align--baseline at-col__justify--center'>
        {charts.map((item, index) => {
          return (
            <View
              className='at-row at-row__align--center at-col__justify--center at-row-top'
              key={index}
            >
              <View
                style={{ color: `${item.color}`, opacity: current !== index ? 0.28 : 1 }}
                className='value'
                key={`top-value-${index}`}
              >
                {item.value}
              </View>
            </View>
          )
        })}
      </View>
      <View className='at-row at-row__align--baseline at-col__justify--center chart-box'>
        {charts.map((item, index) => {
          let tan = 1
          let deg = 90
          if (index < charts.length - 1) {
            tan = (item.percent * 60) / 100 - (charts[index + 1].percent * 60) / 100
            deg = 90 - getTanDeg(12 / tan)
          }
          const height = Number.isNaN((item.percent * 60) / 100) ? 0 : (item.percent * 60) / 100
          return (
            <View
              className='at-col'
              key={item.key}
              onClick={() => {
                setCurrent(index)
              }}
            >
              <StyledChartCol
                style={{ opacity: current !== index ? 0.28 : 1 }}
                className='at-inner-view'
                deg={Number.isNaN(deg) ? 0 : deg}
                color={item.color}
                height={height}
              ></StyledChartCol>
            </View>
          )
        })}
      </View>
      <View className='at-row at-row__align--baseline at-col__justify--center'>
        {charts.map((item, index) => {
          return (
            <View
              className='at-row at-row__align--center at-col__justify--center chart-txt'
              key={`text${item.key}`}
              style={{ opacity: current !== index ? 0.28 : 1 }}
            >
              <StyledChartTxt style={{ background: item.color }}></StyledChartTxt>
              {item.key}
            </View>
          )
        })}
      </View>
      <Swiper
        className='overview-swiper'
        current={current}
        onChange={e => {
          if (e.detail.source == 'touch') {
            setCurrent(e.detail.current)
          }
        }}
        duration={300}
      >
        {initData.map((o, index) => {
          return (
            <SwiperItem className='statistics-list' key={index}>
              {o.items.map((item, i) => {
                return (
                  <View className='item' key={`item${index}`}>
                    <View className='left'>{item.label}</View>
                    <View className='right'>
                      {item.percent && (
                        <View
                          style={{ background: `${item.bg}`, color: `${item.color || '#fff'}` }}
                        >
                          {item.percent}
                        </View>
                      )}
                      <Text>{item.value}</Text>
                    </View>
                  </View>
                )
              })}
            </SwiperItem>
          )
        })}
      </Swiper>
      <View className='swiper-dot-box'>
        {charts.map((item, index) => {
          return (
            <View
              key={index}
              className='swiper-dot'
              index={`dot${index}`}
              style={{ background: `${current === index ? '#062CFF' : '#E1E3E9'}` }}
            ></View>
          )
        })}
      </View>
    </StyledView>
  )
})

export default CustomSwiper
