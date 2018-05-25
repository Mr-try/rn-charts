import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

class Bar extends Component {
  static navigationOptions = {
    title: '柱状图',
  }
  render() {
    return (
      <View style={styles.container}><Text>柱状图</Text></View>
    )
  }
}


export default Bar
