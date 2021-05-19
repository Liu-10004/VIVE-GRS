/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { combineReducers } from 'redux-immutable'
import school from './school'
import routing from './routing'
import user from './user'

// Creates the main reducer with the asynchronously loaded ones
const createReducer = asyncReducers =>
  combineReducers({
    routing,
    school,
    user,
    ...asyncReducers,
  })

export default createReducer
