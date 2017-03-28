import fetch from 'isomorphic-fetch'

export const GET_LOCATION_MONTHLY_SNOW = 'GET_LOCATION_MONTHLY_SNOW'
export const GET_LOCATIONS = 'GET_LOCATIONS'

function receiveMonthlySnow(monthlySnowJSON){
  return{
    type: GET_LOCATION_MONTHLY_SNOW,
    data: monthlySnowJSON,
    receivedAt: Date.now()
  }
}

export function fetchMonthlySnowData(year,month){
  return (dispatch, getState) => {
    return fetch('http://localhost:8000/api/monthlySnowData/' + year + '/' + month)
      .then(response => response.json())
      .then(json => dispatch(receiveMonthlySnow(json)))
  }
}
