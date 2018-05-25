import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

class Line extends Component {
  static navigationOptions = {
    title: '折线图',
  }
  render() {
    return (
      <View style={styles.container}><Text>折线图</Text></View>
    )
  }
}


export default Line
