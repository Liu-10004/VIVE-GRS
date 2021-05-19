/**
 * 将时间格式化为 "yyyy 年 yy 月 dd 日"
 *
 * @param {string} times UTC 格式的时间
 * @return 返回 yyyy 年 yy 月 dd 日 格式的日期
 * @see https://github.com/vivedu/VIVEDU-Homepage/issues/125
 */
const formatDate = (times) => {
  const date = new Date(times)

  if (date === 'Invalid Date') throw date

  const year = date.getFullYear()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const day = `0${date.getDate()}`.slice(-2)

  return `${year} 年 ${month} 月 ${day} 日`
}

export { formatDate }
