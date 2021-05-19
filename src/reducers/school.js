
import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import { FETCH_SCHOOL } from 'actions/school'

const initialState = fromJS({
  entities: {},
})

export default handleActions(
  {
    [`${FETCH_SCHOOL}_FULFILLED`]: (state, { payload }) => {
      const userId = localStorage.getItem('userId')

      return state.setIn(['entities', userId], fromJS(payload))
    },
  },
  initialState
)
