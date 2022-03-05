import { View, Text } from '@tarojs/components'
import { StyledColumnView } from './style'

const RDCColumns = [
  {
    title: 'RDC Name',
    dataIndex: 'rdcName',
    fixed: 'left',
    align: 'left',
  },
  {
    title: 'RDC Arrived',
    dataIndex: 'rdcArrivedCnt',
  },
  {
    title: 'Shipped',
    dataIndex: 'shippedCnt',
  },
  {
    title: 'Pending Shipping',
    dataIndex: 'pendingShippingCnt',
    backgroundColor: '#FFEFEF',
    render: (text, record, index) => {
      return (
        <StyledColumnView background='#FAFAFF'>
          <Text className='txt red'>{record.pendingShippingCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.pendingShippingRate * 100)
              ? `${(record.pendingShippingRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: '＞24h Shipped',
    dataIndex: 'more24ShippedCnt',
    backgroundColor: '#FFEFEF',
    render: (text, record, index) => {
      return (
        <StyledColumnView background='#FAFAFF'>
          <Text className='txt red'>{record.more24ShippedCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.more24ShippedRate * 100)
              ? `${(record.more24ShippedRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'Avg Arrive Ship Times(h)',
    dataIndex: 'avgArriveShipTimes',
    backgroundColor: '#E6FAF4',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text className='txt green'>{record.avgArriveShipTimes || '-'}</Text>
        </StyledColumnView>
      )
    },
  },
]

export default RDCColumns
