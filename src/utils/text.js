/**
 * 生成新闻缩略文本
 *
 * @param {string} text 文本
 * @param {number} maxLength 最长字符数
 * @param {string} ellipsis 替换被截字符的字符串
 * @return {string} 符合规定长度的字符
 * @see https://github.com/vivedu/VIVEDU-Homepage/issues/117
 */
export const truncate = (text, maxLength = 32, ellipsis = '......') => {
  const length = text.length

  if (length > maxLength) {
    return `${text.slice(0, maxLength)}${ellipsis}`
  }

  return text
}
