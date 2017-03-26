import fetch from 'isomorphic-fetch'

export const GET_LOCATIONS = 'GET_LOCATIONS'

function receiveLocations(locations_json){
  console.log('hit receive locations action')
  return {
    type: GET_LOCATIONS,
    locations: locations_json,
    receivedAt: Date.now()
  }
}

export function fetchLocations() {
  console.log('hit fetch function')
  return (dispatch, getState) => {
    return fetch(`http://localhost:8000/api/locations`)
      .then(response => response.json())
      .then(json => dispatch(receiveLocations(json)))
  }
}
