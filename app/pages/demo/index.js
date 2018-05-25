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
    const option = {
      name: '环形图',      
      legend: {
        type: 'circle',
        orient: 'vertical',
        x: 'left',
        data: ['类型1', '类型2', '类型3', '类型4', '类型5']
      },
      charts: {
        type: 'pie',
        radius: 1,
        label: {show: true},
        data: [
          {value: 100, name: '类型1'},
          {value: 200, name: '类型2'},
          {value: 300, name: '类型3'},
          {value: 400, name: '类型4'},
          {value: 500, name: '类型5'}
        ]
      }
    }
    return (<Pie option={option} width={300} height={200}/>)
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