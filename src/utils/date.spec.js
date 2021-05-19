import { formatDate } from './date'

describe('format date', () => {
  it('can parse UTC timestamp', () => {
    expect(formatDate('Sat Jan 06 2018 16:35:58 GMT+0800 (中国标准时间)')).toBe(
      '2018 年 01 月 06 日'
    )
  })

  it('can parse millisecond', () => {
    expect(formatDate(1232324323123)).toBe('2009 年 01 月 19 日')
  })

  it('Invalid Date', () => {
    expect(formatDate('不是时间')).toBe('NaN 年 aN 月 aN 日')
  })
})
