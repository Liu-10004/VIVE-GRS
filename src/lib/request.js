/**
 * @see https://github.com/vivedu/VIVEDU-Homepage/issues/114
 */

/* eslint-disable no-param-reassign */
import 'isomorphic-fetch'

class ResponseError extends Error {
  constructor(status, message) {
    super(message)
    this.status = status
  }
}

const formData = obj =>
  Object.keys(obj).reduce((data, key) => {
    data.append(key, obj[key])
    return data
  }, new FormData())

/**
 * Encode a javascript object into a query string
 * @param obj
 * @returns {string} query string
 */
const serialize = query =>
  Object.keys(query)
    .filter(key => query[key] !== null && query[key] !== undefined)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
    .join('&')

const isOk = response => response.status >= 200 && response.status < 300

const isJson = (response) => {
  if (response.status === 204) {
    return false
  }

  if (response.headers.get('content-length') === '0') {
    return false
  }

  const type = response.headers.get('content-type')
  return type && type.indexOf('application/json') !== -1
}

export const defaultConfig = {
  method: 'GET',
  credentials: 'same-origin',
  baseUrl: 'http://120.27.242.84:8099/courseware',
  headers: null,
}

/**
 * HTTP
 *
 * 带有参数的 GET 请求：
 *   http('/api/messages', {query: {limit: 10}})
 *
 * 表单提交：
 *   http('/api/user/create', {method: 'POST', form: {name: "vivedu"}})
 *   http('/api/user/create', {method: 'POST', form: new FormData})
 *   http('/api/user/create', {method: 'POST', body: new FormData})
 *
 * Restful JSON 请求：
 *   http('/api/users', {method: 'POST', body: {name: 'vivedu'}})
 */
const request = (url, options = {}) => {
  options = Object.assign({}, defaultConfig, options, {
    headers: {
      ...defaultConfig.headers,
      ...options.headers,
      accept: 'application/json, text/plain, */*',
    },
  })

  if (typeof options.query === 'object') {
    url += (url.indexOf('?') === -1 ? '?' : '') + serialize(options.query)
    delete options.query
  }

  if (
    options.body &&
    typeof options.body !== 'string' &&
    !(options.body instanceof FormData) &&
    (options.method === 'POST' ||
      options.method === 'PUT' ||
      options.method === 'PATCH')
  ) {
    options.body = JSON.stringify(options.body)
    Object.assign(options.headers, {
      'Content-Type': 'application/json',
    })
  }

  if (options.form) {
    options.body =
      options.form instanceof FormData ? options.form : formData(options.form)
    delete options.form
  }

  return fetch(
    url.startsWith('http') || url.startsWith('//')
      ? url
      : defaultConfig.baseUrl + url,
    options
  ).then((response) => {
    // @see https://github.com/vivedu/VIVEDU-Store/issues/24
    if (isOk(response)) {
      return isJson(response)
        ? response.json().then(data => data)
        : response.text()
    }

    return isJson(response)
      ? response
          .json()
          .then(json => Promise.reject({ ...json, status: response.status }))
      : response
          .text()
          .then(text =>
            Promise.reject(new ResponseError(text, response.status))
          )
  })
}

export default request
