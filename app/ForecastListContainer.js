import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from './actions'

import { ActivityIndicator } from 'react-native'
import ForecastList from './ForecastList'

class ForecastListContainer extends React.Component {
  componentWillMount () {
    this.props.fetchForecast()
  }

  render () {
    const { isLoading, data } = this.props.forecasts

    return isLoading
      ? <ActivityIndicator
        size='large'
        animating
        style={{ flex: 1, marginTop: -100 }}
      />
      : <ForecastList forecasts={data} />
  }
}

const mapStateToProps = state => ({ forecasts: state })

export default connect(mapStateToProps, actionCreators)(ForecastListContainer)
