import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from './actions'

import ForecastList from './ForecastList'

class ForecastListContainer extends React.Component {
  componentWillMount () {
    this.props.fetchForecast()
  }

  render () {
    const { forecasts } = this.props

    return <ForecastList forecasts={forecasts} />
  }
}

const mapStateToProps = state => ({ forecasts: state })

export default connect(mapStateToProps, actionCreators)(ForecastListContainer)
