import fetch from 'isomorphic-fetch'

export const GET_LOCATIONS = 'GET_LOCATIONS'
export const GET_LOCATION_MONTHLY_SNOW = 'GET_LOCATION_MONTHLY_SNOW'

function receiveLocations(locationsJSON){
  return {
    type: GET_LOCATIONS,
    locations: locationsJSON,
    receivedAt: Date.now()
  }
}

function receiveMonthlySnow(monthlySnowJSON){
  return{
    type: GET_LOCATION_MONTHLY_SNOW,
    data: monthlySnowData,
    receivedAt: Date.now()
  }
}

export function fetchMontlySnowData(stationID,year){
  return (dispatch, getState) => {
    return fetch('http://localhost:8000/api/${stationID}/${year}')
      .then(response => response.json())
      .then(json => dispatch(receiveMonthlySnow(json)))
  }
}

export function fetchLocations() {
  return (dispatch, getState) => {
    return fetch('http://localhost:8000/api/locations')
      .then(response => response.json())
      .then(json => dispatch(receiveLocations(json)))
  }
}
