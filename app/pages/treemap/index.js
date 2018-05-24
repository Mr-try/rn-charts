import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

class Treemap extends Component {
  static navigationOptions = {
    title: '集装箱图',
  }
  render() {
    return (
      <View style={styles.container}><Text>集装箱图</Text></View>
    )
  }
}


export default Treemap
