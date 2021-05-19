const set = (name, value, days) => {
  const date = new Date()
  const time = days * 24 * 60 * 60 * 1000
  date.setTime(date.getTime() + time)
  const expires = days ? `expires=${date.toGMTString()}` : ''
  document.cookie = `${name}=${value};${expires};`
}

const get = (name) => {
  const cookies = document.cookie.split(';')
  const selectCookie = cookies.filter(item =>
    item.trim().startsWith(`${name}=`))
  return selectCookie[0] ? selectCookie[0].split('=')[1] : ''
}

export default { set, get }
