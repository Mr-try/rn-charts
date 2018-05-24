import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

class Pie2 extends Component {
  static navigationOptions = {
    title: '饼状图',
  }
  render() {
    return (
      <View style={styles.container}><Text>饼状图</Text></View>
    )
  }
}


export default Pie2
