
import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import {
  LOGIN,
  LOGOUT,
  FETCH_USER_INFO,
  FETCH_UPDATE_USER_INFO,
  SHOW_LOGIN,
  CLOSE_LOGIN,
} from 'actions/user'
import parseUserInfo from 'helpers/userInfoParser'

const initialState = fromJS({
  userInfo: {},
  loginStatus: false,
})

export default handleActions(
  {
    [`${LOGIN}_FULFILLED`]: (state, { payload }) => {
      localStorage.setItem('userId', payload.userId)
      localStorage.setItem('userName', payload.userName)
      localStorage.setItem('rms-token', payload.token)

      return state.set('userInfo', payload)
    },

    [`${LOGIN}_REJECTED`]: (state, { payload }) => {
      localStorage.setItem('userId', '')
      localStorage.setItem('rms-token', '')
      localStorage.setItem('userName', '')

      return state.set('userInfo', payload)
    },

    [`${FETCH_USER_INFO}_FULFILLED`]: state => state,
    [`${FETCH_USER_INFO}_REJECTED`]: (state, { payload: { error } }) => {
      if (error === 'Unauthorized') {
        localStorage.setItem('userId', '')
        localStorage.setItem('rms-token', '')
        localStorage.setItem('userName', '')
      }

      return state.set('userInfo', fromJS({}))
    },

    [LOGOUT]: (state) => {
      localStorage.setItem('userId', '')
      localStorage.setItem('userName', '')
      localStorage.setItem('rms-token', '')

      return state.set('userInfo', fromJS({}))
    },

    [SHOW_LOGIN]: state => state.set('loginStatus', true),

    [CLOSE_LOGIN]: state => state.set('loginStatus', false),

    [`${FETCH_UPDATE_USER_INFO}_FULFILLED`]: (state, { payload: { data } }) =>
      state.set('userInfo', fromJS({ ...parseUserInfo(data) })),
  },
  initialState
)
