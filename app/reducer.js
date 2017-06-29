const defaultForecasts = []
const forecasts = (state = defaultForecasts, action) => {
  const { type, payload } = action
  switch (type) {
    case 'FORECAST_RESPONSE_SUCCESS':
      return payload
    case 'FORECAST_RESPONSE_ERROR':
      return []
    default:
      return state
  }
}

export default forecasts
