import React from 'react'
import { StyleSheet, ListView } from 'react-native'

import ForecastListItem from './ForecastListItem'

class ForecastList extends React.Component {
  constructor (props) {
    super()
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = { dataSource: ds.cloneWithRows(props.forecasts) }
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
  forecastList: {
    flex: 1,
    alignSelf: 'stretch',
    paddingTop: 25
  }
})
