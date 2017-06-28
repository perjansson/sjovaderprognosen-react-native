const defaultForecasts = [
  {
    name: 'Forecast 1'
  },
  {
    name: 'Forecast 2'
  },
  {
    name: 'Forecast 3'
  },
  {
    name: 'Forecast 4'
  }
]
const forecasts = (state = defaultForecasts, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESET':
      return 0
    default:
      return state
  }
}

export default forecasts
