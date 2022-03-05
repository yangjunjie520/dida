import { View, Text } from '@tarojs/components'
import { StyledColumnView } from './style'

const LineHaulColumns = [
  {
    title: 'Delivery Station Departure',
    dataIndex: 'departureStationToDeliveryStation',
    fixed: 'left',
    align: 'left',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text>{record.departureStationToDeliveryStation.split('——')[0] || '-'}</Text>
          <Text className='rate'>
            {record.departureStationToDeliveryStation.split('——')[1] || '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'RDC Shipped',
    dataIndex: 'rdcShippedCnt',
  },
  {
    title: 'In Transiting',
    dataIndex: 'inTransitingCnt',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text>{record.inTransitingCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.inTransitingRate * 100)
              ? `${(record.inTransitingRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'DS Received',
    dataIndex: 'dsReceivedCnt',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text>{record.dsReceivedCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.dsReceivedRate * 100)
              ? `${(record.dsReceivedRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'Receive Discrepancy',
    dataIndex: 'receiveDiscrepancyCnt',
    backgroundColor: '#FFEFEF',
    render: (text, record, index) => {
      return (
        <StyledColumnView background='#FAFAFF'>
          <Text className='txt red'>{record.receiveDiscrepancyCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.receiveDiscrepancyRate * 100)
              ? `${(record.receiveDiscrepancyRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'OverTime Received',
    dataIndex: 'overTimeReceivedCnt',
    backgroundColor: '#FFEFEF',
    render: (text, record, index) => {
      return (
        <StyledColumnView background='#FAFAFF'>
          <Text className='txt red'>{record.overTimeReceivedCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.overTimeReceivedRate * 100)
              ? `${(record.overTimeReceivedRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'Avg Ship Receive Times(h)',
    dataIndex: 'avgShipReceiveTimes',
    backgroundColor: '#E6FAF4',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text className='txt green'>{record.avgShipReceiveTimes || '-'}</Text>
        </StyledColumnView>
      )
    },
  },
]

export default LineHaulColumns
