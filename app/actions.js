import fetch from 'isomorphic-fetch'

export const FORECAST_REQUEST = 'FORECAST_REQUEST'
export const FORECAST_RESPONSE_SUCCESS = 'FORECAST_RESPONSE_SUCCESS'
export const FORECAST_RESPONSE_ERROR = 'FORECAST_RESPONSE_ERROR'

const API_GET_FORECAST = 'http://sjovaderprognos.herokuapp.com/Sjovaderprognos?json'
const EMPTY_FORECAST = 'Prognos saknas'

export function fetchForecast () {
  return dispatch => {
    dispatch({ type: FORECAST_REQUEST })

    fetch(API_GET_FORECAST).then(response => {
      response.json().then(responseData => {
        if (response.ok) {
          dispatch({
            type: FORECAST_RESPONSE_SUCCESS,
            payload: responseData.filter(
              f => f && f.forecast !== EMPTY_FORECAST
            )
          })
        } else {
          dispatch({ type: FORECAST_RESPONSE_ERROR, payload: response })
        }
      })
    }, error => {
      dispatch({ type: FORECAST_RESPONSE_ERROR, payload: error })
    })
  }
}
