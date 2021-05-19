
import { createAction } from 'redux-actions'
import request from 'lib/request'


export const FETCH_USER_INFO = 'APP/FETCH_USERINFO'
export const fetchUserInfo = createAction(FETCH_USER_INFO, (id) => {
  const token = localStorage.getItem('rms-token')
  return request(`/api/users/${id}`, {
    headers: {
      Authorization: token,
    },
  })
}
)

export const FETCH_VERIFY_CODE = 'APP/FETCH_VERIFY_CODE'
export const fetchVerifyCode = createAction(FETCH_VERIFY_CODE, phone =>
  request('/auth/message-code', {
    query: { phone },
  })
)

export const LOGIN = 'APP/LOGIN'
export const login = createAction(LOGIN, ({ phone, captcha }) =>
  request('/auth/sign-in', {
    method: 'POST',
    body: { phone, code: captcha },
  })
)

export const LOGOUT = 'APP/LOGOUT'
export const logout = createAction(LOGOUT)

export const SHOW_LOGIN = 'APP/SHOW_LOGIN'
export const showLogin = createAction(SHOW_LOGIN)

export const CLOSE_LOGIN = 'APP/CLOSE_LOGIN'
export const closeLogin = createAction(CLOSE_LOGIN)
