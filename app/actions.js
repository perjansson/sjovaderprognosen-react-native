import fetch from 'isomorphic-fetch'

export function fetchForecast () {
  console.log('fetchForecast')
  return dispatch => {
    console.log('dispatch request')
    dispatch({ type: 'FORECAST_REQUEST' })
    fetch(
      'http://sjovaderprognos.herokuapp.com/Sjovaderprognos?json'
    ).then(response => {
      const ok = response.ok
      response.json().then(responseData => {
        if (ok) {
          dispatch({
            type: 'FORECAST_RESPONSE_SUCCESS',
            payload: responseData
          })
        } else {
          dispatch({ type: 'FORECAST_RESPONSE_ERROR', payload: response })
        }
      })
    }, err => {
      console.log('dispatch error', err)
      dispatch({ type: 'FORECAST_RESPONSE_ERROR', payload: err })
    })
  }
}
