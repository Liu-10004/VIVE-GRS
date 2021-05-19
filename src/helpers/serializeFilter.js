import { findCategory } from 'enums/ResourceType'

// eslint-disable-next-line arrow-parens
const serializeFilter = query => {
  let { category, keyword } = query

  if (category === '00') {
    category = '全部'
  } else {
    const categoryArray = category.split(',')
    category = categoryArray
      .filter(item => !!item)
      .map(item => findCategory(item).text)
  }

  keyword = keyword ? `,${keyword}` : ''

  return `${category}${keyword}`
}

export default serializeFilter
