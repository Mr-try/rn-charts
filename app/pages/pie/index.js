import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

class Pie extends Component {
  static navigationOptions = {
    title: '环形图',
  }
  render() {
    return (
      <View style={styles.container}><Text>环形图</Text></View>
    )
  }
}


export default Pie
