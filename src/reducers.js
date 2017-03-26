import { combineReducers } from 'redux'
import {GET_LOCATIONS} from './actions'

function locations(state = {}, action) {
  switch (action.type) {
    case GET_LOCATIONS:
      return Object.assign({}, state, {
        locationNames: action.locations,
        receivedAt: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  locations
})

export default rootReducer
