import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

class Radar extends Component {
  static navigationOptions = {
    title: '雷达图',
  }
  render() {
    return (
      <View style={styles.container}><Text>雷达图</Text></View>
    )
  }
}


export default Radar
