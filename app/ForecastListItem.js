import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ForecastListItem = ({ areaName, time }) => {
  const { wrapper, forecast, lastUpdated } = styles

  return (
    <View style={wrapper}>
      <Text style={forecast}>{areaName}</Text>
      <Text style={lastUpdated}>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  forecast: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Light',
    fontWeight: '500'
  },
  lastUpdated: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Light',
    fontWeight: '200',
    color: 'gray'
  }
})

export default ForecastListItem
