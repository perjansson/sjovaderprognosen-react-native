import React from 'react'
import { StyleSheet, ListView } from 'react-native'

import ForecastListItem from './ForecastListItem'

class ForecastList extends React.Component {
  componentWillMount () {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    }
  }

  componentWillReceiveProps (nextProps) {
    const { forecasts } = nextProps
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(forecasts),
      loaded: true
    })
  }

  render () {
    return (
      <ListView
        style={styles.forecastList}
        dataSource={this.state.dataSource}
        renderRow={forecast => <ForecastListItem {...forecast} />}
      />
    )
  }
}

export default ForecastList

const styles = StyleSheet.create({
  forecastList: { flex: 1, alignSelf: 'stretch', paddingTop: 25 }
})
