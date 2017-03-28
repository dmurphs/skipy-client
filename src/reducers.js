import { combineReducers } from 'redux'
import {GET_LOCATIONS, GET_LOCATION_MONTHLY_SNOW} from './actions'

function monthlySnowData(state = {}, action) {
  switch (action.type) {
    case GET_LOCATION_MONTHLY_SNOW:
      return Object.assign({}, state, {
        data: action.data,
        receivedAt: action.receivedAt
      })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  monthlySnowData
})

export default rootReducer
