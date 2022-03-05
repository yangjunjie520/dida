import { Text } from '@tarojs/components'
import { StyledColumnView } from './style'

const FirstMileColumns = [
  {
    title: 'Created',
    dataIndex: 'createdCnt',
    fixed: 'left',
    align: 'left',
  },
  {
    title: 'Received',
    dataIndex: 'receivedCnt',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text>{record.receivedCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.receivedRate * 100)
              ? `${(record.receivedRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'RDC Arrived',
    dataIndex: 'rdcArrivedCnt',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text>{record.rdcArrivedCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.rdcArrivedRate * 100)
              ? `${(record.rdcArrivedRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'Pending Arrive',
    dataIndex: 'pendingArrivedCnt',
    backgroundColor: '#FFEFEF',
    render: (text, record, index) => {
      return (
        <StyledColumnView background='#FAFAFF'>
          <Text className='txt red'>{record.pendingArrivedCnt}</Text>
          <Text className='rate'>
            {!Number.isNaN(record.pendingArrivedRate * 100)
              ? `${(record.pendingArrivedRate * 100).toFixed(2)}%`
              : '-'}
          </Text>
        </StyledColumnView>
      )
    },
  },
  {
    title: 'Avg Receive Arrive Times(h)',
    dataIndex: 'avgReceiveArriveTimes',
    backgroundColor: '#E6FAF4',
    render: (text, record, index) => {
      return (
        <StyledColumnView>
          <Text className='txt green'>{record.avgReceiveArriveTimes || '-'}</Text>
        </StyledColumnView>
      )
    },
  },
]

export default FirstMileColumns
