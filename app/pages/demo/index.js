import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import { Pie, Pie2, Bar, Funnel, Line, Radar, Treemap } from 'charts'
import styles from './style'

class Charts extends Component {
  static navigationOptions = {
    title: 'demo',
  }
  constructor(props) {
    super(props)
    this.type = this.props.navigation.state.params.type
  }
  // 环形图
  renderPie() {
    return (<Pie />)
  }
  // 饼状图
  renderPie2() {
    return (
      <Pie2 />
    )
  } // 柱状图
  renderBar() {
    return (
      <Bar />
    )
  } // 折线图
  renderLine() {
    return (
      <Line />
    )
  } // 雷达图
  renderRadar() {
    return (
      <Radar />
    )
  } // 集装箱图
  renderTreemap() {
    return (
      <Treemap />
    )
  } // 漏斗图
  renderFunnel() {
    return (
      <Funnel />
    )
  } 

  // 绘制图表
  renderCharts(type) {
    switch (type) {
      case 'Bar': return this.renderBar()
      case 'Pie': return this.renderPie()
      case 'Pie2': return this.renderPie2()
      case 'Line': return this.renderLine()
      case 'Radar': return this.renderRadar()
      case 'Funnel': return this.renderFunnel()
      case 'Treemap': return this.renderTreemap()
      default: return null
    }
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.renderCharts(this.type)}</Text>
      </ScrollView>
    )
  }
}


export default Charts