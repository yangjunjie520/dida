import Filter from '@/components/Filter'
import MoreFilter from '@/components/MoreFilter'
import SelectTimePicker from '@/components/SelectTimePicker'
import Tab from '@/components/Tab'
import { StyledTabPane } from '@/components/Tab/style'
import Table from '@/components/Table'
import TitleFilterBody from '@/components/TitleFilterBody'
import { ConnectState as FilterConnectState } from '@/models/filter'
import bg from '@/static/images/waybill/bg.png'
import {
  LAST_MONTH,
  LAST_WEEK,
  THIS_WEEK,
  THREE_WEEKS_AGO,
  TWO_WEEKS_AGO,
} from '@/utils/handleTime'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AtToast } from 'taro-ui'
import { ConnectState } from './model'
import { StyledOverview } from './style'
import Swiper from './Swiper'
import { DeliveryColumns, FirstMileColumns, LineHaulColumns, RDCColumns } from './tableColumns'

const { safeArea } = Taro.getSystemInfoSync()

const Loading = connect(({ loading }: ConnectState & FilterConnectState) => ({
  overviewLoading: loading.effects['waybill/overview'],
}))((props: any) => {
  return <AtToast isOpened={props.overviewLoading} text='Loading' status='loading'></AtToast>
})

const FilterList = connect(({ waybill, filter }: ConnectState & FilterConnectState) => ({
  filterParams: waybill.filterParams,
  countryList: filter.countryList,
  stationList: filter.stationList,
  clientList: filter.clientList,
  orderTypeList: filter.orderTypeList,
}))((props: any) => {
  const { dispatch, filterParams } = props
  const filterList = [
    {
      label: 'Country',
      value: props.filterParams.destinationCountry,
      type: 'radio',
      options: props.countryList,
      onSubmit: async val => {
        dispatch({
          type: 'waybill/saveFilterParams',
          payload: { destinationCountry: val },
        })
      },
    },
    {
      label: 'Station',
      value: props.filterParams.ocCode,
      type: 'radio',
      options: props.stationList,
      onSubmit: val => {
        dispatch({
          type: 'waybill/saveFilterParams',
          payload: { ocCode: val },
        })
      },
    },
    {
      label: 'Client',
      value: props.filterParams.clientCodes,
      type: 'checkbox',
      options: props.clientList,
      onSubmit: val => {
        dispatch({
          type: 'waybill/saveFilterParams',
          payload: { clientCodes: val },
        })
      },
    },
  ]

  const moreFilterList = [
    {
      title: 'Order Type',
      name: 'orderTypes',
      type: 'multiple',
      labelInValue: true,
      dataSource: props.orderTypeList,
    },
  ]
  const moreOnSubmit = async val => {
    dispatch({
      type: 'waybill/saveFilterParams',
      payload: {
        orderTypes: val.orderTypes,
      },
    })
  }

  useEffect(() => {
    dispatch({ type: 'waybill/watchFilterChanges' })
    dispatch({ type: 'filter/country' })
    dispatch({ type: 'filter/station' })
    dispatch({ type: 'filter/client' })
    dispatch({ type: 'filter/orderType' })
  }, [dispatch])

  return (
    <View>
      <View className='filter-content'>
        <Filter data={filterList} />
        <MoreFilter dataList={moreFilterList} onSubmit={moreOnSubmit} />
      </View>
      <SelectTimePicker
        title='Create Time'
        initDate={THREE_WEEKS_AGO}
        quickTimeOptions={[
          {
            label: 'This week',
            value: THIS_WEEK,
          },
          {
            label: 'Last week',
            value: LAST_WEEK,
          },
          {
            label: 'Two weeks ago',
            value: TWO_WEEKS_AGO,
          },
          {
            label: 'Three weeks ago',
            value: THREE_WEEKS_AGO,
          },
          {
            label: 'Last month',
            value: LAST_MONTH,
          },
        ]}
        onSubmit={({ startTime, endTime }) => {
          dispatch({
            type: 'waybill/saveFilterParams',
            payload: { startTime, endTime },
          })
        }}
      />
    </View>
  )
})

const WayBill = props => {
  const [current, setCurrent] = useState(0)
  const setCurrentSwiper = current => {
    setCurrent(current)
  }
  const { overview, dispatch } = props

  const tabList = [
    { title: 'Delivery' },
    { title: 'Line Haul' },
    { title: 'RDC' },
    { title: 'FirstMile' },
  ]
  const charts = [
    {
      key: 'FirstMile',
      percent: overview?.createdCnt ? 100 : 0,
      color: '#00CE8F',
      value: overview?.createdCnt,
    },
    {
      key: 'Transit',
      percent: (overview?.totalArrivedCnt / overview?.createdCnt) * 100,
      color: '#07A4FF',
      value: overview?.totalArrivedCnt,
    },
    {
      key: 'Delivery',
      percent: (overview?.dSReceivedCnt / overview?.createdCnt) * 100,
      color: '#062CFF',
      value: overview?.dSReceivedCnt,
    },
    {
      key: 'Closed',
      percent: (overview?.waybillClosedCnt / overview?.createdCnt) * 100,
      color: '#151741',
      value: overview?.waybillClosedCnt,
    },
  ]

  useEffect(() => {
    dispatch({ type: 'waybill/getDefault' })
    // 监听时区变化
    Taro.eventCenter.on('timeZoneOnChange', arg => {
      dispatch({ type: 'waybill/getDefault' })
    })
    Taro.showShareMenu({
      withShareTicket: true,
    })
  }, [dispatch])

  return (
    <>
      <Loading />
      <TitleFilterBody
        bgImg={bg}
        Filter={<FilterList />}
        Body={
          <StyledOverview className='at-page'>
            <View className='overview-wrapper'>
              <Text className='overview-tit'>OVERVIEW</Text>
              <Swiper charts={charts} data={overview} cur={current} />
            </View>
            <View className='table-wrapper'>
              <Tab
                tabList={tabList}
                // style={{ maxHeight: `calc(100vh - 152px - ${safeArea.top}px)`, overflow: 'hidden' }}
              >
                <StyledTabPane>
                  <View className='table-tit'>Delivery Performance</View>
                  <Table
                    columns={DeliveryColumns}
                    dataSource={props.deliveryList || []}
                    loading={props.tableLoading}
                    isScrollComplete
                    scroll={{ x: '100vw', y: `calc(100vh - 230px - ${safeArea.top}px)` }}
                  />
                </StyledTabPane>
                <StyledTabPane>
                  <View className='table-tit'>Line Haul Performance</View>
                  <Table
                    columns={LineHaulColumns}
                    dataSource={props.lineHaulList || []}
                    loading={props.tableLoading}
                    isScrollComplete
                    scroll={{ x: '100vw', y: `calc(100vh - 230px - ${safeArea.top}px)` }}
                  />
                </StyledTabPane>
                <StyledTabPane>
                  <View className='table-tit'>RDC Performance</View>
                  <Table
                    columns={RDCColumns}
                    dataSource={props.rdcList || []}
                    loading={props.tableLoading}
                    isScrollComplete
                    scroll={{ x: '100vw', y: `calc(100vh - 230px - ${safeArea.top}px)` }}
                  />
                </StyledTabPane>
                <StyledTabPane>
                  <View className='table-tit'>FirstMile Performance</View>
                  <Table
                    columns={FirstMileColumns}
                    dataSource={props.firstMileList || []}
                    loading={props.tableLoading}
                    isScrollComplete
                    scroll={{ x: '100vw', y: `calc(100vh - 230px - ${safeArea.top}px)` }}
                  />
                </StyledTabPane>
              </Tab>
            </View>
          </StyledOverview>
        }
      />
    </>
  )
}

export default connect(({ waybill }: ConnectState & FilterConnectState) => {
  return {
    ...waybill,
  }
})(WayBill)
