import { combineReducers } from 'redux'
import {GET_LOCATIONS} from './actions'

function locations(state = {}, action) {
  switch (action.type) {
    case GET_LOCATIONS:
      console.log('hit get locations reducer')
      return Object.assign({}, state, {
        locations: action.locations
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  locations
})

export default rootReducer
