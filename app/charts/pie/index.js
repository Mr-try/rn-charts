import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import Legent from '../common/legend'

export default class Pie extends PureComponent {
  render() {
    console.log(123123, Legent)
    const {width, height, option} = this.props
    const {name, legend, charts } = option
    const {position} = legend
    const {type, radius, label, data} = charts
    // const option = {
    //   charts: {
    //     type: 'pie',
    //     radius: 1,
    //     label: true,
    //     data: [
    //       {value: 100, name: '类型1'},
    //       {value: 200, name: '类型2'},
    //       {value: 300, name: '类型3'},
    //       {value: 400, name: '类型4'},
    //       {value: 500, name: '类型5'}
    //     ]
    //   }
    // }
    return (
      <View style={{...styles.container, width, height}}>
        <Text>{name}</Text>
        <View style={{...styles.legentWrap}}><Legent legend={legend}/></View>
        <View>
          这里是图
        </View>
      </View>
    )
  }
}