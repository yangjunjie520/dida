import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear' // 导入插件
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear' // 导入插件
import isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件

dayjs.extend(isoWeeksInYear)
// dayjs.extend(weekYear)
dayjs.extend(isLeapYear)
dayjs.extend(weekOfYear)

// 获取XX年第一周，星期一的具体日期
export const getStartWeekDateOfYear = year => {
  return dayjs(year)
    .startOf('week')
    .add(1, 'day')
    .format('YYYY-MM-DD')
}
// 获取XX年最后一天的日期
export const getLastDateOfYear = year => {
  return dayjs(year)
    .endOf('year')
    .format('YYYY-MM-DD')
}
// 获取某个日期最后一周，礼拜日的具体日期 2020-12-28
export const getLastWeekDateOfYear = date => {
  return dayjs(date)
    .endOf('week')
    .add(1, 'day')
    .format('YYYY-MM-DD')
}
// 给定日期，2020-12-28，获取2021年总的周数
export const getWeeksCountOfYear = date => {
  return dayjs(date).isoWeeksInYear()
}

export const GetDateStr = AddDayCount => {
  const dd = new Date()
  dd.setDate(dd.getDate() + AddDayCount)
  const y = dd.getFullYear()
  const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 //获取当前月份的日期，不足10补0
  const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() //获取当前几号，不足10补0
  return y + '-' + m + '-' + d
}

export const THIS_WEEK = [
  dayjs()
    .startOf('week')
    .add(1, 'day')
    .format('YYYY-MM-DD'),
  dayjs()
    .endOf('week')
    .add(1, 'day')
    .format('YYYY-MM-DD'),
]

export const LAST_WEEK = [
  dayjs()
    .startOf('week')
    .add(1, 'day')
    .subtract(1, 'week')
    .format('YYYY-MM-DD'),
  dayjs()
    .endOf('week')
    .add(1, 'day')
    .subtract(1, 'week')
    .format('YYYY-MM-DD'),
]

export const TWO_WEEKS_AGO = [
  dayjs()
    .startOf('week')
    .add(1, 'day')
    .subtract(2, 'week')
    .format('YYYY-MM-DD'),
  dayjs()
    .endOf('week')
    .add(1, 'day')
    .subtract(2, 'week')
    .format('YYYY-MM-DD'),
]

export const THREE_WEEKS_AGO = [
  dayjs()
    .startOf('week')
    .add(1, 'day')
    .subtract(3, 'week')
    .format('YYYY-MM-DD'),
  dayjs()
    .endOf('week')
    .add(1, 'day')
    .subtract(3, 'week')
    .format('YYYY-MM-DD'),
]

export const LAST_MONTH = [
  dayjs()
    .subtract(1, 'month')
    .startOf('month')
    .format('YYYY-MM-DD'),
  dayjs()
    .subtract(1, 'month')
    .endOf('month')
    .format('YYYY-MM-DD'),
]

export const YESTERDAY = [
  dayjs()
    .subtract(1, 'day')
    .format('YYYY-MM-DD'),
  dayjs()
    .subtract(1, 'day')
    .format('YYYY-MM-DD'),
]
