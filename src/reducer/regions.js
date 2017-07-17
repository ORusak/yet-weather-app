/**
 * Created by Oleg Rusak on 15.07.2017.
 */

const REQUEST_REGIONS = 'yet-weather-app/regions/REQUEST_REGIONS'
const RECEIVE_REGIONS = 'yet-weather-app/regions/RECEIVE_REGIONS'

export default function reducer (state = {
  isFetching: false
}, action) {

  switch (action.type) {
    case REQUEST_REGIONS:
      return { ...state, isFetching: true }

    case RECEIVE_REGIONS:
      return { ...state, ...action.regions, isFetching: false, lastUpdated: action.receivedAt }

    default:
      return state
  }
}

function requestRegions () {
  return { type: REQUEST_REGIONS }
}

function receiveRegions (data) {
  return {
    type: RECEIVE_REGIONS,
    regions: data,
    receivedAt: Date.now()
  }
}

export function fetchRegions () {

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestRegions())

    return fetch(`data/weather-forecast.json`)
      .then(
        response => response.json(),

        error => console.log('An error occured.', error)
      )
      .then(json =>

        dispatch(receiveRegions(json))
      )
  }
}
