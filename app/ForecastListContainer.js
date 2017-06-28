import React from 'react'
import { connect } from 'react-redux'

import ForecastList from './ForecastList'

class ForecastListContainer extends React.Component {
  render () {
    return (
      <ForecastList {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  forecasts: state
})

export default connect(mapStateToProps)(ForecastListContainer)
