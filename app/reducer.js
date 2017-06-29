import {
  FORECAST_REQUEST,
  FORECAST_RESPONSE_SUCCESS,
  FORECAST_RESPONSE_ERROR
} from './actions'

const defaultForecasts = { isLoading: false, data: [] }
const forecasts = (state = defaultForecasts, action) => {
  const { type, payload } = action

  switch (type) {
    case FORECAST_REQUEST:
      return { isLoading: true, data: null, error: null }

    case FORECAST_RESPONSE_SUCCESS:
      return { isLoading: false, data: payload, error: null }

    case FORECAST_RESPONSE_ERROR:
      return { isLoading: false, data: null, error: payload }

    default:
      return state
  }
}

export default forecasts
