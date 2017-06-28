import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './app/reducer'

import Header from './app/Header'
import ForecastListContainer from './app/ForecastListContainer'

const store = createStore(reducer)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <ForecastListContainer />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center'
  }
})
