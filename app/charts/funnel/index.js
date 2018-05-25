import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

class Funnel extends Component {
  static navigationOptions = {
    title: '漏斗图',
  }
  render() {
    return (
      <View style={styles.container}><Text>漏斗图</Text></View>
    )
  }
}


export default Funnel
