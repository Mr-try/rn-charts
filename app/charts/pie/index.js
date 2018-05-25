import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

export default class Pie extends PureComponent {
  render() {
    return (
      <View style={styles.container}><Text>环形图</Text></View>
    )
  }
}