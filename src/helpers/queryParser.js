/**
 * 切割 query, 如 “？key1=value1&key2=value2” => {key1: value1, key2: value2}
 *
 * @param {string} query 形如 “？key1=value1&key2=value2” 的 query
 * @return {JSON object} 返回 {key1: value1, key2: value2}
 */

const queryParser = (query) => {
  if (!query) return {}

  const pairs = query.split('?')[1].split('&')

  return pairs.reduce((previous, current) => {
    const [key, value = ''] = current.split('=')

    return {
      ...previous,
      [key]: value,
    }
  }, {})
}

/**
 * @param {string} query 形如 “?l1=value1&l2=value2&keyword=value3&page=value4”
 * @return {object} 返回 {category: 'value2', keyword: 'value3', page: 'value4'}
 */

export const parseQueryToString = (query, pathname) => {
  const queryJSON = queryParser(query)
  let page
  let keyword
  let category

  if (Object.prototype.hasOwnProperty.call(queryJSON, 'page')) {
    page = queryJSON.page
    delete queryJSON.page
  }
  if (Object.prototype.hasOwnProperty.call(queryJSON, 'keyword')) {
    keyword = queryJSON.keyword
    delete queryJSON.keyword
  }
  if (Object.values(queryJSON).length > 0) {
    category = Object.values(queryJSON).slice(-1)[0]
  } else if (pathname === 'collection') {
    category = '01'
  } else {
    category = '00'
  }

  return { category, keyword, page }
}

export default queryParser
