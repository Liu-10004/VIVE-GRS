/**
 * @see https://github.com/vivedu/VIVEDU-Store/issues/450
 */

import { createSelector } from 'reselect'

const selectUserDomain = state => state.get('user')

export const selectUserInfo = createSelector(selectUserDomain, user =>
  user.get('userInfo')
)

export const selectLoginStatus = createSelector(selectUserDomain, user =>
  user.get('loginStatus')
)

