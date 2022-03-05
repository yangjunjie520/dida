import { View, Text } from '@tarojs/components'
import { StyledColumnView } from './style'

const DeliveryColumns = [
  {
    title: 'Station',
    dataIndex: 'deliveryStationName',
    fixed: 'left',
    align: 'left',
  },
  {
    title: 'DS Received',
    dataIndex: 'dSReceivedCnt',
  },
  {
    title: 'OFD',
    dataIndex: 'ofdCnt',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text>{record.ofdCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.ofdRate * 100) ? `${(record.ofdRate * 100).toFixed(2)}%` : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'Pending OFD',
    dataIndex: 'pendingOfdCnt',
    backgroundColor: '#FFEFEF',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text className='txt red'>{record.pendingOfdCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.pendingOfdRate * 100)
              ? `${(record.pendingOfdRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'Dld',
    dataIndex: 'dldCnt',
    render: (text, record, index) => {
      return (
        <StyledColumnView background='#FAFAFF'>
          <Text className='txt'>{record.dldCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.dldRate * 100) ? `${(record.dldRate * 100).toFixed(2)}%` : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'Delivering',
    dataIndex: 'deliveringCnt',
    render: (text, record, index) => {
      return (
        <StyledColumnView background='#FAFAFF'>
          <Text className='txt'>{record.deliveringCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.deliveringRate * 100)
              ? `${(record.deliveringRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: '＞24h OFD',
    dataIndex: 'more24OfdCnt',
    backgroundColor: '#FFEFEF',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text className='txt red'>{record.more24OfdCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.more24OfdRate * 100)
              ? `${(record.more24OfdRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'Avg Receive -OFD Times(h)',
    dataIndex: 'avgReceiveOFDTimes',
    backgroundColor: '#E6FAF4',
    render: (text, record, index) => {
      return (
        <StyledColumnView background='#FAFAFF'>
          <Text className='txt green'>{record.avgReceiveOFDTimes || '-'}</Text>
        </StyledColumnView>
      )
    },
  },
]

export default DeliveryColumns
