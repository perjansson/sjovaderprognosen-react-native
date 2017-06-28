import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Header = () => <Text style={styles.header}>Sjöväderprognosen</Text>

export default Header

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Light'
  }
})
