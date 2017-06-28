import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ForecastListItem = ({ name }) => {
  return (
    <View style={styles.forecastWrapper}>
      <Text style={styles.forecast}>{name}</Text>
    </View>
  )
}

export default ForecastListItem

const styles = StyleSheet.create({
  forecastWrapper: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 15,
    marginRight: 15
  },
  forecast: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Light'
  }
})
