import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

export default class Legent extends PureComponent {
  // 方位[四个定点(leftTop leftBottom rightTop rightBottom),四条边中间(left right top bottom)]
  render() {
    return (
      <View style={styles.container}><Text>图例</Text></View>
    )
  }
}